import { ClipboardList, Search, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const STEPS = [
  {
    icon: ClipboardList,
    title: 'Tell Us Your Preferences',
    description: 'Share your ideal property type, location in Mallorca, budget, and timeline. Takes under 2 minutes.',
  },
  {
    icon: Search,
    title: 'We Match You',
    description: 'Our local experts search through vetted properties and agents to find your perfect fit.',
  },
  {
    icon: Mail,
    title: 'Get 3 Options in 24h',
    description: 'Receive 3 curated property matches via email or WhatsApp, ready for you to explore.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-sea-800 mb-4">How Free Matching Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Whether you need a short-term rental in Palma or a finca in the countryside,
            we connect you with the right property in 3 simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-sea-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-sea-100 transition-colors">
                <step.icon className="w-7 h-7 text-sea-500" />
              </div>
              <div className="inline-block bg-aqua-50 text-aqua-700 text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                Step {i + 1}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/signup" className="btn-cta">
            Start Free Matching
          </Link>
        </div>
      </div>
    </section>
  );
}
