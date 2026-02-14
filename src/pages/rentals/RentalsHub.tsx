import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import { LOCATIONS } from '../../data/locations';

export default function RentalsHub() {
  return (
    <>
      <SEOHead
        title="Rentals Mallorca - Short-Term & Long-Term Properties"
        description="Find rental properties in Mallorca. Short-term vacation rentals and long-term residential leases. Apartments, villas, and houses across the island."
        canonical="/rentals"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Rental properties in Mallorca" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <h1 className="text-white max-w-3xl mb-6">Rentals in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            From week-long vacation rentals to long-term residential leases, find the right property in Mallorca matched to your needs.
          </p>
          <Link to="/signup" className="btn-cta">Get Matched Free <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/rentals/short-term" className="group p-8 rounded-2xl border-2 border-aqua-200 bg-aqua-50/50 hover:border-aqua-400 hover:shadow-lg transition-all">
              <Calendar className="w-10 h-10 text-aqua-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aqua-600 transition-colors">Short-Term Rentals</h2>
              <p className="text-gray-600 mb-4">Vacation homes, holiday apartments, and Airbnb alternatives. Nightly or weekly stays across Mallorca.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Browse Short-Term <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/rentals/long-term" className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-sea-200 hover:shadow-lg transition-all bg-white">
              <Clock className="w-10 h-10 text-sea-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sea-600 transition-colors">Long-Term Rentals</h2>
              <p className="text-gray-600 mb-4">Monthly and annual residential leases. Apartments, villas, and houses for expats, families, and relocators.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Browse Long-Term <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>

          <h2 className="text-sea-800 text-center mb-10">Rentals by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.slice(0, 6).map((loc) => (
              <LocationCard key={loc.slug} name={loc.name} path={`/rentals/short-term/${loc.slug}`} image={loc.image} tagline={loc.tagline} priceHint={loc.shortTermPrice} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
