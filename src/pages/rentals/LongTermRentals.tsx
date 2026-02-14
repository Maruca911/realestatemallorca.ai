import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Home, Key, FileText } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import MatchingForm from '../../components/MatchingForm';
import { LOCATIONS } from '../../data/locations';

const LONG_TERM_LOCATIONS = [
  { name: 'Palma', slug: 'palma', types: 'Apartments & houses', range: '1,200 - 3,500' },
  { name: 'Pollensa', slug: 'pollensa', types: 'Villas & fincas', range: '1,000 - 3,000' },
  { name: 'Andratx', slug: 'andratx', types: 'Villas & apartments', range: '1,300 - 4,000' },
  { name: 'Soller', slug: 'soller', types: 'Townhouses & fincas', range: '1,100 - 2,800' },
  { name: "Cala d'Or", slug: 'cala-dor', types: 'Apartments & houses', range: '850 - 2,200' },
];

export default function LongTermRentals() {
  return (
    <>
      <SEOHead
        title="Long Term Rentals Mallorca - Monthly & Annual Properties"
        description="Find long-term rental properties in Mallorca. Monthly and annual apartments, villas, and houses in Palma, Pollensa, Andratx, Soller, and Cala d'Or."
        canonical="/rentals/long-term"
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2389496/pexels-photo-2389496.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Long term rental property in Mallorca"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sea-900/80 to-sea-900/40" />
        </div>
        <div className="relative container-max px-4 sm:px-6 lg:px-8">
          <nav className="text-sea-200 text-sm mb-6">
            <Link to="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/rentals" className="hover:text-white">Rentals</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Long-Term</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">
            Long Term Rentals Mallorca &mdash; Monthly and Annual Properties
          </h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Find your long-term home in Mallorca. Apartments, villas, and houses for monthly or
            annual rental, matched to your location, budget, and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="btn-cta text-center">
              Match Long-Term Rentals <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link to="/rentals/short-term" className="btn-secondary bg-white/10 border-white/30 text-white hover:bg-white/20 text-center">
              Looking for Short-Term?
            </Link>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Long-Term Rental Prices by Location</h2>
              <div className="overflow-x-auto rounded-xl border border-gray-200 mb-10">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sea-50">
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Location</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Property Types</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Monthly Range</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {LONG_TERM_LOCATIONS.map((row, i) => (
                      <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-500" />
                          {row.name}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{row.types}</td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.range}/mo</td>
                        <td className="px-4 py-3">
                          <Link to={`/rentals/long-term/${row.slug}`} className="text-aqua-600 hover:text-aqua-700 font-medium text-xs">
                            View &rarr;
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2 className="text-sea-800 mb-4">Guide to Long-Term Renting in Mallorca</h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 mb-10">
                <p>
                  Long-term renting in Mallorca is a popular choice for expats, remote workers, retirees,
                  and families testing the island before committing to a property purchase. The rental
                  market offers a wide range of properties from modern apartments in Palma to rural
                  fincas in the countryside, with monthly rates varying significantly by location and
                  property type.
                </p>
                <p>
                  Spanish rental law provides strong tenant protections for long-term contracts (typically
                  defined as one year or more). Key provisions include a minimum contract duration of 5
                  years for individual landlords and 7 years for corporate landlords, annual rent increases
                  tied to the official index, and a deposit of one or two months' rent.
                </p>
                <p>
                  When renting long-term in Mallorca, you should budget for the monthly rent plus utilities
                  (electricity, water, gas, internet), community fees if applicable, and potentially
                  contents insurance. Most landlords require proof of income or employment, a passport or
                  NIE, and a bank reference.
                </p>
              </div>

              <h2 className="text-sea-800 mb-4">Benefits of Renting Long-Term</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { icon: Home, title: 'Test Before Buying', text: 'Live in an area for 6-12 months to understand the neighborhood, costs, and lifestyle before purchasing.' },
                  { icon: Key, title: 'Flexibility', text: 'Adapt to changing circumstances without the commitment and costs of property ownership.' },
                  { icon: FileText, title: 'Tenant Protections', text: 'Spanish law provides strong rights including minimum contract durations and regulated rent increases.' },
                  { icon: MapPin, title: 'Location Freedom', text: 'Move between different areas of Mallorca to find your ideal long-term home.' },
                ].map((item, i) => (
                  <div key={i} className="bg-white border border-gray-100 rounded-xl p-5">
                    <item.icon className="w-6 h-6 text-sea-500 mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find a Long-Term Rental</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/rentals/long-term" defaultType="long-term" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-10">Long-Term Rentals by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LONG_TERM_LOCATIONS.map((loc) => {
              const full = LOCATIONS.find((l) => l.slug === loc.slug);
              if (!full) return null;
              return (
                <LocationCard
                  key={loc.slug}
                  name={full.name}
                  path={`/rentals/long-term/${loc.slug}`}
                  image={full.image}
                  tagline={full.tagline}
                  priceHint={`From ${loc.range.split(' - ')[0]}/month`}
                />
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Not Ready for Long-Term? Try a Short-Term Rental First"
        subtext="Test any area in Mallorca with a short-term stay before committing to a long-term lease."
        buttonText="Match Short-Term Rentals"
        buttonLink="/rentals/short-term"
        variant="aqua"
      />
    </>
  );
}
