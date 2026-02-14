import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';
import { getLocation } from '../../data/locations';

export default function LongTermLocation() {
  const { slug } = useParams<{ slug: string }>();
  const location = getLocation(slug || '');

  if (!location) return <Navigate to="/rentals/long-term" replace />;

  return (
    <>
      <SEOHead
        title={`Long Term Rentals ${location.name} Mallorca - Monthly Properties`}
        description={`Find long-term rental properties in ${location.name}, Mallorca. Monthly apartments, villas, and houses. ${location.longTermPrice}.`}
        canonical={`/rentals/long-term/${slug}`}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={location.image} alt={`Long term rentals in ${location.name}, Mallorca`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/rentals/long-term" className="hover:text-white">Long-Term Rentals</Link>
            <span className="mx-2">/</span>
            <span className="text-white">{location.name}</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-4">Long Term Rentals in {location.name}, Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-2">{location.tagline}</p>
          <p className="text-aqua-300 text-lg font-semibold mb-8">{location.longTermPrice}</p>
          <Link to="/signup" className="btn-cta">Get Matched in {location.name} <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">Living in {location.name}</h2>
                <p className="text-gray-600 leading-relaxed">{location.description}</p>
              </div>
              <div>
                <h2 className="text-sea-800 mb-4">Why Rent Long-Term in {location.name}?</h2>
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
                <h2 className="text-sea-800 mb-4">Long-Term Rental Guide for {location.name}</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    {location.name} offers a compelling long-term rental market for expats, remote workers,
                    and families relocating to Mallorca. Monthly rents start at {location.longTermPrice},
                    varying based on property size, condition, and proximity to key amenities.
                  </p>
                  <p>
                    The long-term rental process in {location.name} typically involves viewing properties,
                    providing references and proof of income, signing a contract (minimum 1 year under
                    Spanish law), and paying a deposit equivalent to one or two months' rent. Many
                    landlords prefer tenants who can demonstrate stable income.
                  </p>
                  <p>
                    Local amenities in {location.name} include {location.nearbyAttractions.slice(0, 3).join(', ')},
                    and a range of shops, restaurants, and services. Transportation considerations vary:
                    {location.slug === 'palma'
                      ? ' Palma has the island\'s best public transport, making car-free living practical.'
                      : ` a car is recommended for daily life in ${location.name}, though the area has some local bus connections.`
                    }
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Rentals in {location.name}</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage={`/rentals/long-term/${slug}`} defaultType="long-term" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading={`Not Sure About Long-Term? Try a Short Stay in ${location.name} First`}
        subtext="Test the area with a short-term rental before committing to a long-term lease."
        buttonText="Match Short-Term Rentals"
        buttonLink={`/rentals/short-term/${slug}`}
        variant="aqua"
      />
    </>
  );
}
