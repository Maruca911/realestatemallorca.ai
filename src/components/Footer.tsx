import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Instagram, Twitter, Mail, ArrowRight } from 'lucide-react';
import { isBackendEnabled, supabase } from '../lib/supabase';

const BACKEND_DISABLED_NOTICE = 'Lead and newsletter submissions are temporarily unavailable while we complete backend setup. Please check back shortly.';

const FOOTER_LINKS = {
  Rentals: [
    { label: 'Short-Term Rentals', path: '/rentals/short-term' },
    { label: 'Long-Term Rentals', path: '/rentals/long-term' },
    { label: 'Palma Rentals', path: '/rentals/short-term/palma' },
    { label: 'Alcudia Rentals', path: '/rentals/short-term/alcudia' },
  ],
  'Buy Property': [
    { label: 'Villas for Sale', path: '/sales/villas' },
    { label: 'Fincas for Sale', path: '/sales/fincas' },
    { label: 'Apartments for Sale', path: '/sales/apartments' },
    { label: 'Beachfront Property', path: '/sales/beachfront' },
    { label: 'New Developments', path: '/sales/new-developments' },
    { label: 'Investment Properties', path: '/investments' },
  ],
  'For Owners': [
    { label: 'Rent Your Property', path: '/for-owners#rent' },
    { label: 'Sell Your Property', path: '/for-owners#sell' },
    { label: 'Estimate Value', path: '/for-owners#estimate' },
    { label: 'Services', path: '/for-owners#services' },
    { label: 'Owner Guides', path: '/for-owners#guides' },
  ],
  Guides: [
    { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
    { label: 'NIE Number', path: '/guides/nie-number-mallorca' },
    { label: 'ETV License', path: '/guides/etv-license-mallorca' },
    { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
    { label: 'Expat Guide', path: '/guides/expat-guide-mallorca' },
  ],
  Resources: [
    { label: 'FAQ', path: '/faq' },
    { label: 'Blog', path: '/blog' },
    { label: 'Find an Agent', path: '/agents' },
    { label: 'Get Matched', path: '/signup' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'disabled'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    if (!isBackendEnabled || !supabase) {
      setStatus('disabled');
      return;
    }

    setStatus('loading');

    await supabase.from('newsletter_subscribers').insert({
      email,
      source_page: window.location.pathname,
    });

    setStatus('success');
    setEmail('');
  };

  return (
    <footer className="bg-sea-900 text-white">
      <div className="container-max section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-6">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Home className="w-7 h-7 text-aqua-400" />
              <span className="font-heading font-bold text-lg">
                Real Estate <span className="text-aqua-400">Mallorca</span>
              </span>
            </Link>
            <p className="text-sea-200 text-sm leading-relaxed mb-6 max-w-sm">
              Free property matching service for Mallorca. We connect you with vetted
              short-term rentals, villas, fincas, and investment opportunities. Get 3
              personalized options within 24 hours.
            </p>

            <form onSubmit={handleSubscribe} className="flex max-w-sm">
              {status === 'success' ? (
                <p className="text-aqua-400 text-sm font-medium">Thanks for subscribing!</p>
              ) : (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email for market updates"
                    className="flex-1 px-4 py-2.5 rounded-l-lg bg-sea-800 border border-sea-700 text-white placeholder-sea-400 text-sm focus:outline-none focus:ring-2 focus:ring-aqua-500"
                    required
                    disabled={!isBackendEnabled}
                  />
                  <button
                    type="submit"
                    disabled={!isBackendEnabled || status === 'loading'}
                    className="px-4 py-2.5 bg-aqua-500 hover:bg-aqua-600 rounded-r-lg transition-colors disabled:opacity-60"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </form>
            {(!isBackendEnabled || status === 'disabled') && (
              <p className="text-amber-300 text-xs mt-2 max-w-sm">{BACKEND_DISABLED_NOTICE}</p>
            )}
          </div>

          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-aqua-400 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sea-200 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-sea-800 space-y-4">
          <p className="text-sea-500 text-xs leading-relaxed max-w-3xl">
            Content on this site is produced with the assistance of AI and is reviewed for accuracy. Market data, tax rates, and legal information are for general guidance only and may change. Always consult qualified local professionals (lawyers, tax advisors, licensed agents) before making property or financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sea-400 text-xs">
            &copy; {new Date().getFullYear()} Real Estate Mallorca. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sea-400 hover:text-aqua-400 transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-sea-400 hover:text-aqua-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="mailto:hello@realestatemallorca.ai" className="text-sea-400 hover:text-aqua-400 transition-colors" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
