import { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface MatchingFormProps {
  sourcePage: string;
  defaultType?: string;
  compact?: boolean;
}

const PROPERTY_TYPES = [
  { value: 'short-term', label: 'Short-Term Rental' },
  { value: 'long-term', label: 'Long-Term Rental' },
  { value: 'villa', label: 'Villa for Sale' },
  { value: 'finca', label: 'Finca for Sale' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'investment', label: 'Investment Property' },
];

const LOCATIONS = [
  'Palma', 'Alcudia', 'Pollensa', 'Soller', 'Deia',
  'Andratx', 'Santa Ponsa', 'Cala d\'Or', 'Magaluf', 'Other',
];

const BUDGETS = [
  { value: '0-100', label: 'Up to 100/night' },
  { value: '100-200', label: '100 - 200/night' },
  { value: '200-350', label: '200 - 350/night' },
  { value: '350-500', label: '350 - 500/night' },
  { value: '500+', label: '500+/night' },
];

const SALE_BUDGETS = [
  { value: '0-300000', label: 'Under 300k' },
  { value: '300000-500000', label: '300k - 500k' },
  { value: '500000-1000000', label: '500k - 1M' },
  { value: '1000000-2000000', label: '1M - 2M' },
  { value: '2000000+', label: '2M+' },
];

export default function MatchingForm({ sourcePage, defaultType = 'short-term', compact = false }: MatchingFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    property_type: defaultType,
    location_preference: '',
    budget: '',
    name: '',
    email: '',
    phone: '',
    contact_method: 'email',
  });

  const isRental = form.property_type === 'short-term' || form.property_type === 'long-term';
  const budgetOptions = isRental ? BUDGETS : SALE_BUDGETS;

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const params = new URLSearchParams(window.location.search);
    const budgetParts = form.budget.split('-');

    await supabase.from('leads').insert({
      name: form.name,
      email: form.email,
      phone: form.phone || null,
      contact_method: form.contact_method,
      property_type: form.property_type,
      location_preference: form.location_preference,
      budget_min: budgetParts[0] ? parseInt(budgetParts[0]) : null,
      budget_max: budgetParts[1] ? parseInt(budgetParts[1].replace('+', '')) : null,
      source_page: sourcePage,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
    });

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 bg-success-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-success-500" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">You're Matched!</h3>
        <p className="text-gray-600">
          We'll send you 3 personalized options within 24 hours. Check your email.
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (step < 3) {
            setStep(step + 1);
          } else {
            handleSubmit();
          }
        }}
        className="space-y-4"
      >
        {step === 1 && (
          <div className="animate-fade-in">
            <label className="block text-sm font-medium text-gray-700 mb-2">What are you looking for?</label>
            <div className="grid grid-cols-2 gap-2">
              {PROPERTY_TYPES.map((type) => (
                <button
                  key={type.value}
                  type="button"
                  onClick={() => update('property_type', type.value)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium border-2 transition-all ${
                    form.property_type === type.value
                      ? 'border-aqua-500 bg-aqua-50 text-aqua-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep(2)}
              className="btn-cta w-full mt-4 text-base"
            >
              Next <ArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="animate-fade-in space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Location</label>
              <div className="grid grid-cols-2 gap-2">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => update('location_preference', loc)}
                    className={`px-3 py-2 rounded-lg text-sm border-2 transition-all ${
                      form.location_preference === loc
                        ? 'border-aqua-500 bg-aqua-50 text-aqua-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <div className="grid grid-cols-1 gap-2">
                {budgetOptions.map((b) => (
                  <button
                    key={b.value}
                    type="button"
                    onClick={() => update('budget', b.value)}
                    className={`px-3 py-2 rounded-lg text-sm border-2 transition-all text-left ${
                      form.budget === b.value
                        ? 'border-aqua-500 bg-aqua-50 text-aqua-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-primary w-full" disabled={!form.location_preference || !form.budget}>
              Continue <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="animate-fade-in space-y-3">
            <input
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-500 focus:border-transparent text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-500 focus:border-transparent text-sm"
              required
            />
            <input
              type="tel"
              placeholder="Phone / WhatsApp (optional)"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-aqua-500 focus:border-transparent text-sm"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => update('contact_method', 'email')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                  form.contact_method === 'email' ? 'border-aqua-500 bg-aqua-50 text-aqua-700' : 'border-gray-200 text-gray-600'
                }`}
              >
                Email
              </button>
              <button
                type="button"
                onClick={() => update('contact_method', 'whatsapp')}
                className={`flex-1 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                  form.contact_method === 'whatsapp' ? 'border-aqua-500 bg-aqua-50 text-aqua-700' : 'border-gray-200 text-gray-600'
                }`}
              >
                WhatsApp
              </button>
            </div>
            <button type="submit" className="btn-cta w-full" disabled={loading || !form.email || !form.name}>
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Get My 3 Matches <ArrowRight className="w-5 h-5 ml-1" /></>}
            </button>
            <p className="text-xs text-gray-500 text-center">Free service. No spam. Unsubscribe anytime.</p>
          </div>
        )}

        {step > 1 && (
          <button type="button" onClick={() => setStep(step - 1)} className="text-sm text-gray-500 hover:text-gray-700">
            &larr; Back
          </button>
        )}
      </form>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              step > s ? 'bg-success-500 text-white' : step === s ? 'bg-aqua-500 text-white' : 'bg-gray-200 text-gray-500'
            }`}>
              {step > s ? <Check className="w-4 h-4" /> : s}
            </div>
            {s < 3 && <div className={`w-8 h-0.5 ${step > s ? 'bg-success-500' : 'bg-gray-200'}`} />}
          </div>
        ))}
      </div>

      <MatchingForm sourcePage={sourcePage} defaultType={defaultType} compact />
    </div>
  );
}
