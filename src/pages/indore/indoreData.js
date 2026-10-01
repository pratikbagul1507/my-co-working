import { findOfficeBySlug, officePath } from "../../common/slug.js";
/**
 * Indore Coworking Spaces Layout Data & Area Filters
 * Sourced from live coworking listings for Indore (cofynd.com public listings API).
 */

export const indoreNeighborhoods = [
  "AB Road",
  "LIC Colony",
  "Ratna Lok Colony",
  "Ravindra Nagar",
  "South Tukoganj",
  "Vijay Nagar",
  "M.G. Road",
  "Jawahar Marg",
  "Bhawarkua",
  "Scheme 54",
  "Mahalaxmi Nagar",
  "New Palasia",
  "Pipliyahana"
];

export const indoreOfficeCards = [
  {
    "id": 1,
    "name": "Nextcoworks",
    "badge": "Premium Coworking",
    "rating": 4.8,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/cebdaa16c044508e7616f5a0f463c78244522044.webp",
      "https://img.cofynd.com/images/latest_images_2024/bca89c4cd39ac0dbca23ec5cc0754a822b54bb8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/f05d0c2eac60a690a8b9f2dc3b1ceb9ac41c40c9.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1544faff4dd3dc2f7a7b5ec7e425d59e5a19c59.webp",
      "https://img.cofynd.com/images/latest_images_2024/8612338f4f05bfb868bb96a679374be25bf7f5a6.webp",
      "https://img.cofynd.com/images/latest_images_2024/01bd993a3005a307e1b3f90d193756ef05b1f849.webp",
      "https://img.cofynd.com/images/latest_images_2024/278137df85e651aa2c9d4405e2788704a358bfba.webp",
      "https://img.cofynd.com/images/latest_images_2024/02aa649f2ef0f3500e8d6137bdc5503ce6514f6e.webp"
    ]
  },
  {
    "id": 2,
    "name": "Incuspaze Apollo",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e85426ce071a8de598c3d0e7f16adb4aaf056d13.jpg",
      "https://img.cofynd.com/images/original/b1702e02cba6a7e8244a54e0e6a58acba5004923.jpg",
      "https://img.cofynd.com/images/original/c0f1c5ff530c8616ebe2bb2265c6e3f8cf2b3a0f.jpg",
      "https://img.cofynd.com/images/original/e6915cb5e08196700dc39f8a265ceb84636852c9.jpg",
      "https://img.cofynd.com/images/original/ea807ca73f1f0f8884b96193b289c18203100335.jpg",
      "https://img.cofynd.com/images/original/cd4b42f3b4627f5815f179f965b74e331a239d45.jpg"
    ]
  },
  {
    "id": 3,
    "name": "Incuspaze Princes Business Skyline",
    "rating": 4.5,
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/3d951919efd3a31194f66951440dc9f301fcc53c.jpg",
      "https://img.cofynd.com/images/original/1552dc2b639d5266606b16784fda7a87c9d17a22.jpg",
      "https://img.cofynd.com/images/original/dc0dfeb1aa0d6403f6a2049fa7113c145b81a022.jpg",
      "https://img.cofynd.com/images/original/e66871836b68bf4ac79120096a87777ac47f8ef3.jpg",
      "https://img.cofynd.com/images/original/5fb20a658639188bf735d7a826209c0c566b4ef4.jpg"
    ]
  },
  {
    "id": 4,
    "name": "Incuspaze Brilliant Platina",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e3968f9d719e9f59b3bf5e8037ac1df3329da2bd.jpg",
      "https://img.cofynd.com/images/original/c177625b3ebd7cb710215421b77fa4290a5ed767.jpg",
      "https://img.cofynd.com/images/original/55edf08ec595b25d532da9d94c8885b646354827.jpg",
      "https://img.cofynd.com/images/original/3382a8ad450944e08c6f4de01afef1a6ed18e3da.jpg",
      "https://img.cofynd.com/images/original/eb6127274f92a2e24b2fc67d6f5088e5acc37e18.jpg"
    ]
  },
  {
    "id": 5,
    "name": "Incuspaze Metro Tower",
    "rating": 4.5,
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9a77947d04ddacf2731007500e2bdec2dbcfe336.jpg",
      "https://img.cofynd.com/images/original/eff3a147c3f212107aa125870e63e1cbc2e18c82.jpg",
      "https://img.cofynd.com/images/original/13f660e0dc2f4f0b39a960da9eac1ff891db4827.jpg",
      "https://img.cofynd.com/images/original/dae1b62039a3d1fd72aa320a9cba7e9751dc8196.jpg",
      "https://img.cofynd.com/images/original/86e3add5caf136da865a4ad6a9b56d5c54189da0.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Adited Coworking 1.0",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/79cb04ff48a91c1039479a6433cdcda04477a3c9.jpg",
      "https://img.cofynd.com/images/original/f7cd616f5056b7a8144547f1e92fed4a384a3880.jpg",
      "https://img.cofynd.com/images/original/9f08d9e480403ec85cf9dd6e39aa83cc7e26b6ed.jpg",
      "https://img.cofynd.com/images/original/4ce4627285e42ed36a2b39db6d91eb70df100eef.jpg",
      "https://img.cofynd.com/images/original/879d988cbfa9d8c06f0b642fba72f305e64bd966.jpg"
    ]
  },
  {
    "id": 7,
    "name": "Work Jar Coworking",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9a2e0d80c47371515102ecb7543f1f8af58338bd.jpg",
      "https://img.cofynd.com/images/original/8cfbda62db1c0caf549ff88d58e1dc3d8356e54b.jpg",
      "https://img.cofynd.com/images/original/1fe04de035e19a40a619a2d2b50d73dff32799cb.jpg",
      "https://img.cofynd.com/images/original/73de0375d6f4a9e7442f882d4796ef61fe715877.jpg",
      "https://img.cofynd.com/images/original/fb98cb1cc76929a02d716afd27141f049dc1b291.jpg"
    ]
  },
  {
    "id": 8,
    "name": "Workvistar",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/23b80d614693142dc6d27fb9ea739f859db8f606.jpg",
      "https://img.cofynd.com/images/original/a49863cb704c9ceae3621b8eeca709bdf877332f.jpg",
      "https://img.cofynd.com/images/original/3477017057f76f8663d89becec31a5a0d27de91a.jpg",
      "https://img.cofynd.com/images/original/25e5a08900fa08baf0b3f6efe6dd6c65214ac2c6.jpg",
      "https://img.cofynd.com/images/original/8da57b82c475ef368e3841e6348666db5a32b28a.jpg"
    ]
  }
];

export const moreIndoreOfficeCards = [
  {
    "id": 9,
    "name": "YBox.Work",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/aa61999951aef590967b8d33e36003d17e7e9f29.jpg",
      "https://img.cofynd.com/images/original/af0c60b9f1c51eb83388accb47116e17d883bbdb.jpg",
      "https://img.cofynd.com/images/original/15dabfe40d580efdb9a3b73e0636c75392a475a9.jpg",
      "https://img.cofynd.com/images/original/13d776ca793563b51faeb11e043d6a3e23258124.jpg",
      "https://img.cofynd.com/images/original/a68c3a0daa1c22ad5cb5d57f549378f492389087.jpg"
    ]
  },
  {
    "id": 10,
    "name": "Virtual Coworks",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹4,000",
    "period": "/ Month",
    "priceFormatted": "₹4,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/8c1c9d98567dcf4c1da0ab14fc5e01c026f087b4.jpg",
      "https://img.cofynd.com/images/original/5e988e80868c0669fe8f53b30c039c77032f6729.jpg",
      "https://img.cofynd.com/images/original/4dc86cb26f63a5e11e05d3c6f0cee65578db71b9.jpg",
      "https://img.cofynd.com/images/original/54afe209bd127f83a6b63f4dd245e59ba198f128.jpg",
      "https://img.cofynd.com/images/original/0eb993cdbd015561ceb31bf68a300ed50c55a858.jpg"
    ]
  },
  {
    "id": 11,
    "name": "Paskola",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹3,000",
    "period": "/ Month",
    "priceFormatted": "₹3,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/30bf54f4089ccebbe5a8f7fb0350eea9294e5a82.jpg",
      "https://img.cofynd.com/images/original/091d32b4aa85620821b459d888f58160b87869cf.jpg",
      "https://img.cofynd.com/images/original/b71f7da315b2bd61063e4a857d77eef387df013b.jpg",
      "https://img.cofynd.com/images/original/0bbf5113faba1ce7ac27cff952682248ea43202a.jpg",
      "https://img.cofynd.com/images/original/dc6b6880031dbdc49fbb45ad5994f989f805b824.jpg"
    ]
  },
  {
    "id": 12,
    "name": "Worksthan",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/5cacf83dfb43b7eb6882f6271898b0e05eead724.jpg",
      "https://img.cofynd.com/images/original/41f2e5c9415d01433c3d52a4fa9f67d91449e898.jpg",
      "https://img.cofynd.com/images/original/4afcfaaa496f358bb872ae640eb3f896936b35c8.jpg",
      "https://img.cofynd.com/images/original/3f9eaed03a6a4e02ac74c47c2efe46d434a0b3a4.jpg",
      "https://img.cofynd.com/images/original/2839e3922f335a66aaecfe90e585bb087ca61ac0.jpg",
      "https://img.cofynd.com/images/original/81e560d0040e6e91df4ab7f5543bb6c87f7985d4.jpg",
      "https://img.cofynd.com/images/original/4ede9b640ca3286410d4724f71044ade4ad7a175.jpg"
    ]
  },
  {
    "id": 13,
    "name": "BIZZI.B",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/76753b23784a9fbd545de2fd0b25ef1ef6d26eec.jpg",
      "https://img.cofynd.com/images/original/05ea243041381e0d778476c38d8bdd321e355660.jpg",
      "https://img.cofynd.com/images/original/e80920911c998b981e8baabf2369ab12a018f49f.jpg",
      "https://img.cofynd.com/images/original/39eaff45f769343292f95435a515200d0d7dd848.jpg",
      "https://img.cofynd.com/images/original/a2896cfa258eb38841b981b44e52d62410daadb7.jpg"
    ]
  },
  {
    "id": 14,
    "name": "The Dice",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/24fd3539a991b91614d9181fe9e5becacfd3e2f9.jpg",
      "https://img.cofynd.com/images/original/13b08d83775f884234c0bf83438d99b879d91c6c.jpg",
      "https://img.cofynd.com/images/original/c99637e14b70bb90eb23e69a9e668aa6e44a386f.jpg",
      "https://img.cofynd.com/images/original/954b965757f1a994841ddad28f96331ef70a32a6.jpg",
      "https://img.cofynd.com/images/latest_images_2024/b67ba48e25c4388206cd44d3d52ebe8d021d19ff.webp",
      "https://img.cofynd.com/images/latest_images_2024/23b8e938bdc54f6ac4b1fd9ad9af7ca8e2302a32.webp",
      "https://img.cofynd.com/images/latest_images_2024/808a31deb57baf20d09f5dbaafd37f52f20c37e9.webp",
      "https://img.cofynd.com/images/latest_images_2024/26c8ecb1f7190b14f846475ca1ddbd7044c8294c.webp"
    ]
  },
  {
    "id": 15,
    "name": "SPADIFY CO-WORK",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹3,000",
    "period": "/ Month",
    "priceFormatted": "₹3,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/3d5c026bc421052fbe97c93091abd8d3a0b2d1af.jpg",
      "https://img.cofynd.com/images/original/d6e074dfd8583ea6f1e23783ce992d8aae51a046.jpg",
      "https://img.cofynd.com/images/original/45aed836c07117cd035531d2637e37b5885a0434.jpg",
      "https://img.cofynd.com/images/original/0c210e3acd03d73ae36640118d4e64b80376840a.jpg",
      "https://img.cofynd.com/images/original/190cbed81663f01b565c949d20ea77ef158e7f4d.jpg"
    ]
  },
  {
    "id": 16,
    "name": "Cliffton Corporate",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹10,000",
    "period": "/ Month",
    "priceFormatted": "₹10,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/2e08593fbdc5e7364bd9993bcc2a0f06ddc22bdb.jpg",
      "https://img.cofynd.com/images/original/8aa14aaff8e342b5fbef870e3c8621e4216d5ac2.jpg",
      "https://img.cofynd.com/images/original/f4e595f9c6aa0aa51177d35f65ff27ee70ca2dc1.jpg",
      "https://img.cofynd.com/images/original/5b3dadca5532aa9a594b5b7422aef4a42fe9ac0e.jpg",
      "https://img.cofynd.com/images/original/1f5ea692f3b860cceeb78de9257acbf0d1e39379.jpg",
      "https://img.cofynd.com/images/original/f58695c55b1f8f490f7b02653bdef0453045bb3e.jpg",
      "https://img.cofynd.com/images/original/24b4740a313da435887ff387c8273f41ae4b724b.jpg"
    ]
  }
];

