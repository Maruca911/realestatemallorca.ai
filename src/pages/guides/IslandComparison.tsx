import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, X } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const COMPARISON_DATA = [
  { category: 'Population', mallorca: '920,000+', ibiza: '155,000', menorca: '95,000' },
  { category: 'Airport Connections', mallorca: '180+ direct routes', ibiza: '90+ routes (seasonal)', menorca: '40+ routes (seasonal)' },
  { category: 'Avg Apartment Price', mallorca: '3,500/m2', ibiza: '5,000/m2', menorca: '2,800/m2' },
  { category: 'Avg Villa Price', mallorca: '1.2M EUR', ibiza: '2.5M EUR', menorca: '800k EUR' },
  { category: 'Rental Yield (STR)', mallorca: '5-8%', ibiza: '4-7%', menorca: '4-6%' },
  { category: 'Tourist Season', mallorca: 'Apr-Oct (year-round in Palma)', ibiza: 'May-Sep', menorca: 'Jun-Sep' },
  { category: 'International Schools', mallorca: '15+', ibiza: '3-4', menorca: '1' },
  { category: 'Major Hospitals', mallorca: '4+', ibiza: '1', menorca: '1' },
  { category: 'Winter Activity', mallorca: 'High (Palma is year-round)', ibiza: 'Moderate', menorca: 'Low' },
];

const PROS_CONS = {
  mallorca: {
    pros: ['Largest market with most choice', 'Year-round infrastructure in Palma', 'Best international schools and healthcare', 'Diverse landscapes: mountains, beaches, plains', 'Strongest rental demand year-round', 'Most flight connections globally'],
    cons: ['Higher competition for prime properties', 'Tourist-heavy areas in summer', 'Stricter short-term rental regulations', 'Some areas feel overdeveloped'],
  },
  ibiza: {
    pros: ['Strong brand premium on resale', 'Very high summer rental yields', 'Vibrant lifestyle and nightlife scene', 'Global recognition drives demand'],
    cons: ['Most expensive per m2 in Balearics', 'Extremely seasonal (6-month economy)', 'Limited infrastructure and services', 'Very restrictive rental licensing', 'Smaller property market with less choice'],
  },
  menorca: {
    pros: ['Lowest entry prices in Balearics', 'UNESCO Biosphere Reserve status', 'Least developed and most natural', 'Growing tourism with upside potential'],
    cons: ['Shortest tourist season', 'Fewest flight connections', 'Limited international community', 'Fewer rental income opportunities', 'Minimal year-round infrastructure'],
  },
};

const FAQ_ITEMS = [
  { q: 'Which Balearic island has the best property investment return?', a: 'Mallorca offers the best risk-adjusted returns due to its year-round economy, diverse property market, and strongest rental demand. Ibiza offers higher per-night rental rates but a shorter season and much higher entry costs. Menorca has the lowest prices but also the shortest season and fewest tenants. For most investors, Mallorca provides the optimal balance.' },
  { q: 'Is Ibiza more expensive than Mallorca for property?', a: 'Yes. Average prices per square meter in Ibiza are 30-50% higher than comparable Mallorca locations. A villa that costs 1.5M EUR in a prime Mallorca location would likely cost 2.5-4M EUR in a comparable Ibiza location. Ibiza\'s higher brand premium is offset by a shorter rental season and smaller market.' },
  { q: 'Can I buy property on multiple Balearic islands?', a: 'Yes. There are no restrictions on owning property across islands. Some investors diversify by buying a year-round apartment in Palma (Mallorca) and a summer rental property in Ibiza or Menorca. Each property is subject to the same purchase costs and tax obligations regardless of which island.' },
  { q: 'Which island is best for families?', a: 'Mallorca is the clear choice for families due to its 15+ international schools, 4 major hospitals, year-round activities, and large international community. Ibiza has a few international schools but limited options. Menorca is excellent for summer family holidays but has minimal international school infrastructure.' },
  { q: 'Where should I invest if I want short-term rental income?', a: 'Mallorca offers the longest rental season (8-10 months in Palma, 6-7 months in coastal areas) and highest occupancy rates. Ibiza has the highest nightly rates but only 4-5 months of strong demand. Menorca has the shortest viable rental season at 3-4 months. All islands have licensing requirements that must be met.' },
];

