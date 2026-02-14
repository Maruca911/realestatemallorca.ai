import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Languages, Award, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';
import MatchingForm from '../components/MatchingForm';
import { LOCATIONS } from '../data/locations';

const AGENT_LOCATIONS = ['palma', 'pollensa', 'andratx', 'soller', 'cala-dor'];

export default function Agents() {
  return (
    <>
      <SEOHead
        title="Real Estate Agents Mallorca - Vetted Local Property Experts"
        description="Find vetted, English-speaking real estate agents in Mallorca. Specialists in sales, rentals, and investment properties across Palma, Pollensa, Andratx, and more."
        canonical="/agents"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Real estate agents Mallorca professional property consultants"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Agents</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">Real Estate Agents in Mallorca &mdash; Vetted Local Experts</h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Connect with experienced, English-speaking real estate professionals who specialize
            in your target area and property type. All agents in our network are vetted for
            quality and expertise.
          </p>
          <Link to="/signup" className="btn-cta">Get Matched With an Agent <ArrowRight className="w-5 h-5 ml-2" /></Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-4">How Our Agent Matching Works</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Finding the right real estate agent in Mallorca can be challenging, especially from
                abroad. Our matching service connects you with vetted professionals who specialize
                in your preferred location, property type, and language. We work with established
                agencies including Engel &amp; Volkers, Lucas Fox, and leading independent agents.
              </p>

              <h2 className="text-sea-800 mb-4">Why Use a Vetted Agent?</h2>
              <div className="grid sm:grid-cols-2 gap-5 mb-10">
                {[
                  { icon: Shield, title: 'Quality Assured', text: 'Every agent in our network is vetted for licensing, experience, and client satisfaction.' },
                  { icon: Languages, title: 'Multilingual', text: 'Agents speaking English, German, and Spanish to serve international clients.' },
                  { icon: Award, title: 'Local Expertise', text: 'Deep knowledge of specific neighborhoods, pricing trends, and the buying process.' },
                  { icon: Star, title: 'Client Reviews', text: 'Track records verified through client feedback and transaction history.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-sea-800 mb-4">Agents by Location</h2>
              <div className="space-y-4 mb-10">
                {AGENT_LOCATIONS.map((slug) => {
                  const loc = LOCATIONS.find((l) => l.slug === slug);
                  if (!loc) return null;
                  return (
                    <div key={slug} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-sea-50 transition-colors">
                      <img src={loc.image} alt={`Real estate agents ${loc.name}`} className="w-16 h-16 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">Agents in {loc.name}</h3>
                        <p className="text-gray-500 text-sm">{loc.tagline}</p>
                      </div>
                      <Link to="/signup" className="text-aqua-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Match <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>

              <h2 className="text-sea-800 mb-4">Choosing a Real Estate Agent in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                <p>
                  The real estate agent landscape in Mallorca includes large international firms,
                  established local agencies, and independent agents. Each has its strengths: large
                  firms offer broad market access and institutional processes, while local specialists
                  provide deeper neighborhood knowledge and personal service.
                </p>
                <p>
                  In Spain, the real estate profession is not regulated as strictly as in some countries.
                  This means due diligence on your agent's credentials is important. Look for API
                  (Agente de la Propiedad Inmobiliaria) certification, membership in professional
                  associations, and a verifiable track record of completed transactions.
                </p>
                <p>
                  Agent fees in Mallorca are typically 3-5% of the sale price, paid by the seller.
                  As a buyer, you generally do not pay agent fees directly, though you should clarify
                  this at the outset. Our matching service is completely free for all users.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Agent</h3>
                  <p className="text-gray-500 text-sm mb-4">Matched to your location and needs</p>
                  <MatchingForm sourcePage="/agents" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Connect With the Right Agent for Your Needs" subtext="Tell us what you're looking for and we'll match you with a vetted specialist in your target area." buttonText="Get Matched With an Agent" />
    </>
  );
}
