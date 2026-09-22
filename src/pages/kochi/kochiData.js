// Data store for Kochi
export const kochiAreas = [
  "All",
  "Kakkanad",
  "MG Road",
  "Kaloor",
  "Edappally",
  "Panampilly Nagar",
  "Infopark"
];

export const kochiSpaces = [
  {
    id: 1,
    name: 'Kochi Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Kochi',
    area: 'Kakkanad',
    address: 'Kakkanad, Kochi',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = kochiAreas;
export const spaces = kochiSpaces;
export default { areas: kochiAreas, spaces: kochiSpaces };
