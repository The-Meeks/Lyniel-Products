import { Mail, Phone, MapPin } from 'lucide-react';

export const COMPANY_INFO = {
  name: "Lyniel Products EA",
  tagline: "Manufacturers of Shoe Care and Household Products e.g. Shoe Cream, Shoe Polish, Leather Dye, Suedes, and Methylated Spirit",
  logo: "https://images.unsplash.com/photo-1620288627223-53302f4e8c70?q=80&w=400&auto=format&fit=crop", // Crow Shine Logo placeholder
  email: "crowshine01@gmail.com",
  phones: ["0768 944298", "+254 727 538755"],
  address: {
    street: "Industrial Area RD A, Off Kibo RD",
    estate: "Yakuti Ecovill Industrial Estate, Godown No. 3",
    poBox: "P.O. Box 22068 – 00100",
    city: "Nairobi, Kenya"
  }
};

export const PRODUCTS = [
  {
    id: 'shoe-cream',
    name: 'Shoe Cream',
    brand: 'Crow Shine',
    category: 'Shoe Care',
    description: 'Premium quality shoe cream for long-lasting shine and leather protection.',
    detailedDescription: 'Crow Shine Shoe Cream is expertly manufactured using traditional methods and high-quality waxes. It provides a deep, rich shine while nourishing the leather, preventing cracking and extending the life of your footwear.',
    benefits: [
      'Deeply nourishes and conditions leather',
      'Provides a brilliant, long-lasting shine',
      'Water-resistant properties',
      'Restores color to faded leather'
    ],
    specs: {
      'Volume': '50ml / 100ml',
      'Packaging': 'Plastic/Metal Tin',
      'Available Colors': 'Black, Brown, Dark Tan, Calf White',
      'Main Ingredients': 'Natural Waxes, Pigments, Solvents'
    },
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'shoe-polish',
    name: 'Shoe Polish',
    category: 'Shoe Care',
    description: 'Classic wax polish for a brilliant mirror finish.',
    detailedDescription: 'Our classic wax Shoe Polish is manufactured for those who demand a traditional high-gloss mirror finish. It creates a durable protective layer against dust and moisture.',
    benefits: [
      'Superior mirror-like shine',
      'Protects against moisture and salt',
      'Easy to apply and buff',
      'Economical and long-lasting'
    ],
    specs: {
      'Volume': '40g / 80g',
      'Packaging': 'Metal Tin',
      'Colors': 'Black, Dark Brown, Light Brown',
      'Main Ingredients': 'Paraffin Wax, Carnauba Wax, Turpentine'
    },
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'leather-dye',
    name: 'Leather Dye',
    brand: 'Crow Shine',
    category: 'Shoe Care',
    description: 'Deep penetrating dye to restore and revitalize leather products.',
    detailedDescription: 'Crow Shine Leather Dye is a professional-grade solution manufactured for permanent color restoration. It penetrates deep into leather fibers for a finish that won\'t peel or crack.',
    benefits: [
      'Permanent color restoration',
      'Non-peeling and non-cracking',
      'Suitable for shoes, bags, and belts',
      'Quick-drying formula'
    ],
    specs: {
      'Volume': '100ml / 500ml',
      'Packaging': 'Bottle',
      'Colors': 'Black, Dark Brown, Navy Blue',
      'Application': 'Sponge or Brush'
    },
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'suedes',
    name: 'Suedes Care',
    category: 'Shoe Care',
    description: 'Specialized care for suede and nubuck materials.',
    detailedDescription: 'Our Suede Care range is manufactured to clean and protect delicate suede and nubuck. It effectively lifts the nap and removes stains without damaging the material\'s texture.',
    benefits: [
      'Safe for delicate suede and nubuck',
      'Restores the natural texture (nap)',
      'Prevents water spots and stains',
      'Refreshes faded colors'
    ],
    specs: {
      'Volume': '200ml Spray',
      'Packaging': 'Aerosol / Pump Spray',
      'Colors': 'Neutral, Black, Brown',
      'Compatibility': 'Suede, Nubuck, Rough-out Leather'
    },
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'methylated-spirit',
    name: 'Methylated Spirit',
    category: 'Household',
    description: 'High-grade methylated spirit for cleaning and industrial use.',
    detailedDescription: 'Our Methylated Spirit is a versatile solvent manufactured for both household and industrial applications. Highly effective for cleaning glass and as a disinfectant.',
    benefits: [
      'Powerful cleaning solvent',
      'Leaves glass streak-free',
      'Effective disinfectant',
      'Multi-purpose industrial use'
    ],
    specs: {
      'Volume': '500ml / 1L / 5L',
      'Packaging': 'Plastic Bottle / Jerrycan',
      'Purity': '95%+',
      'Color': 'Purple / Clear'
    },
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  }
];
