// Data store for Kolkata
export const kolkataAreas = [
  "All",
  "Salt Lake Sector V",
  "Park Street",
  "New Town",
  "Rajarhat",
  "Camac Street"
];

export const kolkataSpaces = [
  {
    id: 1,
    name: 'Kolkata Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Kolkata',
    area: 'Salt Lake Sector V',
    address: 'Salt Lake Sector V, Kolkata',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = kolkataAreas;
export const spaces = kolkataSpaces;
export default { areas: kolkataAreas, spaces: kolkataSpaces };
