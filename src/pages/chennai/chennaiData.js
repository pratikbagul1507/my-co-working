// Data store for Chennai
export const chennaiAreas = [
  "All",
  "OMR",
  "Guindy",
  "T Nagar",
  "Anna Nagar",
  "Nungambakkam",
  "Velachery",
  "Perungudi"
];

export const chennaiSpaces = [
  {
    id: 1,
    name: 'Chennai Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Chennai',
    area: 'OMR',
    address: 'OMR, Chennai',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = chennaiAreas;
export const spaces = chennaiSpaces;
export default { areas: chennaiAreas, spaces: chennaiSpaces };
