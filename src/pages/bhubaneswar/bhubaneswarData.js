// Data store for Bhubaneswar
export const bhubaneswarAreas = [
  "All",
  "Jaydev Vihar",
  "Patia",
  "Saheed Nagar",
  "Chandrasekharpur",
  "Nayapalli",
  "Infocity"
];

export const bhubaneswarSpaces = [
  {
    id: 1,
    name: 'Bhubaneswar Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Bhubaneswar',
    area: 'Jaydev Vihar',
    address: 'Jaydev Vihar, Bhubaneswar',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = bhubaneswarAreas;
export const spaces = bhubaneswarSpaces;
export default { areas: bhubaneswarAreas, spaces: bhubaneswarSpaces };
