import { Link } from 'react-router-dom';
import { ArrowRight, Calculator } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const PURCHASE_COSTS = [
  { item: 'Transfer Tax (ITP)', resident: '8-11%', nonResident: '8-11%', note: 'Sliding scale on resale properties. 10% VAT + 1.5% AJD on new-builds.' },
  { item: 'Notary Fees', resident: '0.5-1%', nonResident: '0.5-1%', note: 'Scales based on purchase price. Typically 600-1,500 EUR.' },
  { item: 'Land Registry', resident: '0.3-0.5%', nonResident: '0.3-0.5%', note: 'Registration of new ownership. Typically 400-1,000 EUR.' },
  { item: 'Legal Fees', resident: '1-2%', nonResident: '1-2%', note: 'Independent lawyer. Budget 1,500-5,000 EUR.' },
  { item: 'Mortgage Costs', resident: '1-1.5%', nonResident: '1-1.5%', note: 'Valuation, arrangement fees. Only if financing.' },
];

const ANNUAL_TAXES = [
  { item: 'IBI (Property Tax)', resident: '0.4-1.1%', nonResident: '0.4-1.1%', note: 'Of cadastral value (much lower than market value). Paid annually.' },
  { item: 'Wealth Tax', resident: '0.28-3.5%', nonResident: '0.28-3.5%', note: 'On net assets above 700k EUR (residents) or 700k EUR per property (non-residents). Balearic rates apply.' },
  { item: 'Non-Resident Income Tax (IRNR)', resident: 'N/A', nonResident: '19-24%', note: 'Imputed income: 1.1-2% of cadastral value taxed at 19% (EU) or 24% (non-EU). Even if not rented.' },
  { item: 'Rental Income Tax', resident: '19-47%', nonResident: '19-24%', note: 'On actual rental income. Residents deduct expenses; non-EU non-residents cannot.' },
  { item: 'Basura (Rubbish Tax)', resident: '50-200', nonResident: '50-200', note: 'Fixed annual municipal charge. EUR per year.' },
];

const SELLING_COSTS = [
  { item: 'Capital Gains Tax', resident: '19-28%', nonResident: '19%', note: 'On profit from sale. Residents pay progressive rates; non-residents flat 19%.' },
  { item: 'Plusvalia Municipal', resident: 'Varies', nonResident: 'Varies', note: 'Municipal land value increase tax. Based on cadastral value and ownership duration.' },
  { item: 'Retention (3%)', resident: 'N/A', nonResident: '3%', note: 'Buyer withholds 3% of price and pays to tax authority on behalf of non-resident seller.' },
  { item: 'Agency Fees', resident: '3-5%', nonResident: '3-5%', note: 'Real estate agent commission. Usually paid by seller in Mallorca.' },
];

const FAQ_ITEMS = [
  { q: 'How much are property taxes in Mallorca annually?', a: 'Annual property tax costs depend on your residency status and property value. A typical non-resident owner of a 500,000 EUR property pays approximately 1,500-3,000 EUR per year in combined IBI, imputed income tax, and rubbish tax. Wealth tax applies additionally if your Spanish assets exceed 700,000 EUR.' },
  { q: 'What is the IBI tax in Mallorca?', a: 'IBI (Impuesto sobre Bienes Inmuebles) is the annual property tax based on cadastral value, which is typically 30-50% of market value. Rates vary by municipality from 0.4% to 1.1% of cadastral value. For a property with a market value of 500,000 EUR, expect IBI of 500-1,500 EUR per year.' },
  { q: 'Do non-residents pay more tax in Mallorca?', a: 'Non-residents face some additional obligations: imputed income tax (even if not renting out), a 3% retention on sale proceeds, and inability to deduct many expenses against rental income (for non-EU residents). However, the base purchase costs are the same for residents and non-residents.' },
  { q: 'Is there a wealth tax in the Balearic Islands?', a: 'Yes. The Balearic Islands apply wealth tax on net assets above 700,000 EUR at rates from 0.28% to 3.5%. For non-residents, each property is assessed individually. The tax is progressive, so lower-value properties may fall below the threshold. Spain introduced a "solidarity tax" for assets above 3M EUR.' },
  { q: 'What capital gains tax do I pay when selling in Mallorca?', a: 'Residents pay progressive capital gains tax: 19% on the first 6,000 EUR profit, 21% on 6,000-50,000 EUR, 23% on 50,000-200,000 EUR, 26% on 200,000-300,000 EUR, and 28% above 300,000 EUR. Non-residents pay a flat 19%. Residents over 65 selling their primary home are exempt. These rates are subject to annual legislative changes -- consult a tax advisor for current rates.' },
];