export const finalIndoreOfficeCards = [
  {
    "id": 17,
    "name": "Nexus Spaces AB Road",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e3535be480db4c0c4dc89131e5e255fb419bf6dd.jpg",
      "https://img.cofynd.com/images/original/176e405a071100cfd07f2778392d2f6595996b2e.jpg",
      "https://img.cofynd.com/images/original/ac1662631043ed88ca9aba83053aec22ecb7b236.jpg",
      "https://img.cofynd.com/images/original/9d5725d27d12410a8a3e065649dbae21cf671fb1.jpg",
      "https://img.cofynd.com/images/original/824a553195bdf5f968453cf7ab1fb15d715abd42.jpg"
    ]
  },
  {
    "id": 18,
    "name": "Nexus Spaces South Tukoganj",
    "area": "South Tukoganj",
    "location": "South Tukoganj, Indore",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/6a4736f86d95a33b7e57f91fa806db10dfff54b2.jpg",
      "https://img.cofynd.com/images/original/bb199d50402f34e04ef1dad0f50e8e6cab4eee85.jpg",
      "https://img.cofynd.com/images/original/74384690fa00e36e41f36c84d86bd20cd8bffda3.jpg",
      "https://img.cofynd.com/images/original/9fb7d8a3f3820b223f440cfb14ecd512e6f4a6b5.jpg",
      "https://img.cofynd.com/images/original/4e8141c3c189c83996c9e685799d5654ee6b6f96.jpg"
    ]
  },
  {
    "id": 19,
    "name": "The Address - Your Destination of Growth Indore",
    "rating": 4.6,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/2e9fec93159bdae59bf162164bbc6f28b58e801d.jpg",
      "https://img.cofynd.com/images/original/b08b6d8e96babb9f2addde2375eb243f96482ca2.jpg",
      "https://img.cofynd.com/images/original/967b7ad5eaf4b7437386a714eafafd2b66264331.jpg",
      "https://img.cofynd.com/images/original/e868ca754a3d772277d52f8ac64e8c4b67460438.jpg",
      "https://img.cofynd.com/images/original/aba8baa1b109a820ee9ec1d0338fc3a50abe5aed.jpg",
      "https://img.cofynd.com/images/original/dad736cea1cdf73a2e865fd2d865148ca93bac50.jpg"
    ]
  },
  {
    "id": 20,
    "name": "Melange Marketing",
    "area": "Jawahar Marg",
    "location": "Jawahar Marg, Indore",
    "price": "₹9,900",
    "period": "/ Month",
    "priceFormatted": "₹9,900 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/37bc6a96cbb759dc3526cb78ce319137c37363fb.jpg",
      "https://img.cofynd.com/images/original/7e06657c2dbdba9198ceaa407e4499a64332af0f.jpg",
      "https://img.cofynd.com/images/original/5480a4a30a291227eebcbf21a5487568626dedfc.jpg",
      "https://img.cofynd.com/images/original/7c0e825cbbec0bdf445f8380261bc45c8e8a8a9a.jpg"
    ]
  },
  {
    "id": 21,
    "name": "Zero Gravito",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/7339db9a9927336d238bd05500c5bf9133819992.jpg",
      "https://img.cofynd.com/images/original/54a99bba1c5fd0b6da54b2e2c9f5ed74ac65779f.jpg",
      "https://img.cofynd.com/images/original/972b2eeed2250f4806134b4fc8c3ceecddf69d62.jpg",
      "https://img.cofynd.com/images/original/e0b98cad7e7bbc82091a47301b69493a73235992.jpg",
      "https://img.cofynd.com/images/original/c761d729204074bafb4304e296631e3a5935a71e.jpg"
    ]
  },
  {
    "id": 22,
    "name": "Karyasthal",
    "area": "Bhawarkua",
    "location": "Bhawarkua, Indore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e786a2ce11b5a1c43fb64ba7e444a03396994c74.jpg",
      "https://img.cofynd.com/images/original/c75929be3c06514af1adc8365463ef4a8f8b9d84.jpg",
      "https://img.cofynd.com/images/original/694e8f7f66aa73cf9034d05007d8a7a1efff0429.jpg",
      "https://img.cofynd.com/images/original/d91ae660f43ccda386f18dc2f9e8338b4effba21.jpg",
      "https://img.cofynd.com/images/original/88c7d38f9b30a61ac37cfa3c5b340fb58541960f.jpg",
      "https://img.cofynd.com/images/original/8232c5e40a297f3cbda881b60d434773b630d75b.jpg",
      "https://img.cofynd.com/images/original/b52dcb1f4abd0e138aeaad7787892c25feefb637.jpg",
      "https://img.cofynd.com/images/original/2d1753cd6f0a1cbdf02000540f9ea0a819a7b6b7.jpg"
    ]
  },
  {
    "id": 23,
    "name": "Youth Cowork",
    "area": "M.G. Road",
    "location": "M.G. Road, Indore",
    "price": "₹3,999",
    "period": "/ Month",
    "priceFormatted": "₹3,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/7d326793f8cd97485edaeb149765a0ce45d6f94d.jpg",
      "https://img.cofynd.com/images/original/bfeda4aa0202764019dba287273696aaddf48891.jpg",
      "https://img.cofynd.com/images/original/639f8da4a56df6f3ebc2e55b650a9ba4f169ade7.jpg",
      "https://img.cofynd.com/images/original/ef0a8839b19f3882f8656aff54bff8b3bd9c0a1f.jpg",
      "https://img.cofynd.com/images/original/593ec01b8469efddac15e6fe27b995d92ee8eb87.jpg",
      "https://img.cofynd.com/images/original/85efe5b295c09bf950b188491b83867476f2b873.jpg"
    ]
  },
  {
    "id": 24,
    "name": "Workbox",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/b744d4e7674732f085d32142291f7221f3d31816.jpg",
      "https://img.cofynd.com/images/original/7a1d3e7c164c3a49b3c645e5b68da5d800f13129.jpg",
      "https://img.cofynd.com/images/original/ca421a13a7982aa8fda25ee5b08ae3f948e8a1af.jpg",
      "https://img.cofynd.com/images/original/5fdd3a1ab4cb02d08cb9d73bf7bacff445419a7c.jpg",
      "https://img.cofynd.com/images/original/07bce204fef177adc23e76bf1030e37b443a1812.jpg",
      "https://img.cofynd.com/images/original/5abacbdcd580d8461a5ac0927ff591fa9632fbba.jpg",
      "https://img.cofynd.com/images/original/67ffcf0c6fbb56d5a3549aa81efbde0105ea5a56.jpg",
      "https://img.cofynd.com/images/original/78760e5acf688fdae5f883521077ebff6c55ea88.jpg"
    ]
  }
];

export const featuredIndoreOfficeCards = [
  {
    "id": 25,
    "name": "Stark Spaces",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹9,999",
    "period": "/ Month",
    "priceFormatted": "₹9,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/76d6b5128985a640d2d8637a3e4a1615f30b48bf.webp",
      "https://img.cofynd.com/images/latest_images_2024/db77ba0d94a8174bcc160cdcf9130242d34e1981.webp",
      "https://img.cofynd.com/images/latest_images_2024/319b11c04282bbd409a975af46370ae5ab4e469a.webp",
      "https://img.cofynd.com/images/latest_images_2024/9971f7f6efbdb6c1c9e076c8a7832e8a7d1f9125.webp",
      "https://img.cofynd.com/images/latest_images_2024/a8f5c8b1055b0f8073eb69b0f96c2ccc5526c13b.webp"
    ]
  },
  {
    "id": 26,
    "name": "Melange Coworks",
    "area": "Jawahar Marg",
    "location": "Jawahar Marg, Indore",
    "price": "₹2,000",
    "period": "/ Month",
    "priceFormatted": "₹2,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/0d8fae158a7e8065c877c524557e3fdb2cf8ea35.webp",
      "https://img.cofynd.com/images/latest_images_2024/47b7b101f8e6b4119c669e2647b668676872e666.webp",
      "https://img.cofynd.com/images/latest_images_2024/93e67d7f8c21374da50979128a5acd6ee96a5866.webp",
      "https://img.cofynd.com/images/latest_images_2024/32386b6f439e77f07d75106df94f662238d018b9.webp"
    ]
  },
  {
    "id": 27,
    "name": "Incuspaze Apollo Premier",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/ef8feed8b88cc44afd387725c80f684b2035b795.webp",
      "https://img.cofynd.com/images/latest_images_2024/a37dffce2b4ca3917bf255363fcdc0e75b67f408.webp",
      "https://img.cofynd.com/images/latest_images_2024/92162816cabe67c6d422dde82fff4d6d3141d2ef.webp",
      "https://img.cofynd.com/images/latest_images_2024/8998c0a55e955c6371c74c4f938f3af58d1936c7.webp",
      "https://img.cofynd.com/images/latest_images_2024/707e61c16a7b0c2f2e1bf4fb01c612e5ebbdac69.webp",
      "https://img.cofynd.com/images/latest_images_2024/de8839d8d6ba521cc5c1c8c55a021da09e44fc41.webp",
      "https://img.cofynd.com/images/latest_images_2024/b6ec28473841e201e8ef1f2dbd2caa20deab8ab1.webp",
      "https://img.cofynd.com/images/latest_images_2024/3d6bf2daebc5e10e1d6eb4ad218d0521b0e6d832.webp"
    ]
  },
  {
    "id": 28,
    "name": "Incuspaze Princess Business Skyline",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/e5d1846fd3bb5a86a2ff000aa3dabbd9f6d8c218.webp",
      "https://img.cofynd.com/images/latest_images_2024/fd0e0dc9c2c281e4e2143227d47fd64f1d14ce46.webp",
      "https://img.cofynd.com/images/latest_images_2024/26d47cc32c416fd5690d966c86f736f67046efdc.webp",
      "https://img.cofynd.com/images/latest_images_2024/b334b8ce20269fd27d040da09bcb8d21e60ff2bd.webp",
      "https://img.cofynd.com/images/latest_images_2024/eec08593a2b3aac51ebec18e9fcaba02ccd36092.webp",
      "https://img.cofynd.com/images/latest_images_2024/4cfc051d330040010a8f12975fbb229304d043f4.webp"
    ]
  },
  {
    "id": 29,
    "name": "Estancia Pro working space",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹4,300",
    "period": "/ Month",
    "priceFormatted": "₹4,300 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/09d5036e241e7ffe485edff901f88990937d1254.webp",
      "https://img.cofynd.com/images/latest_images_2024/82e3e66e817094ea8fcaca926f02302e08567aae.webp",
      "https://img.cofynd.com/images/latest_images_2024/d459b55a649e11e743f8303e9fcfac95004d9b1a.webp",
      "https://img.cofynd.com/images/latest_images_2024/25448d76ddfb308c13f2dbe2ae32b43c6c62751f.webp",
      "https://img.cofynd.com/images/latest_images_2024/c10685c8fad71be061a91b1fc153c9de7b3bed90.webp"
    ]
  },
  {
    "id": 30,
    "name": "Awfis Winway World Offices",
    "rating": 4.8,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹9,000",
    "period": "/ Month",
    "priceFormatted": "₹9,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/60d3efd24750334eff7ef781576633b50d7551bc.webp",
      "https://img.cofynd.com/images/latest_images_2024/ac969ab82af331f38f6153233bc36364635a3717.webp",
      "https://img.cofynd.com/images/latest_images_2024/c599d25de0ed90a243bf744af0f8725d4e85ca2b.webp",
      "https://img.cofynd.com/images/latest_images_2024/1e8ce9d38b82e4732dfcb5cf477bded6fb9ccb9c.webp",
      "https://img.cofynd.com/images/latest_images_2024/f99ea1b48a716b7bd56991d706f224d27e57236c.webp",
      "https://img.cofynd.com/images/latest_images_2024/99a1a17f90d3e96ab2e64461eb43c75f3d998e67.webp"
    ]
  },
  {
    "id": 31,
    "name": "TechWinners InfoSystem CoWorking Space",
    "area": "Scheme 54",
    "location": "Scheme 54, Indore",
    "price": "₹2,299",
    "period": "/ Month",
    "priceFormatted": "₹2,299 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/1d069318286d599f6196fff6130d5cb6a6932d3f.webp",
      "https://img.cofynd.com/images/latest_images_2024/749bf7db8ff110844101fddae930b3ad447abe6f.webp",
      "https://img.cofynd.com/images/latest_images_2024/101d1a81da08198ff70f89e72497ffa076a0356f.webp",
      "https://img.cofynd.com/images/latest_images_2024/dd862340b62ce2bf0b9af40e07bf50c01182a6a5.webp",
      "https://img.cofynd.com/images/latest_images_2024/883831828a32a4e01e0561f94db703a2b519ea30.webp"
    ]
  },
  {
    "id": 32,
    "name": "CO-Workspace",
    "area": "Bhawarkua",
    "location": "Bhawarkua, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c9cda30d53f4cfcb8b13f05d6ba54143fad2b426.webp",
      "https://img.cofynd.com/images/latest_images_2024/f0586d5089a555475c85eba4fcce60db86e68e16.webp",
      "https://img.cofynd.com/images/latest_images_2024/9cd1696da66532fa354c5cf3c4f392c0056cb8fb.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c1108b7d39bc868465d4152acbb12456c9655b6.webp",
      "https://img.cofynd.com/images/latest_images_2024/b71cc51e2026be38bb68422b581e061f21610bb6.webp"
    ]
  }
];

