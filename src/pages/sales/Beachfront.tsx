import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Waves, Sun, TrendingUp, Shield } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';
import InlineFAQ from '../../components/InlineFAQ';

const BEACHFRONT_AREAS = [
  { name: 'Port d\'Andratx', type: 'Luxury Villas & Apartments', range: '800k - 8M+', walk: '1-5 min', desc: 'Exclusive harbour-front properties with sunset views. Mallorca\'s most prestigious waterfront address.' },
  { name: 'Palma Paseo Maritimo', type: 'Apartments & Penthouses', range: '400k - 3M', walk: 'Direct', desc: 'Seafront promenade living in the capital. Walking distance to restaurants, marina, and Old Town.' },
  { name: 'Port de Pollensa', type: 'Apartments & Townhouses', range: '300k - 1.5M', walk: '1-3 min', desc: 'Calm bay setting with a pedestrian pine walk. Popular with families and sailing enthusiasts.' },
  { name: 'Cala d\'Or', type: 'Apartments & Villas', range: '200k - 1.5M', walk: '2-8 min', desc: 'Multiple turquoise coves with pine-fringed beaches. Best value beachfront on the island.' },
  { name: 'Port de Soller', type: 'Apartments & Townhouses', range: '350k - 2M', walk: '1-5 min', desc: 'Horseshoe bay with tram connection to Soller town. Charming harbour-side properties.' },
  { name: 'Alcudia / Playa de Muro', type: 'Apartments & Villas', range: '250k - 1.2M', walk: '1-5 min', desc: 'Mallorca\'s longest sandy beach with shallow, family-friendly water. Strong rental demand.' },
  { name: 'Santa Ponsa', type: 'Apartments', range: '200k - 800k', walk: '2-8 min', desc: 'Wide sandy beach with promenade. International community and golf courses nearby.' },
  { name: 'Camp de Mar', type: 'Villas & Apartments', range: '500k - 4M', walk: '1-5 min', desc: 'Quiet, upscale beach cove between Andratx and Peguera. Small-scale, exclusive setting.' },
];

const FAQ_ITEMS = [
  { q: 'What counts as "beachfront" property in Mallorca?', a: 'In Mallorca, beachfront (primera linea de mar) typically means properties within 100-200 meters of the shoreline or with direct, unobstructed sea views. True frontline properties command a 30-60% premium over comparable inland properties. "Second line" properties (200-500m from the beach) offer more affordable alternatives with easy beach access.' },
  { q: 'Are beachfront properties in Mallorca affected by coastal regulations?', a: 'Yes. Spain\'s Ley de Costas (Coastal Law) restricts construction within designated coastal protection zones. Your lawyer must verify that the property has a valid building license and is not within the public maritime-terrestrial domain. Properties built before the law was enacted may have grandfathered rights but with limitations.' },
  { q: 'Can I get a tourist rental license for a beachfront property?', a: 'It depends on the municipality and property type. Beachfront villas (single-family homes) are more likely to qualify for an ETV license than apartments in multi-dwelling buildings, where new licenses have been largely suspended. Properties with existing licenses are highly sought after.' },
  { q: 'Do beachfront properties hold their value better?', a: 'Historically, yes. First-line properties in Mallorca have shown stronger appreciation than inland equivalents, averaging 5-8% annual growth in premium coastal areas, with first-line locations occasionally exceeding this. Limited supply (the coastline is fixed) and consistently strong demand from international buyers underpin this trend.' },
  { q: 'What are the risks of buying beachfront in Mallorca?', a: 'Key considerations include: coastal erosion in some areas, higher salt-air maintenance costs, stricter renovation regulations, potential changes to coastal protection laws, and seasonal noise from nearby beach bars or tourist activity. A thorough survey and legal due diligence are essential.' },
];

