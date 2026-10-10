import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Ahmedabad Coworking Spaces Matrix Layout Data & Neighborhood Filters
 * All listings (names, addresses, prices, ratings, badges, photos, descriptions, amenities,
 * opening hours and plans) are taken from https://cofynd.com/coworking/ahmedabad
 * (fetched 2026-10-10). Each card keeps its cofynd page in `sourceUrl`.
 * Price = lowest monthly Dedicated Desk / Private Cabin / Office Space plan, as cofynd lists it.
 */

export const ahmedabadNeighborhoods = [
  "SG Highway",
  "Navrangpura",
  "Vastrapur",
  "Prahlad Nagar",
  "Satellite",
  "Ellisbridge",
  "Makarba",
  "Bopal"
];

// ============================================================================
// Page 1
// ============================================================================
export const ahmedabadOfficeCards = [
  {
    "name": "Awfis Coworking",
    "badge": "Trending",
    "rating": 4.5,
    "area": "SG Highway",
    "location": "Sindhu Bhavan Road, Ahmedabad",
    "price": "₹10,000",
    "period": "/ month",
    "priceFormatted": "₹10,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/7503585345e773254beeaff7382a517e91954c90.webp",
      "https://img.cofynd.com/images/latest_images_2024/c0ebcdbc552676aa70c10d600bc1d8d3a3d39219.webp",
      "https://img.cofynd.com/images/latest_images_2024/13a038b062a739f1b0e3c208f82ce9ea1d3bd957.webp",
      "https://img.cofynd.com/images/latest_images_2024/d404ecfc3ee83d17323278e43780662e19e10fa8.webp",
      "https://img.cofynd.com/images/latest_images_2024/dd9adb4642a540c58a41b0a16e75de2bdc3ed475.webp",
      "https://img.cofynd.com/images/latest_images_2024/6a64cefc926a10480489d6166ce547fe83fb3d69.webp"
    ],
    "address": "Sindhu Bhavan Road, Ahmedabad",
    "landmark": "Thaltej Metro Station",
    "description": "Step into our center, where modern amenities meet sleek design. Here we offer spacious meeting rooms equipped with state-of-the-art infrastructure, perfect for hosting your team meetings and brainstorming sessions. With high-quality video projection and conferencing facilities, collaboration has never been easier. Whether you're planning, strategizing, or mapping out your next big idea, our dynamic work environment is designed to foster teamwork and productivity.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "24x7 Security",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Video Conferencing Capabilities",
      "Workshops",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 505,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 849,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1199,
        "duration": "month"
      }
    ],
    "brandName": "Awfis",
    "latitude": 23.048833673834295,
    "longitude": 72.50869477722225,
    "sourceUrl": "https://cofynd.com/coworking/awfis-space-solutions-sindhu-bhavan-road",
    "cofyndId": "6645f2ef0c3fd2f8ee2b3707",
    "locality": "Sindhu Bhavan Road",
    "id": 1
  },
  {
    "name": "Awfis Coworking",
    "badge": "Premium Space",
    "rating": 4.3,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹8,999",
    "period": "/ month",
    "priceFormatted": "₹8,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/758bbf6c44aa1c96b1808a690d9c5d268a81d37d.webp",
      "https://img.cofynd.com/images/latest_images_2024/a85378999bc43601dfc03cd33bc3e2566bdeca1e.webp",
      "https://img.cofynd.com/images/latest_images_2024/9216df59d1d2d56062b7260ed8979bc3ff72711a.webp",
      "https://img.cofynd.com/images/latest_images_2024/8f8f67747b4ba7bbcff2059370cb4ed319ce7e1c.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1b8d16142ace00890f57e9ccf4366997ea8fea3.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "Spread across 25,000 sq ft, our latest centre is strategically situated in the heart of Ahmedabad's commercial business district at RE11, Iskon-Ambli Road. With over 500 workstations, 4 meeting rooms and 1 large cafeteria with live food counters, this plush workspace spreads across 2 floors and is located just off S.G. Highway and in close proximity to Karnavati club, Science city, and SP ring road. This centre is easily accessible from all public transport. This centre provides fully functional, tech enabled, new age work environment to suit the needs of startups, freelancers and corporates. The interiors are beautifully done to provide an inspirational and productive work atmosphere. The seating plan includes premium cabins, with pedestal storage, lockers, whiteboards, pinup boards etc. The collaboration zone consists of meeting lounges, meeting pods, sofa seating and provides you with the right activity-based ambience. This centre has a fully functional cafeteria, housekeeping service, dedicated centre manager & parking facility. It is completely secure with entry allowed only through NFC access cards and has CCTV coverage. Our members have access to hi-tech infrastructure like Video Projection, Video Conferencing, High Speed Internet and Laser Printing, complimentary tea/coffee and meeting room credits. Awfis Rewards program offers access to wide range of benefits for our members.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "24x7 Security",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Room",
      "Meeting Rooms",
      "Video Conferencing Capabilities",
      "Workshops",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 400,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 8999,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 849,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1199,
        "duration": "month"
      }
    ],
    "brandName": "Awfis",
    "latitude": 23.097626455030905,
    "longitude": 72.53181787633822,
    "sourceUrl": "https://cofynd.com/coworking/awfis-space-solutions-ahmedabad-sg-highway",
    "cofyndId": "6645edc90c3fd2f8ee281299",
    "locality": "SG Highway",
    "id": 2
  },
  {
    "name": "Connekt",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Memnagar, Ahmedabad",
    "price": "₹9,000",
    "period": "/ month",
    "priceFormatted": "₹9,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/f6817e36e799c995fc8f63700b6f052316d52338.jpg",
      "https://img.cofynd.com/images/original/8a91ec5cf140cf41bf4e1deb2cedd3fdf86779dc.jpg",
      "https://img.cofynd.com/images/original/01b124b32e0e6603332a00833d2f20ab8b6370f2.jpg",
      "https://img.cofynd.com/images/original/a8a5014d74473d97d06c5a9f35a116607c1e061b.jpg",
      "https://img.cofynd.com/images/original/ae5c30845291c34315f765127986650cfade6bab.jpg"
    ],
    "address": "Memnagar, Ahmedabad",
    "landmark": null,
    "description": "Connekt Ahmedabad has been designed to cater all types of ventures. It comprises private cabins, hot desks and dedicated desks with all the office essentials. This beautifully designed workspace is equipped with modern amenities such as unlimited beverages, high-speed internet, printer, scanner, photocopy, cafeteria, phone booth, housekeeping service, sufficient air conditioning, event space, conference rooms, maintenance and support etc. It is easily accessible from all the main roads, business centres and metros. The surrounding area is bustled with cinemas, food outlets, banks, cricket grounds, parks, gardens etc. This workspace increases your work productivity and efficiency effortlessly.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 250,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10200,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 749,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 899,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 999,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0486846,
    "longitude": 72.52499999999999,
    "sourceUrl": "https://cofynd.com/coworking/connekt-ahmedabad",
    "cofyndId": "5fdb41491be4d8562d3be87d",
    "locality": "Navrangpura",
    "id": 3
  },
  {
    "name": "Incuspaze",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Vijay Cross Road, Ahmedabad",
    "price": "₹7,500",
    "period": "/ month",
    "priceFormatted": "₹7,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/393cfd9c29a2459a275224c1f40acf2274906935.jpg",
      "https://img.cofynd.com/images/original/20c2a8bee00f1a9a582c9748aa6dab2be6d7bc38.jpg",
      "https://img.cofynd.com/images/original/03857913397960d1984a89ed7865823ce4ba9571.jpg",
      "https://img.cofynd.com/images/original/ca5556c04a3338ceae523e0eff42546ab9d0798c.jpg",
      "https://img.cofynd.com/images/original/e104202b84c2e70d46e52cc1eba72cbf4a06442e.jpg"
    ],
    "address": "Vijay Cross Road, Ahmedabad",
    "landmark": null,
    "description": "Incuspaze on Vijay Cross Road is a fully-equipped workspace ideal for freelancers, startups and SMEs. It gives you options to work for a day, month or longer periods from Day Passes, Dedicated Desks and Private Cabins. It also offers Virtual Offices for GST registration, business registration and mailing address. There is also a Game area where you can relax after a hard day at work.",
    "amenities": [
      "Air-Conditioning",
      "Bike Parking",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 300,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 18000,
        "duration": "year"
      },
      {
        "title": "Private Cabin",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1099,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2499,
        "duration": "month"
      }
    ],
    "brandName": "Incuspaze",
    "latitude": 23.0426736,
    "longitude": 72.5488147,
    "sourceUrl": "https://cofynd.com/coworking/incuspaze-vijay-cross-road",
    "cofyndId": "5f7d4d6e8c4e6961990e6ae6",
    "locality": "Navrangpura",
    "id": 4
  },
  {
    "name": "DevX",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad",
    "price": "₹7,500",
    "period": "/ month",
    "priceFormatted": "₹7,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/79ec40336ea77c14d3a1ed2171dcf51078dad326.jpg",
      "https://img.cofynd.com/images/original/d04a188f31fd2c607e41199e5a9c6b758266a96f.jpg",
      "https://img.cofynd.com/images/original/11af4a1f27f1a9c108c15799352812a895e1f668.jpg",
      "https://img.cofynd.com/images/original/8186706f5ed08369e4742d03f5fa7931617e56b6.jpg",
      "https://img.cofynd.com/images/original/a5833b89e72281bb6720eaf6187a9ab88e8be4bf.jpg"
    ],
    "address": "Vastrapur, Ahmedabad",
    "landmark": null,
    "description": "Welcome to DevX's Ahmedabad working centre, a ready-to-use coworking space. It offers flexi desks, dedicated desks, private cabins, manager cabins, meeting rooms, event rooms, training rooms and conference rooms for various business purposes. This sophisticated and professional coworking space boasts state of the art amenities such as reception, tea & coffee, networking events, parking area, cafeteria, daycare & fitness, security, lounge & games etc. It is located in close proximity to various banks, ATMs, hospitals and bus stations. A plethora of opportunities are waiting for you at Teal Clock House. Book now!",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "sunday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      }
    },
    "seats": 190,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 6500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1099,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2499,
        "duration": "month"
      }
    ],
    "brandName": "Devx",
    "latitude": 23.030633,
    "longitude": 72.5302038,
    "sourceUrl": "https://cofynd.com/coworking/devx-ahmedabad",
    "cofyndId": "5f7af5758c4e6961990e625d",
    "locality": "Vastrapur",
    "id": 5
  },
  {
    "name": "Opulence",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vikram Nagar, Ahmedabad",
    "price": "₹9,500",
    "period": "/ month",
    "priceFormatted": "₹9,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/cee1a52b4ab38037a3086599e8d96f87d35272e8.jpg",
      "https://img.cofynd.com/images/original/ee54e214c7c27280516089abfbc2d4c7ff18c74d.jpg",
      "https://img.cofynd.com/images/original/3db2ad64a8d627649455c031e4a9f3eee6578408.jpg",
      "https://img.cofynd.com/images/original/c96eb2f8e349b7afc2f3172e5a74361ca09a0b64.jpg",
      "https://img.cofynd.com/images/original/0277164b153dc8c1d6a1dee3d99b88c54cf29ee8.jpg"
    ],
    "address": "Vikram Nagar, Ahmedabad",
    "landmark": null,
    "description": "Opulence Privilon is a 180 seater workspace located on Iscon Cross Road, Ahmedabad, Gujarat. It offers hot desks, dedicated desks, private cabins, manager cabins & day passes with state-of-the-art amenities like spacious rooms, complete CCTV surveillance, centralized air conditioning, huge pantry area, car parking, events space, trained housekeeping, cafeteria, regular sanitization and high-speed internet connection among others. Prominent residential localities, schools, hospitals, grocery stores and recreational spots lie in the vicinity. Located in the western part of the city, the space also offers smooth connectivity with all modes of transport.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "sunday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      }
    },
    "seats": 200,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 8500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 5499,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0278725,
    "longitude": 72.5055751,
    "sourceUrl": "https://cofynd.com/coworking/opulence-privilon",
    "cofyndId": "5f7b196a8c4e6961990e64b9",
    "locality": "Vikram Nagar",
    "id": 6
  },
  {
    "name": "312 Sangrilla",
    "badge": null,
    "rating": null,
    "area": "Prahlad Nagar",
    "location": "Shyamal Cross Road, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d4dbd0d5cde1eec211706ec6965c36e5195c6334.jpg",
      "https://img.cofynd.com/images/original/968693a41033346b277ff5d64c026a04846a3c37.jpg",
      "https://img.cofynd.com/images/original/d4e54756ebd3d88828bc5e60a6c731078f034a99.jpg",
      "https://img.cofynd.com/images/original/8a6774a50a12b00ceaa940dcde435031e51cc6a1.jpg",
      "https://img.cofynd.com/images/original/fe349a713d59ac27af784d65e772e8989b270d47.jpg"
    ],
    "address": "Shyamal Cross Road, Ahmedabad",
    "landmark": null,
    "description": "312 Sangrilla Complex is ideal for freelancers, startups and small businesses. It offers all flexible seating options equipped with a wide range of office amenities from High-Speed Wifi, Tea, Coffee, Printer, 24 hrs access, Meeting Rooms and Parking Space. Centrally located near Shyamal Cross Road, this space has easy access to all local modes of transport.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "",
        "to": "",
        "closed": false,
        "open24": true
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": false,
        "open24": true
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 50,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 15000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1099,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2499,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.012023,
    "longitude": 72.528415,
    "sourceUrl": "https://cofynd.com/coworking/312-sangrilla-complex",
    "cofyndId": "5f7b1e5b8c4e6961990e64cc",
    "locality": "Prahlad Nagar",
    "id": 7
  },
  {
    "name": "Miswa Coworking",
    "badge": null,
    "rating": null,
    "area": "Satellite",
    "location": "Ratnanjali Square, Jodhpur, Satellite, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/15e925460faff5cfc5ad5eb6d59a6ecfc40ee356.jpg",
      "https://img.cofynd.com/images/original/4a467f2da4ff27f81daa509021ca2e276c059d84.jpg",
      "https://img.cofynd.com/images/original/cb7149b8e4a86616757b15f59707f3b1f11d936d.jpg",
      "https://img.cofynd.com/images/original/e7d16cfd14312e7912914845c428568e2887848a.jpg"
    ],
    "address": "Ratnanjali Square, Jodhpur, Satellite, Ahmedabad",
    "landmark": null,
    "description": "Miswa Coworking is a newly launched shared office space in Jodhpur Satellite, Gandhinagar. It is best in a class flexible workspace, in the heart of Gandhinagar, near Jivraj Park Metro Station. This is a premium coworking space for freelancers, small-scale businesses, and GenZ entrepreneurs with a variety of hot desks & dedicated desks. Miswa Coworking is a flawless option to rent flexible workspace and virtual office space, starting from just INR 4,200/month.\nIn addition, Miswa Coworking - Gandhinagar is equipped with high-end facilities and offers housekeeping assistance, business-grade internet, parking space, bike racks, security staff, and a lot more with the subscription of the desk. Try it out and book your desk in Miswa Coworking - Gandhinagar now with CoFynd with exciting coupons.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "10:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "10:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 9,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 4200,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.0144586,
    "longitude": 72.5173852,
    "sourceUrl": "https://cofynd.com/coworking/miswa-coworking-satellite",
    "cofyndId": "64119003c69694731aab96e2",
    "locality": "Satellite",
    "id": 8
  }
];

