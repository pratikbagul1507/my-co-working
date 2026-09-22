// Data store for Jaipur
export const jaipurAreas = [
  "All",
  "Malviya Nagar",
  "C Scheme",
  "Vaishali Nagar",
  "Mansarovar",
  "Tonk Road",
  "MI Road"
];

export const jaipurSpaces = [
  {
    id: 1,
    name: 'Jaipur Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Jaipur',
    area: 'Malviya Nagar',
    address: 'Malviya Nagar, Jaipur',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = jaipurAreas;
export const spaces = jaipurSpaces;
export default { areas: jaipurAreas, spaces: jaipurSpaces };
