// ============================================================================
// QUICK LINKS: NAVBAR TABS & LINK HELPERS
// Used by Footer.jsx (Quick links columns)
// ============================================================================
// Navbar tabs and their links, shared by the navbar and the footer "Quick links"
export const navItems = [
  { name: 'Coworking', },
  { name: 'Virtual Office', },
  { name: 'Business Plans', }
];

export const navLinkLabel = (link) =>
  link.replace('#', '').replace('-', ' ').replace(/\b\w/g, (c) => c.toUpperCase());

export const navLinkTarget = (item, link) => (item.name === 'Coworking' ? '/coworking' : link);

// ============================================================================
// 15. FOOTER QUICK LINKS & DIRECTORY DATA (ALL 18 CITIES)
// Displayed under the platform description on the Home page
// Features:
//  - Company brand logo & brief narrative
//  - 3 columns of Quick Links covering all 18 top cities from the top hero grid
// ============================================================================
export const footerQuickLinksData = {
  brand: {
    name: "MyCoworking",
    description: "Mycoworking stands as India’s leading and fastest-growing marketplace for flexible workspaces, delivering tailored, ready-to-move-in office solutions to corporate occupiers nationwide. Our extensive network features over 6,000 listed centres across 140+ cities, providing unparalleled pan-India coverage. Currently, we facilitate a monthly booking run rate of 6,500 desks and proudly support more than 10,000 corporate clients every year."
  },
  columns: [
    {
      id: "col-1",
      title: "Quick links",
      cities: [
        "Gurugram",
        "Bhubaneswar",
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Lucknow"
      ]
    },
    {
      id: "col-2",
      title: "Quick links",
      cities: [
        "Pune",
        "Noida",
        "Delhi",
        "Indore",
        "Ahmedabad",
        "Jaipur"
      ]
    },
    {
      id: "col-3",
      title: "Quick links",
      cities: [
        "Chandigarh",
        "Kochi",
        "Kolkata",
        "Coimbatore",
        "Goa",
        "Mumbai"
      ]
    }
  ]
};