export const pageTwoIndoreOfficeCards = [
  {
    "id": 33,
    "name": "Nextcoworks Office Space",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/22b6e09dac408e41b0e03d7abc0ca9252ed3ff1a.webp",
      "https://img.cofynd.com/images/latest_images_2024/108db6f0cd414c1c29e69596bc26d91ee7813378.webp",
      "https://img.cofynd.com/images/latest_images_2024/dc9ecb32cee01b64de5c3956b6c43ff873bf7e94.webp",
      "https://img.cofynd.com/images/latest_images_2024/152ad39a82df6068c4ca2320ed6b93c6ed1469d3.webp",
      "https://img.cofynd.com/images/latest_images_2024/8a12c40f29db633122ce7d2a95d588be2094c931.webp",
      "https://img.cofynd.com/images/latest_images_2024/54cbf0b725256b9ae2b880f7e5fa08a905a4cd51.webp",
      "https://img.cofynd.com/images/latest_images_2024/688174d23afefd0674def9142b39cf80e2d7caac.webp"
    ]
  },
  {
    "id": 34,
    "name": "Workdesq Coworking",
    "area": "Mahalaxmi Nagar",
    "location": "Mahalaxmi Nagar, Indore",
    "price": "₹4,200",
    "period": "/ Month",
    "priceFormatted": "₹4,200 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/c3acdfb0071397ea73ebd552b8aea0ee1d47a21e.webp",
      "https://img.cofynd.com/images/latest_images_2024/ff03f114db9ed782d1346b14f7bfd2c3b1230a5b.webp",
      "https://img.cofynd.com/images/latest_images_2024/35711c4a0a20d73a2053d512c63091f0e73c6883.webp",
      "https://img.cofynd.com/images/latest_images_2024/fddadef1c2606631daa0e9e538af70fda2658c68.webp",
      "https://img.cofynd.com/images/latest_images_2024/fecd9b7128c0336e495995298b28c2e50be8fbab.webp",
      "https://img.cofynd.com/images/latest_images_2024/aeae00d0fcda1d8193020483efaa3a3fab306560.webp"
    ]
  },
  {
    "id": 35,
    "name": "ThinkNTap Coworks",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/15751578a49bf67e00ee3c940f881486d3ef767c.webp",
      "https://img.cofynd.com/images/latest_images_2024/de42b4068b50300d6fa7fa8a439ff4fe6bc33f3e.webp",
      "https://img.cofynd.com/images/latest_images_2024/5c572f0b243bcd55718ea2e26ab3d4a528b36257.webp",
      "https://img.cofynd.com/images/latest_images_2024/d41dc37ce23a8ad06ff4d6b45aab7fc4bbecbcd2.webp",
      "https://img.cofynd.com/images/latest_images_2024/1ae7180d916061d4c13e3a8c25ee13966ca3ee98.webp"
    ]
  },
  {
    "id": 36,
    "name": "Flexihub",
    "badge": "Special Offer",
    "rating": 4.9,
    "area": "Bhawarkua",
    "location": "Bhawarkua, Indore",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/b40f2bb0f48a2581e0755bcb43ce053763e88b51.webp",
      "https://img.cofynd.com/images/latest_images_2024/966e87074b63806d64518104af3d7816db424ee4.webp",
      "https://img.cofynd.com/images/latest_images_2024/c41422700426242646f2ec615a3ba475a57dd7e8.webp",
      "https://img.cofynd.com/images/latest_images_2024/360eac5f552171011922d7ae702ed9845cd71933.webp",
      "https://img.cofynd.com/images/latest_images_2024/7dbc49373022c7d2aa0ea4dfb636e421f54e8c62.webp"
    ]
  },
  {
    "id": 37,
    "name": "Space X",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/95107781a749d5e3b7f4f453bcb43d76df674d08.webp",
      "https://img.cofynd.com/images/latest_images_2024/9b578af63c12b0ddfeeae75de134122c17186aa7.webp",
      "https://img.cofynd.com/images/latest_images_2024/128e237e3080b21cd2a2a16443bfddce8a08a663.webp",
      "https://img.cofynd.com/images/latest_images_2024/8a06340d954ec51b655d3753e7854cd7e473d40c.webp",
      "https://img.cofynd.com/images/latest_images_2024/312dbf024f8d65712f7b8ef030f25609d7137caf.webp",
      "https://img.cofynd.com/images/latest_images_2024/8aedb03454f8949bd2aa8e918defef049764415b.webp",
      "https://img.cofynd.com/images/latest_images_2024/40e067129182f8f6e8803e8c4b3a55cf0df9fbef.webp",
      "https://img.cofynd.com/images/latest_images_2024/f3b158bd49ab734e0b24c9244cb72d45a153a361.webp"
    ]
  },
  {
    "id": 38,
    "name": "MyBranch Commerce House",
    "area": "New Palasia",
    "location": "New Palasia, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/2-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Project%20Image/1-1755679189.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/6-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/4-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/7-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/3-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/5-1755679195.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147412/Location/Hou-1755679204.webp"
    ]
  },
  {
    "id": 39,
    "name": "Antares Princes Business Skypark",
    "area": "Scheme 54",
    "location": "Scheme 54, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/1-1755588107.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/2-1755588107.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/3-1755588107.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147299/Location/MAP-1755588120.webp"
    ]
  },
  {
    "id": 40,
    "name": "Workie C21 Business Park",
    "area": "Scheme No 131",
    "location": "Scheme No 131, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147403/Project%20Image/3-1755677831.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147403/Project%20Image/1-1755677831.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147403/Project%20Image/4-1755677831.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147403/Project%20Image/2-1755677831.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147403/Location/MAP-1755677839.webp"
    ]
  }
];

export const pageTwoMoreIndoreOfficeCards = [
  {
    "id": 41,
    "name": "Workie Swastika Urbane",
    "area": "Scheme 54",
    "location": "Scheme 54, Indore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/4-1755678631.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/1-1755678631.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/2-1755678631.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/3-1755678631.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147406/Location/MAP-1755678639.webp"
    ]
  },
  {
    "id": 42,
    "name": "Worksthan Orbit Mall",
    "area": "Scheme 54",
    "location": "Scheme 54, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/4-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/2-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/9-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/1-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/3-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/5-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/6-1755756161.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/7-1755756161.webp"
    ]
  },
  {
    "id": 43,
    "name": "Workie Sewani Corporate House",
    "area": "New Palasia",
    "location": "New Palasia, Indore",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/6-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/5-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/2-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/4-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/3-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/1-1755678156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147405/Location/MAP-1755678166.webp"
    ]
  },
  {
    "id": 44,
    "name": "The Address BPK Titanium",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/life-1-1755509035.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/00-1755509047.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/000-1755509047.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147180/Location/life-Map-1755509070.webp"
    ]
  },
  {
    "id": 45,
    "name": "BCM Zodiac Co-Working",
    "area": "Mahalaxmi Nagar",
    "location": "Mahalaxmi Nagar, Indore",
    "price": "₹10,000",
    "period": "/ Month",
    "priceFormatted": "₹10,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/6-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/14-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/4-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/2-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/8-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/1-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/3-1755588287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/10-1755588287.webp"
    ]
  },
  {
    "id": 46,
    "name": "United Spaces Virendra Heights",
    "area": "New Palasia",
    "location": "New Palasia, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/1-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/8-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/3-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/2-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/4-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/5-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/6-1755759163.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/7-1755759163.webp"
    ]
  },
  {
    "id": 47,
    "name": "ThinkNTap Shekhar Central",
    "area": "Manorama Ganj",
    "location": "Manorama Ganj, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/7-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/1-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/3-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/4-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/5-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/2-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Project%20Image/6-1755759093.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147506/Location/MAP-1755759104.webp"
    ]
  },
  {
    "id": 48,
    "name": "Workviaa Corporate House",
    "area": "South Tukoganj",
    "location": "South Tukoganj, Indore",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/3-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/6-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/1-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/2-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/4-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/5-1755759424.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147509/Location/MAP-1755759433.webp"
    ]
  }
];

export const pageTwoFinalIndoreOfficeCards = [
  {
    "id": 49,
    "name": "Fusion Co-Space Classic Gold",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/1-1755764680.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/2-1755764680.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/3-1755764680.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147517/Location/MAP-1755764686.webp"
    ]
  },
  {
    "id": 50,
    "name": "Flexi Business Hub Atulya IT Park",
    "area": "Pipliyahana",
    "location": "Pipliyahana, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/3-1755764663.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/2-1755764663.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/1-1755764663.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147516/Location/MAP-1755764669.webp"
    ]
  },
  {
    "id": 51,
    "name": "SCI Co Works The Collab",
    "area": "Pipliyahana",
    "location": "Pipliyahana, Indore",
    "price": "₹8,500",
    "period": "/ Month",
    "priceFormatted": "₹8,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/3-1755764893.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/1-1755764893.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/4-1755764893.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147523/Location/MAP-1755764902.webp"
    ]
  },
  {
    "id": 52,
    "name": "S.PACE Co Working",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/2-1755764872.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/1-1755764872.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/4-1755764872.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/3-1755764872.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147522/Location/MAP-1755764881.webp"
    ]
  },
  {
    "id": 53,
    "name": "My Stay Spaces Vishal Cube",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/3-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/1-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/13-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/4-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/2-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/7-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/10-1755764807.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/11-1755764807.webp"
    ]
  },
  {
    "id": 54,
    "name": "The Dice Skye Corporate Park",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/7-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/2-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/3-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/1-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/4-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/5-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/6-1755670675.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147393/Location/MAP-1755670690.webp"
    ]
  },
  {
    "id": 55,
    "name": "The Dice Apollo premier",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹12,800",
    "period": "/ Month",
    "priceFormatted": "₹12,800 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/2-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/6-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/1-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/5-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/3-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/4-1755670650.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147392/Location/MAp-1755670659.webp"
    ]
  },
  {
    "id": 56,
    "name": "Sky Space PU4",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/2-1755670599.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/1-1755670599.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/4-1755670599.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/3-1755670599.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147391/Location/MAP-1755670607.webp"
    ]
  }
];