export const moreAhmedabadOfficeCards = [
  {
    "name": "Samaan Complex",
    "badge": null,
    "rating": null,
    "area": "Satellite",
    "location": "Samaan Complex, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9e21b205d392d6a582de30b8d9fbd14d93fdc8e9.jpg",
      "https://img.cofynd.com/images/original/0848291f85b3d4e9615a1732904270f934f422f5.jpg",
      "https://img.cofynd.com/images/original/dc6375331fae44dfac396caef387b241100ba3a9.jpg",
      "https://img.cofynd.com/images/original/a07aa90dec799942b3be21723a3acdca3e7fc5ea.jpg",
      "https://img.cofynd.com/images/original/f49fe6d5dc9a60a333ebba1edb3c625a92b7f9b6.jpg"
    ],
    "address": "Samaan Complex, Ahmedabad",
    "landmark": null,
    "description": "Samaan Complex is a mind-blowing coworking space located in Ahmedabad's Satellite. This is a small size shared office space with a wide variety of private & managerial cabins. It also offers you access to conference rooms, high-speed WiFi, parking space, wellness rooms, event space, unique common areas, phone booths, printing facilities, etc. This coworking space looks glittering in the evening as the space turns into an exciting night with fav bars & restaurants nearby.\nIn addition to surroundings, it also has flea markets, exhibitions & food festivals in the vicinity which makes it a premier place to work elegantly. Furthermore, Samaan Complex is located in the heart of the city, just off to the Sudarshan Bungalows bus stop & only a 10-minute drive from Vastrapur railway station. Explore it out and book your seats now in Samaan Complex with CoFynd at only INR 5,000.",
    "amenities": [
      "Printer & Scanner",
      "Air-Conditioning",
      "Wi-Fi"
    ],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 9,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 5000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coliving",
    "latitude": 23.02998685,
    "longitude": 72.526801462,
    "sourceUrl": "https://cofynd.com/coworking/samaan-complex-coworking",
    "cofyndId": "64252ca39bce2737a7a9e78d",
    "locality": "Satellite",
    "id": 9
  },
  {
    "name": "5B Colab",
    "badge": null,
    "rating": null,
    "area": "Ellisbridge",
    "location": "Vishwabharti society, Ahmedabad",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/364783ebcfc48e10bae468efe3de7549db0bc7c5.jpg",
      "https://img.cofynd.com/images/original/e9e62ddaf02fe5c7275703313a49bb5b4d6aa73a.jpg",
      "https://img.cofynd.com/images/original/9d63ad078c104b5fd3df2eb4d2fc868b6c45b1e3.jpg",
      "https://img.cofynd.com/images/original/b0040486c1c4496c986e982ad89c94eb4cfc6815.jpg",
      "https://img.cofynd.com/images/original/0af2dbebc135d849162c585b0c12c9f6477f8658.jpg",
      "https://img.cofynd.com/images/original/9c764658ece56c0af4769882a2678297b68c2bde.jpg"
    ],
    "address": "Vishwabharti society, Ahmedabad",
    "landmark": null,
    "description": "5B Colab is a thriving community of freelancers, professionals and small businesses. It offers Day Passes, Hot Desks and Dedicated Desks with a number of amenities like High-Speed Wifi, Printer, Tea, Coffee, Meeting Rooms, Parking Space and various networking opportunities. 5B Colab is the perfect place to grow your business and skills. So, join 5B Colab in Ellisbridge and put your business into the action.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 40,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 6500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1099,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2499,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.031569,
    "longitude": 72.559113,
    "sourceUrl": "https://cofynd.com/coworking/5b-colab-ahmedabad",
    "cofyndId": "5f7b040c8c4e6961990e643d",
    "locality": "Ellisbridge",
    "id": 10
  },
  {
    "name": "D9ITHUB",
    "badge": null,
    "rating": null,
    "area": "Ellisbridge",
    "location": "Nehru Nagar, Ahmedabad",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/b6fa1ce57a0a06675e14b1454189b260cbb0d09d.jpg",
      "https://img.cofynd.com/images/original/eba411ea1fe7237f4f287f2f9a387968caa7f336.jpg",
      "https://img.cofynd.com/images/original/fe5c3bcba6933267adab615729db007de829e4e7.jpg",
      "https://img.cofynd.com/images/original/e990ede4468f581e7fb0ef81ce693f5e2f38d095.jpg",
      "https://img.cofynd.com/images/original/b0863178dd85c72004c96bd43e17f370765cd8cc.jpg",
      "https://img.cofynd.com/images/original/e427c8cf167e69171c87c142932900549894b981.jpg"
    ],
    "address": "Nehru Nagar, Ahmedabad",
    "landmark": null,
    "description": "D9ithHub is a mind-blowing coworking space located in Nehru Nagar, Ahmedabad. This workspace is offering a wide-range of seating arrangements such as hot desks, dedicated desks, manager cabins, meeting rooms, etc all are budget-friendly. \nThis coworking space offers a wide range of modern amenities such as ample parking space, recreational facilities which include AC, Internet, Atrium Ara, etc along with meeting rooms at ₹4500/- per day for 5-6 people. Reserve this amazing workspace and start your business journey in a collaborative environment with people from all walks of life.",
    "amenities": [
      "Air-Conditioning",
      "Bathroom",
      "Bike Parking",
      "Cupboard",
      "Parking",
      "CCTV",
      "24x7 Security",
      "Power Backup",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:30 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 50,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 6000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coliving",
    "latitude": 23.0607859,
    "longitude": 72.5317619,
    "sourceUrl": "https://cofynd.com/coworking/d9ithhub-ahemdabad",
    "cofyndId": "62f0e5479c58b604bf5afd4a",
    "locality": "Nehru Nagar",
    "id": 11
  },
  {
    "name": "Business park",
    "badge": null,
    "rating": null,
    "area": "Makarba",
    "location": "Makarba, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/d088ccbd560018ab4c9c0448aa4eedb67b52a92e.jpg",
      "https://img.cofynd.com/images/original/99c5a4c143a8f5f16346e32364f71dc66acbd184.jpg",
      "https://img.cofynd.com/images/original/24e3c7a0e61d8b242507ed0ff5ce3b98ad314833.jpg",
      "https://img.cofynd.com/images/original/6dd8f257c41ea74d0356871cd2b366f0f783d487.jpg",
      "https://img.cofynd.com/images/original/28a9d323b985e48b59293cc2caa4eacd56008a06.jpg"
    ],
    "address": "Makarba, Ahmedabad",
    "landmark": null,
    "description": "It’s designed for all working professional who want there own desk for co working space and one boss cabin the location of the following co working space is at a very good location near by sg highway and corporate road, its a good place for all the freelance to work peacefully.",
    "amenities": [
      "Wi-Fi",
      "Coffee & Beverages",
      "Meeting Rooms"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 8,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 22.997557830363352,
    "longitude": 72.50263637642918,
    "sourceUrl": "https://cofynd.com/coworking/business-park-makarba-ahmedabad",
    "cofyndId": "6517cef694b30a410b2519dd",
    "locality": "Makarba",
    "id": 12
  },
  {
    "name": "Pravel Coworking",
    "badge": null,
    "rating": null,
    "area": "Bopal",
    "location": "Bopal, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/65b64f1e4f34fb8e4f273a5849c649ae4375eb85.jpg",
      "https://img.cofynd.com/images/original/3f2c4c78b2907b58ab0f7353c999cab9a29916a7.jpg",
      "https://img.cofynd.com/images/original/69b1340a8f7522ad412c063b866882d54979c520.jpg",
      "https://img.cofynd.com/images/original/339e5c134c8d3e1a8962914410b711efb8fffb8e.jpg",
      "https://img.cofynd.com/images/original/c0ca4f5171bf140b767ed0d6cfc817d9a518953e.jpg"
    ],
    "address": "Bopal, Ahmedabad",
    "landmark": "Thaltej Metro Station",
    "description": "Pravel is an extraordinary coworking space located near TRP mall, Bhopal, Ahmedabad. This space is exclusively designed for all working professionals, startups, freelancers, and more. This seems to be a perfect place to collaborate and build new connections with people from different professional backgrounds.\nIt comprises an expansive collection of setting arrangements like dedicated desks, private cabins, and more starting from ₹5000/month. Moreover, the entire workspace is equipped with modern amenities & facilities like high-speed internet, 24*7 power backup, reserved parking space, CCTV surveillance, a cafeteria, air-conditioned work areas, top-class housekeeping services, a lounge, and more. \nThis workspace is close to various locations, such as TRP mall(shopping complex), TRP mall movie theatre, Central Park, H2O cafe, 369 the cafe & restaurant, Saraswati multispecialty hospital, AUROVILLE- All about the food. The nearest railway station to this location is Ambli Road & Goraghuma, both within a 7-10 km of radius. Explore CoFynd to know more about this coworking space and reserve the best suitable space for your business at no brokerage fee.",
    "amenities": [
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "Gym",
      "Cafe",
      "Game Zone",
      "Cupboard",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.0314065,
    "longitude": 72.4709135,
    "sourceUrl": "https://cofynd.com/coworking/pravel-coworking-ahmedabad",
    "cofyndId": "63f70654381a176f650fdc8f",
    "locality": "Bopal",
    "id": 13
  },
  {
    "name": "SoBo Center",
    "badge": null,
    "rating": null,
    "area": "Bopal",
    "location": "South Bopal, Ahmedabad",
    "price": "₹3,500",
    "period": "/ month",
    "priceFormatted": "₹3,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/035fbdc6ea553718892659824f1f03c44377ffd8.webp",
      "https://img.cofynd.com/images/latest_images_2024/d493f5c71649e06953f5cd51349f7f3b6087c79b.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1f4752e9dfd580afb12fe2b7a07ed38d23de822.webp",
      "https://img.cofynd.com/images/latest_images_2024/4584546b280ee0ef559f0b1e6171220da097b42f.webp"
    ],
    "address": "South Bopal, Ahmedabad",
    "landmark": "Thaltej",
    "description": "Well-known Sobo Center South Bopal, well furnished with A C natural air window good sunlight, private washroom, easy approach to Spring Road, parking,24X7 access .restaurants tea coffee easily available in Sobo Center, users friendly property, WIFI, 24X7 power, safe and secure, silent zone, no any disturbance",
    "amenities": [
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Cafe",
      "Refrigerator",
      "Cupboard"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "11:45 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "10:45 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "11:45 PM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 5,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 3500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 15000,
        "duration": "month"
      },
      {
        "title": "Hot Desk",
        "price": 3000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0172232,
    "longitude": 72.4756136,
    "sourceUrl": "https://cofynd.com/coworking/sobo-center-south-bopal-ahmedabad",
    "cofyndId": "65a78783ba0273726c87de0e",
    "locality": "South Bopal",
    "id": 14
  },
  {
    "name": "Karma Workspaces",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Shivarth THE ACE, Ahmedabad",
    "price": "₹10,500",
    "period": "/ month",
    "priceFormatted": "₹10,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/09b1c12e3264e7641b1411bb0c564a689769c065.jpg",
      "https://img.cofynd.com/images/original/dee160c98f6f05ad899de1ff2a46e3ee39a9a6bb.jpg",
      "https://img.cofynd.com/images/original/06d4ce8cf1d0363ca946662a09af0945755a9cee.jpg",
      "https://img.cofynd.com/images/original/5d0c627a5a2ceb9db61ec3b926511062e55e85a5.jpg",
      "https://img.cofynd.com/images/original/f223923d536c59b629cd7adfce5e48ea1c8c063b.jpg"
    ],
    "address": "Shivarth THE ACE, Ahmedabad",
    "landmark": null,
    "description": "Karma Workspaces is a well-designed and fully-furnished workspace located in Ahmedabad. It provides dedicated desks, hot desks, private cabins and day passes at a competitive price. It comes along with premium amenities such as premium location, ergonomic furniture, captivating client lounge, fast-speed wifi connectivity, high-level security, power backup, beverages, air conditioning, lift, car parking area and much more. The nearest metro station to this well-constructed workspace is Thaltej Metro Station. The railway station is 25 minutes away and S.G. Highway is 1 minute away from this centre. Breathe in the aroma of fresh coffee and stay productive all day long. Hurry up and book now!",
    "amenities": [
      "Air-Conditioning",
      "Bike Parking",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 150,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 10500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 12000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1099,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2499,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0401975,
    "longitude": 72.503796,
    "sourceUrl": "https://cofynd.com/coworking/karma-workspaces",
    "cofyndId": "5f7d4ea28c4e6961990e6b18",
    "locality": "Vastrapur",
    "id": 15
  },
  {
    "name": "Paragraph",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "S.G. Highway, Ahmedabad",
    "price": "₹15,899",
    "period": "/ month",
    "priceFormatted": "₹15,899 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/3d1ddc816f331edfe3077f6fb20c50874116e49e.jpg",
      "https://img.cofynd.com/images/original/8f4c1d829b9ecc142583dabc8383a13b218f5ab6.jpg",
      "https://img.cofynd.com/images/original/530b959430659df310ad79ebe6e437a2e2a35e20.jpg",
      "https://img.cofynd.com/images/original/c95e2e17548afaa52d4cc82869c754436374e3a0.jpg",
      "https://img.cofynd.com/images/original/c6f8f7f0e4bc195211e379351adde25822ca9ac4.jpg",
      "https://img.cofynd.com/images/original/dd2ba71a5380d91dbe679701f323f5c836429f9a.jpg"
    ],
    "address": "S.G. Highway, Ahmedabad",
    "landmark": null,
    "description": "Paragraph Coworking is an iconic workspace located near Novotel hotel, Ahmadabad. It is designed with a classy interior, stylish standing desks, Ergonomic chairs, polished wooden furnishings and more. This elegant workspace offers private cabins for better privacy and focus, hot desks for good links and connection, and dedicated desks for a superior collaborating working environment.\nIt is ideal for new companies, working professionals, freelancers, corporate and large enterprises. Along with this, you also get access to high-quality meeting rooms for team or client meetups on an hourly basis. Come and experience a healthy and encouraging working environment at the Paragraph Coworking. Located in a prime location, it provides easy access to each mode of transport like cabs, auto and bus. Expand your business with us today, do not wait anymore. Book now!",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "sunday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      }
    },
    "seats": 66,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 15899,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 22000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0230532,
    "longitude": 72.5067671,
    "sourceUrl": "https://cofynd.com/coworking/paragraph",
    "cofyndId": "5f7af3eb8c4e6961990e621a",
    "locality": "SG Highway",
    "id": 16
  }
];

export const perfectWorkspaceBanner = {
  "title": "Discover your perfect workspace with Mycoworking",
  "subtitle": "Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India",
  "ctaText": "Enquire Now",
  "bgImage": "https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp"
};

