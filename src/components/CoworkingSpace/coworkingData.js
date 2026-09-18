const gurgaonAreas = [
  'All',
  'Udyog Vihar',
  'Sector 44',
  'Sohna Road',
  'MG Road Gurugram',
  'Golf Course Road',
  'DLF Cyber City',
  'Unitech Cyber Park',
  'Cyber Hub',
  'Golf Course Extension Road',
  'Cyber City',
  'Sector 32',
  'Huda City Centre'
];

export const cityAreas = {
  Gurgaon: gurgaonAreas,
  Gurugram: gurgaonAreas,
  Pune: [
    'All',
    'Baner',
    'Aundh',
    'Kharadi',
    'Viman Nagar',
    'Hinjewadi',
    'Wakad',
    'Kalyani Nagar',
    'Kothrud',
    'Magarpatta',
    'Hadapsar',
    'Koregaon Park',
    'Balewadi',
    'Shivaji Nagar',
    'Pimple Saudagar',
    'Yerwada',
    'Bavdhan',
    'Senapati Bapat Road'
  ],
  Bangalore: [
    'All',
    'Koramangala',
    'Indiranagar',
    'HSR Layout',
    'Whitefield',
    'Electronic City',
    'MG Road',
    'Outer Ring Road',
    'Bellandur'
  ],
  Mumbai: [
    'All',
    'BKC',
    'Andheri East',
    'Lower Parel',
    'Powai',
    'Malad West',
    'Nariman Point',
    'Thane',
    'Navi Mumbai'
  ],
  Hyderabad: [
    'All',
    'Hitec City',
    'Madhapur',
    'Gachibowli',
    'Kondapur',
    'Jubilee Hills',
    'Banjara Hills',
    'Begumpet'
  ],
  Delhi: [
    'All',
    'Connaught Place',
    'Nehru Place',
    'Saket',
    'Okhla',
    'Aerocity',
    'Lajpat Nagar',
    'Netaji Subhash Place'
  ],
  Noida: [
    'All',
    'Sector 62',
    'Sector 16',
    'Sector 18',
    'Sector 125',
    'Sector 132',
    'Noida Expressway',
    'Sector 63'
  ]
};