export const pageTwoFeaturedIndoreOfficeCards = [
  {
    "id": 57,
    "name": "Sky Space Premium",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹7,500",
    "period": "/ Month",
    "priceFormatted": "₹7,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/2-1755670560.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/5-1755670560.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/3-1755670560.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/4-1755670560.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/1-1755670560.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147390/Location/MAP-1755670580.webp"
    ]
  },
  {
    "id": 58,
    "name": "Sky Space Brilliant Platina",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,500",
    "period": "/ Month",
    "priceFormatted": "₹6,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/4-1755670540.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/5-1755670540.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/1-1755670540.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/3-1755670540.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/2-1755670540.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147389/Location/MAP-1755670548.webp"
    ]
  },
  {
    "id": 59,
    "name": "Coworking Krishna Business Centre",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹7,000",
    "period": "/ Month",
    "priceFormatted": "₹7,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/3-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/1-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/2-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/5-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/4-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/6-1755668072.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147385/Location/MAP-1755668086.webp"
    ]
  },
  {
    "id": 60,
    "name": "Workie Apollo Premier",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/8-1755677513.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/3-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/2-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/1-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/5-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/4-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/6-1755677351.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/7-1755677351.webp"
    ]
  },
  {
    "id": 61,
    "name": "Spacetime The Hub",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/4-1755674949.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/5-1755674949.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/2-1755674949.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/3-1755674949.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/1-1755674949.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147400/Location/MAP-1755674957.webp"
    ]
  },
  {
    "id": 62,
    "name": "Workie Tower SP 365 Building",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/2-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/3-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/10-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/1-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/4-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/5-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/7-1755678904.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/9-1755678904.webp"
    ]
  },
  {
    "id": 63,
    "name": "Regus Unity One",
    "area": "Sarvanad Nagar",
    "location": "Sarvanad Nagar, Indore",
    "price": "₹7,790",
    "period": "/ Month",
    "priceFormatted": "₹7,790 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/1-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/8-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/2-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/3-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/5-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/6-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/4-1755595360.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147328/Project%20Image/7-1755595360.webp"
    ]
  },
  {
    "id": 64,
    "name": "Regus DNR 90",
    "area": "South Tukoganj",
    "location": "South Tukoganj, Indore",
    "price": "₹10,100",
    "period": "/ Month",
    "priceFormatted": "₹10,100 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/3-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/8-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/6-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/4-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/7-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/5-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/2-1755594920.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147325/Location/MAP-1755594933.webp"
    ]
  }
];

export const pageThreeIndoreOfficeCards = [
  {
    "id": 65,
    "name": "Regus Honda BigWing",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,590",
    "period": "/ Month",
    "priceFormatted": "₹8,590 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/2-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/1-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/3-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/6-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/4-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/5-1755595050.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147326/Location/MAP-1755595059.webp"
    ]
  },
  {
    "id": 66,
    "name": "Regus Maloo 1",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹9,200",
    "period": "/ Month",
    "priceFormatted": "₹9,200 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/1-1755595156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/5-1755595156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/2-1755595156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/3-1755595156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/4-1755595156.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147327/Location/MAP-1755595166.webp"
    ]
  },
  {
    "id": 67,
    "name": "Nexus Manas Mayfair",
    "area": "South Tukoganj",
    "location": "South Tukoganj, Indore",
    "price": "₹12,000",
    "period": "/ Month",
    "priceFormatted": "₹12,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/2-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/8-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/3-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/1-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/4-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/7-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/5-1755597636.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/6-1755597636.webp"
    ]
  },
  {
    "id": 68,
    "name": "Ardor Edge Shagun Arcade",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹8,000",
    "period": "/ Month",
    "priceFormatted": "₹8,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/1-1755588189.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/3-1755588189.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/4-1755588189.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/2-1755588189.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/147300/Location/MAP-1755588199.webp"
    ]
  },
  {
    "id": 69,
    "name": "Smartwork Brilliant Centre",
    "area": "New Palasia",
    "location": "New Palasia, Indore",
    "price": "₹6,000",
    "period": "/ Month",
    "priceFormatted": "₹6,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/1-1754223302.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Project%20Image/5-1754223287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Project%20Image/6-1754223287.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/4-1754223302.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/7-1754223302.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/2-1754223302.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/3-1754223302.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145524/Location/Hou-1754223317.webp"
    ]
  },
  {
    "id": 70,
    "name": "Awfis Brilliant Sapphire 2",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹12,500",
    "period": "/ Month",
    "priceFormatted": "₹12,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/2-1754201871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/3-1754201871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/4-1754201871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/1-1754201871.webp",
      "https://imgcdn.houssed.com/assets/Files/Projects/145373/Location/MAP-1754201880.webp"
    ]
  }
];

export const pageThreeMoreIndoreOfficeCards = [];

export const pageThreeFinalIndoreOfficeCards = [];

export const pageThreeFeaturedIndoreOfficeCards = [];

export const pageFourIndoreOfficeCards = [];

export const pageFourMoreIndoreOfficeCards = [];

export const pageFourFinalIndoreOfficeCards = [];

export const pageFourFeaturedIndoreOfficeCards = [];

export const perfectWorkspaceBanner = {
  "title": "Discover your perfect workspace with Mycoworking",
  "subtitle": "Explore Flexible Coworking Solutions, Premium Amenities, and Prime Locations Across India",
  "ctaText": "Enquire Now",
  "bgImage": "https://img.cofynd.com/images/latest_images_2024/28f41de2ee6c67528d528dc3b55fc7ad2801dcbc.webp"
};

