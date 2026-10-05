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
    images: [
     "" https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwqbiToe3fHaSPeMxo78YrK_-fXu44FF57Iz1NKuvWcdZ_XeTvNQEKZgJDu3g9kl8W7uW_IiW0W99eVoqIDRJSRciy84mqBy6OQuFwZ_wDuZnUNQTa6OkM0x0RiFqYiSzrE5vOgw=s680-w680-h510-rw
    ]
  }
];

export const areas = gurugramAreas;
export const spaces = gurugramSpaces;
export default { areas: gurugramAreas, spaces: gurugramSpaces };
