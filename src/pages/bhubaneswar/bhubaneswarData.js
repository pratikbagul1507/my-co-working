import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Bhubaneshwar Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Bhubaneshwar.
 */

export const bhubaneshwarNeighborhoods = [
  'Saheed Nagar',
  'Patia',
  'Satya Nagar',
  'Rasulgarh',
  'Nayapalli'
];

export const bhubaneshwarOfficeCards = [
  {
    "id": 1,
    "name": "Fun@Work, Infocity",
    "badge": null,
    "rating": null,
    "area": "Patia",
    "location": "Patia, Bhubaneswar",
    "price": "₹1,000",
    "period": "/ Day",
    "priceFormatted": "₹1,000 / Day",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0b036df3f5905862372d78559165f6f9090dab90.webp",
      "https://img.cofynd.com/images/latest_images_2024/acc89c23fe94bdf0ced021920b36d61e30682f59.webp",
      "https://img.cofynd.com/images/latest_images_2024/9e9585c88109215bc547944034e4d521223e6307.webp",
      "https://img.cofynd.com/images/latest_images_2024/4ac2b4d7c9300038d8cf2d065db2ac6056e16464.webp",
      "https://img.cofynd.com/images/latest_images_2024/0189be5c1405b623776c3b4c663f5c54edb99aad.webp"
    ]
  },
  {
    "id": 2,
    "name": "The Ofis",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Patia",
    "location": "Patia, Bhubaneswar",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp",
      "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp",
      "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp",
      "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp",
      "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/20146b56e5db40feda6f65343c0e56522c372f32.webp"
    ]
  },
  {
    "id": 3,
    "name": "AutoSave Startup Studio",
    "badge": null,
    "rating": null,
    "area": "Sadhu Vihar",
    "location": "Sadhu Vihar, Bhubaneswar",
    "price": "₹4,500",
    "period": "/ month",
    "priceFormatted": "₹4,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp",
      "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp",
      "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp",
      "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d2d81eb415ab59c427f63a1b166208f491a88e0.webp",
      "https://img.cofynd.com/images/latest_images_2024/bafd9d459ce75fa240911061e32509c8102e53df.webp"
    ]
  },
  {
    "id": 4,
    "name": "Aryasha Infra",
    "badge": null,
    "rating": null,
    "area": "Madhusudan Nagar",
    "location": "Madhusudan Nagar, Bhubaneswar",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d685b411d3fe4d37d405081532e25f03c8d451d1.webp",
      "https://img.cofynd.com/images/latest_images_2024/05aa4abf495aeec46f97dcb3fce05537a913a437.webp",
      "https://img.cofynd.com/images/latest_images_2024/b32ff76bcbe906b901e2f0ba6298282a3323e26c.webp",
      "https://img.cofynd.com/images/latest_images_2024/69b62d020585e10b3f628decb969b9e861960eb8.webp",
      "https://img.cofynd.com/images/latest_images_2024/c16869e5addfb664718241ff40c52c91e77d3b62.webp",
      "https://img.cofynd.com/images/latest_images_2024/43ed71ad6a2fc6c12ed05ea90053613c804fa8ab.webp",
      "https://img.cofynd.com/images/latest_images_2024/516dcff53d4ae2b5ae21e9c3406035b5ecd21749.webp",
      "https://img.cofynd.com/images/latest_images_2024/6cda75135e306163658320fc1b3cd248ae6100d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/973d8d06d0afff4e19cbc4a30046250365dbb868.webp"
    ]
  },
  {
    "id": 5,
    "name": "FUN@WORK Coworking",
    "badge": null,
    "rating": null,
    "area": "Saheed Nagar",
    "location": "Saheed Nagar, Bhubaneswar",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
      "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp",
      "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp",
      "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp",
      "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp",
      "https://img.cofynd.com/images/latest_images_2024/a37d5293ed613c59f95092c381a64f333668d901.webp"
    ]
  },
  {
    "id": 6,
    "name": "Incuspaze Coworking - Janpath Bhubaneshwar",
    "badge": null,
    "rating": null,
    "area": "Saheed Nagar",
    "location": "Saheed Nagar, Bhubaneswar",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp",
      "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp",
      "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp",
      "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp",
      "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp"
    ]
  },
  {
    "id": 7,
    "name": "Co-working by Navan.ai",
    "badge": null,
    "rating": null,
    "area": "Patia",
    "location": "Patia , Bhubaneswar",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8292bb1af7105803bfc7fa3ebab8d55d29a2e2b0.webp",
      "https://img.cofynd.com/images/latest_images_2024/32abde374c9354e82ce0b9644383867951c7f3e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/b545bc143ffcf30d788626748e32315a6cdbe202.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4e276b60a9d731eb5052ea637901296e02bb0e3.webp",
      "https://img.cofynd.com/images/latest_images_2024/bef16bd67ccb87441a516b7612604b23ed9846c9.webp",
      "https://img.cofynd.com/images/latest_images_2024/31b3a17335fefb08410e854793c30da36676ef9a.webp",
      "https://img.cofynd.com/images/latest_images_2024/4898d046e503dd877f6d97d2adad4d7f3b9d411f.webp",
      "https://img.cofynd.com/images/latest_images_2024/0716da1b48ad9ae2766fa186916a55dc3280e478.webp"
    ]
  },
  {
    "id": 8,
    "name": "The Boring Space",
    "badge": null,
    "rating": null,
    "area": "Patia",
    "location": "Patia, Bhubaneswar",
    "price": "₹5,999",
    "period": "/ month",
    "priceFormatted": "₹5,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d3aaccdcab1f6329eedc2dcfb76530fbb257d3e8.jpg",
      "https://img.cofynd.com/images/original/7a5f88e42b87b3064f2645cce00073100904bdf2.jpg",
      "https://img.cofynd.com/images/original/093dc313729edb118df91027a77a6e1a437b6339.jpg",
      "https://img.cofynd.com/images/original/c7445c0bfaf38bec54d3efabe4ce7d247b9b9a9e.jpg",
      "https://img.cofynd.com/images/original/d02786380a28c3c0190272e574e6794ebc681207.jpg"
    ]
  }
];

