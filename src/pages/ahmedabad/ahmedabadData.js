// Data store for Ahmedabad
export const ahmedabadAreas = [
  "All",
  "SG Highway",
  "Prahlad Nagar",
  "Bodakdev",
  "Navrangpura",
  "Satellite",
  "Ashram Road"
];

export const ahmedabadSpaces = [
  {
    id: 1,
    name: 'Ahmedabad Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Ahmedabad',
    area: 'SG Highway',
    address: 'SG Highway, Ahmedabad',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = ahmedabadAreas;
export const spaces = ahmedabadSpaces;
export default { areas: ahmedabadAreas, spaces: ahmedabadSpaces };
