import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, Shield, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';
import LocationCard from '../components/LocationCard';
import MatchingForm from '../components/MatchingForm';
import InlineFAQ from '../components/InlineFAQ';
import { LOCATIONS } from '../data/locations';

const FAQ_ITEMS = [
  { q: 'What rental yields can I expect from Mallorca property?', a: 'Rental yields in Mallorca range from 3-7% gross depending on location and property type. Tourist-area apartments and villas with valid ETV licenses generate the highest returns at 5-7%. Long-term rentals in Palma yield 4-6%. Premium locations like Andratx offer lower yields (3-5%) but stronger capital appreciation.' },
  { q: 'Is Mallorca real estate a good investment in 2026?', a: 'Mallorca property continues to perform well, with 3-5% overall growth forecast for 2026 and premium areas seeing 5-8% appreciation. Key drivers include sustained international demand, limited supply due to building restrictions, and strong tourism infrastructure supporting rental income.' },
  { q: 'Can I get a Golden Visa through Mallorca property investment?', a: 'The Spanish Golden Visa program has historically granted residency to non-EU investors purchasing property worth 500,000 EUR or more. However, Spain has announced legislative intent to end this program for real estate investments. Verify current status with an immigration lawyer before relying on this route.' },
  { q: 'What are the tax implications of investing in Mallorca property?', a: 'Non-resident investors pay annual imputed income tax (19-24% on 1.1-2% of cadastral value), IBI property tax (0.4-1.1% of cadastral value), and rental income tax (19-24%) on actual rental earnings. Capital gains on sale are taxed at 19% flat for non-residents. See our property taxes guide for full details.' },
  { q: 'Do I need an ETV license to rent out my investment property?', a: 'Yes, for short-term tourist rentals (under 31 days). Properties without a valid ETV license cannot legally accept tourist guests, with fines of 20,000-40,000 EUR for first offenses. New apartment licenses are largely suspended, so properties with existing licenses command a 15-25% premium.' },
  { q: 'What is the best property type for investment in Mallorca?', a: 'Apartments in tourist areas offer the best yield-to-price ratio. Licensed villas generate higher absolute income but require more capital. New-build developments offer modern efficiency and warranties but at premium per-square-meter prices. The best choice depends on your budget, risk tolerance, and involvement level.' },
];

const INVESTMENT_LOCATIONS = ['palma', 'pollensa', 'andratx', 'soller', 'cala-dor'];
const INVESTMENT_DATA = LOCATIONS.filter((l) => INVESTMENT_LOCATIONS.includes(l.slug));

export default function Investments() {
  return (
    <>
      <SEOHead
        title="Mallorca Property Investment - Buy-to-Let & Capital Growth"
        description="Invest in Mallorca real estate. 4-7% rental yields, 5-8% appreciation in premium areas. Investment villas, apartments, and fincas. Golden Visa eligible properties."
        canonical="/investments"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Investment property Mallorca luxury villa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/85 to-sea-900/50" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Investments</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Mallorca Property Investment &mdash; Strong Returns in the Mediterranean</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Mallorca offers 4-7% rental yields and 5-8% annual appreciation in premium areas.
            Discover investment properties from buy-to-let apartments to luxury villas with
            Golden Visa eligibility.
          </p>
          <Link to="/signup" className="btn-cta">Match Investment Properties <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="bg-white border-b border-gray-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '4-7%', label: 'Rental Yields' },
              { value: '5-8%', label: 'Annual Appreciation' },
              { value: '500k+', label: 'Golden Visa Threshold' },
              { value: '3-5%', label: '2026 Growth Forecast' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-sea-800 font-heading">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Investment Opportunities by Location</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sea-50">
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Location</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Entry From</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Rental Yield</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Appreciation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Palma', entry: '350k', yield: '4-6%', appreciation: '5-7%' },
                      { name: 'Pollensa', entry: '400k', yield: '5-7%', appreciation: '4-6%' },
                      { name: 'Port d\'Andratx', entry: '700k', yield: '3-5%', appreciation: '6-8%' },
                      { name: 'Soller', entry: '450k', yield: '4-6%', appreciation: '5-7%' },
                      { name: 'Cala d\'Or', entry: '220k', yield: '5-7%', appreciation: '4-6%' },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900">{row.name}</td>
                        <td className="px-4 py-3 text-gray-900">{row.entry}</td>
                        <td className="px-4 py-3 text-forest-600 font-medium">{row.yield}</td>
                        <td className="px-4 py-3 text-sea-600 font-medium">{row.appreciation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-sea-800 mb-4">Why Invest in Mallorca Real Estate?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: TrendingUp, title: 'Capital Appreciation', text: 'Premium areas seeing 5-8% annual appreciation, outperforming most European property markets.' },
                  { icon: BarChart3, title: 'Rental Income', text: 'Properties with ETV tourist licenses generate 4-7% yields, with peak-season demand driving occupancy.' },
                  { icon: Globe, title: 'Golden Visa', text: 'Investments of 500k+ have historically qualified for Spanish residency. Note: this program is under legislative review and may change -- consult an immigration lawyer.' },
                  { icon: Shield, title: 'Market Stability', text: 'Sustained international demand and limited supply in prime locations support long-term value.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Mallorca Investment Guide 2026</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  Mallorca remains one of the strongest property investment markets in the Mediterranean,
                  supported by sustained international demand, limited supply in prime locations, and a
                  mature tourist infrastructure that generates reliable rental income. The market saw
                  stable growth of 3-5% in recent years, with premium segments outperforming.
                </p>
                <p>
                  The buy-to-let model is particularly attractive for properties with valid ETV tourist
                  rental licenses. These allow owners to rent their property to short-term holiday guests,
                  generating seasonal income that can cover mortgage payments and running costs while
                  building equity through capital appreciation.
                </p>
                <p>
                  For non-EU investors, the Spanish Golden Visa program has historically allowed
                  property investments of 500,000 EUR or more to grant residency rights for the buyer
                  and their family. However, Spain has announced legislative intent to end this program
                  for real estate investments. Prospective investors should verify the current status
                  with an immigration lawyer before relying on this route.
                </p>
                <p>
                  Eco-properties represent a growing segment of the investment market. Sustainable
                  properties with solar installations, high energy ratings, and green features are
                  seeing faster sales and price premiums as buyer preferences shift and regulations
                  tighten.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Investment Match</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 investment options in 24h</p>
                  <MatchingForm sourcePage="/investments" defaultType="investment" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Guides</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
                      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
                      { label: 'ETV License Guide', path: '/guides/etv-license-mallorca' },
                      { label: 'Golden Visa Blog', path: '/blog/golden-visa-spain-mallorca-property' },
                      { label: 'Island Comparison', path: '/guides/mallorca-vs-ibiza-menorca-investment' },
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

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-10">Investment Hotspots</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INVESTMENT_DATA.map((loc) => (
              <LocationCard key={loc.slug} name={loc.name} path={`/sales/villas/${loc.slug}`} image={loc.image} tagline={loc.tagline} priceHint={`From ${loc.salePrice}`} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Start Your Mallorca Property Investment" subtext="Share your investment goals and budget. We match you with the best opportunities within 24 hours." buttonText="Match Investment Properties" />
    </>
  );
}