export const customizedOfficeBanner = {
  "title": "Customized office solutions for your team",
  "features": [
    { "id": 1, "text": "Customized Office Spaces" },
    { "id": 2, "text": "Prime Locations" },
    { "id": 3, "text": "Free Guided Tours" },
    { "id": 4, "text": "Perfect for 50+ Team Size" }
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
  "totalPages": 3,
  "initialPage": 1
};

// All spaces listed under each area (used by the area filter pills)
export const areaExtraOfficeCards = {
  "AB Road": [
    {
      "id": 3,
      "name": "Incuspaze Princes Business Skyline",
      "rating": 4.5,
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3d951919efd3a31194f66951440dc9f301fcc53c.jpg",
        "https://img.cofynd.com/images/original/1552dc2b639d5266606b16784fda7a87c9d17a22.jpg",
        "https://img.cofynd.com/images/original/dc0dfeb1aa0d6403f6a2049fa7113c145b81a022.jpg",
        "https://img.cofynd.com/images/original/e66871836b68bf4ac79120096a87777ac47f8ef3.jpg",
        "https://img.cofynd.com/images/original/5fb20a658639188bf735d7a826209c0c566b4ef4.jpg"
      ]
    },
    {
      "id": 5,
      "name": "Incuspaze Metro Tower",
      "rating": 4.5,
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹5,499",
      "period": "/ Month",
      "priceFormatted": "₹5,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9a77947d04ddacf2731007500e2bdec2dbcfe336.jpg",
        "https://img.cofynd.com/images/original/eff3a147c3f212107aa125870e63e1cbc2e18c82.jpg",
        "https://img.cofynd.com/images/original/13f660e0dc2f4f0b39a960da9eac1ff891db4827.jpg",
        "https://img.cofynd.com/images/original/dae1b62039a3d1fd72aa320a9cba7e9751dc8196.jpg",
        "https://img.cofynd.com/images/original/86e3add5caf136da865a4ad6a9b56d5c54189da0.jpg"
      ]
    },
    {
      "id": 6,
      "name": "Adited Coworking 1.0",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/79cb04ff48a91c1039479a6433cdcda04477a3c9.jpg",
        "https://img.cofynd.com/images/original/f7cd616f5056b7a8144547f1e92fed4a384a3880.jpg",
        "https://img.cofynd.com/images/original/9f08d9e480403ec85cf9dd6e39aa83cc7e26b6ed.jpg",
        "https://img.cofynd.com/images/original/4ce4627285e42ed36a2b39db6d91eb70df100eef.jpg",
        "https://img.cofynd.com/images/original/879d988cbfa9d8c06f0b642fba72f305e64bd966.jpg"
      ]
    },
    {
      "id": 12,
      "name": "Worksthan",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹4,500",
      "period": "/ Month",
      "priceFormatted": "₹4,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/5cacf83dfb43b7eb6882f6271898b0e05eead724.jpg",
        "https://img.cofynd.com/images/original/41f2e5c9415d01433c3d52a4fa9f67d91449e898.jpg",
        "https://img.cofynd.com/images/original/4afcfaaa496f358bb872ae640eb3f896936b35c8.jpg",
        "https://img.cofynd.com/images/original/3f9eaed03a6a4e02ac74c47c2efe46d434a0b3a4.jpg",
        "https://img.cofynd.com/images/original/2839e3922f335a66aaecfe90e585bb087ca61ac0.jpg",
        "https://img.cofynd.com/images/original/81e560d0040e6e91df4ab7f5543bb6c87f7985d4.jpg",
        "https://img.cofynd.com/images/original/4ede9b640ca3286410d4724f71044ade4ad7a175.jpg"
      ]
    },
    {
      "id": 14,
      "name": "The Dice",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹5,999",
      "period": "/ Month",
      "priceFormatted": "₹5,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/24fd3539a991b91614d9181fe9e5becacfd3e2f9.jpg",
        "https://img.cofynd.com/images/original/13b08d83775f884234c0bf83438d99b879d91c6c.jpg",
        "https://img.cofynd.com/images/original/c99637e14b70bb90eb23e69a9e668aa6e44a386f.jpg",
        "https://img.cofynd.com/images/original/954b965757f1a994841ddad28f96331ef70a32a6.jpg",
        "https://img.cofynd.com/images/latest_images_2024/b67ba48e25c4388206cd44d3d52ebe8d021d19ff.webp",
        "https://img.cofynd.com/images/latest_images_2024/23b8e938bdc54f6ac4b1fd9ad9af7ca8e2302a32.webp",
        "https://img.cofynd.com/images/latest_images_2024/808a31deb57baf20d09f5dbaafd37f52f20c37e9.webp",
        "https://img.cofynd.com/images/latest_images_2024/26c8ecb1f7190b14f846475ca1ddbd7044c8294c.webp"
      ]
    },
    {
      "id": 17,
      "name": "Nexus Spaces AB Road",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e3535be480db4c0c4dc89131e5e255fb419bf6dd.jpg",
        "https://img.cofynd.com/images/original/176e405a071100cfd07f2778392d2f6595996b2e.jpg",
        "https://img.cofynd.com/images/original/ac1662631043ed88ca9aba83053aec22ecb7b236.jpg",
        "https://img.cofynd.com/images/original/9d5725d27d12410a8a3e065649dbae21cf671fb1.jpg",
        "https://img.cofynd.com/images/original/824a553195bdf5f968453cf7ab1fb15d715abd42.jpg"
      ]
    },
    {
      "id": 25,
      "name": "Stark Spaces",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹9,999",
      "period": "/ Month",
      "priceFormatted": "₹9,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/76d6b5128985a640d2d8637a3e4a1615f30b48bf.webp",
        "https://img.cofynd.com/images/latest_images_2024/db77ba0d94a8174bcc160cdcf9130242d34e1981.webp",
        "https://img.cofynd.com/images/latest_images_2024/319b11c04282bbd409a975af46370ae5ab4e469a.webp",
        "https://img.cofynd.com/images/latest_images_2024/9971f7f6efbdb6c1c9e076c8a7832e8a7d1f9125.webp",
        "https://img.cofynd.com/images/latest_images_2024/a8f5c8b1055b0f8073eb69b0f96c2ccc5526c13b.webp"
      ]
    },
    {
      "id": 35,
      "name": "ThinkNTap Coworks",
      "area": "AB Road",
      "location": "AB Road, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/15751578a49bf67e00ee3c940f881486d3ef767c.webp",
        "https://img.cofynd.com/images/latest_images_2024/de42b4068b50300d6fa7fa8a439ff4fe6bc33f3e.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c572f0b243bcd55718ea2e26ab3d4a528b36257.webp",
        "https://img.cofynd.com/images/latest_images_2024/d41dc37ce23a8ad06ff4d6b45aab7fc4bbecbcd2.webp",
        "https://img.cofynd.com/images/latest_images_2024/1ae7180d916061d4c13e3a8c25ee13966ca3ee98.webp"
      ]
    }
  ],
  "LIC Colony": [],
  "Ratna Lok Colony": [],
  "Ravindra Nagar": [],
  "South Tukoganj": [
    {
      "id": 18,
      "name": "Nexus Spaces South Tukoganj",
      "area": "South Tukoganj",
      "location": "South Tukoganj, Indore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/6a4736f86d95a33b7e57f91fa806db10dfff54b2.jpg",
        "https://img.cofynd.com/images/original/bb199d50402f34e04ef1dad0f50e8e6cab4eee85.jpg",
        "https://img.cofynd.com/images/original/74384690fa00e36e41f36c84d86bd20cd8bffda3.jpg",
        "https://img.cofynd.com/images/original/9fb7d8a3f3820b223f440cfb14ecd512e6f4a6b5.jpg",
        "https://img.cofynd.com/images/original/4e8141c3c189c83996c9e685799d5654ee6b6f96.jpg"
      ]
    },
    {
      "id": 48,
      "name": "Workviaa Corporate House",
      "area": "South Tukoganj",
      "location": "South Tukoganj, Indore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/3-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/6-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/1-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/2-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/4-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Project%20Image/5-1755759424.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147509/Location/MAP-1755759433.webp"
      ]
    },
    {
      "id": 64,
      "name": "Regus DNR 90",
      "area": "South Tukoganj",
      "location": "South Tukoganj, Indore",
      "price": "₹10,100",
      "period": "/ Month",
      "priceFormatted": "₹10,100 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/3-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/8-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/6-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/4-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/7-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/5-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Project%20Image/2-1755594920.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147325/Location/MAP-1755594933.webp"
      ]
    },
    {
      "id": 67,
      "name": "Nexus Manas Mayfair",
      "area": "South Tukoganj",
      "location": "South Tukoganj, Indore",
      "price": "₹12,000",
      "period": "/ Month",
      "priceFormatted": "₹12,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/2-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/8-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/3-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/1-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/4-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/7-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/5-1755597636.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147335/Project%20Image/6-1755597636.webp"
      ]
    }
  ],
  "Vijay Nagar": [
    {
      "id": 1,
      "name": "Nextcoworks",
      "badge": "Premium Coworking",
      "rating": 4.8,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/cebdaa16c044508e7616f5a0f463c78244522044.webp",
        "https://img.cofynd.com/images/latest_images_2024/bca89c4cd39ac0dbca23ec5cc0754a822b54bb8a.webp",
        "https://img.cofynd.com/images/latest_images_2024/f05d0c2eac60a690a8b9f2dc3b1ceb9ac41c40c9.webp",
        "https://img.cofynd.com/images/latest_images_2024/b1544faff4dd3dc2f7a7b5ec7e425d59e5a19c59.webp",
        "https://img.cofynd.com/images/latest_images_2024/8612338f4f05bfb868bb96a679374be25bf7f5a6.webp",
        "https://img.cofynd.com/images/latest_images_2024/01bd993a3005a307e1b3f90d193756ef05b1f849.webp",
        "https://img.cofynd.com/images/latest_images_2024/278137df85e651aa2c9d4405e2788704a358bfba.webp",
        "https://img.cofynd.com/images/latest_images_2024/02aa649f2ef0f3500e8d6137bdc5503ce6514f6e.webp"
      ]
    },
    {
      "id": 2,
      "name": "Incuspaze Apollo",
      "rating": 4.5,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "On Request",
      "period": "",
      "priceFormatted": "On Request",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e85426ce071a8de598c3d0e7f16adb4aaf056d13.jpg",
        "https://img.cofynd.com/images/original/b1702e02cba6a7e8244a54e0e6a58acba5004923.jpg",
        "https://img.cofynd.com/images/original/c0f1c5ff530c8616ebe2bb2265c6e3f8cf2b3a0f.jpg",
        "https://img.cofynd.com/images/original/e6915cb5e08196700dc39f8a265ceb84636852c9.jpg",
        "https://img.cofynd.com/images/original/ea807ca73f1f0f8884b96193b289c18203100335.jpg",
        "https://img.cofynd.com/images/original/cd4b42f3b4627f5815f179f965b74e331a239d45.jpg"
      ]
    },
    {
      "id": 4,
      "name": "Incuspaze Brilliant Platina",
      "rating": 4.5,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e3968f9d719e9f59b3bf5e8037ac1df3329da2bd.jpg",
        "https://img.cofynd.com/images/original/c177625b3ebd7cb710215421b77fa4290a5ed767.jpg",
        "https://img.cofynd.com/images/original/55edf08ec595b25d532da9d94c8885b646354827.jpg",
        "https://img.cofynd.com/images/original/3382a8ad450944e08c6f4de01afef1a6ed18e3da.jpg",
        "https://img.cofynd.com/images/original/eb6127274f92a2e24b2fc67d6f5088e5acc37e18.jpg"
      ]
    },
    {
      "id": 7,
      "name": "Work Jar Coworking",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/9a2e0d80c47371515102ecb7543f1f8af58338bd.jpg",
        "https://img.cofynd.com/images/original/8cfbda62db1c0caf549ff88d58e1dc3d8356e54b.jpg",
        "https://img.cofynd.com/images/original/1fe04de035e19a40a619a2d2b50d73dff32799cb.jpg",
        "https://img.cofynd.com/images/original/73de0375d6f4a9e7442f882d4796ef61fe715877.jpg",
        "https://img.cofynd.com/images/original/fb98cb1cc76929a02d716afd27141f049dc1b291.jpg"
      ]
    },
    {
      "id": 8,
      "name": "Workvistar",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/23b80d614693142dc6d27fb9ea739f859db8f606.jpg",
        "https://img.cofynd.com/images/original/a49863cb704c9ceae3621b8eeca709bdf877332f.jpg",
        "https://img.cofynd.com/images/original/3477017057f76f8663d89becec31a5a0d27de91a.jpg",
        "https://img.cofynd.com/images/original/25e5a08900fa08baf0b3f6efe6dd6c65214ac2c6.jpg",
        "https://img.cofynd.com/images/original/8da57b82c475ef368e3841e6348666db5a32b28a.jpg"
      ]
    },
    {
      "id": 9,
      "name": "YBox.Work",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹4,500",
      "period": "/ Month",
      "priceFormatted": "₹4,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/aa61999951aef590967b8d33e36003d17e7e9f29.jpg",
        "https://img.cofynd.com/images/original/af0c60b9f1c51eb83388accb47116e17d883bbdb.jpg",
        "https://img.cofynd.com/images/original/15dabfe40d580efdb9a3b73e0636c75392a475a9.jpg",
        "https://img.cofynd.com/images/original/13d776ca793563b51faeb11e043d6a3e23258124.jpg",
        "https://img.cofynd.com/images/original/a68c3a0daa1c22ad5cb5d57f549378f492389087.jpg"
      ]
    },
    {
      "id": 10,
      "name": "Virtual Coworks",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹4,000",
      "period": "/ Month",
      "priceFormatted": "₹4,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/8c1c9d98567dcf4c1da0ab14fc5e01c026f087b4.jpg",
        "https://img.cofynd.com/images/original/5e988e80868c0669fe8f53b30c039c77032f6729.jpg",
        "https://img.cofynd.com/images/original/4dc86cb26f63a5e11e05d3c6f0cee65578db71b9.jpg",
        "https://img.cofynd.com/images/original/54afe209bd127f83a6b63f4dd245e59ba198f128.jpg",
        "https://img.cofynd.com/images/original/0eb993cdbd015561ceb31bf68a300ed50c55a858.jpg"
      ]
    },
    {
      "id": 11,
      "name": "Paskola",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹3,000",
      "period": "/ Month",
      "priceFormatted": "₹3,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/30bf54f4089ccebbe5a8f7fb0350eea9294e5a82.jpg",
        "https://img.cofynd.com/images/original/091d32b4aa85620821b459d888f58160b87869cf.jpg",
        "https://img.cofynd.com/images/original/b71f7da315b2bd61063e4a857d77eef387df013b.jpg",
        "https://img.cofynd.com/images/original/0bbf5113faba1ce7ac27cff952682248ea43202a.jpg",
        "https://img.cofynd.com/images/original/dc6b6880031dbdc49fbb45ad5994f989f805b824.jpg"
      ]
    },
    {
      "id": 13,
      "name": "BIZZI.B",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/76753b23784a9fbd545de2fd0b25ef1ef6d26eec.jpg",
        "https://img.cofynd.com/images/original/05ea243041381e0d778476c38d8bdd321e355660.jpg",
        "https://img.cofynd.com/images/original/e80920911c998b981e8baabf2369ab12a018f49f.jpg",
        "https://img.cofynd.com/images/original/39eaff45f769343292f95435a515200d0d7dd848.jpg",
        "https://img.cofynd.com/images/original/a2896cfa258eb38841b981b44e52d62410daadb7.jpg"
      ]
    },
    {
      "id": 15,
      "name": "SPADIFY CO-WORK",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹3,000",
      "period": "/ Month",
      "priceFormatted": "₹3,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/3d5c026bc421052fbe97c93091abd8d3a0b2d1af.jpg",
        "https://img.cofynd.com/images/original/d6e074dfd8583ea6f1e23783ce992d8aae51a046.jpg",
        "https://img.cofynd.com/images/original/45aed836c07117cd035531d2637e37b5885a0434.jpg",
        "https://img.cofynd.com/images/original/0c210e3acd03d73ae36640118d4e64b80376840a.jpg",
        "https://img.cofynd.com/images/original/190cbed81663f01b565c949d20ea77ef158e7f4d.jpg"
      ]
    },
    {
      "id": 16,
      "name": "Cliffton Corporate",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹10,000",
      "period": "/ Month",
      "priceFormatted": "₹10,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2e08593fbdc5e7364bd9993bcc2a0f06ddc22bdb.jpg",
        "https://img.cofynd.com/images/original/8aa14aaff8e342b5fbef870e3c8621e4216d5ac2.jpg",
        "https://img.cofynd.com/images/original/f4e595f9c6aa0aa51177d35f65ff27ee70ca2dc1.jpg",
        "https://img.cofynd.com/images/original/5b3dadca5532aa9a594b5b7422aef4a42fe9ac0e.jpg",
        "https://img.cofynd.com/images/original/1f5ea692f3b860cceeb78de9257acbf0d1e39379.jpg",
        "https://img.cofynd.com/images/original/f58695c55b1f8f490f7b02653bdef0453045bb3e.jpg",
        "https://img.cofynd.com/images/original/24b4740a313da435887ff387c8273f41ae4b724b.jpg"
      ]
    },
    {
      "id": 19,
      "name": "The Address - Your Destination of Growth Indore",
      "rating": 4.6,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/2e9fec93159bdae59bf162164bbc6f28b58e801d.jpg",
        "https://img.cofynd.com/images/original/b08b6d8e96babb9f2addde2375eb243f96482ca2.jpg",
        "https://img.cofynd.com/images/original/967b7ad5eaf4b7437386a714eafafd2b66264331.jpg",
        "https://img.cofynd.com/images/original/e868ca754a3d772277d52f8ac64e8c4b67460438.jpg",
        "https://img.cofynd.com/images/original/aba8baa1b109a820ee9ec1d0338fc3a50abe5aed.jpg",
        "https://img.cofynd.com/images/original/dad736cea1cdf73a2e865fd2d865148ca93bac50.jpg"
      ]
    },
    {
      "id": 21,
      "name": "Zero Gravito",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7339db9a9927336d238bd05500c5bf9133819992.jpg",
        "https://img.cofynd.com/images/original/54a99bba1c5fd0b6da54b2e2c9f5ed74ac65779f.jpg",
        "https://img.cofynd.com/images/original/972b2eeed2250f4806134b4fc8c3ceecddf69d62.jpg",
        "https://img.cofynd.com/images/original/e0b98cad7e7bbc82091a47301b69493a73235992.jpg",
        "https://img.cofynd.com/images/original/c761d729204074bafb4304e296631e3a5935a71e.jpg"
      ]
    },
    {
      "id": 24,
      "name": "Workbox",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/b744d4e7674732f085d32142291f7221f3d31816.jpg",
        "https://img.cofynd.com/images/original/7a1d3e7c164c3a49b3c645e5b68da5d800f13129.jpg",
        "https://img.cofynd.com/images/original/ca421a13a7982aa8fda25ee5b08ae3f948e8a1af.jpg",
        "https://img.cofynd.com/images/original/5fdd3a1ab4cb02d08cb9d73bf7bacff445419a7c.jpg",
        "https://img.cofynd.com/images/original/07bce204fef177adc23e76bf1030e37b443a1812.jpg",
        "https://img.cofynd.com/images/original/5abacbdcd580d8461a5ac0927ff591fa9632fbba.jpg",
        "https://img.cofynd.com/images/original/67ffcf0c6fbb56d5a3549aa81efbde0105ea5a56.jpg",
        "https://img.cofynd.com/images/original/78760e5acf688fdae5f883521077ebff6c55ea88.jpg"
      ]
    },
    {
      "id": 27,
      "name": "Incuspaze Apollo Premier",
      "rating": 4.5,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/ef8feed8b88cc44afd387725c80f684b2035b795.webp",
        "https://img.cofynd.com/images/latest_images_2024/a37dffce2b4ca3917bf255363fcdc0e75b67f408.webp",
        "https://img.cofynd.com/images/latest_images_2024/92162816cabe67c6d422dde82fff4d6d3141d2ef.webp",
        "https://img.cofynd.com/images/latest_images_2024/8998c0a55e955c6371c74c4f938f3af58d1936c7.webp",
        "https://img.cofynd.com/images/latest_images_2024/707e61c16a7b0c2f2e1bf4fb01c612e5ebbdac69.webp",
        "https://img.cofynd.com/images/latest_images_2024/de8839d8d6ba521cc5c1c8c55a021da09e44fc41.webp",
        "https://img.cofynd.com/images/latest_images_2024/b6ec28473841e201e8ef1f2dbd2caa20deab8ab1.webp",
        "https://img.cofynd.com/images/latest_images_2024/3d6bf2daebc5e10e1d6eb4ad218d0521b0e6d832.webp"
      ]
    },
    {
      "id": 28,
      "name": "Incuspaze Princess Business Skyline",
      "rating": 4.5,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/e5d1846fd3bb5a86a2ff000aa3dabbd9f6d8c218.webp",
        "https://img.cofynd.com/images/latest_images_2024/fd0e0dc9c2c281e4e2143227d47fd64f1d14ce46.webp",
        "https://img.cofynd.com/images/latest_images_2024/26d47cc32c416fd5690d966c86f736f67046efdc.webp",
        "https://img.cofynd.com/images/latest_images_2024/b334b8ce20269fd27d040da09bcb8d21e60ff2bd.webp",
        "https://img.cofynd.com/images/latest_images_2024/eec08593a2b3aac51ebec18e9fcaba02ccd36092.webp",
        "https://img.cofynd.com/images/latest_images_2024/4cfc051d330040010a8f12975fbb229304d043f4.webp"
      ]
    },
    {
      "id": 29,
      "name": "Estancia Pro working space",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹4,300",
      "period": "/ Month",
      "priceFormatted": "₹4,300 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/09d5036e241e7ffe485edff901f88990937d1254.webp",
        "https://img.cofynd.com/images/latest_images_2024/82e3e66e817094ea8fcaca926f02302e08567aae.webp",
        "https://img.cofynd.com/images/latest_images_2024/d459b55a649e11e743f8303e9fcfac95004d9b1a.webp",
        "https://img.cofynd.com/images/latest_images_2024/25448d76ddfb308c13f2dbe2ae32b43c6c62751f.webp",
        "https://img.cofynd.com/images/latest_images_2024/c10685c8fad71be061a91b1fc153c9de7b3bed90.webp"
      ]
    },
    {
      "id": 30,
      "name": "Awfis Winway World Offices",
      "rating": 4.8,
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹9,000",
      "period": "/ Month",
      "priceFormatted": "₹9,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/60d3efd24750334eff7ef781576633b50d7551bc.webp",
        "https://img.cofynd.com/images/latest_images_2024/ac969ab82af331f38f6153233bc36364635a3717.webp",
        "https://img.cofynd.com/images/latest_images_2024/c599d25de0ed90a243bf744af0f8725d4e85ca2b.webp",
        "https://img.cofynd.com/images/latest_images_2024/1e8ce9d38b82e4732dfcb5cf477bded6fb9ccb9c.webp",
        "https://img.cofynd.com/images/latest_images_2024/f99ea1b48a716b7bd56991d706f224d27e57236c.webp",
        "https://img.cofynd.com/images/latest_images_2024/99a1a17f90d3e96ab2e64461eb43c75f3d998e67.webp"
      ]
    },
    {
      "id": 33,
      "name": "Nextcoworks Office Space",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/22b6e09dac408e41b0e03d7abc0ca9252ed3ff1a.webp",
        "https://img.cofynd.com/images/latest_images_2024/108db6f0cd414c1c29e69596bc26d91ee7813378.webp",
        "https://img.cofynd.com/images/latest_images_2024/dc9ecb32cee01b64de5c3956b6c43ff873bf7e94.webp",
        "https://img.cofynd.com/images/latest_images_2024/152ad39a82df6068c4ca2320ed6b93c6ed1469d3.webp",
        "https://img.cofynd.com/images/latest_images_2024/8a12c40f29db633122ce7d2a95d588be2094c931.webp",
        "https://img.cofynd.com/images/latest_images_2024/54cbf0b725256b9ae2b880f7e5fa08a905a4cd51.webp",
        "https://img.cofynd.com/images/latest_images_2024/688174d23afefd0674def9142b39cf80e2d7caac.webp"
      ]
    },
    {
      "id": 37,
      "name": "Space X",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/95107781a749d5e3b7f4f453bcb43d76df674d08.webp",
        "https://img.cofynd.com/images/latest_images_2024/9b578af63c12b0ddfeeae75de134122c17186aa7.webp",
        "https://img.cofynd.com/images/latest_images_2024/128e237e3080b21cd2a2a16443bfddce8a08a663.webp",
        "https://img.cofynd.com/images/latest_images_2024/8a06340d954ec51b655d3753e7854cd7e473d40c.webp",
        "https://img.cofynd.com/images/latest_images_2024/312dbf024f8d65712f7b8ef030f25609d7137caf.webp",
        "https://img.cofynd.com/images/latest_images_2024/8aedb03454f8949bd2aa8e918defef049764415b.webp",
        "https://img.cofynd.com/images/latest_images_2024/40e067129182f8f6e8803e8c4b3a55cf0df9fbef.webp",
        "https://img.cofynd.com/images/latest_images_2024/f3b158bd49ab734e0b24c9244cb72d45a153a361.webp"
      ]
    },
    {
      "id": 44,
      "name": "The Address BPK Titanium",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,500",
      "period": "/ Month",
      "priceFormatted": "₹5,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/life-1-1755509035.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/00-1755509047.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147180/Sample%20Apartment/000-1755509047.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147180/Location/life-Map-1755509070.webp"
      ]
    },
    {
      "id": 49,
      "name": "Fusion Co-Space Classic Gold",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹5,000",
      "period": "/ Month",
      "priceFormatted": "₹5,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/1-1755764680.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/2-1755764680.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147517/Project%20Image/3-1755764680.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147517/Location/MAP-1755764686.webp"
      ]
    },
    {
      "id": 52,
      "name": "S.PACE Co Working",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/2-1755764872.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/1-1755764872.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/4-1755764872.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147522/Project%20Image/3-1755764872.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147522/Location/MAP-1755764881.webp"
      ]
    },
    {
      "id": 53,
      "name": "My Stay Spaces Vishal Cube",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/3-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/1-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/13-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/4-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/2-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/7-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/10-1755764807.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147520/Project%20Image/11-1755764807.webp"
      ]
    },
    {
      "id": 54,
      "name": "The Dice Skye Corporate Park",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/7-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/2-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/3-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/1-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/4-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/5-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Project%20Image/6-1755670675.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147393/Location/MAP-1755670690.webp"
      ]
    },
    {
      "id": 55,
      "name": "The Dice Apollo premier",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹12,800",
      "period": "/ Month",
      "priceFormatted": "₹12,800 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/2-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/6-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/1-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/5-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/3-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Project%20Image/4-1755670650.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147392/Location/MAp-1755670659.webp"
      ]
    },
    {
      "id": 56,
      "name": "Sky Space PU4",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/2-1755670599.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/1-1755670599.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/4-1755670599.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147391/Project%20Image/3-1755670599.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147391/Location/MAP-1755670607.webp"
      ]
    },
    {
      "id": 57,
      "name": "Sky Space Premium",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹7,500",
      "period": "/ Month",
      "priceFormatted": "₹7,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/2-1755670560.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/5-1755670560.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/3-1755670560.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/4-1755670560.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Project%20Image/1-1755670560.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147390/Location/MAP-1755670580.webp"
      ]
    },
    {
      "id": 58,
      "name": "Sky Space Brilliant Platina",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/4-1755670540.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/5-1755670540.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/1-1755670540.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/3-1755670540.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Project%20Image/2-1755670540.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147389/Location/MAP-1755670548.webp"
      ]
    },
    {
      "id": 59,
      "name": "Coworking Krishna Business Centre",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/3-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/1-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/2-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/5-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/4-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Project%20Image/6-1755668072.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147385/Location/MAP-1755668086.webp"
      ]
    },
    {
      "id": 60,
      "name": "Workie Apollo Premier",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/8-1755677513.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/3-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/2-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/1-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/5-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/4-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/6-1755677351.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147402/Project%20Image/7-1755677351.webp"
      ]
    },
    {
      "id": 61,
      "name": "Spacetime The Hub",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/4-1755674949.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/5-1755674949.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/2-1755674949.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/3-1755674949.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Project%20Image/1-1755674949.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147400/Location/MAP-1755674957.webp"
      ]
    },
    {
      "id": 62,
      "name": "Workie Tower SP 365 Building",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/2-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/3-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/10-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/1-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/4-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/5-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/7-1755678904.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147408/Project%20Image/9-1755678904.webp"
      ]
    },
    {
      "id": 65,
      "name": "Regus Honda BigWing",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,590",
      "period": "/ Month",
      "priceFormatted": "₹8,590 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/2-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/1-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/3-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/6-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/4-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Project%20Image/5-1755595050.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147326/Location/MAP-1755595059.webp"
      ]
    },
    {
      "id": 66,
      "name": "Regus Maloo 1",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹9,200",
      "period": "/ Month",
      "priceFormatted": "₹9,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/1-1755595156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/5-1755595156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/2-1755595156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/3-1755595156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Project%20Image/4-1755595156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147327/Location/MAP-1755595166.webp"
      ]
    },
    {
      "id": 68,
      "name": "Ardor Edge Shagun Arcade",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/1-1755588189.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/3-1755588189.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/4-1755588189.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147300/Project%20Image/2-1755588189.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147300/Location/MAP-1755588199.webp"
      ]
    },
    {
      "id": 70,
      "name": "Awfis Brilliant Sapphire 2",
      "area": "Vijay Nagar",
      "location": "Vijay Nagar, Indore",
      "price": "₹12,500",
      "period": "/ Month",
      "priceFormatted": "₹12,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/2-1754201871.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/3-1754201871.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/4-1754201871.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145373/Project%20Image/1-1754201871.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145373/Location/MAP-1754201880.webp"
      ]
    }
  ],
  "M.G. Road": [
    {
      "id": 23,
      "name": "Youth Cowork",
      "area": "M.G. Road",
      "location": "M.G. Road, Indore",
      "price": "₹3,999",
      "period": "/ Month",
      "priceFormatted": "₹3,999 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/7d326793f8cd97485edaeb149765a0ce45d6f94d.jpg",
        "https://img.cofynd.com/images/original/bfeda4aa0202764019dba287273696aaddf48891.jpg",
        "https://img.cofynd.com/images/original/639f8da4a56df6f3ebc2e55b650a9ba4f169ade7.jpg",
        "https://img.cofynd.com/images/original/ef0a8839b19f3882f8656aff54bff8b3bd9c0a1f.jpg",
        "https://img.cofynd.com/images/original/593ec01b8469efddac15e6fe27b995d92ee8eb87.jpg",
        "https://img.cofynd.com/images/original/85efe5b295c09bf950b188491b83867476f2b873.jpg"
      ]
    }
  ],
  "Jawahar Marg": [
    {
      "id": 20,
      "name": "Melange Marketing",
      "area": "Jawahar Marg",
      "location": "Jawahar Marg, Indore",
      "price": "₹9,900",
      "period": "/ Month",
      "priceFormatted": "₹9,900 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/37bc6a96cbb759dc3526cb78ce319137c37363fb.jpg",
        "https://img.cofynd.com/images/original/7e06657c2dbdba9198ceaa407e4499a64332af0f.jpg",
        "https://img.cofynd.com/images/original/5480a4a30a291227eebcbf21a5487568626dedfc.jpg",
        "https://img.cofynd.com/images/original/7c0e825cbbec0bdf445f8380261bc45c8e8a8a9a.jpg"
      ]
    },
    {
      "id": 26,
      "name": "Melange Coworks",
      "area": "Jawahar Marg",
      "location": "Jawahar Marg, Indore",
      "price": "₹2,000",
      "period": "/ Month",
      "priceFormatted": "₹2,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/0d8fae158a7e8065c877c524557e3fdb2cf8ea35.webp",
        "https://img.cofynd.com/images/latest_images_2024/47b7b101f8e6b4119c669e2647b668676872e666.webp",
        "https://img.cofynd.com/images/latest_images_2024/93e67d7f8c21374da50979128a5acd6ee96a5866.webp",
        "https://img.cofynd.com/images/latest_images_2024/32386b6f439e77f07d75106df94f662238d018b9.webp"
      ]
    }
  ],
  "Bhawarkua": [
    {
      "id": 22,
      "name": "Karyasthal",
      "area": "Bhawarkua",
      "location": "Bhawarkua, Indore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/original/e786a2ce11b5a1c43fb64ba7e444a03396994c74.jpg",
        "https://img.cofynd.com/images/original/c75929be3c06514af1adc8365463ef4a8f8b9d84.jpg",
        "https://img.cofynd.com/images/original/694e8f7f66aa73cf9034d05007d8a7a1efff0429.jpg",
        "https://img.cofynd.com/images/original/d91ae660f43ccda386f18dc2f9e8338b4effba21.jpg",
        "https://img.cofynd.com/images/original/88c7d38f9b30a61ac37cfa3c5b340fb58541960f.jpg",
        "https://img.cofynd.com/images/original/8232c5e40a297f3cbda881b60d434773b630d75b.jpg",
        "https://img.cofynd.com/images/original/b52dcb1f4abd0e138aeaad7787892c25feefb637.jpg",
        "https://img.cofynd.com/images/original/2d1753cd6f0a1cbdf02000540f9ea0a819a7b6b7.jpg"
      ]
    },
    {
      "id": 32,
      "name": "CO-Workspace",
      "area": "Bhawarkua",
      "location": "Bhawarkua, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c9cda30d53f4cfcb8b13f05d6ba54143fad2b426.webp",
        "https://img.cofynd.com/images/latest_images_2024/f0586d5089a555475c85eba4fcce60db86e68e16.webp",
        "https://img.cofynd.com/images/latest_images_2024/9cd1696da66532fa354c5cf3c4f392c0056cb8fb.webp",
        "https://img.cofynd.com/images/latest_images_2024/5c1108b7d39bc868465d4152acbb12456c9655b6.webp",
        "https://img.cofynd.com/images/latest_images_2024/b71cc51e2026be38bb68422b581e061f21610bb6.webp"
      ]
    },
    {
      "id": 36,
      "name": "Flexihub",
      "badge": "Special Offer",
      "rating": 4.9,
      "area": "Bhawarkua",
      "location": "Bhawarkua, Indore",
      "price": "₹6,499",
      "period": "/ Month",
      "priceFormatted": "₹6,499 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/b40f2bb0f48a2581e0755bcb43ce053763e88b51.webp",
        "https://img.cofynd.com/images/latest_images_2024/966e87074b63806d64518104af3d7816db424ee4.webp",
        "https://img.cofynd.com/images/latest_images_2024/c41422700426242646f2ec615a3ba475a57dd7e8.webp",
        "https://img.cofynd.com/images/latest_images_2024/360eac5f552171011922d7ae702ed9845cd71933.webp",
        "https://img.cofynd.com/images/latest_images_2024/7dbc49373022c7d2aa0ea4dfb636e421f54e8c62.webp"
      ]
    }
  ],
  "Scheme 54": [
    {
      "id": 31,
      "name": "TechWinners InfoSystem CoWorking Space",
      "area": "Scheme 54",
      "location": "Scheme 54, Indore",
      "price": "₹2,299",
      "period": "/ Month",
      "priceFormatted": "₹2,299 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/1d069318286d599f6196fff6130d5cb6a6932d3f.webp",
        "https://img.cofynd.com/images/latest_images_2024/749bf7db8ff110844101fddae930b3ad447abe6f.webp",
        "https://img.cofynd.com/images/latest_images_2024/101d1a81da08198ff70f89e72497ffa076a0356f.webp",
        "https://img.cofynd.com/images/latest_images_2024/dd862340b62ce2bf0b9af40e07bf50c01182a6a5.webp",
        "https://img.cofynd.com/images/latest_images_2024/883831828a32a4e01e0561f94db703a2b519ea30.webp"
      ]
    },
    {
      "id": 39,
      "name": "Antares Princes Business Skypark",
      "area": "Scheme 54",
      "location": "Scheme 54, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/1-1755588107.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/2-1755588107.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147299/Project%20Image/3-1755588107.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147299/Location/MAP-1755588120.webp"
      ]
    },
    {
      "id": 41,
      "name": "Workie Swastika Urbane",
      "area": "Scheme 54",
      "location": "Scheme 54, Indore",
      "price": "₹7,000",
      "period": "/ Month",
      "priceFormatted": "₹7,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/4-1755678631.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/1-1755678631.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/2-1755678631.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147406/Project%20Image/3-1755678631.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147406/Location/MAP-1755678639.webp"
      ]
    },
    {
      "id": 42,
      "name": "Worksthan Orbit Mall",
      "area": "Scheme 54",
      "location": "Scheme 54, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/4-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/2-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/9-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/1-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/3-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/5-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/6-1755756161.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147497/Project%20Image/7-1755756161.webp"
      ]
    }
  ],
  "Mahalaxmi Nagar": [
    {
      "id": 34,
      "name": "Workdesq Coworking",
      "area": "Mahalaxmi Nagar",
      "location": "Mahalaxmi Nagar, Indore",
      "price": "₹4,200",
      "period": "/ Month",
      "priceFormatted": "₹4,200 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://img.cofynd.com/images/latest_images_2024/c3acdfb0071397ea73ebd552b8aea0ee1d47a21e.webp",
        "https://img.cofynd.com/images/latest_images_2024/ff03f114db9ed782d1346b14f7bfd2c3b1230a5b.webp",
        "https://img.cofynd.com/images/latest_images_2024/35711c4a0a20d73a2053d512c63091f0e73c6883.webp",
        "https://img.cofynd.com/images/latest_images_2024/fddadef1c2606631daa0e9e538af70fda2658c68.webp",
        "https://img.cofynd.com/images/latest_images_2024/fecd9b7128c0336e495995298b28c2e50be8fbab.webp",
        "https://img.cofynd.com/images/latest_images_2024/aeae00d0fcda1d8193020483efaa3a3fab306560.webp"
      ]
    },
    {
      "id": 45,
      "name": "BCM Zodiac Co-Working",
      "area": "Mahalaxmi Nagar",
      "location": "Mahalaxmi Nagar, Indore",
      "price": "₹10,000",
      "period": "/ Month",
      "priceFormatted": "₹10,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/6-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/14-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/4-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/2-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/8-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/1-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/3-1755588287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147301/Project%20Image/10-1755588287.webp"
      ]
    }
  ],
  "New Palasia": [
    {
      "id": 38,
      "name": "MyBranch Commerce House",
      "area": "New Palasia",
      "location": "New Palasia, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/2-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Project%20Image/1-1755679189.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/6-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/4-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/7-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/3-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/5-1755679195.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147412/Location/Hou-1755679204.webp"
      ]
    },
    {
      "id": 43,
      "name": "Workie Sewani Corporate House",
      "area": "New Palasia",
      "location": "New Palasia, Indore",
      "price": "₹6,500",
      "period": "/ Month",
      "priceFormatted": "₹6,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/6-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/5-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/2-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/4-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/3-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Project%20Image/1-1755678156.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147405/Location/MAP-1755678166.webp"
      ]
    },
    {
      "id": 46,
      "name": "United Spaces Virendra Heights",
      "area": "New Palasia",
      "location": "New Palasia, Indore",
      "price": "₹8,000",
      "period": "/ Month",
      "priceFormatted": "₹8,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/1-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/8-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/3-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/2-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/4-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/5-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/6-1755759163.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147507/Project%20Image/7-1755759163.webp"
      ]
    },
    {
      "id": 69,
      "name": "Smartwork Brilliant Centre",
      "area": "New Palasia",
      "location": "New Palasia, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/1-1754223302.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Project%20Image/5-1754223287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Project%20Image/6-1754223287.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/4-1754223302.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/7-1754223302.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/2-1754223302.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Sample%20Apartment/3-1754223302.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/145524/Location/Hou-1754223317.webp"
      ]
    }
  ],
  "Pipliyahana": [
    {
      "id": 50,
      "name": "Flexi Business Hub Atulya IT Park",
      "area": "Pipliyahana",
      "location": "Pipliyahana, Indore",
      "price": "₹6,000",
      "period": "/ Month",
      "priceFormatted": "₹6,000 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/3-1755764663.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/2-1755764663.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/1-1755764663.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147516/Location/MAP-1755764669.webp"
      ]
    },
    {
      "id": 51,
      "name": "SCI Co Works The Collab",
      "area": "Pipliyahana",
      "location": "Pipliyahana, Indore",
      "price": "₹8,500",
      "period": "/ Month",
      "priceFormatted": "₹8,500 / Month",
      "ctaText": "Get Quote",
      "images": [
        "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/3-1755764893.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/1-1755764893.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147523/Project%20Image/4-1755764893.webp",
        "https://imgcdn.houssed.com/assets/Files/Projects/147523/Location/MAP-1755764902.webp"
      ]
    }
  ]
};