export const finalAhmedabadOfficeCards = [
  {
    "name": "The Address",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹9,500",
    "period": "/ month",
    "priceFormatted": "₹9,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/02c2e6e719825db8cb398bfb4f769daa562417fa.jpg",
      "https://img.cofynd.com/images/original/94734d64f8c51dfc6c3397942f4c10947639e463.jpg",
      "https://img.cofynd.com/images/original/b7af22f1e31b084d750163c7b42ab43e929cfcb8.jpg",
      "https://img.cofynd.com/images/original/25f909043a03635dfb3de409470bbfc942be9a0f.jpg",
      "https://img.cofynd.com/images/original/6aa29484454bd0e6565a445a5b7c180581f4545b.jpg"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "The Address Coworking space is a brilliant and well-managed workspace located in the largest hub of cotton textiles, Ahmedabad. This workspace is exclusively designed with the mesmerizing business class interior, sharp wooden furnishing, comfortable sitting space and more. It offers private cabins, dedicated desks and hot desks for a superior collaborating working environment. Apart from this, the complete workspace is secured with CCTV coverage, entry allowed through access to touch cards, high-speed wifi available, etc.\nThe Address Coworking space is perfect for startups, working professionals, freelancers, corporate and large enterprises. Along with this, you also get access to high-quality meeting rooms with complete facilities for team members like printing facilities. Get ready to amplify your efficiency in a well-furnished space dedicated to proper cleaning, complete sanitized and trained staff and workers.\nMoreover, It offers smooth connectivity to well-known areas of Ahmedabad such as Gandhi Nagar Highway, S.G Road, and so on. If you are looking for a healthy, productive and growing working environment this workplace fits you. Allow us to schedule a free visit today.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      },
      "sunday": {
        "from": "12:00 AM",
        "to": "12:00 PM",
        "closed": false,
        "open24": true
      }
    },
    "seats": 209,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0032247,
    "longitude": 72.50141099999999,
    "sourceUrl": "https://cofynd.com/coworking/the-address",
    "cofyndId": "5f7b001f8c4e6961990e63da",
    "locality": "SG Highway",
    "id": 17
  },
  {
    "name": "Incuspaze The First",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad",
    "price": "₹6,600",
    "period": "/ month",
    "priceFormatted": "₹6,600 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/3b0236d071b6b5c46d7f882267487068685cf506.jpg",
      "https://img.cofynd.com/images/original/d37f0e1e7e1d3f1ca5c12077202757f929d79a86.jpg",
      "https://img.cofynd.com/images/original/d4d26308e7f728baabe723ffc0c69ffb80f0c08e.jpg",
      "https://img.cofynd.com/images/original/522549f3b84464e170be1937895e6e7d393d10ad.jpg",
      "https://img.cofynd.com/images/original/c03da30c0821f1361f1ef3382c60e5b69978de59.jpg"
    ],
    "address": "Vastrapur, Ahmedabad",
    "landmark": null,
    "description": "Located in the largest Hub of textile centres Ahmedabad, Incuspaze - The first is a vibrant Coworking space for all kinds of business. Our modern workspace is equipped with a wonderful business class interior, polished classy furnishing, comfortable chairs and desks etc. This premium and well-designed Coworking space offers furnished dedicated desks, beautiful private cabins and professional manager cabins. Apart from this, the working environment is enthusiastic and smooth to increase your productivity, growth, and efficiency.\nIncuspaze- The First is a great place for startups, entrepreneurs, freelancers and SMEs. Moreover, a wide range of amenities is available such as high-speed wifi, unlimited tea/coffee, scanner, air-conditioning, housekeeping etc. You also get tech-enabled meeting rooms for (4 seaters) and conference rooms for (16 seaters) to conduct seminars, meetings, sessions and more. Incuspaze-The first is near to all major banks, ATMs, restaurants and cafes where coworkers relax and chill after a busy day. If you are looking for a wonderful workplace then connect with us today. Book now!",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 600,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 6600,
        "duration": "month"
      }
    ],
    "brandName": "Incuspaze",
    "latitude": 23.0294221,
    "longitude": 72.5292601,
    "sourceUrl": "https://cofynd.com/coworking/incuspaze-the-first",
    "cofyndId": "61a9e5661491a66edf577ae5",
    "locality": "Vastrapur",
    "id": 18
  },
  {
    "name": "Opulence",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad, Gujarat, 380015, India",
    "price": "₹8,500",
    "period": "/ month",
    "priceFormatted": "₹8,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/eff9195c13fc54e20afb314e1b34df52024eda07.jpg",
      "https://img.cofynd.com/images/original/060a4e581aaf41822fc8edbb1419864f56525777.jpg",
      "https://img.cofynd.com/images/original/ad1642820dbd0466700b3d31e5affb2b89ab3550.jpg",
      "https://img.cofynd.com/images/original/6818d45297d83e778613a90e597d45d1b4bf9d38.jpg",
      "https://img.cofynd.com/images/original/403cf0dfdb37734ae1ba0be334eff465e6a1a8e5.jpg"
    ],
    "address": "Vastrapur, Ahmedabad, Gujarat, 380015, India",
    "landmark": null,
    "description": "",
    "amenities": [
      "Community Events",
      "Video Conferencing Capabilities",
      "Meeting Room",
      "Printer & Scanner",
      "Parking",
      "Coffee & Beverages",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "Power Backup",
      "CCTV",
      "Reception",
      "Refrigerator",
      "Cupboard",
      "Bike Parking",
      "Cafe"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 90,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 8500,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 5499,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.033863,
    "longitude": 72.585022,
    "sourceUrl": "https://cofynd.com/coworking/opulence",
    "cofyndId": "6378802ab037cc3a5c47fa2d",
    "locality": "Vastrapur",
    "id": 19
  },
  {
    "name": "Connekt",
    "badge": null,
    "rating": null,
    "area": "Ellisbridge",
    "location": "Netaji Rd, Ahmedabad",
    "price": "₹9,000",
    "period": "/ month",
    "priceFormatted": "₹9,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/28588fe2e27ccc5cf0a605b72b5c9512da66eb80.jpg",
      "https://img.cofynd.com/images/original/40997b7d948847adb47ecc717fafa0b92d1eb8b3.jpg",
      "https://img.cofynd.com/images/original/54973e6476118015ce35c7a7f17592cbc55690f9.jpg",
      "https://img.cofynd.com/images/original/1d4662321269bcde572977fbe39ea74daef221e9.jpg",
      "https://img.cofynd.com/images/original/02559002d822cd1b166d6a60d737414611b00fab.jpg",
      "https://img.cofynd.com/images/original/ed9aedb0183a78f143bf8a629403891cb8cdfaa5.jpg",
      "https://img.cofynd.com/images/original/a86896e46b82e11443dfddf325f34979a8153fb6.jpg",
      "https://img.cofynd.com/images/original/6ba715fd59fd2e0bcc45db5d5443b0436a7128f4.jpg"
    ],
    "address": "Netaji Rd, Ahmedabad",
    "landmark": null,
    "description": "Connekt is among the top coworking spaces in Ahmedabad. It is a prominently situated workspace, easily accesible by Bus, Taxi, & Metro. This is a premier type of coworking space on the 4th floor of the Achalraj Building at Netaji Road, just opposite the Mayor's Bungalow. It offers you a variety of private cabins that are ideal options for small, medium, and large size enterprises.\nIn addition, along with the workspace, it also provides you with high-speed internet, unlimited beverages, a printing & scanning facility, office supplies, a private phone booth, conference room, meeting room, event space, cafeteria, smart reception desk, mail & courier handling service, etc. This is a perfect workspace that can maximize your productivity and lift your business to the next level.\nAlternatively, the strategic location of this workspace is one of its best features. It is close to Law Garden and only a 10 to 15 minutes walk away from Gandhigram Bus & Metro Station. A top-notch infrastructure surrounds Conneckt, which is suitable for working professionals of every type. Ultimately, it is the perfect property in all aspects, so explore, compare, and book your desk now in Connekt with CoFynd.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 100,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 749,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 899,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 999,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0290152,
    "longitude": 72.5610791,
    "sourceUrl": "https://cofynd.com/coworking/connekt-ellisbridge",
    "cofyndId": "63bfd44ba4524a34aee488cc",
    "locality": "Ellisbridge",
    "id": 20
  },
  {
    "name": "NULL WorkSpace",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Science City Rd, Sola, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/b3802575091684c0cea980fcd28c80040c21c543.jpg",
      "https://img.cofynd.com/images/original/818424055da0faaadc491679994f77bd5db14480.jpg",
      "https://img.cofynd.com/images/original/89e9ca58a0232fb1dfd308ccb96a09ef667c422d.jpg",
      "https://img.cofynd.com/images/original/67ed56750c5dbf92b0325b2db3065484d1da96f4.jpg"
    ],
    "address": "Science City Rd, Sola, Ahmedabad",
    "landmark": "Thaltej Metro Station",
    "description": "Null Workspace is a premium coworking space in Ahmedabad. It is a modern and creatively designed shared office space on the outskirts of the city. This workspace is strategically situated at Science City Road near Sola Gam Cross Road Bus Stop. It is only a quick drive away from Sardar Patel Ring Road and Thaltej Metro Station. \nThis is a flawless coworking space that offers you a range of dedicated desks and meeting rooms with several top-notch amenities. It is an ideal space for startups, SMEs, MSMEs, and for every type of business and freelancer. This workspace is perfect to work with concentration and to increase your productivity. It is 24/7 operational and offers you seats at only INR 5500. Try it out and grab your desk now in Null Workspace with CoFynd.",
    "amenities": [
      "Meeting Room",
      "Coffee & Beverages",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "24x7 Security",
      "Wi-Fi",
      "Housekeeping",
      "CCTV",
      "Cafe",
      "Cupboard"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.07309,
    "longitude": 72.5109884,
    "sourceUrl": "https://cofynd.com/coworking/null-workspace",
    "cofyndId": "63eb802ee3552c2cec079263",
    "locality": "Sola",
    "id": 21
  },
  {
    "name": "Sentient",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Thaltej, Ahmedabad",
    "price": "₹8,500",
    "period": "/ month",
    "priceFormatted": "₹8,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/4ec186bec2a687e33b1c3eef26b5713fef24b1a4.jpg",
      "https://img.cofynd.com/images/original/e29221cd7e8762fd5a9b75b6d70f21fed25592ce.jpg",
      "https://img.cofynd.com/images/original/e19ad6ce79d256e871b98534af5c4e8fd74f0b0e.jpg",
      "https://img.cofynd.com/images/original/51d57322af425e23d9fb82c42e22200449fa3076.jpg"
    ],
    "address": "Thaltej, Ahmedabad",
    "landmark": "Thaltej Gam",
    "description": "Sentient Offices is one of the best coworking spaces in Ahmedabad. It's the perfect workspace with a wide variety of hot desks, dedicated desks, private cabins, managerial cabins, meeting rooms, conference areas, etc.\nThis workspace offers top facilities such as; a smart reception desk, parking, high-speed elevators, a common area, and a relaxation zone for your proper work-life balance. Sentient Offices is located at Maple Country Road, just off Sindhu Bhawan Marg, Thaltej. It is only a short walk from Shaligram Bus Stop and Thaltej Metro Station, and close to several landmarks, such as; Tre-Bistro, Mango Garden, Friends Colony, Shymphony Forest Park, & Vikram Sarabhai Palace. You can book your desk in this exclusive workspace, Sentient Offices at just INR 8,000 with CoFynd.",
    "amenities": [
      "Workshops",
      "Community Events",
      "Video Conferencing Capabilities",
      "Functional Kitchen",
      "Phone Booth/Call Area",
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Refrigerator",
      "Cupboard",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "11:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "11:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "08:00 AM",
        "to": "06:00 PM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 72,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 8500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 9000,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.045728,
    "longitude": 72.5076604,
    "sourceUrl": "https://cofynd.com/coworking/sentient-offices",
    "cofyndId": "63f75669381a176f6579e10d",
    "locality": "Thaltej",
    "id": 22
  },
  {
    "name": "SR Coworking",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Thaltej Shilaj Road, Ahmedabad",
    "price": "₹4,500",
    "period": "/ month",
    "priceFormatted": "₹4,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/f443ee7a7533396e921269633c0082fc0a1f04b3.jpg",
      "https://img.cofynd.com/images/original/bb01e08e8e33ecf34ed7a7574cd8457107c949fa.jpg",
      "https://img.cofynd.com/images/original/bac67d89fc4aa7f3425530dd7a17555b8a577167.jpg",
      "https://img.cofynd.com/images/original/043365b9b67c8f45a2e3a7b9eb171afb99e574f8.jpg",
      "https://img.cofynd.com/images/original/3baec6c9bed6a49dc9e3f8261a325a0136d9f0b0.jpg"
    ],
    "address": "Thaltej Shilaj Road, Ahmedabad",
    "landmark": null,
    "description": "SR Coworking offers Coworking office space in Thaltej Shilaj Road, Ahmedabad. Air conditioning wifi/internet comfy workstations dedicated co working fixed allocated desk onsite lockers cabins access to printer by email/Whatsapp, daily housekeeping/cleaning RO water. Option to rent privet cabin or desk. Lockers available on request.",
    "amenities": [
      "Air-Conditioning",
      "Wi-Fi",
      "Lift",
      "Housekeeping",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 10,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 4500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 13500,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.052700221015005,
    "longitude": 72.48070331095971,
    "sourceUrl": "https://cofynd.com/coworking/sr-coworking-thaltej-shilaj-road-ahmedabad",
    "cofyndId": "6416f5d5c69694731a316b06",
    "locality": "Thaltej",
    "id": 23
  },
  {
    "name": "315 Radhe Fortune",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Airport - Gandhinagar Road, Ahmedabad",
    "price": "₹10,000",
    "period": "/ month",
    "priceFormatted": "₹10,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/78203efd73b4a915872df55f804ed6926c1439b9.jpg",
      "https://img.cofynd.com/images/original/cbf5c37ac411b62448191cfc9701f91df8c82643.jpg",
      "https://img.cofynd.com/images/original/346391ade63026ba0ecc8957918da69f2c046524.jpg",
      "https://img.cofynd.com/images/original/891cebe416680e2ac920055a0215eba2f8c65cd0.jpg",
      "https://img.cofynd.com/images/original/cca5c8c9d2d41012fc7a9406b090f97d9e8b734e.jpg",
      "https://img.cofynd.com/images/original/28e6d1c3047fa16416c6f92aaeb1dc7e07ef26f6.jpg",
      "https://img.cofynd.com/images/original/88f077faa23207a23a89d15d3319b7af725972f4.jpg",
      "https://img.cofynd.com/images/original/ee7ce6ac0cde30304f786edcc24ebdc537552960.jpg",
      "https://img.cofynd.com/images/original/efe6bdf0b727a1a2eb51b074777e02eecc984f13.jpg",
      "https://img.cofynd.com/images/original/69fdad2ba55e7e60846c55ef263ee0068c121d2d.jpg",
      "https://img.cofynd.com/images/original/e7ec23c7db7d583da2f3df0694d9950eea24d536.jpg",
      "https://img.cofynd.com/images/original/9cdc64cb7f1c595986b29316d8111fa2c66a2e88.jpg",
      "https://img.cofynd.com/images/original/9b9a3bcd8074dda04edbea93483df9adacaf58fe.jpg"
    ],
    "address": "Airport - Gandhinagar Road, Ahmedabad",
    "landmark": null,
    "description": "315, Radhe Fortune is a new ready to use workspace for freelancers, small businesses and individuals located at Apollo Circle 200' Feet Ring Road, Ahmedabad. We offer a facility of 30 seats and a meeting room. We offer spacious desks, air conditioning, housekeeping services and a high-speed internet connection. There are also other facilities provided such as car/bike parking, reception desk and storage spaces. The prime location (Airport - Gandhinagar Road) of our workspace allows to get benefits of smooth connectivity with all modes of transport.",
    "amenities": [
      "Meeting Room",
      "Coffee & Beverages",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Refrigerator",
      "Cupboard",
      "Lounge",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 30,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.097990211,
    "longitude": 72.5455784,
    "sourceUrl": "https://cofynd.com/coworking/315-radhe-fortune",
    "cofyndId": "6443c4eb1dcad0098b11d901",
    "locality": "Navrangpura",
    "id": 24
  }
];

