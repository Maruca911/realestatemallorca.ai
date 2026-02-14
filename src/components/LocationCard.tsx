import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';

interface LocationCardProps {
  name: string;
  path: string;
  image: string;
  tagline: string;
  priceHint?: string;
}

export default function LocationCard({ name, path, image, tagline, priceHint }: LocationCardProps) {
  return (
    <Link to={path} className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`Properties in ${name}, Mallorca`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <div className="flex items-center gap-1.5 text-white">
            <MapPin className="w-4 h-4" />
            <span className="font-heading font-bold text-lg">{name}</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-gray-600 text-sm mb-2">{tagline}</p>
        {priceHint && (
          <p className="text-sea-600 text-sm font-semibold mb-2">{priceHint}</p>
        )}
        <span className="text-aqua-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Explore properties <ArrowRight className="w-3.5 h-3.5" />
        </span>
      </div>
    </Link>
  );
}
