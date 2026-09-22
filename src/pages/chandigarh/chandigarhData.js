// Data store for Chandigarh
export const chandigarhAreas = [
  "All",
  "Sector 17",
  "Sector 34",
  "Sector 8",
  "Industrial Area Phase 1",
  "IT Park"
];

export const chandigarhSpaces = [
  {
    id: 1,
    name: 'Chandigarh Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Chandigarh',
    area: 'Sector 17',
    address: 'Sector 17, Chandigarh',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = chandigarhAreas;
export const spaces = chandigarhSpaces;
export default { areas: chandigarhAreas, spaces: chandigarhSpaces };
