// Data store for Gurugram
export const gurugramAreas = [
  "All",
  "Golf Course Road",
  "DLF Cyber City",
  "Cyber Hub",
  "Golf Course Extension Road",
  "Udyog Vihar",
  "Sector 44",
  "Sohna Road",
  "Sector 32"
];

export const gurugramSpaces = [
  {
    id: 1,
    name: 'Gurugram Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Gurugram',
    area: 'Golf Course Road',
    address: 'Golf Course Road, Gurugram',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = gurugramAreas;
export const spaces = gurugramSpaces;
export default { areas: gurugramAreas, spaces: gurugramSpaces };
