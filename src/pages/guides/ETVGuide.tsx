import { Link } from 'react-router-dom';
import { Shield, AlertCircle } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import GuideBreadcrumb from '../../components/GuideBreadcrumb';
import InlineFAQ from '../../components/InlineFAQ';
import CTABanner from '../../components/CTABanner';
import MatchingForm from '../../components/MatchingForm';

const LICENSE_TYPES = [
  { type: 'ETV', name: 'Holiday Rental in Dwelling', desc: 'Standard license for renting a full property (villa, apartment, or house) to tourists. The most common license for individual property owners.', duration: 'Up to 60 days per stay', eligible: 'Detached houses, semi-detached, single-floor apartments' },
  { type: 'ETVPL', name: 'Holiday Rental in Multi-Unit', desc: 'License for renting apartments within multi-unit buildings. Subject to stricter zoning rules and community approval requirements. Moratorium in many municipalities.', duration: 'Up to 30 days per stay', eligible: 'Apartments in residential blocks (where permitted)' },
  { type: 'ETV60', name: 'Extended Holiday Rental', desc: 'Allows longer tourist stays of up to 1 month. Designed for properties catering to extended-stay visitors and remote workers.', duration: 'Up to 60 days per stay', eligible: 'Properties meeting extended-stay requirements' },
];

const FAQ_ITEMS = [
  { q: 'How much does an ETV license cost in Mallorca?', a: 'Application fees range from 500-1,500 EUR depending on municipality and property type. Additional costs include the energy performance certificate (150-300 EUR), technical report (300-800 EUR), and legal assistance (500-1,000 EUR). Total budget: 1,500-3,500 EUR.' },
  { q: 'Can I get an ETV license for my apartment in Mallorca?', a: 'It depends on the municipality and building type. Many areas have a moratorium on new ETVPL licenses (apartments in multi-unit buildings). Detached and semi-detached properties have a better chance of approval. Check with the local town hall before purchasing.' },
  { q: 'How long does the ETV application process take?', a: 'Typically 2-6 months from initial application to license approval. The timeline includes document preparation (2-4 weeks), submission and review (1-3 months), and any required inspections or corrections.' },
  { q: 'What happens if I rent without an ETV license?', a: 'Fines for unlicensed tourist rentals in the Balearic Islands range from 20,000 to 400,000 EUR. The Balearic Tourism Ministry actively monitors listing platforms and conducts inspections. Platforms like Airbnb are required to display license numbers.' },
  { q: 'Does an ETV license increase my property value?', a: 'Yes, significantly. Properties with valid ETV licenses typically sell for 15-25% more than comparable unlicensed properties. The license also generates rental income of 4-7% yield, making it a valuable asset for investment buyers.' },
];

