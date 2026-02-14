import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  heading?: string;
  subtext?: string;
  buttonText?: string;
  buttonLink?: string;
  variant?: 'sea' | 'aqua';
}

export default function CTABanner({
  heading = 'Find Your Perfect Short-Term Rental in Mallorca',
  subtext = 'Tell us your preferences and receive 3 hand-picked options within 24 hours. Completely free.',
  buttonText = 'Get Matched Free',
  buttonLink = '/signup',
  variant = 'sea',
}: CTABannerProps) {
  const bg = variant === 'sea'
    ? 'bg-gradient-to-r from-sea-600 to-sea-700'
    : 'bg-gradient-to-r from-aqua-500 to-sea-500';

  return (
    <section className={`${bg} text-white`}>
      <div className="container-max px-4 sm:px-6 lg:px-8 py-14 md:py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl mx-auto">
          {heading}
        </h2>
        <p className="text-sea-100 text-lg mb-8 max-w-xl mx-auto">
          {subtext}
        </p>
        <Link to={buttonLink} className="btn-cta bg-white text-sea-700 hover:bg-gray-100 shadow-xl">
          {buttonText}
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </section>
  );
}
