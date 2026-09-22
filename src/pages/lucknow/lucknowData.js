// Data store for Lucknow
export const lucknowAreas = [
  "All",
  "Gomti Nagar",
  "Hazratganj",
  "Aliganj",
  "Indira Nagar",
  "Vibhuti Khand",
  "Mahanagar"
];

export const lucknowSpaces = [
  {
    id: 1,
    name: 'Lucknow Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Lucknow',
    area: 'Gomti Nagar',
    address: 'Gomti Nagar, Lucknow',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = lucknowAreas;
export const spaces = lucknowSpaces;
export default { areas: lucknowAreas, spaces: lucknowSpaces };
