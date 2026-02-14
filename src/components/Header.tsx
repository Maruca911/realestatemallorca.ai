import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

interface NavChild {
  label: string;
  path: string;
}

interface NavItem {
  label: string;
  path: string;
  highlight?: boolean;
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Sales',
    path: '/sales',
    children: [
      { label: 'Villas', path: '/sales/villas' },
      { label: 'Fincas', path: '/sales/fincas' },
      { label: 'Apartments', path: '/sales/apartments' },
      { label: 'Beachfront', path: '/sales/beachfront' },
      { label: 'New Developments', path: '/sales/new-developments' },
      { label: 'Investments', path: '/investments' },
    ],
  },
  {
    label: 'Rentals',
    path: '/rentals',
    highlight: true,
    children: [
      { label: 'Short-Term Rentals', path: '/rentals/short-term' },
      { label: 'Long-Term Rentals', path: '/rentals/long-term' },
    ],
  },
  {
    label: 'For Home Owners',
    path: '/for-owners',
    children: [
      { label: 'Rent Your Property', path: '/for-owners#rent' },
      { label: 'Sell Your Property', path: '/for-owners#sell' },
      { label: 'Estimate Value', path: '/for-owners#estimate' },
      { label: 'Services', path: '/for-owners#services' },
      { label: 'Guides', path: '/for-owners#guides' },
    ],
  },
  {
    label: 'Guides',
    path: '/guides/buying-property-mallorca',
    children: [
      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
      { label: 'NIE Number', path: '/guides/nie-number-mallorca' },
      { label: 'ETV License', path: '/guides/etv-license-mallorca' },
      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
      { label: 'Cost of Living', path: '/guides/cost-of-living-mallorca' },
      { label: 'Expat Guide', path: '/guides/expat-guide-mallorca' },
      { label: 'Island Comparison', path: '/guides/mallorca-vs-ibiza-menorca-investment' },
    ],
  },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="flex items-center gap-2 group">
            <Home className="w-7 h-7 text-sea-500 group-hover:text-sea-600 transition-colors" />
            <span className="font-heading font-bold text-lg text-sea-800">
              Real Estate <span className="text-aqua-500">Mallorca</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    item.highlight
                      ? 'text-aqua-600 hover:bg-aqua-50 font-semibold'
                      : location.pathname.startsWith(item.path) && item.path !== '/'
                      ? 'text-sea-600 bg-sea-50'
                      : location.pathname === item.path
                      ? 'text-sea-600 bg-sea-50'
                      : 'text-gray-700 hover:text-sea-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && openDropdown === item.path && (
                  <div className="absolute top-full left-0 mt-0.5 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 animate-slide-down">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-sea-50 hover:text-sea-600 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <LanguageSwitcher />
            <Link to="/signup" className="btn-primary ml-3 text-sm">
              Get Matched Free
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg animate-slide-down">
          <nav className="container-max px-4 py-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  className={`block px-4 py-3 rounded-md font-medium transition-colors ${
                    item.highlight
                      ? 'text-aqua-600 bg-aqua-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-sea-600 rounded-md hover:bg-gray-50"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/signup" className="btn-primary w-full mt-4 text-center">
              Get Matched Free
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
