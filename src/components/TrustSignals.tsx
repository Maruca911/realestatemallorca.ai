import { Shield, Clock, Users, Award } from 'lucide-react';

const SIGNALS = [
  { icon: Shield, label: 'Vetted Agents Only', value: '100%' },
  { icon: Clock, label: '24-Hour Response', value: '<24h' },
  { icon: Users, label: 'Service', value: 'Free' },
  { icon: Award, label: 'Satisfaction Rate', value: '97%' },
];

export default function TrustSignals() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {SIGNALS.map((signal, i) => (
            <div key={i} className="text-center">
              <signal.icon className="w-6 h-6 text-aqua-500 mx-auto mb-2" />
              <div className="text-2xl font-bold text-sea-800 font-heading">{signal.value}</div>
              <div className="text-sm text-gray-500 mt-1">{signal.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
