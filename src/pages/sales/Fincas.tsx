import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, TreePine, Hammer, Leaf, Mountain } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import MatchingForm from '../../components/MatchingForm';
import { LOCATIONS } from '../../data/locations';

const FINCA_LOCATIONS = ['deia', 'soller', 'pollensa', 'alcudia', 'santa-ponsa'];
const FINCA_DATA = LOCATIONS.filter((l) => FINCA_LOCATIONS.includes(l.slug));

export default function Fincas() {
  return (
    <>
      <SEOHead
        title="Fincas for Sale Mallorca - Country Estates & Rural Properties"
        description="Find fincas for sale in Mallorca. Traditional country estates, rustic farmhouses, and rural retreats in Deia, Soller, Pollensa, and more. Free matching."
        canonical="/sales/fincas"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Traditional finca for sale in Mallorca countryside"
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
            <span className="text-white">Fincas</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Fincas for Sale in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Discover traditional Mallorcan fincas, rustic country estates, and rural retreats.
            Stone-built character properties surrounded by olive groves, mountain views, and
            Mediterranean landscapes.
          </p>
          <Link to="/signup" className="btn-cta">Match Fincas for Sale <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Finca Prices by Location</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sea-50">
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Location</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Price Range</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Renovation Cost/m2</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Deia', range: '800k - 5M+', reno: '1,500 - 2,500', slug: 'deia' },
                      { name: 'Soller Valley', range: '500k - 3.5M', reno: '1,200 - 2,000', slug: 'soller' },
                      { name: 'Pollensa', range: '450k - 3M', reno: '1,000 - 1,800', slug: 'pollensa' },
                      { name: 'Alcudia', range: '350k - 2M', reno: '1,000 - 1,800', slug: 'alcudia' },
                      { name: 'Santa Ponsa area', range: '400k - 2.5M', reno: '1,200 - 2,000', slug: 'santa-ponsa' },
                    ].map((row, i) => (
                      <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-500" />{row.name}
                        </td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.range}</td>
                        <td className="px-4 py-3 text-gray-600">{row.reno}/m2</td>
                        <td className="px-4 py-3">
                          <Link to={`/sales/fincas/${row.slug}`} className="text-aqua-600 hover:text-aqua-700 font-medium text-xs">View &rarr;</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-sea-800 mb-4">Why Buy a Finca in Mallorca?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: TreePine, title: 'Authentic Character', text: 'Stone walls, wooden beams, terraces, and centuries of history create unique homes with soul.' },
                  { icon: Mountain, title: 'Natural Setting', text: 'Surrounded by olive groves, almond orchards, mountains, or coastline. Privacy and space.' },
                  { icon: Hammer, title: 'Renovation Potential', text: 'Transform a rustic estate into your dream home. Renovation costs range from 1,000-2,000/m2.' },
                  { icon: Leaf, title: 'Sustainable Living', text: 'Many fincas now feature solar power, rainwater harvesting, and organic gardens.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-forest-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Buying a Finca in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  A Mallorcan finca is a traditional rural property, ranging from modest farmhouses to
                  grand country estates. These properties are found throughout the island's countryside,
                  with the most prestigious located in the Serra de Tramuntana mountains (particularly
                  around Deia, Soller, and Valldemossa) and the rolling hills of the interior.
                </p>
                <p>
                  Buyers should understand the distinction between rustic and urban land classification.
                  Fincas on rustic land face limitations on building size (typically a percentage of the
                  plot area), extensions, and new construction. These regulations protect the rural
                  landscape but require careful planning if you intend to modify the property
                  significantly.
                </p>
                <p>
                  Renovation is a central consideration when buying a finca. Many properties require
                  updating to meet modern living standards, with costs ranging from 1,000 to 2,000 per
                  square meter. A thorough building survey is essential before purchase, and engaging an
                  architect experienced with traditional Mallorcan properties is strongly recommended.
                  Building permits must be obtained before any work begins.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Finca</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched fincas in 24h</p>
                  <MatchingForm sourcePage="/sales/fincas" defaultType="finca" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-10">Fincas by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FINCA_DATA.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                path={`/sales/fincas/${loc.slug}`}
                image={loc.image}
                tagline={loc.tagline}
                priceHint={`From ${loc.salePrice}`}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Find Your Dream Finca in Mallorca" subtext="Tell us your ideal location, budget, and features. We match you with the best fincas available." buttonText="Match Fincas" />
    </>
  );
}
