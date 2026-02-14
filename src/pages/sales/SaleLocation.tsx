import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';
import { getLocation, LOCATIONS } from '../../data/locations';

interface SaleLocationProps {
  type: 'villas' | 'fincas' | 'apartments';
}

const TYPE_META = {
  villas: { singular: 'Villa', plural: 'Villas', defaultType: 'villa' as const, desc: 'Luxury villas, modern homes, and sea-view properties' },
  fincas: { singular: 'Finca', plural: 'Fincas', defaultType: 'finca' as const, desc: 'Traditional country estates, rustic farmhouses, and rural retreats' },
  apartments: { singular: 'Apartment', plural: 'Apartments', defaultType: 'apartment' as const, desc: 'Modern flats, penthouses, and beachfront apartments' },
};

export default function SaleLocation({ type }: SaleLocationProps) {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || '');
  const meta = TYPE_META[type];

  if (!location) return <Navigate to={`/sales/${type}`} replace />;

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${meta.plural} for Sale ${location.name} Mallorca - ${meta.desc}`}
        description={`Find ${meta.plural.toLowerCase()} for sale in ${location.name}, Mallorca. ${meta.desc}. From ${location.salePrice}. Free matching service.`}
        canonical={`/sales/${type}/${slug}`}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={location.image} alt={`${meta.plural} for sale in ${location.name}, Mallorca`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to={`/sales/${type}`} className="hover:text-white">{meta.plural}</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-4">{meta.plural} for Sale in {location.name}, Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-2">{location.tagline}</p>
          <p className="text-aqua-300 text-lg font-semibold mb-8">From {location.salePrice}</p>
          <Link to="/signup" className="btn-cta">Match {meta.plural} in {location.name} <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">About {location.name}</h2>
                <p className="text-gray-600 leading-relaxed">{location.description}</p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Why Buy a {meta.singular} in {location.name}?</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {location.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 bg-sea-50 rounded-lg p-4">
                      <MapPin className="w-4 h-4 text-aqua-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Buying {meta.plural} in {location.name}</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    {location.name} is one of Mallorca's most desirable locations for purchasing
                    {type === 'fincas' ? ' a traditional finca or country property' : ' a villa or luxury home'}.
                    The area offers {location.tagline.toLowerCase()}, making it attractive to both lifestyle
                    buyers and investors seeking strong capital appreciation.
                  </p>
                  <p>
                    Property prices in {location.name} start from {location.salePrice}, with
                    {type === 'fincas'
                      ? ' traditional stone-built estates commanding premiums for character features, land size, and renovation quality. Buyers should be aware that fincas on rustic land face specific building restrictions regarding extensions and modifications.'
                      : ' modern villas and sea-view properties at the upper end of the market. The strongest demand is for turnkey properties with pools, outdoor entertaining areas, and panoramic views.'
                    }
                  </p>
                  <p>
                    The purchase process typically takes 2-3 months from accepted offer to completion.
                    Total buying costs add approximately 10-12% to the purchase price. We recommend
                    engaging an independent lawyer and conducting a thorough property survey before
                    committing. Our matching service connects you with vetted agents specializing in
                    {type === 'fincas' ? ' rural and country properties' : ' villas and luxury homes'}
                    in {location.name}.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Nearby Attractions</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {location.nearbyAttractions.map((attr, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full" />{attr}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">{meta.plural} in {location.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage={`/sales/${type}/${slug}`} defaultType={meta.defaultType} compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-8">Explore Other Locations</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {otherLocations.map((loc) => (
              <Link key={loc.slug} to={`/sales/${type}/${loc.slug}`} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img src={loc.image} alt={`${meta.plural} in ${loc.name}`} className="w-full h-36 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-sea-600 transition-colors">{loc.name}</h3>
                  <p className="text-sm text-gray-500">From {loc.salePrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Find Your Perfect ${meta.singular} in ${location.name}`}
        subtext={`Share your requirements and we'll match you with the best ${meta.plural.toLowerCase()} available in ${location.name}.`}
      />
    </>
  );
}
