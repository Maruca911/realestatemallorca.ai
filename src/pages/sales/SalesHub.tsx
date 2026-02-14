import { Link } from 'react-router-dom';
import { ArrowRight, Building, TreePine, Building2, Waves } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import { LOCATIONS } from '../../data/locations';

export default function SalesHub() {
  return (
    <>
      <SEOHead
        title="Property for Sale Mallorca - Villas, Fincas, Apartments & Beachfront"
        description="Find property for sale in Mallorca. Luxury villas, traditional fincas, modern apartments, beachfront homes, and investment properties. Free matching service."
        canonical="/sales"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Property for sale in Mallorca" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <h1 className="text-white max-w-3xl mb-6">Property for Sale in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            From luxury sea-view villas to traditional stone fincas, find the perfect property in Mallorca with our free matching service.
          </p>
          <Link to="/signup" className="btn-cta">Get Matched Free <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Link to="/sales/villas" className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-sea-200 hover:shadow-lg transition-all bg-white">
              <Building className="w-10 h-10 text-sea-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sea-600 transition-colors">Villas for Sale</h2>
              <p className="text-gray-600 mb-4">Luxury villas, modern homes, and sea-view properties in Mallorca's most prestigious locations.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore Villas <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/sales/fincas" className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-forest-200 hover:shadow-lg transition-all bg-white">
              <TreePine className="w-10 h-10 text-forest-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-forest-600 transition-colors">Fincas for Sale</h2>
              <p className="text-gray-600 mb-4">Traditional country estates, rustic farmhouses, and rural retreats across the Mallorcan countryside.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore Fincas <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/sales/apartments" className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-aqua-200 hover:shadow-lg transition-all bg-white">
              <Building2 className="w-10 h-10 text-aqua-500 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-aqua-600 transition-colors">Apartments for Sale</h2>
              <p className="text-gray-600 mb-4">Modern flats, penthouses, and beachfront apartments. The most accessible entry into the Mallorca market.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore Apartments <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to="/sales/beachfront" className="group p-8 rounded-2xl border-2 border-gray-100 hover:border-sea-200 hover:shadow-lg transition-all bg-white">
              <Waves className="w-10 h-10 text-sea-400 mb-4" />
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-sea-600 transition-colors">Beachfront Property</h2>
              <p className="text-gray-600 mb-4">First-line sea-view villas, waterfront apartments, and coastal homes in prime beach locations.</p>
              <span className="text-aqua-600 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">Explore Beachfront <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>

          <h2 className="text-sea-800 text-center mb-10">Properties by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.slice(0, 6).map((loc) => (
              <LocationCard key={loc.slug} name={loc.name} path={`/sales/villas/${loc.slug}`} image={loc.image} tagline={loc.tagline} priceHint={`From ${loc.salePrice}`} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner heading="Find Your Ideal Mallorca Property" subtext="Tell us what you're looking for and receive 3 curated options within 24 hours." />
    </>
  );
}
