import { supabase } from '../supabase';
import { LanguageCode } from './config';

const translationCache: Map<string, Record<string, string>> = new Map();
let cacheTimestamp = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function loadTranslations(languageCode: LanguageCode): Promise<Record<string, string>> {
  const now = Date.now();
  const cacheKey = `translations_${languageCode}`;

  // Return cached translations if still valid
  if (translationCache.has(cacheKey) && now - cacheTimestamp < CACHE_DURATION) {
    return translationCache.get(cacheKey) || {};
  }

  try {
    const { data, error } = await supabase
      .from('translations')
      .select('translation_key, value')
      .eq('language_code', languageCode);

    if (error) {
      console.error('Error loading translations:', error);
      return {};
    }

    const translations: Record<string, string> = {};
    data?.forEach(row => {
      translations[row.translation_key] = row.value;
    });

    translationCache.set(cacheKey, translations);
    cacheTimestamp = now;

    return translations;
  } catch (err) {
    console.error('Failed to load translations:', err);
    return {};
  }
}

export function clearTranslationCache(): void {
  translationCache.clear();
  cacheTimestamp = 0;
}

export async function upsertTranslation(
  languageCode: LanguageCode,
  translationKey: string,
  value: string,
  context?: string
): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('translations')
      .upsert(
        {
          language_code: languageCode,
          translation_key: translationKey,
          value,
          context,
        },
        { onConflict: 'language_code,translation_key' }
      );

    if (error) {
      console.error('Error upserting translation:', error);
      return false;
    }

    clearTranslationCache();
    return true;
  } catch (err) {
    console.error('Failed to upsert translation:', err);
    return false;
  }
}