export default function PropertyTaxes() {
  return (
    <>
      <SEOHead
        title="Property Taxes Mallorca: Complete Guide to Costs 2026"
        description="Complete guide to Mallorca property taxes and costs. Purchase taxes, annual obligations, selling costs, resident vs non-resident rates. Expert breakdown with examples."
        canonical="/guides/property-taxes-mallorca"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="Property Taxes" />
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-aqua-400" />
            <span className="text-aqua-400 text-sm font-semibold uppercase tracking-wider">Tax Guide</span>
          </div>
          <h1 className="max-w-3xl mb-4">Property Taxes in Mallorca: Complete Guide 2026</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            Every tax and cost you need to know when buying, owning, and selling property in Mallorca.
            Resident and non-resident rates compared side by side.
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
                  Understanding property taxes in Mallorca is essential for accurate budgeting. Costs are
                  incurred at three stages: purchase (one-off costs of 10-13%), annual ownership obligations,
                  and eventual sale. Tax rates differ significantly between residents and non-residents, and
                  the Balearic Islands apply their own wealth tax rates on top of national taxes.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This guide covers all taxes and costs for 2026, with rates for both residents and
                  non-residents. All figures are based on current legislation and Balearic government
                  published rates. Tax rules can change; we recommend consulting a local tax advisor
                  for your specific situation.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Purchase Costs (One-Off)</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Cost</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Rate</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {PURCHASE_COSTS.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.resident}</td>
                          <td className="px-4 py-3 text-gray-600">{row.note}</td>
                        </tr>
                      ))}
                      <tr className="bg-sea-50 font-bold">
                        <td className="px-4 py-3 text-sea-800">Total Purchase Costs</td>
                        <td className="px-4 py-3 text-sea-800">~10-13%</td>
                        <td className="px-4 py-3 text-sea-600">On top of purchase price</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Transfer Tax (ITP) Sliding Scale</h2>
                <p className="text-gray-600 text-sm mb-4">
                  The Balearic Islands apply a progressive transfer tax on resale property purchases:
                </p>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Price Bracket</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { bracket: 'Up to 400,000 EUR', rate: '8%' },
                        { bracket: '400,001 - 600,000 EUR', rate: '9%' },
                        { bracket: '600,001 - 1,000,000 EUR', rate: '10%' },
                        { bracket: 'Above 1,000,000 EUR', rate: '11.5%' },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 text-gray-900">{row.bracket}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.rate}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">New-build properties pay 10% VAT + 1.5% stamp duty (AJD) instead of ITP.</p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Annual Ownership Taxes</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Tax</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Resident</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Non-Resident</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ANNUAL_TAXES.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.resident}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.nonResident}</td>
                          <td className="px-4 py-3 text-gray-600">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-sand-50 border border-sand-200 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-3">Example: Annual Costs for a 500,000 EUR Property</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-sea-800 mb-2">Non-Resident (EU)</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between"><span>IBI</span><span className="font-medium">800 EUR</span></div>
                      <div className="flex justify-between"><span>Imputed income tax (IRNR)</span><span className="font-medium">500 EUR</span></div>
                      <div className="flex justify-between"><span>Basura</span><span className="font-medium">120 EUR</span></div>
                      <div className="flex justify-between border-t border-sand-300 pt-1 font-bold text-gray-900"><span>Approximate total</span><span>1,420 EUR/yr</span></div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-sea-800 mb-2">Resident</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between"><span>IBI</span><span className="font-medium">800 EUR</span></div>
                      <div className="flex justify-between"><span>Imputed income tax</span><span className="font-medium">N/A</span></div>
                      <div className="flex justify-between"><span>Basura</span><span className="font-medium">120 EUR</span></div>
                      <div className="flex justify-between border-t border-sand-300 pt-1 font-bold text-gray-900"><span>Approximate total</span><span>920 EUR/yr</span></div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Excludes wealth tax (applies above 700k EUR threshold). Cadastral value estimated at 200,000 EUR.</p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Selling Costs</h2>
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-sea-50">
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Cost</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Resident</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Non-Resident</th>
                        <th className="text-left px-4 py-3 font-semibold text-sea-800">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SELLING_COSTS.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                          <td className="px-4 py-3 font-medium text-gray-900">{row.item}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.resident}</td>
                          <td className="px-4 py-3 text-sea-600 font-semibold">{row.nonResident}</td>
                          <td className="px-4 py-3 text-gray-600">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
                  <MatchingForm sourcePage="/guides/property-taxes-mallorca" defaultType="villa" compact />
                </div>

                <div className="bg-sea-50 rounded-xl p-5 border border-sea-100">
                  <h4 className="font-bold text-sea-800 text-sm mb-3">Related Guides</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Buying Guide', path: '/guides/buying-property-mallorca' },
                      { label: 'NIE Number Guide', path: '/guides/nie-number-mallorca' },
                      { label: 'Cost of Living', path: '/guides/cost-of-living-mallorca' },
                      { label: 'ETV License Guide', path: '/guides/etv-license-mallorca' },
                      { label: 'Expat Guide', path: '/guides/expat-guide-mallorca' },
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

      <CTABanner heading="Start Your Mallorca Property Search" subtext="We'll match you with 3 vetted properties and a trusted local agent who can advise on tax optimization." />
    </>
  );
}
