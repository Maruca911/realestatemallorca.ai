import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface InlineFAQProps {
  items: { q: string; a: string }[];
  schema?: boolean;
}

export default function InlineFAQ({ items, schema = true }: InlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = schema ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  } : null;

  return (
    <div>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-start justify-between gap-4 p-4 text-left hover:bg-gray-50 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-semibold text-gray-900 text-sm leading-snug">{item.q}</span>
              <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            {openIndex === i && (
              <div className="px-4 pb-4 animate-fade-in">
                <p className="text-gray-600 text-sm leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
