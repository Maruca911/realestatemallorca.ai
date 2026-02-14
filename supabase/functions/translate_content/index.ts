import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface TranslationRequest {
  key: string;
  text: string;
  languages: string[];
  context?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { key, text, languages, context } = (await req.json()) as TranslationRequest;

    if (!key || !text || !languages || languages.length === 0) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: key, text, languages" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !supabaseKey) {
      return new Response(
        JSON.stringify({ error: "Supabase configuration missing" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const translations: Record<string, string> = { en: text };

    for (const lang of languages) {
      if (lang === "en") continue;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Deno.env.get("OPENAI_API_KEY")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are a professional website translator. Translate the given text to the target language. Provide only the translation, nothing else.",
            },
            {
              role: "user",
              content: `Translate this to ${getLangName(lang)}: "${text}"`,
            },
          ],
          temperature: 0.7,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        console.error(`Translation failed for ${lang}`);
        continue;
      }

      const data = await response.json() as { choices: { message: { content: string } }[] };
      translations[lang] = data.choices[0]?.message?.content || text;
    }

    const { createClient } = await import("npm:@supabase/supabase-js@2.57.4");
    const supabase = createClient(supabaseUrl, supabaseKey);

    const records = Object.entries(translations).map(([lang, value]) => ({
      language_code: lang,
      translation_key: key,
      value,
      context,
    }));

    const { error } = await supabase.from("translations").upsert(records, {
      onConflict: "language_code,translation_key",
    });

    if (error) {
      return new Response(
        JSON.stringify({ error: error.message }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, translations }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Translation error:", error);
    return new Response(
      JSON.stringify({ error: String(error) }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

function getLangName(code: string): string {
  const names: Record<string, string> = {
    de: "German",
    es: "Spanish",
    fr: "French",
    nl: "Dutch",
    it: "Italian",
    sv: "Swedish",
    no: "Norwegian",
    da: "Danish",
    pl: "Polish",
    ru: "Russian",
    ar: "Arabic",
  };
  return names[code] || code;
}
