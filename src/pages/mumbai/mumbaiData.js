// Data store for Mumbai
export const mumbaiAreas = [
  "All",
  "BKC",
  "Andheri East",
  "Lower Parel",
  "Powai",
  "Malad West",
  "Nariman Point",
  "Thane",
  "Navi Mumbai"
];

export const mumbaiSpaces = [
  {
    id: 1,
    name: 'Mumbai Workspace Hub',
    badge: 'Popular',
    rating: 4.5,
    city: 'Mumbai',
    area: 'BKC',
    address: 'BKC, Mumbai',
    price: 8999,
    priceFormatted: '₹8,999',
    images: []
  }
];

export const areas = mumbaiAreas;
export const spaces = mumbaiSpaces;
export default { areas: mumbaiAreas, spaces: mumbaiSpaces };
