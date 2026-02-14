import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const COSTS = [
  { category: 'Housing (Rent)', single: '800 - 1,500', couple: '1,100 - 2,200', family: '1,500 - 3,500', note: 'Varies significantly by location; Palma highest' },
  { category: 'Groceries & Food', single: '250 - 400', couple: '400 - 650', family: '600 - 1,000', note: 'Local markets offer best value' },
  { category: 'Utilities (Elec/Water/Gas)', single: '80 - 150', couple: '100 - 200', family: '150 - 300', note: 'Higher in summer due to A/C' },
  { category: 'Internet & Phone', single: '40 - 60', couple: '40 - 60', family: '50 - 80', note: 'Fiber available in most areas' },
  { category: 'Transport', single: '100 - 250', couple: '150 - 350', family: '200 - 450', note: 'Car essential outside Palma' },
  { category: 'Healthcare', single: '60 - 200', couple: '120 - 400', family: '200 - 600', note: 'Private insurance recommended' },
  { category: 'Dining & Leisure', single: '200 - 500', couple: '350 - 800', family: '400 - 900', note: 'Wide range of price points' },
  { category: 'Miscellaneous', single: '100 - 200', couple: '150 - 300', family: '200 - 400', note: 'Clothing, personal, household' },
];

const FAQ_ITEMS = [
  { q: 'Is Mallorca expensive to live in?', a: 'Mallorca is more affordable than major European cities like London, Munich, or Paris, but more expensive than mainland Spain. Monthly costs for a couple range from 2,400 to 5,000 EUR depending on location and lifestyle. Palma is the most expensive area; rural towns and the east coast offer better value.' },
  { q: 'How much does rent cost in Mallorca per month?', a: 'Long-term rental prices vary by area: Palma apartments from 1,200/month, Pollensa/Soller from 1,000/month, and Cala d\'Or/Alcudia from 850/month. Furnished properties and those with sea views command a 20-40% premium.' },
  { q: 'Is Mallorca cheaper than Ibiza?', a: 'Yes. Mallorca is generally 20-30% cheaper than Ibiza for both property and daily living costs. Mallorca also offers more diversity in price points, from affordable interior towns to luxury coastal areas.' },
  { q: 'What are the healthcare costs in Mallorca?', a: 'EU citizens can access public healthcare with a European Health Insurance Card. Private health insurance for full coverage costs 60-200 EUR/month per person. Mallorca has excellent hospitals including Son Espases and Quironsalud in Palma.' },
  { q: 'Do I need a car in Mallorca?', a: 'In Palma, you can live comfortably without a car using buses and cycling. Outside Palma, a car is strongly recommended. Fuel costs approximately 100-150 EUR/month for regular use. Public bus routes connect major towns but are limited in frequency.' },
];

export default function CostOfLiving() {
  return (
    <>
      <SEOHead
        title="Cost of Living in Mallorca 2026: Monthly Expenses Guide"
        description="Detailed cost of living breakdown for Mallorca in 2026. Rent, groceries, utilities, transport, healthcare, and lifestyle costs for expats and families."
        canonical="/guides/cost-of-living-mallorca"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="Cost of Living" parent={{ label: 'Guides', path: '/guides/expat-guide-mallorca' }} />
          <h1 className="max-w-3xl mb-4">Cost of Living in Mallorca 2026</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            Detailed monthly expense breakdown for singles, couples, and families living
            in Mallorca. Rent, groceries, utilities, healthcare, transport, and lifestyle costs.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">Monthly Cost Breakdown (EUR)</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Category</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Single</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Couple</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Family (4)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COSTS.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.category}</td>
                          <td className="px-4 py-3 text-gray-700">{row.single}</td>
                          <td className="px-4 py-3 text-gray-700">{row.couple}</td>
                          <td className="px-4 py-3 text-gray-700">{row.family}</td>
                        </tr>
                      ))}
                      <tr className="bg-sea-50 font-bold">
                        <td className="px-4 py-3 text-sea-800">Total Estimate</td>
                        <td className="px-4 py-3 text-sea-800">1,630 - 3,260</td>
                        <td className="px-4 py-3 text-sea-800">2,410 - 4,960</td>
                        <td className="px-4 py-3 text-sea-800">3,300 - 7,230</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Estimates based on moderate lifestyle in a mid-range area. Palma costs are at the higher end; rural and east coast areas at the lower end.</p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Housing Costs by Location</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Rent is typically the largest monthly expense in Mallorca. Prices vary dramatically
                  by location, with Palma commanding the highest rents due to demand, amenities, and
                  job proximity. Here is a comparison of average monthly rents for a 2-bedroom
                  furnished apartment across key locations:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { name: 'Palma (Center)', rent: '1,500 - 2,500' },
                    { name: 'Palma (Suburbs)', rent: '1,100 - 1,800' },
                    { name: 'Pollensa / Alcudia', rent: '1,000 - 1,600' },
                    { name: 'Soller', rent: '1,100 - 1,700' },
                    { name: 'Santa Ponsa', rent: '1,000 - 1,600' },
                    { name: "Cala d'Or", rent: '850 - 1,400' },
                  ].map((loc) => (
                    <div key={loc.name} className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-3">
                      <span className="text-sm font-medium text-gray-800">{loc.name}</span>
                      <span className="text-sm text-sea-600 font-semibold">{loc.rent}/mo</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Rent vs. Buy: Which Makes Sense?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For those planning to stay in Mallorca longer than 3-5 years, buying often makes
                  more financial sense than renting. With property prices appreciating 3-8% annually
                  and mortgage rates at 2-4% for non-residents, ownership builds equity while renting
                  does not. However, renting first for 6-12 months is strongly recommended to test your
                  preferred area before committing.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/rentals/long-term" className="text-aqua-600 text-sm font-medium hover:underline flex items-center gap-1">
                    Browse long-term rentals <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/sales/villas" className="text-aqua-600 text-sm font-medium hover:underline flex items-center gap-1">
                    Browse villas for sale <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Tips for Reducing Costs</h2>
                <ul className="space-y-3">
                  {[
                    'Shop at local markets (Mercat de Santa Catalina, Mercat de l\'Olivar) rather than supermarkets for fresh produce at lower prices.',
                    'Consider areas outside Palma where rents are 20-40% lower while still offering good amenities and beach access.',
                    'Install solar panels if you own property -- Mallorca\'s sunshine reduces electricity bills by 60-80%.',
                    'Use the interurban bus network (TIB) for travel between towns rather than relying exclusively on a car.',
                    'Join expat community groups for tips on affordable services, tradespeople, and local deals.',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="w-5 h-5 bg-forest-50 text-forest-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Home</h3>
                  <p className="text-gray-500 text-sm mb-4">Rent or buy in Mallorca</p>
                  <MatchingForm sourcePage="/guides/cost-of-living-mallorca" defaultType="long-term" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Make the Move to Mallorca?" subtext="Start with a short-term rental to test your preferred area. We match you with 3 options in 24 hours." variant="aqua" />
    </>
  );
}