export const featuredAhmedabadOfficeCards = [
  {
    "name": "Mahendra Coworking",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Sola, Ahmedabad",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/94dc3afcb722bca4964ceda2e0848cac8ad9244f.jpg",
      "https://img.cofynd.com/images/original/89b48534c6ff2fdd0f56da0a3b2ce5f935a4dfbb.jpg",
      "https://img.cofynd.com/images/original/536ff1255da7cc91e97c4ceeccd7730b0b54e068.jpg",
      "https://img.cofynd.com/images/original/b1c044ecacb9bfcdc98a4ab77bf62ca9cc128949.jpg",
      "https://img.cofynd.com/images/original/309a9bb6ad60b76634089a6136880889a186f9d9.jpg"
    ],
    "address": "Sola, Ahmedabad",
    "landmark": null,
    "description": "A fully furnished coworking space that has a large capacity of 100+ seats and is furnished with the newest conveniences. \nMahendra Coworking in Ahmedabad is a fully furnished coworking space that has a large capacity of 100+ seats and is furnished with the newest conveniences. The careful planning of premium infrastructure will thrive innovation and productivity of your business. In addition to that, we offer a range of amenities like Car Parking, Power backup, Air conditioning, WI-FI, 24/7 security, CCTV, Video conferencing capabilities, a meeting room, printer & scanner, refrigerator, reception, and more. It is providing a wide variety of seating options. Visit the cofynd website to have a virtual tour of this space.",
    "amenities": [
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "24x7 Security",
      "Cafe",
      "CCTV",
      "Wi-Fi",
      "Reception",
      "Housekeeping"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 8,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 6000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 12000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 20000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coliving",
    "latitude": 23.07917868,
    "longitude": 72.501519855,
    "sourceUrl": "https://cofynd.com/coworking/mahendra-coworking",
    "cofyndId": "6450ddb44e19d019be1f0ee7",
    "locality": "Sola",
    "id": 25
  },
  {
    "name": "Karma Workspaces",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Bodakdev, Ahmedabad",
    "price": "₹10,000",
    "period": "/ month",
    "priceFormatted": "₹10,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/6abad55a62220e53fa814f990d30c04bf50dcba5.jpg",
      "https://img.cofynd.com/images/original/e582c120e0604238f0fc2efeb5b7868d80063476.jpg",
      "https://img.cofynd.com/images/original/f4f1f1c21f96ea071b251c3f49b9381abd511d25.jpg",
      "https://img.cofynd.com/images/original/d6bb9f75dfb5c81991719080661887d22a38bd06.jpg",
      "https://img.cofynd.com/images/original/09d322ef95d432bb4344c48b20d70458bd8dbce4.jpg",
      "https://img.cofynd.com/images/original/8fc1c3cfd01157d04e0b0a24fa843fe9317e06d5.jpg"
    ],
    "address": "Bodakdev, Ahmedabad",
    "landmark": "thaltej",
    "description": "Imagine yourself in the most comfortable office. Your work station looks dreamy. The staff is hospitable & courteous. The cleanliness, hygiene & safety is remarkable. The ambiance is maintained with eliteness. The administrative tasks of your business are taken care of. The WiFi and networking are really strong. Everything is state-of-the-art and fully automated. And, Your coffee tastes like 'Success'. Now open your eyes and say hello to Karma Workspaces.",
    "amenities": [
      "Game Zone",
      "Workshops",
      "Community Events",
      "Phone Booth/Call Area",
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "Wi-Fi",
      "CCTV",
      "Refrigerator",
      "24x7 Security",
      "Cupboard",
      "Lounge",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "07:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 300,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 11000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 40000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coliving",
    "latitude": 23.040237982819846,
    "longitude": 72.50382269343386,
    "sourceUrl": "https://cofynd.com/coworking/karma-workspaces-ahmedabad",
    "cofyndId": "646b3d766ab83d0f8e2bd683",
    "locality": "Bodakdev",
    "id": 26
  },
  {
    "name": "The Address - Your Destination for Growth",
    "badge": null,
    "rating": null,
    "area": "Satellite",
    "location": "Shyamal Cross Roads, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/81e0c219aff6e9ca61295020069d4ea45c76ba63.jpg",
      "https://img.cofynd.com/images/original/3e48002c511c0d40b332fe269260603116d471b6.jpg",
      "https://img.cofynd.com/images/original/54dec0b42c24d9cbe623b2c223874b1d9d99f67d.jpg",
      "https://img.cofynd.com/images/original/17e7f4768e02b4b9bd428f64463a70f0f9c5e1f7.jpg",
      "https://img.cofynd.com/images/original/3ecc4d3dceb545b343fdf719960624e239861bf7.jpg",
      "https://img.cofynd.com/images/original/dd25a4b80d412a19f25de08ef8bfdfb4561b4f08.jpg",
      "https://img.cofynd.com/images/original/fc78c33c11b8da08bbcdcd914bbdb41374b0ed94.jpg",
      "https://img.cofynd.com/images/original/29ae9059442658dbefc0c9eb3fe85b707b235c0c.jpg",
      "https://img.cofynd.com/images/original/bf988db74a8f9cd3cfb8b2701199d15209425b68.jpg",
      "https://img.cofynd.com/images/original/3914da4238f33ceefe0fc78a7fc2e22c592333be.jpg"
    ],
    "address": "Shyamal Cross Roads, Ahmedabad",
    "landmark": null,
    "description": "The Address is a shared working environment where individuals, freelancers, entrepreneurs, and remote workers from various backgrounds come together to work independently or collaboratively. We aim to provide a flexible and productive alternative to traditional offices or working from home. Here at The Address, you'll find a diverse community of professionals from different industries. We provide an opportunity to connect and collaborate with like-minded professionals creating an environment conducive to building relationships and exploring new business opportunities. At The Address, you are likely to experience a positive and energetic atmosphere that can enhance your work performance. We offer you the workplace where you can seek advice, brainstorm ideas, or collaborate on projects with professionals from different backgrounds, opening doors to new perspectives and learning opportunities. The Address provides a dedicated workspace outside of your home, helping you establish a healthier work-life balance.\nAre you an army of one—or one hundred—looking to share a vibrant work environment with forward-thinking professionals? Then your search ends with our coworking space solution",
    "amenities": [
      "Game Zone",
      "Workshops",
      "Community Events",
      "Video Conferencing Capabilities",
      "Phone Booth/Call Area",
      "Meeting Room",
      "Coffee & Beverages",
      "Parking",
      "Bike Parking",
      "Printer & Scanner",
      "Meeting Rooms",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Gym",
      "Cafe",
      "Refrigerator",
      "Reception",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "10:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 500,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 25000,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 45000,
        "duration": "year"
      }
    ],
    "brandName": "the address",
    "latitude": 23.015291695112957,
    "longitude": 72.53097573987985,
    "sourceUrl": "https://cofynd.com/coworking/the-address-your-destination-of-growth",
    "cofyndId": "647db319cbdb225065d05b1f",
    "locality": "Shyamal",
    "id": 27
  },
  {
    "name": "SpxCoworking",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹3,500",
    "period": "/ month",
    "priceFormatted": "₹3,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/5b21e5afee506d19458495f72ad26f20f900cfb1.jpg",
      "https://img.cofynd.com/images/original/bd39cdf0f75a06f99a18c83332603e1526dd44f2.jpg",
      "https://img.cofynd.com/images/original/2b703410f53cc9e6ccd1f8723f449b8cfd5022cf.jpg",
      "https://img.cofynd.com/images/latest_images_2024/197fe8c0cd5d7c8a4f808fd701fdf487888f6fa1.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": "Bodakdev",
    "description": "SpxCoworking offers Coworking office space in sg highway ahmedabad. At our co-working space, we prioritize affordability Our community events, workshops, and networking sessions provide ample opportunities to engage with other professionals and expand your horizons. So, why wait? Discover the best co-working place in Bodakdev, Ahmedabad, and experience a flexible, affordable, and inspiring workspace that caters to your professional needs. Contact us today to learn more about our membership options, pricing details, and how we can help you elevate your work environment to new heights.",
    "amenities": [
      "CCTV",
      "Wi-Fi",
      "Air-Conditioning",
      "Parking",
      "Bike Parking",
      "Refrigerator",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 25,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 3500,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0584914,
    "longitude": 72.5174536,
    "sourceUrl": "https://cofynd.com/coworking/spxcoworking-sg-highway-ahmedabad",
    "cofyndId": "64a8f9976dde461b2b14d7f3",
    "locality": "SG Highway",
    "id": 28
  },
  {
    "name": "Dev Co working space",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Thaltej, Ahmedabad",
    "price": "₹3,000",
    "period": "/ month",
    "priceFormatted": "₹3,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/741d89d07a1adf5504dfda6106fd58dd14182bdf.webp",
      "https://img.cofynd.com/images/latest_images_2024/f64772ed22c9214515a44df555f2f5d029218daf.webp",
      "https://img.cofynd.com/images/latest_images_2024/653e653779c210b1d4a58c5fc36ec60bbca81e3e.webp",
      "https://img.cofynd.com/images/latest_images_2024/7962260d81b506ab1d37f7d79abc5520f93498b3.webp",
      "https://img.cofynd.com/images/latest_images_2024/56c2a7b1444af754a147a6224c85a8692db84d98.webp"
    ],
    "address": "Thaltej, Ahmedabad",
    "landmark": null,
    "description": "\"Dev Coworking Space in Ahmedabad is a vibrant and collaborative environment designed specifically for developers and tech enthusiasts. It offers a dynamic workspace where like-minded professionals can come together to work, network, and collaborate on innovative projects.",
    "amenities": [
      "Phone Booth/Call Area",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Air-Conditioning",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Cafe",
      "Cupboard",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "01:00 AM",
        "to": "12:45 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "01:00 AM",
        "to": "12:45 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "01:00 AM",
        "to": "12:45 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 30,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 3000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0433755,
    "longitude": 72.5121121,
    "sourceUrl": "https://cofynd.com/coworking/dev-co-working-spae-thaltej-ahmedabad",
    "cofyndId": "64b521e3ee4bdc71473a5bc8",
    "locality": "Thaltej",
    "id": 29
  },
  {
    "name": "Luxuria Clubs & Coworks",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad",
    "price": "₹5,500",
    "period": "/ month",
    "priceFormatted": "₹5,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/16a49f0a1ad2ecc3cd3deca64845a7bb05e1f5ea.jpg",
      "https://img.cofynd.com/images/original/a722990cffe9d58765e7a7f0081677bb9b14c36f.jpg",
      "https://img.cofynd.com/images/original/ac09081f4c0ddd0b32cbd060d1fd5a6fe0b3ed6e.jpg",
      "https://img.cofynd.com/images/original/d1f304347375a7df86caf08da69d88fe3efad490.jpg",
      "https://img.cofynd.com/images/original/d6547ba4c1486d830a9ee959d03f82238099fe0d.jpg",
      "https://img.cofynd.com/images/original/a06442bc87ea4f16286afc5675a2d12049d8c610.jpg",
      "https://img.cofynd.com/images/original/d51eabadec0e587c510e931affd828201b4344f9.jpg",
      "https://img.cofynd.com/images/original/3b8c0179a7d738d1f3274618c18dbe01b25214ab.jpg"
    ],
    "address": "Vastrapur, Ahmedabad",
    "landmark": "Halmet Cricle",
    "description": "Luxuria Clubs & Coworks offers Coworking office space in Vastrapur, Ahmedabad . A vibrant co-working and serviced office space having its headquarters in Ahmedabad continuous expansion. We offer flexible work spaces, curated programming and comprehensive business solutions. Our tight-knit member community ranges from freelance consultants, growing SMEs and enterprise businesses across a variety of industries.",
    "amenities": [
      "Video Conferencing Capabilities",
      "Phone Booth/Call Area",
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Gym",
      "Refrigerator",
      "Cupboard",
      "Lounge",
      "Reception",
      "Functional Kitchen",
      "Community Events",
      "Cafe",
      "Workshops"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 160,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 5500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 17500,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 30000,
        "duration": "year"
      },
      {
        "title": "Office Space",
        "price": 25000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.040046385632238,
    "longitude": 72.52958637048792,
    "sourceUrl": "https://cofynd.com/coworking/luxuria-clubs-coworks-vastrapur-ahmedabad",
    "cofyndId": "64bd4bbe666dd74f06e41402",
    "locality": "Vastrapur",
    "id": 30
  },
  {
    "name": "MONDEAL SQUARE",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/bd509611817d44e4eb75ca03d4342330050076ff.jpg",
      "https://img.cofynd.com/images/original/029aa41a9ed36408ccfde6eac072a11473e6dbae.jpg",
      "https://img.cofynd.com/images/original/953965675cf4f766ed675f4ba34439ac99c19ccd.jpg",
      "https://img.cofynd.com/images/original/a50af88e4737ac401824617c9d3f9aeb8adfc8fb.jpg",
      "https://img.cofynd.com/images/original/29d0613c9a58af2aedc45b1bc03949b4d94aaa74.jpg",
      "https://img.cofynd.com/images/original/44538f4690d70998b645c397cea82cf91ed34d58.jpg"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "MONDEAL SQUARE offers Coworking office space in SG Highway, Ahmedabad. Flexible Workspaces: Choose from a variety of work environments, including open desks, private offices. State-of-the-Art Facilities: Enjoy high-speed internet, ergonomic furniture, and modern amenities that enhance your work experience. Our spaces are equipped with the latest technology to ensure seamless operations.",
    "amenities": [
      "Power Backup",
      "Wi-Fi",
      "Parking",
      "Meeting Room",
      "Lift",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 15,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.012451955270077,
    "longitude": 72.50331636677595,
    "sourceUrl": "https://cofynd.com/coworking/mondeal-square-sg-highway-ahmedabad",
    "cofyndId": "64c7819cafab272f618199b4",
    "locality": "SG Highway",
    "id": 31
  },
  {
    "name": "Krik System Co-Working",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Nikol, Ahmedabad",
    "price": "₹5,000",
    "period": "/ month",
    "priceFormatted": "₹5,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/f506181bb73f6a88ff89e1e768caea1efa032451.jpg",
      "https://img.cofynd.com/images/original/59dbe8e3c0b01b91ea52ffa9a77295b8d0934442.jpg",
      "https://img.cofynd.com/images/original/78a1af2d23427df7d860928c490105b04600176a.jpg",
      "https://img.cofynd.com/images/original/823364525912b5d2e0b57d6144f7b6bf34c4cfde.jpg"
    ],
    "address": "Nikol, Ahmedabad",
    "landmark": "Vastral",
    "description": "Krik System Co-Working offers Coworking office space in SP Ring Road, Odhav, Ahmedabad. Flexible Workspaces: Choose from a variety of work environments, including open desks, private offices. State-of-the-Art Facilities: Enjoy high-speed internet, ergonomic furniture, and modern amenities that enhance your work experience. Our spaces are equipped with the latest technology to ensure seamless operations.",
    "amenities": [
      "Parking",
      "Bike Parking",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 8,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0399426,
    "longitude": 72.4226461,
    "sourceUrl": "https://cofynd.com/coworking/krik-system-co-working-nikol-ahmedabad",
    "cofyndId": "64e09a0ec78e9016fc0f7431",
    "locality": "Nikol",
    "id": 32
  }
];

export const ahmedabadAreas = ahmedabadNeighborhoods;
export const ahmedabadSpaces = ahmedabadOfficeCards;
export const areas = ahmedabadNeighborhoods;
export const spaces = ahmedabadOfficeCards;

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
  totalPages: 3,
  initialPage: 1
};

// ============================================================================
// Page 2
// ============================================================================
export const pageTwoAhmedabadOfficeCards = [
  {
    "name": "URSA Workspaces",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SBR, Ahmedabad",
    "price": "₹9,500",
    "period": "/ month",
    "priceFormatted": "₹9,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/127be0efbd50ef921cc4966e20dbfc18104c6618.jpg",
      "https://img.cofynd.com/images/original/588c3f2a921e689b56c364770dd9e2db0566d79b.jpg",
      "https://img.cofynd.com/images/latest_images_2024/bd5466a24dc6f2b6f6d0ca72b916c1b3313f33eb.webp",
      "https://img.cofynd.com/images/latest_images_2024/1ed4ce6f1e1494db765e26424f39f44ac4c9e78c.webp",
      "https://img.cofynd.com/images/latest_images_2024/2ab206de6e94125ce66a6f05495fe361bccd83b4.webp",
      "https://img.cofynd.com/images/latest_images_2024/29603c121d6397d0f89ffd44688149cfd0106b59.webp",
      "https://img.cofynd.com/images/latest_images_2024/acc62b4f8bce3daf002439d8fc630fd41a7ca553.webp"
    ],
    "address": "SBR, Ahmedabad",
    "landmark": "Thaltej",
    "description": "Welcome to URSA WORKSPACES LLP Ahmedabad working centre, a ready-to-use coworking space. we offer dedicated desks, private cabins, manager cabins, meeting rooms, and conference room with an interactive whiteboard. This sophisticated and professional coworking space boasts state-of-the-art amenities such as reception, complimentary tea & coffee reliable wi-fi with automation access, parking area, cafeteria, security, lounge & games, etc. It is near banks, ATMs, gym hospitals, restaurants, and bus stations. A plethora of opportunities are waiting for you at Teal Clock House. Book now!",
    "amenities": [
      "Game Zone",
      "Meeting Room",
      "Coffee & Beverages",
      "Functional Kitchen",
      "Wellness Rooms",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Cafe",
      "Refrigerator",
      "Lounge",
      "Reception",
      "Cupboard",
      "Phone Booth/Call Area"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 172,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9500,
        "duration": "month"
      },
      {
        "title": "Hot Desk",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 40000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 48000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0411675,
    "longitude": 72.4987942,
    "sourceUrl": "https://cofynd.com/coworking/ursa-workspaces-sindhu-bhavan-road-ahmedabad",
    "cofyndId": "64e85200f6bd0b738c49019d",
    "locality": "Sindhu Bhavan Road",
    "id": 33
  },
  {
    "name": "Co-Desk",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Ashram Road, Ahmedabad",
    "price": "₹4,000",
    "period": "/ month",
    "priceFormatted": "₹4,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/fc6efcfe32e23f8b6dfe1f6e4bc4efe21dc6ebe8.jpg",
      "https://img.cofynd.com/images/original/5c40b72f639311468fa6276fc074609ed0508121.jpg",
      "https://img.cofynd.com/images/original/9f257d62c36cb6236e8f28da277ecfd4e9671cbc.jpg",
      "https://img.cofynd.com/images/original/ece1815a88e6caf4bcab1773c1f3ddf1239b36bd.jpg"
    ],
    "address": "Ashram Road, Ahmedabad",
    "landmark": "old high court / Usmanpura",
    "description": "Co-Desk offers Coworking office space in Ashram Road, Ahmedabad. Co-Desk Workplace welcomes inspirational professionals to start, nurture and grow their businesses. From Flexible Seating arrangements to cabins, Co-Desk Workplace provides a facility like Meeting Rooms, Kitchen, High-Speed Wifi and Parking facilities. It is situated in the proximity of Old High Court / Usmanpura Metro Station.",
    "amenities": [
      "Functional Kitchen",
      "Meeting Room",
      "Bike Parking",
      "Housekeeping",
      "Reception",
      "Wi-Fi",
      "24x7 Security",
      "Air-Conditioning",
      "Lift"
    ],
    "hours": {
      "monday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 40,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 4000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0446855,
    "longitude": 72.5675787,
    "sourceUrl": "https://cofynd.com/coworking/co-desk-ashram-road-ahmedabad",
    "cofyndId": "6521189ea04c8c0e888a897f",
    "locality": "Ashram Road",
    "id": 34
  },
  {
    "name": "Kolloco",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹7,500",
    "period": "/ month",
    "priceFormatted": "₹7,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/134a7312e0c0daa8e4168d7e6118e8852794ba45.webp",
      "https://img.cofynd.com/images/latest_images_2024/22cfe882cc1a057fd43ebb99940acec2fca218ed.webp",
      "https://img.cofynd.com/images/latest_images_2024/b75b1ce0ad75ee53edecbc765cfe6d4b72d2f725.webp",
      "https://img.cofynd.com/images/latest_images_2024/b77c01c22e8ddee884a9ccdc199738a637149133.webp",
      "https://img.cofynd.com/images/latest_images_2024/cfe60522f15a71f3b777116d3229ae337005fc73.webp"
    ],
    "address": "GCP Business Center, First Floor B Wing, Opp. Memnagar Fire Station, Navrangpura, Ahmedabad, Gujarat 380014",
    "landmark": null,
    "description": "A vibrant and modern coworking space located in the heart of Ahmedabad, India. It is a well-designed and well-equipped workspace that caters to the needs of entrepreneurs, freelancers, startups, and remote workers. It offers a professional workspace, modern amenities, a strong community network, and a conducive environment for productivity and growth",
    "amenities": [
      "Video Conferencing Capabilities",
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "Cafe",
      "Refrigerator",
      "CCTV",
      "Cupboard",
      "Lounge",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 35,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 6500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 8500,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.045140880701098,
    "longitude": 72.55129349325347,
    "sourceUrl": "https://cofynd.com/coworking/kolloco-navrangpura-ahmedabad",
    "cofyndId": "658571cea64faeebaf35d32d",
    "locality": "Navrangpura",
    "id": 35
  },
  {
    "name": "Ganesh Glory 11",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Gota, Ahmedabad",
    "price": "₹5,400",
    "period": "/ month",
    "priceFormatted": "₹5,400 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c5f433504e0cc1f8701b97f3341a76880571f020.webp",
      "https://img.cofynd.com/images/latest_images_2024/c80ae1d94ac64a286abe47066bc37bb3cf47f848.webp",
      "https://img.cofynd.com/images/latest_images_2024/82548cd2efc8accda8549952d903ac267ee80203.webp",
      "https://img.cofynd.com/images/latest_images_2024/7824fd83480c48cf91b6d7232b732558dcc594f8.webp",
      "https://img.cofynd.com/images/latest_images_2024/431798299dcdd28341b48f52f0b3053ab3c8540c.webp"
    ],
    "address": "Gota, Ahemdabad",
    "landmark": "Near By Bus Stop",
    "description": "\"Explore a collaborative work environment in our vibrant coworking space! Rent out own office space, complete with essential amenities such as electricity, water, high-speed WiFi, a fully-equipped pantry, and access to a conference room for meetings. Enjoy the convenience of shared facilities like a fridge and microwave, while our friendly receptionist ensures a warm welcome for your clients. Elevate your work experience in a professional setting tailored to meet your business needs.\"",
    "amenities": [
      "Video Conferencing Capabilities",
      "Functional Kitchen",
      "Meeting Room",
      "Coffee & Beverages",
      "Printer & Scanner",
      "Parking",
      "Air-Conditioning",
      "Power Backup",
      "Bike Parking",
      "Lift",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Refrigerator",
      "Reception",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:30 AM",
        "to": "06:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:30 AM",
        "to": "06:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "10:00 AM",
        "to": "06:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5400,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.11426092479394,
    "longitude": 72.54033493980245,
    "sourceUrl": "https://cofynd.com/coworking/ganesh-glory-gota-ahemdabad",
    "cofyndId": "659f02cde4ba0019b562c804",
    "locality": "Gota",
    "id": 36
  },
  {
    "name": "BSQUARE FLEXI OFFICES",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "University Area, Ahmedabad",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/706fd741cb2038220444e056a64eee06b4bf81c6.webp",
      "https://img.cofynd.com/images/latest_images_2024/20ef84e3c181ce9ad6028196a589203156031789.webp",
      "https://img.cofynd.com/images/latest_images_2024/de521a224bfb7a1a51cac100d88dd7980d67d77b.webp",
      "https://img.cofynd.com/images/latest_images_2024/11d16a76f92d95bf822bed8c0429457247754bc8.webp",
      "https://img.cofynd.com/images/latest_images_2024/e1c59b442d2fdf80a36decd6c89752ab02c1dfcc.webp",
      "https://img.cofynd.com/images/latest_images_2024/b64e228202b03e7fbba303433ce3c3d34124635d.webp",
      "https://img.cofynd.com/images/latest_images_2024/44315a2d7e6b5ed5e3d2c15026117a54ae7ce000.webp"
    ],
    "address": "University Area, Ahmedabad",
    "landmark": "NEHRUNAGAR",
    "description": "BSQUARE is a world-class coworking space in Ahmedabad, Gujarat that provides state-of-the-art coworking space that consist of flexible offices, managed workspaces, coworking space, office spaces and workstations for entrepreneurs, MNCs, startups,big, medium and small companies, freelancers and collaborators. We offer cost-effective workspace solutions on hourly, daily, weekly or contractual basis which fully facilitated with all the necessary amenities, luxury and more.",
    "amenities": [
      "Game Zone",
      "Community Events",
      "Video Conferencing Capabilities",
      "Meeting Room",
      "Coffee & Beverages",
      "Meeting Rooms",
      "Printer & Scanner",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Housekeeping",
      "24x7 Security",
      "Wi-Fi",
      "CCTV",
      "Cafe",
      "Refrigerator",
      "Cupboard",
      "Reception",
      "Lounge",
      "Phone Booth/Call Area"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 100,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 12000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 12000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1999,
        "duration": "month"
      }
    ],
    "brandName": "bsquare",
    "latitude": 23.028514014313767,
    "longitude": 72.54370281390543,
    "sourceUrl": "https://cofynd.com/coworking/bsquare-flexi-offices-university-area-ahmedabad",
    "cofyndId": "65af6fe8116832b212ded602",
    "locality": "Iim",
    "id": 37
  },
  {
    "name": "BSQUARE CO-WORKS",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c07e38e9b6f9789daaf4450fd002a0bf575863e1.webp",
      "https://img.cofynd.com/images/latest_images_2024/28b31a664d400a626366e1fc1390fe0336f051bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/81fbe5b0fa7349ca04bf809c66de2b12cd760317.webp",
      "https://img.cofynd.com/images/latest_images_2024/a40aed03b92ea13d5a1baebde825fe056273fc2b.webp",
      "https://img.cofynd.com/images/latest_images_2024/8668259ac8c1020239f252142bd963a959d5ae95.webp",
      "https://img.cofynd.com/images/latest_images_2024/6b5d69c8330f857990cf7618cbd8c2b9fce497c2.webp",
      "https://img.cofynd.com/images/latest_images_2024/d4a2b84166cdc42d249fd191a84f8d10b6b58c06.webp",
      "https://img.cofynd.com/images/latest_images_2024/d7af5b6c205fe1fdeb997826942a59852dcec88d.webp"
    ],
    "address": "BSquare Co-Works corporate House SURFACES PLUS, Nr Avalon Hotel, Mango Garden city Road Off Sindhu bhavan Road, Thaltej, Ahmedabad-380054",
    "landmark": "Thaltej",
    "description": "Welcome to Bsquare Ahmedabad Co-working Centre, a ready-to-use coworking space. It offers flexible desks, dedicated desks, private cabins, manager cabins, meeting rooms, event rooms, training rooms, and conference rooms for various business purposes. This sophisticated and professional coworking space boasts state-of-the-art amenities such as reception, tea & coffee, networking events, parking area, cafeteria, daycare & fitness, security, lounge & games, etc. It is located near various banks, ATMs, hospitals, and bus stations. A plethora of opportunities are waiting for you at Teal Clock House. Book now!",
    "amenities": [
      "Game Zone",
      "Workshops",
      "Community Events",
      "Wellness Rooms",
      "Video Conferencing Capabilities",
      "Meeting Room",
      "Phone Booth/Call Area",
      "Meeting Rooms",
      "Power Backup",
      "24x7 Security",
      "Cupboard",
      "Wi-Fi",
      "Air-Conditioning",
      "Printer & Scanner",
      "Parking",
      "Coffee & Beverages",
      "Functional Kitchen",
      "Bike Parking",
      "Housekeeping",
      "Lift",
      "Gym",
      "Lounge",
      "CCTV",
      "Cafe",
      "Refrigerator",
      "Reception"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 400,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 12000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 15000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1999,
        "duration": "month"
      }
    ],
    "brandName": "bsquare",
    "latitude": 23.03252091511003,
    "longitude": 72.54492938261856,
    "sourceUrl": "https://cofynd.com/coworking/bsquare-co-works-sindhu-bhavan-road-ahemdabad",
    "cofyndId": "65af8f20116832b212ecdd06",
    "locality": "SG Highway",
    "id": 38
  },
  {
    "name": "Windson Organic",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Science City, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/5ee6fe69f7dcca98f71d631033956d8e24ac8048.webp",
      "https://img.cofynd.com/images/latest_images_2024/b71267a1d0e237c06aff435cb3f28967c802ead9.webp",
      "https://img.cofynd.com/images/latest_images_2024/6ab0cb18993e703ec46b4f70cdf39d483e0081eb.webp",
      "https://img.cofynd.com/images/latest_images_2024/eaefc3f1916f001146d8e146c8e47d1efcb10437.webp"
    ],
    "address": "Science City, Ahmedabad",
    "landmark": null,
    "description": "Unlock your productivity in our professional coworking space tailored for IT and accounting professionals. Limited seats available, offering a dedicated desk in a collaborative environment. Elevate your work experience with modern amenities and network with like-minded individuals. Secure your spot now for a dynamic workspace designed for success. Don't miss out the oppurtunity",
    "amenities": [
      "Printer & Scanner",
      "Air-Conditioning",
      "Lift",
      "Wi-Fi",
      "CCTV",
      "Refrigerator",
      "Meeting Room"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": " ",
        "to": " ",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.075360483263726,
    "longitude": 72.51054718354683,
    "sourceUrl": "https://cofynd.com/coworking/windson-organic-pvt-ltd-science-city-ahemdabad",
    "cofyndId": "65bcd390c1bab6b1d2b4a819",
    "locality": "Science City",
    "id": 39
  },
  {
    "name": "RB Coworking Space",
    "badge": null,
    "rating": null,
    "area": "Satellite",
    "location": "Jodhpur Village, Ahmedabad",
    "price": "₹4,500",
    "period": "/ month",
    "priceFormatted": "₹4,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/183182f1b50165068b8302e86a1f22142f2de9ff.webp",
      "https://img.cofynd.com/images/latest_images_2024/440523fa985b4112224ccc4da4e8526da9a3adcf.webp",
      "https://img.cofynd.com/images/latest_images_2024/520b39bcb7585d2c993712d7d455e7bd60913304.webp",
      "https://img.cofynd.com/images/latest_images_2024/b6fc073b3244d36b42d11d0125e3b10454014bf6.webp"
    ],
    "address": "Jodhpur Village, Ahmedabad",
    "landmark": null,
    "description": "Best coworking space in Ahmedabad with a range of amenities and flexibility to book from 1 day to 12 months. Space is available at the premium location with good connectivity. Newly painted, designed, and luxurious space. We are welcoming corporates and startup enthusiasts to come & work together at RB Coworking.",
    "amenities": [
      "Community Events",
      "Parking",
      "Bike Parking",
      "Power Backup",
      "Lift",
      "Air-Conditioning",
      "24x7 Security",
      "CCTV",
      "Wi-Fi"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 16,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 4500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 12000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0120125,
    "longitude": 72.5231931,
    "sourceUrl": "https://cofynd.com/coworking/rb-coworking-space-jodhpur-village-ahmedabad",
    "cofyndId": "65c20f91517056128f955a7a",
    "locality": "Jodhpur Gam",
    "id": 40
  }
];

