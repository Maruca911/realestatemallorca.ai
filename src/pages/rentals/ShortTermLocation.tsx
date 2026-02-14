import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight, Bed, Wifi, Car, UtensilsCrossed } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';
import { getLocation, LOCATIONS } from '../../data/locations';

export default function ShortTermLocation() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || '');

  if (!location) return <Navigate to="/rentals/short-term" replace />;

  const otherLocations = LOCATIONS.filter((l) => l.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead
        title={`Short Term Rentals ${location.name} Mallorca - Vacation Apartments & Homes`}
        description={`Find short-term rentals in ${location.name}, Mallorca. ${location.tagline}. Holiday apartments, vacation villas, and Airbnb alternatives ${location.shortTermPrice}.`}
        canonical={`/rentals/short-term/${slug}`}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={location.image} alt={`Short term rentals in ${location.name}, Mallorca`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/rentals/short-term" className="hover:text-white">Short-Term Rentals</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-4">
            Short Term Rentals in {location.name}, Mallorca
          </h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-2">{location.tagline}</p>
          <p className="text-aqua-300 text-lg font-semibold mb-8">{location.shortTermPrice}</p>
          <Link to="/signup" className="btn-cta">
            Get Matched in {location.name} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
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
                <h2 className="text-sea-800 mb-4">Why Rent Short-Term in {location.name}?</h2>
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
                <h2 className="text-sea-800 mb-4">What to Expect from a Short-Term Rental in {location.name}</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Bed, text: 'Fully furnished apartments and villas with quality linens' },
                    { icon: Wifi, text: 'High-speed Wi-Fi included in most properties' },
                    { icon: Car, text: `Parking available ${location.slug === 'palma' ? '(check availability in Old Town)' : 'at most properties'}`},
                    { icon: UtensilsCrossed, text: 'Equipped kitchens for self-catering flexibility' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-sea-500 mt-0.5" />
                      <span className="text-gray-600 text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Nearby Attractions</h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {location.nearbyAttractions.map((attr, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="w-1.5 h-1.5 bg-aqua-500 rounded-full" />
                      {attr}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Short-Term Rental Guide for {location.name}</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    {location.name} is one of Mallorca's most sought-after destinations for short-term
                    vacation rentals, offering a distinctive combination of {location.slug === 'palma'
                      ? 'urban sophistication, cultural richness, and coastal beauty'
                      : location.slug === 'deia'
                      ? 'artistic heritage, mountain scenery, and exclusive tranquility'
                      : 'natural beauty, local character, and Mediterranean charm'
                    }. The short-term rental market here is well-established, with properties ranging
                    from modern apartments to traditional stone-built homes.
                  </p>
                  <p>
                    Average nightly rates in {location.name} start at {location.shortTermPrice}, with
                    prices varying based on property size, amenities (such as private pools or sea views),
                    and the time of year. Peak season (June through September) commands the highest rates,
                    while the shoulder months of spring and autumn offer better value with comfortable
                    weather.
                  </p>
                  <p>
                    All legitimate short-term rental properties in {location.name} must hold a valid ETV
                    tourist rental license. Our matching service only works with licensed, quality-verified
                    properties to ensure your stay meets the highest standards of comfort and legality.
                  </p>
                  <p>
                    Whether you are visiting for a week-long holiday, an extended stay to explore the area
                    as a potential home, or anything in between, a short-term rental in {location.name}
                    provides the flexibility, privacy, and local immersion that hotel stays cannot match.
                    Submit your preferences through our free matching service and receive 3 hand-picked
                    options within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Rentals in {location.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage={`/rentals/short-term/${slug}`} compact />
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
              <Link
                key={loc.slug}
                to={`/rentals/short-term/${loc.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img src={loc.image} alt={`Short term rentals ${loc.name}`} className="w-full h-36 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-sea-600 transition-colors">{loc.name}</h3>
                  <p className="text-sm text-gray-500">{loc.shortTermPrice}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Find Your Perfect Short-Term Rental in ${location.name}`}
        subtext={`Tell us your dates and budget, and we'll match you with the best vacation rentals in ${location.name}.`}
      />
    </>
  );
}
