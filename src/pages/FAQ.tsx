import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';
import { FAQ_DATA, FAQ_CATEGORIES } from '../data/faqData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const filteredFAQs = activeCategory === 'All'
    ? FAQ_DATA
    : FAQ_DATA.filter((f) => f.category === activeCategory);

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_DATA.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEOHead
        title="Real Estate Mallorca FAQ - Buying, Renting & Investing Questions Answered"
        description="50 expert-answered questions about buying property in Mallorca, short-term rental regulations, costs and taxes, investment returns, mortgages, and more."
        canonical="/faq"
        schema={faqSchema}
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="max-w-3xl mb-4">Real Estate Mallorca FAQ &mdash; Your Questions Answered</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            50 expert-answered questions about buying property, renting short and long term,
            investing, taxes, legal requirements, and living in Mallorca.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'All'
                  ? 'bg-sea-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({FAQ_DATA.length})
            </button>
            {FAQ_CATEGORIES.map((cat) => {
              const count = FAQ_DATA.filter((f) => f.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? 'bg-sea-500 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat} ({count})
                </button>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {filteredFAQs.map((faq) => {
              const isOpen = openIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  id={`faq-${faq.id}`}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-gray-900 text-sm md:text-base leading-snug">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 animate-fade-in">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      <span className="inline-block mt-3 text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">
                        {faq.category}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredFAQs.length === 0 && (
            <p className="text-center text-gray-500 py-12">No questions found in this category.</p>
          )}
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max text-center">
          <h2 className="text-sea-800 mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Submit your property preferences and our local experts will answer your
            specific questions while matching you with the right options.
          </p>
          <Link to="/signup" className="btn-cta">
            Get Matched Free
          </Link>
        </div>
      </section>

      <CTABanner
        heading="Looking for Short-Term Rentals in Mallorca?"
        subtext="Get 3 hand-picked vacation rental options delivered to your inbox within 24 hours."
        variant="aqua"
      />
    </>
  );
}
