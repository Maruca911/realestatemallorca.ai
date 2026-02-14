import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, GraduationCap, Stethoscope, Briefcase, Home } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const RESIDENCY_OPTIONS = [
  { title: 'EU/EEA Citizens', timeline: '1-2 weeks', desc: 'Register at the local Oficina de Extranjeros with your NIE, passport, proof of health insurance or employment, and proof of financial means. You receive a green residency certificate (Certificado de Registro de Ciudadano de la Union). No visa required.' },
  { title: 'Non-Lucrative Visa', timeline: '2-3 months', desc: 'For non-EU citizens who can support themselves without working in Spain. Requires proof of income (approx. 28,800 EUR/year for the main applicant + 7,200 EUR per dependent), private health insurance, clean criminal record, and a medical certificate. Applied for at the Spanish consulate in your home country.' },
  { title: 'Digital Nomad Visa', timeline: '2-3 months', desc: 'For remote workers employed by or contracting with companies outside Spain. Must prove minimum income of 28,800 EUR/year, employment or contract with a non-Spanish company for at least 1 year, and qualifications or 3+ years experience. Favorable tax rate of 15% on Spanish-source income for the first 4 years.' },
  { title: 'Golden Visa', timeline: '2-4 months', desc: 'For non-EU citizens investing 500,000+ EUR in Spanish property. Grants residency to the investor and family members. No minimum stay requirement. Note: Spain has announced legislative intent to end this program for real estate investments -- verify current status with an immigration lawyer before relying on this route.' },
  { title: 'Self-Employed / Autonomo', timeline: '3-4 months', desc: 'For freelancers and entrepreneurs. Register as autonomo (self-employed) with a viable business plan. Non-EU citizens need a work visa first. Monthly social security contributions start at approximately 230 EUR/month under the graduated system, increasing with income.' },
];

const AREAS_FOR_EXPATS = [
  { name: 'Palma', why: 'International schools, hospitals, cultural scene, airport proximity', community: 'Large international community, all nationalities', best: 'Professionals, families, urban lifestyle' },
  { name: 'Santa Ponsa / Calvia', why: 'International schools, golf, family beaches', community: 'British, Scandinavian, German', best: 'Families with school-age children' },
  { name: 'Pollensa / Alcudia', why: 'Natural beauty, relaxed pace, lower costs', community: 'British, German, Dutch', best: 'Retirees, remote workers, nature lovers' },
  { name: 'Soller / Deia', why: 'Artistic community, mountain scenery, village life', community: 'Mixed international, artistic', best: 'Artists, writers, those seeking tranquility' },
  { name: 'Andratx / Port d\'Andratx', why: 'Luxury living, marina, sunset views', community: 'German, Scandinavian, British', best: 'High-net-worth individuals, boat owners' },
];

const FAQ_ITEMS = [
  { q: 'How do I become a resident of Mallorca?', a: 'EU citizens register at the Oficina de Extranjeros with a NIE, passport, health insurance proof, and financial means documentation. Non-EU citizens need a visa (non-lucrative, digital nomad, golden, or work visa) applied for at the Spanish consulate before traveling. After 5 years of legal residency, you can apply for permanent residency.' },
  { q: 'What is the healthcare system like in Mallorca?', a: 'Spain has excellent public healthcare (ranked among the best in Europe). Residents who pay social security can access the public system. Non-residents and those waiting for registration typically use private insurance (800-2,000 EUR/year). Palma has major hospitals including Son Espases and Clinica Juaneda with English-speaking staff.' },
  { q: 'Are there international schools in Mallorca?', a: 'Yes. Mallorca has over 15 international schools offering British, German, French, American, and Scandinavian curricula. The main clusters are in Palma and the southwest (Calvia/Santa Ponsa). Fees range from 5,000-15,000 EUR per year depending on the school and age group.' },
  { q: 'Do I need to speak Spanish to live in Mallorca?', a: 'Mallorca is bilingual (Spanish and Catalan/Mallorquin). In tourist areas and expat-heavy neighborhoods, English is widely spoken. However, learning at least basic Spanish significantly improves your daily life, especially for bureaucracy, healthcare, and building genuine local connections. Many expats take intensive courses upon arrival.' },
  { q: 'What is the tax situation for expats in Mallorca?', a: 'Tax residents (183+ days/year in Spain) pay progressive income tax (19-47%), though the Beckham Law allows qualifying new residents (including certain self-employed and digital nomad cases since 2023 reforms) to pay a flat 24% on Spanish-source income for 6 years. Non-residents pay tax only on Spanish-source income. Double taxation treaties prevent being taxed twice. Consult a fiscal advisor before moving.' },
];