export default function IslandComparison() {
  return (
    <>
      <SEOHead
        title="Mallorca vs Ibiza vs Menorca: Property Investment Comparison 2026"
        description="Compare Mallorca, Ibiza, and Menorca for property investment. Prices, rental yields, lifestyle, infrastructure, and ROI analysis. Which Balearic island is best?"
        canonical="/guides/mallorca-vs-ibiza-menorca-investment"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="Island Comparison" />
          <h1 className="max-w-3xl mb-4">Mallorca vs Ibiza vs Menorca: Property Investment Compared</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            A data-driven comparison of the three Balearic Islands for property buyers and investors.
            Prices, rental yields, infrastructure, lifestyle, and long-term value.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The Balearic Islands -- Mallorca, Ibiza, Menorca, and Formentera -- are among Europe's
                  most desirable property markets. Each island has a distinct character, price point, and
                  investment profile. This guide compares the three main islands across the factors that
                  matter most to property buyers: prices, rental yields, infrastructure, lifestyle, and
                  long-term appreciation potential.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  While all three islands share the Mediterranean climate and Balearic charm, the differences
                  in scale, infrastructure, and seasonality create significantly different investment profiles.
                  Mallorca, as the largest island, offers the most diverse market and year-round economy.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Side-by-Side Comparison</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Factor</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Mallorca</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Ibiza</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Menorca</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COMPARISON_DATA.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                          <td className="px-4 py-3 text-gray-700">{row.mallorca}</td>
                          <td className="px-4 py-3 text-gray-700">{row.ibiza}</td>
                          <td className="px-4 py-3 text-gray-700">{row.menorca}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-6">Pros and Cons</h2>
                <div className="space-y-6">
                  {[
                    { name: 'Mallorca', data: PROS_CONS.mallorca, color: 'sea' },
                    { name: 'Ibiza', data: PROS_CONS.ibiza, color: 'aqua' },
                    { name: 'Menorca', data: PROS_CONS.menorca, color: 'forest' },
                  ].map((island) => (
                    <div key={island.name} className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className={`px-5 py-3 bg-${island.color}-50 border-b border-gray-200`}>
                        <h3 className="font-bold text-gray-900">{island.name}</h3>
                      </div>
                      <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                        <div className="p-5">
                          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Advantages</h4>
                          <div className="space-y-2">
                            {island.data.pros.map((pro, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0 mt-0.5" />
                                {pro}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="p-5">
                          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-semibold">Considerations</h4>
                          <div className="space-y-2">
                            {island.data.cons.map((con, i) => (
                              <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                <X className="w-4 h-4 text-coral-500 flex-shrink-0 mt-0.5" />
                                {con}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Investment Verdict</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                    <h3 className="font-bold text-sea-800 mb-2">Best All-Round</h3>
                    <p className="text-sm text-gray-600 mb-2">Mallorca</p>
                    <p className="text-xs text-gray-500">Largest market, year-round economy, best infrastructure, diverse property types. Ideal for both lifestyle and investment buyers.</p>
                  </div>
                  <div className="bg-aqua-50 rounded-xl p-5 border border-aqua-100">
                    <h3 className="font-bold text-sea-800 mb-2">Highest Per-Night Rates</h3>
                    <p className="text-sm text-gray-600 mb-2">Ibiza</p>
                    <p className="text-xs text-gray-500">Premium brand commands highest nightly rates, but shorter season and highest entry costs limit overall returns.</p>
                  </div>
                  <div className="bg-forest-50 rounded-xl p-5 border border-forest-200">
                    <h3 className="font-bold text-sea-800 mb-2">Best Value Entry</h3>
                    <p className="text-sm text-gray-600 mb-2">Menorca</p>
                    <p className="text-xs text-gray-500">Lowest prices and growing tourism market offer upside potential, but limited season and infrastructure constrain rental income.</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Invest in Mallorca</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/guides/mallorca-vs-ibiza-menorca-investment" defaultType="investment" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Guides</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Investment Properties', path: '/investments' },
                      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
                      { label: 'ETV License Guide', path: '/guides/etv-license-mallorca' },
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
                      { label: 'Cost of Living', path: '/guides/cost-of-living-mallorca' },
                    ].map((g) => (
                      <Link key={g.path} to={g.path} className="flex items-center gap-2 text-sm text-sea-600 hover:text-sea-700 font-medium">
                        <ArrowRight className="w-3 h-3" /> {g.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Invest in Mallorca Property?" subtext="Share your investment criteria and receive 3 matched property options within 24 hours." />
    </>
  );
}
