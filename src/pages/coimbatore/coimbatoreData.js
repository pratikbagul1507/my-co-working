// Data store for Coimbatore
export const coimbatoreAreas = [
  "All",
  "RS Puram",
  "Gandhipuram",
  "Peelamedu",
  "Avinashi Road",
  "Saravanampatti"
];

export const coimbatoreSpaces = [
  {
    id: 1,
    name: 'Coimbatore Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Coimbatore',
    area: 'RS Puram',
    address: 'RS Puram, Coimbatore',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = coimbatoreAreas;
export const spaces = coimbatoreSpaces;
export default { areas: coimbatoreAreas, spaces: coimbatoreSpaces };
