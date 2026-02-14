import SEOHead from '../components/SEOHead';
import MatchingForm from '../components/MatchingForm';
import { Shield, Clock, Sparkles } from 'lucide-react';

export default function Signup() {
  return (
    <>
      <SEOHead
        title="Get Matched Free - Find Your Perfect Mallorca Property"
        description="Submit your preferences and receive 3 personalized property matches in Mallorca within 24 hours. Short-term rentals, villas, fincas, and investment properties."
        canonical="/signup"
      />

      <section className="min-h-screen bg-gradient-to-br from-sea-50 to-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h1 className="text-sea-800 mb-6">
                Get Your Free Property Match in Mallorca
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Whether you need a short-term vacation rental, a villa to buy, or an
                investment property, our local experts will find 3 perfect matches for you
                within 24 hours. Completely free, no obligations.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: Sparkles, title: '3 Curated Matches', text: 'Hand-picked options from vetted agents that match your exact requirements.' },
                  { icon: Clock, title: '24-Hour Delivery', text: 'Receive your personalized matches via email or WhatsApp within one business day.' },
                  { icon: Shield, title: '100% Free Service', text: 'No fees, no hidden costs, no spam. We are compensated by partner agents.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-aqua-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-aqua-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                <p className="text-sea-700 text-sm leading-relaxed">
                  "We submitted our preferences on a Monday morning and had 3 fantastic
                  short-term rental options in our inbox by Tuesday. Two of them were exactly
                  what we were looking for. Saved us hours of searching."
                </p>
                <p className="text-sea-500 text-sm font-semibold mt-3">
                  &mdash; Marcus & Julia, Berlin
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-1">Tell Us Your Preferences</h2>
              <p className="text-gray-500 text-sm mb-6">Takes under 2 minutes</p>
              <MatchingForm sourcePage="/signup" compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
