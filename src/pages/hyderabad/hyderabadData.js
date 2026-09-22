// Data store for Hyderabad
export const hyderabadAreas = [
  "All",
  "Hitec City",
  "Madhapur",
  "Gachibowli",
  "Kondapur",
  "Jubilee Hills",
  "Banjara Hills",
  "Begumpet"
];

export const hyderabadSpaces = [
  {
    id: 1,
    name: 'Hyderabad Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Hyderabad',
    area: 'Hitec City',
    address: 'Hitec City, Hyderabad',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = hyderabadAreas;
export const spaces = hyderabadSpaces;
export default { areas: hyderabadAreas, spaces: hyderabadSpaces };
