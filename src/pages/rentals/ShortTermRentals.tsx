import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Euro, Star, Calendar } from 'lucide-react';
import SEOHead from '../../components/SEOHead';
import CTABanner from '../../components/CTABanner';
import LocationCard from '../../components/LocationCard';
import MatchingForm from '../../components/MatchingForm';
import { LOCATIONS } from '../../data/locations';

const RENTAL_TABLE = [
  { location: 'Palma', type: 'Apartments & houses', avg: '120-280', peak: '180-400', slug: 'palma' },
  { location: 'Alcudia', type: 'Villas & apartments', avg: '100-250', peak: '150-350', slug: 'alcudia' },
  { location: 'Pollensa', type: 'Villas & fincas', avg: '130-350', peak: '200-500', slug: 'pollensa' },
  { location: 'Soller', type: 'Townhouses & fincas', avg: '140-300', peak: '200-450', slug: 'soller' },
  { location: 'Deia', type: 'Luxury villas', avg: '200-500', peak: '350-700', slug: 'deia' },
  { location: 'Andratx', type: 'Villas & apartments', avg: '150-400', peak: '250-600', slug: 'andratx' },
  { location: 'Santa Ponsa', type: 'Apartments & villas', avg: '110-280', peak: '170-400', slug: 'santa-ponsa' },
  { location: "Cala d'Or", type: 'Apartments & houses', avg: '100-230', peak: '150-350', slug: 'cala-dor' },
  { location: 'Magaluf', type: 'Apartments', avg: '80-200', peak: '130-300', slug: 'magaluf' },
];

export default function ShortTermRentals() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Short Term Rentals Mallorca',
    description: 'Find short-term vacation rentals across Mallorca. Apartments, villas, and holiday homes from 80/night.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://realestatemallorca.ai' },
        { '@type': 'ListItem', position: 2, name: 'Rentals', item: 'https://realestatemallorca.ai/rentals' },
        { '@type': 'ListItem', position: 3, name: 'Short-Term Rentals', item: 'https://realestatemallorca.ai/rentals/short-term' },
      ],
    },
  };

  return (
    <>
      <SEOHead
        title="Short Term Rentals Mallorca - Vacation Homes & Apartments"
        description="Find short-term rentals in Mallorca from 80/night. Holiday apartments, vacation villas, and Airbnb alternatives across Palma, Alcudia, Pollensa, and more."
        canonical="/rentals/short-term"
        schema={schema}
      />

      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Short term rentals Mallorca beachfront property"
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
            <span className="text-white">Short-Term</span>
          </nav>
          <h1 className="text-white max-w-3xl mb-6">
            Short Term Rentals Mallorca &mdash; Vacation Homes and Apartments
          </h1>
          <p className="text-sea-100 text-lg max-w-2xl mb-8">
            Discover vacation rentals across Mallorca, from beachfront apartments in Palma
            to luxury villas in Deia. Holiday homes, Airbnb alternatives, and short-stay
            apartments matched to your preferences.
          </p>
          <Link to="/signup" className="btn-cta">
            Match Short-Term Rentals <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <h2 className="text-sea-800 mb-6">Short-Term Rental Prices by Location</h2>
              <p className="text-gray-600 mb-8">
                Nightly rates vary across Mallorca depending on location, property type, and season.
                Below is a guide to average and peak-season pricing for short-term vacation rentals.
              </p>

              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-sea-50">
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Location</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Property Types</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Avg/Night</th>
                      <th className="text-left px-4 py-3 font-semibold text-sea-800">Peak/Night</th>
                      <th className="px-4 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {RENTAL_TABLE.map((row, i) => (
                      <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 font-medium text-gray-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-aqua-500" />
                          {row.location}
                        </td>
                        <td className="px-4 py-3 text-gray-600">{row.type}</td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.avg}</td>
                        <td className="px-4 py-3 text-gray-900 font-medium">{row.peak}</td>
                        <td className="px-4 py-3">
                          <Link to={`/rentals/short-term/${row.slug}`} className="text-aqua-600 hover:text-aqua-700 font-medium text-xs">
                            View &rarr;
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-12">
                <h2 className="text-sea-800 mb-6">Why Choose a Short-Term Rental in Mallorca?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: Euro, title: 'Better Value Than Hotels', text: 'Full kitchens, more space, and privacy at competitive nightly rates. Ideal for families and groups.' },
                    { icon: MapPin, title: 'Live Like a Local', text: 'Stay in residential neighborhoods, shop at local markets, and experience authentic Mallorcan life.' },
                    { icon: Star, title: 'Vetted Quality', text: 'All properties in our network hold valid ETV tourist rental licenses and are quality-checked.' },
                    { icon: Calendar, title: 'Flexible Duration', text: 'From weekend breaks to month-long stays. Short-term rentals accommodate your schedule.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md transition-shadow">
                      <item.icon className="w-6 h-6 text-aqua-500 mb-3" />
                      <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <h2 className="text-sea-800 mb-4">About Short-Term Rentals in Mallorca</h2>
                <div className="prose prose-gray max-w-none text-gray-600 space-y-4">
                  <p>
                    Short-term rentals in Mallorca offer an alternative to traditional hotel accommodation,
                    providing the space, privacy, and local character that make a holiday truly memorable.
                    The island has a well-established vacation rental market with options ranging from
                    modern apartments in Palma's vibrant Santa Catalina district to secluded hillside
                    fincas surrounded by olive groves.
                  </p>
                  <p>
                    All legitimate short-term rental properties in Mallorca must hold an ETV (Estancia
                    Turistica en Vivienda) tourist rental license, issued by the Balearic Islands
                    government. This license ensures that the property meets safety, quality, and
                    insurance standards. When booking a vacation rental in Mallorca, always verify
                    that the ETV number is displayed in the listing.
                  </p>
                  <p>
                    The peak season for short-term rentals runs from June through September, when
                    demand is highest and prices increase accordingly. The shoulder months of
                    April-May and October offer a compelling combination of pleasant weather,
                    lower prices, and fewer crowds. For those with flexibility, these periods
                    represent the best overall value.
                  </p>
                  <p>
                    Popular property types include beachfront apartments (ideal for couples and
                    small families), villas with private pools (perfect for groups and families
                    with children), traditional fincas (for nature lovers and those seeking
                    seclusion), and townhouses in historic centers (for cultural immersion
                    and walking access to restaurants and shops).
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-1">Find Your Rental</h3>
                  <p className="text-gray-500 text-sm mb-4">Get 3 matched options in 24h</p>
                  <MatchingForm sourcePage="/rentals/short-term" compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <h2 className="text-sea-800 text-center mb-10">Short-Term Rentals by Location</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOCATIONS.map((loc) => (
              <LocationCard
                key={loc.slug}
                name={loc.name}
                path={`/rentals/short-term/${loc.slug}`}
                image={loc.image}
                tagline={loc.tagline}
                priceHint={loc.shortTermPrice}
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Ready to Find Your Perfect Short-Term Rental?"
        subtext="Share your dates, location, and budget. We'll deliver 3 curated matches within 24 hours."
        buttonText="Match Short-Term Rentals"
      />
    </>
  );
}