// Suggested spaces shown at the bottom of a space's detail page
export const similarIndoreOfficeCards = [
  {
    "id": 1,
    "name": "Nextcoworks",
    "badge": "Premium Coworking",
    "rating": 4.8,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,500",
    "period": "/ Month",
    "priceFormatted": "₹5,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/latest_images_2024/cebdaa16c044508e7616f5a0f463c78244522044.webp",
      "https://img.cofynd.com/images/latest_images_2024/bca89c4cd39ac0dbca23ec5cc0754a822b54bb8a.webp",
      "https://img.cofynd.com/images/latest_images_2024/f05d0c2eac60a690a8b9f2dc3b1ceb9ac41c40c9.webp",
      "https://img.cofynd.com/images/latest_images_2024/b1544faff4dd3dc2f7a7b5ec7e425d59e5a19c59.webp",
      "https://img.cofynd.com/images/latest_images_2024/8612338f4f05bfb868bb96a679374be25bf7f5a6.webp",
      "https://img.cofynd.com/images/latest_images_2024/01bd993a3005a307e1b3f90d193756ef05b1f849.webp",
      "https://img.cofynd.com/images/latest_images_2024/278137df85e651aa2c9d4405e2788704a358bfba.webp",
      "https://img.cofynd.com/images/latest_images_2024/02aa649f2ef0f3500e8d6137bdc5503ce6514f6e.webp"
    ]
  },
  {
    "id": 2,
    "name": "Incuspaze Apollo",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "On Request",
    "period": "",
    "priceFormatted": "On Request",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e85426ce071a8de598c3d0e7f16adb4aaf056d13.jpg",
      "https://img.cofynd.com/images/original/b1702e02cba6a7e8244a54e0e6a58acba5004923.jpg",
      "https://img.cofynd.com/images/original/c0f1c5ff530c8616ebe2bb2265c6e3f8cf2b3a0f.jpg",
      "https://img.cofynd.com/images/original/e6915cb5e08196700dc39f8a265ceb84636852c9.jpg",
      "https://img.cofynd.com/images/original/ea807ca73f1f0f8884b96193b289c18203100335.jpg",
      "https://img.cofynd.com/images/original/cd4b42f3b4627f5815f179f965b74e331a239d45.jpg"
    ]
  },
  {
    "id": 3,
    "name": "Incuspaze Princes Business Skyline",
    "rating": 4.5,
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/3d951919efd3a31194f66951440dc9f301fcc53c.jpg",
      "https://img.cofynd.com/images/original/1552dc2b639d5266606b16784fda7a87c9d17a22.jpg",
      "https://img.cofynd.com/images/original/dc0dfeb1aa0d6403f6a2049fa7113c145b81a022.jpg",
      "https://img.cofynd.com/images/original/e66871836b68bf4ac79120096a87777ac47f8ef3.jpg",
      "https://img.cofynd.com/images/original/5fb20a658639188bf735d7a826209c0c566b4ef4.jpg"
    ]
  },
  {
    "id": 4,
    "name": "Incuspaze Brilliant Platina",
    "rating": 4.5,
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹6,499",
    "period": "/ Month",
    "priceFormatted": "₹6,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/e3968f9d719e9f59b3bf5e8037ac1df3329da2bd.jpg",
      "https://img.cofynd.com/images/original/c177625b3ebd7cb710215421b77fa4290a5ed767.jpg",
      "https://img.cofynd.com/images/original/55edf08ec595b25d532da9d94c8885b646354827.jpg",
      "https://img.cofynd.com/images/original/3382a8ad450944e08c6f4de01afef1a6ed18e3da.jpg",
      "https://img.cofynd.com/images/original/eb6127274f92a2e24b2fc67d6f5088e5acc37e18.jpg"
    ]
  },
  {
    "id": 5,
    "name": "Incuspaze Metro Tower",
    "rating": 4.5,
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,499",
    "period": "/ Month",
    "priceFormatted": "₹5,499 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9a77947d04ddacf2731007500e2bdec2dbcfe336.jpg",
      "https://img.cofynd.com/images/original/eff3a147c3f212107aa125870e63e1cbc2e18c82.jpg",
      "https://img.cofynd.com/images/original/13f660e0dc2f4f0b39a960da9eac1ff891db4827.jpg",
      "https://img.cofynd.com/images/original/dae1b62039a3d1fd72aa320a9cba7e9751dc8196.jpg",
      "https://img.cofynd.com/images/original/86e3add5caf136da865a4ad6a9b56d5c54189da0.jpg"
    ]
  },
  {
    "id": 6,
    "name": "Adited Coworking 1.0",
    "area": "AB Road",
    "location": "AB Road, Indore",
    "price": "₹5,999",
    "period": "/ Month",
    "priceFormatted": "₹5,999 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/79cb04ff48a91c1039479a6433cdcda04477a3c9.jpg",
      "https://img.cofynd.com/images/original/f7cd616f5056b7a8144547f1e92fed4a384a3880.jpg",
      "https://img.cofynd.com/images/original/9f08d9e480403ec85cf9dd6e39aa83cc7e26b6ed.jpg",
      "https://img.cofynd.com/images/original/4ce4627285e42ed36a2b39db6d91eb70df100eef.jpg",
      "https://img.cofynd.com/images/original/879d988cbfa9d8c06f0b642fba72f305e64bd966.jpg"
    ]
  },
  {
    "id": 7,
    "name": "Work Jar Coworking",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/9a2e0d80c47371515102ecb7543f1f8af58338bd.jpg",
      "https://img.cofynd.com/images/original/8cfbda62db1c0caf549ff88d58e1dc3d8356e54b.jpg",
      "https://img.cofynd.com/images/original/1fe04de035e19a40a619a2d2b50d73dff32799cb.jpg",
      "https://img.cofynd.com/images/original/73de0375d6f4a9e7442f882d4796ef61fe715877.jpg",
      "https://img.cofynd.com/images/original/fb98cb1cc76929a02d716afd27141f049dc1b291.jpg"
    ]
  },
  {
    "id": 8,
    "name": "Workvistar",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹5,000",
    "period": "/ Month",
    "priceFormatted": "₹5,000 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/23b80d614693142dc6d27fb9ea739f859db8f606.jpg",
      "https://img.cofynd.com/images/original/a49863cb704c9ceae3621b8eeca709bdf877332f.jpg",
      "https://img.cofynd.com/images/original/3477017057f76f8663d89becec31a5a0d27de91a.jpg",
      "https://img.cofynd.com/images/original/25e5a08900fa08baf0b3f6efe6dd6c65214ac2c6.jpg",
      "https://img.cofynd.com/images/original/8da57b82c475ef368e3841e6348666db5a32b28a.jpg"
    ]
  },
  {
    "id": 9,
    "name": "YBox.Work",
    "area": "Vijay Nagar",
    "location": "Vijay Nagar, Indore",
    "price": "₹4,500",
    "period": "/ Month",
    "priceFormatted": "₹4,500 / Month",
    "ctaText": "Get Quote",
    "images": [
      "https://img.cofynd.com/images/original/aa61999951aef590967b8d33e36003d17e7e9f29.jpg",
      "https://img.cofynd.com/images/original/af0c60b9f1c51eb83388accb47116e17d883bbdb.jpg",
      "https://img.cofynd.com/images/original/15dabfe40d580efdb9a3b73e0636c75392a475a9.jpg",
      "https://img.cofynd.com/images/original/13d776ca793563b51faeb11e043d6a3e23258124.jpg",
      "https://img.cofynd.com/images/original/a68c3a0daa1c22ad5cb5d57f549378f492389087.jpg"
    ]
  }
];

