import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Sparkles, MapPin, Calendar, ExternalLink } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import MatchingForm from '../../components/MatchingForm';
import CTABanner from '../../components/CTABanner';

const DEVELOPERS = [
  {
    name: 'XO Jonquet',
    location: 'Paseo Maritimo, Palma',
    description: 'One of Palma\'s most prestigious residential projects. Four boutique buildings on the waterfront featuring 57 luxury apartments from one to four bedrooms, including duplexes and penthouses with panoramic harbour views overlooking Es Jonquet\'s historic windmills.',
    highlights: [
      '57 premium residences on Palma\'s Paseo Maritimo',
      'Penthouses, duplexes, and 3-floor units with private parking',
      'Golf simulator, wine cellar, social club, and home cinema',
      'Completion expected Q2 2027',
    ],
    priceRange: 'From approx. 550,000 to 3.6M+',
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Aedas Homes',
    location: 'Marratxi, Palmanova & other locations',
    description: 'Spain\'s leading residential developer with multiple active projects across Mallorca. Known for sustainable, modern builds with communal facilities. Projects include Vivantia in Marratxi (67 homes) and Nesea II in Palmanova (20 homes with rooftop terraces).',
    highlights: [
      'Spain\'s largest listed residential developer',
      'Vivantia, Marratxi: 67 homes with 2-4 bedrooms and communal pools',
      'Nesea II, Palmanova: 20 contemporary homes near the beach',
      'Sustainable builds with energy-efficient certifications',
    ],
    priceRange: 'From approx. 350,000 to 1.2M+',
    image: 'https://images.pexels.com/photos/2119714/pexels-photo-2119714.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Domus Vivendi Group',
    location: 'Southwest Mallorca & Cas Catala',
    description: 'Boutique German developer specializing in high-end villa projects across Mallorca\'s southwest coast. Current projects include CLARITY, LA TIERRA, SOLUNA, and EL JARDIN in Nova Santa Ponsa, plus ROOF BY ELEMENTS in the exclusive enclave of Cas Catala.',
    highlights: [
      'Exclusive villa projects: CLARITY, LA TIERRA, SOLUNA, EL JARDIN',
      'ROOF BY ELEMENTS: Garden apartments in Cas Catala with sea views',
      'GREEN ELEMENTS: Contemporary living in Santa Ponsa',
      'Premium finishes with bespoke interior design options',
    ],
    priceRange: 'From approx. 800,000 to 4M+',
    image: 'https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const BENEFITS = [
  { icon: Sparkles, title: 'Brand New Finishes', desc: 'Modern layouts, premium materials, and energy-efficient construction to current building standards.' },
  { icon: Shield, title: '10-Year Structural Warranty', desc: 'Spanish law mandates a 10-year builder\'s warranty on structural elements for all new builds.' },
  { icon: Building2, title: 'Customization Options', desc: 'Many developments allow buyers to select finishes, layouts, and upgrade packages during construction.' },
  { icon: Calendar, title: 'Staged Payments', desc: 'New-build purchases typically follow a payment schedule tied to construction milestones, easing cash flow.' },
];

export default function NewDevelopments() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'New Developments in Mallorca - Off-Plan Properties',
    description: 'Explore new residential developments in Mallorca from top developers including XO Jonquet, Aedas Homes, and Domus Vivendi Group.',
  };

  return (
    <>
      <SEOHead
        title="New Developments in Mallorca: Off-Plan Properties & New Builds"
        description="Discover new-build properties in Mallorca. Explore developments from XO Jonquet, Aedas Homes, and Domus Vivendi Group. Off-plan buying guide and expert matching."
        canonical="/sales/new-developments"
        schema={schema}
      />

      <section className="relative py-20 md:py-28 bg-sea-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-aqua-500/20 backdrop-blur-sm text-aqua-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-aqua-400/30">
            New Build Properties
          </div>
          <h1 className="text-white mb-6">
            New Developments in Mallorca
          </h1>
          <p className="text-sea-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Explore off-plan and new-build properties from Mallorca's most respected
            developers. Modern design, premium locations, and builder warranties included.
          </p>
          <Link to="/signup" className="btn-cta">
            Get New Development Matches <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-sea-800 mb-4">Why Buy New in Mallorca?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              New-build properties offer modern comforts, energy efficiency, and legal
              peace of mind that resale properties often can't match.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={i} className="bg-white rounded-xl border-2 border-gray-100 p-6 text-center hover:border-sea-200 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-sea-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-sea-600" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-sea-800 mb-4">Featured Developers</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Leading developers with active projects across Mallorca, from Palma's
              waterfront to the island's scenic southwest coast.
            </p>
          </div>

          <div className="space-y-16">
            {DEVELOPERS.map((dev, i) => (
              <div key={dev.name} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={dev.image}
                      alt={`${dev.name} development in Mallorca`}
                      className="w-full h-72 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md">
                      <p className="text-sm font-bold text-sea-800">{dev.name}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {dev.location}
                      </p>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{dev.name}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{dev.description}</p>

                    <ul className="space-y-3 mb-6">
                      {dev.highlights.map((h, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-700 text-sm">
                          <span className="w-5 h-5 bg-aqua-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-3 h-3 text-aqua-600" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <p className="text-sea-700 font-semibold text-sm">{dev.priceRange}</p>
                      <Link to="/signup" className="btn-primary text-sm">
                        Enquire <ExternalLink className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-sea-800 mb-6">Buying Off-Plan in Mallorca</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  Purchasing a new-build or off-plan property in Mallorca follows a structured
                  process. Buyers typically pay a reservation deposit (usually 5,000-10,000 EUR),
                  followed by a private purchase contract with 10-30% of the price, and the
                  remaining balance on completion at the notary.
                </p>
                <p>
                  Spanish law requires developers to hold a bank guarantee or insurance policy
                  protecting all advance payments. This means if the developer fails to deliver,
                  buyers can recover their funds.
                </p>
                <p>
                  New properties in Spain are subject to 10% VAT (IVA) rather than the transfer
                  tax (ITP) that applies to resale properties. Stamp duty (AJD) of 1.5% in the
                  Balearic Islands also applies. Total buying costs for new builds typically run
                  12-14% on top of the purchase price.
                </p>
                <p>
                  It is essential to engage an independent lawyer before signing any reservation
                  or purchase agreement, even if the developer provides their own legal team.
                  Your lawyer should review the building license, land registry status, community
                  statutes, and payment schedule.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/guides/buying-property-mallorca" className="btn-secondary text-sm">
                  Full Buying Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
                <Link to="/guides/property-taxes-mallorca" className="btn-secondary text-sm">
                  Tax Guide <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <MatchingForm sourcePage="/sales/new-developments" defaultType="apartment" compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Interested in a New Development?"
        subtext="Tell us your requirements and we'll match you with the right new-build projects across Mallorca."
        buttonText="Get Matched Free"
        buttonLink="/signup"
      />
    </>
  );
}