export const pageTwoMoreAhmedabadOfficeCards = [
  {
    "name": "BSQUARE  BUSINESS CENTER",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "S.G.Highway, Ahmedabad",
    "price": "₹8,500",
    "period": "/ month",
    "priceFormatted": "₹8,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/11fc369ea49eb448ca67bf8aa166453bfc0def8c.webp",
      "https://img.cofynd.com/images/latest_images_2024/aa55f2ca557ecfa45eb9a6cbca3d73c71e352fa2.webp",
      "https://img.cofynd.com/images/latest_images_2024/3c6de64bebd7f6e6d7015b111cb0a37502faaacb.webp",
      "https://img.cofynd.com/images/latest_images_2024/cda736f8d96bcc511c7c9d64441613a5d81ad6b1.webp",
      "https://img.cofynd.com/images/latest_images_2024/88bb63ff5b3990051db44e707adea3ecb9869807.webp",
      "https://img.cofynd.com/images/latest_images_2024/5af3f4e51ca5bf381b3dfbff62b189d1dae95ca6.webp",
      "https://img.cofynd.com/images/latest_images_2024/0100eb4925f82714820c0128afc53e81020af418.webp"
    ],
    "address": "S.G.Highway, Ahmedabad",
    "landmark": "THALTEJ",
    "description": "BSQUARE is a world-class coworking space in Ahmedabad, Gujarat that provides state-of-the-art coworking space that consist of flexible offices, managed workspaces, coworking space, office spaces and workstations for entrepreneurs, MNCs, startups,big, medium and small companies, freelancers and collaborators.\nIt is the perfect hub for those who want to leave a mark in different industries with their entrepreneurial skills and inspire the world with their work. Our coworking spaces are located in the heart of Ahmedabad and cater to the hard-working entrepreneurial lot of the city.",
    "amenities": [
      "Game Zone",
      "Video Conferencing Capabilities",
      "Workshops",
      "Phone Booth/Call Area",
      "Meeting Rooms",
      "Power Backup",
      "24x7 Security",
      "Cupboard",
      "Lounge",
      "Wi-Fi",
      "Air-Conditioning",
      "Printer & Scanner",
      "Meeting Room",
      "Coffee & Beverages",
      "Functional Kitchen",
      "Parking",
      "Bike Parking",
      "Housekeeping",
      "Gym",
      "CCTV",
      "Lift",
      "Cafe",
      "Refrigerator",
      "Reception",
      "Community Events"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 250,
    "plans": [
      {
        "title": "Office Space",
        "price": 16000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 8500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 13000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1999,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1999,
        "duration": "month"
      }
    ],
    "brandName": "bsquare",
    "latitude": 23.034887687502316,
    "longitude": 72.5028914764001,
    "sourceUrl": "https://cofynd.com/coworking/bsquare-business-center-sg-highway-ahemdabad",
    "cofyndId": "65c9ccc73075b87d9ec37b9a",
    "locality": "SG Highway",
    "id": 41
  },
  {
    "name": "IIMA Ventures",
    "badge": null,
    "rating": null,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/9dece6c3f143efadb59179c8eb4491cd5b95a546.webp",
      "https://img.cofynd.com/images/latest_images_2024/158d324dbab2b87c8001d649e4a494cd112a5111.webp",
      "https://img.cofynd.com/images/latest_images_2024/68c87a7e87fe12adbcb6bcdfed981581785180d7.webp",
      "https://img.cofynd.com/images/latest_images_2024/bb0f555688e8a90c5c42274dfeb50935c18386c5.webp",
      "https://img.cofynd.com/images/latest_images_2024/12a3bd8d9a83385e25c28f00d8fbd3cb3ffdddc5.webp"
    ],
    "address": "Vastrapur, Ahmedabad",
    "landmark": null,
    "description": "We offer various facilities to startups and supporting communities as a one-stop solution. This includes holding meetings, hosting conferences, organizing networking events, brainstorming sessions, and more. We back fearless entrepreneurs building disruptive solutions with everything they need on their journey to success, including community of like-minded individuals and state-of-the-art infrastructure.",
    "amenities": [
      "Parking",
      "Power Backup",
      "Air-Conditioning",
      "Lift",
      "Wi-Fi",
      "24x7 Security",
      "Housekeeping",
      "Cafe",
      "Refrigerator",
      "CCTV",
      "Cupboard",
      "Lounge",
      "Reception",
      "Printer & Scanner",
      "Meeting Rooms",
      "Coffee & Beverages",
      "Meeting Room",
      "Phone Booth/Call Area",
      "Video Conferencing Capabilities",
      "Community Events",
      "Workshops"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 100,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 8000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.034628585593943,
    "longitude": 72.53288898369401,
    "sourceUrl": "https://cofynd.com/coworking/iima-ventures-vastrapur-ahmedabad",
    "cofyndId": "65ddc4386685b28cbbba1114",
    "locality": "Vastrapur",
    "id": 42
  },
  {
    "name": "SOD",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ef5477476df1962709424f72a09cf02100ba015d.webp",
      "https://img.cofynd.com/images/latest_images_2024/7a9a377cfefef19801c9652f2cd1a32938a4be1f.webp",
      "https://img.cofynd.com/images/latest_images_2024/7b68107ffc272248cc06fdc41c598905fcc4a9ea.webp",
      "https://img.cofynd.com/images/latest_images_2024/998c2d3818a8777072aab204df6972d77a84d275.webp",
      "https://img.cofynd.com/images/latest_images_2024/c784b9a208de606f2c51bf017a606ae14c947dfc.webp",
      "https://img.cofynd.com/images/latest_images_2024/c2db429be6b7c374f0f61b32cdf22d79ea6fd1ad.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": "THALTEJ",
    "description": "We've got a great office space available for rent! It's in a fantastic spot right by SG Highway, near Palladium Mall. You can hop off the metro and be there in just 5 minutes. The space has everything you need: a cozy cabin with a table and three chairs, a water dispenser to keep you hydrated, and some handy storage cupboards. Plus, it's on the second floor with a nice view overlooking SG Highway.",
    "amenities": [
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 2,
    "plans": [
      {
        "title": "Private Cabin",
        "price": 7000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0584914,
    "longitude": 72.5174536,
    "sourceUrl": "https://cofynd.com/coworking/sod-sg-highway-ahmedabad",
    "cofyndId": "65f57ad05eeb421385bcecb3",
    "locality": "SG Highway",
    "id": 43
  },
  {
    "name": "Incuspaze - The Link",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a4c7e17e3b48079233986ae1b26525e4eb42b8df.webp",
      "https://img.cofynd.com/images/latest_images_2024/92c001ea1b013ec31b3ffa29ad81dd8ee850e507.webp",
      "https://img.cofynd.com/images/latest_images_2024/b4093190c8088f2f6b4fe6bf0c11fecc9a7c4ca3.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a0380a4c717b5e4cc4113fa8400016f044534ef.webp",
      "https://img.cofynd.com/images/latest_images_2024/a6f78c03496f7c5a58e2e338c2e1cfc8b9d85f81.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": "NA",
    "description": "Incuspaze - The Link is a big office space that's perfect for businesses that want flexibility and innovation. They have different types of offices you can choose from and really nice facilities. It's not just about working, it's about being part of a community where you can meet other professionals and work together. It's a great place to make your work experience better.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "Game Zone",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Lift",
      "Lounge",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 276,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 18000,
        "duration": "year"
      },
      {
        "title": "Office Space",
        "price": 7500,
        "duration": "month"
      }
    ],
    "brandName": "Incuspaze",
    "latitude": 23.0426377,
    "longitude": 72.5487903,
    "sourceUrl": "https://cofynd.com/coworking/incuspaze-the-link-navrangpura-ahmedabad",
    "cofyndId": "66126b125eeb421385835ae9",
    "locality": "Navrangpura",
    "id": 44
  },
  {
    "name": "Incuspaze Coworking - Shilp Zaveri",
    "badge": null,
    "rating": null,
    "area": "Satellite",
    "location": "Shilp Zaveri, Ahmedabad",
    "price": "₹7,500",
    "period": "/ month",
    "priceFormatted": "₹7,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/dbb4a0bdfcad29edcaa1776e2409f9180b39a352.webp",
      "https://img.cofynd.com/images/latest_images_2024/71fc23efbd1c9d95ca665b40641456c031506f84.webp",
      "https://img.cofynd.com/images/latest_images_2024/2e4c0cec935e5847650e34a19489f7639e626314.webp",
      "https://img.cofynd.com/images/latest_images_2024/bc01a382112452ae9b5b29a6be64329cfddb2866.webp",
      "https://img.cofynd.com/images/latest_images_2024/dad10c00ef61925811bd6526afdc991a89e5f62a.webp",
      "https://img.cofynd.com/images/latest_images_2024/8c49c916d463a0b0e99dba9681012d2d3bd11b89.webp"
    ],
    "address": "Shilp Zaveri, Ahmedabad",
    "landmark": "Shyamal Cross",
    "description": "Welcome to our expansive managed office destination, tailored for enterprises seeking innovation and flexibility. From customizable office suites to premium amenities, we offer the scale and sophistication your company deserves. Join our vibrant community of professionals and unlock new opportunities for growth and collaboration. Elevate your workspace experience with us today.",
    "amenities": [
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "Game Zone",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 881,
    "plans": [
      {
        "title": "Office Space",
        "price": 7500,
        "duration": "month"
      }
    ],
    "brandName": "Incuspaze",
    "latitude": 23.01529180804676,
    "longitude": 72.5309922998388,
    "sourceUrl": "https://cofynd.com/coworking/incuspaze-shilp-zaveri-ahmedabad",
    "cofyndId": "6613d6a65eeb421385de69c9",
    "locality": "Shilp Zaveri",
    "id": 45
  },
  {
    "name": "Incuspaze - Krish Cubicals",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Sindhu Bhavan Marg, Ahmedabad",
    "price": "₹7,500",
    "period": "/ month",
    "priceFormatted": "₹7,500 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/4290533c8106ecd5ce77ae223698abf292cd7e8e.webp",
      "https://img.cofynd.com/images/latest_images_2024/a1e840221b92d3feb31c115fdf1a0bbfc63b05bb.webp",
      "https://img.cofynd.com/images/latest_images_2024/04348a7fce2753dd20d78f0d8348ea4665e82361.webp",
      "https://img.cofynd.com/images/latest_images_2024/d520d33cc0bcbe3e042bb82e2b1c8662bfc92014.webp",
      "https://img.cofynd.com/images/latest_images_2024/23ac29c179ff738a3f0cad764c0a0f6e45c9d200.webp",
      "https://img.cofynd.com/images/latest_images_2024/6ac0c1ffa30b6e8045341699c0004a1f4f6221dd.webp"
    ],
    "address": "Sindhu Bhavan Marg, Ahmedabad",
    "landmark": "Sindhu Bhavan",
    "description": "Welcome to Incuspaze - Krish Cubicals, where we offer a comprehensive office solution ideal for businesses looking for innovation and flexibility. Our office suites are fully customizable, and we provide premium amenities to ensure your company operates at its best. Join our lively community of professionals to discover new avenues for growth and collaboration. Elevate your workspace experience with us today!",
    "amenities": [
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "08:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 750,
    "plans": [
      {
        "title": "Office Space",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 7500,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 7500,
        "duration": "month"
      }
    ],
    "brandName": "Incuspaze",
    "latitude": 23.0489289,
    "longitude": 72.5087729,
    "sourceUrl": "https://cofynd.com/coworking/incuspaze-krish-cubicals-sindhu-bhavan-road-ahmedabad",
    "cofyndId": "66167a705eeb4213858ed137",
    "locality": "Sindhu Bhavan Road",
    "id": 46
  },
  {
    "name": "Crazy Plant Lady Coworking",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Naranpura, Ahmedabad",
    "price": "₹3,400",
    "period": "/ month",
    "priceFormatted": "₹3,400 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ad1ea6eff445699263efbdaff414eebb38183caa.webp",
      "https://img.cofynd.com/images/latest_images_2024/acb93829984a8ac5ed786149769d9d3c7fc9140b.webp",
      "https://img.cofynd.com/images/latest_images_2024/eee60e96da06352b605b9fac663b9b448494aca5.webp",
      "https://img.cofynd.com/images/latest_images_2024/85bf9e2e76782724794d9a31b0aab32e8aa9afc8.webp",
      "https://img.cofynd.com/images/latest_images_2024/ce8d058652dd35b3251118e0656bf5c765bf3c68.webp",
      "https://img.cofynd.com/images/latest_images_2024/d7706b4e037904039a6f771756358d3b9765ce69.webp",
      "https://img.cofynd.com/images/latest_images_2024/7bd398f6c9984566fc526b00719b346e836e57c2.webp"
    ],
    "address": "Naranpura, Ahmedabad",
    "landmark": null,
    "description": "This is an organic, minimalist co-working space set inside an old Ahmedabad bungalow of two floors and terrace. The co-working space is divided into 6 seats with dedicated sockets for each. Spaces are dedicated to the cafe operations and hence good food is always available. It is a calm atmosphere.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV"
    ],
    "hours": {
      "monday": {
        "from": "12:00 PM",
        "to": "11:30 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "12:00 PM",
        "to": "03:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 3400,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.06739750533545,
    "longitude": 72.56164130713366,
    "sourceUrl": "https://cofynd.com/coworking/crazy-plant-lady-co-working-space-naranpura-ahmedabad",
    "cofyndId": "6638f4b49347033da2bb382b",
    "locality": "Naranpura",
    "id": 47
  },
  {
    "name": "Co working at Shilp Corporate Park",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6ae8af8073d2fd07d8b17b3a20c0c0b1949ea3d3.webp",
      "https://img.cofynd.com/images/latest_images_2024/4121b3052f0fbac3770e0ddd138d2e29e2fded14.webp",
      "https://img.cofynd.com/images/latest_images_2024/8cfe6412049c1b3f4848310170851b6948ebfb0b.webp",
      "https://img.cofynd.com/images/latest_images_2024/96430710c17a2dc171398757bc0e117751790fc0.webp",
      "https://img.cofynd.com/images/latest_images_2024/b3c1aa01a5c765831fd40216cbe7e9905ab621bc.webp",
      "https://img.cofynd.com/images/latest_images_2024/745e1824337c53a436061ddff6df23f58044f455.webp",
      "https://img.cofynd.com/images/latest_images_2024/beba0289993266dca6a2e9592d1d2d7baa795ac6.webp",
      "https://img.cofynd.com/images/latest_images_2024/33bfce8278f04d5b610fef893a4bab753bc36419.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": "Thaltej Metro station",
    "description": "The space is exclusively designed for counseling business or anything related to customer support. There is a dedicated cabin and 3 seats for work. The space is fully furnished with lounge area, reception, functional kitchen, common washroom. Fully air conditioned. Premium area of Ahmedabad with excellent view from the office.",
    "amenities": [
      "Printer & Scanner",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Video Conferencing Capabilities",
      "Lift"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 4,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 6000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 15000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0338739,
    "longitude": 72.504656,
    "sourceUrl": "https://cofynd.com/coworking/co-working-at-shilp-corporate-park-sg-highway-ahmedabad",
    "cofyndId": "6640c26b0c3fd2f8ee2ab78c",
    "locality": "SG Highway",
    "id": 48
  }
];

export const pageTwoFinalAhmedabadOfficeCards = [
  {
    "name": "Titanium One",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d9834f257dbd563daff81aa2d9463179907d0f69.webp",
      "https://img.cofynd.com/images/latest_images_2024/9051dd7858034307ab733d194b142f6b36924c4f.webp",
      "https://img.cofynd.com/images/latest_images_2024/c2c072b1a8d24cb8be1a7dfca9a541995458c1d8.webp",
      "https://img.cofynd.com/images/latest_images_2024/7b36ee97a0af6244ae4cd698c81987b0a9db940e.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "A proper corporate co-working space located at one of the most premium places in Ahmedabad with a scenic view as a backdrop. We offer a smooth working atmosphere with an amazing set of people around to work with. We are pretty much flexible in everything. Looking forward to working with independent professionals and like minded people.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Power Backup",
      "Wellness Rooms",
      "Coffee & Beverages",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Gym",
      "Reception",
      "Meeting Room",
      "Functional Kitchen",
      "Video Conferencing Capabilities",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "10:30 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "10:30 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 4,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 8000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0371407,
    "longitude": 72.5104074,
    "sourceUrl": "https://cofynd.com/coworking/titanium-one-sg-higway-ahmedabad",
    "cofyndId": "6647424c0c3fd2f8eea6fb14",
    "locality": "SG Highway",
    "id": 49
  },
  {
    "name": "GANESH GLORY 11",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹18,000",
    "period": "/ month",
    "priceFormatted": "₹18,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/10301f5f3a262e39aaf0e13a23ddebe23b636d40.webp",
      "https://img.cofynd.com/images/latest_images_2024/0427f311aa8dce6bdf8734751e057c1d2bd1efcb.webp",
      "https://img.cofynd.com/images/latest_images_2024/584e13b4b189b29823f53924781fae1da54c424a.webp",
      "https://img.cofynd.com/images/latest_images_2024/903c4100e9837043b1a6ee506c6d6784af8c5f85.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "Our workspace features 9 workstations and a special cabin for the boss. You can start working here without spending any money upfront - it's that easy! Plus, it's cost-effective, so it won't strain your budget. You can change the size of your space whenever you need to - whether you're growing or scaling down. You'll also get to meet other people and businesses here, which could lead to new opportunities for you. It's perfect for small to medium-sized teams who enjoy working together. Come join us and see your business thrive in a space designed just for you!",
    "amenities": [
      "Housekeeping",
      "Wi-Fi",
      "24x7 Security",
      "Air-Conditioning",
      "Functional Kitchen",
      "Lift"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 9,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 5000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 18000,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.1142521,
    "longitude": 72.540331,
    "sourceUrl": "https://cofynd.com/coworking/ganesh-glory-11-sg-highway-ahmedabad",
    "cofyndId": "664ae7760127b15624788685",
    "locality": "SG Highway",
    "id": 50
  },
  {
    "name": "Sspacia - Mercado",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "C.G Road Ahmedabad",
    "price": "₹8,000",
    "period": "/ month",
    "priceFormatted": "₹8,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/362875e7a31318eb3cd06ee8b72e59da53ba1dc0.webp",
      "https://img.cofynd.com/images/latest_images_2024/eb0eb1694a49b3bd1da3deee58f64ef4d371b4a1.webp",
      "https://img.cofynd.com/images/latest_images_2024/366564c7c5c5d9ce1de9d3a338751cc8c25ad77d.webp",
      "https://img.cofynd.com/images/latest_images_2024/753c46915b6f2405849af9beb72643c979481bd9.webp",
      "https://img.cofynd.com/images/latest_images_2024/62c0d046d86e639b488a029697e0666f8cb5b336.webp",
      "https://img.cofynd.com/images/latest_images_2024/334739e875621d6b211a33da61cb7c96f471bd82.webp",
      "https://img.cofynd.com/images/latest_images_2024/cbbc19f37245b347a237db121b5cb552ff8f92fd.webp",
      "https://img.cofynd.com/images/latest_images_2024/e501c0072e042d52fd9236b8efa8423ebf18190f.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ab386924735cd0d03643d25c374caf65b7a0ea7.webp",
      "https://img.cofynd.com/images/latest_images_2024/e19bac705b47a0250b44120084a1571a58e17a9e.webp",
      "https://img.cofynd.com/images/latest_images_2024/0a14fb793d06586085bdb063a0ffe9f6d3e5d839.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab64e794bfb9f733ec7ecb2af2b0fb9249fb6468.webp"
    ],
    "address": "C.G Road Ahmedabad",
    "landmark": "Gandhigram",
    "description": "Sspacia Mercado Coworking Space in Ahmedabad offers comfortable furniture and various workspace options like desks, cabins, meeting rooms, and virtual offices. You can rent for a day, a week, or a month without any big deposits. Our space is lively and vibrant, creating a productive atmosphere. Whether you're freelancing, starting a business, or running a startup, we make it easy to get started hassle-free.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Functional Kitchen",
      "Video Conferencing Capabilities",
      "Workshops",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 200,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 17000,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 24000,
        "duration": "year"
      },
      {
        "title": "Office Space",
        "price": 26000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1249,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1419,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1589,
        "duration": "month"
      }
    ],
    "brandName": "sspacia",
    "latitude": 23.02824838853248,
    "longitude": 72.55781630859602,
    "sourceUrl": "https://cofynd.com/coworking/sspacia-mercado-cg-road-ahmedabad",
    "cofyndId": "6655c97625a76984edc1ff1f",
    "locality": "Cg Road",
    "id": 51
  },
  {
    "name": "SSPACIA’s Premier House",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹9,499",
    "period": "/ month",
    "priceFormatted": "₹9,499 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b1163bad173d50b239d097f61c2eabaf8dce5d06.webp",
      "https://img.cofynd.com/images/latest_images_2024/79f8ca6264ef5ec0a115e6b910ee7eff236fb4d2.webp",
      "https://img.cofynd.com/images/latest_images_2024/9989a81801efeaa7b77465d44c336be35bed278a.webp",
      "https://img.cofynd.com/images/latest_images_2024/2a90144d71627ec632eae3e3aebdd9f469695113.webp",
      "https://img.cofynd.com/images/latest_images_2024/5d2c7b38f3bc6a80d155de733200de4c88ff737c.webp",
      "https://img.cofynd.com/images/latest_images_2024/5a5fde5afbd3b21fafee864e901de4beb7411def.webp",
      "https://img.cofynd.com/images/latest_images_2024/9a7de0feb348424cf1b80bc31a8cc8bc99ba5049.webp",
      "https://img.cofynd.com/images/latest_images_2024/874a98faf46f8c0414bc7059c2d682f0e053d8e4.webp",
      "https://img.cofynd.com/images/latest_images_2024/3e926512d336b80bad3e97aeb928e7b5d0ebb55f.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": "Thaltej Metro Station",
    "description": "Sspacia Premier House Coworking Space in Ahmedabad has comfy furniture and many options for where you can work - like flexi desks, fixed desks, cabins, meeting rooms, and virtual offices. You can rent a space for just a day, a week, or a month without paying big deposits. The atmosphere is lively and helps you get your work done. It's perfect for freelancers, entrepreneurs, and startups who want a hassle-free workplace.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Coffee & Beverages",
      "Power Backup",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Functional Kitchen",
      "Workshops",
      "Video Conferencing Capabilities",
      "Lounge",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 300,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9499,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 17000,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 24000,
        "duration": "year"
      },
      {
        "title": "Office Space",
        "price": 26000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1249,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1419,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1589,
        "duration": "month"
      }
    ],
    "brandName": "sspacia",
    "latitude": 23.04492056226675,
    "longitude": 72.51567542208909,
    "sourceUrl": "https://cofynd.com/coworking/sspacia-premier-house-sg-highway-ahmedabad",
    "cofyndId": "6655cefd25a76984edc6ed88",
    "locality": "SG Highway",
    "id": 52
  },
  {
    "name": "Sspacia",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹7,000",
    "period": "/ month",
    "priceFormatted": "₹7,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/619ed19ead31136d18f9dd2a83ee7ad3fbf0e428.webp",
      "https://img.cofynd.com/images/latest_images_2024/ab0ae39d8f83efa4b6f69eb614eef2d6b6005387.webp",
      "https://img.cofynd.com/images/latest_images_2024/4e7f63f9f2b8cf476706fa87aebb336029d2e3e3.webp",
      "https://img.cofynd.com/images/latest_images_2024/59e94b71ee11606eecb678987b5104a8a4ed1789.webp",
      "https://img.cofynd.com/images/latest_images_2024/df87c4f9d9fbc9ad9811189b6f643d316bdee953.webp",
      "https://img.cofynd.com/images/latest_images_2024/3ccf5cee5aabce0991eb7c3c2d19eb9e8a373e32.webp",
      "https://img.cofynd.com/images/latest_images_2024/3241f9f7632b26251315c987806532a0f08d7bf8.webp",
      "https://img.cofynd.com/images/latest_images_2024/b18fa1f74bca181be0537aa78539107388a0d41a.webp",
      "https://img.cofynd.com/images/latest_images_2024/30052a4783a5a21e1557eff6b5a25600288856f7.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": "Gandhigram",
    "description": "Sspacia Coworking Space in Ahmedabad provides the finest ergonomic furnishing. We offer flexi desks, fixed desks, executive cabins, private cabins, meetings rooms & virtual offices including a one-day pass, weekly pass and monthly rent. Our Coworking Space in Ahmedabad is quirky, vibrant and fosters a productive work environment. So, whether you are a freelancer, entrepreneur or startup, find a hassle-free process to get started in minutes without any heavy deposits.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Coffee & Beverages",
      "Power Backup",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Video Conferencing Capabilities",
      "Workshops",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 200,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 14000,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 24000,
        "duration": "year"
      },
      {
        "title": "Business Address",
        "price": 1249,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1419,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1589,
        "duration": "month"
      }
    ],
    "brandName": "sspacia",
    "latitude": 23.035099543866494,
    "longitude": 72.56107533558217,
    "sourceUrl": "https://cofynd.com/coworking/sspacia-navrangpura-ahmedabad",
    "cofyndId": "6655d07025a76984edc7c9d4",
    "locality": "Navrangpura",
    "id": 53
  },
  {
    "name": "Uncubate Coworking",
    "badge": "Special Offer",
    "rating": 4.5,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹2,589",
    "period": "/ month",
    "priceFormatted": "₹2,589 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2ae08fbd16bd942b307e244486ba9f03a9cbe5ef.webp",
      "https://img.cofynd.com/images/latest_images_2024/4a9e7bc9d344e7d99ac1af555d2e42b64e71e992.webp",
      "https://img.cofynd.com/images/latest_images_2024/3dcf5f5b08f1ee1bacfee1f3589e4a1c77996110.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d7ca8f613228bd7778f882134a687e4b98e6525.webp",
      "https://img.cofynd.com/images/latest_images_2024/3527c2dc5db5e96287a811605957b91db4d349b5.webp",
      "https://img.cofynd.com/images/latest_images_2024/f48cdbc30a9d606ea0f679316335f278c92f1155.webp",
      "https://img.cofynd.com/images/latest_images_2024/bedf1ce351f823eea7d4870e29ec78529e12aefa.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": "Commerce Six Metro Station",
    "description": "Uncubate Coworking located in Navrangpura, Ahemdabad, is a vibrant and dynamic workspace designed for entrepreneurs, startups, freelancers, and businesses looking for a productive and inspiring environment. We believe that workspaces should go beyond just desks and chairs-they should foster collaboration, creativity, and growth. Located in the heart of Ahmedabad, this space offers flexible seating options, private cabins, meeting rooms, and a range of premium amenities, including high-speed internet, ergonomic seating, printing services, and unlimited tea or coffee.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Coffee & Beverages",
      "Air-Conditioning",
      "CCTV",
      "Meeting Rooms",
      "Video Conferencing Capabilities",
      "Lift",
      "Meeting Room",
      "Refrigerator",
      "Workshops"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 200,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8999,
        "duration": "Month"
      },
      {
        "title": "Private Cabin",
        "price": 10999,
        "duration": "Month"
      },
      {
        "title": "Virtual Office",
        "price": 24999,
        "duration": "Year"
      },
      {
        "title": "Business Address",
        "price": 2589,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 2669,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2749,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0417069,
    "longitude": 72.5518686,
    "sourceUrl": "https://cofynd.com/coworking/uncubate-coworking-navrangpura-ahmedabad",
    "cofyndId": "666c1a45ad47fd730e812a4f",
    "locality": "Navrangpura",
    "id": 54
  },
  {
    "name": "Opulence co-working spaces",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Sindhu Bhavan Road, Ahmedabad",
    "price": "₹9,000",
    "period": "/ month",
    "priceFormatted": "₹9,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a64b0077b7df578c5bc56d9cad556ce42a1d4abe.webp",
      "https://img.cofynd.com/images/latest_images_2024/fd76d040b8179bf6c49878370631eba9252ac324.webp",
      "https://img.cofynd.com/images/latest_images_2024/1518230bea0da653628069ec8341e70810fcdc2c.webp",
      "https://img.cofynd.com/images/latest_images_2024/9c31cee939600e4e70c835940b2ff3abfcb7c0d6.webp",
      "https://img.cofynd.com/images/latest_images_2024/8e4ee3983eb98b72831719da7c1e50f41fea5978.webp",
      "https://img.cofynd.com/images/latest_images_2024/cecaf1034783a306aea846c878546479d007ae5c.webp",
      "https://img.cofynd.com/images/latest_images_2024/6922ffede02863e3a1020657b9749dca3129f025.webp"
    ],
    "address": "Sindhu Bhavan Road, Ahmedabad",
    "landmark": null,
    "description": "Welcome to our state-of-the-art coworking space in the heart of SBR. Designed to foster creativity and productivity, our facility offers a dynamic work environment with all the amenities you need to thrive. We Provide a fully Furnished Workstation, Private Offices and Meeting Room, Recreational Facilities, Events and Networking and much more",
    "amenities": [
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "CCTV",
      "Air-Conditioning",
      "24x7 Security",
      "Reception",
      "Meeting Rooms",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "09:00 AM",
        "to": "09:00 AM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 38,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 5499,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0414785,
    "longitude": 72.5006748,
    "sourceUrl": "https://cofynd.com/coworking/opulence-co-working-spaces-sindhu-bhavan-road-ahmedabad",
    "cofyndId": "667bf21be49edbdc9383ef04",
    "locality": "Sindhu Bhavan Road",
    "id": 55
  },
  {
    "name": "The Map Stores",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Jagatpur Road, Ahmedabad",
    "price": "₹6,000",
    "period": "/ month",
    "priceFormatted": "₹6,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/6e96b0e013bbc83a5e484682b7d1f09b0a6c4603.webp",
      "https://img.cofynd.com/images/latest_images_2024/7e8598725fdd955a2394372b35280f51de854456.webp",
      "https://img.cofynd.com/images/latest_images_2024/ff86ad2ab285014e8fccb684d4c90bc29cd2c2a3.webp",
      "https://img.cofynd.com/images/latest_images_2024/3a3ed720104e28a3639b3e66fe6179c31ec355f5.webp",
      "https://img.cofynd.com/images/latest_images_2024/2a2a1760f73e0c93ea7560fd68f2aba43ecbb61d.webp",
      "https://img.cofynd.com/images/latest_images_2024/6910801b12fa8cf38a5d4c0b1fc780853e0e0aca.webp",
      "https://img.cofynd.com/images/latest_images_2024/c4b11d02e5c8d6b5ee21792cac8e9df5ede3fe31.webp",
      "https://img.cofynd.com/images/latest_images_2024/82943f9bab94393b1042f62dfa21151d26b632ab.webp",
      "https://img.cofynd.com/images/latest_images_2024/37667da750b56bb7c12ec6c564280050fecc5021.webp"
    ],
    "address": "Jagatpur Road, Ahmedabad",
    "landmark": "S G highway",
    "description": "Looking for a professional workspace in the heart of Ahmedabad? We're offering shared desks at our modern office in The Money Plant Highstreet. Enjoy a vibrant, collaborative environment with high-speed internet, comfortable furniture, and professional amenities. Perfect for freelancers, startups, or small teams. Flexible lease terms available. Contact us today to schedule a viewing!",
    "amenities": [
      "Refrigerator",
      "Wi-Fi",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Room",
      "Parking",
      "Lift"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "06:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 10,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 6000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 15000,
        "duration": "month"
      },
      {
        "title": "Hot Desk",
        "price": 8500,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.1142668,
    "longitude": 72.5386955,
    "sourceUrl": "https://cofynd.com/coworking/the-map-stores-jagatpur-ahmedabad",
    "cofyndId": "66a9e1aff3917cb1c887f422",
    "locality": "Jagatpur",
    "id": 56
  }
];

