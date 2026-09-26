// 1. Active image import paths
import gurugramImg from '../images/cityimages/gurugram.png';
import bhubaneshwar from '../images/cityimages/bhubaneshwar.png';
import banglore from '../images/cityimages/banglore.png';
import hydrabad from '../images/cityimages/hydrabad.png';
import chennai from '../images/cityimages/chennai.png';
import lukhnow from '../images/cityimages/lukhnow.png';
import pune from '../images/cityimages/pune.png';
import noida from '../images/cityimages/noida.jpg';
import delhi from '../images/cityimages/delhi.webp';
import indore from '../images/cityimages/indore.png';
import jaipur from '../images/cityimages/jaipur.png';
import ahemdabad from '../images/cityimages/ahemdabad.jpg';
import chandigadh from '../images/cityimages/chandigadh.jpg';
import kochi from '../images/cityimages/kochi.jpg';
import kolkatta from '../images/cityimages/kolkatta.png';
import koimbatore from '../images/cityimages/koimbatore.png';
import goa from '../images/cityimages/goa.png';
import mumbai from '../images/cityimages/mumbai.png';

// 2. Export the clean data configuration object array
export const cityNames = [
  { name: "Gurugram", image: gurugramImg },
  { name: "Bhubaneswar", image: bhubaneshwar },
  { name: "Bangalore", image: banglore },
  { name: "Hyderabad", image: hydrabad },
  { name: "Chennai", image: chennai },
  { name: "Lucknow", image: lukhnow },
  { name: "Pune", image: pune },
  { name: "Noida", image: noida },
  { name: "Delhi", image: delhi },
  { name: "Indore", image: indore },
  { name: "Ahmedabad", image: ahemdabad },
  { name: "Jaipur", image: jaipur },
  { name: "Chandigarh", image: chandigadh },
  { name: "Kochi", image: kochi },
  { name: "Kolkata", image: kolkatta },
  { name: "Coimbatore", image: koimbatore },
  { name: "Goa", image: goa },
  { name: "Mumbai", image: mumbai }
];

export const spaceOptions = ['Coworking Spaces', 'Virtual Office Space'];

// 3. Promotional banner and space categories data with verified high-resolution internet images
export const homePromotionalData = {
  centerBanner: {
    titlePrefix: 'List',
    badgeText: 'Free',
    titleSuffix: 'with Cofynd',
    subtitle: 'Reach 10,00,000+ users looking for space across India',
    ctaText: 'List Your Property',
    previewBadge: {
      line1: 'Your Space',
      line2: 'Here'
    },
    previewImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    perks: [
      {
        id: 'enquiries',
        line1: 'Get',
        line2: 'Enquiries',
        bg: 'bg-[#ffe8ec]',
        color: 'text-[#ff4b72]',
        icon: 'enquiries'
      },
      {
        id: 'visibility',
        line1: 'Increase',
        line2: 'Visibility',
        bg: 'bg-[#e0f2fe]',
        color: 'text-[#0284c7]',
        icon: 'visibility'
      },
      {
        id: 'growth',
        line1: 'Grow',
        line2: 'Your Business',
        bg: 'bg-[#ede9fe]',
        color: 'text-[#7c3aed]',
        icon: 'growth'
      }
    ]
  },
  leftCards: [
    {
      id: 'coworking-spaces',
      titlePart1: 'Coworking',
      titlePart2: 'Spaces',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      type: 'Coworking Spaces'
    },
    {
      id: 'Business Plans',
      titlePart1: 'Business',
      titlePart2: 'Plans',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80',
      type: 'Coliving Spaces'
    }
  ],
  rightCards: [
    {
      id: 'virtual-offices',
      titlePart1: 'Virtual',
      titlePart2: 'Offices',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      type: 'Virtual Office Space'
    },
    {
      id: 'office-spaces',
      titlePart1: 'Office',
      titlePart2: 'Spaces',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
      type: 'Office Spaces'
    }
  ]
};

// 4. Data for "India's #1 online platform for Coworking & Coliving Spaces" section
export const platformShowcaseData = {
  headlinePart1: "India's #1 online platform for",
  headlinePart2: "Coworking & Coliving Spaces",
  stats: [
    { value: "1,000+", label: "Locations" },
    { value: "10,000+", label: "Work Spaces" },
    { value: "25+", label: "Cities" }
  ],
  cards: [
    {
      id: "wework-forum",
      badge: "Coworking",
      name: "WeWork Forum",
      location: "DLF Cyber City, Gurugram",
      price: "₹ 28,000/ month",
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=800&q=80",
      city: "gurugram"
    },
    {
      id: "stanza-living",
      badge: "Coliving",
      name: "Stanza Living Dunkirk House",
      location: "sector 48, Gurgaon",
      price: "₹ 11,799 / month",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
      city: "gurugram"
    }
  ]
};

// 5. Data for "Trusted by more than 500+ Companies" section
export const trustedCompaniesData = {
  title: "Trusted by more than 500+ Companies",
  companies: [
    { id: "tribe", name: "TRIBE", type: "tribe" },
    { id: "covie", name: "COVIE", type: "covie" },
    { id: "helloworld", name: "hello world", type: "helloworld" },
    { id: "isthara", name: "ISTHARA", type: "isthara" },
    { id: "yourspace", name: "your space", type: "yourspace" },
    { id: "settl", name: "Settl.", type: "settl" },
    { id: "awfis", name: "awfis", type: "awfis" },
    { id: "innov8", name: "INNOV8", type: "innov8" },
    { id: "springboard", name: "91springboard", type: "springboard" },
    { id: "indiqube", name: "IndiQube", type: "indiqube" },
    { id: "wework", name: "wework", type: "wework" },
    { id: "smartworks", name: "Smartworks", type: "smartworks" }
  ]
};