export const allIndoreOfficeCards = [
  ...indoreOfficeCards,
  ...moreIndoreOfficeCards,
  ...finalIndoreOfficeCards,
  ...featuredIndoreOfficeCards,
  ...pageTwoIndoreOfficeCards,
  ...pageTwoMoreIndoreOfficeCards,
  ...pageTwoFinalIndoreOfficeCards,
  ...pageTwoFeaturedIndoreOfficeCards,
  ...pageThreeIndoreOfficeCards,
  ...pageThreeMoreIndoreOfficeCards,
  ...pageThreeFinalIndoreOfficeCards,
  ...pageThreeFeaturedIndoreOfficeCards,
  ...pageFourIndoreOfficeCards,
  ...pageFourMoreIndoreOfficeCards,
  ...pageFourFinalIndoreOfficeCards,
  ...pageFourFeaturedIndoreOfficeCards,
  ...similarIndoreOfficeCards,
  ...Object.values(areaExtraOfficeCards).flat()
].filter((card, index, list) => list.findIndex((other) => other.id === card.id) === index);

export const getIndoreOfficeCardById = (id) => findOfficeBySlug(allIndoreOfficeCards, id, "indore");
export const getIndoreOfficeSlug = (space) => officePath(allIndoreOfficeCards, space, "indore");