export const priceFilterOptions = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹8,000', value: 'under-8k', max: 8000 },
  { label: '₹8,000 - ₹12,000', value: '8k-12k', min: 8000, max: 12000 },
  { label: '₹12,000 - ₹16,000', value: '12k-16k', min: 12000, max: 16000 },
  { label: 'Above ₹16,000', value: 'above-16k', min: 16000 }
];

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const gurgaonSpaces = [
  {
    id: 1,
    name: '91springboard Augusta Point',
    badge: 'Popular',
    rating: 4.2,
    city: 'Gurgaon',
    area: 'Golf Course Road',
    address: 'Golf Course Road, Gurgaon',
    price: 11999,
    priceFormatted: '₹11,999',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 2,
    name: 'Awfis Paras Trinity',
    badge: 'Popular',
    rating: 4.4,
    city: 'Gurgaon',
    area: 'Golf Course Extension Road',
    address: 'Golf Course Extension Road, Sohna Road, Gurgaon',
    price: 7999,
    priceFormatted: '₹7,999',
    images: [
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 3,
    name: 'Wonder Works',
    badge: 'Premium',
    rating: null,
    city: 'Gurgaon',
    area: 'Sector 32',
    address: 'Sector 32, Unitech Cyber Park, Gurgaon.',
    price: 6999,
    priceFormatted: '₹6,999',
    images: [
      'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 4,
    name: 'CoWrks Paras Twin Towers A',
    badge: 'Popular',
    rating: 4.5,
    city: 'Gurgaon',
    area: 'Golf Course Road',
    address: 'Golf Course Road, Gurgaon',
    price: 18999,
    priceFormatted: '₹18,999',
    images: [
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 5,
    name: 'WeWork Forum DLF',
    badge: 'Popular',
    rating: 4.7,
    city: 'Gurgaon',
    area: 'DLF Cyber City',
    address: 'DLF Cyber City, Cyber City, Phase 3, Gurgaon',
    price: 14999,
    priceFormatted: '₹14,999',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 6,
    name: 'Innov8 Cyber Hub',
    badge: 'Premium',
    rating: 4.6,
    city: 'Gurgaon',
    area: 'Cyber Hub',
    address: 'DLF Cyber Hub, Sector 24, Gurgaon',
    price: 13499,
    priceFormatted: '₹13,499',
    images: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 7,
    name: 'AltF Coworking Space',
    badge: 'Popular',
    rating: 4.3,
    city: 'Gurgaon',
    area: 'Udyog Vihar',
    address: 'Phase 4, Udyog Vihar, Gurgaon',
    price: 6499,
    priceFormatted: '₹6,499',
    images: [
      'https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 8,
    name: 'InstaOffice Institutional Area',
    badge: 'Premium',
    rating: 4.5,
    city: 'Gurgaon',
    area: 'Sector 44',
    address: 'Sector 44, MG Road Gurugram, Gurgaon',
    price: 8999,
    priceFormatted: '₹8,999',
    images: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?auto=format&fit=crop&w=800&q=80'
    ]
  }
];

export const puneSpaces = [
  {
    id: 101,
    name: 'Awfis The Kode',
    badge: 'Popular',
    rating: 4.5,
    city: 'Pune',
    area: 'Baner',
    address: 'Baner-Pashan Link Road, Baner, Pune',
    price: 10999,
    priceFormatted: '₹10,999',
    images: [
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/awfis-the-kode/dedicated/z9ft2j.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/awfis-the-kode-2/meeting-room/plans/8-seater/wv8reb.jpg',
      'https://res.cloudinary.com/myhq/image/upload/q_auto/w_1200/f_auto/workspaces/awfis-the-kode-2/managed-office/8jnpsw.jpg',
      'https://img.cofynd.com/images/latest_images_2024/df3760d2440e4a576e8ef511ea670410b580d52b.webp',
      'https://img.cofynd.com/images/latest_images_2024/852410bf19a78735900b092fe6e803baf92482cc.webp'
    ]
  },
  {
    id: 102,
    name: 'WeWork Futura',
    badge: 'Popular',
    rating: 4.8,
    city: 'Pune',
    area: 'Hadapsar',
    address: 'Magarpatta Road, Hadapsar, Pune',
    price: 14000,
    priceFormatted: '₹14,000',
    images: [
      'https://coworker.imgix.net/photos/india/pune/wework-futura/main.jpg',
      'https://coworker.imgix.net/photos/india/pune/wework-futura/1.jpg',
      'https://coworker.imgix.net/photos/india/pune/wework-futura/2.jpg',
      'https://coworker.imgix.net/photos/india/pune/wework-futura/3.jpg',
      'https://img.cofynd.com/images/original/15e7d560c947c6bc900d3fb1003bfe9c77e398d2.jpg'
    ]
  },
  {
    id: 103,
    name: '91springboard Sadanand Business Centre',
    badge: 'Popular',
    rating: 4.6,
    city: 'Pune',
    area: 'Baner',
    address: 'Near Balewadi Stadium, Baner, Pune',
    price: 8500,
    priceFormatted: '₹8,500',
    images: [
      'https://coworker.imgix.net/photos/india/pune/91springboard/main.jpg',
      'https://coworker.imgix.net/photos/india/pune/91springboard/1.jpg',
      'https://coworker.imgix.net/photos/india/pune/91springboard/2.jpg',
      'https://coworker.imgix.net/photos/india/pune/91springboard/3.jpg',
      'https://coworker.imgix.net/photos/india/pune/91springboard/4.jpg',
      'https://img.cofynd.com/images/latest_images_2024/70c576585e2c824605936ad8e7673e9c39184ba2.webp'
    ]
  },
  {
    id: 104,
    name: 'Anchor Coworking',
    badge: 'Premium',
    rating: 4.4,
    city: 'Pune',
    area: 'Baner',
    address: 'Pan Card Club Road, Shivneri Colony, Baner, Pune',
    price: 6500,
    priceFormatted: '₹6,500',
    images: [
      'https://coworker.imgix.net/photos/india/pune/anchor-coworking/main.jpg',
      'https://coworker.imgix.net/photos/india/pune/anchor-coworking/1.jpg',
      'https://coworker.imgix.net/photos/india/pune/anchor-coworking/2.jpg',
      'https://coworker.imgix.net/photos/india/pune/anchor-coworking/3.jpg',
      'https://coworker.imgix.net/photos/india/pune/anchor-coworking/4.jpg',
      'https://img.cofynd.com/images/original/14dc3097883d00ded75870b6f23b60d047248ea3.jpg'
    ]
  },
  {
    id: 105,
    name: 'Awfis Nyati Empress',
    badge: 'Popular',
    rating: 4.5,
    city: 'Pune',
    area: 'Viman Nagar',
    address: 'Opp. Inorbit Mall, Viman Nagar, Pune',
    price: 10999,
    priceFormatted: '₹10,999',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/de45e81c7af7c7382a52a27d9df0ff440a38b8b3.webp',
      'https://img.cofynd.com/images/latest_images_2024/5017b03422bb879b6b1eabeb14305259c4a9b4fe.webp',
      'https://img.cofynd.com/images/latest_images_2024/1952b47f70dfb09a734f9be3b4df383f5457e5af.webp',
      'https://img.cofynd.com/images/latest_images_2024/8f6f26c54ebe3f202228b1e3a6ff24a7fb30d9c2.webp',
      'https://img.cofynd.com/images/latest_images_2024/4daefaf5892734f302c6ea775be2e7f557c3eb3e.webp'
    ]
  },
  {
    id: 106,
    name: 'Smartworks M-Agile',
    badge: 'Premium',
    rating: 4.7,
    city: 'Pune',
    area: 'Baner',
    address: 'Pan Card Club Road, Baner, Pune',
    price: 12500,
    priceFormatted: '₹12,500',
    images: [
      'https://files.smartworksoffice.com/uploads/Pune_Agile_Thumbnail_452c14983e.webp',
      'https://files.smartworksoffice.com/uploads/1_a39a6480ee.webp',
      'https://files.smartworksoffice.com/uploads/2_7f1f1d30c5.webp',
      'https://files.smartworksoffice.com/uploads/3_3b36ba28cb.webp',
      'https://files.smartworksoffice.com/uploads/4_a6969883dc.webp',
      'https://files.smartworksoffice.com/uploads/5_4c3bbe487b.webp',
      'https://files.smartworksoffice.com/uploads/6_eacabf18c7.webp'
    ]
  },
  {
    id: 107,
    name: 'IndiQube Park Plaza',
    badge: 'Popular',
    rating: 4.3,
    city: 'Pune',
    area: 'Kharadi',
    address: 'Near EON Free Zone, Kharadi, Pune',
    price: 9500,
    priceFormatted: '₹9,500',
    images: [
      'https://img.cofynd.com/images/latest_images_2024/f9281528475c492bf1ed563de855b052d4bd7209.webp',
      'https://img.cofynd.com/images/original/66e97384b3e8fff86453c74021b59ee823bed78a.jpg',
      'https://img.cofynd.com/images/latest_images_2024/31fd493b5fab163f9a2d8bddeedf1a1e17a1d885.webp',
      'https://img.cofynd.com/images/latest_images_2024/448660eb3e7510de6808dfa2128570e3bc29b381.webp',
      'https://img.cofynd.com/images/latest_images_2024/bbfe22c34e2dfa71e940a05190c8e8ded20db2e6.webp'
    ]
  },
  {
    id: 108,
    name: 'Bootstart Coworking',
    badge: 'Popular',
    rating: 4.4,
    city: 'Pune',
    area: 'Kalyani Nagar',
    address: 'Central Avenue, Kalyani Nagar, Pune',
    price: 7500,
    priceFormatted: '₹7,500',
    images: [
      'https://coworker.imgix.net/photos/india/pune/bootstart-coworking/main.jpg',
      'https://coworker.imgix.net/photos/india/pune/bootstart-coworking/1.jpg',
      'https://coworker.imgix.net/photos/india/pune/bootstart-coworking/2.jpg',
      'https://coworker.imgix.net/photos/india/pune/bootstart-coworking/3.jpg',
      'https://coworker.imgix.net/photos/india/pune/bootstart-coworking/4.jpg',
      'https://img.cofynd.com/images/original/6cb4b48a4a172cf6d5a09788fd7d328da98c7a8b.jpg'
    ]
  }
];

export const coworkingSpaces = gurgaonSpaces;

export const getCoworkingSpacesForCity = (cityName) => {
  if (!cityName) return gurgaonSpaces;
  const normalized = cityName.toLowerCase();
  if (normalized === 'gurgaon' || normalized === 'gurugram') {
    return gurgaonSpaces;
  }
  if (normalized === 'pune') {
    return puneSpaces;
  }

  // Get areas for this specific city
  const areasList = (cityAreas[cityName] || cityAreas['Pune']).filter((a) => a !== 'All');

  const cityTemplates = [
    { name: 'WeWork Prime Hub', badge: 'Popular', rating: 4.7, price: 12999, priceFormatted: '₹12,999' },
    { name: '91springboard Hub', badge: 'Popular', rating: 4.3, price: 8499, priceFormatted: '₹8,499' },
    { name: 'Awfis Space Solutions', badge: 'Popular', rating: 4.5, price: 7499, priceFormatted: '₹7,499' },
    { name: 'Smartworks Business Park', badge: 'Premium', rating: 4.8, price: 15999, priceFormatted: '₹15,999' },
    { name: 'IndiQube Innovation Campus', badge: 'Popular', rating: 4.4, price: 9999, priceFormatted: '₹9,999' },
    { name: 'Innov8 Coworking Hub', badge: 'Premium', rating: 4.6, price: 11499, priceFormatted: '₹11,499' },
    { name: 'The Hive Workspace', badge: 'Popular', rating: 4.2, price: 6999, priceFormatted: '₹6,999' },
    { name: 'DevX Executive Center', badge: 'Premium', rating: 4.5, price: 13999, priceFormatted: '₹13,999' }
  ];

  return cityTemplates.map((template, idx) => {
    const area = areasList[idx % areasList.length];
    const sourceCard = gurgaonSpaces[idx % gurgaonSpaces.length];
    return {
      id: idx + 1,
      name: `${template.name} - ${area}`,
      badge: template.badge,
      rating: template.rating,
      city: cityName,
      area: area,
      address: `${area}, ${cityName}`,
      price: template.price,
      priceFormatted: template.priceFormatted,
      images: sourceCard.images
    };
  });
};
