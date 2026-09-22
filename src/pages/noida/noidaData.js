// Data store for Noida
export const noidaAreas = [
  "All",
  "Sector 62",
  "Sector 16",
  "Sector 18",
  "Sector 125",
  "Sector 132",
  "Noida Expressway",
  "Sector 63"
];

export const noidaSpaces = [
  {
    id: 1,
    name: 'Noida Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Noida',
    area: 'Sector 62',
    address: 'Sector 62, Noida',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = noidaAreas;
export const spaces = noidaSpaces;
export default { areas: noidaAreas, spaces: noidaSpaces };