export const pageTwoFeaturedAhmedabadOfficeCards = [
  {
    "name": "Kasturi Pride Co-Working",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Nikol, Ahmedabad",
    "price": "₹2,999",
    "period": "/ month",
    "priceFormatted": "₹2,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/8bfb871a66e119faf07acfd4f174d6c9f594e8b6.webp",
      "https://img.cofynd.com/images/latest_images_2024/9ba813260e848f18664685fa7603cde11f6bafbc.webp",
      "https://img.cofynd.com/images/latest_images_2024/7c528bed85710d4be127eb159279c02c25c5518d.webp",
      "https://img.cofynd.com/images/latest_images_2024/a7c81fc7db0e1cba8301e8d2c42554ccd0d123f7.webp",
      "https://img.cofynd.com/images/latest_images_2024/bad1943a0ad81dd0a46d6f9ddf6b59f9542a37b7.webp"
    ],
    "address": "Nikol, Ahmedabad",
    "landmark": "Vastral",
    "description": "Welcome to our Kasturi Pride coworking space, where creativity and productivity meet in a dynamic, professional environment. Located in the heart of Ahmedabad, our facility offers an array of flexible workspaces designed to cater to the needs of freelancers, startups, and established businesses alike.\nFeatures and Amenities:\nFlexible Workspaces: Choose from hot desks, dedicated desks, and private offices to fit your unique work style and needs.\nHigh-Speed Internet: Stay connected with our reliable and ultra-fast Wi-Fi, ensuring seamless communication and productivity.\nMeeting Rooms: Reserve our fully-equipped meeting rooms with advanced AV technology for presentations, client meetings, and team collaborations.\nComfortable Lounge Areas: Take a break in our stylish lounge areas, perfect for casual meetings or relaxing between tasks.\nProfessional Support Services: Benefit from on-site support services including reception, mail handling, and administrative assistance.\nKitchen and Refreshments: Enjoy complimentary coffee, tea, and snacks in our well-stocked kitchen area.\nCommunity Events: Engage with a diverse network of professionals through our regular events, workshops, and networking opportunities.\nParking and Accessibility: Convenient parking options and easy access to public transportation make commuting hassle-free.\nOur coworking space is more than just a place to work; it's a community designed to inspire and support your professional growth. Whether you're a solo entrepreneur or part of a larger team, you'll find the perfect environment to thrive and achieve your goals.\nSchedule a Tour Today!\nDiscover how our coworking space can elevate your work experience. Contact us to schedule a tour and see firsthand what makes our space the ideal choice for your business needs.",
    "amenities": [
      "Wi-Fi",
      "CCTV",
      "Meeting Rooms",
      "Workshops",
      "Parking",
      "Lift",
      "Reception",
      "Air-Conditioning"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 15,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 2999,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0450753,
    "longitude": 72.680076,
    "sourceUrl": "https://cofynd.com/coworking/kasturi-pride-co-working-nikol-ahmedabad",
    "cofyndId": "66ac43b7f3917cb1c8c001c3",
    "locality": "Nikol",
    "id": 57
  },
  {
    "name": "WhatsBetter",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹5,999",
    "period": "/ month",
    "priceFormatted": "₹5,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/a16eb6175645d469a7a82afa9287f2b68287f9ab.webp",
      "https://img.cofynd.com/images/latest_images_2024/a0cdbbbe0bd8dcfcf756b3bc4f49482db4da39ce.webp",
      "https://img.cofynd.com/images/latest_images_2024/021d102230a2e03b12d8b6c45a697fe5aeb5fce9.webp",
      "https://img.cofynd.com/images/latest_images_2024/8bdd40156501ce0335ed565a0987ef9d13b82268.webp",
      "https://img.cofynd.com/images/latest_images_2024/fdf451977465e1d809b8e5729446574efa902d7c.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "This is a small, fully furnished office is ideal for an individual or a team of 4 to 6 people. It feels like your own personal space and includes everything, like an electricity bill and maintenance, so you can focus on your work without any worries and get a hassle-free work experience.",
    "amenities": [
      "Refrigerator",
      "Wi-Fi",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Lift",
      "Parking"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 6,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5999,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0974291,
    "longitude": 72.5314531,
    "sourceUrl": "https://cofynd.com/coworking/whatsbetter-sg-highway-ahmedabad ",
    "cofyndId": "66b70d78ed89a2a30fdf0600",
    "locality": "SG Highway",
    "id": 58
  },
  {
    "name": "Agile Labs Coworking",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹6,499",
    "period": "/ month",
    "priceFormatted": "₹6,499 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b02b2650320ed883e04aed9e551f79cd06b43f0a.webp",
      "https://img.cofynd.com/images/latest_images_2024/4454a4a1f36c927688518a5d17326d4f893a7992.webp",
      "https://img.cofynd.com/images/latest_images_2024/4367cf3ed992515cb3662e506b63e622a6e97aa7.webp",
      "https://img.cofynd.com/images/latest_images_2024/e2e63d14ef51a04531d114023d6f717d0433b5c3.webp",
      "https://img.cofynd.com/images/latest_images_2024/12a8490fcb353ed0aa388afc3085ddd651f6c22e.webp",
      "https://img.cofynd.com/images/latest_images_2024/4dbd50b1b5eb3431e18fa5eae82bd5f6fbc1a98d.webp",
      "https://img.cofynd.com/images/latest_images_2024/0161e59093e9e3818a64f611d5e9e41896debfb4.webp",
      "https://img.cofynd.com/images/latest_images_2024/94e18f635167a3f163ca9179406656851214af48.webp",
      "https://img.cofynd.com/images/latest_images_2024/bb645e9196c551380af15ea540000cc84babe0db.webp",
      "https://img.cofynd.com/images/latest_images_2024/604f646e37168e100f43c881ff65e17af5805d33.webp",
      "https://img.cofynd.com/images/latest_images_2024/712bdd38a2dce6e8398034f3a511e0b5fdd7cb01.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": null,
    "description": "AgileLabs, your ultimate workspace destination in Ahmedabad! Located conveniently in the city's heart, right in front of the Navrangpura fire station, Agilelabs offers a blend of convenience, comfort, and community for professionals and businesses.\nAt Agilelabs, we understand the value of a flexible and dedicated workspace. Whether you need a private cabin for focused work, a meeting room for collaboration, or a comfortable desk to call your own, we have you covered.\nWe are committed to providing high-quality services at affordable prices, making it easier than ever for both new and established businesses to secure a professional and inviting workspace.",
    "amenities": [
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Coffee & Beverages",
      "Power Backup",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Functional Kitchen",
      "Video Conferencing Capabilities",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 50,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 6000,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 6499,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 19999,
        "duration": "month"
      },
      {
        "title": "Office Space",
        "price": 35000,
        "duration": "month"
      },
      {
        "title": "Training Room",
        "price": 499,
        "duration": "hour"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.045174486754178,
    "longitude": 72.5514402947856,
    "sourceUrl": "https://cofynd.com/coworking/agile-labs-coworking-navrangpura-ahmedabad",
    "cofyndId": "66e4277ef6c0478e73a01237",
    "locality": "Navrangpura",
    "id": 59
  },
  {
    "name": "VistaWork",
    "badge": null,
    "rating": null,
    "area": "SG Highway",
    "location": "Ambli, Ahmedabad",
    "price": "₹8,999",
    "period": "/ month",
    "priceFormatted": "₹8,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d1dfffed71c656fe927e63a80b37e04821937f73.webp",
      "https://img.cofynd.com/images/latest_images_2024/8838db087f7246281a4e9d31cdcc17134b66609f.webp",
      "https://img.cofynd.com/images/latest_images_2024/720c10f0aeb6e25d24c76a754c48cb92d0f89f5c.webp",
      "https://img.cofynd.com/images/latest_images_2024/043ba9b3753be2f64622c1467197ed8b3df27c8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/fcda7237659fe396707e5c72e63132371f07760c.webp",
      "https://img.cofynd.com/images/latest_images_2024/48bcbc552b4ae8ebeda2d64ca1c3f9d37f92183f.webp",
      "https://img.cofynd.com/images/latest_images_2024/22b150575233acccbd151229428e3decfbb81319.webp",
      "https://img.cofynd.com/images/latest_images_2024/aa22481a09fe3b9a9ff62d69b85ccd45bec6c2fc.webp",
      "https://img.cofynd.com/images/latest_images_2024/194fa07b9aab1ade7de2a6bc29b08a162227212c.webp"
    ],
    "address": "Ambli, Ahmedabad",
    "landmark": "Bopal Approach BRTS",
    "description": "Discover a dynamic and inspiring coworking space in Ahmedabad at Vista Work, where you can Work, Chill, and Collaborate. Located in the heart of the city, Vista Work is the only shared workspace in Ahmedabad that offers breathtaking panoramic views, allowing you to work in a setting filled with natural light and stunning vistas. Our spacious rooftop cafe provides the perfect spot to take a break, unwind, or hold informal meetings, making it an ideal shared office space in Ahmedabad. Whether you're looking for a shared workspace near me or a private cabin cafe in Ahmedabad, Vista Work offers a vibrant environment to enhance your productivity and creativity.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Power Backup",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Functional Kitchen",
      "Video Conferencing Capabilities",
      "Workshops",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "12:00 AM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "12:00 AM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 70,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8999,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 9999,
        "duration": "month"
      },
      {
        "title": "Virtual Office",
        "price": 29999,
        "duration": "year"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.026487552418576,
    "longitude": 72.48002218179035,
    "sourceUrl": "https://cofynd.com/coworking/vistawork-ambli-ahmedabad",
    "cofyndId": "67515d2131ce8dfbd8a7d1f9",
    "locality": "Iscon-Ambli Road",
    "id": 60
  },
  {
    "name": "SSPACIA- Agarwal Complex",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹10,000",
    "period": "/ month",
    "priceFormatted": "₹10,000 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/3f205c885fe827436915792c339e71bece2bf34d.webp",
      "https://img.cofynd.com/images/latest_images_2024/bc67998d8dc2b9339b16f3676f2504b84a808ff2.webp",
      "https://img.cofynd.com/images/latest_images_2024/0e6c5389d0a5b4f78893581552988975b8830b6d.webp",
      "https://img.cofynd.com/images/latest_images_2024/aa0323614c9de225b49505111012de4b675de5ec.webp",
      "https://img.cofynd.com/images/latest_images_2024/3cdbf9e160ad68eba11e7c0b83180e418c96d66f.webp",
      "https://img.cofynd.com/images/latest_images_2024/8eac0947e85c557b285d1e463092080ef86b36d4.webp",
      "https://img.cofynd.com/images/latest_images_2024/93548892bce8ac7e27055f63b633da265509245f.webp",
      "https://img.cofynd.com/images/latest_images_2024/e07bd0db440d4c6e8125bed8500348f31c6099be.webp",
      "https://img.cofynd.com/images/latest_images_2024/beef903526bd9027fd2bb0e2f6148a5e6cea9418.webp",
      "https://img.cofynd.com/images/latest_images_2024/eecf253ef29ea0f92ffb79c5fbe9b8d0909ea7b3.webp",
      "https://img.cofynd.com/images/latest_images_2024/cb30eacfb2bd95fd5c41e0db0c24ed71e688ded7.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": "Navrangpura",
    "description": "This office space, is a vibrant ecosystem space that offers all types of seating- Day Pass, Dedicated Desks, Office Suites, and Floating Desks. The complete workspace is fully decorated and friendly which attracts the eyes of Professionals, Startups, Entrepreneurs, and SME’s. While working at Easy Office, you can make the network, get evolution programs, aux programs, and all amenities of the office.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Housekeeping",
      "Wi-Fi",
      "Wellness Rooms",
      "Game Zone",
      "24x7 Security",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Functional Kitchen",
      "Parking",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "12:00 AM",
        "to": "11:30 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "12:00 AM",
        "to": "11:30 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "12:00 AM",
        "to": "11:30 PM",
        "closed": false,
        "open24": false
      }
    },
    "seats": 30,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 10000,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 14000,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1249,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1419,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1589,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.035168657477517,
    "longitude": 72.56173515897396,
    "sourceUrl": "https://cofynd.com/coworking/sspacia-agarwal-complex-navrangpura-ahmedabad",
    "cofyndId": "675d113031ce8dfbd87b75ac",
    "locality": "Navrangpura",
    "id": 61
  },
  {
    "name": "Uncubate Coworking",
    "badge": "Premium",
    "rating": 4.8,
    "area": "SG Highway",
    "location": "SG Highway, Ahmedabad",
    "price": "₹2,589",
    "period": "/ month",
    "priceFormatted": "₹2,589 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/9c488d6ad00393ad7e3f4aa6ad7424263adc8d9e.webp",
      "https://img.cofynd.com/images/latest_images_2024/a64f9eef8d0f172432aae451deeebe96e6540a3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b13782fddfc8e8083723514ad6dd629063e9b5a.webp",
      "https://img.cofynd.com/images/latest_images_2024/ba0ae93a45b4d6b7a215b2acb56563967cf8d272.webp",
      "https://img.cofynd.com/images/latest_images_2024/1986272b0878e7b04b069d35e0f097bcb9cd4813.webp",
      "https://img.cofynd.com/images/latest_images_2024/00dd2b2b8372d55bee4841608fc605529165d6ae.webp"
    ],
    "address": "SG Highway, Ahmedabad",
    "landmark": null,
    "description": "Uncubate Coworking, located on SG Highway in Ahmedabad, offers a vibrant and collaborative workspace tailored for freelancers, startups, and established businesses. Known for its lively atmosphere and work-friendly environment, Uncubate provides a range of workspace solutions, including flexible desks, dedicated desks, private cabins, meeting rooms, and conference facilities. The space is designed to foster productivity and networking, making it an ideal choice for professionals seeking a dynamic work setting.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "09:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": null,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8999,
        "duration": "Month"
      },
      {
        "title": "Private Cabin",
        "price": 8999,
        "duration": "Month"
      },
      {
        "title": "Virtual Office",
        "price": 17999,
        "duration": "Year"
      },
      {
        "title": "Business Address",
        "price": 2589,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 2669,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 2749,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 22.9929931,
    "longitude": 72.4989465,
    "sourceUrl": "https://cofynd.com/coworking/uncubate-coworking-sg-highway-ahmedabad",
    "cofyndId": "67e13a79864c9c6e840ebf2d",
    "locality": "SG Highway",
    "id": 62
  },
  {
    "name": "Kendra Coworking",
    "badge": null,
    "rating": 4.6,
    "area": "Navrangpura",
    "location": "Memnagar, Ahmedabad",
    "price": "₹5,999",
    "period": "/ month",
    "priceFormatted": "₹5,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/54ba57c5dff2c5918369e5c4aa95448cc2157967.webp",
      "https://img.cofynd.com/images/latest_images_2024/baca89cf91dccb1571e4c3c6d4c3bb14450be938.webp",
      "https://img.cofynd.com/images/latest_images_2024/ace933f8d90ee0f0371d8248f34522feac957633.webp",
      "https://img.cofynd.com/images/latest_images_2024/9be27fef27644cafedca6c8ae67e8ae158686c16.webp",
      "https://img.cofynd.com/images/latest_images_2024/13c5235c8007f4e8bd2018a79fc40876b84827e6.webp",
      "https://img.cofynd.com/images/latest_images_2024/149a1a0c79e7eadd573d266cae20254dbddbc0ff.webp"
    ],
    "address": "Memnagar, Ahmedabad",
    "landmark": null,
    "description": "Kendra Coworking Space located in the vibrant neighbourhood of Memnagar, Ahmedabad, Kendra Coworking Space offers a contemporary and flexible workspace solution tailored for freelancers, startups, and established businesses. Situated near Kaizen Hospital on the 132ft Ring Road, this coworking space provides excellent connectivity and accessibility.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": null,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 5999,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 8499,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.0473271,
    "longitude": 72.5439911,
    "sourceUrl": "https://cofynd.com/coworking/kendra-coworking-memnagar-ahmedabad",
    "cofyndId": "68245af11f0ddb0a76d9e4a2",
    "locality": "Navrangpura",
    "id": 63
  },
  {
    "name": "Sweet Spot Spaces",
    "badge": null,
    "rating": null,
    "area": "Navrangpura",
    "location": "Navrangpura, Ahmedabad",
    "price": "₹8,999",
    "period": "/ month",
    "priceFormatted": "₹8,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/2db919895ca720e30baabb9f92ef914c0840bf57.webp",
      "https://img.cofynd.com/images/latest_images_2024/45f7231a38d67f11f781af2602771edf2ba6c985.webp",
      "https://img.cofynd.com/images/latest_images_2024/419aa84310e4b7778c7ba5a6e020cadbdd0371fa.webp",
      "https://img.cofynd.com/images/latest_images_2024/b7f41f1def2cc25681e3e018dd128e690aaeb6a1.webp",
      "https://img.cofynd.com/images/latest_images_2024/bb228a1d3f3430746dfe375e4c8afd56762bbb6e.webp",
      "https://img.cofynd.com/images/latest_images_2024/bc033399fd4cc26f8f287fdf39d86a6d2c760226.webp",
      "https://img.cofynd.com/images/latest_images_2024/1f8d1ece4437df5e9f48563f314516bcf96a75c7.webp",
      "https://img.cofynd.com/images/latest_images_2024/91919c760bc11defd8436430a9dfa9234905c060.webp",
      "https://img.cofynd.com/images/latest_images_2024/3fa403b1d726618bdc45c5732a07f528df4a9bad.webp"
    ],
    "address": "Navrangpura, Ahmedabad",
    "landmark": null,
    "description": "Sweet Spot Spaces premium coworking space located in the heart of Navrangpura, Ahmedabad, Sweet Spot Spaces offers a dynamic and flexible coworking environment tailored for startups, freelancers, and established enterprises. The workspace is designed to foster innovation and collaboration, providing members with access to modern amenities and a vibrant community of professionals.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": null,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 8999,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 9999,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 1549,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 1639,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 1729,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.0460819,
    "longitude": 72.5592222,
    "sourceUrl": "https://cofynd.com/coworking/sweet-spot-spaces-navrangpura-ahmedabad",
    "cofyndId": "6826d89dae725308632d8c08",
    "locality": "Navrangpura",
    "id": 64
  }
];

