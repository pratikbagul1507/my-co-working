// Data store for Bangalore
export const bangaloreAreas = [
  "All",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Whitefield",
  "Electronic City",
  "MG Road",
  "Outer Ring Road",
  "Bellandur"
];

export const bangaloreSpaces = [
  {
    id: 1,
    name: 'Bangalore Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Bangalore',
    area: 'Koramangala',
    address: 'Koramangala, Bangalore',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = bangaloreAreas;
export const spaces = bangaloreSpaces;
export default { areas: bangaloreAreas, spaces: bangaloreSpaces };
