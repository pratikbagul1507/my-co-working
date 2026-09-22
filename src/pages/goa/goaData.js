// Data store for Goa
export const goaAreas = [
  "All",
  "Panjim",
  "Porvorim",
  "Margao",
  "Candolim",
  "Anjuna"
];

export const goaSpaces = [
  {
    id: 1,
    name: 'Goa Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Goa',
    area: 'Panjim',
    address: 'Panjim, Goa',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = goaAreas;
export const spaces = goaSpaces;
export default { areas: goaAreas, spaces: goaSpaces };
