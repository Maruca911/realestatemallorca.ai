export interface Location {
  slug: string;
  name: string;
  image: string;
  tagline: string;
  shortTermPrice: string;
  longTermPrice: string;
  salePrice: string;
  description: string;
  highlights: string[];
  nearbyAttractions: string[];
}

export const LOCATIONS: Location[] = [
  {
    slug: 'palma',
    name: 'Palma',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Capital city living with historic charm and beachfront access',
    shortTermPrice: 'From 120/night',
    longTermPrice: 'From 1,200/month',
    salePrice: 'From 350,000',
    description: 'Palma de Mallorca is the vibrant capital of the island, blending a historic Old Town with modern Mediterranean living. Its cathedral, La Seu, overlooks the harbour, while neighborhoods like Santa Catalina and Portixol offer trendy restaurants, boutiques, and waterfront promenades. Palma is ideal for those seeking an urban lifestyle with easy access to beaches, an international airport, and world-class healthcare facilities.',
    highlights: ['International airport (PMI) nearby', 'Historic Old Town and Cathedral', 'Santa Catalina dining scene', 'Major hospitals and international schools', 'Year-round cultural events'],
    nearbyAttractions: ['Bellver Castle', 'Palma Aquarium', 'Es Baluard Museum of Modern Art', 'Paseo Maritimo waterfront', 'Playa de Palma beach'],
  },
  {
    slug: 'alcudia',
    name: 'Alcudia',
    image: 'https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Family-friendly beaches and a charming medieval old town',
    shortTermPrice: 'From 100/night',
    longTermPrice: 'From 900/month',
    salePrice: 'From 250,000',
    description: 'Alcudia sits on the northeastern coast of Mallorca, featuring one of the island\'s longest and most pristine sandy beaches. The medieval walled Old Town is a maze of narrow streets filled with local restaurants and artisan shops. Alcudia is a top choice for families, with shallow, calm waters ideal for children and a wide range of water sports and cycling routes in the surrounding countryside.',
    highlights: ['Long sandy beach with shallow water', 'Medieval walled Old Town', 'Excellent cycling and hiking terrain', 'Water sports and boat excursions', 'Weekly traditional markets'],
    nearbyAttractions: ['Alcudia Old Town Walls', 'S\'Albufera Natural Park', 'Hidropark water park', 'Port d\'Alcudia marina', 'Can Picafort coastline'],
  },
  {
    slug: 'pollensa',
    name: 'Pollensa',
    image: 'https://images.pexels.com/photos/2105999/pexels-photo-2105999.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Artistic mountain town with a famous Sunday market',
    shortTermPrice: 'From 130/night',
    longTermPrice: 'From 1,000/month',
    salePrice: 'From 400,000',
    description: 'Pollensa (Pollenca) is a picturesque town at the foot of the Serra de Tramuntana mountains in northern Mallorca. Known for its 365-step Calvary staircase, vibrant Sunday market, and thriving arts scene, it attracts those seeking a blend of culture and natural beauty. The nearby Port de Pollensa offers a calm bay perfect for sailing and windsurfing, while the Formentor peninsula provides some of the most dramatic coastal scenery in the Mediterranean.',
    highlights: ['365-step Calvary staircase', 'Famous Sunday market', 'Serra de Tramuntana hiking access', 'Port de Pollensa sailing bay', 'International music festival'],
    nearbyAttractions: ['Cap de Formentor lighthouse', 'Cala Sant Vicenc beaches', 'Pollensa Music Festival venue', 'Roman bridge', 'Ternelles Nature Reserve'],
  },
  {
    slug: 'soller',
    name: 'Soller',
    image: 'https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Mountain valley charm with a vintage tramway to the sea',
    shortTermPrice: 'From 140/night',
    longTermPrice: 'From 1,100/month',
    salePrice: 'From 450,000',
    description: 'Soller lies in a lush valley surrounded by the Tramuntana mountains, connected to its port by a charming vintage wooden tramway. The town center features Art Nouveau architecture, a bustling central plaza with cafes, and a Saturday market. Port de Soller\'s horseshoe-shaped bay is a stunning setting for dining, swimming, and boat trips along the northwest coast. Soller appeals to those who want nature, authenticity, and a slower pace of life without sacrificing amenities.',
    highlights: ['Historic wooden tram to Port de Soller', 'Art Nouveau architecture', 'Surrounded by orange and lemon groves', 'Excellent hiking trails', 'Horseshoe bay at Port de Soller'],
    nearbyAttractions: ['Sa Calobra gorge', 'Jardins d\'Alfabia gardens', 'GR221 hiking route', 'Soller Botanical Garden', 'Fornalutx village'],
  },
  {
    slug: 'deia',
    name: 'Deia',
    image: 'https://images.pexels.com/photos/2440009/pexels-photo-2440009.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Bohemian hilltop village beloved by artists and writers',
    shortTermPrice: 'From 200/night',
    longTermPrice: 'From 1,800/month',
    salePrice: 'From 800,000',
    description: 'Deia is a small, exclusive hilltop village perched above the Mediterranean on the northwest coast of Mallorca. It has long attracted artists, musicians, and writers, most famously Robert Graves who made it his home. Stone houses cascade down the hillside beneath the church, with narrow lanes leading to galleries, boutique restaurants, and a small rocky cove. Properties here are among the most sought-after on the island, and the village offers a refined, tranquil lifestyle surrounded by extraordinary natural beauty.',
    highlights: ['Exclusive artistic community', 'Stone village architecture', 'Cala Deia swimming cove', 'Fine dining restaurants', 'Robert Graves museum and legacy'],
    nearbyAttractions: ['La Residencia hotel and art gallery', 'Son Marroig estate', 'Cala Deia', 'Robert Graves House', 'Tramuntana mountain trails'],
  },
  {
    slug: 'andratx',
    name: 'Andratx',
    image: 'https://images.pexels.com/photos/2476632/pexels-photo-2476632.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Upscale port town with luxury marinas and sunset views',
    shortTermPrice: 'From 150/night',
    longTermPrice: 'From 1,300/month',
    salePrice: 'From 500,000',
    description: 'Andratx and its coastal port, Port d\'Andratx, form one of the most upscale areas in Mallorca. The natural harbour is lined with restaurants, luxury yachts, and contemporary art galleries. The surrounding hills are dotted with high-end villas offering panoramic sea views and spectacular sunsets over the Dragonera island. It is a favorite among international buyers seeking privacy, exclusivity, and proximity to Palma, which is just 30 minutes away by car.',
    highlights: ['Luxury marina at Port d\'Andratx', 'Panoramic sunset views', 'High-end villa market', 'Contemporary art galleries', '30 minutes from Palma'],
    nearbyAttractions: ['CCA Andratx art center', 'Sa Dragonera Natural Park', 'Camp de Mar beach', 'Sant Elm village', 'La Trapa hiking trail'],
  },
  {
    slug: 'santa-ponsa',
    name: 'Santa Ponsa',
    image: 'https://images.pexels.com/photos/2389496/pexels-photo-2389496.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Resort living with golf courses and family beaches',
    shortTermPrice: 'From 110/night',
    longTermPrice: 'From 950/month',
    salePrice: 'From 300,000',
    description: 'Santa Ponsa is a well-established resort town on the southwest coast of Mallorca, popular with families and golf enthusiasts. The wide sandy beach, calm waters, and promenade make it ideal for holidaymakers, while the surrounding area features three championship golf courses. There is a strong international community, with English-speaking services, international schools, and a good range of shops and restaurants. Its proximity to Palma and the motorway make it a convenient base.',
    highlights: ['Wide sandy beach', 'Three championship golf courses', 'Strong international community', 'Family-friendly amenities', 'Easy motorway access to Palma'],
    nearbyAttractions: ['Golf Santa Ponsa I, II & III', 'King\'s Village shopping', 'Cala Vinyes cove', 'Calvià old town', 'Bendinat Castle'],
  },
  {
    slug: 'cala-dor',
    name: "Cala d'Or",
    image: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Crystal-clear coves and a relaxed coastal lifestyle',
    shortTermPrice: 'From 100/night',
    longTermPrice: 'From 850/month',
    salePrice: 'From 220,000',
    description: 'Cala d\'Or on the southeast coast of Mallorca is known for its collection of stunning turquoise coves, whitewashed architecture, and relaxed resort atmosphere. The area includes several interconnected bays with pine-fringed beaches, a yacht marina, and a pedestrianized center with restaurants, bars, and shops. Cala d\'Or offers some of the best value property on the island while still providing a beautiful coastal lifestyle with excellent swimming and snorkeling.',
    highlights: ['Multiple turquoise coves and beaches', 'Yacht marina at Cala Llonga', 'Pedestrianized town center', 'Ibiza-style whitewashed architecture', 'More affordable property prices'],
    nearbyAttractions: ['Mondrago Natural Park', 'Cala Mondrago beach', 'Porto Petro fishing village', 'Cala Llombards', 'Santanyi market town'],
  },
  {
    slug: 'magaluf',
    name: 'Magaluf',
    image: 'https://images.pexels.com/photos/2549018/pexels-photo-2549018.jpeg?auto=compress&cs=tinysrgb&w=800',
    tagline: 'Beachfront investment hotspot undergoing upscale renovation',
    shortTermPrice: 'From 80/night',
    longTermPrice: 'From 750/month',
    salePrice: 'From 180,000',
    description: 'Magaluf on the southwest coast has undergone a significant transformation in recent years, pivoting from its party reputation toward a more upscale, family-friendly resort destination. The wide sandy beach is backed by a modernized promenade, and new boutique hotels and quality restaurants are replacing older establishments. For investors, Magaluf offers some of the highest short-term rental occupancy rates on the island due to its strong tourist demand, making it an attractive proposition for buy-to-let properties.',
    highlights: ['High short-term rental demand', 'Ongoing upscale redevelopment', 'Wide sandy beach', 'Strong tourist infrastructure', 'Competitive property prices'],
    nearbyAttractions: ['Katmandu Park', 'Pirates Adventure show', 'Western Water Park', 'Sol de Mallorca beach', 'Portals Nous and Puerto Portals'],
  },
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}