export const topIndoreCoworkingLocations = [
  {
    "id": "loc-ab-road",
    "name": "AB Road",
    "title": "Coworking Space in AB Road",
    "image": "https://img.cofynd.com/images/latest_images_2024/48d59a1dbfc501a457bc56146ac33206db412a81.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-lic-colony",
    "name": "LIC Colony",
    "title": "Coworking Space in LIC Colony",
    "image": "https://img.cofynd.com/images/latest_images_2024/cebdaa16c044508e7616f5a0f463c78244522044.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-ratna-lok-colony",
    "name": "Ratna Lok Colony",
    "title": "Coworking Space in Ratna Lok Colony",
    "image": "https://img.cofynd.com/images/latest_images_2024/cebdaa16c044508e7616f5a0f463c78244522044.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-ravindra-nagar",
    "name": "Ravindra Nagar",
    "title": "Coworking Space in Ravindra Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/94e266284479c6e091e29c2d06df5deb49811db2.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-south-tukoganj",
    "name": "South Tukoganj",
    "title": "Coworking Space in South Tukoganj",
    "image": "https://img.cofynd.com/images/original/6a4736f86d95a33b7e57f91fa806db10dfff54b2.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-vijay-nagar",
    "name": "Vijay Nagar",
    "title": "Coworking Space in Vijay Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/ed404f974139bf939d241274331f741361cfc8b4.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-m-g-road",
    "name": "M.G. Road",
    "title": "Coworking Space in M.G. Road",
    "image": "https://img.cofynd.com/images/original/7d326793f8cd97485edaeb149765a0ce45d6f94d.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-jawahar-marg",
    "name": "Jawahar Marg",
    "title": "Coworking Space in Jawahar Marg",
    "image": "https://img.cofynd.com/images/latest_images_2024/b7e629080ec74739e437d5e8aa5a00d77f6a0ec9.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-bhawarkua",
    "name": "Bhawarkua",
    "title": "Coworking Space in Bhawarkua",
    "image": "https://img.cofynd.com/images/original/e786a2ce11b5a1c43fb64ba7e444a03396994c74.jpg",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-scheme-54",
    "name": "Scheme 54",
    "title": "Coworking Space in Scheme 54",
    "image": "https://img.cofynd.com/images/latest_images_2024/1d069318286d599f6196fff6130d5cb6a6932d3f.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-mahalaxmi-nagar",
    "name": "Mahalaxmi Nagar",
    "title": "Coworking Space in Mahalaxmi Nagar",
    "image": "https://img.cofynd.com/images/latest_images_2024/c3acdfb0071397ea73ebd552b8aea0ee1d47a21e.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-new-palasia",
    "name": "New Palasia",
    "title": "Coworking Space in New Palasia",
    "image": "https://imgcdn.houssed.com/assets/Files/Projects/147412/Sample%20Apartment/2-1755679195.webp",
    "ctaText": "Explore Spaces"
  },
  {
    "id": "loc-pipliyahana",
    "name": "Pipliyahana",
    "title": "Coworking Space in Pipliyahana",
    "image": "https://imgcdn.houssed.com/assets/Files/Projects/147516/Project%20Image/3-1755764663.webp",
    "ctaText": "Explore Spaces"
  }
];

export default {
  indoreNeighborhoods,
  indoreOfficeCards,
  paginationData,
  allIndoreOfficeCards,
  getIndoreOfficeCardById,
  topIndoreCoworkingLocations
};
