import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Home, DollarSign, BarChart3, BookOpen, Shield, Users, TrendingUp, Paintbrush, TreePine, Hammer } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CTABanner from '../components/CTABanner';

const SERVICES_LIST = [
  { icon: Hammer, title: 'Property Maintenance', desc: 'Regular upkeep, repairs, and emergency callouts. Licensed local contractors with transparent pricing.' },
  { icon: TreePine, title: 'Garden & Pool Care', desc: 'Weekly garden maintenance, pool cleaning, and seasonal landscaping by experienced teams.' },
  { icon: Paintbrush, title: 'Interior Design', desc: 'Full staging and renovation services to maximize your rental appeal or sale price.' },
  { icon: Shield, title: 'Key Holding & Check-In', desc: 'Guest arrivals, property inspections, and secure key management for short-term rentals.' },
  { icon: Users, title: 'Cleaning & Linen', desc: 'Professional turnover cleaning and high-quality linen supply between guest stays.' },
  { icon: BarChart3, title: 'Accounting & Tax', desc: 'Non-resident tax filing, rental income reporting, and IBI management through local gestorias.' },
];

export default function ForOwners() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'For Home Owners - Property Services in Mallorca',
    description: 'Rent or sell your Mallorca property. Free valuation, property management, maintenance, and expert guidance for homeowners.',
  };

  return (
    <>
      <SEOHead
        title="For Home Owners: Rent, Sell & Manage Your Mallorca Property"
        description="Maximize your Mallorca property investment. Free valuation, rental management, sale listing, maintenance services, and expert guides for property owners."
        canonical="/for-owners"
        schema={schema}
      />

      <section className="relative py-20 md:py-28 bg-sea-800 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">
            Your Property, Our Expertise
          </h1>
          <p className="text-sea-100 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you want to rent, sell, or simply maintain your Mallorca property,
            we connect you with trusted local professionals who deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#rent" className="btn-cta">
              Rent Your Property <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a href="#sell" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20">
              Sell Your Property
            </a>
          </div>
        </div>
      </section>

      <section id="rent" className="section-padding scroll-mt-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-aqua-50 text-aqua-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Rental Services
              </div>
              <h2 className="text-sea-800 mb-4">Rent Your Property</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Mallorca's rental market offers strong returns, particularly for licensed
                short-term rentals. We connect you with property managers who handle
                everything from listing optimization to guest management.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Professional photography and listing creation across major platforms',
                  'Dynamic pricing that maximizes occupancy and revenue',
                  'Guest screening, check-in management, and 24/7 support',
                  'ETV license guidance and compliance management',
                  'Monthly financial reporting and tax-ready documentation',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 bg-aqua-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/etv-license-mallorca" className="btn-secondary text-sm">
                  ETV License Guide
                </Link>
                <Link to="/signup" className="btn-primary text-sm">
                  List My Property
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Beautifully furnished Mallorca rental property with terrace"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sell" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern villa for sale in Mallorca with Mediterranean garden"
                className="w-full h-80 lg:h-96 object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block bg-sea-50 text-sea-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Selling Services
              </div>
              <h2 className="text-sea-800 mb-4">Sell Your Property</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Reach qualified international buyers through our network of vetted
                agents. We match your property with the right professionals who
                specialize in your area and property type.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Free, no-obligation market valuation by local specialists',
                  'Access to a network of licensed, English-speaking agents',
                  'Professional staging advice and marketing strategy',
                  'Guidance on legal requirements, taxes, and notary process',
                  'Exposure to qualified buyers from across Europe',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="w-5 h-5 bg-sea-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link to="/guides/buying-property-mallorca" className="btn-secondary text-sm">
                  Selling Process Guide
                </Link>
                <Link to="/signup" className="btn-primary text-sm">
                  Get a Free Valuation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="estimate" className="section-padding scroll-mt-20">
        <div className="container-max text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-block bg-sand-50 text-sand-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Property Valuation
            </div>
            <h2 className="text-sea-800 mb-4">Estimate Your Property's Value</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Get a free, no-obligation valuation from agents who specialize in your area.
              Our local experts analyze recent comparable sales, location premiums, and
              current market conditions to provide an accurate estimate.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: Home, title: 'Tell Us About Your Property', desc: 'Share your property type, location, size, and key features.' },
              { icon: TrendingUp, title: 'Receive Your Valuation', desc: 'A local specialist reviews comparables and provides a market-based estimate.' },
              { icon: DollarSign, title: 'Decide Your Next Step', desc: 'Sell, rent, or hold. We connect you with the right expert for your goal.' },
            ].map((step, i) => (
              <div key={i} className="bg-white rounded-xl border-2 border-gray-100 p-6 text-center hover:border-sand-300 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-sand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-sand-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/signup" className="btn-cta">
            Request Free Valuation <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section id="services" className="section-padding bg-gray-50 scroll-mt-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <div className="inline-block bg-forest-50 text-forest-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Property Services
            </div>
            <h2 className="text-sea-800 mb-4">Maintenance & Management Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Keep your property in top condition year-round with trusted local service
              providers. From weekly pool care to full interior redesigns.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_LIST.map((svc, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg hover:border-forest-200 transition-all group">
                <div className="w-10 h-10 bg-forest-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-forest-100 transition-colors">
                  <svc.icon className="w-5 h-5 text-forest-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/signup" className="btn-primary">
              Enquire About Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <section id="guides" className="section-padding scroll-mt-20">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-sea-800 mb-4">Guides for Property Owners</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Essential reading for anyone who owns or plans to own property in Mallorca.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ETV License Guide', desc: 'How to legally rent your property to tourists. Application process, requirements, and fines for non-compliance.', path: '/guides/etv-license-mallorca', icon: BookOpen },
              { title: 'Property Taxes Guide', desc: 'IBI, ITP, capital gains, and non-resident taxes explained. Know what you owe and when.', path: '/guides/property-taxes-mallorca', icon: DollarSign },
              { title: 'Cost of Living', desc: 'Understand running costs, utility bills, and community charges for Mallorca properties.', path: '/guides/cost-of-living-mallorca', icon: BarChart3 },
              { title: 'Expat Guide', desc: 'Residency, healthcare, schooling, and daily life essentials for Mallorca property owners.', path: '/guides/expat-guide-mallorca', icon: Users },
              { title: 'NIE Number Guide', desc: 'The essential tax ID for all property transactions in Spain. How to apply and processing times.', path: '/guides/nie-number-mallorca', icon: Shield },
              { title: 'Island Comparison', desc: 'Mallorca vs Ibiza vs Menorca: rental yields, buyer demographics, and investment potential.', path: '/guides/mallorca-vs-ibiza-menorca-investment', icon: TrendingUp },
            ].map((guide) => (
              <Link
                key={guide.path}
                to={guide.path}
                className="group bg-white rounded-xl border-2 border-gray-100 p-6 hover:border-sea-200 hover:shadow-md transition-all"
              >
                <guide.icon className="w-7 h-7 text-sea-500 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-sea-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{guide.desc}</p>
                <span className="text-aqua-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Maximize Your Property's Potential?"
        subtext="Tell us about your property and goals. We'll connect you with the right local professionals within 24 hours."
        buttonText="Get Started Free"
        buttonLink="/signup"
      />
    </>
  );
}
