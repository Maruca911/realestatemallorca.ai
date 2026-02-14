import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TrendingUp, Building2, Wallet, Users } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import MatchingForm from '../../components/MatchingForm';
import InlineFAQ from '../../components/InlineFAQ';
import { LOCATIONS } from '../../data/locations';

const APT_LOCATIONS = ['palma', 'alcudia', 'santa-ponsa', 'cala-dor', 'magaluf', 'pollensa'];
const APT_DATA = LOCATIONS.filter((l) => APT_LOCATIONS.includes(l.slug));

const PRICE_TABLE = [
  { name: 'Palma (Old Town / Paseo Maritimo)', range: '250k - 1.2M', m2: '4,000 - 8,000', slug: 'palma' },
  { name: 'Santa Ponsa', range: '180k - 600k', m2: '3,000 - 5,500', slug: 'santa-ponsa' },
  { name: 'Alcudia / Port d\'Alcudia', range: '150k - 500k', m2: '2,500 - 4,500', slug: 'alcudia' },
  { name: 'Cala d\'Or', range: '120k - 450k', m2: '2,200 - 4,000', slug: 'cala-dor' },
  { name: 'Pollensa / Port de Pollensa', range: '200k - 650k', m2: '3,000 - 5,000', slug: 'pollensa' },
  { name: 'Magaluf / Palmanova', range: '130k - 400k', m2: '2,500 - 4,200', slug: 'magaluf' },
];

const FAQ_ITEMS = [
  { q: 'Are apartments in Mallorca a good investment?', a: 'Yes. Apartments in popular tourist areas generate strong rental yields (5-8% gross) due to high occupancy. They also benefit from lower maintenance costs compared to villas. Palma city apartments and coastal apartments near beaches are particularly strong performers.' },
  { q: 'Can I rent out my Mallorca apartment short-term?', a: 'Only if the property has an ETV tourist rental license. Since July 2022, new ETV licenses for apartments in multi-dwelling buildings have been suspended in most municipalities. Properties with existing licenses can still be rented legally and command a premium on the resale market.' },
  { q: 'What are the monthly community fees for apartments in Mallorca?', a: 'Community fees (gastos de comunidad) range from 50 to 300 EUR per month depending on the building amenities (pool, garden, elevator, concierge). Luxury complexes can be higher. These fees cover shared maintenance, insurance, and building reserves.' },
  { q: 'Do I need to be resident to buy an apartment in Mallorca?', a: 'No. Both EU and non-EU citizens can freely buy property in Mallorca. You need a NIE number (tax identification) and a Spanish bank account. Non-residents face slightly different tax rates but the purchase process is identical.' },
  { q: 'What additional costs should I budget when buying an apartment?', a: 'Budget an additional 10-13% on top of the purchase price for transfer tax (ITP 8-11.5%, progressive scale), notary fees (0.5-1%), land registry (0.3-0.5%), and legal fees (1-2%). If using a mortgage, add 1-1.5% for valuation and arrangement fees.' },
];