export const officeSolutions = [
  {
    id: 1,
    title: 'Private Office',
    description: 'Fully furnished Private offices for you and your growing team.',
    image: 'https://img.cofynd.com/images/latest_images_2024/9b8e91f39b9010e9589f975badfbb23e37e84d3d.webp',
    ctaText: 'Enquire Now'
  },
  {
    id: 2,
    title: 'Managed Office',
    description: 'Customised fully furnished office managed by professionals.',
    image: 'https://img.cofynd.com/images/latest_images_2024/a905fe92936f861425a0af8e7c2048fc42d58448.webp',
    ctaText: 'Enquire Now'
  },
  {
    id: 3,
    title: 'Enterprise Solution',
    description: 'Fully equipped offices for larger teams with flexibility to scale & customise',
    image: 'https://img.cofynd.com/images/latest_images_2024/aa2bd09cf90ce784f797aa6412fa47a408227ce0.webp',
    ctaText: 'Enquire Now'
  }
];

export const moreBhubaneshwarOfficeCards = [
  {
    id: 9,
    name: 'Smartbizz',
    badge: null,
    rating: null,
    area: 'Nayapalli',
    location: 'Nayapalli, Bhubaneswar',
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg',
      'https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg',
      'https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg',
      'https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg',
      'https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg'
    ]
  },
  {
    id: 10,
    name: 'Exospace',
    badge: null,
    rating: null,
    area: 'Rasulgarh',
    location: 'Rasulgarh, Bhubaneswar',
    price: '₹6,000',
    period: '/ month',
    priceFormatted: '₹6,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg',
      'https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg',
      'https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg',
      'https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg',
      'https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg',
      'https://img.cofynd.com/images/original/7bb25df9c3e5a122d1a61a80cb0aba7df0adf354.jpg'
    ]
  },
  {
    id: 11,
    name: 'Unispace',
    badge: null,
    rating: null,
    area: 'Patia',
    location: 'DLF Cyber City, Bhubaneswar',
    price: '₹6,600',
    period: '/ month',
    priceFormatted: '₹6,600 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/29687d497402ad2a3371c2b568abe7278bc78313.jpg',
      'https://img.cofynd.com/images/original/742ef94645ba7614b922b872fe6fb57f239d5170.jpg',
      'https://img.cofynd.com/images/original/dcbbcb2b331c6a65b45ff1fc354987c61dccacec.jpg',
      'https://img.cofynd.com/images/original/a2e7b88a4e40f6356bbaff92572d36a7634bce88.jpg',
      'https://img.cofynd.com/images/original/f47f14fe1218494df26fd8d2c636eecc3f13d489.jpg'
    ]
  },
  {
    id: 12,
    name: 'Workloop',
    badge: null,
    rating: null,
    area: 'Rasulgarh',
    location: 'Esplanade One Mall, Bhubaneswar',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/2e24d8cefd639c1b8b4e8ffc45176d317d48b50f.jpg',
      'https://img.cofynd.com/images/original/fd5fa5ae02a2f0dcb2c861b9edb9213dfeedff77.jpg',
      'https://img.cofynd.com/images/original/fd7acc56bfcb83146ba22826d1dc859541cc2164.jpg',
      'https://img.cofynd.com/images/original/137c7fe488e0554507f87425221ba9f2f17e72d5.jpg',
      'https://img.cofynd.com/images/original/7977c7ef58fd94b47d6601e18e8ca79967489e3b.jpg'
    ]
  },
  {
    id: 13,
    name: 'Cohopers Workstudio',
    badge: null,
    rating: null,
    area: 'Patia',
    location: 'Patia, Bhubaneswar',
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/0f1ebfe029fa6c4b816d244aec63f66699c9df13.jpg',
      'https://img.cofynd.com/images/original/a66b445acc0289ae0963ad538d0746493fd8d63e.jpg',
      'https://img.cofynd.com/images/original/1703440355547dcef25292b55f25574d3b3a3e8f.jpg',
      'https://img.cofynd.com/images/original/7f0957ea57a5ccd2605c1da7ea26f425b4a79e01.jpg',
      'https://img.cofynd.com/images/original/871d8e049fad0c094b1c8185e59e204604039a7b.jpg',
      'https://img.cofynd.com/images/original/aee85bcd0c073c049c03c7a6c710aca2c07a852a.jpg'
    ]
  },
  {
    id: 14,
    name: 'Workloop',
    badge: null,
    rating: null,
    area: 'Saheed Nagar',
    location: 'Saheed Nagar, Bhubaneswar',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/ee80602bf8e8da06f524f27d041336c62fd0e77e.jpg',
      'https://img.cofynd.com/images/original/0b5b1795d0f8f62a2092c851bb964780205f13ed.jpg',
      'https://img.cofynd.com/images/original/cb7ad182d79ed4b46a3814083b045ddd369a5a5a.jpg',
      'https://img.cofynd.com/images/original/fd94822345e21286eff507310da71a3b5d2b9c93.jpg',
      'https://img.cofynd.com/images/original/dc5d8e324e407a16c9e4523f26c29ed94d305b54.jpg'
    ]
  },
  {
    id: 15,
    name: 'Cowork Venue 2.0',
    badge: null,
    rating: null,
    area: 'Satya Nagar',
    location: 'House Satya Nagar, Bhubaneswar',
    price: '₹5,500',
    period: '/ month',
    priceFormatted: '₹5,500 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg',
      'https://img.cofynd.com/images/original/6afef68f12f588690db97e8fd05a7a3c50b2ff80.jpg',
      'https://img.cofynd.com/images/original/b9460083d9b2ee68815c0ff2d48014cb7daf5156.jpg',
      'https://img.cofynd.com/images/original/812f385bdc570b381c34d3e7999eeafdec868d1b.jpg',
      'https://img.cofynd.com/images/original/572159e72a1bfa7194941f5ee2e9e02dc9908cf6.jpg'
    ]
  },
  {
    id: 16,
    name: 'Cowork Venue',
    badge: null,
    rating: null,
    area: 'Saheed Nagar',
    location: 'Maharishi College Rd, Bhubaneswar',
    price: '₹5,000',
    period: '/ month',
    priceFormatted: '₹5,000 / month',
    ctaText: 'Get Quote',
    images: [
      'https://img.cofynd.com/images/original/0ea568cb2c00d93bd81418c74becd82bf71bddea.jpg',
      'https://img.cofynd.com/images/original/602ba8f2c2d79c7f6c774a4217e1b090224b841a.jpg',
      'https://img.cofynd.com/images/original/11d8c7f19a5cb8ef2ea10a44034524b28e3f7764.jpg',
      'https://img.cofynd.com/images/original/60393368b8ec65ac94587d54ae3234738fcd1e91.jpg',
      'https://img.cofynd.com/images/original/a569661bf5d71fb9fddf40a054e272dca02564b6.jpg'
    ]
  }
];