export default function ETVGuide() {
  return (
    <>
      <SEOHead
        title="ETV License Mallorca: Tourist Rental Permit Guide 2026"
        description="Complete guide to the ETV tourist rental license in Mallorca. Types, costs, application process, eligibility, and 2026 regulations for holiday rental owners."
        canonical="/guides/etv-license-mallorca"
      />

      <section className="bg-sea-800 text-white">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <GuideBreadcrumb current="ETV License Guide" parent={{ label: 'Guides', path: '/guides/buying-property-mallorca' }} />
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-8 h-8 text-aqua-400" />
            <span className="text-aqua-400 text-sm font-semibold uppercase tracking-wider">Rental Regulations</span>
          </div>
          <h1 className="max-w-3xl mb-4">ETV License Mallorca: Tourist Rental Permit Guide 2026</h1>
          <p className="text-sea-200 text-lg max-w-2xl">
            Everything property owners and investors need to know about the ETV (Estancia Turistica
            en Vivienda) tourist rental license in Mallorca: types, costs, application process, and
            current regulations.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="text-sea-800 mb-4">What Is an ETV License?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  An ETV (Estancia Turistica en Vivienda) is the official license required to legally
                  rent a property to tourists on a short-term basis in the Balearic Islands. Introduced
                  to regulate the holiday rental market, the license ensures properties meet safety,
                  quality, and insurance standards. Without a valid ETV, renting to tourists is illegal
                  and subject to substantial fines.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The licensing system is administered by the Conselleria de Turisme of the Balearic
                  Islands government. Each approved property receives a unique license number that must
                  be displayed on all advertising, listing platforms, and at the property itself.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-6">License Types</h2>
                <div className="space-y-4">
                  {LICENSE_TYPES.map((lic) => (
                    <div key={lic.type} className="border border-gray-200 rounded-xl p-5">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-sea-500 text-white text-xs font-bold px-2.5 py-1 rounded">{lic.type}</span>
                        <h3 className="font-bold text-gray-900">{lic.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{lic.desc}</p>
                      <div className="grid sm:grid-cols-2 gap-2 text-xs">
                        <div className="bg-gray-50 rounded-lg px-3 py-2"><span className="text-gray-500">Max Stay:</span> <span className="text-gray-800 font-medium">{lic.duration}</span></div>
                        <div className="bg-gray-50 rounded-lg px-3 py-2"><span className="text-gray-500">Eligible:</span> <span className="text-gray-800 font-medium">{lic.eligible}</span></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Application Process</h2>
                <div className="space-y-4">
                  {[
                    { step: 1, title: 'Check Eligibility', text: 'Verify your property is in a zone where tourist rentals are permitted. Contact the local town hall (Ayuntamiento) or consult a lawyer. Zoning maps are available from the Consell de Mallorca.' },
                    { step: 2, title: 'Prepare Documentation', text: 'Obtain an Energy Performance Certificate (EPC), a technical report confirming the property meets safety standards, proof of liability insurance (minimum 300,000 EUR coverage), a community of owners approval (for apartments), and the property\'s Cedula de Habitabilidad.' },
                    { step: 3, title: 'Submit Application', text: 'File a Declaracion Responsable (responsible declaration) with the Conselleria de Turisme. This self-certification declares that your property meets all requirements. The license number is typically assigned within days of submission.' },
                    { step: 4, title: 'Pass Inspection', text: 'The tourism authority may conduct an inspection within 6 months of license issuance to verify compliance. Ensure the property meets all stated standards, including fire safety equipment, guest information documents, and complaint forms.' },
                    { step: 5, title: 'Register and Advertise', text: 'Once licensed, register the property on the official Balearic tourism registry. Display the license number on all listing platforms (Airbnb, Booking.com, etc.) and at the property entrance. You can now legally accept tourist bookings.' },
                  ].map((s) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-aqua-500 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">{s.step}</div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm mb-1">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-error-50 border border-red-200 rounded-xl p-5 flex gap-4">
                <AlertCircle className="w-5 h-5 text-error-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-bold mb-1">Important: License Moratorium Areas</p>
                  <p className="leading-relaxed">
                    Several municipalities in Mallorca have imposed moratoriums on new ETVPL licenses
                    (apartments in multi-unit buildings), including parts of Palma. If you are buying a
                    property specifically for tourist rental income, verify the current licensing status
                    before completing the purchase. Properties with existing, transferable ETV licenses
                    carry a significant premium for this reason.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">ETV License for Investment Buyers</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For investors, the ETV license is a critical factor in property valuation and return
                  calculations. Licensed properties generate average rental yields of 4-7% from tourist
                  stays, with premium locations like Palma Old Town, Alcudia, and Pollensa at the upper
                  end. The license also adds 15-25% to the resale value of the property compared to
                  unlicensed equivalents.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our <Link to="/investments" className="text-aqua-600 font-medium hover:underline">investment matching service</Link> specifically
                  identifies properties with existing ETV licenses and strong rental track records,
                  helping investors make informed decisions about potential returns.
                </p>
              </div>

              <div>
                <h2 className="text-sea-800 mb-4">Frequently Asked Questions</h2>
                <InlineFAQ items={FAQ_ITEMS} />
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Licensed Rentals</h3>
                  <p className="text-gray-500 text-sm mb-4">All properties ETV-verified</p>
                  <MatchingForm sourcePage="/guides/etv-license-mallorca" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner heading="Looking for Investment Properties With ETV Licenses?" subtext="We match you with licensed, income-generating properties. Get 3 vetted options in 24 hours." buttonText="Match Investment Properties" />
    </>
  );
}
