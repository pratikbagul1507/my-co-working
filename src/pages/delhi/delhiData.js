// Data store for Delhi
export const delhiAreas = [
  "All",
  "Connaught Place",
  "Nehru Place",
  "Saket",
  "Okhla",
  "Aerocity",
  "Lajpat Nagar",
  "Netaji Subhash Place"
];

export const delhiSpaces = [
  {
    id: 1,
    name: 'Delhi Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Delhi',
    area: 'Connaught Place',
    address: 'Connaught Place, Delhi',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = delhiAreas;
export const spaces = delhiSpaces;
export default { areas: delhiAreas, spaces: delhiSpaces };
