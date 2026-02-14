import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageCode, LANGUAGE_CODES, DEFAULT_LANGUAGE } from './lib/i18n/config';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Signup from './pages/Signup';
import RentalsHub from './pages/rentals/RentalsHub';
import ShortTermRentals from './pages/rentals/ShortTermRentals';
import ShortTermLocation from './pages/rentals/ShortTermLocation';
import LongTermRentals from './pages/rentals/LongTermRentals';
import LongTermLocation from './pages/rentals/LongTermLocation';
import SalesHub from './pages/sales/SalesHub';
import Villas from './pages/sales/Villas';
import Fincas from './pages/sales/Fincas';
import Apartments from './pages/sales/Apartments';
import Beachfront from './pages/sales/Beachfront';
import SaleLocation from './pages/sales/SaleLocation';
import NewDevelopments from './pages/sales/NewDevelopments';
import Investments from './pages/Investments';
import ForOwners from './pages/ForOwners';
import Agents from './pages/Agents';
import FAQ from './pages/FAQ';
import BlogIndex from './pages/blog/BlogIndex';
import BlogPostPage from './pages/blog/BlogPostPage';
import BuyingGuide from './pages/guides/BuyingGuide';
import NIEGuide from './pages/guides/NIEGuide';
import ETVGuide from './pages/guides/ETVGuide';
import CostOfLiving from './pages/guides/CostOfLiving';
import PropertyTaxes from './pages/guides/PropertyTaxes';
import ExpatGuide from './pages/guides/ExpatGuide';
import IslandComparison from './pages/guides/IslandComparison';
import ShortTermRentalLP from './pages/lp/ShortTermRentalLP';

function LanguageRouter() {
  const { setLanguage } = useLanguage();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />

      {LANGUAGE_CODES.map((lang) => (
        <Route
          key={lang}
          path={`/${lang}/*`}
          element={
            <LanguageRouterInner
              lang={lang}
              onLanguageChange={() => setLanguage(lang)}
            />
          }
        />
      ))}

      <Route path="*" element={<Navigate to={`/${DEFAULT_LANGUAGE}`} replace />} />
    </Routes>
  );
}

interface LanguageRouterInnerProps {
  lang: LanguageCode;
  onLanguageChange: () => void;
}

function LanguageRouterInner({ lang, onLanguageChange }: LanguageRouterInnerProps) {
  const { currentLanguage, setLanguage } = useLanguage();

  useEffect(() => {
    if (currentLanguage !== lang) {
      setLanguage(lang);
      onLanguageChange();
    }
  }, [lang, currentLanguage, setLanguage, onLanguageChange]);

  return (
    <Routes>
      <Route path="/lp/short-term-rentals" element={<ShortTermRentalLP />} />

      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/rentals" element={<RentalsHub />} />
        <Route path="/rentals/short-term" element={<ShortTermRentals />} />
        <Route path="/rentals/short-term/:slug" element={<ShortTermLocation />} />
        <Route path="/rentals/long-term" element={<LongTermRentals />} />
        <Route path="/rentals/long-term/:slug" element={<LongTermLocation />} />

        <Route path="/sales" element={<SalesHub />} />
        <Route path="/sales/villas" element={<Villas />} />
        <Route path="/sales/villas/:slug" element={<SaleLocation type="villas" />} />
        <Route path="/sales/fincas" element={<Fincas />} />
        <Route path="/sales/fincas/:slug" element={<SaleLocation type="fincas" />} />
        <Route path="/sales/apartments" element={<Apartments />} />
        <Route path="/sales/apartments/:slug" element={<SaleLocation type="apartments" />} />
        <Route path="/sales/beachfront" element={<Beachfront />} />
        <Route path="/sales/new-developments" element={<NewDevelopments />} />

        <Route path="/investments" element={<Investments />} />
        <Route path="/for-owners" element={<ForOwners />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/faq" element={<FAQ />} />

        <Route path="/guides/buying-property-mallorca" element={<BuyingGuide />} />
        <Route path="/guides/nie-number-mallorca" element={<NIEGuide />} />
        <Route path="/guides/etv-license-mallorca" element={<ETVGuide />} />
        <Route path="/guides/cost-of-living-mallorca" element={<CostOfLiving />} />
        <Route path="/guides/property-taxes-mallorca" element={<PropertyTaxes />} />
        <Route path="/guides/expat-guide-mallorca" element={<ExpatGuide />} />
        <Route path="/guides/mallorca-vs-ibiza-menorca-investment" element={<IslandComparison />} />

        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <LanguageRouter />
    </LanguageProvider>
  );
}
