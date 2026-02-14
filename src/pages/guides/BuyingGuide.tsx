import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const STEPS = [
  { title: 'Define Your Requirements', text: 'Decide on property type (villa, finca, apartment), preferred location, budget (including 10-13% for purchase costs), and purpose (primary home, holiday home, investment). Use our free matching service to receive curated options.', link: '/signup', linkText: 'Start free matching' },
  { title: 'Obtain a NIE Number', text: 'The NIE (Numero de Identidad de Extranjero) is mandatory for all property transactions in Spain. Apply at the Policia Nacional in Palma or through a Spanish consulate. Processing takes 1-3 weeks.', link: '/guides/nie-number-mallorca', linkText: 'NIE application guide' },
  { title: 'Hire an Independent Lawyer', text: 'Engage a bilingual lawyer who specializes in Mallorca property transactions. They will handle due diligence, title searches, contract review, and represent your interests at signing. Budget 1-2% of the purchase price for legal fees.', link: '/agents', linkText: 'Get matched with agents' },
  { title: 'Open a Spanish Bank Account', text: 'Required for mortgage applications, tax payments, and utility direct debits. Non-residents can open accounts at most Spanish banks (CaixaBank, Sabadell, BBVA) with a passport and NIE. The process takes 1-2 days.' },
  { title: 'View Properties and Make an Offer', text: 'Visit shortlisted properties in person. When you find the right one, submit a written offer through your agent. Negotiation is common; offers 5-10% below asking price are typical starting points. The seller may accept, reject, or counter-offer.' },
  { title: 'Sign the Reservation Contract', text: 'Once an offer is accepted, sign a reservation contract (Contrato de Reserva) and pay a deposit of 3,000-10,000 EUR to take the property off the market. This deposit is usually non-refundable but deducted from the final price.' },
  { title: 'Due Diligence Period', text: 'Your lawyer conducts thorough checks: title deed verification, property registry search, outstanding debts or charges, building license compliance, energy performance certificate, and zoning classification. This phase takes 2-4 weeks.' },
  { title: 'Sign the Private Purchase Contract', text: 'Sign the Contrato de Arras (deposit contract) and pay 10% of the purchase price as a deposit. This contract is legally binding -- if the buyer withdraws, they lose the deposit; if the seller withdraws, they must return double the deposit.' },
  { title: 'Arrange Financing', text: 'If using a mortgage, finalize the application with your bank. Non-residents can typically borrow 60-70% of the property value at rates of 2-4%. Allow 4-6 weeks for mortgage approval. Cash buyers skip this step.', link: '/faq#faq-31', linkText: 'Mortgage FAQ' },
  { title: 'Sign at the Notary', text: 'The final step is signing the Escritura Publica (public deed) at a Spanish notary. Both parties (or their legal representatives) attend. The balance of the purchase price is paid, keys are handed over, and ownership transfers. The notary registers the sale with the Land Registry.' },
];

const COST_BREAKDOWN = [
  { item: 'Transfer Tax (ITP)', rate: '8-11.5%', note: 'Progressive scale on resale properties; up to 11.5% above 1M EUR' },
  { item: 'Notary Fees', rate: '0.5-1%', note: 'Scaled based on purchase price' },
  { item: 'Land Registry', rate: '0.3-0.5%', note: 'Registration of new ownership' },
  { item: 'Legal Fees', rate: '1-2%', note: 'Independent lawyer costs' },
  { item: 'Mortgage Costs', rate: '1-1.5%', note: 'Valuation, arrangement fees (if applicable)' },
];

const FAQ_ITEMS = [
  { q: 'How long does it take to buy property in Mallorca?', a: 'Typically 2-3 months from accepted offer to completion. Complex cases (coastal permits, inheritance issues, mortgage approvals) can extend to 4-6 months. Cash purchases without complications can complete in as little as 6 weeks.' },
  { q: 'Can foreigners buy property in Mallorca?', a: 'Yes. Both EU and non-EU citizens can buy property freely in Mallorca. Non-EU buyers may need a military permit for properties near military installations, but this is rare. The only prerequisite is obtaining a NIE number.' },
  { q: 'Do I need to be in Mallorca to buy property?', a: 'No. You can grant power of attorney to your lawyer, who can sign on your behalf. However, most buyers prefer to attend the notary signing in person. Virtual viewings can supplement but should not replace at least one in-person visit.' },
  { q: 'What taxes do I pay annually after buying?', a: 'Annual costs include IBI property tax (0.4-1.1% of cadastral value), wealth tax for non-residents (0.28-3.5% on net assets above 700,000 EUR), and non-resident income tax (imputed income of 1.1-2% of cadastral value taxed at 19-24%).' },
  { q: 'Should I rent before buying in Mallorca?', a: 'Strongly recommended. Renting for 6-12 months helps you understand different neighborhoods, seasonal variations, costs, and lifestyle before making a significant financial commitment. Many of our clients start with a short-term rental match.' },
];