export default function Apartments() {
  return (
    <>
      <SEOHead
        title="Apartments for Sale Mallorca - Modern Flats & Penthouses 2026"
        description="Find apartments for sale in Mallorca. Modern flats, penthouses, and beachfront apartments in Palma, Alcudia, Santa Ponsa, and more. Prices from 120k. Free matching."
        canonical="/sales/apartments"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Modern apartment interior in Mallorca with sea views"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/sales" className="hover:text-white">Sales</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Apartments</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Apartments for Sale in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Modern flats, sea-view penthouses, and beachfront apartments across Mallorca's most desirable
            locations. The most accessible entry point into the Mallorca property market.
          </p>
          <Link to="/signup" className="btn-cta">
            Match Apartments for Sale <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Apartment Prices by Location</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sea-50">
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Location</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Price Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Avg per m2</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {PRICE_TABLE.map((row, i) => (
                      <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-500" />{row.name}
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.range}</td>
                        <td className="px-4 py-3 text-gray-600">{row.m2}/m2</td>
                        <td className="px-4 py-3">
                          <Link to={`/sales/apartments/${row.slug}`} className="text-aqua-600 hover:text-aqua-700 font-medium text-xs">View &rarr;</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-sea-800 mb-4">Why Buy an Apartment in Mallorca?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: Wallet, title: 'Accessible Entry Price', text: 'Apartments start from 120,000 EUR in areas like Magaluf and Cala d\'Or, making Mallorca property ownership attainable for a broader range of buyers.' },
                  { icon: TrendingUp, title: 'Strong Rental Yields', text: 'Tourist-area apartments with ETV licenses generate 5-8% gross yields. Even without a license, long-term rentals yield 4-6% in high-demand areas like Palma.' },
                  { icon: Building2, title: 'Low Maintenance', text: 'Community fees cover building upkeep, pools, and gardens. Lock-and-leave convenience makes apartments ideal for non-resident owners.' },
                  { icon: Users, title: 'Lifestyle Flexibility', text: 'Use it as a holiday base, rent it out for income, or live here full-time. Apartments offer the most flexible ownership model on the island.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Types of Apartments in Mallorca</h2>
              <div className="space-y-4 mb-10">
                {[
                  { type: 'Penthouses', desc: 'Top-floor apartments with private terraces, often offering panoramic sea or mountain views. Premium pricing but high resale value and exceptional lifestyle appeal.' },
                  { type: 'Garden Apartments', desc: 'Ground-floor units with direct garden or pool access. Popular with families and buyers seeking indoor-outdoor living at a lower price point than penthouses.' },
                  { type: 'New-Build Developments', desc: 'Modern complexes with energy-efficient design, communal pools, and underground parking. Prices are higher per square meter but include modern finishes and warranties.' },
                  { type: 'Resale / Older Buildings', desc: 'Character properties in established neighborhoods, often in Palma\'s Old Town or traditional coastal towns. May need updating but offer better value per square meter.' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5">
                    <h3 className="font-bold text-gray-900 mb-1">{item.type}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Buying an Apartment in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 mb-10">
                <p>
                  The apartment market in Mallorca is diverse, ranging from affordable studio flats in resort
                  towns to multi-million-euro penthouses overlooking Palma Bay. For buyers entering the market
                  for the first time, apartments offer the lowest barrier to entry while still providing
                  excellent capital appreciation and rental income potential.
                </p>
                <p>
                  When purchasing an apartment, pay particular attention to the community of owners (comunidad
                  de propietarios). Review the community rules, fee history, and reserve fund status. Your
                  lawyer should verify there are no outstanding debts against the community that could affect
                  your property. Also check whether the building permits tourist rental licenses, as many
                  communities have voted to prohibit short-term lets.
                </p>
                <p>
                  Total purchase costs for apartments are the same as other property types: approximately
                  10-12% on top of the agreed price. This includes transfer tax (8-10%), notary and registry
                  fees (1-1.5%), and legal fees (1-2%). For a comprehensive breakdown, see our{' '}
                  <Link to="/guides/property-taxes-mallorca" className="text-aqua-600 hover:underline">property taxes guide</Link>.
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
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Apartment</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/sales/apartments" defaultType="apartment" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Pages</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Villas for Sale', path: '/sales/villas' },
                      { label: 'Beachfront Properties', path: '/sales/beachfront' },
                      { label: 'Investment Properties', path: '/investments' },
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
                      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
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
          <h2 className="text-sea-800 text-center mb-10">Apartments by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APT_DATA.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                path={`/sales/apartments/${loc.slug}`}
                image={loc.image}
                tagline={loc.tagline}
                priceHint={`From ${loc.salePrice}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Find Your Ideal Apartment in Mallorca" subtext="Share your requirements and receive 3 curated apartment matches within 24 hours." buttonText="Match Apartments" />
    </>
  );
}