export default function Beachfront() {
  return (
    <>
      <SEOHead
        title="Beachfront Property Mallorca - Sea View Homes & Coastal Villas"
        description="Find beachfront property for sale in Mallorca. First-line villas, sea-view apartments, and waterfront homes in Andratx, Palma, Pollensa, Cala d'Or. Expert matching."
        canonical="/sales/beachfront"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Beachfront property in Mallorca with Mediterranean sea views"
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
            <span className="text-white">Beachfront</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Beachfront Property for Sale in Mallorca</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            First-line sea-view villas, waterfront apartments, and coastal homes in Mallorca's most
            sought-after beach locations. The ultimate Mediterranean property investment.
          </p>
          <Link to="/signup" className="btn-cta">
            Match Beachfront Properties <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-4">Why Beachfront in Mallorca?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: Waves, title: 'Mediterranean Lifestyle', text: 'Wake up to sea views, walk to the beach, and enjoy the outdoor Mediterranean lifestyle that draws 14 million visitors to Mallorca annually.' },
                  { icon: TrendingUp, title: 'Premium Appreciation', text: 'First-line properties appreciate 6-10% annually in prime locations. Limited coastal supply ensures long-term value growth outperforms inland markets.' },
                  { icon: Sun, title: '300+ Days of Sunshine', text: 'Mallorca enjoys one of the best climates in Europe. Beachfront living is a year-round proposition, not just a summer escape.' },
                  { icon: Shield, title: 'Scarcity Value', text: 'Strict coastal building regulations mean virtually no new beachfront development. Existing properties benefit from permanently limited supply.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-6">Beachfront Areas and Prices</h2>
              <div className="space-y-4 mb-10">
                {BEACHFRONT_AREAS.map((area, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5 hover:border-sea-200 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-aqua-500" />{area.name}
                      </h3>
                      <span className="text-sea-600 font-semibold text-sm">{area.range}</span>
                    </div>
                    <div className="flex flex-wrap gap-3 mb-2">
                      <span className="text-xs bg-sea-50 text-sea-700 px-2 py-0.5 rounded">{area.type}</span>
                      <span className="text-xs bg-aqua-50 text-aqua-700 px-2 py-0.5 rounded">Beach: {area.walk}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Buying Beachfront Property in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 mb-10">
                <p>
                  Beachfront property in Mallorca represents the pinnacle of Mediterranean real estate.
                  With 262 beaches across the island and strict coastal development regulations, first-line
                  properties are a finite and increasingly valuable asset class. Demand from international
                  buyers -- particularly from Germany, the UK, Scandinavia, and increasingly the US --
                  continues to outstrip supply in prime coastal locations.
                </p>
                <p>
                  Due diligence is particularly important for beachfront purchases. Your lawyer must verify
                  compliance with the Ley de Costas (Coastal Law), confirm building licenses, check for
                  any public right-of-way issues, and ensure there are no maritime domain claims against
                  the property. Properties within 100 meters of the high-water mark may face additional
                  restrictions on renovation and extension.
                </p>
                <p>
                  For buyers considering beachfront as an investment, properties with existing ETV tourist
                  rental licenses are particularly valuable. A licensed beachfront villa or apartment can
                  generate 40,000-120,000 EUR in seasonal rental income while appreciating in capital value.
                  See our{' '}
                  <Link to="/guides/etv-license-mallorca" className="text-aqua-600 hover:underline">ETV license guide</Link>{' '}
                  for licensing details.
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
                  <h3 className="font-bold text-gray-900 mb-1">Find Beachfront Property</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/sales/beachfront" defaultType="villa" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Pages</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Villas for Sale', path: '/sales/villas' },
                      { label: 'Apartments for Sale', path: '/sales/apartments' },
                      { label: 'ETV License Guide', path: '/guides/etv-license-mallorca' },
                      { label: 'Investment Properties', path: '/investments' },
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
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

      <CTABanner heading="Find Your Beachfront Dream Home" subtext="Tell us your preferred location, budget, and property type. We'll match you with 3 beachfront options in 24 hours." />
    </>
  );
}