export default function BuyingGuide() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy Property in Mallorca',
    description: 'Complete step-by-step guide to purchasing property in Mallorca as a foreigner, from initial search through to notary signing.',
    totalTime: 'P90D',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.text,
    })),
  };

  return (
    <>
      <SEOHead
        title="Buy Property in Mallorca: Step-by-Step Guide 2026"
        description="Complete step-by-step guide to buying property in Mallorca. NIE, lawyers, surveys, contracts, taxes, and timelines for foreign buyers. Expert advice."
        canonical="/guides/buying-property-mallorca"
        schema={howToSchema}
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="Buying Guide" />
          <h1 className="max-w-3xl mb-4">How to Buy Property in Mallorca: Step-by-Step Guide 2026</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            The complete buying process for foreign purchasers, from initial search through to
            notary signing. NIE applications, legal representation, due diligence, costs, and timelines.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Buying property in Mallorca as a foreigner is straightforward but requires understanding
                  the Spanish legal system, tax obligations, and local market conditions. The process
                  typically takes 2-3 months from accepted offer to completion, with total purchase costs
                  adding approximately 10-13% on top of the agreed price.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This guide covers every step of the journey. Whether you are buying a vacation villa,
                  a permanent home, or an investment property, the core process is the same. The key to
                  a successful purchase is engaging independent professional advice early -- a good lawyer
                  and a trusted real estate agent are your two most important allies.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-6">The 10-Step Buying Process</h2>
                <div className="space-y-6">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-aqua-500 text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">{i + 1}</div>
                        {i < STEPS.length - 1 && <div className="w-0.5 flex-1 bg-gray-200 mt-2" />}
                      </div>
                      <div className="pb-6">
                        <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-2">{step.text}</p>
                        {step.link && (
                          <Link to={step.link} className="text-aqua-600 text-sm font-medium hover:underline flex items-center gap-1">
                            {step.linkText} <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Purchase Cost Breakdown</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Cost Item</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Rate</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_BREAKDOWN.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.rate}</td>
                          <td className="px-4 py-3 text-gray-600">{row.note}</td>
                        </tr>
                      ))}
                      <tr className="bg-sea-50 font-bold">
                        <td className="px-4 py-3 text-sea-800">Total Additional Costs</td>
                        <td className="px-4 py-3 text-sea-800">~10-13%</td>
                        <td className="px-4 py-3 text-sea-600">On top of purchase price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  For a detailed tax breakdown, see our <Link to="/guides/property-taxes-mallorca" className="text-aqua-600 hover:underline">complete property taxes guide</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Essential Checklist</h2>
                <div className="grid sm:grid-cols-2 gap-2">
                  {[
                    'Obtain NIE number',
                    'Hire independent bilingual lawyer',
                    'Open Spanish bank account',
                    'Get property survey / technical report',
                    'Verify energy performance certificate',
                    'Check building license compliance',
                    'Confirm no outstanding debts on property',
                    'Verify property boundaries and land classification',
                    'Check ETV license status (if renting out)',
                    'Arrange mortgage pre-approval (if needed)',
                    'Review community of owners rules',
                    'Confirm utility connections and capacity',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-forest-500 flex-shrink-0" />
                      {item}
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
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Property</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/guides/buying-property-mallorca" defaultType="villa" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Guides</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'NIE Number Guide', path: '/guides/nie-number-mallorca' },
                      { label: 'Property Taxes', path: '/guides/property-taxes-mallorca' },
                      { label: 'ETV License Guide', path: '/guides/etv-license-mallorca' },
                      { label: 'Cost of Living', path: '/guides/cost-of-living-mallorca' },
                    ].map((g) => (
                      <Link key={g.path} to={g.path} className="flex items-center gap-2 text-sm text-sea-600 hover:text-sea-700 font-medium">
                        <ArrowRight className="w-3 h-3" /> {g.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Start Your Property Search in Mallorca" subtext="Tell us your requirements and we'll match you with 3 vetted properties and a trusted local agent." />
    </>
  );
}
