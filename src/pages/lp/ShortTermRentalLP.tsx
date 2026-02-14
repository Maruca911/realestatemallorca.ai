import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Check, Star, Clock, Shield, Users, Loader2 } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const LOCATIONS = [
  'Palma', 'Alcudia', 'Pollensa', 'Soller', 'Deia',
  'Andratx', 'Santa Ponsa', 'Cala d\'Or', 'Magaluf', 'Other',
];

export default function ShortTermRentalLP() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [consent, setConsent] = useState(false);
  const [form, setForm] = useState({
    location: '',
    guests: '',
    name: '',
    email: '',
    phone: '',
  });

  const set = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));

  const submit = async () => {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    await supabase.from('leads').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      property_type: 'short-term',
      location_preference: form.location,
      bedrooms: form.guests,
      source_page: '/lp/short-term-rentals',
      utm_source: params.get('utm_source') || null,
      utm_medium: params.get('utm_medium') || null,
      utm_campaign: params.get('utm_campaign') || null,
    });
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sea-800 to-sea-900 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl p-8 md:p-12 max-w-lg w-full text-center shadow-2xl">
          <div className="w-16 h-16 bg-forest-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-forest-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">We're On It</h1>
          <p className="text-gray-600 mb-6">
            Our local team is reviewing your request now. You'll receive 3 hand-picked short-term
            rental options in your inbox within 24 hours.
          </p>
          <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500">
            Check your email ({form.email}) for a confirmation and your matches.
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Helmet>
      <title>Find Short-Term Rentals in Mallorca | Free Matching Service</title>
      <meta name="description" content="Get 3 hand-picked vacation rental options in Mallorca delivered to your inbox in 24 hours. Completely free matching service." />
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <div className="min-h-screen bg-gradient-to-b from-sea-800 to-sea-900">
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="text-center mb-8 md:mb-10">
          <div className="text-aqua-400 font-bold text-sm tracking-wider uppercase mb-3">
            Free Matching Service
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
            Find Your Perfect Short-Term Rental in Mallorca
          </h1>
          <p className="text-sea-200 text-lg max-w-xl mx-auto">
            Tell us what you need. Get 3 hand-picked vacation rental options delivered to your inbox in 24 hours. Completely free.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step > s ? 'bg-forest-500 text-white' : step === s ? 'bg-aqua-500 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {step > s ? <Check className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? 'bg-forest-500' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>

            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Where in Mallorca?</h2>
                <div className="grid grid-cols-2 gap-2">
                  {LOCATIONS.map((loc) => (
                    <button
                      key={loc}
                      onClick={() => set('location', loc)}
                      className={`p-3 rounded-lg text-sm font-medium text-left transition-colors border ${
                        form.location === loc
                          ? 'bg-sea-50 border-sea-300 text-sea-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => form.location && setStep(2)}
                  disabled={!form.location}
                  className="w-full btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  Continue <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">How many guests?</h2>
                <div className="grid grid-cols-2 gap-2">
                  {['1-2', '3-4', '5-6', '7-8', '9-12', '12+'].map((g) => (
                    <button
                      key={g}
                      onClick={() => set('guests', g)}
                      className={`p-3 rounded-lg text-sm font-medium transition-colors border ${
                        form.guests === g
                          ? 'bg-sea-50 border-sea-300 text-sea-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {g} guests
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setStep(1)} className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">Back</button>
                  <button
                    onClick={() => form.guests && setStep(3)}
                    disabled={!form.guests}
                    className="flex-1 btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Continue <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-gray-900">Where should we send your matches?</h2>
                <input
                  type="text"
                  placeholder="Full name"
                  value={form.name}
                  onChange={(e) => set('name', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={(e) => set('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => set('phone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm focus:ring-2 focus:ring-aqua-500 focus:border-aqua-500 outline-none"
                />
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 rounded border-gray-300 text-aqua-500 focus:ring-aqua-500"
                  />
                  <span className="text-xs text-gray-500">
                    I agree to the processing of my personal data to receive property matches. You can withdraw consent at any time by contacting us.
                  </span>
                </label>
                <div className="flex gap-2">
                  <button onClick={() => setStep(2)} className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">Back</button>
                  <button
                    onClick={submit}
                    disabled={!form.name || !form.email || !consent || loading}
                    className="flex-1 btn-cta disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ArrowRight className="w-4 h-4" /> Get My 3 Matches</>}
                  </button>
                </div>
                <p className="text-xs text-gray-400 text-center">100% free. No spam. Matches delivered within 24 hours.</p>
              </div>
            )}
          </div>

          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              {[
                { icon: Clock, title: '3 Matches in 24 Hours', text: 'Our local team hand-picks 3 vacation rentals tailored to your exact requirements.' },
                { icon: Shield, title: 'Vetted Properties Only', text: 'Every property is verified by our team. Licensed, well-maintained, and accurately described.' },
                { icon: Users, title: 'Local Expert Support', text: 'A dedicated local concierge assists you from booking through to check-out.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-sea-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-aqua-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sea-200 text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sea-700/30 rounded-xl p-5 border border-sea-600/30">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sand-400 fill-sand-400" />
                ))}
                <span className="text-white text-sm font-medium ml-2">4.9/5</span>
              </div>
              <p className="text-sea-100 text-sm italic mb-2">
                "We described what we wanted and within 24 hours had 3 perfect options. Booked one
                immediately. The local support during our stay was outstanding."
              </p>
              <p className="text-sea-300 text-xs">Sarah M. -- Family of 4 from London</p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                { value: 'Free', label: 'Completely Free' },
                { value: '24h', label: 'Average Response' },
                { value: '97%', label: 'Satisfaction Rate' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-sea-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
