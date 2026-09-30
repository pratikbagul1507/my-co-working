import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Delhi Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * Sourced from verified active coworking listings in Delhi.
 */

export const dehliNeighborhoods = [
  "Connaught Place",
  "Malviya Nagar",
  "Aerocity",
  "Mohan Cooperative",
  "Saket",
  "Okhla",
  "Netaji Subhash Place",
  "Nehru Place",
  "Janakpuri",
  "South Delhi",
  "Dwarka Delhi",
  "Rohini",
  "Pitampura",
  "Rajouri Garden",
  "Vasant Kunj",
  "Laxmi Nagar",
  "Hauz Khas",
  "Green Park",
  "Pusa Road",
  "Jasola",
  "Karol Bagh",
  "West Delhi",
  "Defence Colony",
  "Patel Nagar",
  "Lajpat Nagar",
  "Uttam Nagar"
];
export const delhiNeighborhoods = dehliNeighborhoods;

export const dehliOfficeCards = [
  {
    "id": 1,
    "name": "Innov8 Connaught Place",
    "badge": "Premium",
    "rating": 4.4,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/926ee00e583529d7266dfd132b163168c0aedfb4.webp",
      "https://img.cofynd.com/images/latest_images_2024/78640c42b3e184c3da374223eebcd80102147bfc.webp",
      "https://img.cofynd.com/images/latest_images_2024/62a972edc7818f8a77410b11977b6514c200a162.webp",
      "https://img.cofynd.com/images/latest_images_2024/20e6c5317a784e7df1760718bb9d8e81eabca293.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab576488b8b093a77109f96db0114c14eac6fd5f.webp"
    ]
  },
  {
    "id": 2,
    "name": "Brain on Rent Malviya Nagar",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Malviya Nagar",
    "location": "Malviya Nagar, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8bdde2aed9f9a98237f93dde3d9e8e42751d3b07.webp",
      "https://img.cofynd.com/images/latest_images_2024/959a552921e1db7e6468e4683d4f0f47c71d57b0.webp",
      "https://img.cofynd.com/images/latest_images_2024/19065903dd7ec1a7fcc4bcf217e0fb38266266bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/e55c7efa5ce2a3efa1d88ab1bf0a443d550b4b07.webp",
      "https://img.cofynd.com/images/latest_images_2024/56828e01a10a469e9caeb80bab77d030112f5bc0.webp"
    ]
  },
  {
    "id": 3,
    "name": "Innov8 Aerocity",
    "badge": "Premium",
    "rating": 5,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹22,999",
    "period": "/ Month",
    "priceFormatted": "₹22,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/225fa372fcf6fecc9407ca9c51b3e86ee5f630ae.png",
      "https://img.cofynd.com/images/latest_images_2024/08397a9de5c4e0179f7bf8faeeda85111d70fc88.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3efb3c5a4792f90ffc04bef1df04df6d5708ab8.webp",
      "https://img.cofynd.com/images/latest_images_2024/502c1c54e34ece50181bdeae8cfa4e5e6a46381a.webp",
      "https://img.cofynd.com/images/latest_images_2024/02a6b73994ab73342352da1e4febc3c63da1f288.webp"
    ]
  },
  {
    "id": 4,
    "name": "91Springboard Mohan Cooperative",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹9,499",
    "period": "/ Month",
    "priceFormatted": "₹9,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e7105e6cb57568e3f926a7910ab7a455db9a0df5.webp",
      "https://img.cofynd.com/images/latest_images_2024/fb8f9a274d7c95256b749fa63ad766517cbeab2d.webp",
      "https://img.cofynd.com/images/latest_images_2024/851b6c204c5f0c91c03354dc78b5b37ba1be630d.webp",
      "https://img.cofynd.com/images/latest_images_2024/a04aa3c7f8154daf914be0447c9cd90dc03e6a85.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d6e45cf34257d65402406dce7c3e9f8b1c43bb8.webp"
    ]
  },
  {
    "id": 5,
    "name": "Innov8 Saket",
    "badge": "Premium",
    "rating": 4.9,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/27f5e88180e12374e142f15c12f484eadad9465b.jpg",
      "https://img.cofynd.com/images/latest_images_2024/d1fde080420d3616ba82ee7758538e3f79f5ffa5.webp",
      "https://img.cofynd.com/images/original/f367c711906725085d5f923064725ea2d9976de8.jpg",
      "https://img.cofynd.com/images/original/5b1d19348e440a4fe0b0f7566cf8509d4efc2bca.jpg",
      "https://img.cofynd.com/images/original/b4e185468b2ad2276a995a8e9436f75e5565cd17.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Innov8 Okhla",
    "badge": "Premium",
    "rating": 4.9,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5f74935c4b0a817093407bc53e07940acf739c19.webp",
      "https://img.cofynd.com/images/latest_images_2024/0706d4d28b0a1b2bcca166593b72b32c0c27d262.webp",
      "https://img.cofynd.com/images/latest_images_2024/ba15c781087be78067819828a2e67e6ed1cebc99.webp",
      "https://img.cofynd.com/images/latest_images_2024/431b097dd6b50aadd15da5ac3e04095b68c17ccf.webp",
      "https://img.cofynd.com/images/latest_images_2024/e8c664be23bbe5fd7f06fe7ed7a0da1663f6c353.webp"
    ]
  },
  {
    "id": 7,
    "name": "Co-Offiz Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c32195a70fdb5b30b15f525155f85a7cd0202f63.webp",
      "https://img.cofynd.com/images/latest_images_2024/877b9d2b6e6731111e3cc29652059214e65ae422.webp",
      "https://img.cofynd.com/images/latest_images_2024/0e1154342d1f351fe4d23c3082f74fae0d0cae15.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ffb6eec6336e9974844b2469374293c957863ba.webp",
      "https://img.cofynd.com/images/original/6c4110298c6623fcd041cee0ca511fe104f552de.jpg"
    ]
  },
  {
    "id": 8,
    "name": "91Springboard Nehru Place",
    "badge": "Premium",
    "rating": 4.4,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1d8cbf76354eb6059d2c6dbc63ad34cbb48d67ab.webp",
      "https://img.cofynd.com/images/latest_images_2024/5eb9bd57346c3b7c3f7a4a9d8208c98d5b3bb0bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/b54eff756b078debd85ffd2bb177ee6cbc955d61.webp",
      "https://img.cofynd.com/images/original/43a625125c597b5ec5b3cf2383277c4740b30638.jpg",
      "https://img.cofynd.com/images/latest_images_2024/844dcdf6c7013eaa5870f3ef95a09db19a0ccf15.webp"
    ]
  }
];
export const delhiOfficeCards = dehliOfficeCards;

export const officeSolutions = [
  {
    "id": 1,
    "title": "Private Office",
    "description": "Fully furnished Private offices for you and your growing team.",
    "image": "https://img.cofynd.com/images/latest_images_2024/9b8e91f39b9010e9589f975badfbb23e37e84d3d.webp",
    "ctaText": "Enquire Now"
  },
  {
    "id": 2,
    "title": "Managed Office",
    "description": "Customised fully furnished office managed by professionals.",
    "image": "https://img.cofynd.com/images/latest_images_2024/a905fe92936f861425a0af8e7c2048fc42d58448.webp",
    "ctaText": "Enquire Now"
  },
  {
    "id": 3,
    "title": "Enterprise Solution",
    "description": "Fully equipped offices for larger teams with flexibility to scale & customise",
    "image": "https://img.cofynd.com/images/latest_images_2024/aa2bd09cf90ce784f797aa6412fa47a408227ce0.webp",
    "ctaText": "Enquire Now"
  }
];

export const moreDehliOfficeCards = [
  {
    "id": 9,
    "name": "Spring House SHDL001 Janakpuri",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/78ebc303fcaac70f525f8167c32a21f74341487f.webp",
      "https://img.cofynd.com/images/latest_images_2024/91724a81db356a2b6046d8fd3378afba7bfd1167.webp",
      "https://img.cofynd.com/images/latest_images_2024/881f49280eec4c677ca6c2aa361fbfee823ff86d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d613d229aa9117bd9d218ebf9b9d3947b3414027.webp",
      "https://img.cofynd.com/images/latest_images_2024/a360db675fcf732815b80a12b019f5fdf94c8f1b.webp"
    ]
  },
  {
    "id": 10,
    "name": "IKSANA Workspaces by Pannal South Delhi",
    "badge": "Popular",
    "rating": 4.8,
    "area": "South Delhi",
    "location": "South Delhi, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5d7a0f9dae1961bf3a1c2374e3af293703a694d4.webp",
      "https://img.cofynd.com/images/original/fd23bbf04092895a850239cfeebec3c9852c511e.jpg",
      "https://img.cofynd.com/images/latest_images_2024/ba18b71c6b765682ebfb0ce0c5312c8020f37aec.webp",
      "https://img.cofynd.com/images/latest_images_2024/2eb457d1cbff943a09fff2cf4d372ab73be662a7.webp",
      "https://img.cofynd.com/images/latest_images_2024/525b1d29c4342ea32324e590fade080a57a97718.webp"
    ]
  },
  {
    "id": 11,
    "name": "Workingdom Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/73f308a5127f5c96e5ae46c3454b8d5240cfdfe2.jpg",
      "https://img.cofynd.com/images/original/79d88dc6f56a0b39e0d7eb13a0400dbce39a23ac.jpg",
      "https://img.cofynd.com/images/original/2eb36976c6b9ccfeb87d3696c38016d99c2133a6.jpg",
      "https://img.cofynd.com/images/latest_images_2024/e4666a94549c62edb763df3612c190c1d81932e7.webp",
      "https://img.cofynd.com/images/original/8df97965d75029659a16676a08059f97a5d4073c.jpg"
    ]
  },
  {
    "id": 12,
    "name": "Team Station Rohini",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Rohini",
    "location": "Rohini, Delhi",
    "price": "₹4,999",
    "period": "/ Month",
    "priceFormatted": "₹4,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/94260310093128e8d03598da52d5067227ab36ec.jpg",
      "https://img.cofynd.com/images/original/8f412e247f0885f880d39c5ff2a7e0e7a0dad330.jpg",
      "https://img.cofynd.com/images/latest_images_2024/208b6f01c86f16cf7b9aff063623c3afc23b26dd.webp",
      "https://img.cofynd.com/images/latest_images_2024/5bc85ad7ee7020e192ec2c7c9ec74986973dcea7.webp",
      "https://img.cofynd.com/images/original/7e82693e3ac7e64f0fa65d68732179b5d22c5934.jpg"
    ]
  },
  {
    "id": 13,
    "name": "Corporate Blu A Rajouri Garden",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Rajouri Garden",
    "location": "Rajouri Garden, Delhi",
    "price": "₹4,499",
    "period": "/ Month",
    "priceFormatted": "₹4,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/9a151acc6571b19ba35d3e6dd1de7c1a6f76c6f3.webp",
      "https://img.cofynd.com/images/latest_images_2024/bba443499a7924fbc70abba032c7e5b939881041.webp",
      "https://img.cofynd.com/images/latest_images_2024/8ac2150f5cd5912a7844233a006ae6a6a359b146.webp",
      "https://img.cofynd.com/images/latest_images_2024/3c3eca7ba71323e8d83a6104855a41edd9384f46.webp"
    ]
  },
  {
    "id": 14,
    "name": "Peer Share Vasant Kunj",
    "badge": "Popular",
    "rating": 4.2,
    "area": "Vasant Kunj",
    "location": "Vasant Kunj, Delhi",
    "price": "₹11,999",
    "period": "/ Month",
    "priceFormatted": "₹11,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a64b2fcf1a59510327c7fb51dc13e28cc8e72eef.webp",
      "https://img.cofynd.com/images/latest_images_2024/604913caf24e709e99bc434f45b774a32e2946ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/3ae5211926153e43ddc4e1b9a821dc68af2e990c.webp",
      "https://img.cofynd.com/images/latest_images_2024/406707316f95b78fc4f592e765d9419553cb74b2.webp",
      "https://img.cofynd.com/images/latest_images_2024/b2c78606d578872d8fa1e6809070b69bbc61ed81.webp"
    ]
  },
  {
    "id": 15,
    "name": "Office On Laxmi Nagar",
    "badge": "Special Offer",
    "rating": 4.5,
    "area": "Laxmi Nagar",
    "location": "Laxmi Nagar, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/dbd987d76ac760bf53c33ea2b6e66cd1e478fc0c.webp",
      "https://img.cofynd.com/images/latest_images_2024/d10dbd5c632ed88dd4791ffb665f7cb1f4c89e01.webp",
      "https://img.cofynd.com/images/latest_images_2024/c0e672cc78ede9baffcfe6df5c054574de358828.webp",
      "https://img.cofynd.com/images/latest_images_2024/b355d981e2df15be006835f7b285ac45cf364134.webp",
      "https://img.cofynd.com/images/latest_images_2024/fac90594f0ad3e99d48818602c703859d5c4ec12.webp"
    ]
  },
  {
    "id": 16,
    "name": "Delhi Co. Hauz Khas",
    "badge": "Special Offer",
    "rating": 4.1,
    "area": "Hauz Khas",
    "location": "Hauz Khas, Delhi",
    "price": "₹4,999",
    "period": "/ Month",
    "priceFormatted": "₹4,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/72de1e68fc8ef843dd4b27abdac428781539de42.webp",
      "https://img.cofynd.com/images/original/c527e7be02ceb5ec517c0c6d14c2fbb26d2765e0.jpg",
      "https://img.cofynd.com/images/original/6a40de21eb2f8d6d01a4ea835e5315ce2813a2ce.jpg",
      "https://img.cofynd.com/images/latest_images_2024/949ac8477264a52fe110e6f9015b485bd220dfe7.webp",
      "https://img.cofynd.com/images/latest_images_2024/3037c455fe3d1052a4134b59a21bbbdd24bcf509.webp"
    ]
  }
];
export const moreDelhiOfficeCards = moreDehliOfficeCards;

export const perfectWorkspaceBanner = {
  "title": "Discover your perfect workspace with Mycoworking",
  "subtitle": "Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India",
  "ctaText": "Enquire Now",
  "bgImage": "https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp"
};

export const finalDehliOfficeCards = [
  {
    "id": 17,
    "name": "DesqWorx Green Park",
    "badge": "Special Offer",
    "rating": 4.6,
    "area": "Green Park",
    "location": "Green Park, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/77f320c38769c957d26c552847ae44c7a3e8a9d7.jpg",
      "https://img.cofynd.com/images/latest_images_2024/840ccc47e92f08c14cbb9428ece3290f46ad3033.webp",
      "https://img.cofynd.com/images/latest_images_2024/e94a83f9e298a49794d90a46c8995fd82a73e7d3.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4e150c191480ce4d9602457f46e0442bc102605.webp",
      "https://img.cofynd.com/images/latest_images_2024/fba1af6c924c6f2233fac26aa791f6620b163951.webp"
    ]
  },
  {
    "id": 18,
    "name": "Urban Cabin Cowork Pusa Road",
    "badge": "Popular",
    "rating": 5,
    "area": "Pusa Road",
    "location": "Pusa Road, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b0219ec616865c4508117eaf608db547f38ad8a2.webp",
      "https://img.cofynd.com/images/latest_images_2024/583932c026163b34200dfd2ab6286bd5ee021905.webp",
      "https://img.cofynd.com/images/latest_images_2024/c8b9ca6e1a6681a91f89c63baa0adb7a78e97e0f.webp",
      "https://img.cofynd.com/images/latest_images_2024/4da5bd3f66aa241dfc1ad481e1b1ac8568f9aee6.webp",
      "https://img.cofynd.com/images/latest_images_2024/dfaa4a87a2ff88bf5de97dc2ad089a2d56e9a93a.webp"
    ]
  },
  {
    "id": 19,
    "name": "The Circle.Work Jasola",
    "badge": "Popular",
    "rating": 4,
    "area": "Jasola",
    "location": "Jasola, Delhi",
    "price": "₹17,999",
    "period": "/ Month",
    "priceFormatted": "₹17,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/643ed1822c115bc4c221176d5b7a3de47cc9bcea.webp",
      "https://img.cofynd.com/images/original/48532a8edf6919588e64fa4dc8343518d5d2ce76.jpg",
      "https://img.cofynd.com/images/original/287d33709d24bccf1283a8a48434e8b548f6a060.jpg",
      "https://img.cofynd.com/images/latest_images_2024/7b2ef2ae8f5ad1681c8053f653cafcd7ffff15a6.webp",
      "https://img.cofynd.com/images/original/a1697c2e3c57ef70227da4ecb1f2a56159502ded.jpg"
    ]
  },
  {
    "id": 20,
    "name": "Solace Coworks Karol Bagh",
    "badge": "Popular",
    "rating": 5,
    "area": "Karol Bagh",
    "location": "Karol Bagh, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1ae7a569238b42d6a66e4017ca874d2e38a30d3d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d0dd1efebbfa02a0af6688260aacf2c6a9a7f599.webp",
      "https://img.cofynd.com/images/latest_images_2024/993906b759466cecbf7661fea4fcf007c5d27dd0.webp",
      "https://img.cofynd.com/images/latest_images_2024/27af143d7caf57f091a7bc1a67dfdd4336626051.webp",
      "https://img.cofynd.com/images/latest_images_2024/598b83d6ffff784690712b9361ce041a5633fd96.webp"
    ]
  },
  {
    "id": 21,
    "name": "Hub And Oak Defence Colony",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Defence Colony",
    "location": "Defence Colony, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3176aab3d53d8a3220cff87025c7c502cb79df06.webp",
      "https://img.cofynd.com/images/latest_images_2024/b2e4b2a2b6377682da310bc7ab0e688d92871fec.webp",
      "https://img.cofynd.com/images/latest_images_2024/0e60ec550d5ca1821f10140a0cda5ce0589d263b.webp",
      "https://img.cofynd.com/images/latest_images_2024/68005cb9a8d81793123bf9f375db0a5de9abb62d.webp",
      "https://img.cofynd.com/images/latest_images_2024/054d79a58d265452716e5ad5c95957234f08d26f.webp"
    ]
  },
  {
    "id": 22,
    "name": "Ojas Co-working Patel Nagar",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Patel Nagar",
    "location": "Patel Nagar, Delhi",
    "price": "₹4,499",
    "period": "/ Month",
    "priceFormatted": "₹4,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/699d18f26439843aff1e4e2044c83ddb0bda50c3.webp",
      "https://img.cofynd.com/images/latest_images_2024/a7072b019a6751e0454f5d161f5dd19a96f5fcea.webp",
      "https://img.cofynd.com/images/latest_images_2024/06934d7d7c00ce1fa7abe5afb417bc49a6d356ae.webp",
      "https://img.cofynd.com/images/latest_images_2024/1aa46a0814bb43bd8cfc558cca3236faa8cdc63c.webp",
      "https://img.cofynd.com/images/latest_images_2024/c14dc2e9264f55b9bc5097f89b2db1c5ceea10d5.webp"
    ]
  },
  {
    "id": 23,
    "name": "9 to 5 Cowork Lajpat Nagar",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Lajpat Nagar",
    "location": "Lajpat Nagar, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/320a6823037b9d00bfe1842adf81ef6f79874445.webp",
      "https://img.cofynd.com/images/latest_images_2024/e93c151645e19962dcee8bc3d21e09ec502bc5cb.webp",
      "https://img.cofynd.com/images/latest_images_2024/a57cc3f92a176f2342cb6a52f128ac3475697950.webp",
      "https://img.cofynd.com/images/latest_images_2024/61fe55057df1ea5c52227462d3cbbe22346f93d1.webp",
      "https://img.cofynd.com/images/latest_images_2024/2368a18a715538ff6f7bb6dedd31729240b2afc1.webp"
    ]
  },
  {
    "id": 24,
    "name": "Udyogaa Uttam Nagar",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Uttam Nagar",
    "location": "Uttam Nagar, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/94b703a34b1a3aa3638237c1108b3166cc6345c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/49877c484787813ee17643782fa9ba1d01280142.webp",
      "https://img.cofynd.com/images/latest_images_2024/cb13092bd34133a6ce8d02f41ac336bf14dc2bc4.webp",
      "https://img.cofynd.com/images/latest_images_2024/e853397fc74231ab6c018184ea60fe75b92698fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/2aa0a8a732fd9c88f2c92202a0b830eb692ae96c.webp"
    ]
  }
];
export const finalDelhiOfficeCards = finalDehliOfficeCards;

export const featuredDehliOfficeCards = [
  {
    "id": 25,
    "name": "Nukleus R Connaught Place",
    "badge": "Premium",
    "rating": 4.8,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹13,999",
    "period": "/ Month",
    "priceFormatted": "₹13,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/fe7b29d1346e0ee56ebd08e692aa10711634411c.jpg",
      "https://img.cofynd.com/images/latest_images_2024/195180e283deeba718cf471878b23a00b852fb62.webp",
      "https://img.cofynd.com/images/original/5e273c346a4e8882f52808f4d52a08687740d513.jpg",
      "https://img.cofynd.com/images/original/b78e077eae4ade3e19c6e67d3ffcba530fcfed76.jpg",
      "https://img.cofynd.com/images/latest_images_2024/cbeacce580f4a7105f6d0c7650f534b7a5b47327.webp"
    ]
  },
  {
    "id": 26,
    "name": "ZO Accelerator Space Malviya Nagar",
    "badge": "Premium",
    "rating": 4.8,
    "area": "Malviya Nagar",
    "location": "Malviya Nagar, Delhi",
    "price": "₹26,999",
    "period": "/ Month",
    "priceFormatted": "₹26,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b9fd9e95b2ba3fad7daa975a1a117fe431d2eccf.webp",
      "https://img.cofynd.com/images/latest_images_2024/ff5953da805dfcfd72b3d47f18a527eb6d946ef2.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1032bf42254ab9ba6c43faebac8e3f083631e0e.webp",
      "https://img.cofynd.com/images/latest_images_2024/8cec87af27b7624d3d84fde1bcdc1682bc0cb658.webp",
      "https://img.cofynd.com/images/latest_images_2024/a22aa36effc8c0f25d1d1ce35935f0bcf96f83d8.webp"
    ]
  },
  {
    "id": 27,
    "name": "Cowrks Aerocity",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹24,999",
    "period": "/ Month",
    "priceFormatted": "₹24,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/1a7f4c7aff2f85e2e05fa59f296c28724f658f89.jpg",
      "https://img.cofynd.com/images/original/649e26bc93b5873f979507d9d094c2e2ef2135c1.jpg",
      "https://img.cofynd.com/images/latest_images_2024/a45ba13a558e2bd4e7d88fd72c9413ebe7caa9c3.webp",
      "https://img.cofynd.com/images/original/3276f68ed207fa1c81a40f7709c3c0e3f29558ae.jpg",
      "https://img.cofynd.com/images/original/0c6f16043d233b60a0773f2e2fe070cf6afa2d03.jpg"
    ]
  },
  {
    "id": 28,
    "name": "AltF Mohan Cooperative",
    "badge": "Popular",
    "rating": 4.2,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e58dd1419bb46d2b289917b8706572e42a87ed2b.webp",
      "https://img.cofynd.com/images/latest_images_2024/a9a7736ce455ca89adc9658a336c58dd5236cfac.webp",
      "https://img.cofynd.com/images/latest_images_2024/ddc33809f0c3fbb5ff3fd72265d7f2bf9e0127ed.webp",
      "https://img.cofynd.com/images/latest_images_2024/e8ce523c3b5dbd5493a0d2ff6839a2370c53ce89.webp",
      "https://img.cofynd.com/images/latest_images_2024/15aa6b54ce0b30bd0433905e3dbf32175815fc6c.webp"
    ]
  },
  {
    "id": 29,
    "name": "Nukleus Saket",
    "badge": "Premium",
    "rating": 4.9,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/35e71807fc70747e462901ef89e0554c28ade0b5.webp",
      "https://img.cofynd.com/images/original/4379a9318c87cbab86b09b89dc393447be5cac23.jpg",
      "https://img.cofynd.com/images/latest_images_2024/b9da28c30fa72483039b10b1c8f0114eddf8e1d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/8d003d78149bfaba07478bbf43da10a7c5e07037.webp",
      "https://img.cofynd.com/images/latest_images_2024/6d1e7fce37362f1f16b81e0b38ad45b544223171.webp"
    ]
  },
  {
    "id": 30,
    "name": "AltF Okhla",
    "badge": "Premium",
    "rating": 4.9,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/16a8d45bab4842b189bbf8e0023d5bd1aac17f8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/8e384da52625e62969a6d43a2399545a6d7e5593.webp",
      "https://img.cofynd.com/images/latest_images_2024/8e56f0f71380fb14ef1abff2b85bbe8706096aa2.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6923d673b1c5fff1c26875ae4b412f1c9039a1f.webp",
      "https://img.cofynd.com/images/latest_images_2024/48d323d90e25a59421cba1c06db443826bb20418.webp"
    ]
  },
  {
    "id": 31,
    "name": "Fume Coworking 2.0 Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b49d173dec494e646df8c1112fa6c6b7a1a95bea.webp",
      "https://img.cofynd.com/images/latest_images_2024/033772ad3f54feaa794f185f7d215d622a3eccc2.webp",
      "https://img.cofynd.com/images/latest_images_2024/bca313b91fa9a6a8638d94b940769376d5c9286d.webp",
      "https://img.cofynd.com/images/latest_images_2024/70861541c1f43e16ba9d5ecaaa0dfa1c45ef169c.webp",
      "https://img.cofynd.com/images/latest_images_2024/818c196cb2b92da65cb6a6eec6a081fee40ca620.webp"
    ]
  },
  {
    "id": 32,
    "name": "Wolk B Nehru Place",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,499",
    "period": "/ Month",
    "priceFormatted": "₹12,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/59df8b87b0db352cdb0877af74e3f30c433b7b18.jpg",
      "https://img.cofynd.com/images/latest_images_2024/8294ad2b08e86b29f10d2ed3d84064883760273c.webp",
      "https://img.cofynd.com/images/original/5cb4cabc285c0a8c3aa77eba707d279d100f9f6f.jpg",
      "https://img.cofynd.com/images/original/588a49113e9089ae4f140d859ec69d0389ee8ea2.jpg",
      "https://img.cofynd.com/images/original/3c4d23470029306fa4dba98c5c895f6daa1212f9.jpg"
    ]
  }
];
export const featuredDelhiOfficeCards = featuredDehliOfficeCards;

export const customizedOfficeBanner = {
  "title": "Customized office solutions for your team",
  "features": [
    {
      "id": 1,
      "text": "Customized Office Spaces"
    },
    {
      "id": 2,
      "text": "Prime Locations"
    },
    {
      "id": 3,
      "text": "Free Guided Tours"
    },
    {
      "id": 4,
      "text": "Perfect for 50+ Team Size"
    }
  ],
  "ctaText": "Enquire Now",
  "bgImage": "https://img.cofynd.com/images/latest_images_2024/83bb813890447d5d3d6bda55c7133a5fd48cdbc5.webp"
};

export const stillNotFindingBanner = {
  "title": "Still not able to find coworking space?",
  "subtitle": "Our space experts will help you find the perfect coworking space in prime locations",
  "ctaText": "Enquire Now",
  "bgImage": "https://img.cofynd.com/images/latest_images_2024/406c83ccb0729b57d9beb973b7e4088ab7640ef3.webp"
};

export const paginationData = {
  "totalPages": 8,
  "initialPage": 1
};

export const pageTwoDehliOfficeCards = [
  {
    "id": 33,
    "name": "Co-Offiz Janakpuri",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6ef79fab2c1fe2d5cd4b02c49dc23807248d2ac2.webp",
      "https://img.cofynd.com/images/latest_images_2024/330f0d77523b7dd63fd518ba8f353c96596a1e8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/a5b9eec607c65f8419b64ebdf6a8839160e31011.webp",
      "https://img.cofynd.com/images/latest_images_2024/5fd330a87f71e814a9b7f30cc60ac45b19c80d0e.webp",
      "https://img.cofynd.com/images/original/461f6c54542eacbd61ce146ab1b03a01f1f77413.jpg"
    ]
  },
  {
    "id": 34,
    "name": "Zing Space 381 South Delhi",
    "badge": "Popular",
    "rating": 4.9,
    "area": "South Delhi",
    "location": "South Delhi, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/dc647650e3e04aa63f4184066d081f38e7aa0ee0.webp",
      "https://img.cofynd.com/images/latest_images_2024/9a1d4dfee1171891c77aebb80a568895c63fa9ee.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4885f15f610e6a2d71e6847c3952ceb012f2ce6.webp",
      "https://img.cofynd.com/images/latest_images_2024/8590936a3ca9ac701ba4c43abb24865b4532b728.webp",
      "https://img.cofynd.com/images/latest_images_2024/ced01cecd30dca4d1df33c747a9a1af3ce9ccdbf.webp"
    ]
  },
  {
    "id": 35,
    "name": "YC Coworking Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/228332848ab4c05bc578090d80426736b8ed1e34.webp",
      "https://img.cofynd.com/images/latest_images_2024/e71693355597ac472f7ebfa440fd86a0a9a64273.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab06141c61b6fb827e814bd2b8f7c0f1d0a83d9b.webp",
      "https://img.cofynd.com/images/original/2c4417a8eadfbedf0aa0697026d8d5d445bbbd88.jpg",
      "https://img.cofynd.com/images/original/2cad774819a83d7965a67bd4a505cf9fb077550f.jpg"
    ]
  },
  {
    "id": 36,
    "name": "Linkup Coworking Space Rohini",
    "badge": "Verified",
    "rating": null,
    "area": "Rohini",
    "location": "Rohini, Delhi",
    "price": "₹4,000",
    "period": "/ Month",
    "priceFormatted": "₹4,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/063eb5e13effe0d18fd3eae19c12b1051a8681f5.webp",
      "https://img.cofynd.com/images/latest_images_2024/b20562b132ca4f6254d4edf883d4082a6d954891.webp",
      "https://img.cofynd.com/images/latest_images_2024/4186b675c581dc3396dd031470073fae35cadf30.webp",
      "https://img.cofynd.com/images/latest_images_2024/f4e214a592bff39d02390d7b864074a63d6ff522.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c83448d350de2ad6a12a0c0906986a5c95ed247.webp"
    ]
  },
  {
    "id": 37,
    "name": "Nearby Desk Vasant Kunj",
    "badge": "Premium",
    "rating": null,
    "area": "Vasant Kunj",
    "location": "Vasant Kunj, Delhi",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0385c2b9c937b2ac2001ff729b6d3fecbe1c99a7.webp",
      "https://img.cofynd.com/images/latest_images_2024/b7ec077f447046e26f23ea74ed90da692b17090a.webp",
      "https://img.cofynd.com/images/latest_images_2024/f054296d8cad3bc8d49a2d5ed851bba9c1df6a65.webp",
      "https://img.cofynd.com/images/latest_images_2024/d6b4b882c4e419625bcd0a97d6e47557dab369e9.webp",
      "https://img.cofynd.com/images/latest_images_2024/7d56ac9486fc16053666dc6e4f655ec3e80af0fb.webp"
    ]
  },
  {
    "id": 38,
    "name": "Wbb Office Laxmi Nagar",
    "badge": "Special Offer",
    "rating": 4.3,
    "area": "Laxmi Nagar",
    "location": "Laxmi Nagar, Delhi",
    "price": "₹4,999",
    "period": "/ Month",
    "priceFormatted": "₹4,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/58033e5c85af9d81b42184237b9facb86a5b5a79.webp",
      "https://img.cofynd.com/images/latest_images_2024/6a6583599bdc1d2e0715c68ffb9ec4c3eb0cf0a7.webp",
      "https://img.cofynd.com/images/latest_images_2024/1356c5caa07f4062e440f3332ac6fa32e01e0c6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/5d5b901898841dd30d20b3906378ca054e89e53f.webp",
      "https://img.cofynd.com/images/latest_images_2024/9798e8387e4127e902593a962f61fa9f5175dd1f.webp"
    ]
  },
  {
    "id": 39,
    "name": "Spaced Out Hauz Khas",
    "badge": "Special Offer",
    "rating": 4.1,
    "area": "Hauz Khas",
    "location": "Hauz Khas, Delhi",
    "price": "₹4,999",
    "period": "/ Month",
    "priceFormatted": "₹4,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/94340b39a09e8ec80ebf078af02478accd1e7f8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/e8ccac9a31fb427f704ec0995076e0fcfcd47403.webp",
      "https://img.cofynd.com/images/latest_images_2024/a199f072061d700886b2574813a4d803df004992.webp",
      "https://img.cofynd.com/images/latest_images_2024/e10a13d3a83cd847422a4ad1656f141822117e66.webp",
      "https://img.cofynd.com/images/original/b572503859e4e986a98a57bda6f8ea3ec0f824b2.jpg"
    ]
  },
  {
    "id": 40,
    "name": "ABL Workspace Green Park",
    "badge": "Popular",
    "rating": 4.2,
    "area": "Green Park",
    "location": "Green Park, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/35b65b8de7f6cd93865c40853239021bab609584.webp",
      "https://img.cofynd.com/images/latest_images_2024/95d6c8226ea462d5da9e6e17f5a1633a61cf84cc.webp",
      "https://img.cofynd.com/images/original/fb66a12364afab1d31b30427c00aff3df72fa384.jpg",
      "https://img.cofynd.com/images/original/918a5a0880f69821af2dd8715500b521cc42121b.jpg",
      "https://img.cofynd.com/images/latest_images_2024/98b12ff0ebcf28b3a7894cae65405370f7c056a4.webp"
    ]
  }
];
export const pageTwoDelhiOfficeCards = pageTwoDehliOfficeCards;

export const pageTwoMoreDehliOfficeCards = [
  {
    "id": 41,
    "name": "Flexihub space Jasola",
    "badge": "Verified",
    "rating": 4.5,
    "area": "Jasola",
    "location": "Jasola, Delhi",
    "price": "₹9,499",
    "period": "/ Month",
    "priceFormatted": "₹9,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c80bb974d9b91dd8e5a2dfdd5534a5edd9323491.webp",
      "https://img.cofynd.com/images/latest_images_2024/4f6a12df042e8c0dc11abedeeb27fc5ede14dfa7.webp",
      "https://img.cofynd.com/images/latest_images_2024/45777f3d53f45de76270a2bd6bf0c5462b99d41d.webp",
      "https://img.cofynd.com/images/latest_images_2024/46b2b8a16f72224d9d23849d4b2fa945174823b9.webp",
      "https://img.cofynd.com/images/latest_images_2024/28dad7bc45d09e276c31eb7aeee75a0737467e3a.webp"
    ]
  },
  {
    "id": 42,
    "name": "Dynamic Desk Karol Bagh",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Karol Bagh",
    "location": "Karol Bagh, Delhi",
    "price": "₹13,999",
    "period": "/ Month",
    "priceFormatted": "₹13,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/58aa4e38db360245a1dfd103df9e86031d9f13ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/430c39683ff4a5df79b245cf5da430c2e9f0cbd5.webp",
      "https://img.cofynd.com/images/latest_images_2024/d31bde1fb5b52873870e1fbee86fef9442ece342.webp",
      "https://img.cofynd.com/images/latest_images_2024/a77ad5f7a9f2fb5ff8b5f054a815d8ea4da6ce08.webp",
      "https://img.cofynd.com/images/latest_images_2024/8cbab76fb541186d61f665d6b929c07d3601a68c.webp"
    ]
  },
  {
    "id": 43,
    "name": "Cospaces Lajpat Nagar",
    "badge": "Special Offer",
    "rating": 4.6,
    "area": "Lajpat Nagar",
    "location": "Lajpat Nagar, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/eb749f5a3c4a9fb629e03ec6f0532aeb0ffc34f4.webp",
      "https://img.cofynd.com/images/latest_images_2024/349d5bf1ec3c4b64dfe0814fbc06cbfb1df90630.webp",
      "https://img.cofynd.com/images/latest_images_2024/fa7531a12f2408bfc68061b3e39af8dc13956292.webp",
      "https://img.cofynd.com/images/latest_images_2024/04101288f38855360ac30210ea465306df780318.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6cd79850ecdd74b7cde570281ceef78498d254f.webp"
    ]
  },
  {
    "id": 44,
    "name": "Apeejay Business Center Connaught Place",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8a40d5d6c5c38d1f6800938fce4083356f31166e.webp",
      "https://img.cofynd.com/images/latest_images_2024/cab3f848de44cd3ec7c4b650a153a2c47241a4f9.webp",
      "https://img.cofynd.com/images/latest_images_2024/243a6f3e8327b1593bdafa9af23190777202581c.webp",
      "https://img.cofynd.com/images/latest_images_2024/9fa3568cbee7231187c54e90835f48bd2fd5ebbb.webp",
      "https://img.cofynd.com/images/latest_images_2024/f71952261742da604823ba1780884319578829d2.webp"
    ]
  },
  {
    "id": 45,
    "name": "Atelier ( Cowrks ) Aerocity",
    "badge": "Premium",
    "rating": 4.6,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹39,999",
    "period": "/ Month",
    "priceFormatted": "₹39,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3c1165b62dcb8d95b8d75275332cc901c537d835.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a820d7d9ba842b9c396d8a500ec63b8268892c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/9a327ae4d6f332c7f26296022488fb0ef0234438.webp",
      "https://img.cofynd.com/images/latest_images_2024/2a464085efee6b7a38e4f46ee738e932c8c47a52.webp",
      "https://img.cofynd.com/images/latest_images_2024/a33e73238068a924018616bdf2e92d8cf9197807.webp"
    ]
  },
  {
    "id": 46,
    "name": "Awfis Mohan Cooperative",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/516979283fcf6630506fb43a0f734ac2c9309173.webp",
      "https://img.cofynd.com/images/latest_images_2024/9e1c532eb3bc3eca79a4f7fcfddbbfe79ea46e5a.webp",
      "https://img.cofynd.com/images/latest_images_2024/7a1dd97990d6086b7075383fe46f2e968c4592fe.webp",
      "https://img.cofynd.com/images/latest_images_2024/0b634512ac1560fd2307fda4a8d804b49e813c3d.webp",
      "https://img.cofynd.com/images/latest_images_2024/8b2bddf08063d24c37475b1f8ae3af4b743a2420.webp"
    ]
  },
  {
    "id": 47,
    "name": "Avanta Business Centre Saket",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹23,999",
    "period": "/ Month",
    "priceFormatted": "₹23,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b5d5b1fcd8fa3fa1ddaf96979873e5c4151c5e45.webp",
      "https://img.cofynd.com/images/latest_images_2024/c37896d88fe30704a584243b7cae45ea3516455e.webp",
      "https://img.cofynd.com/images/latest_images_2024/c6b32a0c09fcdbea76e23a1678bbef7fde6c879c.webp",
      "https://img.cofynd.com/images/latest_images_2024/ba21b587fae8789011568bebd15b2132f909f1f8.webp",
      "https://img.cofynd.com/images/latest_images_2024/fd051dff12447570c11f1a19638099dfe7936092.webp"
    ]
  },
  {
    "id": 48,
    "name": "Hub And Oak Okhla",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1034e0bffa28144b5b844efdb9d9e9e28d8c6858.webp",
      "https://img.cofynd.com/images/latest_images_2024/81158c108ad0d35b167d6b90512d6e1386d03f8e.webp",
      "https://img.cofynd.com/images/latest_images_2024/5183edd99c9308c9ed8b3a7d7d820e9fca4620bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/938a858dafe40ccad793bcb96efa6617d01e92a0.webp",
      "https://img.cofynd.com/images/latest_images_2024/fcc1180ca064595d59c05c3f5dd477de7965ce36.webp"
    ]
  }
];
export const pageTwoMoreDelhiOfficeCards = pageTwoMoreDehliOfficeCards;

export const pageTwoFinalDehliOfficeCards = [
  {
    "id": 49,
    "name": "Work Exchange Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/8425813128dbf1dcac9ed5934d4b49a245728f0a.jpg",
      "https://img.cofynd.com/images/latest_images_2024/f4588e0eb8dcd515cdf7a7fd021f326107d2771c.webp",
      "https://img.cofynd.com/images/latest_images_2024/ef37ead0ef4925b738ea28bd46afd659853a84bd.webp",
      "https://img.cofynd.com/images/original/9c8058b27cb718d04e7cf4689bd62ac82af96b2d.jpg",
      "https://img.cofynd.com/images/latest_images_2024/547b5b79ea3a69f5a1414325ae2895255dbcbdf8.webp"
    ]
  },
  {
    "id": 50,
    "name": "Avanta Business Centre Nehru Place",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹27,999",
    "period": "/ Month",
    "priceFormatted": "₹27,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ea2827971877cce753e15d46d00627075d3cd2bc.webp",
      "https://img.cofynd.com/images/latest_images_2024/042e2ad0623a0d05ce90b23a7cc0464ddd3d2791.webp",
      "https://img.cofynd.com/images/original/42988a7cc6f6842a9fc093f158b7443a858e9973.jpg",
      "https://img.cofynd.com/images/original/e82cc63a5f5faf7fc97607623c43961e32f1aa35.jpg",
      "https://img.cofynd.com/images/original/cec2dad9b5dccb03dab1b6a387d281116a94c926.jpg"
    ]
  },
  {
    "id": 51,
    "name": "Spring House SHDL002 Janakpuri",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9236a067f3f88991bb6ef51328e5d11ad2d7b4f1.jpg",
      "https://img.cofynd.com/images/original/da29a8e2ba86b5ff83b7547f8ada119c35848f56.jpg",
      "https://img.cofynd.com/images/latest_images_2024/4c73070f8bcbe024da85a3cdf5adb9a80d581cd3.webp",
      "https://img.cofynd.com/images/latest_images_2024/60a95f067e3ee65b191d4f622a2985ba623eb73c.webp",
      "https://img.cofynd.com/images/original/d0f6c666bebffa5a0dda8648eb64bea21168e6c3.jpg"
    ]
  },
  {
    "id": 52,
    "name": "CorporatEdge South Delhi",
    "badge": "Verified",
    "rating": null,
    "area": "South Delhi",
    "location": "South Delhi, Delhi",
    "price": "₹44,999",
    "period": "/ Month",
    "priceFormatted": "₹44,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1992cfccfb5bc8c48db188a40a3b3d1e46fcdbe7.webp",
      "https://img.cofynd.com/images/latest_images_2024/082b28e016e9e36d21df11d6f379c697256e2dcf.webp",
      "https://img.cofynd.com/images/latest_images_2024/3206f803a83784d974a4998f3fa8dd1107ac9e1a.webp",
      "https://img.cofynd.com/images/latest_images_2024/02b4c8bb992d3414c12d6dc07c3c484428a0ed94.webp",
      "https://img.cofynd.com/images/latest_images_2024/df15f98ba012e58d82ee22342fb1a52c9e665f98.webp"
    ]
  },
  {
    "id": 53,
    "name": "Invento Workspaces 12A Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/4b040c22f60e6c47a0feee19669a773a3f714460.webp",
      "https://img.cofynd.com/images/original/10c50063cb2aa98b8577f598a4e68b392c1e2b28.jpg",
      "https://img.cofynd.com/images/latest_images_2024/835dd3eee9413ea4eacff7e8cafb709582b6c5cc.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d677d898eff37e7e83a6afb7d3015d70a04b51e.webp",
      "https://img.cofynd.com/images/latest_images_2024/3dd636f5c7cbc5ae4c275306e5084c1b810b03da.webp"
    ]
  },
  {
    "id": 54,
    "name": "Brainy Colony Rohini",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Rohini",
    "location": "Rohini, Delhi",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f4e05e74859924e8918a5bb661830ea92d07c60f.webp",
      "https://img.cofynd.com/images/latest_images_2024/4412da3c83da5c07699d4a202d97585cb491bc9f.webp",
      "https://img.cofynd.com/images/latest_images_2024/f8d9ba891a514d2c1ed2d1d2f1ed16bebc55e1e0.webp",
      "https://img.cofynd.com/images/latest_images_2024/2575018cc8ac248ce9885b10609bd9ee29c41a02.webp"
    ]
  },
  {
    "id": 55,
    "name": "Cowork Pad Hauz Khas",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Hauz Khas",
    "location": "Hauz Khas, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/44e1931969cdc3cd49ff798b0dcd47398f411b79.webp",
      "https://img.cofynd.com/images/latest_images_2024/9c23975ba9bbfd39a482736859cfe0d58631c9cf.webp",
      "https://img.cofynd.com/images/latest_images_2024/4618344018db71f891b2fd802e36679438fee232.webp",
      "https://img.cofynd.com/images/latest_images_2024/2e8bfc7c629f6c9c11e3098c8a8a6f15b75720ad.webp",
      "https://img.cofynd.com/images/latest_images_2024/baf88304cc2f73a1ee7e008c5e1025f9027e085a.webp"
    ]
  },
  {
    "id": 56,
    "name": "Green Coworking Space Green Park",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Green Park",
    "location": "Green Park, Delhi",
    "price": "₹9,499",
    "period": "/ Month",
    "priceFormatted": "₹9,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8660c8b5bba4d065b4024bd75894bbe1faaec988.webp",
      "https://img.cofynd.com/images/latest_images_2024/4a085efb7fdb993396fd1525fd540319fe45fb71.webp",
      "https://img.cofynd.com/images/latest_images_2024/033eb0a50a02dce9963161b216bb9bd92f87089d.webp",
      "https://img.cofynd.com/images/latest_images_2024/7ac20e61e8f7c4a01bd1fa21d1c81ef031918f4f.webp",
      "https://img.cofynd.com/images/latest_images_2024/5feaa3eb69b9501842ffd7ec69df20febd065173.webp"
    ]
  }
];
export const pageTwoFinalDelhiOfficeCards = pageTwoFinalDehliOfficeCards;

export const pageTwoFeaturedDehliOfficeCards = [
  {
    "id": 57,
    "name": "Solace Karol Bagh",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Karol Bagh",
    "location": "Karol Bagh, Delhi",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/30132e173142ca791c1a379cadfa6c5ee62f4bb7.webp",
      "https://img.cofynd.com/images/latest_images_2024/0b014e4e8fd42afc0cd3e2104859e1d8a711d87d.webp",
      "https://img.cofynd.com/images/latest_images_2024/2fe03371b58d0afc8c521b3bd1b62706cbfa4ee7.webp",
      "https://img.cofynd.com/images/latest_images_2024/79e5ec57f9f3ede0ec1bfab99e88320217b71175.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b3f0c4ec0f70988508946038c8cf81cd3279a5d.webp"
    ]
  },
  {
    "id": 58,
    "name": "Awfis Connaught Place",
    "badge": "Premium",
    "rating": 4.4,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹15,999",
    "period": "/ Month",
    "priceFormatted": "₹15,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/284b68fedb180cbd3fdde58409a209cc9d86e623.jpg",
      "https://img.cofynd.com/images/original/58e51731e20cd893e38b864010b9fab4d0cdb227.jpg",
      "https://img.cofynd.com/images/original/1c65a15d5cd652769832d038adda6663253940c9.jpg",
      "https://img.cofynd.com/images/latest_images_2024/c96a64ec992a70f134b5fb7c4602fffbee842454.webp",
      "https://img.cofynd.com/images/original/a9e4e4e0027b7403a097d85842847623fede1589.jpg"
    ]
  },
  {
    "id": 59,
    "name": "Wework Aerocity",
    "badge": "Premium",
    "rating": 5,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹34,999",
    "period": "/ Month",
    "priceFormatted": "₹34,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0922339e479ccbf8470fa0d3ffd8ff89c248c5f5.webp",
      "https://img.cofynd.com/images/latest_images_2024/6423fbe65bfb1182dad9ca11a4c0b6c3a6ab2d01.webp",
      "https://img.cofynd.com/images/latest_images_2024/4619dab8d16fd3e51efb434365f6884e7da52e40.webp",
      "https://img.cofynd.com/images/latest_images_2024/5048b380def3d77e287732cd32bc779bb697bee2.webp",
      "https://img.cofynd.com/images/latest_images_2024/844dd098754317f232933ac4d56af62b4013d437.webp"
    ]
  },
  {
    "id": 60,
    "name": "The Office Pass Mohan Cooperative",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/a5c8a2b7c2f6308b1cffcc57e3be19593548e902.jpg",
      "https://img.cofynd.com/images/latest_images_2024/d67c593fcb39d83706e6b2b317e112b353ce03e4.webp",
      "https://img.cofynd.com/images/original/964a84c0caa52e59e93673e9acb7252ac743210e.jpg",
      "https://img.cofynd.com/images/original/2ebcb5d0945896cf1e84fec79fa0605ca22956fc.jpg",
      "https://img.cofynd.com/images/latest_images_2024/7f72584086b36bb50d189210da996571f1a87423.webp"
    ]
  },
  {
    "id": 61,
    "name": "Collative Saket",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹26,999",
    "period": "/ Month",
    "priceFormatted": "₹26,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/974952fdc78d867cc541c58817cb94ec110c353e.webp",
      "https://img.cofynd.com/images/latest_images_2024/bf7eccb76f02a6d0ffa618a33ee258b87344ee28.webp",
      "https://img.cofynd.com/images/latest_images_2024/b556138787d68ac71f0d74aec0539844ca1b8835.webp",
      "https://img.cofynd.com/images/latest_images_2024/657d1094acb75b6813d84ded0274db4eb9257477.webp",
      "https://img.cofynd.com/images/latest_images_2024/ccd2b47423f8c4d7c02667b8202f6ed52d9840e3.webp"
    ]
  },
  {
    "id": 62,
    "name": "Onward Workspaces ||| Okhla",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹11,999",
    "period": "/ Month",
    "priceFormatted": "₹11,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0bd86160e9d0fb71cf18203a34b865dc531c93dc.webp",
      "https://img.cofynd.com/images/latest_images_2024/ad212673b3712e37f28c0d35f06c6f63226f1928.webp",
      "https://img.cofynd.com/images/latest_images_2024/0dabea3071d6f1a9f35cb64882fa09beffc8dee1.webp",
      "https://img.cofynd.com/images/latest_images_2024/bf9fb68cd19f3464c89f88ae0c893c9ec2992a04.webp",
      "https://img.cofynd.com/images/latest_images_2024/60c534a7442fb77e6a39ebfc4d415b7da4637f0a.webp"
    ]
  },
  {
    "id": 63,
    "name": "Fume Coworking 1.0 Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹9,499",
    "period": "/ Month",
    "priceFormatted": "₹9,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2a1144a2004112f00292d0095892e1aaddf8b158.webp",
      "https://img.cofynd.com/images/latest_images_2024/1bb41f5f3133710f21f20ce8c5b0003c7820b796.webp",
      "https://img.cofynd.com/images/latest_images_2024/d504f252a1f7ff825eaf71ee8dcb5503ba0a3a82.webp",
      "https://img.cofynd.com/images/latest_images_2024/3b5a021ae25c120a6c178c4b4e1e3e963e75690a.webp",
      "https://img.cofynd.com/images/latest_images_2024/343ee9a4aaacb38faeff8ad8271f19127fece54b.webp"
    ]
  },
  {
    "id": 64,
    "name": "Rworkspaces B Nehru Place",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/42dbacdbceaf3351f8b88b0502a2eec1715b2d96.webp",
      "https://img.cofynd.com/images/latest_images_2024/4f24769dfd77fae0a44de1a0994eec5bea22f8f6.webp",
      "https://img.cofynd.com/images/latest_images_2024/464009fd2e4fbabfd303abe941d7e9880d31810b.webp",
      "https://img.cofynd.com/images/latest_images_2024/5656e3686a8d93a07f13b472146b62999660fce2.webp",
      "https://img.cofynd.com/images/latest_images_2024/dbb284689a923d1384bc0d2ddb7696fd9afdc64b.webp"
    ]
  }
];
export const pageTwoFeaturedDelhiOfficeCards = pageTwoFeaturedDehliOfficeCards;

export const pageThreeDehliOfficeCards = [
  {
    "id": 65,
    "name": "The Club Co Janakpuri",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/777ebc6adc83c999e217c113060c8eb25391e4bb.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c0f57d4602a7095fd8fc548900e87e993cf7811.webp",
      "https://img.cofynd.com/images/latest_images_2024/67ca7a0f65a04f59ccecc1b49892f00e31b0f9f7.webp",
      "https://img.cofynd.com/images/latest_images_2024/ede1b9d4ce3825ab5240d211e2d9b2d96ccf9cc0.webp",
      "https://img.cofynd.com/images/latest_images_2024/11006c141883bc059e003a631d2cad7aa9ed937a.webp"
    ]
  },
  {
    "id": 66,
    "name": "Spacify Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/2d16d161ffb843d9f4eaf9bc9b278c8bdf3586e0.jpg",
      "https://img.cofynd.com/images/original/58678803107e6802e498e51c9639fa7b6791159d.jpg",
      "https://img.cofynd.com/images/original/8b7d13f40f08701054f8632f18721c6fe0251bb2.jpg",
      "https://img.cofynd.com/images/original/b41337db7c3b13bc2651bd4bd95a0271f5d26f77.jpg",
      "https://img.cofynd.com/images/original/a3e1e0c5ab686029ac26018525f0626a46f409e2.jpg"
    ]
  },
  {
    "id": 67,
    "name": "Martini Rohini",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Rohini",
    "location": "Rohini, Delhi",
    "price": "₹8,500",
    "period": "/ Month",
    "priceFormatted": "₹8,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e54e232156e0950ff0e46b1ee3d7265c50ca3bf0.webp",
      "https://img.cofynd.com/images/latest_images_2024/60e38c27153ac721f4e6a23cd0f26286c6a52e8c.webp",
      "https://img.cofynd.com/images/latest_images_2024/3af0c723ce4bf75728c8c0faa2446f94c29d70df.webp",
      "https://img.cofynd.com/images/latest_images_2024/153787e412f5874129a6d25c6be6c5f9a08ae86e.webp",
      "https://img.cofynd.com/images/latest_images_2024/cbcfa9e3bbcb8932b7cd371ab2badef74d6a7df0.webp"
    ]
  },
  {
    "id": 68,
    "name": "Avanta Business Centre B Connaught Place",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹24,999",
    "period": "/ Month",
    "priceFormatted": "₹24,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/87975dcd252a22fc17f327bc640366e9869c6c48.webp",
      "https://img.cofynd.com/images/latest_images_2024/5af9847ad630e51a8c73cca6eb6fbae6f0dbfc02.webp",
      "https://img.cofynd.com/images/latest_images_2024/01d8ef8cea3a019056c841408118c306c16460c0.webp",
      "https://img.cofynd.com/images/latest_images_2024/bed93a43943e26293dc169f9e0ff61e67c605e53.webp",
      "https://img.cofynd.com/images/latest_images_2024/222774287690fa30c9bc312d048da9b29536cba4.webp"
    ]
  },
  {
    "id": 69,
    "name": "The Executive Centre Aerocity",
    "badge": "Verified",
    "rating": 4.5,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹41,999",
    "period": "/ Month",
    "priceFormatted": "₹41,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1698b6cdb65e213d9d415cc281fca2e5bdd72233.webp",
      "https://img.cofynd.com/images/latest_images_2024/bd459eadf0158570ed18692e317ddfaf10cf3e12.webp",
      "https://img.cofynd.com/images/latest_images_2024/16534b892da774f6b6da6261bdd4dba772fe73db.webp",
      "https://img.cofynd.com/images/latest_images_2024/76af7296283445ae8aafb9e9a5b9593f05153e55.webp",
      "https://img.cofynd.com/images/latest_images_2024/35cde1abb4445baeb9742548abb4e0904cd75689.webp"
    ]
  },
  {
    "id": 70,
    "name": "Onward Workspaces Mohan Cooperative",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f59b2685a91be84e7e12c20cbf52575146f62d71.webp",
      "https://img.cofynd.com/images/latest_images_2024/d269304b4a0fc8631b45f0b16ddd9117ec0553e9.webp",
      "https://img.cofynd.com/images/latest_images_2024/ac3c4f801b2bdee19a7bab858941b39ae83acb2a.webp",
      "https://img.cofynd.com/images/latest_images_2024/02890a6b891f8c57b22d6a156ba0b867e66bb024.webp",
      "https://img.cofynd.com/images/latest_images_2024/b98cc5de6670141b4a35a3cb80e5247933158e91.webp"
    ]
  },
  {
    "id": 71,
    "name": "Innov8 F Saket",
    "badge": "Premium",
    "rating": 5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/57e07408a173ed77de9656cd74427df6c7c99853.webp",
      "https://img.cofynd.com/images/latest_images_2024/d3fdb9612ea4d9d70b18d19a32a04dfaeed6fbc9.webp",
      "https://img.cofynd.com/images/original/beb1ad85552a779f2cfe990e4895f5a6d8894b30.jpg",
      "https://img.cofynd.com/images/latest_images_2024/e21aa6300b77a93e67a38f0e92b432ad910f5213.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3b35608d1a40cb38ae88324f2f2ded057d622cf.webp"
    ]
  },
  {
    "id": 72,
    "name": "Desker CoWorking Okhla",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fcfa4bc0c58227899bd68429afb2f383118a60d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/4175f56b1d953c7b7f145b6b1c907afd96b635ef.webp",
      "https://img.cofynd.com/images/original/0b854c1d5390486ddc115467a193431b3a436258.jpg",
      "https://img.cofynd.com/images/latest_images_2024/8e6f8c5c974579be88abe57ef83a5e21122f4733.webp",
      "https://img.cofynd.com/images/latest_images_2024/20f0e74069876ca63b02f2014f40f8697ceaf487.webp"
    ]
  }
];
export const pageThreeDelhiOfficeCards = pageThreeDehliOfficeCards;

export const pageThreeMoreDehliOfficeCards = [
  {
    "id": 73,
    "name": "Supreme Cowork Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3fe64b2bce64f83b76611b407692d5d0b079903a.webp",
      "https://img.cofynd.com/images/latest_images_2024/329af6b9152cf912cd2a8717bcc254d220c4b6d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/560b1f45c861332cbe4d5bfce6fe9849d851fc3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/f0161291ac783ffd8e9ab1c25c7d4267955dd20f.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d9b1b6185bda7047280e372f19a54e24beb440c.webp"
    ]
  },
  {
    "id": 74,
    "name": "Smartworks Nehru Place",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹10,999",
    "period": "/ Month",
    "priceFormatted": "₹10,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/cd57dd18e8958efa332dbf7d56cdbb0a5daf14e0.jpg",
      "https://img.cofynd.com/images/latest_images_2024/4949a0887778adfdc42df89b2adc208cb6f12503.webp",
      "https://img.cofynd.com/images/original/876af7e9a938113563ed648fb522cbe13ba8bdbf.jpg",
      "https://img.cofynd.com/images/latest_images_2024/eb393df20f7a0dd24fb6e534afce3173fe9eb0be.webp",
      "https://img.cofynd.com/images/latest_images_2024/b9c0bd2a1139fd1d86ecc4a2d9f323f81d221ed4.webp"
    ]
  },
  {
    "id": 75,
    "name": "Spring House SHDL003 Janakpuri",
    "badge": "Premium",
    "rating": 5,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/7fd735bb9361019969f71dbdc27fb2e7973ce358.webp",
      "https://img.cofynd.com/images/latest_images_2024/eb9f32651231d6c4ef8a466a2a63e4a00c2a1583.webp",
      "https://img.cofynd.com/images/latest_images_2024/9592e5ef3c786902e984719dc0599768caffa9a2.webp",
      "https://img.cofynd.com/images/latest_images_2024/5865b73dd55f7d3a344841982ca7ae6b9cd092e7.webp",
      "https://img.cofynd.com/images/latest_images_2024/6c1ac119aec3ba9554fab8221437279dab5e7efc.webp"
    ]
  },
  {
    "id": 76,
    "name": "Peer 2 Desk Dwarka Delhi",
    "badge": "Popular",
    "rating": 5,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/845c6d42e51c0706ba54c66973ef00ca53956b3a.jpg",
      "https://img.cofynd.com/images/original/ce4bad5366b2e93e6a092ceb037ead89d82b7842.jpg",
      "https://img.cofynd.com/images/original/03efca9c1a9fb95ca99a7cad3ce3dbd06f1581e3.jpg",
      "https://img.cofynd.com/images/original/25078736fa13b179bc2e8f77bd164967f392aa52.jpg",
      "https://img.cofynd.com/images/original/dd783968999d857e984e59459698c65b3cb71ec3.jpg"
    ]
  },
  {
    "id": 77,
    "name": "Sab Co-working Rohini",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Rohini",
    "location": "Rohini, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e401e614d925e6e7dba867887b5162112a472f2c.webp",
      "https://img.cofynd.com/images/latest_images_2024/9fdc7a02c489d29142c5067fbb6679e2df49180b.webp",
      "https://img.cofynd.com/images/latest_images_2024/4d8d93df5d222e16f61d04690a2403237a338336.webp",
      "https://img.cofynd.com/images/latest_images_2024/1a5e67ba153e1560bf35178f63bc600f27ebbc20.webp"
    ]
  },
  {
    "id": 78,
    "name": "Workingdom B Connaught Place",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹16,999",
    "period": "/ Month",
    "priceFormatted": "₹16,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3855e503ab03112470b336499954d7c7922e0a6e.webp",
      "https://img.cofynd.com/images/latest_images_2024/4fc4a436a006640c4841ef9bd2c79a4fd950164c.webp",
      "https://img.cofynd.com/images/latest_images_2024/efff4918a7ff7678147b754d2956bb078c9ed0aa.webp",
      "https://img.cofynd.com/images/latest_images_2024/9aeb39211befed4a2db631d35e19018fc9c073b2.webp",
      "https://img.cofynd.com/images/latest_images_2024/7a800a70c10449023aae82eda53fd7c179977383.webp"
    ]
  },
  {
    "id": 79,
    "name": "Synq.work Aerocity",
    "badge": "Verified",
    "rating": 4.9,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹31,999",
    "period": "/ Month",
    "priceFormatted": "₹31,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/596d2a213767a81c94b744a221e1b606b479f7cc.webp",
      "https://img.cofynd.com/images/latest_images_2024/419fd3c8ad2dc0596888672f70a65f1a8bffe686.webp",
      "https://img.cofynd.com/images/latest_images_2024/b97a9bdec1a487ed174c28125399699658a0856a.webp",
      "https://img.cofynd.com/images/latest_images_2024/4552535836cc2e2e011933d15ead091f4df5accb.webp",
      "https://img.cofynd.com/images/latest_images_2024/82a93b7ae39bc5906d4d90a519c2a9f0aba88fc6.webp"
    ]
  },
  {
    "id": 80,
    "name": "Awfis B Mohan Cooperative",
    "badge": "Popular",
    "rating": 4,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹7,799",
    "period": "/ Month",
    "priceFormatted": "₹7,799 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e36a4121b4458e813455ca28e44bb7802d53a509.webp",
      "https://img.cofynd.com/images/original/27dd5a04cfbb95c18aa8a1d14619014583f69b31.jpg",
      "https://img.cofynd.com/images/latest_images_2024/64b20d87fbcb7a6aa748f78c6cc1b568ebba1623.webp",
      "https://img.cofynd.com/images/original/618912669bbc9749a5dd5ae4a8c21240b51f7368.jpg",
      "https://img.cofynd.com/images/original/1efa65e0f45af954e2c3033da8b0d8ebf51802cb.jpg"
    ]
  }
];
export const pageThreeMoreDelhiOfficeCards = pageThreeMoreDehliOfficeCards;

export const pageThreeFinalDehliOfficeCards = [
  {
    "id": 81,
    "name": "Buzz by Spacetime Saket",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d8d093d87e35c6b8e799b9455c1c6472723676eb.webp",
      "https://img.cofynd.com/images/latest_images_2024/996dfdac81c1edcdf39f5e108374c78387d5f0cf.webp",
      "https://img.cofynd.com/images/latest_images_2024/7d85d1e749bc449a1c185004c559fd290ef4c3c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/4ce20f7a4303e867a6b569ebe186838bf7a5487f.webp",
      "https://img.cofynd.com/images/latest_images_2024/096c2bf7314cb09344afceda547d8d3176de513e.webp"
    ]
  },
  {
    "id": 82,
    "name": "Onward Workspaces Okhla",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/00b4d28a16e6467d69d0fad3d7edec8a4f3d928f.webp",
      "https://img.cofynd.com/images/latest_images_2024/d51f0a3578db1365207fb1707676a4ba1a2370ed.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a84213d19002e64dc2651e7cbe7da03bfb87557.webp",
      "https://img.cofynd.com/images/latest_images_2024/f5687e144bfa16b7c4de2eee69edef02191da35c.webp",
      "https://img.cofynd.com/images/latest_images_2024/64213160ca8590113a1430332ee6e38fae45dde7.webp"
    ]
  },
  {
    "id": 83,
    "name": "Oahfeo Business Center Netaji Subhash Place",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f36cb166e62c2a8da96f757b3630e93d10e7bff9.webp",
      "https://img.cofynd.com/images/latest_images_2024/dae3fb4fbd1ea957df7b15a833225add53362f21.webp",
      "https://img.cofynd.com/images/latest_images_2024/13056f8078ab277a6302abdbfb4d4a9385a1e6df.webp",
      "https://img.cofynd.com/images/latest_images_2024/ba6ddab9b55c9fc028942ffa7123a45f8be6405e.webp",
      "https://img.cofynd.com/images/latest_images_2024/81cc9edd28af9c96b3c56df6bfff41e64beef290.webp"
    ]
  },
  {
    "id": 84,
    "name": "Workly Nehru Place",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f2fe77ff424e0b6e2144c55f0d15c9e38fefaa4b.webp",
      "https://img.cofynd.com/images/latest_images_2024/f0309e25280ed2c21070a866fa69ae4d6bf4cc25.webp",
      "https://img.cofynd.com/images/latest_images_2024/ebdd81359f06e0e45b0b2dc3476d370575ed9d64.webp",
      "https://img.cofynd.com/images/original/77fb17161a610cf936e7b2c640de0767077e9966.jpg",
      "https://img.cofynd.com/images/original/f787088319b0323779dfcffe0c7de60cb13560cd.jpg"
    ]
  },
  {
    "id": 85,
    "name": "Purple Co-working Janakpuri",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f82a9ef82b372be8a50c522153631ec97f5dd31d.webp",
      "https://img.cofynd.com/images/latest_images_2024/9430566d7002e0f1258c989bb29042526e72c5fb.webp",
      "https://img.cofynd.com/images/latest_images_2024/307316e06e9eb7eff19a668d81020036cb96df19.webp",
      "https://img.cofynd.com/images/latest_images_2024/3cf2b742a6bfe6770b6b8a87bc9960f629125cf3.webp",
      "https://img.cofynd.com/images/latest_images_2024/4fc108c185ae48573a116ccec2cad4295c758689.webp"
    ]
  },
  {
    "id": 86,
    "name": "Work and Beyond Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d58934f0e727a4f23c4d1f31b4c76fa081cf069c.webp",
      "https://img.cofynd.com/images/latest_images_2024/842cce6d4f0a0942749e7677fc7af6ce4c2bedb6.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a767803e9a151da3a898d527266e00099d9ff6f.webp",
      "https://img.cofynd.com/images/latest_images_2024/8bf5d836e17ac02f1ff22e0aaf391abc8e0a874a.webp",
      "https://img.cofynd.com/images/latest_images_2024/555cc0527dfaae2df24c8810b980f21b3131116a.webp"
    ]
  },
  {
    "id": 87,
    "name": "Avanta Business Centre Connaught Place",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹23,999",
    "period": "/ Month",
    "priceFormatted": "₹23,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/dc875d141e325488882e696a1c7c7a48e018ca39.webp",
      "https://img.cofynd.com/images/latest_images_2024/fe2ac0a198a082e845b14950e172736ca71f52bb.webp",
      "https://img.cofynd.com/images/latest_images_2024/933f05f4ce371cad4896c72b101d4ec1e8c152c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/5838bc421280ab202bb04747fe8cd3538fbc70ef.webp",
      "https://img.cofynd.com/images/latest_images_2024/646eeecd71089cc49cc73fcebe876e3a899b3f52.webp"
    ]
  },
  {
    "id": 88,
    "name": "Table Space Worldmark Aerocity",
    "badge": "Premium",
    "rating": 4.8,
    "area": "Aerocity",
    "location": "Aerocity, Delhi",
    "price": "₹49,999",
    "period": "/ Month",
    "priceFormatted": "₹49,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c6b5d4105887b4889f0dcfde16aad54d6ba29505.webp",
      "https://img.cofynd.com/images/latest_images_2024/fb2442863e609c6a9afa1e96ca5af79b152bf4e1.webp",
      "https://img.cofynd.com/images/latest_images_2024/2dac3db219be5ba2a4ed17570035c4d04e2f6244.webp",
      "https://img.cofynd.com/images/latest_images_2024/6cc8056fba91ee7888961adb62f9e959db0e65fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/2c4d1de16d64691ba83aa9b56cb5671d15fd8e5d.webp"
    ]
  }
];
export const pageThreeFinalDelhiOfficeCards = pageThreeFinalDehliOfficeCards;

export const pageThreeFeaturedDehliOfficeCards = [
  {
    "id": 89,
    "name": "Spacetime Mohan Cooperative",
    "badge": "Popular",
    "rating": 4,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹11,499",
    "period": "/ Month",
    "priceFormatted": "₹11,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a80ffe7c6ab6b17b5eeca358ce8beb2eaaf64034.webp",
      "https://img.cofynd.com/images/latest_images_2024/63062879c4d7d73ec3b9e6a4e1f70312f4a9ab0b.webp",
      "https://img.cofynd.com/images/latest_images_2024/5d8c7b2a1b9c7d5cbe1c12b6e02f1769eb815ed9.webp",
      "https://img.cofynd.com/images/latest_images_2024/cb6cda179a69009673dcd885544bc581a8e0f6fd.webp",
      "https://img.cofynd.com/images/latest_images_2024/bd9c130caf6f6ae6d9f747c0e30b915d0f908e58.webp"
    ]
  },
  {
    "id": 90,
    "name": "Flexihub Saket",
    "badge": "Special Offer",
    "rating": 4.4,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/db42969655aad3aee41a489420f82488522bb56c.webp",
      "https://img.cofynd.com/images/latest_images_2024/29a38d799445b33fe90c88ff38767f84314ba801.webp",
      "https://img.cofynd.com/images/latest_images_2024/61e684fe9651f61d79b2a4ee93c01343fc0bd202.webp",
      "https://img.cofynd.com/images/original/112c8311ed5b0fc93efbd3c1eb32a062317cb974.jpg",
      "https://img.cofynd.com/images/original/1c34108ca3448dbdb9625f6905a63321152f22b8.jpg"
    ]
  },
  {
    "id": 91,
    "name": "The Social Stays (formerly ArtBuzz) Okhla",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/fc13513930158db8c7deff7f84f35cab3f08fae0.jpg",
      "https://img.cofynd.com/images/latest_images_2024/cba520b7aa47a597a8de47c6e6be5aef4a41aa6e.webp",
      "https://img.cofynd.com/images/latest_images_2024/b0346fc91f946fab956b136f9faa866571a50126.webp",
      "https://img.cofynd.com/images/original/dcff17a3362832e3ba257c2054a4ce10bfd0d6e2.jpg",
      "https://img.cofynd.com/images/latest_images_2024/d35403daafc458571aac68c02f9c04ae9a774581.webp"
    ]
  },
  {
    "id": 92,
    "name": "Cosphere Netaji Subhash Place",
    "badge": "Popular",
    "rating": 5,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0135799bf91800ea39ee392496586dae2976bb97.webp",
      "https://img.cofynd.com/images/latest_images_2024/45f9907956c4cc53a77e2611ed7541e68f726f7c.webp",
      "https://img.cofynd.com/images/latest_images_2024/7846a4c734a01cac702bad1e2ac383a112743814.webp",
      "https://img.cofynd.com/images/latest_images_2024/a7bc74c7a4cea550456d71d9ca4f263038a4c44a.webp",
      "https://img.cofynd.com/images/latest_images_2024/04086d134c46e4d02ec17958cbbc2c126dcb9c49.webp"
    ]
  },
  {
    "id": 93,
    "name": "Wolk Nehru Place",
    "badge": "Popular",
    "rating": 5,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,499",
    "period": "/ Month",
    "priceFormatted": "₹12,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f15ed0eb765b5459f43f6e57cf85a2b60b7ea0a1.webp",
      "https://img.cofynd.com/images/latest_images_2024/602dbea7ae06b9a9f8e99153cde88de7c6baa93e.webp",
      "https://img.cofynd.com/images/latest_images_2024/81583b827d312bff9292a5e1a04f7a0d504b92ff.webp",
      "https://img.cofynd.com/images/latest_images_2024/00667c0b72294411791339faeab66dffe8ac9d74.webp",
      "https://img.cofynd.com/images/latest_images_2024/786aa9845dcfe35f17b3732ea44863fdd12b6946.webp"
    ]
  },
  {
    "id": 94,
    "name": "Spring House SHDL006 Janakpuri",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Janakpuri",
    "location": "Janakpuri, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/636afa3db0a47ae89f604f0de6b16bde414e3952.webp",
      "https://img.cofynd.com/images/latest_images_2024/7db7126b993deee43e53aadae7d5c7abce444e3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/52b5be29402dbcc0a585dc9fd921ae7cd1299fae.webp",
      "https://img.cofynd.com/images/latest_images_2024/f060f858382b8788d417d7b517592603d456b229.webp",
      "https://img.cofynd.com/images/latest_images_2024/beca2f899f4af9193af05ffb74aa7856c7d5e0b1.webp"
    ]
  },
  {
    "id": 95,
    "name": "TCW Unity Work Space Dwarka Delhi",
    "badge": "Premium",
    "rating": 4.8,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f21b798647cc56ef03eda1b0de1b02db81109824.webp",
      "https://img.cofynd.com/images/latest_images_2024/36bf1eade48cff242e9f87f9e0c010cd6843c2e1.webp",
      "https://img.cofynd.com/images/latest_images_2024/2a7833657e5fb5b628ac0ba3957d6bde7dfc0abd.webp",
      "https://img.cofynd.com/images/latest_images_2024/0a1256e6f376205cebc05b6b50371bac7c3614dd.webp",
      "https://img.cofynd.com/images/latest_images_2024/b15153f2fc3ec5852b97f7fd558b6bdf5a81fc2e.webp"
    ]
  },
  {
    "id": 96,
    "name": "AltF Connaught Place",
    "badge": "Premium",
    "rating": 4.9,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹13,999",
    "period": "/ Month",
    "priceFormatted": "₹13,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/72d2a8680445427a617d00e404a69f4dc4e5d0d8.webp",
      "https://img.cofynd.com/images/latest_images_2024/fdac9e5676a723cd8b74c37e7598f6b85e7c238f.webp",
      "https://img.cofynd.com/images/latest_images_2024/d81177d2d790f7e82ea2af22ce2ca408395978b1.webp",
      "https://img.cofynd.com/images/latest_images_2024/40902eac0461819bab7d2221e9866c100da58828.webp",
      "https://img.cofynd.com/images/latest_images_2024/d3ac0fbeeeec3d8d6ebb906128e80f606c921f75.webp"
    ]
  }
];
export const pageThreeFeaturedDelhiOfficeCards = pageThreeFeaturedDehliOfficeCards;

export const pageFourDehliOfficeCards = [
  {
    "id": 97,
    "name": "Hub Hive 11 Mohan Cooperative",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/33955ad16fdaf70b2b68eef882c236ad7cbd01fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/575ea6e47446ec34f27e7b1da72803f2a4db849b.webp",
      "https://img.cofynd.com/images/latest_images_2024/046adfc4fe5833cae689d3b82c7fbcfd8344156f.webp",
      "https://img.cofynd.com/images/latest_images_2024/c0a693f480bca86f99cef60d5cae10588d77fe36.webp",
      "https://img.cofynd.com/images/latest_images_2024/46f38f4e661db55c40db1a30a45701eaf898e586.webp"
    ]
  },
  {
    "id": 98,
    "name": "ZO Space 274 Saket",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8d8331d840e986a7855b8694352fce01aa771d2a.webp",
      "https://img.cofynd.com/images/latest_images_2024/8d8b74aaab5e97e9303f3ca8fbc1d5a47b83bbbf.webp",
      "https://img.cofynd.com/images/latest_images_2024/40da7d595f36458ccc3df855c2f4f14b89c80fbb.webp",
      "https://img.cofynd.com/images/latest_images_2024/716d758ba420b9dee4774eaa8194474dfb3f9b55.webp",
      "https://img.cofynd.com/images/latest_images_2024/bf72a630e48351dc3d2c7640abe1f7a229cb6b0c.webp"
    ]
  },
  {
    "id": 99,
    "name": "ABL Workspace Okhla",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2aa1588fb152dac1661815823192487aadc7dab1.webp",
      "https://img.cofynd.com/images/latest_images_2024/421d5d3e8d7855401b4b2844ce454de32398d394.webp",
      "https://img.cofynd.com/images/latest_images_2024/7316e338e96e6149caa1f022934e1bf8b9f2609e.webp",
      "https://img.cofynd.com/images/latest_images_2024/f48250479ca8bdc57a58ce36d4fcc8ba023fb656.webp",
      "https://img.cofynd.com/images/latest_images_2024/f5f51da2ed64c1385ac37f211311bfec89fa607f.webp"
    ]
  },
  {
    "id": 100,
    "name": "ASC CO-WORK Netaji Subhash Place",
    "badge": "Verified",
    "rating": null,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0c45defcea656bc8c3ae1f511da0739b3633eaa6.webp",
      "https://img.cofynd.com/images/latest_images_2024/d18ccb17b65dca9de6c3002dd827f47561ba01a1.webp",
      "https://img.cofynd.com/images/latest_images_2024/4ac66974ff7a021634a630c48c3be45929cc3ef7.webp",
      "https://img.cofynd.com/images/latest_images_2024/5b2c20b709982a7e4b75c0c482111497ec989ceb.webp"
    ]
  },
  {
    "id": 101,
    "name": "Rworkspaces Nehru Place",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/bf3819b5e3373b9783342a545b847ad60a2d4bc0.webp",
      "https://img.cofynd.com/images/latest_images_2024/2ab262b840bfc2caf89cc8c5fa13ec81fd854aa6.webp",
      "https://img.cofynd.com/images/latest_images_2024/e197def8c2026a676027b71a58c21411c8014d55.webp",
      "https://img.cofynd.com/images/latest_images_2024/8bbf7e9aae25b5b2b112ced9bf7fe75d3636033b.webp",
      "https://img.cofynd.com/images/latest_images_2024/b3a946f6866aafa622d3d1b3f0e8ef2ea340e261.webp"
    ]
  },
  {
    "id": 102,
    "name": "Work Exchange Dwarka Delhi",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/94a5162a68da0a7739b5151a6b6e641d281c8646.webp",
      "https://img.cofynd.com/images/latest_images_2024/b26a7388450822bb4515d37b3ec550185147f3cd.webp",
      "https://img.cofynd.com/images/latest_images_2024/0325b0da374eca287600f798169a0d998cb315bb.webp",
      "https://img.cofynd.com/images/latest_images_2024/45feff3817c282a146a4ae88ea00057dd16b912b.webp",
      "https://img.cofynd.com/images/latest_images_2024/4b61accc7c8a05e99ba3be847888fcb75bea6658.webp"
    ]
  },
  {
    "id": 103,
    "name": "Office On Connaught Place",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ba97270ceb4b08e7f276f788e17b66281aede98a.webp",
      "https://img.cofynd.com/images/latest_images_2024/0259a57a492fc9729bb64f8d17f37b89e104216b.webp",
      "https://img.cofynd.com/images/latest_images_2024/1534334fc93a8639a50386a641f57f350903de44.webp",
      "https://img.cofynd.com/images/latest_images_2024/abc486499c90381a80eede0f02fc8b44cc30b0fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/896f4e4a71e088851b5443c97154bc9254b5f242.webp"
    ]
  },
  {
    "id": 104,
    "name": "Cycowork Mohan Cooperative",
    "badge": "Special Offer",
    "rating": 4.3,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e6364bebff6b93cdd7d3095a0908298f42fe0773.webp",
      "https://img.cofynd.com/images/latest_images_2024/58527b543f707d4d684a0cc166c1e33675694f8b.webp",
      "https://img.cofynd.com/images/latest_images_2024/753c5244859ddadf551d6c5e6eb995f7a0e78b2a.webp",
      "https://img.cofynd.com/images/latest_images_2024/3c032cb38c160724ff28341c3415bcfbbc84bbea.webp",
      "https://img.cofynd.com/images/latest_images_2024/930f3d22ef67a13175f64df9d7f84a463d5d39d4.webp"
    ]
  }
];
export const pageFourDelhiOfficeCards = pageFourDehliOfficeCards;

export const pageFiveDehliOfficeCards = [
  {
    "id": 105,
    "name": "The Executive Centre Saket",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹59,999",
    "period": "/ Month",
    "priceFormatted": "₹59,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d58e1875b6bbb951a70be848d450ac26e2275b10.webp",
      "https://img.cofynd.com/images/latest_images_2024/f528a233ffe8f03eee0099f5cef65696f73d52db.webp",
      "https://img.cofynd.com/images/latest_images_2024/20fb3d23189d45ba8595a19579f79081f50b892d.webp",
      "https://img.cofynd.com/images/latest_images_2024/d85cdaaf2dde3a1283b5e222b8fab92c0d44fd1c.webp",
      "https://img.cofynd.com/images/latest_images_2024/06c37aeb91c8d6a0c80bed37d3c6e0a0f294c0fd.webp"
    ]
  },
  {
    "id": 106,
    "name": "Workroom Coworking Okhla",
    "badge": "Special Offer",
    "rating": 4.7,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/69f87fcaf53f80526efee132589804ee25d0b26a.webp",
      "https://img.cofynd.com/images/latest_images_2024/635f64d1d0f597ee02a6c7e3d1a66c3f0951127e.webp",
      "https://img.cofynd.com/images/latest_images_2024/73b24d5fee129539bea64ceec75d28958f3a345e.webp",
      "https://img.cofynd.com/images/latest_images_2024/67a10a7bd63f66e1a529ec57e6f88fcc9d988b4f.webp",
      "https://img.cofynd.com/images/latest_images_2024/a450437e413a113ab0d25c1d6efaf20155e6fc4f.webp"
    ]
  },
  {
    "id": 107,
    "name": "Galaxy Cowork Netaji Subhash Place",
    "badge": "Popular",
    "rating": null,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹8,499",
    "period": "/ Month",
    "priceFormatted": "₹8,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a4b20492ab4c8fd128c1e852dc6be81d73308ed7.webp",
      "https://img.cofynd.com/images/latest_images_2024/c798d5ef198a0a70732a1f5de293a567c73d5a65.webp",
      "https://img.cofynd.com/images/latest_images_2024/7d07e85779c9d43f2c9bef88695f534dbab091d3.webp",
      "https://img.cofynd.com/images/latest_images_2024/27594951ed33ae1bee1e7c89fdfb8335cd90607e.webp",
      "https://img.cofynd.com/images/latest_images_2024/0135a71271ae8dc9bbe1bf054f8e17752549698c.webp"
    ]
  },
  {
    "id": 108,
    "name": "Classic Converge Nehru Place",
    "badge": "Popular",
    "rating": 5,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,499",
    "period": "/ Month",
    "priceFormatted": "₹12,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/43bf3e7e2ee35f80e488cc4cd70f89624684cddc.webp",
      "https://img.cofynd.com/images/latest_images_2024/3da3dd391af491382523ebaf0f3a12bba4173a2f.webp",
      "https://img.cofynd.com/images/latest_images_2024/9a33cebffb85ca678c934b7630a7e6aebe92413f.webp",
      "https://img.cofynd.com/images/latest_images_2024/b55814f5fadd9dabe4c978272dfdc9c714c1c6dc.webp",
      "https://img.cofynd.com/images/latest_images_2024/8cb7bc2c916979e35e9e58c0fc248aa0a74ae2bd.webp"
    ]
  },
  {
    "id": 109,
    "name": "Creativity Cove Dwarka Delhi",
    "badge": "Special Offer",
    "rating": 4.3,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2950532421bcd94607a16d2e39048db213e003cd.webp",
      "https://img.cofynd.com/images/latest_images_2024/eaf34d0134e63b29d1279c1865e2f87bad53be21.webp",
      "https://img.cofynd.com/images/latest_images_2024/b8123ec86faaa2d9b59c5b81f14582d4c9e1581d.webp",
      "https://img.cofynd.com/images/latest_images_2024/cc02c950521f01f3fd4e503b5862aebf307f53cb.webp",
      "https://img.cofynd.com/images/latest_images_2024/ed190a0a0853cc1cc9de4fbb73e0e2e9c5f16ee0.webp"
    ]
  },
  {
    "id": 110,
    "name": "Start CoWorks Connaught Place",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹10,999",
    "period": "/ Month",
    "priceFormatted": "₹10,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a9326583756eafd4700c9db48861d71b90382eae.webp",
      "https://img.cofynd.com/images/original/dce0e64db5b6aa8623cd44da89d9092c640a0182.jpg",
      "https://img.cofynd.com/images/original/876c90e6934c5ed17f49d309533798bf41a9b39a.jpg",
      "https://img.cofynd.com/images/latest_images_2024/583abb1afbdee568e56b5f054139eee1ae78391d.webp",
      "https://img.cofynd.com/images/original/bc7bd3f646c4c5d411809810bc0c475bf657fa63.jpg"
    ]
  },
  {
    "id": 111,
    "name": "Hashtag Co-working Mohan Cooperative",
    "badge": "Special Offer",
    "rating": 4.5,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e40bf8d46d7a5bc1745b2d0d4047948e04cda055.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a9a6b65280cb4b8e890f3599dab21d0ac64645e.webp",
      "https://img.cofynd.com/images/latest_images_2024/f6cb5472258425f629123c4a8c89fba2888f10b2.webp",
      "https://img.cofynd.com/images/latest_images_2024/7a055e87e60dc31598f481ff1f282286709e7842.webp",
      "https://img.cofynd.com/images/latest_images_2024/6b20b80e81a4014070026d6f85c70a361ac14422.webp"
    ]
  },
  {
    "id": 112,
    "name": "Spacetime Saket",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/fde6dd02beeb91f75986a03bc4daa55204f3aca0.jpg",
      "https://img.cofynd.com/images/original/1ca7a03a383f0bf510f18248c576a1cc9ff5ef53.jpg",
      "https://img.cofynd.com/images/latest_images_2024/2f630829b7e47e3ae615edf8f84d6af1e9cb722b.webp",
      "https://img.cofynd.com/images/original/3e9582df9bbc7eb643f5fe6d4b606f6a125c42e4.jpg",
      "https://img.cofynd.com/images/original/1d593a3fee2192697a59c3cd8c3f7237754f49ca.jpg"
    ]
  }
];
export const pageFiveDelhiOfficeCards = pageFiveDehliOfficeCards;

export const pageSixDehliOfficeCards = [
  {
    "id": 113,
    "name": "UrbanWrk Okhla",
    "badge": "Popular",
    "rating": 4.8,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹24,499",
    "period": "/ Month",
    "priceFormatted": "₹24,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/4614c68b4c4ad4f892ddd11469d4965dc1e8b8e5.webp",
      "https://img.cofynd.com/images/latest_images_2024/60e6db2d6b9ef78c29ac5fd095d33d03c61f4159.webp",
      "https://img.cofynd.com/images/latest_images_2024/3dbd9a0ef1bfdfbcaf99f822ab572fe5e141a1a0.webp",
      "https://img.cofynd.com/images/latest_images_2024/9f6ad6318039346dc5bb84dbc263a2e70476be99.webp",
      "https://img.cofynd.com/images/latest_images_2024/486ae504662ec26f7632d03549fc8268fe93ff4d.webp"
    ]
  },
  {
    "id": 114,
    "name": "Fume Coworking 3.0 Netaji Subhash Place",
    "badge": "Verified",
    "rating": 4.5,
    "area": "Netaji Subhash Place",
    "location": "Netaji Subhash Place, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1bbe72ad27c83a137a8818f0e7ee3926a89a549c.webp",
      "https://img.cofynd.com/images/latest_images_2024/b740a1037d6437f75f115958f4d0d4c204988cde.webp",
      "https://img.cofynd.com/images/latest_images_2024/a4d552b078351ada52256444a46c41e9706ac203.webp",
      "https://img.cofynd.com/images/latest_images_2024/ca7a53d3993993d9882de2591b084fd83a1ddbc9.webp",
      "https://img.cofynd.com/images/latest_images_2024/72f8a49307d8a60ad88464895ee00aba630c972a.webp"
    ]
  },
  {
    "id": 115,
    "name": "Cubeecle Business Centre Nehru Place",
    "badge": "Verified",
    "rating": null,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0779cf9ca419f242423278ccd1cf4340e9a7d9bc.webp",
      "https://img.cofynd.com/images/latest_images_2024/cc125e17789b7d7fc414f207e3536824776d773e.webp",
      "https://img.cofynd.com/images/latest_images_2024/5dddf42a5ba4cbc2bd281f6d5c0e4f1b71eca812.webp",
      "https://img.cofynd.com/images/latest_images_2024/5ff5e4fbb07e64be17d693dc6742b67d42c633a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/dd222c31a7cfd7fb4d4b0582c2c2163e6485a7e0.webp"
    ]
  },
  {
    "id": 116,
    "name": "TCW Unity Work Space B Dwarka Delhi",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/65d22de7612e33de78e9b3d6f851f8de29e90e61.webp",
      "https://img.cofynd.com/images/latest_images_2024/99bf0a051b6194dcdd13fb81d3709ae0d448ea82.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab70a262acb0449f3031aad79ebb4c4892a164b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/63fb84a18a1968c47279d1fc5fc0dcc3f3ed9a90.webp",
      "https://img.cofynd.com/images/latest_images_2024/676a0e503d21453bc73c51f8787bd57d8a1c8619.webp"
    ]
  },
  {
    "id": 117,
    "name": "MyDesk Connaught Place",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹14,999",
    "period": "/ Month",
    "priceFormatted": "₹14,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/bd09b49799b9735bd44ccdc4ba2ad9994345c839.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab7ea09cd2af8b9b72173761e3b062736fd9dc67.webp",
      "https://img.cofynd.com/images/latest_images_2024/87130d388f71501682bafe4ce6e1e699e42d6182.webp",
      "https://img.cofynd.com/images/latest_images_2024/ac8bcae387ce2c624dd23930c0f247944b2d60aa.webp",
      "https://img.cofynd.com/images/original/7aee2ffe096e9d9670721037430ba8faaf299440.jpg"
    ]
  },
  {
    "id": 118,
    "name": "Supremework Mohan Cooperative",
    "badge": "Verified",
    "rating": 4.5,
    "area": "Mohan Cooperative",
    "location": "Mohan Cooperative, Delhi",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/42599265e262129b9d8c18b2dd6af6e4af6bd8c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/23fccf234952a9952d3fb0301dbdb7bef745c676.webp",
      "https://img.cofynd.com/images/latest_images_2024/7db95e078b148f060c300fec471e69f50d79a416.webp",
      "https://img.cofynd.com/images/latest_images_2024/d874a54cdca92507ab68d571fc412891ce8ca2ba.webp",
      "https://img.cofynd.com/images/latest_images_2024/05a277d5108425cde99b71d09735a4a73f169410.webp"
    ]
  },
  {
    "id": 119,
    "name": "KraStay Saket",
    "badge": "Popular",
    "rating": 4.4,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/26ce03096cf3522cf4717ab23cda41c9441113c3.webp",
      "https://img.cofynd.com/images/latest_images_2024/e6219320836b1671be9fa15cc3355948250f0c79.webp",
      "https://img.cofynd.com/images/latest_images_2024/c18fd32595c65728b63d024cf9e2162f8e9c5f80.webp",
      "https://img.cofynd.com/images/original/6004ec1ef6ebe38a99acdbf14518ac93b5fb9ce7.jpg",
      "https://img.cofynd.com/images/original/c8ee238bfc560c04fce0f9b7520a0bbe33981b2c.jpg"
    ]
  },
  {
    "id": 120,
    "name": "Flexihub Okhla",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹7,499",
    "period": "/ Month",
    "priceFormatted": "₹7,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/06d597355fc64822c2a1fde7a2cb9bd783593ebd.webp",
      "https://img.cofynd.com/images/latest_images_2024/1384dd8e7fc3820f1ed71d9578dbefbe186dd433.webp",
      "https://img.cofynd.com/images/latest_images_2024/f2ff15770e8ee5c9366f55cc1c94041f76b13f20.webp",
      "https://img.cofynd.com/images/latest_images_2024/ef1f6fa3b011f84891e335074ca78735593f0c72.webp",
      "https://img.cofynd.com/images/latest_images_2024/5eb32dde2e75230b7fb545a1d756baedd13b18e6.webp"
    ]
  }
];
export const pageSixDelhiOfficeCards = pageSixDehliOfficeCards;

export const pageSevenDehliOfficeCards = [
  {
    "id": 121,
    "name": "Zen business center Nehru Place",
    "badge": "Premium",
    "rating": null,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹24,999",
    "period": "/ Month",
    "priceFormatted": "₹24,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6661023c590cc7310a2675b93a849c7f02bd8c8f.webp",
      "https://img.cofynd.com/images/latest_images_2024/36f8928f91990d23d327a09e0f7556ea2840e94a.webp",
      "https://img.cofynd.com/images/latest_images_2024/41f8cfd780a55b0a752daf5ab32fc4ec732e5876.webp",
      "https://img.cofynd.com/images/latest_images_2024/c4375a736439ab426ad898d9e11b40d969c93f1b.webp",
      "https://img.cofynd.com/images/latest_images_2024/403f14ec6fb3e56cc068b5a0b6212adba9dd7fd1.webp"
    ]
  },
  {
    "id": 122,
    "name": "Invento Workspaces B Dwarka Delhi",
    "badge": "Premium",
    "rating": 4.8,
    "area": "Dwarka Delhi",
    "location": "Dwarka Delhi, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a269a761c89dd16e7deaf0b5dda06991afea1142.webp",
      "https://img.cofynd.com/images/latest_images_2024/8df8d60872c84386986795c4e186a5aa8c506ef8.webp",
      "https://img.cofynd.com/images/latest_images_2024/cb94bec9c00cb5e6212ba37f3728bebb4fe5d8e8.webp",
      "https://img.cofynd.com/images/latest_images_2024/59879ee225003104b48abc6d2c8920492e2abb91.webp",
      "https://img.cofynd.com/images/latest_images_2024/dccaf85d5281772293b7771f0883cef75b185484.webp"
    ]
  },
  {
    "id": 123,
    "name": "CorporatEdge Connaught Place",
    "badge": "Popular",
    "rating": 4.6,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹44,999",
    "period": "/ Month",
    "priceFormatted": "₹44,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1db7b0c309e0a45871f5c092923fe1ce422e9ead.webp",
      "https://img.cofynd.com/images/latest_images_2024/353d4bc02ab2d5da2a1975d2d6fbf09bb4c9cc0a.webp",
      "https://img.cofynd.com/images/original/3d0a0d9c116430c2ebd8e6696a72f107e09d8e12.jpg",
      "https://img.cofynd.com/images/original/a81562c271841f664be0a9e6c88c4ca729d33034.jpg",
      "https://img.cofynd.com/images/original/3f12156d78ad2e2c335df4dace0100d1f4f0e64e.jpg"
    ]
  },
  {
    "id": 124,
    "name": "Team CoWork Saket",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/82c85dabae9c63f488b56523f7f9bc1df73972ef.jpg",
      "https://img.cofynd.com/images/original/c555cd1a77e6c2a4f169a7e46f6d1f092b81c763.jpg",
      "https://img.cofynd.com/images/original/faa21f7a390764ec3e27f6b6d32802edc2c14f19.jpg",
      "https://img.cofynd.com/images/original/4304079e1224643c3644e515863152e290ac2c3e.jpg",
      "https://img.cofynd.com/images/original/e4dc08e435244c776fc442b7a710bbf7986c1468.jpg"
    ]
  },
  {
    "id": 125,
    "name": "The Social Stays Okhla",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Okhla",
    "location": "Okhla, Delhi",
    "price": "₹7,999",
    "period": "/ Month",
    "priceFormatted": "₹7,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/29feabc6bcc31db534617bc3a7f1bce41cce695a.webp",
      "https://img.cofynd.com/images/latest_images_2024/a025d95a76ec471d224f5dbeafefcb833bc83566.webp",
      "https://img.cofynd.com/images/latest_images_2024/ec70a86a81bf71445cb51d6d611585c06019a780.webp",
      "https://img.cofynd.com/images/latest_images_2024/c90b090010bb9c921382d451b8ba51d582d847b8.webp",
      "https://img.cofynd.com/images/latest_images_2024/db863d16386b8a18dd29a290f36a199936898d3d.webp"
    ]
  },
  {
    "id": 126,
    "name": "Avanta Nehru Place",
    "badge": "Premium",
    "rating": 4.7,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹24,999",
    "period": "/ Month",
    "priceFormatted": "₹24,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a0274aa9ef5420995b6fd7f4d89cee69cc7fbdf8.webp",
      "https://img.cofynd.com/images/latest_images_2024/ea4895b8f9bd9d77f06b56773f8bcf82a56ff4d5.webp",
      "https://img.cofynd.com/images/latest_images_2024/fe24ec5b73d185cfb4a8815f37c04b28712719de.webp",
      "https://img.cofynd.com/images/latest_images_2024/3835883019066d3743a1bf367ca3a640388cb382.webp",
      "https://img.cofynd.com/images/latest_images_2024/1883faf9f9dae1d55657c9552840a511b395618a.webp"
    ]
  },
  {
    "id": 127,
    "name": "Nukleus Connaught Place",
    "badge": "Popular",
    "rating": 5,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹21,999",
    "period": "/ Month",
    "priceFormatted": "₹21,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a6d58f223f6eed84f1df4e63f2318e23fb316231.webp",
      "https://img.cofynd.com/images/latest_images_2024/bde43797a84f322ae1258c8b5c8626868b1593e9.webp",
      "https://img.cofynd.com/images/latest_images_2024/973c9b52b274794a70eac1e9c8ba70297dc70512.webp",
      "https://img.cofynd.com/images/latest_images_2024/823be743662ba2349cc6c3f4aa8a7b7ed42b745c.webp",
      "https://img.cofynd.com/images/latest_images_2024/53680d7c1970ff07a8bc29eb752bbd947d06acfb.webp"
    ]
  },
  {
    "id": 128,
    "name": "Cubebox Saket",
    "badge": "Special Offer",
    "rating": 3.2,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/5d05ad1c2f9756282ade9b382c90e5caafd8d67d.jpg",
      "https://img.cofynd.com/images/original/21bc7e1ee05236a41de38d75de52e99717814d9f.jpg",
      "https://img.cofynd.com/images/original/6e6de5181f4c4d5be85be0dd81cbc184d1c4635b.jpg",
      "https://img.cofynd.com/images/original/279de6579ab69c5ce15c67373ceb45bff2789adf.jpg",
      "https://img.cofynd.com/images/latest_images_2024/30c2b4cf119b3fc7534aebbbaaf1ff1bfcb51620.webp"
    ]
  }
];
export const pageSevenDelhiOfficeCards = pageSevenDehliOfficeCards;

export const pageEightDehliOfficeCards = [
  {
    "id": 129,
    "name": "Workly B Nehru Place",
    "badge": "Premium",
    "rating": 4.5,
    "area": "Nehru Place",
    "location": "Nehru Place, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/15cc7c642dcb03ed60322b6abd649cd005391714.webp",
      "https://img.cofynd.com/images/latest_images_2024/bbfb29d8dd77c9076b9e65f42ab1fb650863f0d5.webp",
      "https://img.cofynd.com/images/latest_images_2024/229158fa3289f3cac764acadfa87888d7231c3f4.webp",
      "https://img.cofynd.com/images/latest_images_2024/3c6734ccf02c2d1ffa0eef97b17472a0df8e3aa0.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6d7aea28a025dd2c81c93164ddbf0a3bbebde82.webp"
    ]
  },
  {
    "id": 130,
    "name": "22 Workspace Connaught Place",
    "badge": "Special Offer",
    "rating": 3.9,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/7691409e6f0ffabca12a27a70386f98b49b1ecff.webp",
      "https://img.cofynd.com/images/latest_images_2024/f29f877606384d1b616234ef1f81bf2d75717fdd.webp",
      "https://img.cofynd.com/images/latest_images_2024/ed81e175d726dd465038fa929690baf0b3f50d59.webp",
      "https://img.cofynd.com/images/original/a364b4545d88bd9af87317c533e99b7cfe66fdb8.jpg",
      "https://img.cofynd.com/images/original/960e60d401a8185006ad862c6bf3a230c78639f6.jpg"
    ]
  },
  {
    "id": 131,
    "name": "Empowerers 275 Saket",
    "badge": "Popular",
    "rating": 5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹8,999",
    "period": "/ Month",
    "priceFormatted": "₹8,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/421eed1ea42d62c2749951a5cc1750e031152fe0.jpg",
      "https://img.cofynd.com/images/original/76e7797e4a584d9385dc94e4c3688b2c36b5c2a1.jpg",
      "https://img.cofynd.com/images/original/be21843b8155e13cf9dc49718de2720c0bba42f6.jpg",
      "https://img.cofynd.com/images/original/5b4fb16addef43d3a450d35db75d958bb3051115.jpg",
      "https://img.cofynd.com/images/original/5e538d2e68c1b7ffdc0ac6cd8ab5e4f5b8d8e2f3.jpg"
    ]
  },
  {
    "id": 132,
    "name": "Stirring Minds Connaught Place",
    "badge": "Popular",
    "rating": 4.2,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/80ded96773509676aa6dae9998c8bc51937b1603.webp",
      "https://img.cofynd.com/images/latest_images_2024/d414ece829cedef461d16c8bed6725a0e9f76512.webp",
      "https://img.cofynd.com/images/latest_images_2024/e8ccfd74ad73c892e54daa4ce4559942ab464dd9.webp",
      "https://img.cofynd.com/images/latest_images_2024/f28d3983ae5269d71608676524847362f28932a8.webp",
      "https://img.cofynd.com/images/original/38a1ab02a27099173b567d2c12f26abec6198c48.jpg"
    ]
  },
  {
    "id": 133,
    "name": "Empowerers 630 Saket",
    "badge": "Verified",
    "rating": null,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/da852d437e3ae135a03a8af0611143ae7d34a5cb.jpg",
      "https://img.cofynd.com/images/original/7d920c0794cab7bbfaaa908a8e18d0a475800436.jpg",
      "https://img.cofynd.com/images/original/d313aecb8b6b4322d8fc59c0f53429d96d15e864.jpg",
      "https://img.cofynd.com/images/original/ed5ead807652e08f9310747300b2b5647551e133.jpg",
      "https://img.cofynd.com/images/original/8e663df0f6a35b6023e3b2a18269c06d4b7c1ed2.jpg"
    ]
  },
  {
    "id": 134,
    "name": "TRE Coworks Connaught Place",
    "badge": "Popular",
    "rating": 4.1,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/ecec1773ae6ec153bf6a2f065857539d53c0effb.jpg",
      "https://img.cofynd.com/images/original/1ac84b6555fd588bee7e88daf7b1307026bf6154.jpg",
      "https://img.cofynd.com/images/original/1522b7adc23da066488269d1d642963b70f96e89.jpg",
      "https://img.cofynd.com/images/original/fe3a6d82c764d3cff6106537b0dec560f6b22b8b.jpg",
      "https://img.cofynd.com/images/original/4f43d49c6bb51b37500af231a0858e590788380c.jpg"
    ]
  },
  {
    "id": 135,
    "name": "Empowerers 262 Saket",
    "badge": "Popular",
    "rating": 4.5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹6,999",
    "period": "/ Month",
    "priceFormatted": "₹6,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/830de5f8bc98ccb8348bacc80e75b2971ad0778f.webp",
      "https://img.cofynd.com/images/latest_images_2024/6bb47f756b8a9b771847f975424ed8f3f9e27a05.webp",
      "https://img.cofynd.com/images/latest_images_2024/2225bc1c1cc4fb00c59f405449b23a3ba65b6abb.webp",
      "https://img.cofynd.com/images/latest_images_2024/29843d7052a2e1938414163504b1e03b598611cb.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1d819e3c64a6fca2c5460123a59e2c5286dcc06.webp"
    ]
  },
  {
    "id": 136,
    "name": "Quattro Spaces Connaught Place",
    "badge": "Luxury Coworking",
    "rating": 4.9,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹22,000",
    "period": "/ Month",
    "priceFormatted": "₹22,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1a2065dc57c5443e589154554c5a13cb538756d2.webp",
      "https://img.cofynd.com/images/latest_images_2024/045db895d2feee0e5e2eb48a02bb7295b09af095.webp",
      "https://img.cofynd.com/images/latest_images_2024/a0f1b678c653eda4a3a7f2f5445530b4a2a2fb05.webp",
      "https://img.cofynd.com/images/latest_images_2024/739b46de9bebf9b0fe4842f695f5918407a290b8.webp",
      "https://img.cofynd.com/images/latest_images_2024/6779bfeb8c58df631d69efc5b63dbe5e3fb85830.webp"
    ]
  }
];
export const pageEightDelhiOfficeCards = pageEightDehliOfficeCards;

export const areaExtraOfficeCards = {
  "Connaught Place": [
    {
      "id": 1,
      "name": "Innov8 Connaught Place",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/926ee00e583529d7266dfd132b163168c0aedfb4.webp",
        "https://img.cofynd.com/images/latest_images_2024/78640c42b3e184c3da374223eebcd80102147bfc.webp",
        "https://img.cofynd.com/images/latest_images_2024/62a972edc7818f8a77410b11977b6514c200a162.webp",
        "https://img.cofynd.com/images/latest_images_2024/20e6c5317a784e7df1760718bb9d8e81eabca293.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab576488b8b093a77109f96db0114c14eac6fd5f.webp"
      ]
    },
    {
      "id": 25,
      "name": "Nukleus R Connaught Place",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fe7b29d1346e0ee56ebd08e692aa10711634411c.jpg",
        "https://img.cofynd.com/images/latest_images_2024/195180e283deeba718cf471878b23a00b852fb62.webp",
        "https://img.cofynd.com/images/original/5e273c346a4e8882f52808f4d52a08687740d513.jpg",
        "https://img.cofynd.com/images/original/b78e077eae4ade3e19c6e67d3ffcba530fcfed76.jpg",
        "https://img.cofynd.com/images/latest_images_2024/cbeacce580f4a7105f6d0c7650f534b7a5b47327.webp"
      ]
    },
    {
      "id": 44,
      "name": "Apeejay Business Center Connaught Place",
      "badge": "Popular",
      "rating": 4.3,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8a40d5d6c5c38d1f6800938fce4083356f31166e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cab3f848de44cd3ec7c4b650a153a2c47241a4f9.webp",
        "https://img.cofynd.com/images/latest_images_2024/243a6f3e8327b1593bdafa9af23190777202581c.webp",
        "https://img.cofynd.com/images/latest_images_2024/9fa3568cbee7231187c54e90835f48bd2fd5ebbb.webp",
        "https://img.cofynd.com/images/latest_images_2024/f71952261742da604823ba1780884319578829d2.webp"
      ]
    },
    {
      "id": 58,
      "name": "Awfis Connaught Place",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/284b68fedb180cbd3fdde58409a209cc9d86e623.jpg",
        "https://img.cofynd.com/images/original/58e51731e20cd893e38b864010b9fab4d0cdb227.jpg",
        "https://img.cofynd.com/images/original/1c65a15d5cd652769832d038adda6663253940c9.jpg",
        "https://img.cofynd.com/images/latest_images_2024/c96a64ec992a70f134b5fb7c4602fffbee842454.webp",
        "https://img.cofynd.com/images/original/a9e4e4e0027b7403a097d85842847623fede1589.jpg"
      ]
    },
    {
      "id": 68,
      "name": "Avanta Business Centre B Connaught Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/87975dcd252a22fc17f327bc640366e9869c6c48.webp",
        "https://img.cofynd.com/images/latest_images_2024/5af9847ad630e51a8c73cca6eb6fbae6f0dbfc02.webp",
        "https://img.cofynd.com/images/latest_images_2024/01d8ef8cea3a019056c841408118c306c16460c0.webp",
        "https://img.cofynd.com/images/latest_images_2024/bed93a43943e26293dc169f9e0ff61e67c605e53.webp",
        "https://img.cofynd.com/images/latest_images_2024/222774287690fa30c9bc312d048da9b29536cba4.webp"
      ]
    },
    {
      "id": 78,
      "name": "Workingdom B Connaught Place",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹16,999",
      "period": "/ Month",
      "priceFormatted": "₹16,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3855e503ab03112470b336499954d7c7922e0a6e.webp",
        "https://img.cofynd.com/images/latest_images_2024/4fc4a436a006640c4841ef9bd2c79a4fd950164c.webp",
        "https://img.cofynd.com/images/latest_images_2024/efff4918a7ff7678147b754d2956bb078c9ed0aa.webp",
        "https://img.cofynd.com/images/latest_images_2024/9aeb39211befed4a2db631d35e19018fc9c073b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a800a70c10449023aae82eda53fd7c179977383.webp"
      ]
    },
    {
      "id": 87,
      "name": "Avanta Business Centre Connaught Place",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹23,999",
      "period": "/ Month",
      "priceFormatted": "₹23,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/dc875d141e325488882e696a1c7c7a48e018ca39.webp",
        "https://img.cofynd.com/images/latest_images_2024/fe2ac0a198a082e845b14950e172736ca71f52bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/933f05f4ce371cad4896c72b101d4ec1e8c152c6.webp",
        "https://img.cofynd.com/images/latest_images_2024/5838bc421280ab202bb04747fe8cd3538fbc70ef.webp",
        "https://img.cofynd.com/images/latest_images_2024/646eeecd71089cc49cc73fcebe876e3a899b3f52.webp"
      ]
    },
    {
      "id": 96,
      "name": "AltF Connaught Place",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/72d2a8680445427a617d00e404a69f4dc4e5d0d8.webp",
        "https://img.cofynd.com/images/latest_images_2024/fdac9e5676a723cd8b74c37e7598f6b85e7c238f.webp",
        "https://img.cofynd.com/images/latest_images_2024/d81177d2d790f7e82ea2af22ce2ca408395978b1.webp",
        "https://img.cofynd.com/images/latest_images_2024/40902eac0461819bab7d2221e9866c100da58828.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3ac0fbeeeec3d8d6ebb906128e80f606c921f75.webp"
      ]
    },
    {
      "id": 103,
      "name": "Office On Connaught Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ba97270ceb4b08e7f276f788e17b66281aede98a.webp",
        "https://img.cofynd.com/images/latest_images_2024/0259a57a492fc9729bb64f8d17f37b89e104216b.webp",
        "https://img.cofynd.com/images/latest_images_2024/1534334fc93a8639a50386a641f57f350903de44.webp",
        "https://img.cofynd.com/images/latest_images_2024/abc486499c90381a80eede0f02fc8b44cc30b0fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/896f4e4a71e088851b5443c97154bc9254b5f242.webp"
      ]
    },
    {
      "id": 110,
      "name": "Start CoWorks Connaught Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a9326583756eafd4700c9db48861d71b90382eae.webp",
        "https://img.cofynd.com/images/original/dce0e64db5b6aa8623cd44da89d9092c640a0182.jpg",
        "https://img.cofynd.com/images/original/876c90e6934c5ed17f49d309533798bf41a9b39a.jpg",
        "https://img.cofynd.com/images/latest_images_2024/583abb1afbdee568e56b5f054139eee1ae78391d.webp",
        "https://img.cofynd.com/images/original/bc7bd3f646c4c5d411809810bc0c475bf657fa63.jpg"
      ]
    },
    {
      "id": 182,
      "name": "Workingdom Connaught Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6c24de7c545a4db751bd20f1d1e42862a5318fdb.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e0e00bfca414880d2be58026544e865f597af4b.webp",
        "https://img.cofynd.com/images/latest_images_2024/c2ddd4e668d494bce41ccb7748fd627c4c0f7ce2.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d849f6a1d13cce29f49140290ddef3e9e89a783.webp",
        "https://img.cofynd.com/images/latest_images_2024/b46e32e06c1f387db2cbeb886a08e9fa6136e1d0.webp"
      ]
    },
    {
      "id": 183,
      "name": "Cube 8 Connaught Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5408dd7258dcb26ead87cefba9c1742211684577.webp",
        "https://img.cofynd.com/images/latest_images_2024/fc14267447b89900c6e75a52e35c874ec9d590fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/375bf43ee7e1f86794e11cf5aa07ab537d5fe7f9.webp",
        "https://img.cofynd.com/images/latest_images_2024/aee600d6e9aec9254955b91376fcc2e4152c9329.webp",
        "https://img.cofynd.com/images/latest_images_2024/6924252d18e6b43eeedf9492b3cfbee563652499.webp"
      ]
    },
    {
      "id": 184,
      "name": "Skootr Connaught Place",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹26,999",
      "period": "/ Month",
      "priceFormatted": "₹26,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d38037d0e7fcce087b9de85b791562c2c375b44c.webp",
        "https://img.cofynd.com/images/latest_images_2024/dc82c3d6020e92cef7b242308aea3be2dbee5803.webp",
        "https://img.cofynd.com/images/latest_images_2024/91a3ac75e5e39d2cdf5505ffb1e819afc0f2ae42.webp",
        "https://img.cofynd.com/images/latest_images_2024/c28810a0aaf699f0c5277724cae6cf361c843736.webp",
        "https://img.cofynd.com/images/latest_images_2024/e723e322d6f8b7235bcd651626370151709906c1.webp"
      ]
    },
    {
      "id": 185,
      "name": "Innov8 B Connaught Place",
      "badge": "Verified",
      "rating": null,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹13,499",
      "period": "/ Month",
      "priceFormatted": "₹13,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/66ca33ce68992b9021d7c97dabd603b6db476534.webp",
        "https://img.cofynd.com/images/latest_images_2024/87a6e64e96357d712ad27b3a5078b7ec2b01c3e2.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cba3cbfc2411aff3664a85a52680c40ac05559e.webp",
        "https://img.cofynd.com/images/latest_images_2024/35fdc383d2eecca63e4641b705df9dd952ab21e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/3938c9069aa4f5ee050dfc7b62b2db49e66a996b.webp"
      ]
    },
    {
      "id": 186,
      "name": "Pinnacle Spaces Connaught Place",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹16,999",
      "period": "/ Month",
      "priceFormatted": "₹16,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f74b5bc79c407ab44916ea9cfb1973daab8abc31.webp",
        "https://img.cofynd.com/images/latest_images_2024/1aba3b87271326d6e01b9d0a1b2554ce652217db.webp",
        "https://img.cofynd.com/images/latest_images_2024/58dc87fd09efccd205b008f60d132d24e4994028.webp",
        "https://img.cofynd.com/images/latest_images_2024/f80a2e523726dc6e987f6b71ad874c60f8906e1b.webp"
      ]
    },
    {
      "id": 187,
      "name": "ConnectHQ Connaught Place",
      "badge": "Popular",
      "rating": 4,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/25e8fa343c41a6586883a867c1788109f0cb05ff.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3c19b11c8b9449b41cf4b2c5eb15f2848c148b8.webp",
        "https://img.cofynd.com/images/latest_images_2024/875b48d71e8dac37099e89789a5dafbfb184be53.webp",
        "https://img.cofynd.com/images/latest_images_2024/a1235c6d93058719910f2bc651d994b276da26a5.webp",
        "https://img.cofynd.com/images/latest_images_2024/5545e75a11debd3bb804bc1bc55391ef86279cdf.webp"
      ]
    },
    {
      "id": 188,
      "name": "Onward Workspaces Connaught Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹42,999",
      "period": "/ Month",
      "priceFormatted": "₹42,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3682f2f0b184315c519a8589a5317df6912c8ea8.webp",
        "https://img.cofynd.com/images/latest_images_2024/783e91f3d42c59109389c09ff290b4b1763b78d9.webp",
        "https://img.cofynd.com/images/latest_images_2024/7b7625cc873b31746230dc8b84b7736146e09ed2.webp",
        "https://img.cofynd.com/images/latest_images_2024/7919687cf84bf76a81731bb1d328823a3698cf7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/44e659ee0deea18849009576675ebf0db06bb623.webp"
      ]
    },
    {
      "id": 189,
      "name": "Nukleus Shivaji Stadium Connaught Place",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Connaught Place",
      "location": "Connaught Place, Delhi",
      "price": "₹21,999",
      "period": "/ Month",
      "priceFormatted": "₹21,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cbd90126476ec3c13dff799d24e0283950db1fdf.webp",
        "https://img.cofynd.com/images/latest_images_2024/9adbbd255300a5e257ef6c34a413695c63b28053.webp",
        "https://img.cofynd.com/images/latest_images_2024/209939aeca3389ce325dcef0e23d170556f67cee.webp",
        "https://img.cofynd.com/images/latest_images_2024/e46c5af922372d53641658a4558d1a2c425fa3c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/f1912d23bbf6cd1d0dfa68efdb9d81714d83a8c5.webp"
      ]
    }
  ],
  "Malviya Nagar": [
    {
      "id": 2,
      "name": "Brain on Rent Malviya Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Malviya Nagar",
      "location": "Malviya Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8bdde2aed9f9a98237f93dde3d9e8e42751d3b07.webp",
        "https://img.cofynd.com/images/latest_images_2024/959a552921e1db7e6468e4683d4f0f47c71d57b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/19065903dd7ec1a7fcc4bcf217e0fb38266266bd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e55c7efa5ce2a3efa1d88ab1bf0a443d550b4b07.webp",
        "https://img.cofynd.com/images/latest_images_2024/56828e01a10a469e9caeb80bab77d030112f5bc0.webp"
      ]
    },
    {
      "id": 26,
      "name": "ZO Accelerator Space Malviya Nagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Malviya Nagar",
      "location": "Malviya Nagar, Delhi",
      "price": "₹26,999",
      "period": "/ Month",
      "priceFormatted": "₹26,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b9fd9e95b2ba3fad7daa975a1a117fe431d2eccf.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff5953da805dfcfd72b3d47f18a527eb6d946ef2.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1032bf42254ab9ba6c43faebac8e3f083631e0e.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cec87af27b7624d3d84fde1bcdc1682bc0cb658.webp",
        "https://img.cofynd.com/images/latest_images_2024/a22aa36effc8c0f25d1d1ce35935f0bcf96f83d8.webp"
      ]
    },
    {
      "id": 2,
      "name": "Brain on Rent Malviya Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Malviya Nagar",
      "location": "Malviya Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8bdde2aed9f9a98237f93dde3d9e8e42751d3b07.webp",
        "https://img.cofynd.com/images/latest_images_2024/959a552921e1db7e6468e4683d4f0f47c71d57b0.webp",
        "https://img.cofynd.com/images/latest_images_2024/19065903dd7ec1a7fcc4bcf217e0fb38266266bd.webp",
        "https://img.cofynd.com/images/latest_images_2024/e55c7efa5ce2a3efa1d88ab1bf0a443d550b4b07.webp",
        "https://img.cofynd.com/images/latest_images_2024/56828e01a10a469e9caeb80bab77d030112f5bc0.webp"
      ]
    },
    {
      "id": 26,
      "name": "ZO Accelerator Space Malviya Nagar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Malviya Nagar",
      "location": "Malviya Nagar, Delhi",
      "price": "₹26,999",
      "period": "/ Month",
      "priceFormatted": "₹26,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b9fd9e95b2ba3fad7daa975a1a117fe431d2eccf.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff5953da805dfcfd72b3d47f18a527eb6d946ef2.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1032bf42254ab9ba6c43faebac8e3f083631e0e.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cec87af27b7624d3d84fde1bcdc1682bc0cb658.webp",
        "https://img.cofynd.com/images/latest_images_2024/a22aa36effc8c0f25d1d1ce35935f0bcf96f83d8.webp"
      ]
    },
    {
      "id": 71,
      "name": "Innov8 F Saket",
      "badge": "Premium",
      "rating": 5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/57e07408a173ed77de9656cd74427df6c7c99853.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3fdb9612ea4d9d70b18d19a32a04dfaeed6fbc9.webp",
        "https://img.cofynd.com/images/original/beb1ad85552a779f2cfe990e4895f5a6d8894b30.jpg",
        "https://img.cofynd.com/images/latest_images_2024/e21aa6300b77a93e67a38f0e92b432ad910f5213.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3b35608d1a40cb38ae88324f2f2ded057d622cf.webp"
      ]
    },
    {
      "id": 29,
      "name": "Nukleus Saket",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35e71807fc70747e462901ef89e0554c28ade0b5.webp",
        "https://img.cofynd.com/images/original/4379a9318c87cbab86b09b89dc393447be5cac23.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b9da28c30fa72483039b10b1c8f0114eddf8e1d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/8d003d78149bfaba07478bbf43da10a7c5e07037.webp",
        "https://img.cofynd.com/images/latest_images_2024/6d1e7fce37362f1f16b81e0b38ad45b544223171.webp"
      ]
    },
    {
      "id": 143,
      "name": "91Springboard Prius Platinum Saket",
      "badge": "Verified",
      "rating": 4.6,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹22,999",
      "period": "/ Month",
      "priceFormatted": "₹22,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a354802e6fb5907790a540d413a7a6d786c95374.webp",
        "https://img.cofynd.com/images/latest_images_2024/3d7b3aafa737465bb7c778d8c22cc7b50aa4da17.webp",
        "https://img.cofynd.com/images/latest_images_2024/46976533ddaaddc6024bfc1ce5edb18c3956df4c.webp",
        "https://img.cofynd.com/images/latest_images_2024/2356af20d5beb140a39833bc15b297cadd2a9c5e.webp",
        "https://img.cofynd.com/images/latest_images_2024/40f924d21c971bbb8edaee905df5493fd5ba85d8.webp"
      ]
    },
    {
      "id": 47,
      "name": "Avanta Business Centre Saket",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹23,999",
      "period": "/ Month",
      "priceFormatted": "₹23,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b5d5b1fcd8fa3fa1ddaf96979873e5c4151c5e45.webp",
        "https://img.cofynd.com/images/latest_images_2024/c37896d88fe30704a584243b7cae45ea3516455e.webp",
        "https://img.cofynd.com/images/latest_images_2024/c6b32a0c09fcdbea76e23a1678bbef7fde6c879c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba21b587fae8789011568bebd15b2132f909f1f8.webp",
        "https://img.cofynd.com/images/latest_images_2024/fd051dff12447570c11f1a19638099dfe7936092.webp"
      ]
    },
    {
      "id": 5,
      "name": "Innov8 Saket",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/27f5e88180e12374e142f15c12f484eadad9465b.jpg",
        "https://img.cofynd.com/images/latest_images_2024/d1fde080420d3616ba82ee7758538e3f79f5ffa5.webp",
        "https://img.cofynd.com/images/original/f367c711906725085d5f923064725ea2d9976de8.jpg",
        "https://img.cofynd.com/images/original/5b1d19348e440a4fe0b0f7566cf8509d4efc2bca.jpg",
        "https://img.cofynd.com/images/original/b4e185468b2ad2276a995a8e9436f75e5565cd17.jpg"
      ]
    },
    {
      "id": 146,
      "name": "ThinkValley Saket",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹16,999",
      "period": "/ Month",
      "priceFormatted": "₹16,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b8006359de4b038a932dc93abaeadc111c8f5103.webp",
        "https://img.cofynd.com/images/latest_images_2024/5f69aee02de792386d3da14bc314744fcaef0ad6.webp",
        "https://img.cofynd.com/images/latest_images_2024/bf4d8811f196a59a5e52e3803a475302334ca6af.webp",
        "https://img.cofynd.com/images/latest_images_2024/a2386255b0167aafba010b42238a355fbba1e6d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b46a3f417a2eec1b2d2a59e57b56f138afcefb6a.webp"
      ]
    },
    {
      "id": 190,
      "name": "Spacetime Saket",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a0a8ffe99e53280ca9cecc2024975d56f75a9b64.webp",
        "https://img.cofynd.com/images/latest_images_2024/098f68a0133d8dde6de73331b214a5b12d2268f0.webp",
        "https://img.cofynd.com/images/latest_images_2024/fd29a724cbba291a4f6e0a376c3cdfb018b7157f.webp",
        "https://img.cofynd.com/images/latest_images_2024/946ba701996f83289fe768373bf75bee50a41f9a.webp",
        "https://img.cofynd.com/images/latest_images_2024/d7f90fea3ec17e6e98bebd790ecd1c3fb3c0f1bb.webp"
      ]
    }
  ],
  "Aerocity": [
    {
      "id": 3,
      "name": "Innov8 Aerocity",
      "badge": "Premium",
      "rating": 5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹22,999",
      "period": "/ Month",
      "priceFormatted": "₹22,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/225fa372fcf6fecc9407ca9c51b3e86ee5f630ae.png",
        "https://img.cofynd.com/images/latest_images_2024/08397a9de5c4e0179f7bf8faeeda85111d70fc88.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3efb3c5a4792f90ffc04bef1df04df6d5708ab8.webp",
        "https://img.cofynd.com/images/latest_images_2024/502c1c54e34ece50181bdeae8cfa4e5e6a46381a.webp",
        "https://img.cofynd.com/images/latest_images_2024/02a6b73994ab73342352da1e4febc3c63da1f288.webp"
      ]
    },
    {
      "id": 27,
      "name": "Cowrks Aerocity",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1a7f4c7aff2f85e2e05fa59f296c28724f658f89.jpg",
        "https://img.cofynd.com/images/original/649e26bc93b5873f979507d9d094c2e2ef2135c1.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a45ba13a558e2bd4e7d88fd72c9413ebe7caa9c3.webp",
        "https://img.cofynd.com/images/original/3276f68ed207fa1c81a40f7709c3c0e3f29558ae.jpg",
        "https://img.cofynd.com/images/original/0c6f16043d233b60a0773f2e2fe070cf6afa2d03.jpg"
      ]
    },
    {
      "id": 45,
      "name": "Atelier ( Cowrks ) Aerocity",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹39,999",
      "period": "/ Month",
      "priceFormatted": "₹39,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3c1165b62dcb8d95b8d75275332cc901c537d835.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a820d7d9ba842b9c396d8a500ec63b8268892c2.webp",
        "https://img.cofynd.com/images/latest_images_2024/9a327ae4d6f332c7f26296022488fb0ef0234438.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a464085efee6b7a38e4f46ee738e932c8c47a52.webp",
        "https://img.cofynd.com/images/latest_images_2024/a33e73238068a924018616bdf2e92d8cf9197807.webp"
      ]
    },
    {
      "id": 59,
      "name": "Wework Aerocity",
      "badge": "Premium",
      "rating": 5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹34,999",
      "period": "/ Month",
      "priceFormatted": "₹34,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0922339e479ccbf8470fa0d3ffd8ff89c248c5f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/6423fbe65bfb1182dad9ca11a4c0b6c3a6ab2d01.webp",
        "https://img.cofynd.com/images/latest_images_2024/4619dab8d16fd3e51efb434365f6884e7da52e40.webp",
        "https://img.cofynd.com/images/latest_images_2024/5048b380def3d77e287732cd32bc779bb697bee2.webp",
        "https://img.cofynd.com/images/latest_images_2024/844dd098754317f232933ac4d56af62b4013d437.webp"
      ]
    },
    {
      "id": 69,
      "name": "The Executive Centre Aerocity",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹41,999",
      "period": "/ Month",
      "priceFormatted": "₹41,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1698b6cdb65e213d9d415cc281fca2e5bdd72233.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd459eadf0158570ed18692e317ddfaf10cf3e12.webp",
        "https://img.cofynd.com/images/latest_images_2024/16534b892da774f6b6da6261bdd4dba772fe73db.webp",
        "https://img.cofynd.com/images/latest_images_2024/76af7296283445ae8aafb9e9a5b9593f05153e55.webp",
        "https://img.cofynd.com/images/latest_images_2024/35cde1abb4445baeb9742548abb4e0904cd75689.webp"
      ]
    },
    {
      "id": 79,
      "name": "Synq.work Aerocity",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹31,999",
      "period": "/ Month",
      "priceFormatted": "₹31,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/596d2a213767a81c94b744a221e1b606b479f7cc.webp",
        "https://img.cofynd.com/images/latest_images_2024/419fd3c8ad2dc0596888672f70a65f1a8bffe686.webp",
        "https://img.cofynd.com/images/latest_images_2024/b97a9bdec1a487ed174c28125399699658a0856a.webp",
        "https://img.cofynd.com/images/latest_images_2024/4552535836cc2e2e011933d15ead091f4df5accb.webp",
        "https://img.cofynd.com/images/latest_images_2024/82a93b7ae39bc5906d4d90a519c2a9f0aba88fc6.webp"
      ]
    },
    {
      "id": 88,
      "name": "Table Space Worldmark Aerocity",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹49,999",
      "period": "/ Month",
      "priceFormatted": "₹49,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c6b5d4105887b4889f0dcfde16aad54d6ba29505.webp",
        "https://img.cofynd.com/images/latest_images_2024/fb2442863e609c6a9afa1e96ca5af79b152bf4e1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2dac3db219be5ba2a4ed17570035c4d04e2f6244.webp",
        "https://img.cofynd.com/images/latest_images_2024/6cc8056fba91ee7888961adb62f9e959db0e65fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/2c4d1de16d64691ba83aa9b56cb5671d15fd8e5d.webp"
      ]
    },
    {
      "id": 3,
      "name": "Innov8 Aerocity",
      "badge": "Premium",
      "rating": 5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹22,999",
      "period": "/ Month",
      "priceFormatted": "₹22,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/225fa372fcf6fecc9407ca9c51b3e86ee5f630ae.png",
        "https://img.cofynd.com/images/latest_images_2024/08397a9de5c4e0179f7bf8faeeda85111d70fc88.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3efb3c5a4792f90ffc04bef1df04df6d5708ab8.webp",
        "https://img.cofynd.com/images/latest_images_2024/502c1c54e34ece50181bdeae8cfa4e5e6a46381a.webp",
        "https://img.cofynd.com/images/latest_images_2024/02a6b73994ab73342352da1e4febc3c63da1f288.webp"
      ]
    },
    {
      "id": 69,
      "name": "The Executive Centre Aerocity",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹41,999",
      "period": "/ Month",
      "priceFormatted": "₹41,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1698b6cdb65e213d9d415cc281fca2e5bdd72233.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd459eadf0158570ed18692e317ddfaf10cf3e12.webp",
        "https://img.cofynd.com/images/latest_images_2024/16534b892da774f6b6da6261bdd4dba772fe73db.webp",
        "https://img.cofynd.com/images/latest_images_2024/76af7296283445ae8aafb9e9a5b9593f05153e55.webp",
        "https://img.cofynd.com/images/latest_images_2024/35cde1abb4445baeb9742548abb4e0904cd75689.webp"
      ]
    },
    {
      "id": 27,
      "name": "Cowrks Aerocity",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/1a7f4c7aff2f85e2e05fa59f296c28724f658f89.jpg",
        "https://img.cofynd.com/images/original/649e26bc93b5873f979507d9d094c2e2ef2135c1.jpg",
        "https://img.cofynd.com/images/latest_images_2024/a45ba13a558e2bd4e7d88fd72c9413ebe7caa9c3.webp",
        "https://img.cofynd.com/images/original/3276f68ed207fa1c81a40f7709c3c0e3f29558ae.jpg",
        "https://img.cofynd.com/images/original/0c6f16043d233b60a0773f2e2fe070cf6afa2d03.jpg"
      ]
    },
    {
      "id": 191,
      "name": "Awfis Ambience Mall Cyber City",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Cyber City",
      "location": "Cyber City, Delhi",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ca33925bfadb653441c1c98512db11e8496913ff.webp",
        "https://img.cofynd.com/images/latest_images_2024/82dc3985a12802f5257e3242d7b698174ce7461d.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f7ae804b6d0d5a0ea41145a133040990555d75c.webp",
        "https://img.cofynd.com/images/latest_images_2024/40983a0c1f36b7ddba49e43d65f792e0493a6da1.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ad5ca6d5ddf10919472cc1341cab90646640a01.webp"
      ]
    },
    {
      "id": 192,
      "name": "IREP Workspaces Iconic Quattro Udyog Vihar",
      "badge": "Verified",
      "rating": 4,
      "area": "Udyog Vihar",
      "location": "Udyog Vihar, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f218849992c5519dc5f13f3731946fa547c76203.webp",
        "https://img.cofynd.com/images/latest_images_2024/f869616f893d648ea07d13ff2fd7b2ea168b897b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5469e79b63917c33ffc836acc895e757f1b879be.webp",
        "https://img.cofynd.com/images/latest_images_2024/55792afb390e9209d20388ca71075282dead4246.webp",
        "https://img.cofynd.com/images/latest_images_2024/c9f6dbcc76f1d7fc54de741adccaa2e894b9bc27.webp"
      ]
    },
    {
      "id": 193,
      "name": "The Executive Center DLF Downtown DLF Cyber City",
      "badge": "Premium",
      "rating": 5,
      "area": "DLF Cyber City",
      "location": "DLF Cyber City, Delhi",
      "price": "₹59,999",
      "period": "/ Month",
      "priceFormatted": "₹59,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0f418830f9b2b71f4d500acc7ebbcbfc0dd73e18.webp",
        "https://img.cofynd.com/images/latest_images_2024/53f73f3d4c4fa4eb6515c4ec40ec042d2e30be4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e01224f9b0972c129f0aaeae816430a560ea06d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2bd002a1553ffd64a5a974225f5b65bb5bb4a8e6.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ced7a77e67f5f5287571a27aad04844cefcfe52.webp"
      ]
    },
    {
      "id": 194,
      "name": "Mooz Coworking Sector 24",
      "badge": "Premium",
      "rating": 4.3,
      "area": "Sector 24",
      "location": "Sector 24, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c70dc9dac716ca3b4762a958716c4eb1aba106bd.webp",
        "https://img.cofynd.com/images/latest_images_2024/85dcf736558203f395c318bcfb80ae243b96385e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7e9c4acfc58b590047574b8288ca082000670ba.webp",
        "https://img.cofynd.com/images/latest_images_2024/b9459c913183fe7428fd69bb063ffc4ace3cde76.webp",
        "https://img.cofynd.com/images/latest_images_2024/1134ece2f74e3cda16feebd179cec62a5e69399a.webp"
      ]
    }
  ],
  "Mohan Cooperative": [
    {
      "id": 4,
      "name": "91Springboard Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e7105e6cb57568e3f926a7910ab7a455db9a0df5.webp",
        "https://img.cofynd.com/images/latest_images_2024/fb8f9a274d7c95256b749fa63ad766517cbeab2d.webp",
        "https://img.cofynd.com/images/latest_images_2024/851b6c204c5f0c91c03354dc78b5b37ba1be630d.webp",
        "https://img.cofynd.com/images/latest_images_2024/a04aa3c7f8154daf914be0447c9cd90dc03e6a85.webp",
        "https://img.cofynd.com/images/latest_images_2024/6d6e45cf34257d65402406dce7c3e9f8b1c43bb8.webp"
      ]
    },
    {
      "id": 28,
      "name": "AltF Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e58dd1419bb46d2b289917b8706572e42a87ed2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/a9a7736ce455ca89adc9658a336c58dd5236cfac.webp",
        "https://img.cofynd.com/images/latest_images_2024/ddc33809f0c3fbb5ff3fd72265d7f2bf9e0127ed.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8ce523c3b5dbd5493a0d2ff6839a2370c53ce89.webp",
        "https://img.cofynd.com/images/latest_images_2024/15aa6b54ce0b30bd0433905e3dbf32175815fc6c.webp"
      ]
    },
    {
      "id": 46,
      "name": "Awfis Mohan Cooperative",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/516979283fcf6630506fb43a0f734ac2c9309173.webp",
        "https://img.cofynd.com/images/latest_images_2024/9e1c532eb3bc3eca79a4f7fcfddbbfe79ea46e5a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a1dd97990d6086b7075383fe46f2e968c4592fe.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b634512ac1560fd2307fda4a8d804b49e813c3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b2bddf08063d24c37475b1f8ae3af4b743a2420.webp"
      ]
    },
    {
      "id": 60,
      "name": "The Office Pass Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/a5c8a2b7c2f6308b1cffcc57e3be19593548e902.jpg",
        "https://img.cofynd.com/images/latest_images_2024/d67c593fcb39d83706e6b2b317e112b353ce03e4.webp",
        "https://img.cofynd.com/images/original/964a84c0caa52e59e93673e9acb7252ac743210e.jpg",
        "https://img.cofynd.com/images/original/2ebcb5d0945896cf1e84fec79fa0605ca22956fc.jpg",
        "https://img.cofynd.com/images/latest_images_2024/7f72584086b36bb50d189210da996571f1a87423.webp"
      ]
    },
    {
      "id": 70,
      "name": "Onward Workspaces Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f59b2685a91be84e7e12c20cbf52575146f62d71.webp",
        "https://img.cofynd.com/images/latest_images_2024/d269304b4a0fc8631b45f0b16ddd9117ec0553e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/ac3c4f801b2bdee19a7bab858941b39ae83acb2a.webp",
        "https://img.cofynd.com/images/latest_images_2024/02890a6b891f8c57b22d6a156ba0b867e66bb024.webp",
        "https://img.cofynd.com/images/latest_images_2024/b98cc5de6670141b4a35a3cb80e5247933158e91.webp"
      ]
    },
    {
      "id": 80,
      "name": "Awfis B Mohan Cooperative",
      "badge": "Popular",
      "rating": 4,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹7,799",
      "period": "/ Month",
      "priceFormatted": "₹7,799 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e36a4121b4458e813455ca28e44bb7802d53a509.webp",
        "https://img.cofynd.com/images/original/27dd5a04cfbb95c18aa8a1d14619014583f69b31.jpg",
        "https://img.cofynd.com/images/latest_images_2024/64b20d87fbcb7a6aa748f78c6cc1b568ebba1623.webp",
        "https://img.cofynd.com/images/original/618912669bbc9749a5dd5ae4a8c21240b51f7368.jpg",
        "https://img.cofynd.com/images/original/1efa65e0f45af954e2c3033da8b0d8ebf51802cb.jpg"
      ]
    },
    {
      "id": 89,
      "name": "Spacetime Mohan Cooperative",
      "badge": "Popular",
      "rating": 4,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹11,499",
      "period": "/ Month",
      "priceFormatted": "₹11,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a80ffe7c6ab6b17b5eeca358ce8beb2eaaf64034.webp",
        "https://img.cofynd.com/images/latest_images_2024/63062879c4d7d73ec3b9e6a4e1f70312f4a9ab0b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d8c7b2a1b9c7d5cbe1c12b6e02f1769eb815ed9.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb6cda179a69009673dcd885544bc581a8e0f6fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd9c130caf6f6ae6d9f747c0e30b915d0f908e58.webp"
      ]
    },
    {
      "id": 97,
      "name": "Hub Hive 11 Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/33955ad16fdaf70b2b68eef882c236ad7cbd01fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/575ea6e47446ec34f27e7b1da72803f2a4db849b.webp",
        "https://img.cofynd.com/images/latest_images_2024/046adfc4fe5833cae689d3b82c7fbcfd8344156f.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0a693f480bca86f99cef60d5cae10588d77fe36.webp",
        "https://img.cofynd.com/images/latest_images_2024/46f38f4e661db55c40db1a30a45701eaf898e586.webp"
      ]
    },
    {
      "id": 104,
      "name": "Cycowork Mohan Cooperative",
      "badge": "Special Offer",
      "rating": 4.3,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e6364bebff6b93cdd7d3095a0908298f42fe0773.webp",
        "https://img.cofynd.com/images/latest_images_2024/58527b543f707d4d684a0cc166c1e33675694f8b.webp",
        "https://img.cofynd.com/images/latest_images_2024/753c5244859ddadf551d6c5e6eb995f7a0e78b2a.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c032cb38c160724ff28341c3415bcfbbc84bbea.webp",
        "https://img.cofynd.com/images/latest_images_2024/930f3d22ef67a13175f64df9d7f84a463d5d39d4.webp"
      ]
    },
    {
      "id": 111,
      "name": "Hashtag Co-working Mohan Cooperative",
      "badge": "Special Offer",
      "rating": 4.5,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e40bf8d46d7a5bc1745b2d0d4047948e04cda055.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a9a6b65280cb4b8e890f3599dab21d0ac64645e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f6cb5472258425f629123c4a8c89fba2888f10b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a055e87e60dc31598f481ff1f282286709e7842.webp",
        "https://img.cofynd.com/images/latest_images_2024/6b20b80e81a4014070026d6f85c70a361ac14422.webp"
      ]
    },
    {
      "id": 195,
      "name": "Kiteworx Mathura Road",
      "badge": "Popular",
      "rating": 4,
      "area": "Mathura Road",
      "location": "Mathura Road, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e995450fef1b4194b9a2f6431d67d755ea426646.webp",
        "https://img.cofynd.com/images/latest_images_2024/80df948b9454c12f658e6c2c81d3fd90e05341fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/8df4b86b0f678552deff593fec488aedced0d21a.webp",
        "https://img.cofynd.com/images/latest_images_2024/8508ee32bdef14d78f0b5ffc14d2191787dd8199.webp",
        "https://img.cofynd.com/images/latest_images_2024/14a4493a4d5265c3468be0fa661513d04a62cef8.webp"
      ]
    }
  ],
  "Saket": [
    {
      "id": 5,
      "name": "Innov8 Saket",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/27f5e88180e12374e142f15c12f484eadad9465b.jpg",
        "https://img.cofynd.com/images/latest_images_2024/d1fde080420d3616ba82ee7758538e3f79f5ffa5.webp",
        "https://img.cofynd.com/images/original/f367c711906725085d5f923064725ea2d9976de8.jpg",
        "https://img.cofynd.com/images/original/5b1d19348e440a4fe0b0f7566cf8509d4efc2bca.jpg",
        "https://img.cofynd.com/images/original/b4e185468b2ad2276a995a8e9436f75e5565cd17.jpg"
      ]
    },
    {
      "id": 29,
      "name": "Nukleus Saket",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35e71807fc70747e462901ef89e0554c28ade0b5.webp",
        "https://img.cofynd.com/images/original/4379a9318c87cbab86b09b89dc393447be5cac23.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b9da28c30fa72483039b10b1c8f0114eddf8e1d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/8d003d78149bfaba07478bbf43da10a7c5e07037.webp",
        "https://img.cofynd.com/images/latest_images_2024/6d1e7fce37362f1f16b81e0b38ad45b544223171.webp"
      ]
    },
    {
      "id": 47,
      "name": "Avanta Business Centre Saket",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹23,999",
      "period": "/ Month",
      "priceFormatted": "₹23,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b5d5b1fcd8fa3fa1ddaf96979873e5c4151c5e45.webp",
        "https://img.cofynd.com/images/latest_images_2024/c37896d88fe30704a584243b7cae45ea3516455e.webp",
        "https://img.cofynd.com/images/latest_images_2024/c6b32a0c09fcdbea76e23a1678bbef7fde6c879c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba21b587fae8789011568bebd15b2132f909f1f8.webp",
        "https://img.cofynd.com/images/latest_images_2024/fd051dff12447570c11f1a19638099dfe7936092.webp"
      ]
    },
    {
      "id": 61,
      "name": "Collative Saket",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹26,999",
      "period": "/ Month",
      "priceFormatted": "₹26,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/974952fdc78d867cc541c58817cb94ec110c353e.webp",
        "https://img.cofynd.com/images/latest_images_2024/bf7eccb76f02a6d0ffa618a33ee258b87344ee28.webp",
        "https://img.cofynd.com/images/latest_images_2024/b556138787d68ac71f0d74aec0539844ca1b8835.webp",
        "https://img.cofynd.com/images/latest_images_2024/657d1094acb75b6813d84ded0274db4eb9257477.webp",
        "https://img.cofynd.com/images/latest_images_2024/ccd2b47423f8c4d7c02667b8202f6ed52d9840e3.webp"
      ]
    },
    {
      "id": 71,
      "name": "Innov8 F Saket",
      "badge": "Premium",
      "rating": 5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/57e07408a173ed77de9656cd74427df6c7c99853.webp",
        "https://img.cofynd.com/images/latest_images_2024/d3fdb9612ea4d9d70b18d19a32a04dfaeed6fbc9.webp",
        "https://img.cofynd.com/images/original/beb1ad85552a779f2cfe990e4895f5a6d8894b30.jpg",
        "https://img.cofynd.com/images/latest_images_2024/e21aa6300b77a93e67a38f0e92b432ad910f5213.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3b35608d1a40cb38ae88324f2f2ded057d622cf.webp"
      ]
    },
    {
      "id": 81,
      "name": "Buzz by Spacetime Saket",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d8d093d87e35c6b8e799b9455c1c6472723676eb.webp",
        "https://img.cofynd.com/images/latest_images_2024/996dfdac81c1edcdf39f5e108374c78387d5f0cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d85d1e749bc449a1c185004c559fd290ef4c3c6.webp",
        "https://img.cofynd.com/images/latest_images_2024/4ce20f7a4303e867a6b569ebe186838bf7a5487f.webp",
        "https://img.cofynd.com/images/latest_images_2024/096c2bf7314cb09344afceda547d8d3176de513e.webp"
      ]
    },
    {
      "id": 90,
      "name": "Flexihub Saket",
      "badge": "Special Offer",
      "rating": 4.4,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/db42969655aad3aee41a489420f82488522bb56c.webp",
        "https://img.cofynd.com/images/latest_images_2024/29a38d799445b33fe90c88ff38767f84314ba801.webp",
        "https://img.cofynd.com/images/latest_images_2024/61e684fe9651f61d79b2a4ee93c01343fc0bd202.webp",
        "https://img.cofynd.com/images/original/112c8311ed5b0fc93efbd3c1eb32a062317cb974.jpg",
        "https://img.cofynd.com/images/original/1c34108ca3448dbdb9625f6905a63321152f22b8.jpg"
      ]
    },
    {
      "id": 98,
      "name": "ZO Space 274 Saket",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8d8331d840e986a7855b8694352fce01aa771d2a.webp",
        "https://img.cofynd.com/images/latest_images_2024/8d8b74aaab5e97e9303f3ca8fbc1d5a47b83bbbf.webp",
        "https://img.cofynd.com/images/latest_images_2024/40da7d595f36458ccc3df855c2f4f14b89c80fbb.webp",
        "https://img.cofynd.com/images/latest_images_2024/716d758ba420b9dee4774eaa8194474dfb3f9b55.webp",
        "https://img.cofynd.com/images/latest_images_2024/bf72a630e48351dc3d2c7640abe1f7a229cb6b0c.webp"
      ]
    },
    {
      "id": 105,
      "name": "The Executive Centre Saket",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹59,999",
      "period": "/ Month",
      "priceFormatted": "₹59,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d58e1875b6bbb951a70be848d450ac26e2275b10.webp",
        "https://img.cofynd.com/images/latest_images_2024/f528a233ffe8f03eee0099f5cef65696f73d52db.webp",
        "https://img.cofynd.com/images/latest_images_2024/20fb3d23189d45ba8595a19579f79081f50b892d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d85cdaaf2dde3a1283b5e222b8fab92c0d44fd1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/06c37aeb91c8d6a0c80bed37d3c6e0a0f294c0fd.webp"
      ]
    },
    {
      "id": 112,
      "name": "Spacetime Saket",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fde6dd02beeb91f75986a03bc4daa55204f3aca0.jpg",
        "https://img.cofynd.com/images/original/1ca7a03a383f0bf510f18248c576a1cc9ff5ef53.jpg",
        "https://img.cofynd.com/images/latest_images_2024/2f630829b7e47e3ae615edf8f84d6af1e9cb722b.webp",
        "https://img.cofynd.com/images/original/3e9582df9bbc7eb643f5fe6d4b606f6a125c42e4.jpg",
        "https://img.cofynd.com/images/original/1d593a3fee2192697a59c3cd8c3f7237754f49ca.jpg"
      ]
    }
  ],
  "Okhla": [
    {
      "id": 6,
      "name": "Innov8 Okhla",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5f74935c4b0a817093407bc53e07940acf739c19.webp",
        "https://img.cofynd.com/images/latest_images_2024/0706d4d28b0a1b2bcca166593b72b32c0c27d262.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba15c781087be78067819828a2e67e6ed1cebc99.webp",
        "https://img.cofynd.com/images/latest_images_2024/431b097dd6b50aadd15da5ac3e04095b68c17ccf.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8c664be23bbe5fd7f06fe7ed7a0da1663f6c353.webp"
      ]
    },
    {
      "id": 30,
      "name": "AltF Okhla",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/16a8d45bab4842b189bbf8e0023d5bd1aac17f8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e384da52625e62969a6d43a2399545a6d7e5593.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e56f0f71380fb14ef1abff2b85bbe8706096aa2.webp",
        "https://img.cofynd.com/images/latest_images_2024/a6923d673b1c5fff1c26875ae4b412f1c9039a1f.webp",
        "https://img.cofynd.com/images/latest_images_2024/48d323d90e25a59421cba1c06db443826bb20418.webp"
      ]
    },
    {
      "id": 48,
      "name": "Hub And Oak Okhla",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1034e0bffa28144b5b844efdb9d9e9e28d8c6858.webp",
        "https://img.cofynd.com/images/latest_images_2024/81158c108ad0d35b167d6b90512d6e1386d03f8e.webp",
        "https://img.cofynd.com/images/latest_images_2024/5183edd99c9308c9ed8b3a7d7d820e9fca4620bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/938a858dafe40ccad793bcb96efa6617d01e92a0.webp",
        "https://img.cofynd.com/images/latest_images_2024/fcc1180ca064595d59c05c3f5dd477de7965ce36.webp"
      ]
    },
    {
      "id": 62,
      "name": "Onward Workspaces ||| Okhla",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0bd86160e9d0fb71cf18203a34b865dc531c93dc.webp",
        "https://img.cofynd.com/images/latest_images_2024/ad212673b3712e37f28c0d35f06c6f63226f1928.webp",
        "https://img.cofynd.com/images/latest_images_2024/0dabea3071d6f1a9f35cb64882fa09beffc8dee1.webp",
        "https://img.cofynd.com/images/latest_images_2024/bf9fb68cd19f3464c89f88ae0c893c9ec2992a04.webp",
        "https://img.cofynd.com/images/latest_images_2024/60c534a7442fb77e6a39ebfc4d415b7da4637f0a.webp"
      ]
    },
    {
      "id": 72,
      "name": "Desker CoWorking Okhla",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fcfa4bc0c58227899bd68429afb2f383118a60d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/4175f56b1d953c7b7f145b6b1c907afd96b635ef.webp",
        "https://img.cofynd.com/images/original/0b854c1d5390486ddc115467a193431b3a436258.jpg",
        "https://img.cofynd.com/images/latest_images_2024/8e6f8c5c974579be88abe57ef83a5e21122f4733.webp",
        "https://img.cofynd.com/images/latest_images_2024/20f0e74069876ca63b02f2014f40f8697ceaf487.webp"
      ]
    },
    {
      "id": 82,
      "name": "Onward Workspaces Okhla",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/00b4d28a16e6467d69d0fad3d7edec8a4f3d928f.webp",
        "https://img.cofynd.com/images/latest_images_2024/d51f0a3578db1365207fb1707676a4ba1a2370ed.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a84213d19002e64dc2651e7cbe7da03bfb87557.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5687e144bfa16b7c4de2eee69edef02191da35c.webp",
        "https://img.cofynd.com/images/latest_images_2024/64213160ca8590113a1430332ee6e38fae45dde7.webp"
      ]
    },
    {
      "id": 91,
      "name": "The Social Stays (formerly ArtBuzz) Okhla",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/fc13513930158db8c7deff7f84f35cab3f08fae0.jpg",
        "https://img.cofynd.com/images/latest_images_2024/cba520b7aa47a597a8de47c6e6be5aef4a41aa6e.webp",
        "https://img.cofynd.com/images/latest_images_2024/b0346fc91f946fab956b136f9faa866571a50126.webp",
        "https://img.cofynd.com/images/original/dcff17a3362832e3ba257c2054a4ce10bfd0d6e2.jpg",
        "https://img.cofynd.com/images/latest_images_2024/d35403daafc458571aac68c02f9c04ae9a774581.webp"
      ]
    },
    {
      "id": 99,
      "name": "ABL Workspace Okhla",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2aa1588fb152dac1661815823192487aadc7dab1.webp",
        "https://img.cofynd.com/images/latest_images_2024/421d5d3e8d7855401b4b2844ce454de32398d394.webp",
        "https://img.cofynd.com/images/latest_images_2024/7316e338e96e6149caa1f022934e1bf8b9f2609e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f48250479ca8bdc57a58ce36d4fcc8ba023fb656.webp",
        "https://img.cofynd.com/images/latest_images_2024/f5f51da2ed64c1385ac37f211311bfec89fa607f.webp"
      ]
    },
    {
      "id": 106,
      "name": "Workroom Coworking Okhla",
      "badge": "Special Offer",
      "rating": 4.7,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/69f87fcaf53f80526efee132589804ee25d0b26a.webp",
        "https://img.cofynd.com/images/latest_images_2024/635f64d1d0f597ee02a6c7e3d1a66c3f0951127e.webp",
        "https://img.cofynd.com/images/latest_images_2024/73b24d5fee129539bea64ceec75d28958f3a345e.webp",
        "https://img.cofynd.com/images/latest_images_2024/67a10a7bd63f66e1a529ec57e6f88fcc9d988b4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/a450437e413a113ab0d25c1d6efaf20155e6fc4f.webp"
      ]
    },
    {
      "id": 113,
      "name": "UrbanWrk Okhla",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹24,499",
      "period": "/ Month",
      "priceFormatted": "₹24,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4614c68b4c4ad4f892ddd11469d4965dc1e8b8e5.webp",
        "https://img.cofynd.com/images/latest_images_2024/60e6db2d6b9ef78c29ac5fd095d33d03c61f4159.webp",
        "https://img.cofynd.com/images/latest_images_2024/3dbd9a0ef1bfdfbcaf99f822ab572fe5e141a1a0.webp",
        "https://img.cofynd.com/images/latest_images_2024/9f6ad6318039346dc5bb84dbc263a2e70476be99.webp",
        "https://img.cofynd.com/images/latest_images_2024/486ae504662ec26f7632d03549fc8268fe93ff4d.webp"
      ]
    },
    {
      "id": 196,
      "name": "Wizworks KS Corporate Tower Sector 16",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Sector 16",
      "location": "Sector 16, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8081c06ed7e3ad0fcdb5b2799b907c9168c67137.webp",
        "https://img.cofynd.com/images/latest_images_2024/9fb7628c7308569954855457ef4ff6134a3418dc.webp",
        "https://img.cofynd.com/images/latest_images_2024/fbdf98d9288b6521e969319d87ad9012c9662580.webp",
        "https://img.cofynd.com/images/latest_images_2024/9af8883a36dd226745203c1b66ca73271abdeb75.webp",
        "https://img.cofynd.com/images/latest_images_2024/c889394abd60c8b5de99e9b50922dd4aa10f0c60.webp"
      ]
    }
  ],
  "Netaji Subhash Place": [
    {
      "id": 7,
      "name": "Co-Offiz Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.3,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c32195a70fdb5b30b15f525155f85a7cd0202f63.webp",
        "https://img.cofynd.com/images/latest_images_2024/877b9d2b6e6731111e3cc29652059214e65ae422.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e1154342d1f351fe4d23c3082f74fae0d0cae15.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ffb6eec6336e9974844b2469374293c957863ba.webp",
        "https://img.cofynd.com/images/original/6c4110298c6623fcd041cee0ca511fe104f552de.jpg"
      ]
    },
    {
      "id": 31,
      "name": "Fume Coworking 2.0 Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b49d173dec494e646df8c1112fa6c6b7a1a95bea.webp",
        "https://img.cofynd.com/images/latest_images_2024/033772ad3f54feaa794f185f7d215d622a3eccc2.webp",
        "https://img.cofynd.com/images/latest_images_2024/bca313b91fa9a6a8638d94b940769376d5c9286d.webp",
        "https://img.cofynd.com/images/latest_images_2024/70861541c1f43e16ba9d5ecaaa0dfa1c45ef169c.webp",
        "https://img.cofynd.com/images/latest_images_2024/818c196cb2b92da65cb6a6eec6a081fee40ca620.webp"
      ]
    },
    {
      "id": 49,
      "name": "Work Exchange Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/8425813128dbf1dcac9ed5934d4b49a245728f0a.jpg",
        "https://img.cofynd.com/images/latest_images_2024/f4588e0eb8dcd515cdf7a7fd021f326107d2771c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ef37ead0ef4925b738ea28bd46afd659853a84bd.webp",
        "https://img.cofynd.com/images/original/9c8058b27cb718d04e7cf4689bd62ac82af96b2d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/547b5b79ea3a69f5a1414325ae2895255dbcbdf8.webp"
      ]
    },
    {
      "id": 63,
      "name": "Fume Coworking 1.0 Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2a1144a2004112f00292d0095892e1aaddf8b158.webp",
        "https://img.cofynd.com/images/latest_images_2024/1bb41f5f3133710f21f20ce8c5b0003c7820b796.webp",
        "https://img.cofynd.com/images/latest_images_2024/d504f252a1f7ff825eaf71ee8dcb5503ba0a3a82.webp",
        "https://img.cofynd.com/images/latest_images_2024/3b5a021ae25c120a6c178c4b4e1e3e963e75690a.webp",
        "https://img.cofynd.com/images/latest_images_2024/343ee9a4aaacb38faeff8ad8271f19127fece54b.webp"
      ]
    },
    {
      "id": 73,
      "name": "Supreme Cowork Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3fe64b2bce64f83b76611b407692d5d0b079903a.webp",
        "https://img.cofynd.com/images/latest_images_2024/329af6b9152cf912cd2a8717bcc254d220c4b6d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/560b1f45c861332cbe4d5bfce6fe9849d851fc3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/f0161291ac783ffd8e9ab1c25c7d4267955dd20f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0d9b1b6185bda7047280e372f19a54e24beb440c.webp"
      ]
    },
    {
      "id": 83,
      "name": "Oahfeo Business Center Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f36cb166e62c2a8da96f757b3630e93d10e7bff9.webp",
        "https://img.cofynd.com/images/latest_images_2024/dae3fb4fbd1ea957df7b15a833225add53362f21.webp",
        "https://img.cofynd.com/images/latest_images_2024/13056f8078ab277a6302abdbfb4d4a9385a1e6df.webp",
        "https://img.cofynd.com/images/latest_images_2024/ba6ddab9b55c9fc028942ffa7123a45f8be6405e.webp",
        "https://img.cofynd.com/images/latest_images_2024/81cc9edd28af9c96b3c56df6bfff41e64beef290.webp"
      ]
    },
    {
      "id": 92,
      "name": "Cosphere Netaji Subhash Place",
      "badge": "Popular",
      "rating": 5,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0135799bf91800ea39ee392496586dae2976bb97.webp",
        "https://img.cofynd.com/images/latest_images_2024/45f9907956c4cc53a77e2611ed7541e68f726f7c.webp",
        "https://img.cofynd.com/images/latest_images_2024/7846a4c734a01cac702bad1e2ac383a112743814.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7bc74c7a4cea550456d71d9ca4f263038a4c44a.webp",
        "https://img.cofynd.com/images/latest_images_2024/04086d134c46e4d02ec17958cbbc2c126dcb9c49.webp"
      ]
    },
    {
      "id": 100,
      "name": "ASC CO-WORK Netaji Subhash Place",
      "badge": "Verified",
      "rating": null,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0c45defcea656bc8c3ae1f511da0739b3633eaa6.webp",
        "https://img.cofynd.com/images/latest_images_2024/d18ccb17b65dca9de6c3002dd827f47561ba01a1.webp",
        "https://img.cofynd.com/images/latest_images_2024/4ac66974ff7a021634a630c48c3be45929cc3ef7.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b2c20b709982a7e4b75c0c482111497ec989ceb.webp"
      ]
    },
    {
      "id": 107,
      "name": "Galaxy Cowork Netaji Subhash Place",
      "badge": "Popular",
      "rating": null,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a4b20492ab4c8fd128c1e852dc6be81d73308ed7.webp",
        "https://img.cofynd.com/images/latest_images_2024/c798d5ef198a0a70732a1f5de293a567c73d5a65.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d07e85779c9d43f2c9bef88695f534dbab091d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/27594951ed33ae1bee1e7c89fdfb8335cd90607e.webp",
        "https://img.cofynd.com/images/latest_images_2024/0135a71271ae8dc9bbe1bf054f8e17752549698c.webp"
      ]
    },
    {
      "id": 114,
      "name": "Fume Coworking 3.0 Netaji Subhash Place",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1bbe72ad27c83a137a8818f0e7ee3926a89a549c.webp",
        "https://img.cofynd.com/images/latest_images_2024/b740a1037d6437f75f115958f4d0d4c204988cde.webp",
        "https://img.cofynd.com/images/latest_images_2024/a4d552b078351ada52256444a46c41e9706ac203.webp",
        "https://img.cofynd.com/images/latest_images_2024/ca7a53d3993993d9882de2591b084fd83a1ddbc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/72f8a49307d8a60ad88464895ee00aba630c972a.webp"
      ]
    },
    {
      "id": 197,
      "name": "Oahfeo DeVibe Ashok Vihar",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Ashok Vihar",
      "location": "Ashok Vihar, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c0cc6eca7e84f1eb0c9bca7abb51ffb140eef41c.webp",
        "https://img.cofynd.com/images/latest_images_2024/21f589dbfa16532b777cdcdb0aea1dce5798fb91.webp",
        "https://img.cofynd.com/images/latest_images_2024/af29449a483e818a4eabd4cbb85601118b1170c0.webp",
        "https://img.cofynd.com/images/latest_images_2024/8567fd35c63a0de543adf0ca43a236f94e9ba08c.webp",
        "https://img.cofynd.com/images/latest_images_2024/6ced0229ba8a119de0edf0678d06bb025f50b9a1.webp"
      ]
    },
    {
      "id": 198,
      "name": "Oahfeo Node Ashok Vihar",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Ashok Vihar",
      "location": "Ashok Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0cfd68dbc479ce47f23b7c20324ea46f29353c45.webp",
        "https://img.cofynd.com/images/latest_images_2024/3b55f4f5b4e59eeabf0b007bc65cbd39470dc406.webp"
      ]
    }
  ],
  "Nehru Place": [
    {
      "id": 8,
      "name": "91Springboard Nehru Place",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1d8cbf76354eb6059d2c6dbc63ad34cbb48d67ab.webp",
        "https://img.cofynd.com/images/latest_images_2024/5eb9bd57346c3b7c3f7a4a9d8208c98d5b3bb0bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/b54eff756b078debd85ffd2bb177ee6cbc955d61.webp",
        "https://img.cofynd.com/images/original/43a625125c597b5ec5b3cf2383277c4740b30638.jpg",
        "https://img.cofynd.com/images/latest_images_2024/844dcdf6c7013eaa5870f3ef95a09db19a0ccf15.webp"
      ]
    },
    {
      "id": 32,
      "name": "Wolk B Nehru Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/59df8b87b0db352cdb0877af74e3f30c433b7b18.jpg",
        "https://img.cofynd.com/images/latest_images_2024/8294ad2b08e86b29f10d2ed3d84064883760273c.webp",
        "https://img.cofynd.com/images/original/5cb4cabc285c0a8c3aa77eba707d279d100f9f6f.jpg",
        "https://img.cofynd.com/images/original/588a49113e9089ae4f140d859ec69d0389ee8ea2.jpg",
        "https://img.cofynd.com/images/original/3c4d23470029306fa4dba98c5c895f6daa1212f9.jpg"
      ]
    },
    {
      "id": 50,
      "name": "Avanta Business Centre Nehru Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹27,999",
      "period": "/ Month",
      "priceFormatted": "₹27,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ea2827971877cce753e15d46d00627075d3cd2bc.webp",
        "https://img.cofynd.com/images/latest_images_2024/042e2ad0623a0d05ce90b23a7cc0464ddd3d2791.webp",
        "https://img.cofynd.com/images/original/42988a7cc6f6842a9fc093f158b7443a858e9973.jpg",
        "https://img.cofynd.com/images/original/e82cc63a5f5faf7fc97607623c43961e32f1aa35.jpg",
        "https://img.cofynd.com/images/original/cec2dad9b5dccb03dab1b6a387d281116a94c926.jpg"
      ]
    },
    {
      "id": 64,
      "name": "Rworkspaces B Nehru Place",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/42dbacdbceaf3351f8b88b0502a2eec1715b2d96.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f24769dfd77fae0a44de1a0994eec5bea22f8f6.webp",
        "https://img.cofynd.com/images/latest_images_2024/464009fd2e4fbabfd303abe941d7e9880d31810b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5656e3686a8d93a07f13b472146b62999660fce2.webp",
        "https://img.cofynd.com/images/latest_images_2024/dbb284689a923d1384bc0d2ddb7696fd9afdc64b.webp"
      ]
    },
    {
      "id": 74,
      "name": "Smartworks Nehru Place",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/cd57dd18e8958efa332dbf7d56cdbb0a5daf14e0.jpg",
        "https://img.cofynd.com/images/latest_images_2024/4949a0887778adfdc42df89b2adc208cb6f12503.webp",
        "https://img.cofynd.com/images/original/876af7e9a938113563ed648fb522cbe13ba8bdbf.jpg",
        "https://img.cofynd.com/images/latest_images_2024/eb393df20f7a0dd24fb6e534afce3173fe9eb0be.webp",
        "https://img.cofynd.com/images/latest_images_2024/b9c0bd2a1139fd1d86ecc4a2d9f323f81d221ed4.webp"
      ]
    },
    {
      "id": 84,
      "name": "Workly Nehru Place",
      "badge": "Popular",
      "rating": 4.3,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f2fe77ff424e0b6e2144c55f0d15c9e38fefaa4b.webp",
        "https://img.cofynd.com/images/latest_images_2024/f0309e25280ed2c21070a866fa69ae4d6bf4cc25.webp",
        "https://img.cofynd.com/images/latest_images_2024/ebdd81359f06e0e45b0b2dc3476d370575ed9d64.webp",
        "https://img.cofynd.com/images/original/77fb17161a610cf936e7b2c640de0767077e9966.jpg",
        "https://img.cofynd.com/images/original/f787088319b0323779dfcffe0c7de60cb13560cd.jpg"
      ]
    },
    {
      "id": 93,
      "name": "Wolk Nehru Place",
      "badge": "Popular",
      "rating": 5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f15ed0eb765b5459f43f6e57cf85a2b60b7ea0a1.webp",
        "https://img.cofynd.com/images/latest_images_2024/602dbea7ae06b9a9f8e99153cde88de7c6baa93e.webp",
        "https://img.cofynd.com/images/latest_images_2024/81583b827d312bff9292a5e1a04f7a0d504b92ff.webp",
        "https://img.cofynd.com/images/latest_images_2024/00667c0b72294411791339faeab66dffe8ac9d74.webp",
        "https://img.cofynd.com/images/latest_images_2024/786aa9845dcfe35f17b3732ea44863fdd12b6946.webp"
      ]
    },
    {
      "id": 101,
      "name": "Rworkspaces Nehru Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/bf3819b5e3373b9783342a545b847ad60a2d4bc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ab262b840bfc2caf89cc8c5fa13ec81fd854aa6.webp",
        "https://img.cofynd.com/images/latest_images_2024/e197def8c2026a676027b71a58c21411c8014d55.webp",
        "https://img.cofynd.com/images/latest_images_2024/8bbf7e9aae25b5b2b112ced9bf7fe75d3636033b.webp",
        "https://img.cofynd.com/images/latest_images_2024/b3a946f6866aafa622d3d1b3f0e8ef2ea340e261.webp"
      ]
    },
    {
      "id": 108,
      "name": "Classic Converge Nehru Place",
      "badge": "Popular",
      "rating": 5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/43bf3e7e2ee35f80e488cc4cd70f89624684cddc.webp",
        "https://img.cofynd.com/images/latest_images_2024/3da3dd391af491382523ebaf0f3a12bba4173a2f.webp",
        "https://img.cofynd.com/images/latest_images_2024/9a33cebffb85ca678c934b7630a7e6aebe92413f.webp",
        "https://img.cofynd.com/images/latest_images_2024/b55814f5fadd9dabe4c978272dfdc9c714c1c6dc.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cb7bc2c916979e35e9e58c0fc248aa0a74ae2bd.webp"
      ]
    },
    {
      "id": 115,
      "name": "Cubeecle Business Centre Nehru Place",
      "badge": "Verified",
      "rating": null,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0779cf9ca419f242423278ccd1cf4340e9a7d9bc.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc125e17789b7d7fc414f207e3536824776d773e.webp",
        "https://img.cofynd.com/images/latest_images_2024/5dddf42a5ba4cbc2bd281f6d5c0e4f1b71eca812.webp",
        "https://img.cofynd.com/images/latest_images_2024/5ff5e4fbb07e64be17d693dc6742b67d42c633a3.webp",
        "https://img.cofynd.com/images/latest_images_2024/dd222c31a7cfd7fb4d4b0582c2c2163e6485a7e0.webp"
      ]
    }
  ],
  "Janakpuri": [
    {
      "id": 9,
      "name": "Spring House SHDL001 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78ebc303fcaac70f525f8167c32a21f74341487f.webp",
        "https://img.cofynd.com/images/latest_images_2024/91724a81db356a2b6046d8fd3378afba7bfd1167.webp",
        "https://img.cofynd.com/images/latest_images_2024/881f49280eec4c677ca6c2aa361fbfee823ff86d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d613d229aa9117bd9d218ebf9b9d3947b3414027.webp",
        "https://img.cofynd.com/images/latest_images_2024/a360db675fcf732815b80a12b019f5fdf94c8f1b.webp"
      ]
    },
    {
      "id": 33,
      "name": "Co-Offiz Janakpuri",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6ef79fab2c1fe2d5cd4b02c49dc23807248d2ac2.webp",
        "https://img.cofynd.com/images/latest_images_2024/330f0d77523b7dd63fd518ba8f353c96596a1e8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a5b9eec607c65f8419b64ebdf6a8839160e31011.webp",
        "https://img.cofynd.com/images/latest_images_2024/5fd330a87f71e814a9b7f30cc60ac45b19c80d0e.webp",
        "https://img.cofynd.com/images/original/461f6c54542eacbd61ce146ab1b03a01f1f77413.jpg"
      ]
    },
    {
      "id": 51,
      "name": "Spring House SHDL002 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9236a067f3f88991bb6ef51328e5d11ad2d7b4f1.jpg",
        "https://img.cofynd.com/images/original/da29a8e2ba86b5ff83b7547f8ada119c35848f56.jpg",
        "https://img.cofynd.com/images/latest_images_2024/4c73070f8bcbe024da85a3cdf5adb9a80d581cd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/60a95f067e3ee65b191d4f622a2985ba623eb73c.webp",
        "https://img.cofynd.com/images/original/d0f6c666bebffa5a0dda8648eb64bea21168e6c3.jpg"
      ]
    },
    {
      "id": 65,
      "name": "The Club Co Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/777ebc6adc83c999e217c113060c8eb25391e4bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c0f57d4602a7095fd8fc548900e87e993cf7811.webp",
        "https://img.cofynd.com/images/latest_images_2024/67ca7a0f65a04f59ccecc1b49892f00e31b0f9f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/ede1b9d4ce3825ab5240d211e2d9b2d96ccf9cc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/11006c141883bc059e003a631d2cad7aa9ed937a.webp"
      ]
    },
    {
      "id": 75,
      "name": "Spring House SHDL003 Janakpuri",
      "badge": "Premium",
      "rating": 5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7fd735bb9361019969f71dbdc27fb2e7973ce358.webp",
        "https://img.cofynd.com/images/latest_images_2024/eb9f32651231d6c4ef8a466a2a63e4a00c2a1583.webp",
        "https://img.cofynd.com/images/latest_images_2024/9592e5ef3c786902e984719dc0599768caffa9a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/5865b73dd55f7d3a344841982ca7ae6b9cd092e7.webp",
        "https://img.cofynd.com/images/latest_images_2024/6c1ac119aec3ba9554fab8221437279dab5e7efc.webp"
      ]
    },
    {
      "id": 85,
      "name": "Purple Co-working Janakpuri",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f82a9ef82b372be8a50c522153631ec97f5dd31d.webp",
        "https://img.cofynd.com/images/latest_images_2024/9430566d7002e0f1258c989bb29042526e72c5fb.webp",
        "https://img.cofynd.com/images/latest_images_2024/307316e06e9eb7eff19a668d81020036cb96df19.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cf2b742a6bfe6770b6b8a87bc9960f629125cf3.webp",
        "https://img.cofynd.com/images/latest_images_2024/4fc108c185ae48573a116ccec2cad4295c758689.webp"
      ]
    },
    {
      "id": 94,
      "name": "Spring House SHDL006 Janakpuri",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/636afa3db0a47ae89f604f0de6b16bde414e3952.webp",
        "https://img.cofynd.com/images/latest_images_2024/7db7126b993deee43e53aadae7d5c7abce444e3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/52b5be29402dbcc0a585dc9fd921ae7cd1299fae.webp",
        "https://img.cofynd.com/images/latest_images_2024/f060f858382b8788d417d7b517592603d456b229.webp",
        "https://img.cofynd.com/images/latest_images_2024/beca2f899f4af9193af05ffb74aa7856c7d5e0b1.webp"
      ]
    },
    {
      "id": 65,
      "name": "The Club Co Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/777ebc6adc83c999e217c113060c8eb25391e4bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c0f57d4602a7095fd8fc548900e87e993cf7811.webp",
        "https://img.cofynd.com/images/latest_images_2024/67ca7a0f65a04f59ccecc1b49892f00e31b0f9f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/ede1b9d4ce3825ab5240d211e2d9b2d96ccf9cc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/11006c141883bc059e003a631d2cad7aa9ed937a.webp"
      ]
    },
    {
      "id": 33,
      "name": "Co-Offiz Janakpuri",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6ef79fab2c1fe2d5cd4b02c49dc23807248d2ac2.webp",
        "https://img.cofynd.com/images/latest_images_2024/330f0d77523b7dd63fd518ba8f353c96596a1e8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a5b9eec607c65f8419b64ebdf6a8839160e31011.webp",
        "https://img.cofynd.com/images/latest_images_2024/5fd330a87f71e814a9b7f30cc60ac45b19c80d0e.webp",
        "https://img.cofynd.com/images/original/461f6c54542eacbd61ce146ab1b03a01f1f77413.jpg"
      ]
    },
    {
      "id": 85,
      "name": "Purple Co-working Janakpuri",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f82a9ef82b372be8a50c522153631ec97f5dd31d.webp",
        "https://img.cofynd.com/images/latest_images_2024/9430566d7002e0f1258c989bb29042526e72c5fb.webp",
        "https://img.cofynd.com/images/latest_images_2024/307316e06e9eb7eff19a668d81020036cb96df19.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cf2b742a6bfe6770b6b8a87bc9960f629125cf3.webp",
        "https://img.cofynd.com/images/latest_images_2024/4fc108c185ae48573a116ccec2cad4295c758689.webp"
      ]
    },
    {
      "id": 199,
      "name": "Work & Thrive Dwarka",
      "badge": "Premium",
      "rating": 4.6,
      "area": "Dwarka",
      "location": "Dwarka, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1719e9861e88946e2e3909053645885259e6967b.webp",
        "https://img.cofynd.com/images/latest_images_2024/2c454a18b3cdf74069a21e07e7e947a6d5fd3462.webp",
        "https://img.cofynd.com/images/latest_images_2024/d38485e2f769cc51c563fdc72c2c0bef5dcd2a46.webp",
        "https://img.cofynd.com/images/latest_images_2024/2fda6eeb93c413dbcc019ab2750105e88d2be322.webp",
        "https://img.cofynd.com/images/latest_images_2024/b3a3ebb890ca42fa967deca737006bb16f311ea9.webp"
      ]
    },
    {
      "id": 200,
      "name": "U.S.Coworking Dwarka",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Dwarka",
      "location": "Dwarka, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6d392a8b1d1de4a164c8c1f563a4e1aca0a0d37d.webp",
        "https://img.cofynd.com/images/latest_images_2024/f6491e47b35d65f6d56bed14070f64624c012f5c.webp",
        "https://img.cofynd.com/images/latest_images_2024/64a6541d2c5f3760a9f309106d898f20bff11de0.webp",
        "https://img.cofynd.com/images/latest_images_2024/79b4745ed143bad894212370f94ca19fd2c5a5f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/113cbe3f96892b643d9e5535208ff194e1e11a49.webp"
      ]
    },
    {
      "id": 235,
      "name": "Cozywork Tilak Nagar",
      "badge": "Verified",
      "rating": null,
      "area": "Tilak Nagar",
      "location": "Tilak Nagar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ba2b316469a0df11cb9a1fbbf105436d1975c47c.webp",
        "https://img.cofynd.com/images/latest_images_2024/c3e84975d1dc754460ae013a6d063d77e6f03f56.webp",
        "https://img.cofynd.com/images/latest_images_2024/886c5e2e0c72286d053af402bb3d18a66a79236b.webp",
        "https://img.cofynd.com/images/latest_images_2024/3f594f369ba5b30f76578e0bd2df66c76f775e4e.webp",
        "https://img.cofynd.com/images/latest_images_2024/292e80440affea9ec5103077befccccd889b8333.webp"
      ]
    }
  ],
  "South Delhi": [
    {
      "id": 10,
      "name": "IKSANA Workspaces by Pannal South Delhi",
      "badge": "Popular",
      "rating": 4.8,
      "area": "South Delhi",
      "location": "South Delhi, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5d7a0f9dae1961bf3a1c2374e3af293703a694d4.webp",
        "https://img.cofynd.com/images/original/fd23bbf04092895a850239cfeebec3c9852c511e.jpg",
        "https://img.cofynd.com/images/latest_images_2024/ba18b71c6b765682ebfb0ce0c5312c8020f37aec.webp",
        "https://img.cofynd.com/images/latest_images_2024/2eb457d1cbff943a09fff2cf4d372ab73be662a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/525b1d29c4342ea32324e590fade080a57a97718.webp"
      ]
    },
    {
      "id": 34,
      "name": "Zing Space 381 South Delhi",
      "badge": "Popular",
      "rating": 4.9,
      "area": "South Delhi",
      "location": "South Delhi, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/dc647650e3e04aa63f4184066d081f38e7aa0ee0.webp",
        "https://img.cofynd.com/images/latest_images_2024/9a1d4dfee1171891c77aebb80a568895c63fa9ee.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4885f15f610e6a2d71e6847c3952ceb012f2ce6.webp",
        "https://img.cofynd.com/images/latest_images_2024/8590936a3ca9ac701ba4c43abb24865b4532b728.webp",
        "https://img.cofynd.com/images/latest_images_2024/ced01cecd30dca4d1df33c747a9a1af3ce9ccdbf.webp"
      ]
    },
    {
      "id": 52,
      "name": "CorporatEdge South Delhi",
      "badge": "Verified",
      "rating": null,
      "area": "South Delhi",
      "location": "South Delhi, Delhi",
      "price": "₹44,999",
      "period": "/ Month",
      "priceFormatted": "₹44,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1992cfccfb5bc8c48db188a40a3b3d1e46fcdbe7.webp",
        "https://img.cofynd.com/images/latest_images_2024/082b28e016e9e36d21df11d6f379c697256e2dcf.webp",
        "https://img.cofynd.com/images/latest_images_2024/3206f803a83784d974a4998f3fa8dd1107ac9e1a.webp",
        "https://img.cofynd.com/images/latest_images_2024/02b4c8bb992d3414c12d6dc07c3c484428a0ed94.webp",
        "https://img.cofynd.com/images/latest_images_2024/df15f98ba012e58d82ee22342fb1a52c9e665f98.webp"
      ]
    },
    {
      "id": 10,
      "name": "IKSANA Workspaces by Pannal South Delhi",
      "badge": "Popular",
      "rating": 4.8,
      "area": "South Delhi",
      "location": "South Delhi, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5d7a0f9dae1961bf3a1c2374e3af293703a694d4.webp",
        "https://img.cofynd.com/images/original/fd23bbf04092895a850239cfeebec3c9852c511e.jpg",
        "https://img.cofynd.com/images/latest_images_2024/ba18b71c6b765682ebfb0ce0c5312c8020f37aec.webp",
        "https://img.cofynd.com/images/latest_images_2024/2eb457d1cbff943a09fff2cf4d372ab73be662a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/525b1d29c4342ea32324e590fade080a57a97718.webp"
      ]
    },
    {
      "id": 90,
      "name": "Flexihub Saket",
      "badge": "Special Offer",
      "rating": 4.4,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/db42969655aad3aee41a489420f82488522bb56c.webp",
        "https://img.cofynd.com/images/latest_images_2024/29a38d799445b33fe90c88ff38767f84314ba801.webp",
        "https://img.cofynd.com/images/latest_images_2024/61e684fe9651f61d79b2a4ee93c01343fc0bd202.webp",
        "https://img.cofynd.com/images/original/112c8311ed5b0fc93efbd3c1eb32a062317cb974.jpg",
        "https://img.cofynd.com/images/original/1c34108ca3448dbdb9625f6905a63321152f22b8.jpg"
      ]
    },
    {
      "id": 139,
      "name": "MIO Coworks Saket",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6b71b4a68c65ebe3679850647d0e94cc9afc0c73.webp",
        "https://img.cofynd.com/images/latest_images_2024/efa3260f45bb13a27a1160a0ce443f538f9deed5.webp",
        "https://img.cofynd.com/images/latest_images_2024/e9c0a6e2d0ee3739e87102a07b4512c0da7e6804.webp",
        "https://img.cofynd.com/images/latest_images_2024/7aeecd0643a47b3a9044d1aac62ae1cee7e940ae.webp",
        "https://img.cofynd.com/images/latest_images_2024/ea20175a94edf9f76d0da176d92f37fe9c70feb2.webp"
      ]
    },
    {
      "id": 98,
      "name": "ZO Space 274 Saket",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8d8331d840e986a7855b8694352fce01aa771d2a.webp",
        "https://img.cofynd.com/images/latest_images_2024/8d8b74aaab5e97e9303f3ca8fbc1d5a47b83bbbf.webp",
        "https://img.cofynd.com/images/latest_images_2024/40da7d595f36458ccc3df855c2f4f14b89c80fbb.webp",
        "https://img.cofynd.com/images/latest_images_2024/716d758ba420b9dee4774eaa8194474dfb3f9b55.webp",
        "https://img.cofynd.com/images/latest_images_2024/bf72a630e48351dc3d2c7640abe1f7a229cb6b0c.webp"
      ]
    },
    {
      "id": 81,
      "name": "Buzz by Spacetime Saket",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d8d093d87e35c6b8e799b9455c1c6472723676eb.webp",
        "https://img.cofynd.com/images/latest_images_2024/996dfdac81c1edcdf39f5e108374c78387d5f0cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d85d1e749bc449a1c185004c559fd290ef4c3c6.webp",
        "https://img.cofynd.com/images/latest_images_2024/4ce20f7a4303e867a6b569ebe186838bf7a5487f.webp",
        "https://img.cofynd.com/images/latest_images_2024/096c2bf7314cb09344afceda547d8d3176de513e.webp"
      ]
    },
    {
      "id": 147,
      "name": "SupremeWork Chattarpur",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Chattarpur",
      "location": "Chattarpur, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4509f45aed0d0fdb8e1f1b522ebf8edaf52f9cfa.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b54080ea80ddfe5bf2e3ede0fb8a5c9170b6dc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/161a9cc9d1eefd1637989e2a6342be58d34ad278.webp",
        "https://img.cofynd.com/images/latest_images_2024/73ff6f13ac2ba839d049bb84d7531319cbaae819.webp",
        "https://img.cofynd.com/images/latest_images_2024/b53aeb95ca4564cb6000757bbcdbe584eca6d92d.webp"
      ]
    },
    {
      "id": 148,
      "name": "ThinkHaus Saket",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cd11e0a314fdd320c60219ff267518159975e27d.webp",
        "https://img.cofynd.com/images/latest_images_2024/77825090d8a8bb32324b1883d063192a0ebd9fd4.webp",
        "https://img.cofynd.com/images/latest_images_2024/16a121e9b05979b9cd8a6493f98777b80a8399dc.webp",
        "https://img.cofynd.com/images/latest_images_2024/4c3f1943ed34b41a1d0224117b57e63eb9e6f1f6.webp",
        "https://img.cofynd.com/images/latest_images_2024/dc1bbf539cdecd80dfbe3cdb0bb02902a8244553.webp"
      ]
    }
  ],
  "Dwarka Delhi": [
    {
      "id": 11,
      "name": "Workingdom Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/73f308a5127f5c96e5ae46c3454b8d5240cfdfe2.jpg",
        "https://img.cofynd.com/images/original/79d88dc6f56a0b39e0d7eb13a0400dbce39a23ac.jpg",
        "https://img.cofynd.com/images/original/2eb36976c6b9ccfeb87d3696c38016d99c2133a6.jpg",
        "https://img.cofynd.com/images/latest_images_2024/e4666a94549c62edb763df3612c190c1d81932e7.webp",
        "https://img.cofynd.com/images/original/8df97965d75029659a16676a08059f97a5d4073c.jpg"
      ]
    },
    {
      "id": 35,
      "name": "YC Coworking Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.1,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/228332848ab4c05bc578090d80426736b8ed1e34.webp",
        "https://img.cofynd.com/images/latest_images_2024/e71693355597ac472f7ebfa440fd86a0a9a64273.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab06141c61b6fb827e814bd2b8f7c0f1d0a83d9b.webp",
        "https://img.cofynd.com/images/original/2c4417a8eadfbedf0aa0697026d8d5d445bbbd88.jpg",
        "https://img.cofynd.com/images/original/2cad774819a83d7965a67bd4a505cf9fb077550f.jpg"
      ]
    },
    {
      "id": 53,
      "name": "Invento Workspaces 12A Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4b040c22f60e6c47a0feee19669a773a3f714460.webp",
        "https://img.cofynd.com/images/original/10c50063cb2aa98b8577f598a4e68b392c1e2b28.jpg",
        "https://img.cofynd.com/images/latest_images_2024/835dd3eee9413ea4eacff7e8cafb709582b6c5cc.webp",
        "https://img.cofynd.com/images/latest_images_2024/3d677d898eff37e7e83a6afb7d3015d70a04b51e.webp",
        "https://img.cofynd.com/images/latest_images_2024/3dd636f5c7cbc5ae4c275306e5084c1b810b03da.webp"
      ]
    },
    {
      "id": 66,
      "name": "Spacify Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2d16d161ffb843d9f4eaf9bc9b278c8bdf3586e0.jpg",
        "https://img.cofynd.com/images/original/58678803107e6802e498e51c9639fa7b6791159d.jpg",
        "https://img.cofynd.com/images/original/8b7d13f40f08701054f8632f18721c6fe0251bb2.jpg",
        "https://img.cofynd.com/images/original/b41337db7c3b13bc2651bd4bd95a0271f5d26f77.jpg",
        "https://img.cofynd.com/images/original/a3e1e0c5ab686029ac26018525f0626a46f409e2.jpg"
      ]
    },
    {
      "id": 76,
      "name": "Peer 2 Desk Dwarka Delhi",
      "badge": "Popular",
      "rating": 5,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/845c6d42e51c0706ba54c66973ef00ca53956b3a.jpg",
        "https://img.cofynd.com/images/original/ce4bad5366b2e93e6a092ceb037ead89d82b7842.jpg",
        "https://img.cofynd.com/images/original/03efca9c1a9fb95ca99a7cad3ce3dbd06f1581e3.jpg",
        "https://img.cofynd.com/images/original/25078736fa13b179bc2e8f77bd164967f392aa52.jpg",
        "https://img.cofynd.com/images/original/dd783968999d857e984e59459698c65b3cb71ec3.jpg"
      ]
    },
    {
      "id": 86,
      "name": "Work and Beyond Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d58934f0e727a4f23c4d1f31b4c76fa081cf069c.webp",
        "https://img.cofynd.com/images/latest_images_2024/842cce6d4f0a0942749e7677fc7af6ce4c2bedb6.webp",
        "https://img.cofynd.com/images/latest_images_2024/5a767803e9a151da3a898d527266e00099d9ff6f.webp",
        "https://img.cofynd.com/images/latest_images_2024/8bf5d836e17ac02f1ff22e0aaf391abc8e0a874a.webp",
        "https://img.cofynd.com/images/latest_images_2024/555cc0527dfaae2df24c8810b980f21b3131116a.webp"
      ]
    },
    {
      "id": 95,
      "name": "TCW Unity Work Space Dwarka Delhi",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f21b798647cc56ef03eda1b0de1b02db81109824.webp",
        "https://img.cofynd.com/images/latest_images_2024/36bf1eade48cff242e9f87f9e0c010cd6843c2e1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2a7833657e5fb5b628ac0ba3957d6bde7dfc0abd.webp",
        "https://img.cofynd.com/images/latest_images_2024/0a1256e6f376205cebc05b6b50371bac7c3614dd.webp",
        "https://img.cofynd.com/images/latest_images_2024/b15153f2fc3ec5852b97f7fd558b6bdf5a81fc2e.webp"
      ]
    },
    {
      "id": 102,
      "name": "Work Exchange Dwarka Delhi",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94a5162a68da0a7739b5151a6b6e641d281c8646.webp",
        "https://img.cofynd.com/images/latest_images_2024/b26a7388450822bb4515d37b3ec550185147f3cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/0325b0da374eca287600f798169a0d998cb315bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/45feff3817c282a146a4ae88ea00057dd16b912b.webp",
        "https://img.cofynd.com/images/latest_images_2024/4b61accc7c8a05e99ba3be847888fcb75bea6658.webp"
      ]
    },
    {
      "id": 109,
      "name": "Creativity Cove Dwarka Delhi",
      "badge": "Special Offer",
      "rating": 4.3,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2950532421bcd94607a16d2e39048db213e003cd.webp",
        "https://img.cofynd.com/images/latest_images_2024/eaf34d0134e63b29d1279c1865e2f87bad53be21.webp",
        "https://img.cofynd.com/images/latest_images_2024/b8123ec86faaa2d9b59c5b81f14582d4c9e1581d.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc02c950521f01f3fd4e503b5862aebf307f53cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/ed190a0a0853cc1cc9de4fbb73e0e2e9c5f16ee0.webp"
      ]
    },
    {
      "id": 116,
      "name": "TCW Unity Work Space B Dwarka Delhi",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/65d22de7612e33de78e9b3d6f851f8de29e90e61.webp",
        "https://img.cofynd.com/images/latest_images_2024/99bf0a051b6194dcdd13fb81d3709ae0d448ea82.webp",
        "https://img.cofynd.com/images/latest_images_2024/ab70a262acb0449f3031aad79ebb4c4892a164b5.webp",
        "https://img.cofynd.com/images/latest_images_2024/63fb84a18a1968c47279d1fc5fc0dcc3f3ed9a90.webp",
        "https://img.cofynd.com/images/latest_images_2024/676a0e503d21453bc73c51f8787bd57d8a1c8619.webp"
      ]
    },
    {
      "id": 201,
      "name": "Master Space Najafgarh",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Najafgarh",
      "location": "Najafgarh, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/b00944caa51d6cdf475ce00951b59af5a1f1dd14.jpg",
        "https://img.cofynd.com/images/original/88ded92dfc64728bd55b2ab36c2ef1187cd5c68a.jpg",
        "https://img.cofynd.com/images/original/f1c2dc3e9c222b4a8a2ae6ec8ec678c12ce55846.jpg",
        "https://img.cofynd.com/images/latest_images_2024/64deb54e1c02dd65b413d5503bb6aaad432cf8c4.webp",
        "https://img.cofynd.com/images/original/c73eacf5ab611d5d349346e77582a7298dc6dd08.jpg"
      ]
    },
    {
      "id": 227,
      "name": "Cowynd Sector 19 Dwarka",
      "badge": "Popular",
      "rating": null,
      "area": "Sector 19 Dwarka",
      "location": "Sector 19 Dwarka, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fa3a2a284981f661a5bf31570876588c15357f2a.webp",
        "https://img.cofynd.com/images/latest_images_2024/92722834ac4cc100b735dfe9ca0c20968adb1532.webp",
        "https://img.cofynd.com/images/latest_images_2024/eaa73a0bcbfda21d4ecd49ec7f48b3d4f2091be4.webp",
        "https://img.cofynd.com/images/latest_images_2024/be6ceb629dd1d996c46d15053f3a72ef7bf10c3c.webp",
        "https://img.cofynd.com/images/latest_images_2024/68f86daa1cf4f3e92f9be00219433b73cacc73c8.webp"
      ]
    }
  ],
  "Rohini": [
    {
      "id": 12,
      "name": "Team Station Rohini",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/94260310093128e8d03598da52d5067227ab36ec.jpg",
        "https://img.cofynd.com/images/original/8f412e247f0885f880d39c5ff2a7e0e7a0dad330.jpg",
        "https://img.cofynd.com/images/latest_images_2024/208b6f01c86f16cf7b9aff063623c3afc23b26dd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5bc85ad7ee7020e192ec2c7c9ec74986973dcea7.webp",
        "https://img.cofynd.com/images/original/7e82693e3ac7e64f0fa65d68732179b5d22c5934.jpg"
      ]
    },
    {
      "id": 36,
      "name": "Linkup Coworking Space Rohini",
      "badge": "Verified",
      "rating": null,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/063eb5e13effe0d18fd3eae19c12b1051a8681f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/b20562b132ca4f6254d4edf883d4082a6d954891.webp",
        "https://img.cofynd.com/images/latest_images_2024/4186b675c581dc3396dd031470073fae35cadf30.webp",
        "https://img.cofynd.com/images/latest_images_2024/f4e214a592bff39d02390d7b864074a63d6ff522.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c83448d350de2ad6a12a0c0906986a5c95ed247.webp"
      ]
    },
    {
      "id": 54,
      "name": "Brainy Colony Rohini",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f4e05e74859924e8918a5bb661830ea92d07c60f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4412da3c83da5c07699d4a202d97585cb491bc9f.webp",
        "https://img.cofynd.com/images/latest_images_2024/f8d9ba891a514d2c1ed2d1d2f1ed16bebc55e1e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/2575018cc8ac248ce9885b10609bd9ee29c41a02.webp"
      ]
    },
    {
      "id": 67,
      "name": "Martini Rohini",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e54e232156e0950ff0e46b1ee3d7265c50ca3bf0.webp",
        "https://img.cofynd.com/images/latest_images_2024/60e38c27153ac721f4e6a23cd0f26286c6a52e8c.webp",
        "https://img.cofynd.com/images/latest_images_2024/3af0c723ce4bf75728c8c0faa2446f94c29d70df.webp",
        "https://img.cofynd.com/images/latest_images_2024/153787e412f5874129a6d25c6be6c5f9a08ae86e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cbcfa9e3bbcb8932b7cd371ab2badef74d6a7df0.webp"
      ]
    },
    {
      "id": 77,
      "name": "Sab Co-working Rohini",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e401e614d925e6e7dba867887b5162112a472f2c.webp",
        "https://img.cofynd.com/images/latest_images_2024/9fdc7a02c489d29142c5067fbb6679e2df49180b.webp",
        "https://img.cofynd.com/images/latest_images_2024/4d8d93df5d222e16f61d04690a2403237a338336.webp",
        "https://img.cofynd.com/images/latest_images_2024/1a5e67ba153e1560bf35178f63bc600f27ebbc20.webp"
      ]
    },
    {
      "id": 36,
      "name": "Linkup Coworking Space Rohini",
      "badge": "Verified",
      "rating": null,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/063eb5e13effe0d18fd3eae19c12b1051a8681f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/b20562b132ca4f6254d4edf883d4082a6d954891.webp",
        "https://img.cofynd.com/images/latest_images_2024/4186b675c581dc3396dd031470073fae35cadf30.webp",
        "https://img.cofynd.com/images/latest_images_2024/f4e214a592bff39d02390d7b864074a63d6ff522.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c83448d350de2ad6a12a0c0906986a5c95ed247.webp"
      ]
    },
    {
      "id": 12,
      "name": "Team Station Rohini",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/94260310093128e8d03598da52d5067227ab36ec.jpg",
        "https://img.cofynd.com/images/original/8f412e247f0885f880d39c5ff2a7e0e7a0dad330.jpg",
        "https://img.cofynd.com/images/latest_images_2024/208b6f01c86f16cf7b9aff063623c3afc23b26dd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5bc85ad7ee7020e192ec2c7c9ec74986973dcea7.webp",
        "https://img.cofynd.com/images/original/7e82693e3ac7e64f0fa65d68732179b5d22c5934.jpg"
      ]
    },
    {
      "id": 77,
      "name": "Sab Co-working Rohini",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e401e614d925e6e7dba867887b5162112a472f2c.webp",
        "https://img.cofynd.com/images/latest_images_2024/9fdc7a02c489d29142c5067fbb6679e2df49180b.webp",
        "https://img.cofynd.com/images/latest_images_2024/4d8d93df5d222e16f61d04690a2403237a338336.webp",
        "https://img.cofynd.com/images/latest_images_2024/1a5e67ba153e1560bf35178f63bc600f27ebbc20.webp"
      ]
    },
    {
      "id": 54,
      "name": "Brainy Colony Rohini",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f4e05e74859924e8918a5bb661830ea92d07c60f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4412da3c83da5c07699d4a202d97585cb491bc9f.webp",
        "https://img.cofynd.com/images/latest_images_2024/f8d9ba891a514d2c1ed2d1d2f1ed16bebc55e1e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/2575018cc8ac248ce9885b10609bd9ee29c41a02.webp"
      ]
    },
    {
      "id": 67,
      "name": "Martini Rohini",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e54e232156e0950ff0e46b1ee3d7265c50ca3bf0.webp",
        "https://img.cofynd.com/images/latest_images_2024/60e38c27153ac721f4e6a23cd0f26286c6a52e8c.webp",
        "https://img.cofynd.com/images/latest_images_2024/3af0c723ce4bf75728c8c0faa2446f94c29d70df.webp",
        "https://img.cofynd.com/images/latest_images_2024/153787e412f5874129a6d25c6be6c5f9a08ae86e.webp",
        "https://img.cofynd.com/images/latest_images_2024/cbcfa9e3bbcb8932b7cd371ab2badef74d6a7df0.webp"
      ]
    },
    {
      "id": 202,
      "name": "Folk us Paschim Vihar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Paschim Vihar",
      "location": "Paschim Vihar, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d536dd61f4d1e893f8e99bb60f28ce94b94943a3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b30dcc07ee6a933dde61a60814ee4ef0dbd1f439.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3185138f573bff82d3a230e0c77978ac92b84a3.webp",
        "https://img.cofynd.com/images/latest_images_2024/02b3350acf3de4f6240275a58b26eb9a96c81399.webp",
        "https://img.cofynd.com/images/latest_images_2024/f6f253e83a039faf022e482aff8fa281ac134d8d.webp"
      ]
    },
    {
      "id": 203,
      "name": "Office Cabin Paschim Vihar",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Paschim Vihar",
      "location": "Paschim Vihar, Delhi",
      "price": "₹10,999",
      "period": "/ Month",
      "priceFormatted": "₹10,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d0b2763f5fb19fb470720f3342287a5a2c997efc.webp",
        "https://img.cofynd.com/images/latest_images_2024/bef99c659eb29b9dbd249cba0643e4988a02dc0b.webp",
        "https://img.cofynd.com/images/latest_images_2024/9e12e3cc059989c07a90495465bb0643c83bd9f3.webp",
        "https://img.cofynd.com/images/latest_images_2024/e200ef437803506e7b2394d0c732be43ac709aba.webp",
        "https://img.cofynd.com/images/latest_images_2024/b0d8986ee371534b84724495a40b0cdccd3f8eec.webp"
      ]
    },
    {
      "id": 225,
      "name": "Vistara Co Work Space Rohini Sector 22",
      "badge": "Verified",
      "rating": null,
      "area": "Rohini Sector 22",
      "location": "Rohini Sector 22, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/69c34b8616b7aebb036b4a5cfaef920d324def81.webp",
        "https://img.cofynd.com/images/latest_images_2024/235bcae3b50614eeadc3c1741cfa2aac6bcc255f.webp",
        "https://img.cofynd.com/images/latest_images_2024/2c0a757e8cf40e393b6995a5959aa0d8d6c4c21b.webp",
        "https://img.cofynd.com/images/latest_images_2024/39fa8d66c17d94983c37fd3dc27ce5bda6b82cec.webp",
        "https://img.cofynd.com/images/latest_images_2024/8141da294469a84baf67fde5e56a3d59fdf5c7ae.webp"
      ]
    }
  ],
  "Pitampura": [
    {
      "id": 12,
      "name": "Team Station Rohini",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/94260310093128e8d03598da52d5067227ab36ec.jpg",
        "https://img.cofynd.com/images/original/8f412e247f0885f880d39c5ff2a7e0e7a0dad330.jpg",
        "https://img.cofynd.com/images/latest_images_2024/208b6f01c86f16cf7b9aff063623c3afc23b26dd.webp",
        "https://img.cofynd.com/images/latest_images_2024/5bc85ad7ee7020e192ec2c7c9ec74986973dcea7.webp",
        "https://img.cofynd.com/images/original/7e82693e3ac7e64f0fa65d68732179b5d22c5934.jpg"
      ]
    },
    {
      "id": 36,
      "name": "Linkup Coworking Space Rohini",
      "badge": "Verified",
      "rating": null,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/063eb5e13effe0d18fd3eae19c12b1051a8681f5.webp",
        "https://img.cofynd.com/images/latest_images_2024/b20562b132ca4f6254d4edf883d4082a6d954891.webp",
        "https://img.cofynd.com/images/latest_images_2024/4186b675c581dc3396dd031470073fae35cadf30.webp",
        "https://img.cofynd.com/images/latest_images_2024/f4e214a592bff39d02390d7b864074a63d6ff522.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c83448d350de2ad6a12a0c0906986a5c95ed247.webp"
      ]
    },
    {
      "id": 49,
      "name": "Work Exchange Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/8425813128dbf1dcac9ed5934d4b49a245728f0a.jpg",
        "https://img.cofynd.com/images/latest_images_2024/f4588e0eb8dcd515cdf7a7fd021f326107d2771c.webp",
        "https://img.cofynd.com/images/latest_images_2024/ef37ead0ef4925b738ea28bd46afd659853a84bd.webp",
        "https://img.cofynd.com/images/original/9c8058b27cb718d04e7cf4689bd62ac82af96b2d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/547b5b79ea3a69f5a1414325ae2895255dbcbdf8.webp"
      ]
    },
    {
      "id": 31,
      "name": "Fume Coworking 2.0 Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b49d173dec494e646df8c1112fa6c6b7a1a95bea.webp",
        "https://img.cofynd.com/images/latest_images_2024/033772ad3f54feaa794f185f7d215d622a3eccc2.webp",
        "https://img.cofynd.com/images/latest_images_2024/bca313b91fa9a6a8638d94b940769376d5c9286d.webp",
        "https://img.cofynd.com/images/latest_images_2024/70861541c1f43e16ba9d5ecaaa0dfa1c45ef169c.webp",
        "https://img.cofynd.com/images/latest_images_2024/818c196cb2b92da65cb6a6eec6a081fee40ca620.webp"
      ]
    },
    {
      "id": 7,
      "name": "Co-Offiz Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.3,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c32195a70fdb5b30b15f525155f85a7cd0202f63.webp",
        "https://img.cofynd.com/images/latest_images_2024/877b9d2b6e6731111e3cc29652059214e65ae422.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e1154342d1f351fe4d23c3082f74fae0d0cae15.webp",
        "https://img.cofynd.com/images/latest_images_2024/9ffb6eec6336e9974844b2469374293c957863ba.webp",
        "https://img.cofynd.com/images/original/6c4110298c6623fcd041cee0ca511fe104f552de.jpg"
      ]
    },
    {
      "id": 114,
      "name": "Fume Coworking 3.0 Netaji Subhash Place",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1bbe72ad27c83a137a8818f0e7ee3926a89a549c.webp",
        "https://img.cofynd.com/images/latest_images_2024/b740a1037d6437f75f115958f4d0d4c204988cde.webp",
        "https://img.cofynd.com/images/latest_images_2024/a4d552b078351ada52256444a46c41e9706ac203.webp",
        "https://img.cofynd.com/images/latest_images_2024/ca7a53d3993993d9882de2591b084fd83a1ddbc9.webp",
        "https://img.cofynd.com/images/latest_images_2024/72f8a49307d8a60ad88464895ee00aba630c972a.webp"
      ]
    },
    {
      "id": 63,
      "name": "Fume Coworking 1.0 Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2a1144a2004112f00292d0095892e1aaddf8b158.webp",
        "https://img.cofynd.com/images/latest_images_2024/1bb41f5f3133710f21f20ce8c5b0003c7820b796.webp",
        "https://img.cofynd.com/images/latest_images_2024/d504f252a1f7ff825eaf71ee8dcb5503ba0a3a82.webp",
        "https://img.cofynd.com/images/latest_images_2024/3b5a021ae25c120a6c178c4b4e1e3e963e75690a.webp",
        "https://img.cofynd.com/images/latest_images_2024/343ee9a4aaacb38faeff8ad8271f19127fece54b.webp"
      ]
    },
    {
      "id": 107,
      "name": "Galaxy Cowork Netaji Subhash Place",
      "badge": "Popular",
      "rating": null,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a4b20492ab4c8fd128c1e852dc6be81d73308ed7.webp",
        "https://img.cofynd.com/images/latest_images_2024/c798d5ef198a0a70732a1f5de293a567c73d5a65.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d07e85779c9d43f2c9bef88695f534dbab091d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/27594951ed33ae1bee1e7c89fdfb8335cd90607e.webp",
        "https://img.cofynd.com/images/latest_images_2024/0135a71271ae8dc9bbe1bf054f8e17752549698c.webp"
      ]
    },
    {
      "id": 54,
      "name": "Brainy Colony Rohini",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rohini",
      "location": "Rohini, Delhi",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f4e05e74859924e8918a5bb661830ea92d07c60f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4412da3c83da5c07699d4a202d97585cb491bc9f.webp",
        "https://img.cofynd.com/images/latest_images_2024/f8d9ba891a514d2c1ed2d1d2f1ed16bebc55e1e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/2575018cc8ac248ce9885b10609bd9ee29c41a02.webp"
      ]
    },
    {
      "id": 73,
      "name": "Supreme Cowork Netaji Subhash Place",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Netaji Subhash Place",
      "location": "Netaji Subhash Place, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3fe64b2bce64f83b76611b407692d5d0b079903a.webp",
        "https://img.cofynd.com/images/latest_images_2024/329af6b9152cf912cd2a8717bcc254d220c4b6d7.webp",
        "https://img.cofynd.com/images/latest_images_2024/560b1f45c861332cbe4d5bfce6fe9849d851fc3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/f0161291ac783ffd8e9ab1c25c7d4267955dd20f.webp",
        "https://img.cofynd.com/images/latest_images_2024/0d9b1b6185bda7047280e372f19a54e24beb440c.webp"
      ]
    },
    {
      "id": 204,
      "name": "Nyro Workclub Moti Nagar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Moti Nagar",
      "location": "Moti Nagar, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/63293ffbaa28ad5de18c85be3d3d83d654ad96a8.webp",
        "https://img.cofynd.com/images/latest_images_2024/607c154b615123fb1a35cee77be3699484a47d75.webp",
        "https://img.cofynd.com/images/latest_images_2024/51bd66518ddb3405038bcda391267999717b510a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a9b85b9945f59afb596f702c32c35893f99f219e.webp",
        "https://img.cofynd.com/images/latest_images_2024/568420511291c03c16c80458f424942d3fdf1824.webp"
      ]
    },
    {
      "id": 218,
      "name": "Daftar Cowork 1.0 North Delhi",
      "badge": "Popular",
      "rating": 4.7,
      "area": "North Delhi",
      "location": "North Delhi, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4ec418e8448d9d509ff86ce158cfb40bc59b2632.webp",
        "https://img.cofynd.com/images/original/c0ca5e4b39d126c32c5e3f7c6455e865af4a1f50.jpg",
        "https://img.cofynd.com/images/latest_images_2024/9d3cd3acce6913cd4e006301b02f9f6988ee1c62.webp",
        "https://img.cofynd.com/images/original/b7d29e939596c261aeef7a8ea09b8ad7c9bb6f91.jpg",
        "https://img.cofynd.com/images/latest_images_2024/35b26f3d97fe8766362863962e43b1250751827e.webp"
      ]
    },
    {
      "id": 232,
      "name": "Daftar Cowork (2.0 Elevate) North Delhi",
      "badge": "Premium",
      "rating": 4.7,
      "area": "North Delhi",
      "location": "North Delhi, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a611589d948718aebd439a5882cb27046771641f.webp",
        "https://img.cofynd.com/images/latest_images_2024/96ce40194b690ba3927ff256bab675ac6d83dc7a.webp",
        "https://img.cofynd.com/images/latest_images_2024/c183787fe685c6ba764658ad705ea362732d1da6.webp",
        "https://img.cofynd.com/images/latest_images_2024/7938945d5a9198961960eeefe03928e426463706.webp",
        "https://img.cofynd.com/images/latest_images_2024/4e37f4e4ca075dc59c5e0c7a4d51645f05364fff.webp"
      ]
    }
  ],
  "Rajouri Garden": [
    {
      "id": 13,
      "name": "Corporate Blu A Rajouri Garden",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rajouri Garden",
      "location": "Rajouri Garden, Delhi",
      "price": "₹4,499",
      "period": "/ Month",
      "priceFormatted": "₹4,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9a151acc6571b19ba35d3e6dd1de7c1a6f76c6f3.webp",
        "https://img.cofynd.com/images/latest_images_2024/bba443499a7924fbc70abba032c7e5b939881041.webp",
        "https://img.cofynd.com/images/latest_images_2024/8ac2150f5cd5912a7844233a006ae6a6a359b146.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c3eca7ba71323e8d83a6104855a41edd9384f46.webp"
      ]
    },
    {
      "id": 13,
      "name": "Corporate Blu A Rajouri Garden",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Rajouri Garden",
      "location": "Rajouri Garden, Delhi",
      "price": "₹4,499",
      "period": "/ Month",
      "priceFormatted": "₹4,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9a151acc6571b19ba35d3e6dd1de7c1a6f76c6f3.webp",
        "https://img.cofynd.com/images/latest_images_2024/bba443499a7924fbc70abba032c7e5b939881041.webp",
        "https://img.cofynd.com/images/latest_images_2024/8ac2150f5cd5912a7844233a006ae6a6a359b146.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c3eca7ba71323e8d83a6104855a41edd9384f46.webp"
      ]
    },
    {
      "id": 149,
      "name": "Workaholics Spaces Bali Nagar",
      "badge": "Verified",
      "rating": 4.9,
      "area": "Bali Nagar",
      "location": "Bali Nagar, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/36175b0e5e43e81143e45cd3a074d2117c8d81e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/a82ba305cbb1e3e8d6a098d5275637cce665b28f.webp",
        "https://img.cofynd.com/images/latest_images_2024/a73d3baff2372f63bbdb4c28ae8d32be98083258.webp",
        "https://img.cofynd.com/images/latest_images_2024/d04431391d41caa09aa9b1315d2ca232d5f02006.webp",
        "https://img.cofynd.com/images/latest_images_2024/106d8d2c786bd4640b6d1a373923b701c32321db.webp"
      ]
    },
    {
      "id": 150,
      "name": "Work Alley Punjabi Bagh",
      "badge": "Special Offer",
      "rating": 5,
      "area": "Punjabi Bagh",
      "location": "Punjabi Bagh, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1958d2f49f9a96c6a8b3d2fac96f6b08f95ff708.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c9e6addaae5100d8ba451996a1ce1c13eb853bc.webp",
        "https://img.cofynd.com/images/latest_images_2024/e9f0f3ee0e2da7f53345cecd927b89acc80aee2c.webp",
        "https://img.cofynd.com/images/latest_images_2024/535754f9ede88654da98f238e701601277ab6b50.webp",
        "https://img.cofynd.com/images/latest_images_2024/1e405154f3a59ba0a0e49526c61c9e9020b22fe3.webp"
      ]
    },
    {
      "id": 151,
      "name": "Deal4ask Co-Working Tilak Nagar",
      "badge": "Special Offer",
      "rating": 4.5,
      "area": "Tilak Nagar",
      "location": "Tilak Nagar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6f2fe0a135ac38c6e5d48695d8a72959ac69dd20.webp",
        "https://img.cofynd.com/images/latest_images_2024/5664e956e1c91498b34e63799728ec1046e80169.webp",
        "https://img.cofynd.com/images/latest_images_2024/75a88f02c66850b96ba9f370b52cca1b48ca3293.webp",
        "https://img.cofynd.com/images/latest_images_2024/06d7a3632c7fd19be2368ba9201c50150dc95d9c.webp",
        "https://img.cofynd.com/images/latest_images_2024/36594a0d11664c1b7c04a76ce3060eb6779b90ec.webp"
      ]
    },
    {
      "id": 152,
      "name": "4U Coworks Subhash Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Subhash Nagar",
      "location": "Subhash Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e1a9f10ec3e654768aa564967f3679d6fc4494e2.webp",
        "https://img.cofynd.com/images/latest_images_2024/d684530e3cf737132ce08ea10bb1b77e3f7d4b14.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7edf5bf69f7b1de73eb5097ae155d40a4a6d036.webp",
        "https://img.cofynd.com/images/latest_images_2024/32b351c549338b857f47fea28d3f254198bcd64e.webp",
        "https://img.cofynd.com/images/latest_images_2024/dd74bb12f19c1eb428b4b67b6de5085d6fb8530f.webp"
      ]
    },
    {
      "id": 153,
      "name": "Spring House Naraina",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Naraina",
      "location": "Naraina, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/dc28c29def09bafae3c542d637a2579a887f4f9b.webp",
        "https://img.cofynd.com/images/latest_images_2024/811a7f4687f2c71e18f0e37169e8e69cdd96a963.webp",
        "https://img.cofynd.com/images/latest_images_2024/46d37abd30b6709a51e02cb3bb6c5459a5a51f7d.webp",
        "https://img.cofynd.com/images/latest_images_2024/33b51bf46f8e70fee7865ce4e896a96ae5fd07a6.webp",
        "https://img.cofynd.com/images/latest_images_2024/c702f76ec427560548f04423575a6834da9124d6.webp"
      ]
    },
    {
      "id": 154,
      "name": "Spacio Co-Working Moti Nagar",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Moti Nagar",
      "location": "Moti Nagar, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/df052dc9bda4db8a0c1f0f7f6243ef5c94d58509.webp",
        "https://img.cofynd.com/images/latest_images_2024/51f3a715c43da7b8ef23014ff0fa26a13059875a.webp",
        "https://img.cofynd.com/images/latest_images_2024/3afd1dc0c27a67491fedefee96a14d7e9b6ceddf.webp",
        "https://img.cofynd.com/images/latest_images_2024/5e679e1531fda37b3580ef87c5dfed819595df3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/4e5130ccae5783c386c1bff96d5b504be737ed56.webp"
      ]
    },
    {
      "id": 155,
      "name": "Spot Space Moti Nagar",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Moti Nagar",
      "location": "Moti Nagar, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/fdd0b7c528ce8cccf5af6c4301f4943d775f4b3e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f0ffc6e218d2b3ef8e4f30b22380260998e0712f.webp",
        "https://img.cofynd.com/images/latest_images_2024/de30a6293ff722a730b0c65ef9e8c4f52002c47b.webp",
        "https://img.cofynd.com/images/latest_images_2024/8a82e15b96ee37927482bde1e73c4bb0f2dfd827.webp",
        "https://img.cofynd.com/images/latest_images_2024/e49c2fe21a6243e6dafa2c96a608658e5e5c3e4b.webp"
      ]
    },
    {
      "id": 75,
      "name": "Spring House SHDL003 Janakpuri",
      "badge": "Premium",
      "rating": 5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7fd735bb9361019969f71dbdc27fb2e7973ce358.webp",
        "https://img.cofynd.com/images/latest_images_2024/eb9f32651231d6c4ef8a466a2a63e4a00c2a1583.webp",
        "https://img.cofynd.com/images/latest_images_2024/9592e5ef3c786902e984719dc0599768caffa9a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/5865b73dd55f7d3a344841982ca7ae6b9cd092e7.webp",
        "https://img.cofynd.com/images/latest_images_2024/6c1ac119aec3ba9554fab8221437279dab5e7efc.webp"
      ]
    },
    {
      "id": 205,
      "name": "Covork Paschim Vihar",
      "badge": "Verified",
      "rating": null,
      "area": "Paschim Vihar",
      "location": "Paschim Vihar, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/44117323dfb530dfa6d9eb4bc0c892b3e0385384.jpg",
        "https://img.cofynd.com/images/original/61314e30a58b91131c35a14f7c20193a5ac2a2af.jpg",
        "https://img.cofynd.com/images/latest_images_2024/9de180b46d9267ae4ee0d10ba7a3f6a5ef9f8b20.webp",
        "https://img.cofynd.com/images/latest_images_2024/e2b20a865647a9e72002dc21a64048a33434ed5e.webp",
        "https://img.cofynd.com/images/latest_images_2024/ca138e1b7896bbfc5ea0fb6b02a558ce65d2d97f.webp"
      ]
    },
    {
      "id": 219,
      "name": "G Connect Spaces Mayapuri",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Mayapuri",
      "location": "Mayapuri, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6c7f75366107f47b1b0ca14434d3bd0db1c1f04e.webp",
        "https://img.cofynd.com/images/original/4907f56bc63af5cfea57261beb406534e4fa467c.jpg",
        "https://img.cofynd.com/images/original/d1b4f3ac7520a8adbea060f2daa152c490f00e46.jpg",
        "https://img.cofynd.com/images/latest_images_2024/cf035a6cb41619ca842ba176a7f907f4af5c01c0.webp",
        "https://img.cofynd.com/images/latest_images_2024/b41cb9e2141118e2cb4717059e8e4bf980aba553.webp"
      ]
    }
  ],
  "Vasant Kunj": [
    {
      "id": 14,
      "name": "Peer Share Vasant Kunj",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Vasant Kunj",
      "location": "Vasant Kunj, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a64b2fcf1a59510327c7fb51dc13e28cc8e72eef.webp",
        "https://img.cofynd.com/images/latest_images_2024/604913caf24e709e99bc434f45b774a32e2946ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/3ae5211926153e43ddc4e1b9a821dc68af2e990c.webp",
        "https://img.cofynd.com/images/latest_images_2024/406707316f95b78fc4f592e765d9419553cb74b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/b2c78606d578872d8fa1e6809070b69bbc61ed81.webp"
      ]
    },
    {
      "id": 37,
      "name": "Nearby Desk Vasant Kunj",
      "badge": "Premium",
      "rating": null,
      "area": "Vasant Kunj",
      "location": "Vasant Kunj, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0385c2b9c937b2ac2001ff729b6d3fecbe1c99a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/b7ec077f447046e26f23ea74ed90da692b17090a.webp",
        "https://img.cofynd.com/images/latest_images_2024/f054296d8cad3bc8d49a2d5ed851bba9c1df6a65.webp",
        "https://img.cofynd.com/images/latest_images_2024/d6b4b882c4e419625bcd0a97d6e47557dab369e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d56ac9486fc16053666dc6e4f655ec3e80af0fb.webp"
      ]
    },
    {
      "id": 37,
      "name": "Nearby Desk Vasant Kunj",
      "badge": "Premium",
      "rating": null,
      "area": "Vasant Kunj",
      "location": "Vasant Kunj, Delhi",
      "price": "₹7,499",
      "period": "/ Month",
      "priceFormatted": "₹7,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0385c2b9c937b2ac2001ff729b6d3fecbe1c99a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/b7ec077f447046e26f23ea74ed90da692b17090a.webp",
        "https://img.cofynd.com/images/latest_images_2024/f054296d8cad3bc8d49a2d5ed851bba9c1df6a65.webp",
        "https://img.cofynd.com/images/latest_images_2024/d6b4b882c4e419625bcd0a97d6e47557dab369e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/7d56ac9486fc16053666dc6e4f655ec3e80af0fb.webp"
      ]
    },
    {
      "id": 14,
      "name": "Peer Share Vasant Kunj",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Vasant Kunj",
      "location": "Vasant Kunj, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a64b2fcf1a59510327c7fb51dc13e28cc8e72eef.webp",
        "https://img.cofynd.com/images/latest_images_2024/604913caf24e709e99bc434f45b774a32e2946ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/3ae5211926153e43ddc4e1b9a821dc68af2e990c.webp",
        "https://img.cofynd.com/images/latest_images_2024/406707316f95b78fc4f592e765d9419553cb74b2.webp",
        "https://img.cofynd.com/images/latest_images_2024/b2c78606d578872d8fa1e6809070b69bbc61ed81.webp"
      ]
    },
    {
      "id": 156,
      "name": "Synq.Work Sector 29",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Sector 29",
      "location": "Sector 29, Delhi",
      "price": "₹13,499",
      "period": "/ Month",
      "priceFormatted": "₹13,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c08f05712a06590a4b3951b0b2c017773d8c61fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/c9571412aaa0be682896686cf8e4baf3f502a6c6.webp",
        "https://img.cofynd.com/images/latest_images_2024/22103b2382b45eec86c96762a3088f44aa301fe1.webp",
        "https://img.cofynd.com/images/latest_images_2024/36d96bded9485d232aa0966126230c01fb3a610b.webp"
      ]
    },
    {
      "id": 157,
      "name": "Elegant Workspaces Sultanpur",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Sultanpur",
      "location": "Sultanpur, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/64b1b2587d9baadb3d9aba2e7d54c6b1f59ac185.webp",
        "https://img.cofynd.com/images/latest_images_2024/54360de93f8bc2128a5bde4516ce8ad1d7cc2d64.webp",
        "https://img.cofynd.com/images/latest_images_2024/453f41ae699a515cbbf61515c21d057f9baa3d58.webp",
        "https://img.cofynd.com/images/latest_images_2024/687642683b5b6404f4f09fd091245b72b793f2d0.webp",
        "https://img.cofynd.com/images/latest_images_2024/40c99d93acfc776f97de0ec350950110634221d6.webp"
      ]
    },
    {
      "id": 147,
      "name": "SupremeWork Chattarpur",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Chattarpur",
      "location": "Chattarpur, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4509f45aed0d0fdb8e1f1b522ebf8edaf52f9cfa.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b54080ea80ddfe5bf2e3ede0fb8a5c9170b6dc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/161a9cc9d1eefd1637989e2a6342be58d34ad278.webp",
        "https://img.cofynd.com/images/latest_images_2024/73ff6f13ac2ba839d049bb84d7531319cbaae819.webp",
        "https://img.cofynd.com/images/latest_images_2024/b53aeb95ca4564cb6000757bbcdbe584eca6d92d.webp"
      ]
    },
    {
      "id": 105,
      "name": "The Executive Centre Saket",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Saket",
      "location": "Saket, Delhi",
      "price": "₹59,999",
      "period": "/ Month",
      "priceFormatted": "₹59,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d58e1875b6bbb951a70be848d450ac26e2275b10.webp",
        "https://img.cofynd.com/images/latest_images_2024/f528a233ffe8f03eee0099f5cef65696f73d52db.webp",
        "https://img.cofynd.com/images/latest_images_2024/20fb3d23189d45ba8595a19579f79081f50b892d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d85cdaaf2dde3a1283b5e222b8fab92c0d44fd1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/06c37aeb91c8d6a0c80bed37d3c6e0a0f294c0fd.webp"
      ]
    },
    {
      "id": 158,
      "name": "Peer Share Sultanpur",
      "badge": "Popular",
      "rating": 5,
      "area": "Sultanpur",
      "location": "Sultanpur, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ad40a1f729f29bf4123e93227cdaa196d2949e24.webp",
        "https://img.cofynd.com/images/latest_images_2024/bc1cc80d9528f2e9dd0afc137dd03ba8a3ca564e.webp",
        "https://img.cofynd.com/images/latest_images_2024/2b2e1b86f365061e57d849285d6c391e4c5c496b.webp",
        "https://img.cofynd.com/images/latest_images_2024/b779e1345d8bcbfa19e066dfb53a4b994a5328b4.webp",
        "https://img.cofynd.com/images/latest_images_2024/dbb407bea59fac9d9284a7412cac9e71d478ac87.webp"
      ]
    },
    {
      "id": 69,
      "name": "The Executive Centre Aerocity",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Aerocity",
      "location": "Aerocity, Delhi",
      "price": "₹41,999",
      "period": "/ Month",
      "priceFormatted": "₹41,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1698b6cdb65e213d9d415cc281fca2e5bdd72233.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd459eadf0158570ed18692e317ddfaf10cf3e12.webp",
        "https://img.cofynd.com/images/latest_images_2024/16534b892da774f6b6da6261bdd4dba772fe73db.webp",
        "https://img.cofynd.com/images/latest_images_2024/76af7296283445ae8aafb9e9a5b9593f05153e55.webp",
        "https://img.cofynd.com/images/latest_images_2024/35cde1abb4445baeb9742548abb4e0904cd75689.webp"
      ]
    },
    {
      "id": 206,
      "name": "Livance Coworking Ghitorni",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Ghitorni",
      "location": "Ghitorni, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/affe6768bfa0bd065ff19de06331ee75fcf0fb4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/d8f3a66bb09d2bc3c367617c0451d0c10c8a32be.webp",
        "https://img.cofynd.com/images/latest_images_2024/4725be173ff7d5ac41ab334facb73a0a0b5c5e02.webp",
        "https://img.cofynd.com/images/latest_images_2024/027513e8de3a4fac2e78b4d2a79b7574029e6a24.webp",
        "https://img.cofynd.com/images/latest_images_2024/d327b6daf9ee568230b4421e087123a1f9adcfbf.webp"
      ]
    },
    {
      "id": 221,
      "name": "Peer Share Vasant Vihar",
      "badge": "Verified",
      "rating": 4.7,
      "area": "Vasant Vihar",
      "location": "Vasant Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/da7f54b5ed269a9420459039cde7eb0ea75f3c38.jpg",
        "https://img.cofynd.com/images/original/8c296e81be9c7c70f5c090f767f53433d6fd80a2.jpg",
        "https://img.cofynd.com/images/original/0075d9a3d21011a4a51310c1aded0f010cd9145e.jpg",
        "https://img.cofynd.com/images/original/fe921336049779ed67c1dbe6eacbc23394d5335f.jpg",
        "https://img.cofynd.com/images/original/742bb1fdcbc8b8b247b3dd272a9d2731736b3fb6.jpg"
      ]
    },
    {
      "id": 229,
      "name": "Zing Space 401 Ghitorni",
      "badge": "Special Offer",
      "rating": 4.6,
      "area": "Ghitorni",
      "location": "Ghitorni, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/39683054cca57e5164a0e7b2b28061aa2bbb33e4.webp",
        "https://img.cofynd.com/images/latest_images_2024/e43a282c484a12f22b2a261d3fcaba5955ee0f0d.webp",
        "https://img.cofynd.com/images/latest_images_2024/365685cb402793a06c9dad2294cf304aa9c51683.webp",
        "https://img.cofynd.com/images/latest_images_2024/0bc7e0d93facc4abf45fa0e6441c9def543ffecd.webp",
        "https://img.cofynd.com/images/latest_images_2024/7f817da0500746e6820bdda7fc53b6237eeb23d9.webp"
      ]
    }
  ],
  "Laxmi Nagar": [
    {
      "id": 15,
      "name": "Office On Laxmi Nagar",
      "badge": "Special Offer",
      "rating": 4.5,
      "area": "Laxmi Nagar",
      "location": "Laxmi Nagar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/dbd987d76ac760bf53c33ea2b6e66cd1e478fc0c.webp",
        "https://img.cofynd.com/images/latest_images_2024/d10dbd5c632ed88dd4791ffb665f7cb1f4c89e01.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0e672cc78ede9baffcfe6df5c054574de358828.webp",
        "https://img.cofynd.com/images/latest_images_2024/b355d981e2df15be006835f7b285ac45cf364134.webp",
        "https://img.cofynd.com/images/latest_images_2024/fac90594f0ad3e99d48818602c703859d5c4ec12.webp"
      ]
    },
    {
      "id": 38,
      "name": "Wbb Office Laxmi Nagar",
      "badge": "Special Offer",
      "rating": 4.3,
      "area": "Laxmi Nagar",
      "location": "Laxmi Nagar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58033e5c85af9d81b42184237b9facb86a5b5a79.webp",
        "https://img.cofynd.com/images/latest_images_2024/6a6583599bdc1d2e0715c68ffb9ec4c3eb0cf0a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/1356c5caa07f4062e440f3332ac6fa32e01e0c6b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d5b901898841dd30d20b3906378ca054e89e53f.webp",
        "https://img.cofynd.com/images/latest_images_2024/9798e8387e4127e902593a962f61fa9f5175dd1f.webp"
      ]
    },
    {
      "id": 15,
      "name": "Office On Laxmi Nagar",
      "badge": "Special Offer",
      "rating": 4.5,
      "area": "Laxmi Nagar",
      "location": "Laxmi Nagar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/dbd987d76ac760bf53c33ea2b6e66cd1e478fc0c.webp",
        "https://img.cofynd.com/images/latest_images_2024/d10dbd5c632ed88dd4791ffb665f7cb1f4c89e01.webp",
        "https://img.cofynd.com/images/latest_images_2024/c0e672cc78ede9baffcfe6df5c054574de358828.webp",
        "https://img.cofynd.com/images/latest_images_2024/b355d981e2df15be006835f7b285ac45cf364134.webp",
        "https://img.cofynd.com/images/latest_images_2024/fac90594f0ad3e99d48818602c703859d5c4ec12.webp"
      ]
    },
    {
      "id": 38,
      "name": "Wbb Office Laxmi Nagar",
      "badge": "Special Offer",
      "rating": 4.3,
      "area": "Laxmi Nagar",
      "location": "Laxmi Nagar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58033e5c85af9d81b42184237b9facb86a5b5a79.webp",
        "https://img.cofynd.com/images/latest_images_2024/6a6583599bdc1d2e0715c68ffb9ec4c3eb0cf0a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/1356c5caa07f4062e440f3332ac6fa32e01e0c6b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d5b901898841dd30d20b3906378ca054e89e53f.webp",
        "https://img.cofynd.com/images/latest_images_2024/9798e8387e4127e902593a962f61fa9f5175dd1f.webp"
      ]
    },
    {
      "id": 159,
      "name": "Thrive Coworking Nirman Vihar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Nirman Vihar",
      "location": "Nirman Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f4dcedb0a383bafed84b2e90b7bcfd1683a70893.webp",
        "https://img.cofynd.com/images/original/f1da3bf510a3d4cc5f3c400bb2461c1e39dc7b23.jpg",
        "https://img.cofynd.com/images/latest_images_2024/5b8981aa5bca96f5c58c1edc9dd7e95eaae04d30.webp",
        "https://img.cofynd.com/images/original/5fbc9aa4b1f2dd7bc692abaf95199d6f17bdf243.jpg",
        "https://img.cofynd.com/images/original/71afb0079dcc4ab84f238d8a2f61016f0cec66d5.jpg"
      ]
    },
    {
      "id": 160,
      "name": "CloudSpace Preet Vihar",
      "badge": "Verified",
      "rating": null,
      "area": "Preet Vihar",
      "location": "Preet Vihar, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8f0411437673d22aac6973615518bf390d1a7e6d.webp",
        "https://img.cofynd.com/images/latest_images_2024/841a0ad3e65b3566819812d9bcca88ccdef50815.webp",
        "https://img.cofynd.com/images/latest_images_2024/3d997620784051e0847103a116a84168721c104b.webp",
        "https://img.cofynd.com/images/latest_images_2024/fc077db9f0169d0e2fb3298215e8846f5cf36bac.webp",
        "https://img.cofynd.com/images/latest_images_2024/3527e2ae858b497b06285e93089d92cd87557c67.webp"
      ]
    },
    {
      "id": 161,
      "name": "Co-offiz Preet Vihar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Preet Vihar",
      "location": "Preet Vihar, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/bf1c8c496a7c4a68d2246527403a5b394b954f42.webp",
        "https://img.cofynd.com/images/latest_images_2024/22a45b36b42dc70e5bcf6119b392284201c46c02.webp",
        "https://img.cofynd.com/images/latest_images_2024/1189da3ce6bf83c87ecdef5efe3f9ad706c4dfe2.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b3e6a7b6c77de10802e6f2acc026ef182c5ae9f.webp",
        "https://img.cofynd.com/images/latest_images_2024/1e4c52a56c16db61a9636c2712755552695718b0.webp"
      ]
    },
    {
      "id": 162,
      "name": "T Wrks KarKardooma",
      "badge": "Popular",
      "rating": 4.9,
      "area": "KarKardooma",
      "location": "KarKardooma, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/36a74c1c5af04db54ef7442a20b38c6e4ce877b1.webp",
        "https://img.cofynd.com/images/latest_images_2024/440e6d156cf5bac3cf984e02f3d05eab44b59a7c.webp",
        "https://img.cofynd.com/images/latest_images_2024/09d0feb292ac6f09e36f8e2773c3b685eb87832a.webp",
        "https://img.cofynd.com/images/latest_images_2024/903e36636b8274c18c94cca9a06c6dd0bd636263.webp",
        "https://img.cofynd.com/images/latest_images_2024/c488f1cb28fd8870f68ee868d4131909ff60cbf4.webp"
      ]
    },
    {
      "id": 163,
      "name": "The Third Space Mayur Vihar",
      "badge": "Special Offer",
      "rating": 4.9,
      "area": "Mayur Vihar",
      "location": "Mayur Vihar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c01263e8df82b32f0b7551e920e34dad74ae80fd.webp",
        "https://img.cofynd.com/images/original/d303bc0a416420432e3da5c82a1961f29c3580df.jpg",
        "https://img.cofynd.com/images/latest_images_2024/5b5459b40ca5b30dd4721b924dab5d6305cd9131.webp",
        "https://img.cofynd.com/images/latest_images_2024/bc277c95088a6da76ce297ac9ccbcbd3d15a3746.webp",
        "https://img.cofynd.com/images/original/457c1b0d9fa54a5fd6583f595c0c5d92cc6fbd39.jpg"
      ]
    },
    {
      "id": 164,
      "name": "eTribe Coworking Mayur Vihar",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Mayur Vihar",
      "location": "Mayur Vihar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6566bc4ab60c62d6c9f69dae506853ac88de4f65.webp",
        "https://img.cofynd.com/images/latest_images_2024/c533a12f3231e5d060fbb74a29642965c179430a.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff74e062b33ff5d1c3d213f5f37c7904d36000a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/301f8668bd69050a21f3bd58ecc20bad190c8f00.webp",
        "https://img.cofynd.com/images/original/ae5103a03e466506d6c53735c179a2be0c741198.jpg"
      ]
    },
    {
      "id": 207,
      "name": "Cowork Mayur Vihar",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Mayur Vihar",
      "location": "Mayur Vihar, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/4c66fd9592cc2d520d840abf1377285f90522bf0.jpg",
        "https://img.cofynd.com/images/original/ee34e119662e6e6b2e7e6abecb7cf6419af5ca9d.jpg",
        "https://img.cofynd.com/images/original/628e8bf0547b2048963749a334e9b553f13716d2.jpg",
        "https://img.cofynd.com/images/original/048eb2cfcb62ce5565ec35b2e63207a1eb35a782.jpg",
        "https://img.cofynd.com/images/original/1af2d83e99f6b3476ed27744d4c275b8db255e54.jpg"
      ]
    },
    {
      "id": 208,
      "name": "Abhiwan Coworking Sector 62",
      "badge": "Verified",
      "rating": null,
      "area": "Sector 62",
      "location": "Sector 62, Delhi",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9f3be684cb92bcb9c54c0ab75bb4df2030dd148f.webp",
        "https://img.cofynd.com/images/latest_images_2024/bdcb42ecbd6a609e5e44e990c930e413e65d043f.webp",
        "https://img.cofynd.com/images/latest_images_2024/650ec9b3f17b35022e92d0f19bd9585f1bc68215.webp",
        "https://img.cofynd.com/images/latest_images_2024/24448ca70d8e62ea9f9f55a178d3e0eeb8155c31.webp",
        "https://img.cofynd.com/images/latest_images_2024/115ea106b0db757578fcca4ea698728406f26938.webp"
      ]
    },
    {
      "id": 209,
      "name": "Cocoweave Preet Vihar",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Preet Vihar",
      "location": "Preet Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e47316cf9b217b3f01b50141eb5ad1e8546fcdfe.webp",
        "https://img.cofynd.com/images/latest_images_2024/bffd430e3fc2c491d8039556533d59892dd9cb25.webp",
        "https://img.cofynd.com/images/latest_images_2024/fe4fce86e11eade4b9f48d35ac00665fad648387.webp",
        "https://img.cofynd.com/images/latest_images_2024/82b36154fe613d358c50a18faf147091f42b8459.webp",
        "https://img.cofynd.com/images/original/e15d283defbcf3bcb7b37df6159b309d68529875.jpg"
      ]
    },
    {
      "id": 210,
      "name": "Cobox iThum Tower Sector 62",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Sector 62",
      "location": "Sector 62, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/b2ca3b302ea74ea692d64a154442a4b2b46c19d0.jpg",
        "https://img.cofynd.com/images/original/9519a0ce4ea9fef2c3fee4fa07a5c9c314cdce54.jpg",
        "https://img.cofynd.com/images/original/f009340b6414c3b05beac9508eab8d87b141339c.jpg",
        "https://img.cofynd.com/images/original/d1667108e30d3b4b465923bfe1db82ed51b635bf.jpg",
        "https://img.cofynd.com/images/original/a9bd121522135cd44a8124fd8db7136f4a5c4b35.jpg"
      ]
    },
    {
      "id": 211,
      "name": "Regus District Center Mayur Vihar",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Mayur Vihar",
      "location": "Mayur Vihar, Delhi",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/211bea9ee8f2558fed4791f5feecba021907ed53.webp",
        "https://img.cofynd.com/images/latest_images_2024/6fc8c7aaa415d6193a5c0c711a49f17fdda7b783.webp",
        "https://img.cofynd.com/images/latest_images_2024/f988b0651f6c81ec8b95bbda71467fdd764fa8cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/646c1c45ba841a080f89d28929d6acf1ec85e28e.webp",
        "https://img.cofynd.com/images/latest_images_2024/1209fccc1168477f62cbcf8aa3017a7b85a6216a.webp"
      ]
    },
    {
      "id": 212,
      "name": "Workhive Mayur Vihar",
      "badge": "Popular",
      "rating": 4.3,
      "area": "Mayur Vihar",
      "location": "Mayur Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b48a43177937eedbe006ee3061d9ec84fbe979fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/6eed29a572da75a3fefd3c8cfbfa9748d7ae410c.webp",
        "https://img.cofynd.com/images/original/b2d9b4512c2ab7a3e6c8d17ed126ad987ed9c8c3.jpg",
        "https://img.cofynd.com/images/latest_images_2024/7d8671ec32c95e46bfef2da40e33e7e6867599be.webp",
        "https://img.cofynd.com/images/latest_images_2024/a1832dbd99aebdba46d7e326d54b589863ccfb61.webp"
      ]
    },
    {
      "id": 224,
      "name": "Bollco Co-working East Delhi",
      "badge": "Premium",
      "rating": 4.7,
      "area": "East Delhi",
      "location": "East Delhi, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8eac05460107855219bead614a112de6a9f5e7e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/94b2271ec8db3b9bb144a8ed9f40186b81a77606.webp",
        "https://img.cofynd.com/images/latest_images_2024/cc1e4365c0d3e4bb8345cb28a5d7a31a979905be.webp",
        "https://img.cofynd.com/images/latest_images_2024/82445c3ed8320f499f7c7f892a6a8e25f2d60602.webp",
        "https://img.cofynd.com/images/latest_images_2024/800345583ca8906866b7cbc3cc800cb20525d375.webp"
      ]
    },
    {
      "id": 226,
      "name": "Bollco Anand Vihar",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Anand Vihar",
      "location": "Anand Vihar, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b3f3bc90ad8236a540601c9e316bf1e4163f965e.webp",
        "https://img.cofynd.com/images/latest_images_2024/c9c6af0ae6e3dd6e052d5ac21ca66fafc510e38b.webp",
        "https://img.cofynd.com/images/latest_images_2024/4feb0996ccf1fef102c06368f8b2f2caef78b61a.webp",
        "https://img.cofynd.com/images/latest_images_2024/91e57fdef010ca369fe44ce13b07db5444d27cd2.webp",
        "https://img.cofynd.com/images/latest_images_2024/b4e202815c7a0e5cba01c9fcb957bca56265fcc2.webp"
      ]
    },
    {
      "id": 234,
      "name": "The Bright Vibes Dayanand Vihar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Dayanand Vihar",
      "location": "Dayanand Vihar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d7b6009b35c917e4c2a4e2c974a5a18eca01db77.webp",
        "https://img.cofynd.com/images/latest_images_2024/e94f54b39d3b5a1f254d4c0ef86187f8c79795c8.webp",
        "https://img.cofynd.com/images/latest_images_2024/aab2e354a7333a9f0bfd89519a7bdc51119d74b4.webp",
        "https://img.cofynd.com/images/latest_images_2024/2d192853668a8a8e5d457657493726649bf59c99.webp",
        "https://img.cofynd.com/images/latest_images_2024/18721ff5d6ef9b29ae91b17366c38dd487760cdf.webp"
      ]
    }
  ],
  "Hauz Khas": [
    {
      "id": 16,
      "name": "Delhi Co. Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/72de1e68fc8ef843dd4b27abdac428781539de42.webp",
        "https://img.cofynd.com/images/original/c527e7be02ceb5ec517c0c6d14c2fbb26d2765e0.jpg",
        "https://img.cofynd.com/images/original/6a40de21eb2f8d6d01a4ea835e5315ce2813a2ce.jpg",
        "https://img.cofynd.com/images/latest_images_2024/949ac8477264a52fe110e6f9015b485bd220dfe7.webp",
        "https://img.cofynd.com/images/latest_images_2024/3037c455fe3d1052a4134b59a21bbbdd24bcf509.webp"
      ]
    },
    {
      "id": 39,
      "name": "Spaced Out Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94340b39a09e8ec80ebf078af02478accd1e7f8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8ccac9a31fb427f704ec0995076e0fcfcd47403.webp",
        "https://img.cofynd.com/images/latest_images_2024/a199f072061d700886b2574813a4d803df004992.webp",
        "https://img.cofynd.com/images/latest_images_2024/e10a13d3a83cd847422a4ad1656f141822117e66.webp",
        "https://img.cofynd.com/images/original/b572503859e4e986a98a57bda6f8ea3ec0f824b2.jpg"
      ]
    },
    {
      "id": 55,
      "name": "Cowork Pad Hauz Khas",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/44e1931969cdc3cd49ff798b0dcd47398f411b79.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c23975ba9bbfd39a482736859cfe0d58631c9cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/4618344018db71f891b2fd802e36679438fee232.webp",
        "https://img.cofynd.com/images/latest_images_2024/2e8bfc7c629f6c9c11e3098c8a8a6f15b75720ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf88304cc2f73a1ee7e008c5e1025f9027e085a.webp"
      ]
    },
    {
      "id": 55,
      "name": "Cowork Pad Hauz Khas",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/44e1931969cdc3cd49ff798b0dcd47398f411b79.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c23975ba9bbfd39a482736859cfe0d58631c9cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/4618344018db71f891b2fd802e36679438fee232.webp",
        "https://img.cofynd.com/images/latest_images_2024/2e8bfc7c629f6c9c11e3098c8a8a6f15b75720ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf88304cc2f73a1ee7e008c5e1025f9027e085a.webp"
      ]
    },
    {
      "id": 39,
      "name": "Spaced Out Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94340b39a09e8ec80ebf078af02478accd1e7f8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8ccac9a31fb427f704ec0995076e0fcfcd47403.webp",
        "https://img.cofynd.com/images/latest_images_2024/a199f072061d700886b2574813a4d803df004992.webp",
        "https://img.cofynd.com/images/latest_images_2024/e10a13d3a83cd847422a4ad1656f141822117e66.webp",
        "https://img.cofynd.com/images/original/b572503859e4e986a98a57bda6f8ea3ec0f824b2.jpg"
      ]
    },
    {
      "id": 16,
      "name": "Delhi Co. Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/72de1e68fc8ef843dd4b27abdac428781539de42.webp",
        "https://img.cofynd.com/images/original/c527e7be02ceb5ec517c0c6d14c2fbb26d2765e0.jpg",
        "https://img.cofynd.com/images/original/6a40de21eb2f8d6d01a4ea835e5315ce2813a2ce.jpg",
        "https://img.cofynd.com/images/latest_images_2024/949ac8477264a52fe110e6f9015b485bd220dfe7.webp",
        "https://img.cofynd.com/images/latest_images_2024/3037c455fe3d1052a4134b59a21bbbdd24bcf509.webp"
      ]
    },
    {
      "id": 40,
      "name": "ABL Workspace Green Park",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35b65b8de7f6cd93865c40853239021bab609584.webp",
        "https://img.cofynd.com/images/latest_images_2024/95d6c8226ea462d5da9e6e17f5a1633a61cf84cc.webp",
        "https://img.cofynd.com/images/original/fb66a12364afab1d31b30427c00aff3df72fa384.jpg",
        "https://img.cofynd.com/images/original/918a5a0880f69821af2dd8715500b521cc42121b.jpg",
        "https://img.cofynd.com/images/latest_images_2024/98b12ff0ebcf28b3a7894cae65405370f7c056a4.webp"
      ]
    },
    {
      "id": 165,
      "name": "HUBIN Malviya Nagar",
      "badge": "Verified",
      "rating": null,
      "area": "Malviya Nagar",
      "location": "Malviya Nagar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/471268f98c2cbf6afa89b8b0373adea405948f59.webp",
        "https://img.cofynd.com/images/latest_images_2024/602fc7e29a60fef63224358a95c3aba6a4e619b7.webp",
        "https://img.cofynd.com/images/latest_images_2024/edaffbc35f4583d6b4e1af3735739853318a438f.webp",
        "https://img.cofynd.com/images/latest_images_2024/1a46c83bbe958cfb181bc3fa342469173d8e9f4b.webp"
      ]
    },
    {
      "id": 56,
      "name": "Green Coworking Space Green Park",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8660c8b5bba4d065b4024bd75894bbe1faaec988.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a085efb7fdb993396fd1525fd540319fe45fb71.webp",
        "https://img.cofynd.com/images/latest_images_2024/033eb0a50a02dce9963161b216bb9bd92f87089d.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ac20e61e8f7c4a01bd1fa21d1c81ef031918f4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/5feaa3eb69b9501842ffd7ec69df20febd065173.webp"
      ]
    },
    {
      "id": 166,
      "name": "Get Set Office Yusuf Sarai",
      "badge": "Popular",
      "rating": null,
      "area": "Yusuf Sarai",
      "location": "Yusuf Sarai, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d469bb3004a0112b4549ed5248c08bff4fdb0437.webp",
        "https://img.cofynd.com/images/latest_images_2024/712e444fc0fabebad8bfcada5c36ac2a8b99c3bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/7edec7a7b2bb151a1c1311fd55b7a0f961e98698.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ea0ed9df603fd56c90b7ef93dfe423b318d9f92.webp"
      ]
    },
    {
      "id": 213,
      "name": "SupremeWork Bhikaji Cama Place",
      "badge": "Near Metro",
      "rating": 2.8,
      "area": "Bhikaji Cama Place",
      "location": "Bhikaji Cama Place, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/32b92af946bd9aa432dffdea6caac37a00ad5f9d.webp",
        "https://img.cofynd.com/images/latest_images_2024/a65a87186486139b5bc6eac407cb3743c94020f1.webp",
        "https://img.cofynd.com/images/original/f466996d409eafc01b3d1aaac142a8bc3cd4f63a.jpg",
        "https://img.cofynd.com/images/latest_images_2024/df33fd054b26fa126948e9b663bcf81b93035085.webp",
        "https://img.cofynd.com/images/latest_images_2024/f832fbf3b042198db9ada36195a3a293f5074bc3.webp"
      ]
    }
  ],
  "Green Park": [
    {
      "id": 17,
      "name": "DesqWorx Green Park",
      "badge": "Special Offer",
      "rating": 4.6,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/77f320c38769c957d26c552847ae44c7a3e8a9d7.jpg",
        "https://img.cofynd.com/images/latest_images_2024/840ccc47e92f08c14cbb9428ece3290f46ad3033.webp",
        "https://img.cofynd.com/images/latest_images_2024/e94a83f9e298a49794d90a46c8995fd82a73e7d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4e150c191480ce4d9602457f46e0442bc102605.webp",
        "https://img.cofynd.com/images/latest_images_2024/fba1af6c924c6f2233fac26aa791f6620b163951.webp"
      ]
    },
    {
      "id": 40,
      "name": "ABL Workspace Green Park",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35b65b8de7f6cd93865c40853239021bab609584.webp",
        "https://img.cofynd.com/images/latest_images_2024/95d6c8226ea462d5da9e6e17f5a1633a61cf84cc.webp",
        "https://img.cofynd.com/images/original/fb66a12364afab1d31b30427c00aff3df72fa384.jpg",
        "https://img.cofynd.com/images/original/918a5a0880f69821af2dd8715500b521cc42121b.jpg",
        "https://img.cofynd.com/images/latest_images_2024/98b12ff0ebcf28b3a7894cae65405370f7c056a4.webp"
      ]
    },
    {
      "id": 56,
      "name": "Green Coworking Space Green Park",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8660c8b5bba4d065b4024bd75894bbe1faaec988.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a085efb7fdb993396fd1525fd540319fe45fb71.webp",
        "https://img.cofynd.com/images/latest_images_2024/033eb0a50a02dce9963161b216bb9bd92f87089d.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ac20e61e8f7c4a01bd1fa21d1c81ef031918f4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/5feaa3eb69b9501842ffd7ec69df20febd065173.webp"
      ]
    },
    {
      "id": 56,
      "name": "Green Coworking Space Green Park",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8660c8b5bba4d065b4024bd75894bbe1faaec988.webp",
        "https://img.cofynd.com/images/latest_images_2024/4a085efb7fdb993396fd1525fd540319fe45fb71.webp",
        "https://img.cofynd.com/images/latest_images_2024/033eb0a50a02dce9963161b216bb9bd92f87089d.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ac20e61e8f7c4a01bd1fa21d1c81ef031918f4f.webp",
        "https://img.cofynd.com/images/latest_images_2024/5feaa3eb69b9501842ffd7ec69df20febd065173.webp"
      ]
    },
    {
      "id": 17,
      "name": "DesqWorx Green Park",
      "badge": "Special Offer",
      "rating": 4.6,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/77f320c38769c957d26c552847ae44c7a3e8a9d7.jpg",
        "https://img.cofynd.com/images/latest_images_2024/840ccc47e92f08c14cbb9428ece3290f46ad3033.webp",
        "https://img.cofynd.com/images/latest_images_2024/e94a83f9e298a49794d90a46c8995fd82a73e7d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4e150c191480ce4d9602457f46e0442bc102605.webp",
        "https://img.cofynd.com/images/latest_images_2024/fba1af6c924c6f2233fac26aa791f6620b163951.webp"
      ]
    },
    {
      "id": 40,
      "name": "ABL Workspace Green Park",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35b65b8de7f6cd93865c40853239021bab609584.webp",
        "https://img.cofynd.com/images/latest_images_2024/95d6c8226ea462d5da9e6e17f5a1633a61cf84cc.webp",
        "https://img.cofynd.com/images/original/fb66a12364afab1d31b30427c00aff3df72fa384.jpg",
        "https://img.cofynd.com/images/original/918a5a0880f69821af2dd8715500b521cc42121b.jpg",
        "https://img.cofynd.com/images/latest_images_2024/98b12ff0ebcf28b3a7894cae65405370f7c056a4.webp"
      ]
    },
    {
      "id": 166,
      "name": "Get Set Office Yusuf Sarai",
      "badge": "Popular",
      "rating": null,
      "area": "Yusuf Sarai",
      "location": "Yusuf Sarai, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d469bb3004a0112b4549ed5248c08bff4fdb0437.webp",
        "https://img.cofynd.com/images/latest_images_2024/712e444fc0fabebad8bfcada5c36ac2a8b99c3bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/7edec7a7b2bb151a1c1311fd55b7a0f961e98698.webp",
        "https://img.cofynd.com/images/latest_images_2024/2ea0ed9df603fd56c90b7ef93dfe423b318d9f92.webp"
      ]
    },
    {
      "id": 55,
      "name": "Cowork Pad Hauz Khas",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/44e1931969cdc3cd49ff798b0dcd47398f411b79.webp",
        "https://img.cofynd.com/images/latest_images_2024/9c23975ba9bbfd39a482736859cfe0d58631c9cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/4618344018db71f891b2fd802e36679438fee232.webp",
        "https://img.cofynd.com/images/latest_images_2024/2e8bfc7c629f6c9c11e3098c8a8a6f15b75720ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/baf88304cc2f73a1ee7e008c5e1025f9027e085a.webp"
      ]
    },
    {
      "id": 39,
      "name": "Spaced Out Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94340b39a09e8ec80ebf078af02478accd1e7f8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8ccac9a31fb427f704ec0995076e0fcfcd47403.webp",
        "https://img.cofynd.com/images/latest_images_2024/a199f072061d700886b2574813a4d803df004992.webp",
        "https://img.cofynd.com/images/latest_images_2024/e10a13d3a83cd847422a4ad1656f141822117e66.webp",
        "https://img.cofynd.com/images/original/b572503859e4e986a98a57bda6f8ea3ec0f824b2.jpg"
      ]
    },
    {
      "id": 16,
      "name": "Delhi Co. Hauz Khas",
      "badge": "Special Offer",
      "rating": 4.1,
      "area": "Hauz Khas",
      "location": "Hauz Khas, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/72de1e68fc8ef843dd4b27abdac428781539de42.webp",
        "https://img.cofynd.com/images/original/c527e7be02ceb5ec517c0c6d14c2fbb26d2765e0.jpg",
        "https://img.cofynd.com/images/original/6a40de21eb2f8d6d01a4ea835e5315ce2813a2ce.jpg",
        "https://img.cofynd.com/images/latest_images_2024/949ac8477264a52fe110e6f9015b485bd220dfe7.webp",
        "https://img.cofynd.com/images/latest_images_2024/3037c455fe3d1052a4134b59a21bbbdd24bcf509.webp"
      ]
    }
  ],
  "Pusa Road": [
    {
      "id": 18,
      "name": "Urban Cabin Cowork Pusa Road",
      "badge": "Popular",
      "rating": 5,
      "area": "Pusa Road",
      "location": "Pusa Road, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b0219ec616865c4508117eaf608db547f38ad8a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/583932c026163b34200dfd2ab6286bd5ee021905.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8b9ca6e1a6681a91f89c63baa0adb7a78e97e0f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4da5bd3f66aa241dfc1ad481e1b1ac8568f9aee6.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfaa4a87a2ff88bf5de97dc2ad089a2d56e9a93a.webp"
      ]
    },
    {
      "id": 18,
      "name": "Urban Cabin Cowork Pusa Road",
      "badge": "Popular",
      "rating": 5,
      "area": "Pusa Road",
      "location": "Pusa Road, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b0219ec616865c4508117eaf608db547f38ad8a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/583932c026163b34200dfd2ab6286bd5ee021905.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8b9ca6e1a6681a91f89c63baa0adb7a78e97e0f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4da5bd3f66aa241dfc1ad481e1b1ac8568f9aee6.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfaa4a87a2ff88bf5de97dc2ad089a2d56e9a93a.webp"
      ]
    },
    {
      "id": 42,
      "name": "Dynamic Desk Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58aa4e38db360245a1dfd103df9e86031d9f13ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/430c39683ff4a5df79b245cf5da430c2e9f0cbd5.webp",
        "https://img.cofynd.com/images/latest_images_2024/d31bde1fb5b52873870e1fbee86fef9442ece342.webp",
        "https://img.cofynd.com/images/latest_images_2024/a77ad5f7a9f2fb5ff8b5f054a815d8ea4da6ce08.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cbab76fb541186d61f665d6b929c07d3601a68c.webp"
      ]
    },
    {
      "id": 57,
      "name": "Solace Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30132e173142ca791c1a379cadfa6c5ee62f4bb7.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b014e4e8fd42afc0cd3e2104859e1d8a711d87d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2fe03371b58d0afc8c521b3bd1b62706cbfa4ee7.webp",
        "https://img.cofynd.com/images/latest_images_2024/79e5ec57f9f3ede0ec1bfab99e88320217b71175.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b3f0c4ec0f70988508946038c8cf81cd3279a5d.webp"
      ]
    },
    {
      "id": 167,
      "name": "Nukleus Rajinder Nagar",
      "badge": "Near Metro",
      "rating": 3.9,
      "area": "Rajinder Nagar",
      "location": "Rajinder Nagar, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9d3fee1620cb5f24f9f5430030f1b8576e4fb4ee.jpg",
        "https://img.cofynd.com/images/original/10479990253014bd81b974166402c7e7ad940b6d.jpg",
        "https://img.cofynd.com/images/original/5c83a467c3af9cb536fca7e1283d143581c85a64.jpg",
        "https://img.cofynd.com/images/original/ab1a0d8fb70dd45ebc88d415b330d507f0c8b421.jpg",
        "https://img.cofynd.com/images/original/21676d3119b5620fb65b1af7b1c67eb1aed8e44a.jpg"
      ]
    },
    {
      "id": 168,
      "name": "Berry Coworks Jhandewalan",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4b66fcd671060d0a8be0e5852ecc39b26434f51c.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b5038bfdc928bc715eaa3e923e47aa812d2d509.webp",
        "https://img.cofynd.com/images/latest_images_2024/6813dc4357b020a2042fadbd2c756655a65f86c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/de0a1adeeb72b904f64d593dc47863da55e8e739.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7431aa281ada3762ef5e0181a570f081e381234.webp"
      ]
    },
    {
      "id": 20,
      "name": "Solace Coworks Karol Bagh",
      "badge": "Popular",
      "rating": 5,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1ae7a569238b42d6a66e4017ca874d2e38a30d3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d0dd1efebbfa02a0af6688260aacf2c6a9a7f599.webp",
        "https://img.cofynd.com/images/latest_images_2024/993906b759466cecbf7661fea4fcf007c5d27dd0.webp",
        "https://img.cofynd.com/images/latest_images_2024/27af143d7caf57f091a7bc1a67dfdd4336626051.webp",
        "https://img.cofynd.com/images/latest_images_2024/598b83d6ffff784690712b9361ce041a5633fd96.webp"
      ]
    },
    {
      "id": 169,
      "name": "AtWork A Jhandewalan",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/ebf4fa258b1d068fc05d9a03d05ea2335c995e16.jpg",
        "https://img.cofynd.com/images/latest_images_2024/34ee3df885962eb65675565d12127e22e775b609.webp",
        "https://img.cofynd.com/images/latest_images_2024/86603664f24b11fdc521c7ded3135c3cd0c126f3.webp",
        "https://img.cofynd.com/images/original/f2dfd091d836a57c9a493c29b6cd96e89cd17ebd.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b745984cfedd9260639e700c095e32450303fdb5.webp"
      ]
    },
    {
      "id": 170,
      "name": "Daftar Cowork 3.0 Jhandewalan",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/210b75b3754d6f0892f16cbc18ec0252c7505e05.webp",
        "https://img.cofynd.com/images/latest_images_2024/04927c0ad4aed17bc48de422025f3aca9abb58a7.webp",
        "https://img.cofynd.com/images/latest_images_2024/cf8e4893d900bf84b3a19af06a6ee58dd0be2382.webp",
        "https://img.cofynd.com/images/latest_images_2024/a2deb03cb6546e733768a85c6413f65dcff5dc91.webp",
        "https://img.cofynd.com/images/latest_images_2024/968d8f80fa5a4e34985ee51b8fedec4430fabd2c.webp"
      ]
    },
    {
      "id": 171,
      "name": "Atwork B Jhandewalan",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5ed4a5400f3262ecc09b602d1b49625e0157b6a6.webp"
      ]
    }
  ],
  "Jasola": [
    {
      "id": 19,
      "name": "The Circle.Work Jasola",
      "badge": "Popular",
      "rating": 4,
      "area": "Jasola",
      "location": "Jasola, Delhi",
      "price": "₹17,999",
      "period": "/ Month",
      "priceFormatted": "₹17,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/643ed1822c115bc4c221176d5b7a3de47cc9bcea.webp",
        "https://img.cofynd.com/images/original/48532a8edf6919588e64fa4dc8343518d5d2ce76.jpg",
        "https://img.cofynd.com/images/original/287d33709d24bccf1283a8a48434e8b548f6a060.jpg",
        "https://img.cofynd.com/images/latest_images_2024/7b2ef2ae8f5ad1681c8053f653cafcd7ffff15a6.webp",
        "https://img.cofynd.com/images/original/a1697c2e3c57ef70227da4ecb1f2a56159502ded.jpg"
      ]
    },
    {
      "id": 41,
      "name": "Flexihub space Jasola",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Jasola",
      "location": "Jasola, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c80bb974d9b91dd8e5a2dfdd5534a5edd9323491.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f6a12df042e8c0dc11abedeeb27fc5ede14dfa7.webp",
        "https://img.cofynd.com/images/latest_images_2024/45777f3d53f45de76270a2bd6bf0c5462b99d41d.webp",
        "https://img.cofynd.com/images/latest_images_2024/46b2b8a16f72224d9d23849d4b2fa945174823b9.webp",
        "https://img.cofynd.com/images/latest_images_2024/28dad7bc45d09e276c31eb7aeee75a0737467e3a.webp"
      ]
    },
    {
      "id": 19,
      "name": "The Circle.Work Jasola",
      "badge": "Popular",
      "rating": 4,
      "area": "Jasola",
      "location": "Jasola, Delhi",
      "price": "₹17,999",
      "period": "/ Month",
      "priceFormatted": "₹17,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/643ed1822c115bc4c221176d5b7a3de47cc9bcea.webp",
        "https://img.cofynd.com/images/original/48532a8edf6919588e64fa4dc8343518d5d2ce76.jpg",
        "https://img.cofynd.com/images/original/287d33709d24bccf1283a8a48434e8b548f6a060.jpg",
        "https://img.cofynd.com/images/latest_images_2024/7b2ef2ae8f5ad1681c8053f653cafcd7ffff15a6.webp",
        "https://img.cofynd.com/images/original/a1697c2e3c57ef70227da4ecb1f2a56159502ded.jpg"
      ]
    },
    {
      "id": 41,
      "name": "Flexihub space Jasola",
      "badge": "Verified",
      "rating": 4.5,
      "area": "Jasola",
      "location": "Jasola, Delhi",
      "price": "₹9,499",
      "period": "/ Month",
      "priceFormatted": "₹9,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c80bb974d9b91dd8e5a2dfdd5534a5edd9323491.webp",
        "https://img.cofynd.com/images/latest_images_2024/4f6a12df042e8c0dc11abedeeb27fc5ede14dfa7.webp",
        "https://img.cofynd.com/images/latest_images_2024/45777f3d53f45de76270a2bd6bf0c5462b99d41d.webp",
        "https://img.cofynd.com/images/latest_images_2024/46b2b8a16f72224d9d23849d4b2fa945174823b9.webp",
        "https://img.cofynd.com/images/latest_images_2024/28dad7bc45d09e276c31eb7aeee75a0737467e3a.webp"
      ]
    },
    {
      "id": 172,
      "name": "Hub & Oak 11 East Delhi",
      "badge": "Premium",
      "rating": 4.8,
      "area": "East Delhi",
      "location": "East Delhi, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/938e4a244fe06ce0586bc33482b1417a9fcf584d.webp",
        "https://img.cofynd.com/images/latest_images_2024/5002c1f54f6aae6ac390a1736522c46362291973.webp",
        "https://img.cofynd.com/images/latest_images_2024/78d80233c385d3eddcfbc56be2169e4d4b1424e0.webp",
        "https://img.cofynd.com/images/latest_images_2024/58429e5298956ed48155ccbee25fd9ad322e7d9c.webp",
        "https://img.cofynd.com/images/latest_images_2024/878ae836078e5f7bee36951a508f05c3f0fc0db1.webp"
      ]
    },
    {
      "id": 89,
      "name": "Spacetime Mohan Cooperative",
      "badge": "Popular",
      "rating": 4,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹11,499",
      "period": "/ Month",
      "priceFormatted": "₹11,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a80ffe7c6ab6b17b5eeca358ce8beb2eaaf64034.webp",
        "https://img.cofynd.com/images/latest_images_2024/63062879c4d7d73ec3b9e6a4e1f70312f4a9ab0b.webp",
        "https://img.cofynd.com/images/latest_images_2024/5d8c7b2a1b9c7d5cbe1c12b6e02f1769eb815ed9.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb6cda179a69009673dcd885544bc581a8e0f6fd.webp",
        "https://img.cofynd.com/images/latest_images_2024/bd9c130caf6f6ae6d9f747c0e30b915d0f908e58.webp"
      ]
    },
    {
      "id": 46,
      "name": "Awfis Mohan Cooperative",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/516979283fcf6630506fb43a0f734ac2c9309173.webp",
        "https://img.cofynd.com/images/latest_images_2024/9e1c532eb3bc3eca79a4f7fcfddbbfe79ea46e5a.webp",
        "https://img.cofynd.com/images/latest_images_2024/7a1dd97990d6086b7075383fe46f2e968c4592fe.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b634512ac1560fd2307fda4a8d804b49e813c3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/8b2bddf08063d24c37475b1f8ae3af4b743a2420.webp"
      ]
    },
    {
      "id": 80,
      "name": "Awfis B Mohan Cooperative",
      "badge": "Popular",
      "rating": 4,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹7,799",
      "period": "/ Month",
      "priceFormatted": "₹7,799 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e36a4121b4458e813455ca28e44bb7802d53a509.webp",
        "https://img.cofynd.com/images/original/27dd5a04cfbb95c18aa8a1d14619014583f69b31.jpg",
        "https://img.cofynd.com/images/latest_images_2024/64b20d87fbcb7a6aa748f78c6cc1b568ebba1623.webp",
        "https://img.cofynd.com/images/original/618912669bbc9749a5dd5ae4a8c21240b51f7368.jpg",
        "https://img.cofynd.com/images/original/1efa65e0f45af954e2c3033da8b0d8ebf51802cb.jpg"
      ]
    },
    {
      "id": 30,
      "name": "AltF Okhla",
      "badge": "Premium",
      "rating": 4.9,
      "area": "Okhla",
      "location": "Okhla, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/16a8d45bab4842b189bbf8e0023d5bd1aac17f8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e384da52625e62969a6d43a2399545a6d7e5593.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e56f0f71380fb14ef1abff2b85bbe8706096aa2.webp",
        "https://img.cofynd.com/images/latest_images_2024/a6923d673b1c5fff1c26875ae4b412f1c9039a1f.webp",
        "https://img.cofynd.com/images/latest_images_2024/48d323d90e25a59421cba1c06db443826bb20418.webp"
      ]
    },
    {
      "id": 28,
      "name": "AltF Mohan Cooperative",
      "badge": "Popular",
      "rating": 4.2,
      "area": "Mohan Cooperative",
      "location": "Mohan Cooperative, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e58dd1419bb46d2b289917b8706572e42a87ed2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/a9a7736ce455ca89adc9658a336c58dd5236cfac.webp",
        "https://img.cofynd.com/images/latest_images_2024/ddc33809f0c3fbb5ff3fd72265d7f2bf9e0127ed.webp",
        "https://img.cofynd.com/images/latest_images_2024/e8ce523c3b5dbd5493a0d2ff6839a2370c53ce89.webp",
        "https://img.cofynd.com/images/latest_images_2024/15aa6b54ce0b30bd0433905e3dbf32175815fc6c.webp"
      ]
    }
  ],
  "Karol Bagh": [
    {
      "id": 20,
      "name": "Solace Coworks Karol Bagh",
      "badge": "Popular",
      "rating": 5,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1ae7a569238b42d6a66e4017ca874d2e38a30d3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d0dd1efebbfa02a0af6688260aacf2c6a9a7f599.webp",
        "https://img.cofynd.com/images/latest_images_2024/993906b759466cecbf7661fea4fcf007c5d27dd0.webp",
        "https://img.cofynd.com/images/latest_images_2024/27af143d7caf57f091a7bc1a67dfdd4336626051.webp",
        "https://img.cofynd.com/images/latest_images_2024/598b83d6ffff784690712b9361ce041a5633fd96.webp"
      ]
    },
    {
      "id": 42,
      "name": "Dynamic Desk Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58aa4e38db360245a1dfd103df9e86031d9f13ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/430c39683ff4a5df79b245cf5da430c2e9f0cbd5.webp",
        "https://img.cofynd.com/images/latest_images_2024/d31bde1fb5b52873870e1fbee86fef9442ece342.webp",
        "https://img.cofynd.com/images/latest_images_2024/a77ad5f7a9f2fb5ff8b5f054a815d8ea4da6ce08.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cbab76fb541186d61f665d6b929c07d3601a68c.webp"
      ]
    },
    {
      "id": 57,
      "name": "Solace Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30132e173142ca791c1a379cadfa6c5ee62f4bb7.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b014e4e8fd42afc0cd3e2104859e1d8a711d87d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2fe03371b58d0afc8c521b3bd1b62706cbfa4ee7.webp",
        "https://img.cofynd.com/images/latest_images_2024/79e5ec57f9f3ede0ec1bfab99e88320217b71175.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b3f0c4ec0f70988508946038c8cf81cd3279a5d.webp"
      ]
    },
    {
      "id": 57,
      "name": "Solace Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30132e173142ca791c1a379cadfa6c5ee62f4bb7.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b014e4e8fd42afc0cd3e2104859e1d8a711d87d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2fe03371b58d0afc8c521b3bd1b62706cbfa4ee7.webp",
        "https://img.cofynd.com/images/latest_images_2024/79e5ec57f9f3ede0ec1bfab99e88320217b71175.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b3f0c4ec0f70988508946038c8cf81cd3279a5d.webp"
      ]
    },
    {
      "id": 42,
      "name": "Dynamic Desk Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58aa4e38db360245a1dfd103df9e86031d9f13ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/430c39683ff4a5df79b245cf5da430c2e9f0cbd5.webp",
        "https://img.cofynd.com/images/latest_images_2024/d31bde1fb5b52873870e1fbee86fef9442ece342.webp",
        "https://img.cofynd.com/images/latest_images_2024/a77ad5f7a9f2fb5ff8b5f054a815d8ea4da6ce08.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cbab76fb541186d61f665d6b929c07d3601a68c.webp"
      ]
    },
    {
      "id": 20,
      "name": "Solace Coworks Karol Bagh",
      "badge": "Popular",
      "rating": 5,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1ae7a569238b42d6a66e4017ca874d2e38a30d3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d0dd1efebbfa02a0af6688260aacf2c6a9a7f599.webp",
        "https://img.cofynd.com/images/latest_images_2024/993906b759466cecbf7661fea4fcf007c5d27dd0.webp",
        "https://img.cofynd.com/images/latest_images_2024/27af143d7caf57f091a7bc1a67dfdd4336626051.webp",
        "https://img.cofynd.com/images/latest_images_2024/598b83d6ffff784690712b9361ce041a5633fd96.webp"
      ]
    },
    {
      "id": 168,
      "name": "Berry Coworks Jhandewalan",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4b66fcd671060d0a8be0e5852ecc39b26434f51c.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b5038bfdc928bc715eaa3e923e47aa812d2d509.webp",
        "https://img.cofynd.com/images/latest_images_2024/6813dc4357b020a2042fadbd2c756655a65f86c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/de0a1adeeb72b904f64d593dc47863da55e8e739.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7431aa281ada3762ef5e0181a570f081e381234.webp"
      ]
    },
    {
      "id": 171,
      "name": "Atwork B Jhandewalan",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/5ed4a5400f3262ecc09b602d1b49625e0157b6a6.webp"
      ]
    },
    {
      "id": 18,
      "name": "Urban Cabin Cowork Pusa Road",
      "badge": "Popular",
      "rating": 5,
      "area": "Pusa Road",
      "location": "Pusa Road, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b0219ec616865c4508117eaf608db547f38ad8a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/583932c026163b34200dfd2ab6286bd5ee021905.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8b9ca6e1a6681a91f89c63baa0adb7a78e97e0f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4da5bd3f66aa241dfc1ad481e1b1ac8568f9aee6.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfaa4a87a2ff88bf5de97dc2ad089a2d56e9a93a.webp"
      ]
    },
    {
      "id": 173,
      "name": "Daftar Cowork Momentum 5.0 Jhandewalan",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ee46e22cd1beea5d77d80e900d8f99b610c1433a.webp",
        "https://img.cofynd.com/images/latest_images_2024/2226486f8c3a55aae03cf4602aa4165b4f0171b9.webp",
        "https://img.cofynd.com/images/latest_images_2024/c78ce2d8399b1e53dbc2c70bb6944d9ebba5d613.webp",
        "https://img.cofynd.com/images/latest_images_2024/1fdaa9ee9216d21d495ad16a57fd500d322d4c23.webp"
      ]
    },
    {
      "id": 216,
      "name": "91Springboard Jhandewalan",
      "badge": "Premium",
      "rating": 4.3,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c3ec27a8c326f6ca7bb31f2ecc6b39a64029c480.webp",
        "https://img.cofynd.com/images/latest_images_2024/d5f029683fd746d452f70502a4839ba6eff93d87.webp",
        "https://img.cofynd.com/images/latest_images_2024/c7d3150f3b83f961418afeb0d8e069310fcf8a78.webp",
        "https://img.cofynd.com/images/latest_images_2024/8e5cfa233691b61bdac2061aaa19e04c86c38d49.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7ecb71d456f4f0b5e129a05615771337c7ebf31.webp"
      ]
    }
  ],
  "West Delhi": [
    {
      "id": 94,
      "name": "Spring House SHDL006 Janakpuri",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/636afa3db0a47ae89f604f0de6b16bde414e3952.webp",
        "https://img.cofynd.com/images/latest_images_2024/7db7126b993deee43e53aadae7d5c7abce444e3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/52b5be29402dbcc0a585dc9fd921ae7cd1299fae.webp",
        "https://img.cofynd.com/images/latest_images_2024/f060f858382b8788d417d7b517592603d456b229.webp",
        "https://img.cofynd.com/images/latest_images_2024/beca2f899f4af9193af05ffb74aa7856c7d5e0b1.webp"
      ]
    },
    {
      "id": 174,
      "name": "Chanson Coworking Paschim Vihar",
      "badge": "Special Offer",
      "rating": 4.4,
      "area": "Paschim Vihar",
      "location": "Paschim Vihar, Delhi",
      "price": "₹7,999",
      "period": "/ Month",
      "priceFormatted": "₹7,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f89a06b6a7eabe25f77d4ef2cd8225382f117a76.webp",
        "https://img.cofynd.com/images/latest_images_2024/a17a5ab67f3418dffab3ec7ccee0202114f5748c.webp",
        "https://img.cofynd.com/images/latest_images_2024/074dfda6ac99c288b967f90e641fc0a094a854d8.webp",
        "https://img.cofynd.com/images/latest_images_2024/5b4c11cdc78de4550237ff7b7a1f148716349e04.webp",
        "https://img.cofynd.com/images/latest_images_2024/1aa5e3cc0b8807e51caabb56c73d16b18d2a3e82.webp"
      ]
    },
    {
      "id": 75,
      "name": "Spring House SHDL003 Janakpuri",
      "badge": "Premium",
      "rating": 5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7fd735bb9361019969f71dbdc27fb2e7973ce358.webp",
        "https://img.cofynd.com/images/latest_images_2024/eb9f32651231d6c4ef8a466a2a63e4a00c2a1583.webp",
        "https://img.cofynd.com/images/latest_images_2024/9592e5ef3c786902e984719dc0599768caffa9a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/5865b73dd55f7d3a344841982ca7ae6b9cd092e7.webp",
        "https://img.cofynd.com/images/latest_images_2024/6c1ac119aec3ba9554fab8221437279dab5e7efc.webp"
      ]
    },
    {
      "id": 9,
      "name": "Spring House SHDL001 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78ebc303fcaac70f525f8167c32a21f74341487f.webp",
        "https://img.cofynd.com/images/latest_images_2024/91724a81db356a2b6046d8fd3378afba7bfd1167.webp",
        "https://img.cofynd.com/images/latest_images_2024/881f49280eec4c677ca6c2aa361fbfee823ff86d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d613d229aa9117bd9d218ebf9b9d3947b3414027.webp",
        "https://img.cofynd.com/images/latest_images_2024/a360db675fcf732815b80a12b019f5fdf94c8f1b.webp"
      ]
    },
    {
      "id": 51,
      "name": "Spring House SHDL002 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9236a067f3f88991bb6ef51328e5d11ad2d7b4f1.jpg",
        "https://img.cofynd.com/images/original/da29a8e2ba86b5ff83b7547f8ada119c35848f56.jpg",
        "https://img.cofynd.com/images/latest_images_2024/4c73070f8bcbe024da85a3cdf5adb9a80d581cd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/60a95f067e3ee65b191d4f622a2985ba623eb73c.webp",
        "https://img.cofynd.com/images/original/d0f6c666bebffa5a0dda8648eb64bea21168e6c3.jpg"
      ]
    },
    {
      "id": 33,
      "name": "Co-Offiz Janakpuri",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6ef79fab2c1fe2d5cd4b02c49dc23807248d2ac2.webp",
        "https://img.cofynd.com/images/latest_images_2024/330f0d77523b7dd63fd518ba8f353c96596a1e8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a5b9eec607c65f8419b64ebdf6a8839160e31011.webp",
        "https://img.cofynd.com/images/latest_images_2024/5fd330a87f71e814a9b7f30cc60ac45b19c80d0e.webp",
        "https://img.cofynd.com/images/original/461f6c54542eacbd61ce146ab1b03a01f1f77413.jpg"
      ]
    },
    {
      "id": 85,
      "name": "Purple Co-working Janakpuri",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f82a9ef82b372be8a50c522153631ec97f5dd31d.webp",
        "https://img.cofynd.com/images/latest_images_2024/9430566d7002e0f1258c989bb29042526e72c5fb.webp",
        "https://img.cofynd.com/images/latest_images_2024/307316e06e9eb7eff19a668d81020036cb96df19.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cf2b742a6bfe6770b6b8a87bc9960f629125cf3.webp",
        "https://img.cofynd.com/images/latest_images_2024/4fc108c185ae48573a116ccec2cad4295c758689.webp"
      ]
    },
    {
      "id": 175,
      "name": "4U Coworks Paschim Vihar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Paschim Vihar",
      "location": "Paschim Vihar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/8f80e15188cbbdfc3930aecf3a45c942c600f286.webp",
        "https://img.cofynd.com/images/latest_images_2024/0884c9b549af4908ec0238949594f45658df7ce3.webp",
        "https://img.cofynd.com/images/latest_images_2024/27c514643e97ec7db0a8e9ecc1c822e382c4ac30.webp",
        "https://img.cofynd.com/images/latest_images_2024/f57b940621265841af0c97a1ef8eafcd9f118659.webp",
        "https://img.cofynd.com/images/latest_images_2024/5e0ba1dc82277f2234bf6e4e01bb7dd86be06c52.webp"
      ]
    },
    {
      "id": 151,
      "name": "Deal4ask Co-Working Tilak Nagar",
      "badge": "Special Offer",
      "rating": 4.5,
      "area": "Tilak Nagar",
      "location": "Tilak Nagar, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6f2fe0a135ac38c6e5d48695d8a72959ac69dd20.webp",
        "https://img.cofynd.com/images/latest_images_2024/5664e956e1c91498b34e63799728ec1046e80169.webp",
        "https://img.cofynd.com/images/latest_images_2024/75a88f02c66850b96ba9f370b52cca1b48ca3293.webp",
        "https://img.cofynd.com/images/latest_images_2024/06d7a3632c7fd19be2368ba9201c50150dc95d9c.webp",
        "https://img.cofynd.com/images/latest_images_2024/36594a0d11664c1b7c04a76ce3060eb6779b90ec.webp"
      ]
    },
    {
      "id": 152,
      "name": "4U Coworks Subhash Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Subhash Nagar",
      "location": "Subhash Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e1a9f10ec3e654768aa564967f3679d6fc4494e2.webp",
        "https://img.cofynd.com/images/latest_images_2024/d684530e3cf737132ce08ea10bb1b77e3f7d4b14.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7edf5bf69f7b1de73eb5097ae155d40a4a6d036.webp",
        "https://img.cofynd.com/images/latest_images_2024/32b351c549338b857f47fea28d3f254198bcd64e.webp",
        "https://img.cofynd.com/images/latest_images_2024/dd74bb12f19c1eb428b4b67b6de5085d6fb8530f.webp"
      ]
    }
  ],
  "Defence Colony": [
    {
      "id": 21,
      "name": "Hub And Oak Defence Colony",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Defence Colony",
      "location": "Defence Colony, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3176aab3d53d8a3220cff87025c7c502cb79df06.webp",
        "https://img.cofynd.com/images/latest_images_2024/b2e4b2a2b6377682da310bc7ab0e688d92871fec.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e60ec550d5ca1821f10140a0cda5ce0589d263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/68005cb9a8d81793123bf9f375db0a5de9abb62d.webp",
        "https://img.cofynd.com/images/latest_images_2024/054d79a58d265452716e5ad5c95957234f08d26f.webp"
      ]
    },
    {
      "id": 21,
      "name": "Hub And Oak Defence Colony",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Defence Colony",
      "location": "Defence Colony, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3176aab3d53d8a3220cff87025c7c502cb79df06.webp",
        "https://img.cofynd.com/images/latest_images_2024/b2e4b2a2b6377682da310bc7ab0e688d92871fec.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e60ec550d5ca1821f10140a0cda5ce0589d263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/68005cb9a8d81793123bf9f375db0a5de9abb62d.webp",
        "https://img.cofynd.com/images/latest_images_2024/054d79a58d265452716e5ad5c95957234f08d26f.webp"
      ]
    },
    {
      "id": 176,
      "name": "The Quantum Hub Lajpat Nagar III",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Lajpat Nagar III",
      "location": "Lajpat Nagar III, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/beb0ce8f94f69ca4fa37b516de777427465638c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/362b2b7fc451dc45a991b12b26192c921745893d.webp",
        "https://img.cofynd.com/images/latest_images_2024/69fca7bbdedb1defca6c642369e3e07a503f8b7b.webp",
        "https://img.cofynd.com/images/latest_images_2024/692a0bbaf32d27100886c036bbe9a5f153f7b59b.webp",
        "https://img.cofynd.com/images/latest_images_2024/684f617edfc2e9d5e4c56e0fb84b79b9e26beb09.webp"
      ]
    },
    {
      "id": 23,
      "name": "9 to 5 Cowork Lajpat Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Lajpat Nagar",
      "location": "Lajpat Nagar, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/320a6823037b9d00bfe1842adf81ef6f79874445.webp",
        "https://img.cofynd.com/images/latest_images_2024/e93c151645e19962dcee8bc3d21e09ec502bc5cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/a57cc3f92a176f2342cb6a52f128ac3475697950.webp",
        "https://img.cofynd.com/images/latest_images_2024/61fe55057df1ea5c52227462d3cbbe22346f93d1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2368a18a715538ff6f7bb6dedd31729240b2afc1.webp"
      ]
    },
    {
      "id": 177,
      "name": "FlexPod South Extension",
      "badge": "Premium",
      "rating": 4.6,
      "area": "South Extension",
      "location": "South Extension, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9f5cc8629fe6575d3ef6b24c1527424f2570373e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f95b1b2a3b41d2deb43eb909cc498552a4f08215.webp",
        "https://img.cofynd.com/images/latest_images_2024/279f8a0a7806a18b140a82b0e6a43a2f30dfe736.webp",
        "https://img.cofynd.com/images/latest_images_2024/607fb761bb524256bf15a9f92da972a79acd7e68.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9a6953a5621c8423e819c5c422c71b2414d4f76.webp"
      ]
    },
    {
      "id": 178,
      "name": "Central Business Center Lajpat Nagar I",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Lajpat Nagar I",
      "location": "Lajpat Nagar I, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2b140d0a3a0c2b83764b3c66e93fd89adf6d96ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7566643c8a7f51f566ea91e98c4161c1f59016f.webp",
        "https://img.cofynd.com/images/latest_images_2024/b5849f690d4fb546067e7d939695c6fd81bc55e1.webp",
        "https://img.cofynd.com/images/latest_images_2024/02701f5fb518f09e7b6fc8d98441a3239a6de8bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/4b4a9c4c3f5d961bcf5af3ca620f8d7daaada315.webp"
      ]
    },
    {
      "id": 129,
      "name": "Workly B Nehru Place",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/15cc7c642dcb03ed60322b6abd649cd005391714.webp",
        "https://img.cofynd.com/images/latest_images_2024/bbfb29d8dd77c9076b9e65f42ab1fb650863f0d5.webp",
        "https://img.cofynd.com/images/latest_images_2024/229158fa3289f3cac764acadfa87888d7231c3f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c6734ccf02c2d1ffa0eef97b17472a0df8e3aa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/a6d7aea28a025dd2c81c93164ddbf0a3bbebde82.webp"
      ]
    },
    {
      "id": 179,
      "name": "1share Office East of Kailash",
      "badge": "Popular",
      "rating": 4.6,
      "area": "East of Kailash",
      "location": "East of Kailash, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f507aa329a6d15b41052587c5cbadfbd730b4786.jpg",
        "https://img.cofynd.com/images/original/add4d1da748d4d94a8092453510f66c0c20f9297.jpg",
        "https://img.cofynd.com/images/original/a123cdbd40211707b7bdbe11ea062c9774f1ef89.jpg",
        "https://img.cofynd.com/images/original/85632fff6d28ec3a3c4727b152908cc569504a2d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/f8a4aae8778e5d02bf0f0f0c64d02b87592e4b90.webp"
      ]
    },
    {
      "id": 121,
      "name": "Zen business center Nehru Place",
      "badge": "Premium",
      "rating": null,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6661023c590cc7310a2675b93a849c7f02bd8c8f.webp",
        "https://img.cofynd.com/images/latest_images_2024/36f8928f91990d23d327a09e0f7556ea2840e94a.webp",
        "https://img.cofynd.com/images/latest_images_2024/41f8cfd780a55b0a752daf5ab32fc4ec732e5876.webp",
        "https://img.cofynd.com/images/latest_images_2024/c4375a736439ab426ad898d9e11b40d969c93f1b.webp",
        "https://img.cofynd.com/images/latest_images_2024/403f14ec6fb3e56cc068b5a0b6212adba9dd7fd1.webp"
      ]
    },
    {
      "id": 17,
      "name": "DesqWorx Green Park",
      "badge": "Special Offer",
      "rating": 4.6,
      "area": "Green Park",
      "location": "Green Park, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/77f320c38769c957d26c552847ae44c7a3e8a9d7.jpg",
        "https://img.cofynd.com/images/latest_images_2024/840ccc47e92f08c14cbb9428ece3290f46ad3033.webp",
        "https://img.cofynd.com/images/latest_images_2024/e94a83f9e298a49794d90a46c8995fd82a73e7d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/d4e150c191480ce4d9602457f46e0442bc102605.webp",
        "https://img.cofynd.com/images/latest_images_2024/fba1af6c924c6f2233fac26aa791f6620b163951.webp"
      ]
    }
  ],
  "Patel Nagar": [
    {
      "id": 22,
      "name": "Ojas Co-working Patel Nagar",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Patel Nagar",
      "location": "Patel Nagar, Delhi",
      "price": "₹4,499",
      "period": "/ Month",
      "priceFormatted": "₹4,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/699d18f26439843aff1e4e2044c83ddb0bda50c3.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7072b019a6751e0454f5d161f5dd19a96f5fcea.webp",
        "https://img.cofynd.com/images/latest_images_2024/06934d7d7c00ce1fa7abe5afb417bc49a6d356ae.webp",
        "https://img.cofynd.com/images/latest_images_2024/1aa46a0814bb43bd8cfc558cca3236faa8cdc63c.webp",
        "https://img.cofynd.com/images/latest_images_2024/c14dc2e9264f55b9bc5097f89b2db1c5ceea10d5.webp"
      ]
    },
    {
      "id": 22,
      "name": "Ojas Co-working Patel Nagar",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Patel Nagar",
      "location": "Patel Nagar, Delhi",
      "price": "₹4,499",
      "period": "/ Month",
      "priceFormatted": "₹4,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/699d18f26439843aff1e4e2044c83ddb0bda50c3.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7072b019a6751e0454f5d161f5dd19a96f5fcea.webp",
        "https://img.cofynd.com/images/latest_images_2024/06934d7d7c00ce1fa7abe5afb417bc49a6d356ae.webp",
        "https://img.cofynd.com/images/latest_images_2024/1aa46a0814bb43bd8cfc558cca3236faa8cdc63c.webp",
        "https://img.cofynd.com/images/latest_images_2024/c14dc2e9264f55b9bc5097f89b2db1c5ceea10d5.webp"
      ]
    },
    {
      "id": 167,
      "name": "Nukleus Rajinder Nagar",
      "badge": "Near Metro",
      "rating": 3.9,
      "area": "Rajinder Nagar",
      "location": "Rajinder Nagar, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9d3fee1620cb5f24f9f5430030f1b8576e4fb4ee.jpg",
        "https://img.cofynd.com/images/original/10479990253014bd81b974166402c7e7ad940b6d.jpg",
        "https://img.cofynd.com/images/original/5c83a467c3af9cb536fca7e1283d143581c85a64.jpg",
        "https://img.cofynd.com/images/original/ab1a0d8fb70dd45ebc88d415b330d507f0c8b421.jpg",
        "https://img.cofynd.com/images/original/21676d3119b5620fb65b1af7b1c67eb1aed8e44a.jpg"
      ]
    },
    {
      "id": 18,
      "name": "Urban Cabin Cowork Pusa Road",
      "badge": "Popular",
      "rating": 5,
      "area": "Pusa Road",
      "location": "Pusa Road, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b0219ec616865c4508117eaf608db547f38ad8a2.webp",
        "https://img.cofynd.com/images/latest_images_2024/583932c026163b34200dfd2ab6286bd5ee021905.webp",
        "https://img.cofynd.com/images/latest_images_2024/c8b9ca6e1a6681a91f89c63baa0adb7a78e97e0f.webp",
        "https://img.cofynd.com/images/latest_images_2024/4da5bd3f66aa241dfc1ad481e1b1ac8568f9aee6.webp",
        "https://img.cofynd.com/images/latest_images_2024/dfaa4a87a2ff88bf5de97dc2ad089a2d56e9a93a.webp"
      ]
    },
    {
      "id": 42,
      "name": "Dynamic Desk Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/58aa4e38db360245a1dfd103df9e86031d9f13ad.webp",
        "https://img.cofynd.com/images/latest_images_2024/430c39683ff4a5df79b245cf5da430c2e9f0cbd5.webp",
        "https://img.cofynd.com/images/latest_images_2024/d31bde1fb5b52873870e1fbee86fef9442ece342.webp",
        "https://img.cofynd.com/images/latest_images_2024/a77ad5f7a9f2fb5ff8b5f054a815d8ea4da6ce08.webp",
        "https://img.cofynd.com/images/latest_images_2024/8cbab76fb541186d61f665d6b929c07d3601a68c.webp"
      ]
    },
    {
      "id": 57,
      "name": "Solace Karol Bagh",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/30132e173142ca791c1a379cadfa6c5ee62f4bb7.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b014e4e8fd42afc0cd3e2104859e1d8a711d87d.webp",
        "https://img.cofynd.com/images/latest_images_2024/2fe03371b58d0afc8c521b3bd1b62706cbfa4ee7.webp",
        "https://img.cofynd.com/images/latest_images_2024/79e5ec57f9f3ede0ec1bfab99e88320217b71175.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b3f0c4ec0f70988508946038c8cf81cd3279a5d.webp"
      ]
    },
    {
      "id": 168,
      "name": "Berry Coworks Jhandewalan",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Jhandewalan",
      "location": "Jhandewalan, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/4b66fcd671060d0a8be0e5852ecc39b26434f51c.webp",
        "https://img.cofynd.com/images/latest_images_2024/0b5038bfdc928bc715eaa3e923e47aa812d2d509.webp",
        "https://img.cofynd.com/images/latest_images_2024/6813dc4357b020a2042fadbd2c756655a65f86c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/de0a1adeeb72b904f64d593dc47863da55e8e739.webp",
        "https://img.cofynd.com/images/latest_images_2024/f7431aa281ada3762ef5e0181a570f081e381234.webp"
      ]
    },
    {
      "id": 154,
      "name": "Spacio Co-Working Moti Nagar",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Moti Nagar",
      "location": "Moti Nagar, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/df052dc9bda4db8a0c1f0f7f6243ef5c94d58509.webp",
        "https://img.cofynd.com/images/latest_images_2024/51f3a715c43da7b8ef23014ff0fa26a13059875a.webp",
        "https://img.cofynd.com/images/latest_images_2024/3afd1dc0c27a67491fedefee96a14d7e9b6ceddf.webp",
        "https://img.cofynd.com/images/latest_images_2024/5e679e1531fda37b3580ef87c5dfed819595df3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/4e5130ccae5783c386c1bff96d5b504be737ed56.webp"
      ]
    },
    {
      "id": 20,
      "name": "Solace Coworks Karol Bagh",
      "badge": "Popular",
      "rating": 5,
      "area": "Karol Bagh",
      "location": "Karol Bagh, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1ae7a569238b42d6a66e4017ca874d2e38a30d3d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d0dd1efebbfa02a0af6688260aacf2c6a9a7f599.webp",
        "https://img.cofynd.com/images/latest_images_2024/993906b759466cecbf7661fea4fcf007c5d27dd0.webp",
        "https://img.cofynd.com/images/latest_images_2024/27af143d7caf57f091a7bc1a67dfdd4336626051.webp",
        "https://img.cofynd.com/images/latest_images_2024/598b83d6ffff784690712b9361ce041a5633fd96.webp"
      ]
    },
    {
      "id": 180,
      "name": "Kuresu Kirti Nagar",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Kirti Nagar",
      "location": "Kirti Nagar, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ebe62b9564d96e19439b45606648039894732fc4.webp",
        "https://img.cofynd.com/images/latest_images_2024/cd89d1c9fb70bec909b450693628364b4fca7f78.webp",
        "https://img.cofynd.com/images/latest_images_2024/a9e991ab6bc38b57e0a3a32f6b5f6e7f2e054b92.webp",
        "https://img.cofynd.com/images/latest_images_2024/1ee358d8af17c7a6ec040f9dad82a7259789c574.webp",
        "https://img.cofynd.com/images/latest_images_2024/ae2a145b41eb64746c71a9a0f5419071478ea6dd.webp"
      ]
    },
    {
      "id": 217,
      "name": "Kovark Moti Nagar",
      "badge": "Verified",
      "rating": null,
      "area": "Moti Nagar",
      "location": "Moti Nagar, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3c703e4b3123d056b57faec0845da141068028bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/15a49a285d41defdaea69819d50a7d669432ab2e.webp",
        "https://img.cofynd.com/images/latest_images_2024/e22cda799ef929c76bc58e832bfa4df832b54e52.webp",
        "https://img.cofynd.com/images/latest_images_2024/2d52d23fd0d9984fd292d4f0e5f06c908a691919.webp",
        "https://img.cofynd.com/images/latest_images_2024/559454a1e1523b9848722074aa756a5ad5e8b4ef.webp"
      ]
    },
    {
      "id": 230,
      "name": "Incospaces Kirti Nagar",
      "badge": "Verified",
      "rating": null,
      "area": "Kirti Nagar",
      "location": "Kirti Nagar, Delhi",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/a518b96764ceccf0dac1b6890395aebcac8edbb7.webp",
        "https://img.cofynd.com/images/latest_images_2024/587eee0c72278bf7bd2f8fb485747ace2ed62a1c.webp",
        "https://img.cofynd.com/images/latest_images_2024/8c7b263b8fd4db1c9332da67eeec22f04e26d84a.webp",
        "https://img.cofynd.com/images/latest_images_2024/b8b49fafd08ce8a545394415ac018e87f3e0a933.webp",
        "https://img.cofynd.com/images/latest_images_2024/e441d8f9d3c6c93026259975d0d7ac682bee686e.webp"
      ]
    }
  ],
  "Lajpat Nagar": [
    {
      "id": 23,
      "name": "9 to 5 Cowork Lajpat Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Lajpat Nagar",
      "location": "Lajpat Nagar, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/320a6823037b9d00bfe1842adf81ef6f79874445.webp",
        "https://img.cofynd.com/images/latest_images_2024/e93c151645e19962dcee8bc3d21e09ec502bc5cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/a57cc3f92a176f2342cb6a52f128ac3475697950.webp",
        "https://img.cofynd.com/images/latest_images_2024/61fe55057df1ea5c52227462d3cbbe22346f93d1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2368a18a715538ff6f7bb6dedd31729240b2afc1.webp"
      ]
    },
    {
      "id": 43,
      "name": "Cospaces Lajpat Nagar",
      "badge": "Special Offer",
      "rating": 4.6,
      "area": "Lajpat Nagar",
      "location": "Lajpat Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/eb749f5a3c4a9fb629e03ec6f0532aeb0ffc34f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/349d5bf1ec3c4b64dfe0814fbc06cbfb1df90630.webp",
        "https://img.cofynd.com/images/latest_images_2024/fa7531a12f2408bfc68061b3e39af8dc13956292.webp",
        "https://img.cofynd.com/images/latest_images_2024/04101288f38855360ac30210ea465306df780318.webp",
        "https://img.cofynd.com/images/latest_images_2024/a6cd79850ecdd74b7cde570281ceef78498d254f.webp"
      ]
    },
    {
      "id": 23,
      "name": "9 to 5 Cowork Lajpat Nagar",
      "badge": "Popular",
      "rating": 4.9,
      "area": "Lajpat Nagar",
      "location": "Lajpat Nagar, Delhi",
      "price": "₹14,999",
      "period": "/ Month",
      "priceFormatted": "₹14,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/320a6823037b9d00bfe1842adf81ef6f79874445.webp",
        "https://img.cofynd.com/images/latest_images_2024/e93c151645e19962dcee8bc3d21e09ec502bc5cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/a57cc3f92a176f2342cb6a52f128ac3475697950.webp",
        "https://img.cofynd.com/images/latest_images_2024/61fe55057df1ea5c52227462d3cbbe22346f93d1.webp",
        "https://img.cofynd.com/images/latest_images_2024/2368a18a715538ff6f7bb6dedd31729240b2afc1.webp"
      ]
    },
    {
      "id": 178,
      "name": "Central Business Center Lajpat Nagar I",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Lajpat Nagar I",
      "location": "Lajpat Nagar I, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/2b140d0a3a0c2b83764b3c66e93fd89adf6d96ac.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7566643c8a7f51f566ea91e98c4161c1f59016f.webp",
        "https://img.cofynd.com/images/latest_images_2024/b5849f690d4fb546067e7d939695c6fd81bc55e1.webp",
        "https://img.cofynd.com/images/latest_images_2024/02701f5fb518f09e7b6fc8d98441a3239a6de8bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/4b4a9c4c3f5d961bcf5af3ca620f8d7daaada315.webp"
      ]
    },
    {
      "id": 176,
      "name": "The Quantum Hub Lajpat Nagar III",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Lajpat Nagar III",
      "location": "Lajpat Nagar III, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/beb0ce8f94f69ca4fa37b516de777427465638c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/362b2b7fc451dc45a991b12b26192c921745893d.webp",
        "https://img.cofynd.com/images/latest_images_2024/69fca7bbdedb1defca6c642369e3e07a503f8b7b.webp",
        "https://img.cofynd.com/images/latest_images_2024/692a0bbaf32d27100886c036bbe9a5f153f7b59b.webp",
        "https://img.cofynd.com/images/latest_images_2024/684f617edfc2e9d5e4c56e0fb84b79b9e26beb09.webp"
      ]
    },
    {
      "id": 129,
      "name": "Workly B Nehru Place",
      "badge": "Premium",
      "rating": 4.5,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹12,999",
      "period": "/ Month",
      "priceFormatted": "₹12,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/15cc7c642dcb03ed60322b6abd649cd005391714.webp",
        "https://img.cofynd.com/images/latest_images_2024/bbfb29d8dd77c9076b9e65f42ab1fb650863f0d5.webp",
        "https://img.cofynd.com/images/latest_images_2024/229158fa3289f3cac764acadfa87888d7231c3f4.webp",
        "https://img.cofynd.com/images/latest_images_2024/3c6734ccf02c2d1ffa0eef97b17472a0df8e3aa0.webp",
        "https://img.cofynd.com/images/latest_images_2024/a6d7aea28a025dd2c81c93164ddbf0a3bbebde82.webp"
      ]
    },
    {
      "id": 179,
      "name": "1share Office East of Kailash",
      "badge": "Popular",
      "rating": 4.6,
      "area": "East of Kailash",
      "location": "East of Kailash, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/f507aa329a6d15b41052587c5cbadfbd730b4786.jpg",
        "https://img.cofynd.com/images/original/add4d1da748d4d94a8092453510f66c0c20f9297.jpg",
        "https://img.cofynd.com/images/original/a123cdbd40211707b7bdbe11ea062c9774f1ef89.jpg",
        "https://img.cofynd.com/images/original/85632fff6d28ec3a3c4727b152908cc569504a2d.jpg",
        "https://img.cofynd.com/images/latest_images_2024/f8a4aae8778e5d02bf0f0f0c64d02b87592e4b90.webp"
      ]
    },
    {
      "id": 21,
      "name": "Hub And Oak Defence Colony",
      "badge": "Popular",
      "rating": 4.4,
      "area": "Defence Colony",
      "location": "Defence Colony, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/3176aab3d53d8a3220cff87025c7c502cb79df06.webp",
        "https://img.cofynd.com/images/latest_images_2024/b2e4b2a2b6377682da310bc7ab0e688d92871fec.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e60ec550d5ca1821f10140a0cda5ce0589d263b.webp",
        "https://img.cofynd.com/images/latest_images_2024/68005cb9a8d81793123bf9f375db0a5de9abb62d.webp",
        "https://img.cofynd.com/images/latest_images_2024/054d79a58d265452716e5ad5c95957234f08d26f.webp"
      ]
    },
    {
      "id": 121,
      "name": "Zen business center Nehru Place",
      "badge": "Premium",
      "rating": null,
      "area": "Nehru Place",
      "location": "Nehru Place, Delhi",
      "price": "₹24,999",
      "period": "/ Month",
      "priceFormatted": "₹24,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6661023c590cc7310a2675b93a849c7f02bd8c8f.webp",
        "https://img.cofynd.com/images/latest_images_2024/36f8928f91990d23d327a09e0f7556ea2840e94a.webp",
        "https://img.cofynd.com/images/latest_images_2024/41f8cfd780a55b0a752daf5ab32fc4ec732e5876.webp",
        "https://img.cofynd.com/images/latest_images_2024/c4375a736439ab426ad898d9e11b40d969c93f1b.webp",
        "https://img.cofynd.com/images/latest_images_2024/403f14ec6fb3e56cc068b5a0b6212adba9dd7fd1.webp"
      ]
    },
    {
      "id": 177,
      "name": "FlexPod South Extension",
      "badge": "Premium",
      "rating": 4.6,
      "area": "South Extension",
      "location": "South Extension, Delhi",
      "price": "₹12,499",
      "period": "/ Month",
      "priceFormatted": "₹12,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9f5cc8629fe6575d3ef6b24c1527424f2570373e.webp",
        "https://img.cofynd.com/images/latest_images_2024/f95b1b2a3b41d2deb43eb909cc498552a4f08215.webp",
        "https://img.cofynd.com/images/latest_images_2024/279f8a0a7806a18b140a82b0e6a43a2f30dfe736.webp",
        "https://img.cofynd.com/images/latest_images_2024/607fb761bb524256bf15a9f92da972a79acd7e68.webp",
        "https://img.cofynd.com/images/latest_images_2024/f9a6953a5621c8423e819c5c422c71b2414d4f76.webp"
      ]
    },
    {
      "id": 220,
      "name": "Spacetime Savitri Premises Greater Kailash II",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Greater Kailash II",
      "location": "Greater Kailash II, Delhi",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d590c95197e23f823f8baa248e22a248fe0c2d75.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff777a7261aaba899b84a2d17d1515be1803f93c.webp",
        "https://img.cofynd.com/images/latest_images_2024/536e33be3d40c87ed93bab92c1c8d505774643c8.webp",
        "https://img.cofynd.com/images/latest_images_2024/7ad02600eb792b37a58f3c68a4e79b18e14284a4.webp",
        "https://img.cofynd.com/images/latest_images_2024/d9676b821d9575a2a226066a18dd77035cb8fa8a.webp"
      ]
    },
    {
      "id": 222,
      "name": "Spacetime Deizen House Greater Kailash",
      "badge": "Premium",
      "rating": 4.4,
      "area": "Greater Kailash",
      "location": "Greater Kailash, Delhi",
      "price": "₹15,999",
      "period": "/ Month",
      "priceFormatted": "₹15,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ca24f2284dea5d7228299e36c00da27b1159ad56.webp",
        "https://img.cofynd.com/images/latest_images_2024/458166ee79bb39638ab57f44fcb619724361283e.webp",
        "https://img.cofynd.com/images/latest_images_2024/c60516bc19916b635158212217430e3c3fdc351f.webp",
        "https://img.cofynd.com/images/latest_images_2024/da5bd71b3300a9aa076c9b97774606d25bc25816.webp",
        "https://img.cofynd.com/images/latest_images_2024/f69de416282c00db75e402e36c7ca900f4cadd4b.webp"
      ]
    },
    {
      "id": 223,
      "name": "Gemba Coworks Greater Kailash II",
      "badge": "Popular",
      "rating": 5,
      "area": "Greater Kailash II",
      "location": "Greater Kailash II, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/7d37f260f0104760f0d6eb35f14e1e3063913131.webp",
        "https://img.cofynd.com/images/latest_images_2024/fcc460bf35bbb6f662662a83d1eb0a8b22607a7b.webp",
        "https://img.cofynd.com/images/latest_images_2024/211ed408da34621b7585f289b4360cf15a5899cf.webp",
        "https://img.cofynd.com/images/latest_images_2024/386ba5f5b6923476744de71095dc4ab83aa40237.webp",
        "https://img.cofynd.com/images/latest_images_2024/ef8e22ca7a0c426e3ce56dc4d4a25feacce1bda0.webp"
      ]
    },
    {
      "id": 231,
      "name": "Third Place Greater Kailash",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Greater Kailash",
      "location": "Greater Kailash, Delhi",
      "price": "₹17,999",
      "period": "/ Month",
      "priceFormatted": "₹17,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/9be4f12a998e5e62a5f50a1f23455adc5a9dc789.webp",
        "https://img.cofynd.com/images/latest_images_2024/25903a873cfc0777659b4e9a8bcf00bf84217d38.webp",
        "https://img.cofynd.com/images/latest_images_2024/a16589ede47ea395eb394bbfac7bb5922b961320.webp",
        "https://img.cofynd.com/images/latest_images_2024/c3102ae125c598b32063035a83882cd1c837e8a1.webp",
        "https://img.cofynd.com/images/latest_images_2024/ecadc497116d94243ec50d40bbf09d555c817012.webp"
      ]
    },
    {
      "id": 233,
      "name": "Megamind Lajpat Nagar Iii",
      "badge": "Premium",
      "rating": 4.8,
      "area": "Lajpat Nagar Iii",
      "location": "Lajpat Nagar Iii, Delhi",
      "price": "₹13,999",
      "period": "/ Month",
      "priceFormatted": "₹13,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6d9c6801c349ec257a377001695c9c4663038c3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/bea0cd937d4559de9fffc2d9df33b943230d8713.webp",
        "https://img.cofynd.com/images/latest_images_2024/c3b262d12f260b0df8197fd5251f0ee2e8c1a4ec.webp",
        "https://img.cofynd.com/images/latest_images_2024/bac6f08871173040f04c7585ec5ba5f61e34983a.webp"
      ]
    },
    {
      "id": 236,
      "name": "Bollco Co-working Greater Kailash II",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Greater Kailash II",
      "location": "Greater Kailash II, Delhi",
      "price": "₹11,999",
      "period": "/ Month",
      "priceFormatted": "₹11,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c1a450d49c7efcff4a52291ebf509c2499db57a5.webp",
        "https://img.cofynd.com/images/latest_images_2024/9182450eb3b6ce8766168fa9bee528edfdb69bf4.webp",
        "https://img.cofynd.com/images/latest_images_2024/91879dbbcf43c4acccf4ae3af4e888556358d3a3.webp",
        "https://img.cofynd.com/images/latest_images_2024/b21a10ae475e2a0f166a45471b90f9c8b82ad202.webp",
        "https://img.cofynd.com/images/latest_images_2024/673ac92677d9ed5a7e1513b47028212ed2f8e82b.webp"
      ]
    }
  ],
  "Uttam Nagar": [
    {
      "id": 24,
      "name": "Udyogaa Uttam Nagar",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Uttam Nagar",
      "location": "Uttam Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94b703a34b1a3aa3638237c1108b3166cc6345c0.webp",
        "https://img.cofynd.com/images/latest_images_2024/49877c484787813ee17643782fa9ba1d01280142.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb13092bd34133a6ce8d02f41ac336bf14dc2bc4.webp",
        "https://img.cofynd.com/images/latest_images_2024/e853397fc74231ab6c018184ea60fe75b92698fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/2aa0a8a732fd9c88f2c92202a0b830eb692ae96c.webp"
      ]
    },
    {
      "id": 24,
      "name": "Udyogaa Uttam Nagar",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Uttam Nagar",
      "location": "Uttam Nagar, Delhi",
      "price": "₹6,999",
      "period": "/ Month",
      "priceFormatted": "₹6,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/94b703a34b1a3aa3638237c1108b3166cc6345c0.webp",
        "https://img.cofynd.com/images/latest_images_2024/49877c484787813ee17643782fa9ba1d01280142.webp",
        "https://img.cofynd.com/images/latest_images_2024/cb13092bd34133a6ce8d02f41ac336bf14dc2bc4.webp",
        "https://img.cofynd.com/images/latest_images_2024/e853397fc74231ab6c018184ea60fe75b92698fc.webp",
        "https://img.cofynd.com/images/latest_images_2024/2aa0a8a732fd9c88f2c92202a0b830eb692ae96c.webp"
      ]
    },
    {
      "id": 85,
      "name": "Purple Co-working Janakpuri",
      "badge": "Popular",
      "rating": 4.6,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/f82a9ef82b372be8a50c522153631ec97f5dd31d.webp",
        "https://img.cofynd.com/images/latest_images_2024/9430566d7002e0f1258c989bb29042526e72c5fb.webp",
        "https://img.cofynd.com/images/latest_images_2024/307316e06e9eb7eff19a668d81020036cb96df19.webp",
        "https://img.cofynd.com/images/latest_images_2024/3cf2b742a6bfe6770b6b8a87bc9960f629125cf3.webp",
        "https://img.cofynd.com/images/latest_images_2024/4fc108c185ae48573a116ccec2cad4295c758689.webp"
      ]
    },
    {
      "id": 181,
      "name": "WorkingRise Dwarka",
      "badge": "Popular",
      "rating": 5,
      "area": "Dwarka",
      "location": "Dwarka, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/da166d215b0474c8762dbe80e0388150eb675eee.webp",
        "https://img.cofynd.com/images/latest_images_2024/e9c15fa622443fbaa7ad0b563ba8b06efdefbeb1.webp",
        "https://img.cofynd.com/images/latest_images_2024/b54832a034c1afee06707e669b7ad75cf43a55b5.webp",
        "https://img.cofynd.com/images/latest_images_2024/109c73ccacccc9b53580a02246ec125a244aaae9.webp",
        "https://img.cofynd.com/images/latest_images_2024/78e353573dce3d3d639235fc145f9b604943dbcf.webp"
      ]
    },
    {
      "id": 33,
      "name": "Co-Offiz Janakpuri",
      "badge": "Popular",
      "rating": 4.5,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/6ef79fab2c1fe2d5cd4b02c49dc23807248d2ac2.webp",
        "https://img.cofynd.com/images/latest_images_2024/330f0d77523b7dd63fd518ba8f353c96596a1e8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/a5b9eec607c65f8419b64ebdf6a8839160e31011.webp",
        "https://img.cofynd.com/images/latest_images_2024/5fd330a87f71e814a9b7f30cc60ac45b19c80d0e.webp",
        "https://img.cofynd.com/images/original/461f6c54542eacbd61ce146ab1b03a01f1f77413.jpg"
      ]
    },
    {
      "id": 9,
      "name": "Spring House SHDL001 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/78ebc303fcaac70f525f8167c32a21f74341487f.webp",
        "https://img.cofynd.com/images/latest_images_2024/91724a81db356a2b6046d8fd3378afba7bfd1167.webp",
        "https://img.cofynd.com/images/latest_images_2024/881f49280eec4c677ca6c2aa361fbfee823ff86d.webp",
        "https://img.cofynd.com/images/latest_images_2024/d613d229aa9117bd9d218ebf9b9d3947b3414027.webp",
        "https://img.cofynd.com/images/latest_images_2024/a360db675fcf732815b80a12b019f5fdf94c8f1b.webp"
      ]
    },
    {
      "id": 51,
      "name": "Spring House SHDL002 Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,499",
      "period": "/ Month",
      "priceFormatted": "₹8,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9236a067f3f88991bb6ef51328e5d11ad2d7b4f1.jpg",
        "https://img.cofynd.com/images/original/da29a8e2ba86b5ff83b7547f8ada119c35848f56.jpg",
        "https://img.cofynd.com/images/latest_images_2024/4c73070f8bcbe024da85a3cdf5adb9a80d581cd3.webp",
        "https://img.cofynd.com/images/latest_images_2024/60a95f067e3ee65b191d4f622a2985ba623eb73c.webp",
        "https://img.cofynd.com/images/original/d0f6c666bebffa5a0dda8648eb64bea21168e6c3.jpg"
      ]
    },
    {
      "id": 76,
      "name": "Peer 2 Desk Dwarka Delhi",
      "badge": "Popular",
      "rating": 5,
      "area": "Dwarka Delhi",
      "location": "Dwarka Delhi, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/845c6d42e51c0706ba54c66973ef00ca53956b3a.jpg",
        "https://img.cofynd.com/images/original/ce4bad5366b2e93e6a092ceb037ead89d82b7842.jpg",
        "https://img.cofynd.com/images/original/03efca9c1a9fb95ca99a7cad3ce3dbd06f1581e3.jpg",
        "https://img.cofynd.com/images/original/25078736fa13b179bc2e8f77bd164967f392aa52.jpg",
        "https://img.cofynd.com/images/original/dd783968999d857e984e59459698c65b3cb71ec3.jpg"
      ]
    },
    {
      "id": 94,
      "name": "Spring House SHDL006 Janakpuri",
      "badge": "Premium",
      "rating": 4.7,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/636afa3db0a47ae89f604f0de6b16bde414e3952.webp",
        "https://img.cofynd.com/images/latest_images_2024/7db7126b993deee43e53aadae7d5c7abce444e3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/52b5be29402dbcc0a585dc9fd921ae7cd1299fae.webp",
        "https://img.cofynd.com/images/latest_images_2024/f060f858382b8788d417d7b517592603d456b229.webp",
        "https://img.cofynd.com/images/latest_images_2024/beca2f899f4af9193af05ffb74aa7856c7d5e0b1.webp"
      ]
    },
    {
      "id": 65,
      "name": "The Club Co Janakpuri",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Janakpuri",
      "location": "Janakpuri, Delhi",
      "price": "₹8,999",
      "period": "/ Month",
      "priceFormatted": "₹8,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/777ebc6adc83c999e217c113060c8eb25391e4bb.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c0f57d4602a7095fd8fc548900e87e993cf7811.webp",
        "https://img.cofynd.com/images/latest_images_2024/67ca7a0f65a04f59ccecc1b49892f00e31b0f9f7.webp",
        "https://img.cofynd.com/images/latest_images_2024/ede1b9d4ce3825ab5240d211e2d9b2d96ccf9cc0.webp",
        "https://img.cofynd.com/images/latest_images_2024/11006c141883bc059e003a631d2cad7aa9ed937a.webp"
      ]
    },
    {
      "id": 214,
      "name": "Smart Square Dwarka",
      "badge": "Popular",
      "rating": 4.7,
      "area": "Dwarka",
      "location": "Dwarka, Delhi",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/d7399bc2ac8276d57e0915c004818fdf2b5b2ca2.webp",
        "https://img.cofynd.com/images/latest_images_2024/080f3bd67095b72df76f45d36a4398e60f5c7a4c.webp",
        "https://img.cofynd.com/images/latest_images_2024/e838164c268c31c09af485c67bff2dc2317173ae.webp",
        "https://img.cofynd.com/images/latest_images_2024/ca7a30bef58ab16fbcd12b4f2a3ef47a348b8b77.webp",
        "https://img.cofynd.com/images/latest_images_2024/b07a92c33e66a58a74f5541863f36739a0ae9fdd.webp"
      ]
    },
    {
      "id": 215,
      "name": "Worklikeboss Dwarka",
      "badge": "Popular",
      "rating": 4.8,
      "area": "Dwarka",
      "location": "Dwarka, Delhi",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ae9e471cf09b9ee4f4b3639a22b9036766cfdeeb.webp",
        "https://img.cofynd.com/images/latest_images_2024/39a746d55e6bc0befb72136594cdb44d3c97f11d.webp",
        "https://img.cofynd.com/images/latest_images_2024/6a657b009f14f7754b7a95d3105d67f77e688a95.webp",
        "https://img.cofynd.com/images/latest_images_2024/6db380c20d53d3f233705913f88496fa4b2af4cb.webp",
        "https://img.cofynd.com/images/latest_images_2024/d0b99f6b0510448753fac40b000d2458f4a77e6e.webp"
      ]
    },
    {
      "id": 228,
      "name": "Hoblix Space Najafgarh",
      "badge": "Popular",
      "rating": null,
      "area": "Najafgarh",
      "location": "Najafgarh, Delhi",
      "price": "₹4,999",
      "period": "/ Month",
      "priceFormatted": "₹4,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/35f0a08d60d779990ec33ac713a1cf9474c1488d.webp",
        "https://img.cofynd.com/images/latest_images_2024/a31908714a8cdae804fb6fa2d969a0b6167184b7.webp",
        "https://img.cofynd.com/images/latest_images_2024/aaea486e1add6ebeaefcd360176a04b4d5d2163d.webp",
        "https://img.cofynd.com/images/latest_images_2024/a7aa81fadee0403ada3e7d56cabbcb624b6f9b52.webp",
        "https://img.cofynd.com/images/latest_images_2024/0e6a74ab5d05a7bdf330d5c9c29f64e73b66a9ae.webp"
      ]
    }
  ]
};

export const similarDehliOfficeCards = [
  {
    "id": 137,
    "name": "Vision Cowork Saket",
    "badge": "Popular",
    "rating": 5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/66faa3e87a8d79118ccdd6a7c34c2b588e648587.webp",
      "https://img.cofynd.com/images/latest_images_2024/3c00dda929235e8de752c03114f8e74d7799cc3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/2899749b134fda5ae2b1dc419ced4e0a4bd799b9.webp",
      "https://img.cofynd.com/images/latest_images_2024/2db7398bf86ad8e40058f88d49b59ba366d64223.webp",
      "https://img.cofynd.com/images/latest_images_2024/72a9d124803ed61ac034463e02d9beb522186179.webp"
    ]
  },
  {
    "id": 138,
    "name": "The Executive Centre Connaught Place",
    "badge": "Premium",
    "rating": 4.6,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹59,999",
    "period": "/ Month",
    "priceFormatted": "₹59,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0a13c48b1232594323602a1d7c09fdfcfa39d5b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/33c2193bcd4660150f5326c8b6c8e1ff94c9efd5.webp",
      "https://img.cofynd.com/images/latest_images_2024/d26822472d855917dc460f087359cda2c169df6b.webp",
      "https://img.cofynd.com/images/latest_images_2024/0b0c4f36192ac66c6e54f63d22c44c807bbab8e6.webp",
      "https://img.cofynd.com/images/latest_images_2024/132027f4b831061ddf261b066f62ecd12c966eae.webp"
    ]
  },
  {
    "id": 139,
    "name": "MIO Coworks Saket",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹12,999",
    "period": "/ Month",
    "priceFormatted": "₹12,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6b71b4a68c65ebe3679850647d0e94cc9afc0c73.webp",
      "https://img.cofynd.com/images/latest_images_2024/efa3260f45bb13a27a1160a0ce443f538f9deed5.webp",
      "https://img.cofynd.com/images/latest_images_2024/e9c0a6e2d0ee3739e87102a07b4512c0da7e6804.webp",
      "https://img.cofynd.com/images/latest_images_2024/7aeecd0643a47b3a9044d1aac62ae1cee7e940ae.webp",
      "https://img.cofynd.com/images/latest_images_2024/ea20175a94edf9f76d0da176d92f37fe9c70feb2.webp"
    ]
  },
  {
    "id": 140,
    "name": "Vatika Business Centre Thapar House Connaught Place",
    "badge": "Popular",
    "rating": 4.3,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹34,999",
    "period": "/ Month",
    "priceFormatted": "₹34,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d4402c3535700dcbcc16ff5367cc9d6661d5662e.webp",
      "https://img.cofynd.com/images/latest_images_2024/b915991562c7737eec9b2bab031fd0c703f6596e.webp",
      "https://img.cofynd.com/images/latest_images_2024/8393e4a803ee3b9db0d316917dfb46385bbd62d2.webp",
      "https://img.cofynd.com/images/latest_images_2024/e89eb7252a298255c916fd2d03c66a61cb020c30.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab6d6ff3afb385f0c7de499623fa3a07a583cf1a.webp"
    ]
  },
  {
    "id": 141,
    "name": "Miracle Works Saket",
    "badge": "Premium",
    "rating": 5,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/46d94f53e5d4740e35034015caadf167704e539a.webp",
      "https://img.cofynd.com/images/latest_images_2024/140e021cdfbdcddd810cfa058d69894c340b5ad7.webp",
      "https://img.cofynd.com/images/latest_images_2024/402d71a37c2979ac03fa3a455caf1fe4e50234c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/1e90770da8322a7e4dbb24ec8fc5e7bb23abf5b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/c551f1d881288a150cab654a9f1db56c3cfe0ef7.webp"
    ]
  },
  {
    "id": 142,
    "name": "The Bivouac Connaught Place",
    "badge": "Popular",
    "rating": 4.9,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹18,999",
    "period": "/ Month",
    "priceFormatted": "₹18,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/043cee1a1946418a48a085351140071e13df39d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/dc94e57587e08ffdbaabede2bb24f892d1631884.webp",
      "https://img.cofynd.com/images/latest_images_2024/f413fa1e051699f58ca34b4853dffc05eda9400e.webp",
      "https://img.cofynd.com/images/latest_images_2024/923358571e93ca0673185951c5fc40c41d1a697c.webp",
      "https://img.cofynd.com/images/latest_images_2024/ca336d8549d0aeee1cd60a99b76d32469b97c319.webp"
    ]
  },
  {
    "id": 143,
    "name": "91Springboard Prius Platinum Saket",
    "badge": "Verified",
    "rating": 4.6,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹22,999",
    "period": "/ Month",
    "priceFormatted": "₹22,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a354802e6fb5907790a540d413a7a6d786c95374.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d7b3aafa737465bb7c778d8c22cc7b50aa4da17.webp",
      "https://img.cofynd.com/images/latest_images_2024/46976533ddaaddc6024bfc1ce5edb18c3956df4c.webp",
      "https://img.cofynd.com/images/latest_images_2024/2356af20d5beb140a39833bc15b297cadd2a9c5e.webp",
      "https://img.cofynd.com/images/latest_images_2024/40f924d21c971bbb8edaee905df5493fd5ba85d8.webp"
    ]
  },
  {
    "id": 144,
    "name": "The Berry Coworks Connaught Place",
    "badge": "Popular",
    "rating": 5,
    "area": "Connaught Place",
    "location": "Connaught Place, Delhi",
    "price": "₹13,999",
    "period": "/ Month",
    "priceFormatted": "₹13,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/f3eaf21f37a86e2921534cbce68ccbb7648c4b55.webp",
      "https://img.cofynd.com/images/latest_images_2024/008c086d3087c1a674cf734692c660fd5906fffe.webp",
      "https://img.cofynd.com/images/latest_images_2024/061fb5a1f651fcc04b0cacad91905ccb6a6d3d62.webp",
      "https://img.cofynd.com/images/latest_images_2024/8fa0f466fba56cbffbc74f5550d900da8ad6416c.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b3f19e4935410b7447812abca2d163c00c0f7bd.webp"
    ]
  },
  {
    "id": 145,
    "name": "Mytime Cowork Saket",
    "badge": "Popular",
    "rating": 4.7,
    "area": "Saket",
    "location": "Saket, Delhi",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/cece86c92ddad183bdf2c90657112a4f155fb2d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/2299bf3bbbc66b13c5388c0ef3f822b78bfa0e17.webp",
      "https://img.cofynd.com/images/latest_images_2024/52a823adafc4ec753c8f849712b376a8b36392e8.webp",
      "https://img.cofynd.com/images/latest_images_2024/376dcd805c86d03e78b845979b9149baed5d29ed.webp",
      "https://img.cofynd.com/images/latest_images_2024/1768dacf7f448a75172d3cf6a329f95c1c2539fc.webp"
    ]
  }
];
export const similarDelhiOfficeCards = similarDehliOfficeCards;

export const allDehliOfficeCards = [
  ...dehliOfficeCards,
  ...moreDehliOfficeCards,
  ...finalDehliOfficeCards,
  ...featuredDehliOfficeCards,
  ...pageTwoDehliOfficeCards,
  ...pageTwoMoreDehliOfficeCards,
  ...pageTwoFinalDehliOfficeCards,
  ...pageTwoFeaturedDehliOfficeCards,
  ...pageThreeDehliOfficeCards,
  ...pageThreeMoreDehliOfficeCards,
  ...pageThreeFinalDehliOfficeCards,
  ...pageThreeFeaturedDehliOfficeCards,
  ...pageFourDehliOfficeCards,
  ...pageFiveDehliOfficeCards,
  ...pageSixDehliOfficeCards,
  ...pageSevenDehliOfficeCards,
  ...pageEightDehliOfficeCards,
  ...similarDehliOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
].filter((card, index, list) => list.findIndex((other) => other.id === card.id) === index);
export const allDelhiOfficeCards = allDehliOfficeCards;

export const getDehliOfficeCardById = (id) => findOfficeBySlug(allDehliOfficeCards, id, "delhi");
export const getDehliOfficeSlug = (space) => officePath(allDehliOfficeCards, space, "delhi");
export const getDelhiOfficeCardById = getDehliOfficeCardById;

export const topDehliCoworkingLocations = [
  {
    "id": "loc-connaught-place",
    "name": "Connaught Place",
    "title": "Coworking Space in Connaught Place",
    "image": "https://img.cofynd.com/images/latest_images_2024/b51cfb296e1d87a35723c9d4a3b957be96ea73cd.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-saket",
    "name": "Saket",
    "title": "Coworking Space in Saket",
    "image": "https://img.cofynd.com/images/latest_images_2024/a36d09bad7175ca9643ad8e88f77462bd8ec36e1.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-nehru-place",
    "name": "Nehru Place",
    "title": "Coworking Space in Nehru Place",
    "image": "https://img.cofynd.com/images/latest_images_2024/8a42a52f0d08b1fe8fbc67d8a16ee3a22553597b.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-aerocity",
    "name": "Aerocity",
    "title": "Coworking Space in Aerocity",
    "image": "https://img.cofynd.com/images/latest_images_2024/323979251e5458d1485f20d1ff9fcc33b230dfb8.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-okhla",
    "name": "Okhla",
    "title": "Coworking Space in Okhla",
    "image": "https://img.cofynd.com/images/latest_images_2024/d72385e6df621c44142ed89e03ee20dd32220d9d.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-netaji-subhash-place",
    "name": "Netaji Subhash Place",
    "title": "Coworking Space in Netaji Subhash Place",
    "image": "https://img.cofynd.com/images/latest_images_2024/1288e19a7b909ea9ebbe71a2fa95c50736afc7c7.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-hauz-khas",
    "name": "Hauz Khas",
    "title": "Coworking Space in Hauz Khas",
    "image": "https://img.cofynd.com/images/latest_images_2024/ad7fa46d9bdb766ddb3da837e007525c9d1a0a11.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-green-park",
    "name": "Green Park",
    "title": "Coworking Space in Green Park",
    "image": "https://img.cofynd.com/images/latest_images_2024/d0477af6807946ce717972841b30b7b5613cdfb9.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-dwarka-delhi",
    "name": "Dwarka Delhi",
    "title": "Coworking Space in Dwarka Delhi",
    "image": "https://img.cofynd.com/images/latest_images_2024/a65d621179742f9abdf246d47ca5ed37d4afc550.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-karol-bagh",
    "name": "Karol Bagh",
    "title": "Coworking Space in Karol Bagh",
    "image": "https://img.cofynd.com/images/latest_images_2024/a87f477a78e4651b34c63890a6f9a119e33262b4.webp",
    "ctaText": "Explore Spaces"
  }
];
export const topDelhiCoworkingLocations = topDehliCoworkingLocations;

export const dehliAreas = dehliNeighborhoods;
export const delhiAreas = dehliNeighborhoods;
export const areas = dehliNeighborhoods;

export const dehliSpaces = dehliOfficeCards;
export const delhiSpaces = dehliOfficeCards;
export const spaces = dehliOfficeCards;

export default {
  dehliNeighborhoods,
  delhiNeighborhoods,
  dehliOfficeCards,
  delhiOfficeCards,
  paginationData,
  allDehliOfficeCards,
  allDelhiOfficeCards,
  getDehliOfficeCardById,
  getDelhiOfficeCardById,
  topDehliCoworkingLocations,
  topDelhiCoworkingLocations
};