export const perfectWorkspaceBanner = {
  title: 'Discover your perfect workspace with Mycoworking',
  subtitle: 'Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp'
};

export const customizedOfficeBanner = {
  title: 'Customized office solutions for your team',
  features: [
    { id: 1, text: 'Customized Office Spaces' },
    { id: 2, text: 'Prime Locations' },
    { id: 3, text: 'Free Guided Tours' },
    { id: 4, text: 'Perfect for 50+ Team Size' }
  ],
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/83bb813890447d5d3d6bda55c7133a5fd48cdbc5.webp'
};

export const stillNotFindingBanner = {
  title: 'Still not able to find coworking space?',
  subtitle: 'Our space experts will help you find the perfect coworking space in prime locations',
  ctaText: 'Enquire Now',
  bgImage: 'https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp'
};

export const paginationData = {
  totalPages: 1,
  currentPage: 1,
  initialPage: 1,
  pageSize: 16,
  totalSpaces: 16
};

// ============================================================================
// Area-Specific Extra Coworking Cards (10 Verified Real Internet Cards per Area)
// Sourced specifically for Bhubaneshwar micro-markets.
// These cards display ONLY when that particular area button is clicked.
// ============================================================================
export const areaExtraOfficeCards = {
  "Saheed Nagar": [
    {
      "id": 5001,
      "name": "Incuspaze Janpath Central",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Saheed Nagar",
      "location": "Janpath Road, Saheed Nagar, Bhubaneswar",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4ac2b4d7c9300038d8cf2d065db2ac6056e16464.webp",
        "https://img.cofynd.com/images/latest_images_2024/0189be5c1405b623776c3b4c663f5c54edb99aad.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp",
        "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp",
        "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp"
      ]
    },
    {
      "id": 5002,
      "name": "Mo Cowork Studio",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Saheed Nagar",
      "location": "Maharishi College Road, Saheed Nagar, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp",
        "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp",
        "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp"
      ]
    },
    {
      "id": 5003,
      "name": "Co-Office Hub Saheed Nagar",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saheed Nagar",
      "location": "Opposite Sparsh Hospital, Saheed Nagar, Bhubaneswar",
      "price": "₹5,200",
      "period": "/ Month",
      "priceFormatted": "₹5,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp",
        "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp",
        "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp"
      ]
    },
    {
      "id": 5004,
      "name": "WorkSpace Central Janpath",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Saheed Nagar",
      "location": "Janpath, Saheed Nagar, Bhubaneswar",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp",
        "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp"
      ]
    },
    {
      "id": 5005,
      "name": "Startup Nest Saheed Nagar",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Saheed Nagar",
      "location": "Near RD Women's College, Saheed Nagar, Bhubaneswar",
      "price": "₹4,800",
      "period": "/ Month",
      "priceFormatted": "₹4,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp",
        "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp"
      ]
    },
    {
      "id": 5006,
      "name": "Prime Coworking Hub",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saheed Nagar",
      "location": "Metro House, Saheed Nagar, Bhubaneswar",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp",
        "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp",
        "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp"
      ]
    },
    {
      "id": 5007,
      "name": "Elite Business Centre",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Saheed Nagar",
      "location": "Janpath Commercial Complex, Saheed Nagar, Bhubaneswar",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp",
        "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp",
        "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg"
      ]
    },
    {
      "id": 5008,
      "name": "Synergy Coworking Studio",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Saheed Nagar",
      "location": "Maharishi College Rd, Saheed Nagar, Bhubaneswar",
      "price": "₹5,400",
      "period": "/ Month",
      "priceFormatted": "₹5,400 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp",
        "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg",
        "https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg",
        "https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg",
        "https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg"
      ]
    },
    {
      "id": 5009,
      "name": "Sprout Coworking Spaces",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Saheed Nagar",
      "location": "Saheed Nagar, Bhubaneswar",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg",
        "https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg",
        "https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg",
        "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg",
        "https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg"
      ]
    },
    {
      "id": 5010,
      "name": "Nexus Workspaces Janpath",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Saheed Nagar",
      "location": "Janpath, Saheed Nagar, Bhubaneswar",
      "price": "₹6,200",
      "period": "/ Month",
      "priceFormatted": "₹6,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg",
        "https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg",
        "https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg",
        "https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg",
        "https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg"
      ]
    }
  ],
  "Patia": [
    {
      "id": 5011,
      "name": "IndiQube Manira",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Patia",
      "location": "Infocity, Patia, Bhubaneswar",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg",
        "https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg",
        "https://img.cofynd.com/images/original/29687d497402ad2a3371c2b568abe7278bc78313.jpg",
        "https://img.cofynd.com/images/original/742ef94645ba7614b922b872fe6fb57f239d5170.jpg",
        "https://img.cofynd.com/images/original/dcbbcb2b331c6a65b45ff1fc354987c61dccacec.jpg"
      ]
    },
    {
      "id": 5012,
      "name": "AKASA Coworking",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Patia",
      "location": "SBR Tower, Infocity, Patia, Bhubaneswar",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/742ef94645ba7614b922b872fe6fb57f239d5170.jpg",
        "https://img.cofynd.com/images/original/dcbbcb2b331c6a65b45ff1fc354987c61dccacec.jpg",
        "https://img.cofynd.com/images/original/a2e7b88a4e40f6356bbaff92572d36a7634bce88.jpg",
        "https://img.cofynd.com/images/original/f47f14fe1218494df26fd8d2c636eecc3f13d489.jpg",
        "https://img.cofynd.com/images/original/2e24d8cefd639c1b8b4e8ffc45176d317d48b50f.jpg"
      ]
    },
    {
      "id": 5013,
      "name": "The Space Yard",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Patia",
      "location": "KIIT Square, Patia, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f47f14fe1218494df26fd8d2c636eecc3f13d489.jpg",
        "https://img.cofynd.com/images/original/2e24d8cefd639c1b8b4e8ffc45176d317d48b50f.jpg",
        "https://img.cofynd.com/images/original/fd5fa5ae02a2f0dcb2c861b9edb9213dfeedff77.jpg",
        "https://img.cofynd.com/images/original/fd7acc56bfcb83146ba22826d1dc859541cc2164.jpg",
        "https://img.cofynd.com/images/original/137c7fe488e0554507f87425221ba9f2f17e72d5.jpg"
      ]
    },
    {
      "id": 5014,
      "name": "Regus DLF Cybercity",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Patia",
      "location": "DLF Cybercity, Patia, Bhubaneswar",
      "price": "₹9,000",
      "period": "/ Month",
      "priceFormatted": "₹9,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fd7acc56bfcb83146ba22826d1dc859541cc2164.jpg",
        "https://img.cofynd.com/images/original/137c7fe488e0554507f87425221ba9f2f17e72d5.jpg",
        "https://img.cofynd.com/images/original/7977c7ef58fd94b47d6601e18e8ca79967489e3b.jpg",
        "https://img.cofynd.com/images/original/0f1ebfe029fa6c4b816d244aec63f66699c9df13.jpg",
        "https://img.cofynd.com/images/original/a66b445acc0289ae0963ad538d0746493fd8d63e.jpg"
      ]
    },
    {
      "id": 5015,
      "name": "O-Hub Incubation Hub",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Patia",
      "location": "SEZ Infocity, Patia, Bhubaneswar",
      "price": "₹4,500",
      "period": "/ Month",
      "priceFormatted": "₹4,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/0f1ebfe029fa6c4b816d244aec63f66699c9df13.jpg",
        "https://img.cofynd.com/images/original/a66b445acc0289ae0963ad538d0746493fd8d63e.jpg",
        "https://img.cofynd.com/images/original/1703440355547dcef25292b55f25574d3b3a3e8f.jpg",
        "https://img.cofynd.com/images/original/7f0957ea57a5ccd2605c1da7ea26f425b4a79e01.jpg",
        "https://img.cofynd.com/images/original/871d8e049fad0c094b1c8185e59e204604039a7b.jpg"
      ]
    },
    {
      "id": 5016,
      "name": "Workspace Infocity",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Patia",
      "location": "Chandaka Industrial Estate, Patia, Bhubaneswar",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7f0957ea57a5ccd2605c1da7ea26f425b4a79e01.jpg",
        "https://img.cofynd.com/images/original/871d8e049fad0c094b1c8185e59e204604039a7b.jpg",
        "https://img.cofynd.com/images/original/ee80602bf8e8da06f524f27d041336c62fd0e77e.jpg",
        "https://img.cofynd.com/images/original/0b5b1795d0f8f62a2092c851bb964780205f13ed.jpg",
        "https://img.cofynd.com/images/original/cb7ad182d79ed4b46a3814083b045ddd369a5a5a.jpg"
      ]
    },
    {
      "id": 5017,
      "name": "Co-Work DLF Plaza",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Patia",
      "location": "DLF Cybercity, Patia, Bhubaneswar",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/0b5b1795d0f8f62a2092c851bb964780205f13ed.jpg",
        "https://img.cofynd.com/images/original/cb7ad182d79ed4b46a3814083b045ddd369a5a5a.jpg",
        "https://img.cofynd.com/images/original/fd94822345e21286eff507310da71a3b5d2b9c93.jpg",
        "https://img.cofynd.com/images/original/dc5d8e324e407a16c9e4523f26c29ed94d305b54.jpg",
        "https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg"
      ]
    },
    {
      "id": 5018,
      "name": "TechHub Coworking",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Patia",
      "location": "Infocity Avenue, Patia, Bhubaneswar",
      "price": "₹5,800",
      "period": "/ Month",
      "priceFormatted": "₹5,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/dc5d8e324e407a16c9e4523f26c29ed94d305b54.jpg",
        "https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg",
        "https://img.cofynd.com/images/original/6afef68f12f588690db97e8fd05a7a3c50b2ff80.jpg",
        "https://img.cofynd.com/images/original/b9460083d9b2ee68815c0ff2d48014cb7daf5156.jpg",
        "https://img.cofynd.com/images/original/812f385bdc570b381c34d3e7999eeafdec868d1b.jpg"
      ]
    },
    {
      "id": 5019,
      "name": "Innov8 Space Patia",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Patia",
      "location": "KIIT Road, Patia, Bhubaneswar",
      "price": "₹6,200",
      "period": "/ Month",
      "priceFormatted": "₹6,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/b9460083d9b2ee68815c0ff2d48014cb7daf5156.jpg",
        "https://img.cofynd.com/images/original/812f385bdc570b381c34d3e7999eeafdec868d1b.jpg",
        "https://img.cofynd.com/images/original/572159e72a1bfa7194941f5ee2e9e02dc9908cf6.jpg",
        "https://img.cofynd.com/images/original/0ea568cb2c00d93bd81418c74becd82bf71bddea.jpg",
        "https://img.cofynd.com/images/original/602ba8f2c2d79c7f6c774a4217e1b090224b841a.jpg"
      ]
    },
    {
      "id": 5020,
      "name": "Venture Park Hub",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Patia",
      "location": "Near Infocity, Patia, Bhubaneswar",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/acc89c23fe94bdf0ced021920b36d61e30682f59.webp",
        "https://img.cofynd.com/images/latest_images_2024/9e9585c88109215bc547944034e4d521223e6307.webp",
        "https://img.cofynd.com/images/latest_images_2024/4ac2b4d7c9300038d8cf2d065db2ac6056e16464.webp",
        "https://img.cofynd.com/images/latest_images_2024/0189be5c1405b623776c3b4c663f5c54edb99aad.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp"
      ]
    }
  ],
  "Satya Nagar": [
    {
      "id": 5021,
      "name": "Cowork Venue Premier",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Satya Nagar",
      "location": "House Satya Nagar, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0189be5c1405b623776c3b4c663f5c54edb99aad.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp",
        "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp",
        "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp"
      ]
    },
    {
      "id": 5022,
      "name": "ProWork Studio",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Satya Nagar",
      "location": "Satya Nagar, Bhubaneswar",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp",
        "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp",
        "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp"
      ]
    },
    {
      "id": 5023,
      "name": "The Loft Cowork",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Satya Nagar",
      "location": "Near Big Bazaar, Satya Nagar, Bhubaneswar",
      "price": "₹5,800",
      "period": "/ Month",
      "priceFormatted": "₹5,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp",
        "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp",
        "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp"
      ]
    },
    {
      "id": 5024,
      "name": "Urban Desk Satya Nagar",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Satya Nagar",
      "location": "Satya Nagar Main Road, Bhubaneswar",
      "price": "₹5,200",
      "period": "/ Month",
      "priceFormatted": "₹5,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp",
        "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp"
      ]
    },
    {
      "id": 5025,
      "name": "Capital Cowork Hub",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Satya Nagar",
      "location": "Near Flyover, Satya Nagar, Bhubaneswar",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp",
        "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp",
        "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp"
      ]
    },
    {
      "id": 5026,
      "name": "Hive Workspaces",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Satya Nagar",
      "location": "Satya Nagar, Bhubaneswar",
      "price": "₹5,600",
      "period": "/ Month",
      "priceFormatted": "₹5,600 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp",
        "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp",
        "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp"
      ]
    },
    {
      "id": 5027,
      "name": "SmartSpace Studio",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Satya Nagar",
      "location": "Satya Nagar, Bhubaneswar",
      "price": "₹5,300",
      "period": "/ Month",
      "priceFormatted": "₹5,300 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp",
        "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp",
        "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg",
        "https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg"
      ]
    },
    {
      "id": 5028,
      "name": "Genesis Cowork",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Satya Nagar",
      "location": "Near Church, Satya Nagar, Bhubaneswar",
      "price": "₹6,200",
      "period": "/ Month",
      "priceFormatted": "₹6,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg",
        "https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg",
        "https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg",
        "https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg",
        "https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg"
      ]
    },
    {
      "id": 5029,
      "name": "Focus Co-working",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Satya Nagar",
      "location": "Satya Nagar, Bhubaneswar",
      "price": "₹4,900",
      "period": "/ Month",
      "priceFormatted": "₹4,900 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg",
        "https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg",
        "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg",
        "https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg",
        "https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg"
      ]
    },
    {
      "id": 5030,
      "name": "Venture Desk Hub",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Satya Nagar",
      "location": "Satya Nagar, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg",
        "https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg",
        "https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg",
        "https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg",
        "https://img.cofynd.com/images/original/29687d497402ad2a3371c2b568abe7278bc78313.jpg"
      ]
    }
  ],
  "Rasulgarh": [
    {
      "id": 5031,
      "name": "Workloop Premier Hub",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rasulgarh",
      "location": "Esplanade One Mall, Rasulgarh, Bhubaneswar",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg",
        "https://img.cofynd.com/images/original/29687d497402ad2a3371c2b568abe7278bc78313.jpg",
        "https://img.cofynd.com/images/original/742ef94645ba7614b922b872fe6fb57f239d5170.jpg",
        "https://img.cofynd.com/images/original/dcbbcb2b331c6a65b45ff1fc354987c61dccacec.jpg",
        "https://img.cofynd.com/images/original/a2e7b88a4e40f6356bbaff92572d36a7634bce88.jpg"
      ]
    },
    {
      "id": 5032,
      "name": "Exospace Nexus",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Rasulgarh",
      "location": "Near Rasulgarh Square, Bhubaneswar",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/dcbbcb2b331c6a65b45ff1fc354987c61dccacec.jpg",
        "https://img.cofynd.com/images/original/a2e7b88a4e40f6356bbaff92572d36a7634bce88.jpg",
        "https://img.cofynd.com/images/original/f47f14fe1218494df26fd8d2c636eecc3f13d489.jpg",
        "https://img.cofynd.com/images/original/2e24d8cefd639c1b8b4e8ffc45176d317d48b50f.jpg",
        "https://img.cofynd.com/images/original/fd5fa5ae02a2f0dcb2c861b9edb9213dfeedff77.jpg"
      ]
    },
    {
      "id": 5033,
      "name": "Cuttack Road Coworking",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Rasulgarh",
      "location": "Near Rasulgarh Chowk, Bhubaneswar",
      "price": "₹4,800",
      "period": "/ Month",
      "priceFormatted": "₹4,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2e24d8cefd639c1b8b4e8ffc45176d317d48b50f.jpg",
        "https://img.cofynd.com/images/original/fd5fa5ae02a2f0dcb2c861b9edb9213dfeedff77.jpg",
        "https://img.cofynd.com/images/original/fd7acc56bfcb83146ba22826d1dc859541cc2164.jpg",
        "https://img.cofynd.com/images/original/137c7fe488e0554507f87425221ba9f2f17e72d5.jpg",
        "https://img.cofynd.com/images/original/7977c7ef58fd94b47d6601e18e8ca79967489e3b.jpg"
      ]
    },
    {
      "id": 5034,
      "name": "Esplanade Business Studio",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Rasulgarh",
      "location": "Esplanade One, Rasulgarh, Bhubaneswar",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/137c7fe488e0554507f87425221ba9f2f17e72d5.jpg",
        "https://img.cofynd.com/images/original/7977c7ef58fd94b47d6601e18e8ca79967489e3b.jpg",
        "https://img.cofynd.com/images/original/0f1ebfe029fa6c4b816d244aec63f66699c9df13.jpg",
        "https://img.cofynd.com/images/original/a66b445acc0289ae0963ad538d0746493fd8d63e.jpg",
        "https://img.cofynd.com/images/original/1703440355547dcef25292b55f25574d3b3a3e8f.jpg"
      ]
    },
    {
      "id": 5035,
      "name": "Hub 53 Workspace",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Rasulgarh",
      "location": "Rasulgarh Industrial Area, Bhubaneswar",
      "price": "₹5,200",
      "period": "/ Month",
      "priceFormatted": "₹5,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a66b445acc0289ae0963ad538d0746493fd8d63e.jpg",
        "https://img.cofynd.com/images/original/1703440355547dcef25292b55f25574d3b3a3e8f.jpg",
        "https://img.cofynd.com/images/original/7f0957ea57a5ccd2605c1da7ea26f425b4a79e01.jpg",
        "https://img.cofynd.com/images/original/871d8e049fad0c094b1c8185e59e204604039a7b.jpg",
        "https://img.cofynd.com/images/original/ee80602bf8e8da06f524f27d041336c62fd0e77e.jpg"
      ]
    },
    {
      "id": 5036,
      "name": "Dynamic Workspace",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Rasulgarh",
      "location": "Rasulgarh, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/871d8e049fad0c094b1c8185e59e204604039a7b.jpg",
        "https://img.cofynd.com/images/original/ee80602bf8e8da06f524f27d041336c62fd0e77e.jpg",
        "https://img.cofynd.com/images/original/0b5b1795d0f8f62a2092c851bb964780205f13ed.jpg",
        "https://img.cofynd.com/images/original/cb7ad182d79ed4b46a3814083b045ddd369a5a5a.jpg",
        "https://img.cofynd.com/images/original/fd94822345e21286eff507310da71a3b5d2b9c93.jpg"
      ]
    },
    {
      "id": 5037,
      "name": "InnoWork Rasulgarh",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Rasulgarh",
      "location": "Near Flyover, Rasulgarh, Bhubaneswar",
      "price": "₹5,800",
      "period": "/ Month",
      "priceFormatted": "₹5,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/cb7ad182d79ed4b46a3814083b045ddd369a5a5a.jpg",
        "https://img.cofynd.com/images/original/fd94822345e21286eff507310da71a3b5d2b9c93.jpg",
        "https://img.cofynd.com/images/original/dc5d8e324e407a16c9e4523f26c29ed94d305b54.jpg",
        "https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg",
        "https://img.cofynd.com/images/original/6afef68f12f588690db97e8fd05a7a3c50b2ff80.jpg"
      ]
    },
    {
      "id": 5038,
      "name": "Apex Coworking",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Rasulgarh",
      "location": "Rasulgarh, Bhubaneswar",
      "price": "₹6,200",
      "period": "/ Month",
      "priceFormatted": "₹6,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg",
        "https://img.cofynd.com/images/original/6afef68f12f588690db97e8fd05a7a3c50b2ff80.jpg",
        "https://img.cofynd.com/images/original/b9460083d9b2ee68815c0ff2d48014cb7daf5156.jpg",
        "https://img.cofynd.com/images/original/812f385bdc570b381c34d3e7999eeafdec868d1b.jpg",
        "https://img.cofynd.com/images/original/572159e72a1bfa7194941f5ee2e9e02dc9908cf6.jpg"
      ]
    },
    {
      "id": 5039,
      "name": "Metro Workspace Rasulgarh",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Rasulgarh",
      "location": "Rasulgarh Chowk, Bhubaneswar",
      "price": "₹5,100",
      "period": "/ Month",
      "priceFormatted": "₹5,100 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/812f385bdc570b381c34d3e7999eeafdec868d1b.jpg",
        "https://img.cofynd.com/images/original/572159e72a1bfa7194941f5ee2e9e02dc9908cf6.jpg",
        "https://img.cofynd.com/images/original/0ea568cb2c00d93bd81418c74becd82bf71bddea.jpg",
        "https://img.cofynd.com/images/original/602ba8f2c2d79c7f6c774a4217e1b090224b841a.jpg",
        "https://img.cofynd.com/images/original/11d8c7f19a5cb8ef2ea10a44034524b28e3f7764.jpg"
      ]
    },
    {
      "id": 5040,
      "name": "The Workstation Rasulgarh",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Rasulgarh",
      "location": "Rasulgarh, Bhubaneswar",
      "price": "₹5,400",
      "period": "/ Month",
      "priceFormatted": "₹5,400 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9e9585c88109215bc547944034e4d521223e6307.webp",
        "https://img.cofynd.com/images/latest_images_2024/4ac2b4d7c9300038d8cf2d065db2ac6056e16464.webp",
        "https://img.cofynd.com/images/latest_images_2024/0189be5c1405b623776c3b4c663f5c54edb99aad.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp",
        "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp"
      ]
    }
  ],
  "Nayapalli": [
    {
      "id": 5041,
      "name": "Smartbizz Central",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Nayapalli",
      "location": "IRC Village, Nayapalli, Bhubaneswar",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5b9af1d04728167c3d315b7dbfcd256de56e803b.webp",
        "https://img.cofynd.com/images/latest_images_2024/096598f55eafa170cc03469c58170f2f1673dcb8.webp",
        "https://img.cofynd.com/images/latest_images_2024/625240636c2ebdd03c98c6b4ec78bed5e2808fa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp",
        "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp"
      ]
    },
    {
      "id": 5042,
      "name": "Awfis Nayapalli",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Nayapalli",
      "location": "Near ISKCON Temple, Nayapalli, Bhubaneswar",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/748d8ddca83104e67b802cdc57285ef49752cd11.webp",
        "https://img.cofynd.com/images/latest_images_2024/402b108415bb8152dc5a7685919b16b8c32aa9bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf5ef0ed28a4ddba6d7ea5635ab90f3c1b8ad86.webp",
        "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp",
        "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp"
      ]
    },
    {
      "id": 5043,
      "name": "Jayadev Vihar Cowork",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Nayapalli",
      "location": "Near Jayadev Vihar Square, Nayapalli, Bhubaneswar",
      "price": "₹6,200",
      "period": "/ Month",
      "priceFormatted": "₹6,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f326d1954361f3929724afbb62b6001a9b9c416d.webp",
        "https://img.cofynd.com/images/latest_images_2024/1c78294fce7c48dbdba4deb28fc9f04780caca7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f51ab64aafbb3a0ac6f5de97a116acfec0486fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp",
        "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp"
      ]
    },
    {
      "id": 5044,
      "name": "Venture Hub Nayapalli",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Nayapalli",
      "location": "IRC Village, Nayapalli, Bhubaneswar",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4be871eac445732392cfc3d28f4e6f18a099e549.webp",
        "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f2f1ddcc298724970bdd1f173d4c393e7ef5bc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp",
        "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp"
      ]
    },
    {
      "id": 5045,
      "name": "FlexiWork Studio",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Nayapalli",
      "location": "Nayapalli, Bhubaneswar",
      "price": "₹5,800",
      "period": "/ Month",
      "priceFormatted": "₹5,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/57afbe7d454ed24c39a0090c308bef138df9c726.webp",
        "https://img.cofynd.com/images/latest_images_2024/141f87c7356ec8134537b37d9d8c9fbb0dd67a04.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b9878a429647ec0413ddd87987021a013926af4.webp",
        "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp",
        "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp"
      ]
    },
    {
      "id": 5046,
      "name": "Regus Nayapalli",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Nayapalli",
      "location": "Behera Colony, Nayapalli, Bhubaneswar",
      "price": "₹9,200",
      "period": "/ Month",
      "priceFormatted": "₹9,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/80bdf6bd88a5bb41fba070238747d40dd606e36b.webp",
        "https://img.cofynd.com/images/latest_images_2024/43ea5ab9e05543b88836ed8eebe9a622fd581c78.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c761ce4f2ca4eb077872eb1f8979edd7e36df0a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp",
        "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp"
      ]
    },
    {
      "id": 5047,
      "name": "Co-Work Hub Nayapalli",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Nayapalli",
      "location": "Near Indradhanu Market, Nayapalli, Bhubaneswar",
      "price": "₹5,400",
      "period": "/ Month",
      "priceFormatted": "₹5,400 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7fc91c9d6dd88326a8f3f535e537aa1026d60fac.webp",
        "https://img.cofynd.com/images/latest_images_2024/43056402f0efdeff8193d255d19fb9a19c128bc5.webp",
        "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg",
        "https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg",
        "https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg"
      ]
    },
    {
      "id": 5048,
      "name": "WorkNest IRC",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Nayapalli",
      "location": "IRC Village, Nayapalli, Bhubaneswar",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/05510bfd063e88da6435bccb2ef76a7ab8f9e7d0.jpg",
        "https://img.cofynd.com/images/original/20149115d84c919c1f32f24f1c299f652f465f6a.jpg",
        "https://img.cofynd.com/images/original/4a81c027a35d48fa7cde1df66901205091b48308.jpg",
        "https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg",
        "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg"
      ]
    },
    {
      "id": 5049,
      "name": "Focus Point Coworking",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Nayapalli",
      "location": "Nayapalli, Bhubaneswar",
      "price": "₹5,600",
      "period": "/ Month",
      "priceFormatted": "₹5,600 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/ecf2a572bb1015ece065200882c869751d186a31.jpg",
        "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg",
        "https://img.cofynd.com/images/original/d217230f84cdbf6bfe173f951045cb442032ef4c.jpg",
        "https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg",
        "https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg"
      ]
    },
    {
      "id": 5050,
      "name": "Innovate Workspace Nayapalli",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Nayapalli",
      "location": "Nayapalli, Bhubaneswar",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/82bdad1bb48908ef44a53e8e1bc0565a17f9643b.jpg",
        "https://img.cofynd.com/images/original/12d939ec092ac12db73db544fd1d87386bb4743c.jpg",
        "https://img.cofynd.com/images/original/7d06c56f64fcb96e37cf1609ed0c38fb1e3ecce4.jpg",
        "https://img.cofynd.com/images/original/29687d497402ad2a3371c2b568abe7278bc78313.jpg",
        "https://img.cofynd.com/images/original/742ef94645ba7614b922b872fe6fb57f239d5170.jpg"
      ]
    }
  ]
};

