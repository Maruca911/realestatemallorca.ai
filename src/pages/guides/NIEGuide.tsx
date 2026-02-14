import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Clock, MapPin, AlertCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const STEPS = [
  { title: 'Gather Required Documents', desc: 'Prepare your valid passport (original and copy), a completed EX-15 application form, proof of the reason you need a NIE (property purchase contract, employment offer, or business registration), and two passport-sized photographs. Non-EU citizens may also need a visa or proof of legal entry into Spain.' },
  { title: 'Book an Appointment', desc: 'Appointments are required at the Policia Nacional foreigners office in Palma. Book online through the Spanish government\'s sede electronica portal. During peak season (spring and summer), appointments can fill up weeks in advance, so book as early as possible.' },
  { title: 'Attend Your Appointment in Person', desc: 'Visit the Comisaria de Policia Nacional at Carrer de Simó Ballester 8 in Palma with all your documents. A Spanish-speaking companion or translator is recommended as staff may not speak English. The process takes approximately 30-60 minutes.' },
  { title: 'Pay the Fee', desc: 'You will receive a Modelo 790 tax form. Pay the fee (approximately 12 EUR in 2026) at any Spanish bank. Keep the stamped receipt as proof of payment.' },
  { title: 'Collect Your NIE Certificate', desc: 'Return to the police station with your payment receipt to collect the NIE certificate. Some offices issue it the same day; others require a return visit after 1-5 working days. The NIE number is permanent and does not expire, though the certificate document itself may need renewal.' },
];

const FAQ_ITEMS = [
  { q: 'Do I need a NIE to buy property in Mallorca?', a: 'Yes. A NIE (Numero de Identidad de Extranjero) is mandatory for all property transactions in Spain, including purchases, sales, and rental contracts. You also need it to open a bank account, pay taxes, and set up utilities.' },
  { q: 'How long does it take to get a NIE in Mallorca?', a: 'The process takes 1-3 weeks in total. Booking an appointment can take 1-2 weeks during busy periods, and the certificate is typically issued within 1-5 days of your appointment. During off-peak months (October-March), the process is faster.' },
  { q: 'Can I get a NIE from outside Spain?', a: 'Yes. You can apply at a Spanish consulate or embassy in your home country. The process takes longer (4-8 weeks) but avoids the need to travel to Spain before your purchase is underway. Alternatively, a legal representative with power of attorney can apply on your behalf in Mallorca.' },
  { q: 'What does a NIE cost in 2026?', a: 'The government fee is approximately 12 EUR. If you use a lawyer or gestoria (administrative agent) to handle the application, expect to pay 100-200 EUR for their services. Many property lawyers include NIE assistance as part of their conveyancing package.' },
  { q: 'Does a NIE expire?', a: 'The NIE number itself is permanent and never expires. However, the physical certificate document has an expiry date (typically 3 months). For property purchases, you only need a valid certificate at the time of signing. The number remains yours for life.' },
];

export default function NIEGuide() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Get a NIE Number in Mallorca',
    description: 'Step-by-step guide to obtaining a NIE (Numero de Identidad de Extranjero) in Mallorca for property purchases and other legal transactions.',
    totalTime: 'P14D',
    step: STEPS.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.desc,
    })),
  };

  return (
    <>
      <SEOHead
        title="NIE Number Mallorca: How to Apply in 2026"
        description="Step-by-step guide to getting your NIE number in Mallorca. Required for property purchases, bank accounts, and contracts. Documents, costs, and timelines."
        canonical="/guides/nie-number-mallorca"
        schema={howToSchema}
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="NIE Number Guide" parent={{ label: 'Guides', path: '/guides/buying-property-mallorca' }} />
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-aqua-400" />
            <span className="text-aqua-400 text-sm font-semibold uppercase tracking-wider">Essential Guide</span>
          </div>
          <h1 className="max-w-3xl mb-4">NIE Number Mallorca: How to Apply in 2026</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            The NIE (Numero de Identidad de Extranjero) is the first document you need before buying
            property, opening a bank account, or signing any contract in Mallorca. Here is exactly
            how to get one.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">What Is a NIE Number?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A NIE (Numero de Identidad de Extranjero) is a unique identification number assigned
                  to foreigners in Spain for tax and legal purposes. It is required for virtually every
                  official and financial transaction: buying or selling property, signing rental contracts,
                  opening bank accounts, paying taxes, setting up utility contracts, and registering a
                  vehicle. Without a NIE, you cannot complete a property purchase in Mallorca.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The NIE is not a residency permit. It is simply an identification number that the
                  Spanish tax authorities use to track your financial activities. Both EU and non-EU
                  citizens need a NIE, and the application process is the same regardless of nationality.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Documents Required</h2>
                <div className="bg-sea-50 rounded-xl p-6 space-y-3">
                  {[
                    'Valid passport (original plus two photocopies)',
                    'Completed EX-15 application form (available online or at the police station)',
                    'Two recent passport-sized photographs',
                    'Proof of reason: property purchase contract, employment letter, or business registration',
                    'Appointment confirmation printout',
                    'Modelo 790 fee payment receipt (paid at a Spanish bank)',
                  ].map((doc, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 bg-sea-500 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
                      <span className="text-gray-700 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-6">Step-by-Step Process</h2>
                <div className="space-y-6">
                  {STEPS.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-aqua-500 text-white rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: 'Timeline', value: '1-3 weeks' },
                  { icon: FileText, label: 'Government Fee', value: '~12 EUR' },
                  { icon: MapPin, label: 'Location', value: 'Palma Police Station' },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 text-center">
                    <item.icon className="w-5 h-5 text-aqua-500 mx-auto mb-2" />
                    <div className="text-lg font-bold text-sea-800">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Alternative: Apply via a Lawyer</h2>
                <div className="bg-sand-50 border border-sand-200 rounded-xl p-5 flex gap-4">
                  <AlertCircle className="w-5 h-5 text-sand-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-700 leading-relaxed">
                    <p className="mb-2">
                      Many property buyers prefer to have their lawyer or a gestoria handle the NIE application.
                      This costs 100-200 EUR but saves time, avoids language barriers, and ensures the paperwork
                      is completed correctly. If you are purchasing through our matching service, the agents we
                      connect you with can recommend English-speaking lawyers who include NIE processing.
                    </p>
                    <Link to="/agents" className="text-aqua-600 font-medium hover:underline">
                      Find a vetted agent with legal support &rarr;
                    </Link>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Next Steps After Getting Your NIE</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  <Link to="/guides/buying-property-mallorca" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sea-300 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-aqua-500" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-sea-600">Property buying guide</span>
                  </Link>
                  <Link to="/guides/property-taxes-mallorca" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sea-300 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-aqua-500" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-sea-600">Property taxes breakdown</span>
                  </Link>
                  <Link to="/agents" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sea-300 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-aqua-500" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-sea-600">Find a vetted agent</span>
                  </Link>
                  <Link to="/faq" className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-sea-300 transition-colors group">
                    <ArrowRight className="w-4 h-4 text-aqua-500" />
                    <span className="text-sm font-medium text-gray-700 group-hover:text-sea-600">More buying questions</span>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Already Have Your NIE?</h3>
                  <p className="text-gray-500 text-sm mb-4">Get matched with properties now</p>
                  <MatchingForm sourcePage="/guides/nie-number-mallorca" defaultType="villa" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Ready to Start Your Property Search?" subtext="Get your NIE sorted, then let us match you with 3 perfect properties in 24 hours." />
    </>
  );
}