export default function ExpatGuide() {
  return (
    <>
      <SEOHead
        title="Expat Guide to Mallorca: Moving, Living & Residency 2026"
        description="Complete expat guide to living in Mallorca. Residency options, healthcare, international schools, cost of living, best areas, and practical tips for moving to the island."
        canonical="/guides/expat-guide-mallorca"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="Expat Guide" />
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-8 h-8 text-aqua-400" />
            <span className="text-aqua-400 text-sm font-semibold uppercase tracking-wider">Lifestyle Guide</span>
          </div>
          <h1 className="max-w-3xl mb-4">Expat Guide to Mallorca: Moving and Living on the Island</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            Everything you need to know about relocating to Mallorca. Residency permits, healthcare, schools,
            best areas for expats, and practical advice from people who have done it.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">Why Expats Choose Mallorca</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mallorca has one of the largest international communities in the Mediterranean, with
                  an estimated 100,000+ foreign residents from over 130 nationalities. The island offers
                  a rare combination: world-class infrastructure (international airport with direct flights
                  to 180+ destinations, modern hospitals, fast internet), outstanding quality of life
                  (300+ days of sunshine, clean beaches, low crime), and a welcoming multicultural atmosphere.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Whether you are retiring, working remotely, starting a business, or relocating with a
                  family, Mallorca provides the infrastructure and lifestyle to make the transition smooth.
                  This guide covers the essential steps, from choosing the right visa to finding the best
                  neighborhood for your needs.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-6">Residency and Visa Options</h2>
                <div className="space-y-4">
                  {RESIDENCY_OPTIONS.map((opt, i) => (
                    <div key={i} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="font-bold text-gray-900">{opt.title}</h3>
                        <span className="text-xs bg-aqua-50 text-aqua-700 px-2 py-0.5 rounded font-medium">{opt.timeline}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Essential Services</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { icon: Stethoscope, title: 'Healthcare', text: 'Public healthcare for residents via social security. Private insurance (800-2,000 EUR/yr) for immediate coverage. Son Espases is the main public hospital. Clinica Juaneda and Clinica Rotger are leading private hospitals with English-speaking doctors.' },
                    { icon: GraduationCap, title: 'Education', text: 'Over 15 international schools (British, German, American, French, Scandinavian curricula). Fees: 5,000-15,000 EUR/yr. Main clusters in Palma and Calvia. Public Spanish schools are free and offer language immersion.' },
                    { icon: Briefcase, title: 'Banking & Admin', text: 'Major banks (CaixaBank, Sabadell, BBVA) offer non-resident accounts. Online banking in English available. Town hall registration (empadronamiento) required for many services. A good gestoria handles all paperwork.' },
                    { icon: Home, title: 'Housing', text: 'Many expats rent for 6-12 months before buying to test locations. Long-term rental market is competitive in Palma. Buying offers better long-term value. Our matching service covers both rental and purchase options.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-5">
                      <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Best Areas for Expats</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Area</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Why Here</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AREAS_FOR_EXPATS.map((area, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{area.name}</td>
                          <td className="px-4 py-3 text-gray-600">{area.why}</td>
                          <td className="px-4 py-3 text-gray-600">{area.best}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Practical Tips for New Arrivals</h2>
                <div className="bg-sea-50 rounded-xl p-6 space-y-3">
                  {[
                    'Get your NIE number before or immediately upon arrival -- it is needed for everything',
                    'Register at the town hall (empadronamiento) within 3 months -- it unlocks public services',
                    'Open a Spanish bank account early -- many services require direct debit',
                    'Hire a gestoria for bureaucracy -- they handle paperwork for 50-150 EUR per task',
                    'Learn basic Spanish -- even a few phrases dramatically improve daily interactions',
                    'Join expat groups on social media -- the Mallorca community is very welcoming and helpful',
                    'Rent before buying -- 6-12 months of renting helps you find the right neighborhood',
                    'Budget for private health insurance in the first year while public registration processes',
                    'Get a Spanish phone number immediately -- many services require a local number',
                    'Register with your embassy or consulate for consular assistance and voting',
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-sea-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-700 text-sm">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Home</h3>
                  <p className="text-gray-500 text-sm mb-4">Rent or buy -- matched in 24h</p>
                  <MatchingForm sourcePage="/guides/expat-guide-mallorca" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Guides</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Cost of Living', path: '/guides/cost-of-living-mallorca' },
                      { label: 'NIE Number Guide', path: '/guides/nie-number-mallorca' },
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
                      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
                      { label: 'Long-Term Rentals', path: '/rentals/long-term' },
                    ].map((g) => (
                      <Link key={g.path} to={g.path} className="flex items-center gap-2 text-sm text-sea-600 hover:text-sea-700 font-medium">
                        <ArrowRight className="w-3 h-3" /> {g.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="bg-forest-50 rounded-xl p-5 border border-forest-200">
                  <Heart className="w-5 h-5 text-forest-600 mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Expat Tip</h4>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Most successful expat moves to Mallorca start with a 2-4 week exploratory visit,
                    followed by 6-12 months of renting, and then a property purchase once you know
                    the area. Our matching service supports every stage of this journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Planning Your Move to Mallorca?" subtext="Tell us your requirements -- rental or purchase -- and we'll match you with 3 options in 24 hours." />
    </>
  );
}