// ============================================================================
// Page 3
// ============================================================================
export const pageThreeAhmedabadOfficeCards = [
  {
    "name": "Opulence Navratna Corporate Park",
    "badge": null,
    "rating": 4.4,
    "area": "SG Highway",
    "location": "Ashok Vatika, Ahmedabad",
    "price": "₹7,999",
    "period": "/ month",
    "priceFormatted": "₹7,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/78db1ed6bc21e53e9a812dd64036d63384dfb74d.webp",
      "https://img.cofynd.com/images/latest_images_2024/a9323a71bee79a9f07b30045fb2c14e1a32650c8.webp",
      "https://img.cofynd.com/images/latest_images_2024/e6054c142760da43f4c1fba89f74e34106c305a6.webp",
      "https://img.cofynd.com/images/latest_images_2024/79758cf80f521dea1556e067090368a9768d937e.webp",
      "https://img.cofynd.com/images/latest_images_2024/c36dd4a46b5d1a9c6231469795d81e98045fb5c2.webp"
    ],
    "address": "Ashok Vatika, Ahmedabad",
    "landmark": null,
    "description": "Opulence Coworking at Navratna Corporate Park, Ahmedabad. It is located on the Navratna Corporate Park in Ashok Vatika, Ahmedabad, Opulence Coworking offers premium managed office solutions tailored for startups, SMEs, and enterprise teams. With over 60,000 sq. ft. of thoughtfully designed workspace, Opulence provides a blend of flexibility, functionality, and community.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": null,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 7999,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 9999,
        "duration": "month"
      },
      {
        "title": "Business Address",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "GST Registration",
        "price": 5499,
        "duration": "month"
      },
      {
        "title": "Company Registration",
        "price": 5499,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.049347,
    "longitude": 72.4874556,
    "sourceUrl": "https://cofynd.com/coworking/opulence-navratna-corporate-park",
    "cofyndId": "682dcb0e2de5ca1155b4e38f",
    "locality": "SG Highway",
    "id": 65
  },
  {
    "name": "Station27 coworking hub",
    "badge": null,
    "rating": 5,
    "area": "Vastrapur",
    "location": "Vastrapur, Ahmedabad",
    "price": "₹9,999",
    "period": "/ month",
    "priceFormatted": "₹9,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/484f24d1baa27daa1c456a1ed26291a333abbbe2.webp",
      "https://img.cofynd.com/images/latest_images_2024/4e071aea1d33de57982643cc545380765433acdf.webp",
      "https://img.cofynd.com/images/latest_images_2024/c7ee91d00c84e5fbf7a99f066bc6854fc5756be2.webp",
      "https://img.cofynd.com/images/latest_images_2024/46d60fb1ff560989dc59b99ebc89371d3b6e1a52.webp",
      "https://img.cofynd.com/images/latest_images_2024/36f764976178c098d760bc07ebb1e1737c6e91e7.webp"
    ],
    "address": "Vastrapur, Ahmedabad",
    "landmark": null,
    "description": "Station27 Coworking Hub dynamic workspace in Vastrapur. Station27 Coworking Hub offers a vibrant and flexible workspace tailored for freelancers, startups, and established businesses. Situated on the 4th floor of the Amrapali Lakeview Building, this coworking space provides a conducive environment for productivity and collaboration.",
    "amenities": [],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": null,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9999,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 10499,
        "duration": "month"
      }
    ],
    "brandName": null,
    "latitude": 23.0397094,
    "longitude": 72.5296868,
    "sourceUrl": "https://cofynd.com/coworking/station27-coworking-hub-vastrapur-ahmedabad",
    "cofyndId": "68301d282de5ca1155500483",
    "locality": "Vastrapur",
    "id": 66
  },
  {
    "name": "Solitaire Connect",
    "badge": "Popular",
    "rating": 4.8,
    "area": "SG Highway",
    "location": "SG Highway Ahmedabad",
    "price": "₹1,999",
    "period": "/ month",
    "priceFormatted": "₹1,999 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/d44c2f75f580d4c6a85b5765f1d2c3254ac1ff63.webp",
      "https://img.cofynd.com/images/latest_images_2024/48331906d7a61c3d94ef861a11923ee0d01ae3ea.webp",
      "https://img.cofynd.com/images/latest_images_2024/f76ba6114db10e451885f8c4ff396b24de32a3ed.webp",
      "https://img.cofynd.com/images/latest_images_2024/563671ad3aacc8a14ae538833caf161e7004dfdb.webp",
      "https://img.cofynd.com/images/latest_images_2024/7e409b1564fe4fc83d8d6c7e5052f8c99e0faa99.webp"
    ],
    "address": "SG Highway Ahmedabad",
    "landmark": null,
    "description": "Premium fully furnished coworking office space available on SG Highway, Ahmedabad. The workspace offers 98 seats, including 64 workstations, L-type workstations, MD Cabin, Director Cabin, 6-seater conference room, server room, separate male and female washrooms, and a pantry-cum-breakout area. An ideal setup for startups, SMEs, and growing enterprises seeking a professional and productive work environment in a prime business location.",
    "amenities": [
      "Community Events",
      "Printer & Scanner",
      "Cupboard",
      "Refrigerator",
      "Housekeeping",
      "Wi-Fi",
      "Cafe",
      "Coffee & Beverages",
      "Wellness Rooms",
      "Game Zone",
      "24x7 Security",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Room",
      "Meeting Rooms",
      "Workshops",
      "Parking",
      "Video Conferencing Capabilities",
      "Lift",
      "Lounge"
    ],
    "hours": {
      "monday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "08:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 98,
    "plans": [
      {
        "title": "Dedicated Desk",
        "price": 9499,
        "duration": "month"
      },
      {
        "title": "Private Cabin",
        "price": 1999,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.0974407,
    "longitude": 72.528883,
    "sourceUrl": "https://cofynd.com/coworking/solitaire-connect-sg-highway-ahmedabad",
    "cofyndId": "6a102f0e36b501c3d9dadce0",
    "locality": "SG Highway",
    "id": 67
  },
  {
    "name": "Prodesk",
    "badge": "Popular",
    "rating": 4.8,
    "area": "SG Highway",
    "location": "Chandkheda Ahmedabad",
    "price": "₹7,699",
    "period": "/ month",
    "priceFormatted": "₹7,699 / month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/fd9a38277636834871fc93f9e1644d1753db5e78.webp",
      "https://img.cofynd.com/images/latest_images_2024/f1c25aaf752344cafc8f14bd1c490a2c68039583.webp",
      "https://img.cofynd.com/images/latest_images_2024/0d3bcf2b1a4f73409326e9d5b02b6414a3cb8215.webp",
      "https://img.cofynd.com/images/latest_images_2024/f88a9feeb7573ae0c27cd642459af7e0a76fd46f.webp"
    ],
    "address": "Chandkheda Ahmedabad",
    "landmark": null,
    "description": "Prodesk Chandkheda Ahmedabad is a premium coworking space designed for startups, freelancers, and businesses. It offers flexible workstations, private cabins, meeting rooms, high-speed internet, power backup, and professional amenities. With a productive and collaborative work environment, Prodesk provides a cost-effective workspace solution for networking, innovation, and business growth.",
    "amenities": [
      "Community Events",
      "Cupboard",
      "Phone Booth/Call Area",
      "Housekeeping",
      "Refrigerator",
      "Wi-Fi",
      "Power Backup",
      "Air-Conditioning",
      "CCTV",
      "Reception",
      "Meeting Rooms",
      "Meeting Room",
      "Workshops",
      "Parking",
      "Lift"
    ],
    "hours": {
      "monday": {
        "from": "07:00 AM",
        "to": "07:00 PM",
        "closed": false,
        "open24": false
      },
      "saturday": {
        "from": "09:00 AM",
        "to": "04:00 PM",
        "closed": false,
        "open24": false
      },
      "sunday": {
        "from": "",
        "to": "",
        "closed": true,
        "open24": false
      }
    },
    "seats": 73,
    "plans": [
      {
        "title": "Hot Desk",
        "price": 8999,
        "duration": "month"
      },
      {
        "title": "Dedicated Desk",
        "price": 7699,
        "duration": "month"
      }
    ],
    "brandName": "Other Coworking",
    "latitude": 23.1124947,
    "longitude": 72.5818106,
    "sourceUrl": "https://cofynd.com/coworking/prodesk-chandkheda-ahmedabad",
    "cofyndId": "6a15c022186b2f52d52a157d",
    "locality": "Chandkheda",
    "id": 68
  }
];

