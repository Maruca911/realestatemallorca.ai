import { Link } from 'react-router-dom';
import { ArrowRight, Building, TreePine, Calendar, TrendingUp, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import HowItWorks from '../components/HowItWorks';
import TrustSignals from '../components/TrustSignals';
import CTABanner from '../components/CTABanner';
import LocationCard from '../components/LocationCard';
import { LOCATIONS } from '../data/locations';

const SERVICES = [
  { icon: Calendar, title: 'Short-Term Rentals', desc: 'Vacation homes, Airbnb alternatives, and holiday apartments across Mallorca.', path: '/rentals/short-term', highlight: true },
  { icon: Building, title: 'Villas for Sale', desc: 'Luxury villas and modern homes in the most desirable locations.', path: '/sales/villas' },
  { icon: TreePine, title: 'Fincas for Sale', desc: 'Traditional country estates with character and charm.', path: '/sales/fincas' },
  { icon: Calendar, title: 'Long-Term Rentals', desc: 'Monthly and annual rental properties for residents and relocators.', path: '/rentals/long-term' },
  { icon: TrendingUp, title: 'Investment Properties', desc: 'High-yield buy-to-let and development opportunities.', path: '/investments' },
  { icon: Users, title: 'Find an Agent', desc: 'Connect with vetted, English-speaking real estate professionals.', path: '/agents' },
];

const FEATURED_LOCATIONS = LOCATIONS.slice(0, 6);

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Real Estate Mallorca',
    url: 'https://realestatemallorca.ai',
    description: 'Free property matching service for real estate in Mallorca. Short-term rentals, villas, fincas, and investment properties.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://realestatemallorca.ai/signup',
    },
  };

  return (
    <>
      <SEOHead
        title="Real Estate Mallorca: Short-Term Rentals, Properties & Investment"
        description="Find your perfect Mallorca property. Free expert matching for short-term rentals, villas, fincas, and investment properties. Get 3 curated options in 24 hours."
        canonical="/"
        schema={schema}
      />

      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Luxury beachfront property in Mallorca with pool overlooking the Mediterranean Sea"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 via-sea-900/60 to-sea-900/30" />
        </div>

        <div className="relative container-max px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <div className="inline-block bg-aqua-500/20 backdrop-blur-sm text-aqua-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-aqua-400/30">
              Free Property Matching Service
            </div>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Find Short-Term Rentals in Mallorca
              <span className="text-aqua-400"> &mdash; Fast Matches</span>
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Tell us your ideal property and location. Our local experts deliver 3 hand-picked
              options to your inbox within 24 hours. Completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup" className="btn-cta text-center">
                Get Matched Free <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/rentals/short-term" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-center">
                Browse Short-Term Rentals
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustSignals />
      <HowItWorks />

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-sea-800 mb-4">What Are You Looking For?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From vacation rentals to investment properties, we match you with the
              right options across Mallorca.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc) => (
              <Link
                key={svc.path}
                to={svc.path}
                className={`group p-6 rounded-xl border-2 transition-all duration-200 hover:shadow-lg ${
                  svc.highlight
                    ? 'border-aqua-200 bg-aqua-50/50 hover:border-aqua-400'
                    : 'border-gray-100 bg-white hover:border-sea-200'
                }`}
              >
                <svc.icon className={`w-8 h-8 mb-4 ${svc.highlight ? 'text-aqua-500' : 'text-sea-500'}`} />
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sea-600 transition-colors">
                  {svc.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{svc.desc}</p>
                <span className="text-aqua-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-sea-800 mb-4">Explore Mallorca Locations</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each area of Mallorca has its own character. Discover which location
              matches your lifestyle and investment goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_LOCATIONS.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                path={`/rentals/short-term/${loc.slug}`}
                image={loc.image}
                tagline={loc.tagline}
                priceHint={loc.shortTermPrice}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/rentals/short-term" className="btn-secondary">
              View All Locations <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="bg-sea-800 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
                  Why Use Our Free Matching Service?
                </h2>
                <ul className="space-y-4 text-sea-100">
                  {[
                    'Save hours of searching across dozens of listing sites',
                    'Access vetted properties from trusted local agents',
                    'Get 3 curated options delivered within 24 hours',
                    'Expert local knowledge of every Mallorca neighborhood',
                    'No fees, no obligations, no spam',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-aqua-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/signup" className="btn-cta mt-8 self-start">
                  Start Free Matching
                </Link>
              </div>
              <div className="hidden lg:block">
                <img
                  src="https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Crystal clear waters and sandy beach in Alcudia, Mallorca"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