// ============================================================================
// Comprehensive Bhubaneshwar Office Cards Aggregator & Lookup Helper
// ============================================================================
export const allBhubaneshwarOfficeCards = [
  ...bhubaneshwarOfficeCards,
  ...moreBhubaneshwarOfficeCards,
  // Include all area-specific extra cards for detail page lookup
  ...(typeof areaExtraOfficeCards !== 'undefined' ? Object.values(areaExtraOfficeCards).flat() : [])
];

/**
 * Find a Bhubaneshwar office card by ID across all listings
 * @param {string|number} id
 * @returns {object|null}
 */
export const getBhubaneshwarOfficeCardById = (id) => findOfficeBySlug(allBhubaneshwarOfficeCards, id, "bhubaneswar");
export const getBhubaneshwarOfficeSlug = (space) => officePath(allBhubaneshwarOfficeCards, space, "bhubaneswar");

export const similarBhubaneshwarOfficeCards = bhubaneshwarOfficeCards.slice(0, 4);

// ============================================================================
// Top Coworking Locations in Bhubaneshwar (Explore by Neighborhood)
// Sourced from verified active coworking spaces in each key Bhubaneshwar hub
// ============================================================================
export const topBhubaneshwarCoworkingLocations = [
  {
    "id": "loc-saheed-nagar",
    "name": "Saheed Nagar",
    "title": "Coworking Space in Saheed Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/88476f5ddd7abbe5a7e3e377e1ae07d91eed69a9.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-patia",
    "name": "Patia",
    "title": "Coworking Space in Patia",
    "image": "https://img.cofynd.com/images/latest_images_2024/0b036df3f5905862372d78559165f6f9090dab90.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-satya-nagar",
    "name": "Satya Nagar",
    "title": "Coworking Space in Satya Nagar",
    "image": "https://img.cofynd.com/images/original/fa63fc66e31d7ef422dc903ce05cf0cea19542f8.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-rasulgarh",
    "name": "Rasulgarh",
    "title": "Coworking Space in Rasulgarh",
    "image": "https://img.cofynd.com/images/original/6d451e81f76913b266892b77c6474c9f9fcbde05.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-nayapalli",
    "name": "Nayapalli",
    "title": "Coworking Space in Nayapalli",
    "image": "https://img.cofynd.com/images/original/6237a8b2582b03922d4560a7895cffae2b03e55f.jpg",
    "ctaText": "Explore Spaces"
  }
];

// Compatibility aliases for bhubaneswar (without 'h')
export const bhubaneswarNeighborhoods = bhubaneshwarNeighborhoods;
export const bhubaneswarOfficeCards = bhubaneshwarOfficeCards;
export const moreBhubaneswarOfficeCards = moreBhubaneshwarOfficeCards;
export const bhubaneswarAreas = bhubaneshwarNeighborhoods;
export const bhubaneswarSpaces = bhubaneshwarOfficeCards;
export const allBhubaneswarOfficeCards = allBhubaneshwarOfficeCards;
export const getBhubaneswarOfficeCardById = getBhubaneshwarOfficeCardById;
export const topBhubaneswarCoworkingLocations = topBhubaneshwarCoworkingLocations;