export const pageThreeMoreAhmedabadOfficeCards = [];

export const pageThreeFinalAhmedabadOfficeCards = [];

export const pageThreeFeaturedAhmedabadOfficeCards = [];

// ============================================================================
// Page 4
// ============================================================================
export const pageFourAhmedabadOfficeCards = [];

// Every listing, once (used for lookups below)
const ahmedabadCardPool = [
  ...ahmedabadOfficeCards,
  ...moreAhmedabadOfficeCards,
  ...finalAhmedabadOfficeCards,
  ...featuredAhmedabadOfficeCards,
  ...pageTwoAhmedabadOfficeCards,
  ...pageTwoMoreAhmedabadOfficeCards,
  ...pageTwoFinalAhmedabadOfficeCards,
  ...pageTwoFeaturedAhmedabadOfficeCards,
  ...pageThreeAhmedabadOfficeCards,
  ...pageThreeMoreAhmedabadOfficeCards,
  ...pageThreeFinalAhmedabadOfficeCards,
  ...pageThreeFeaturedAhmedabadOfficeCards,
  ...pageFourAhmedabadOfficeCards
];
const cardsByIds = (ids) => ids.map((id) => ahmedabadCardPool.find((card) => card.id === id)).filter(Boolean);

// ============================================================================
// Extra cards per area (12 each): the nearest other Ahmedabad listings from cofynd,
// shown together with the area's own cards when that area filter is selected
// ============================================================================
export const areaExtraOfficeCards = {
  "SG Highway": cardsByIds([]),
  "Navrangpura": cardsByIds([10,20]),
  "Vastrapur": cardsByIds([38,9,45,27,44,4]),
  "Prahlad Nagar": cardsByIds([12,17,62,31,8,40,16,6,27,45,14,60,48,41]),
  "Satellite": cardsByIds([6,16,48,41,49,15,26,31,55,33,29,22,52]),
  "Ellisbridge": cardsByIds([51,61,53,19,34,64,54,37,38,44,4,59,35,63,42]),
  "Makarba": cardsByIds([62,17,31,8,40,16,7,27,45,6,14,60,48,41]),
  "Bopal": cardsByIds([60,65,23,33,41,31,6,55,48,16,15,26,17,49])
};

// ============================================================================
// Similar spaces (top rated listings)
// ============================================================================
export const similarAhmedabadOfficeCards = cardsByIds([1,2,54,62,63,65,66,67,68]);

// Aggregator & lookup helper
export const allAhmedabadOfficeCards = ahmedabadCardPool;

/**
 * Find an Ahmedabad office card by slug or id across all pagination pages
 */
export const getAhmedabadOfficeCardById = (id) => findOfficeBySlug(allAhmedabadOfficeCards, id, "ahmedabad");
export const getAhmedabadOfficeSlug = (space) => officePath(allAhmedabadOfficeCards, space, "ahmedabad");

// Top Coworking Locations in Ahmedabad (Explore by Neighborhood) - location photos from cofynd
export const topAhmedabadCoworkingLocations = [
  {
    "id": "loc-sg-highway",
    "name": "SG Highway",
    "title": "Coworking Space in SG Highway",
    "image": "https://img.cofynd.com/images/latest_images_2024/2545b33892d39ee81aeb1e2020327bbe684c633b.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-navrangpura",
    "name": "Navrangpura",
    "title": "Coworking Space in Navrangpura",
    "image": "https://img.cofynd.com/images/latest_images_2024/72942c4ab8aa9fd5ef8eee6e89d53cfdbb4a3e8d.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-vastrapur",
    "name": "Vastrapur",
    "title": "Coworking Space in Vastrapur",
    "image": "https://img.cofynd.com/images/latest_images_2024/57afd5ff2dc482161ab02de4e2e5a98fb60db58a.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-prahlad-nagar",
    "name": "Prahlad Nagar",
    "title": "Coworking Space in Prahlad Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/25d732f6569b236e5241a1145bd2d75fa592a230.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-satellite",
    "name": "Satellite",
    "title": "Coworking Space in Satellite",
    "image": "https://img.cofynd.com/images/latest_images_2024/855f20f2aec864a4d1b672a0c5cc9ab3b0342bd1.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-ellisbridge",
    "name": "Ellisbridge",
    "title": "Coworking Space in Ellisbridge",
    "image": "https://img.cofynd.com/images/latest_images_2024/fe558cf587c397356f68a0da02a6e6dcdc85ea01.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-makarba",
    "name": "Makarba",
    "title": "Coworking Space in Makarba",
    "image": "https://img.cofynd.com/images/original/d088ccbd560018ab4c9c0448aa4eedb67b52a92e.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bopal",
    "name": "Bopal",
    "title": "Coworking Space in Bopal",
    "image": "https://img.cofynd.com/images/latest_images_2024/a0e8549479beccb787fd36cdc04d544ddf267860.webp",
    "ctaText": "Explore Spaces"
  }
];
