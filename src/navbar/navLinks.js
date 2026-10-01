// Navbar tabs and their links, shared by the navbar and the footer "Quick links"
export const navItems = [
  { name: 'Coworking', links: ['#hot-desk', '#dedicated-desk', '#private-cabin'] },
  { name: 'Virtual Office', links: ['#gst-registration', '#business-address', '#mailing-address'] },
  { name: 'Business Plans', links: ['#enterprise', '#startup', '#freelancer'] }
];

export const navLinkLabel = (link) =>
  link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const navLinkTarget = (item, link) => (item.name === 'Coworking' ? '/coworking' : link);
