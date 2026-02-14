import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TrendingUp, Shield, Palmtree } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import MatchingForm from '../../components/MatchingForm';
import { LOCATIONS } from '../../data/locations';

const VILLA_LOCATIONS = ['palma', 'pollensa', 'andratx', 'soller', 'cala-dor'];
const VILLA_DATA = LOCATIONS.filter((l) => VILLA_LOCATIONS.includes(l.slug));

export default function Villas() {
  return (
    <>
      <SEOHead
        title="Villas for Sale Mallorca - Luxury Homes & Modern Properties"
        description="Find villas for sale in Mallorca. Luxury homes, modern villas, and sea-view properties in Palma, Pollensa, Andratx, Soller, and Cala d'Or. Free matching service."
        canonical="/sales/villas"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury villa for sale in Mallorca with sea views"
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
            <span className="text-white">Villas</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Villas for Sale in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Discover luxury villas and modern homes across Mallorca's most prestigious locations.
            From sea-view contemporary estates to hillside retreats, find your ideal villa.
          </p>
          <Link to="/signup" className="btn-cta">Match Villas for Sale <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Villa Prices by Location</h2>
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
                    {[
                      { name: 'Palma & Son Vida', range: '500k - 5M+', m2: '5,000 - 12,000', slug: 'palma' },
                      { name: 'Pollensa', range: '400k - 3M', m2: '4,000 - 8,000', slug: 'pollensa' },
                      { name: 'Port d\'Andratx', range: '700k - 8M+', m2: '6,000 - 15,000', slug: 'andratx' },
                      { name: 'Soller', range: '450k - 3.5M', m2: '4,500 - 9,000', slug: 'soller' },
                      { name: 'Cala d\'Or', range: '300k - 2M', m2: '3,500 - 7,000', slug: 'cala-dor' },
                    ].map((row, i) => (
                      <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-500" />{row.name}
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.range}</td>
                        <td className="px-4 py-3 text-gray-600">{row.m2}/m2</td>
                        <td className="px-4 py-3">
                          <Link to={`/sales/villas/${row.slug}`} className="text-aqua-600 hover:text-aqua-700 font-medium text-xs">View &rarr;</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-sea-800 mb-4">Why Buy a Villa in Mallorca?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: TrendingUp, title: 'Strong Appreciation', text: 'Premium areas seeing 5-8% annual appreciation, with luxury villas outperforming the broader market.' },
                  { icon: Palmtree, title: 'Mediterranean Living', text: '300+ days of sunshine, world-class dining, and a lifestyle that blends luxury with relaxation.' },
                  { icon: Shield, title: 'Rental Income Potential', text: 'Villas with ETV licenses generate 4-7% rental yields during tourist season.' },
                  { icon: MapPin, title: 'Golden Visa Eligible', text: 'Properties over 500k qualify for Spanish Golden Visa residency permits.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Buying a Villa in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  The Mallorca villa market offers exceptional diversity, from sleek contemporary
                  properties with infinity pools overlooking the sea to traditional stone-built
                  estates surrounded by Mediterranean gardens. Prices vary significantly by
                  location, with the southwest coast (Andratx, Son Vida, Bendinat) commanding
                  the highest premiums and the east coast offering more accessible entry points.
                </p>
                <p>
                  The purchase process for villas in Mallorca typically takes 2-3 months from
                  accepted offer to completion. Total buying costs add approximately 10-12% to
                  the purchase price, covering transfer tax (8-10%), notary and registry fees
                  (1.5-2%), and legal fees (1-2%). Non-resident buyers should expect mortgage
                  lending of up to 60-70% loan-to-value at rates of 2-4%.
                </p>
                <p>
                  For buyers considering a villa as both a home and an investment, obtaining an
                  ETV tourist rental license is a key consideration. Licensed properties can
                  generate significant seasonal income, but licensing availability varies by
                  municipality and is becoming more restricted. Our matching service includes
                  properties with existing licenses where applicable.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Villa</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched villas in 24h</p>
                  <MatchingForm sourcePage="/sales/villas" defaultType="villa" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-10">Villas by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VILLA_DATA.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                path={`/sales/villas/${loc.slug}`}
                image={loc.image}
                tagline={loc.tagline}
                priceHint={`From ${loc.salePrice}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Find Your Ideal Villa in Mallorca" subtext="Share your requirements and receive 3 curated villa matches within 24 hours." buttonText="Match Villas for Sale" />
    </>
  );
}
