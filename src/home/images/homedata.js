/**
 * ============================================================================
 * HOMEPAGE MASTER DATA STORE (homedata.js)
 * ============================================================================
 * This file centralizes ALL data, text copy, statistics, image references,
 * and configuration values for the Homepage (src/home/Homepage.jsx).
 *
 * Table of Contents:
 *  1. City Assets & Quick-Grid City List (cityNames)
 *  2. Workspace Category Options (spaceOptions)
 *  3. Hero Section Configuration (heroSectionData)
 *  4. Lead Enquiry Form Configuration (enquiryFormConfig)
 *  5. SVG Icon Paths for Benefit Badges (perkIconSvgPaths)
 *  6. Promotional Cards & "List Free" Center Banner (homePromotionalData)
 *  7. India's #1 Platform Showcase Section (platformShowcaseData)
 *  8. Trusted Companies Carousel Data (trustedCompaniesData)
 *  9. Top Coworking Spaces in India Section (topCoworkingCitiesData)
 * 10. Why Choose Us (ANAROCK) Value Propositions (whyChooseData)
 * ============================================================================
 */

// ============================================================================
// 1. ACTIVE CITY IMAGE IMPORTS & HERO BACKGROUND
// ============================================================================
import heroBackgroundImage from './cityimages/navbarimage.png';
import gurugramImg from './cityimages/gurugram.png';
import bhubaneshwar from './cityimages/bhubaneshwar.png';
import banglore from './cityimages/banglore.png';
import hydrabad from './cityimages/hydrabad.png';
import chennai from './cityimages/chennai.png';
import lukhnow from './cityimages/lukhnow.png';
import pune from './cityimages/pune.png';
import noida from './cityimages/noida.jpg';
import delhi from './cityimages/delhi.webp';
import indore from './cityimages/indore.png';
import jaipur from './cityimages/jaipur.png';
import ahemdabad from './cityimages/ahemdabad.jpg';
import chandigadh from './cityimages/chandigadh.jpg';
import kochi from './cityimages/kochi.jpg';
import kolkatta from './cityimages/kolkatta.png';
import koimbatore from './cityimages/koimbatore.png';
import goa from './cityimages/goa.png';
import mumbai from './cityimages/mumbai.png';

// Re-export hero background image so Homepage can obtain it from homedata
export { heroBackgroundImage };

// ============================================================================
// 2. CITY NAMES & 18-CITY CIRCULAR QUICK SELECTION LIST
// Used by:
//  - CityGrid.jsx (circular city avatars in the Hero section)
//  - Homepage.jsx (native city dropdown selector)
//  - CityPopup.jsx (modal title and header)
// ============================================================================
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

// ============================================================================
// 3. AVAILABLE WORKSPACE TYPES
// Used by:
//  - "Looking For" dropdown in the Hero section
//  - "Type Of Space" dropdown in the Lead Enquiry Form
//  - CityPopup modal selection dialog
// ============================================================================
export const spaceOptions = ['Coworking Spaces', 'Virtual Office Space'];

// ============================================================================
// 4. HERO SECTION DATA & COPY
// Used by Homepage.jsx (Left & Right Hero columns)
// Includes:
//  - Brand decorative tagline
//  - Main hero headline with colored highlight spans
//  - Search filter dropdown labels and CTA button
//  - Top workspace & location statistics displayed on the hero background
// ============================================================================
export const heroSectionData = {
  // Hero right column background image
  backgroundImage: heroBackgroundImage,

  // Decorative tagline above main headline
  tagline: "India's flexible workspace network",

  // Main banner headline parts
  headline: {
    prefix: "Choose from",
    highlight1: "10,000+",
    middleText: "spaces to",
    highlight2: "Work & Live"
  },

  // Dropdown filter box labels & search action button
  searchFilters: {
    lookingForLabel: "Looking For",
    selectCityLabel: "Select City",
    searchButtonText: "Search spaces",
    searchButtonArrow: "→"
  },

  // Workspace and location statistics displayed in the right column header
  statistics: [
    {
      id: "workspaces",
      count: "10,000+",
      label: "Work Spaces"
    },
    {
      id: "locations",
      count: "1,000+",
      label: "Locations"
    }
  ]
};

// ============================================================================
// 5. LEAD ENQUIRY FORM CONFIGURATION
// Used by Homepage.jsx (Right column enquiry form)
// Includes:
//  - Input placeholders
//  - Contact forwarding email address
//  - Submit button states
//  - Submission confirmation notification settings
// ============================================================================
export const enquiryFormConfig = {
  // Support email address where enquiries are mailed
  contactEmail: "info@mycoworking.in",

  // Default initial values when form is loaded or reset
  defaultValues: {
    city: "Pune",
    spaceType: "Coworking Spaces",
    countryFallback: "India"
  },

  // Input field placeholders
  placeholders: {
    name: "Enter Your Name",
    email: "Enter Your Email",
    phone: "Phone Number",
    spaceType: "Type Of Space",
    city: "City"
  },

  // Submit button text labels
  buttons: {
    idle: "Submit",
    submitted: "Submitted"
  },

  // Submission confirmation banner config
  feedback: {
    getSuccessText: (name) => `Thanks, ${name || 'there'}! We'll be in touch shortly.`,
    displayDurationMs: 3000,
    fadeTransitionMs: 500
  }
};

// ============================================================================
// 6. SVG PATHS FOR PROMOTIONAL BENEFIT BADGES
// Used by Homepage.jsx to render SVG icons in the "List Free" center banner
// ============================================================================
export const perkIconSvgPaths = {
  enquiries: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  visibility: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  growth: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
};

// ============================================================================
// 7. PROMOTIONAL BANNER & WORKSPACE CATEGORY CARDS DATA
// Used by:
//  - "List Free with Cofynd" center promotional card
//  - Left cards: Coworking Spaces & Coliving Spaces (Business Plans)
//  - Right cards: Virtual Offices & Office Spaces
// ============================================================================
export const homePromotionalData = {
  // Center featured card
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

  // Left column category cards
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

  // Right column category cards
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

// ============================================================================
// 8. INDIA'S #1 ONLINE PLATFORM SHOWCASE DATA
// Used by Homepage.jsx (Dark showcase banner with overlapping property cards)
// ============================================================================
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

// ============================================================================
// 9. TRUSTED BY 500+ COMPANIES CAROUSEL DATA
// Used by Homepage.jsx (Interactive logo slider)
// ============================================================================
export const trustedCompaniesData = {
  title: "Trusted by more than 500+ Companies",
  autoScrollIntervalMs: 3000,
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

// ============================================================================
// 10. TOP COWORKING SPACES IN INDIA DATA
// Used by Homepage.jsx (18-city workspace card grid)
// Contains verified high-res images and authentic city taglines
// ============================================================================
export const topCoworkingCitiesData = {
  title: "Top Coworking Spaces in India",
  defaultTagline: "Millennium City",
  taglines: {
    Gurugram: "Millennium City",
    Hyderabad: "A city of pearls",
    Bangalore: "India's Silicon Valley",
    Mumbai: "A City of Dreams",
    Pune: "Queen of the Deccan",
    Delhi: "The Nation Capital",
    Noida: "The Hitech City",
    Lucknow: "The City of Nawabs",
    Bhubaneswar: "Temple City of India",
    Chennai: "Detroit of India",
    Ahmedabad: "Manchester of India",
    Jaipur: "The Pink City",
    Chandigarh: "The City Beautiful",
    Kochi: "Queen of the Arabian Sea",
    Kolkata: "City of Joy",
    Coimbatore: "Manchester of South India",
    Goa: "Pearl of the Orient",
    Indore: "Cleanest City of India"
  },
  workspaceImages: {
    Gurugram: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80",
    Hyderabad: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=700&q=80",
    Bangalore: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=700&q=80",
    Mumbai: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80",
    Pune: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
    Delhi: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=700&q=80",
    Noida: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80",
    Lucknow: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
    Bhubaneswar: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80",
    Chennai: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    Ahmedabad: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
    Jaipur: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
    Chandigarh: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    Kochi: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=700&q=80",
    Kolkata: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
    Coimbatore: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&w=700&q=80",
    Goa: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80",
    Indore: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=700&q=80"
  }
};

// ============================================================================
// 11. "WHY CHOOSE mycoworking" SECTION DATA
// Used by Homepage.jsx (6 value proposition cards on royal blue background)
// ============================================================================
export const whyChooseData = {
  title: "Why choose mycoworking?",
  features: [
    {
      id: "zero-brokerage",
      title: "Zero brokerage fee",
      description: "Direct access to the best office spaces and property owners with transparent pricing and zero brokerage fee.",
      icon: "brokerage"
    },
    {
      id: "quick-turnaround",
      title: "Quick Turnaround Time",
      description: "Experience swift and effective solutions with us",
      icon: "turnaround"
    },
    {
      id: "largest-network",
      title: "Largest network of Coworking Spaces",
      description: "India's largest network of verified office spaces, spanning 30+ cities, 5,000+ properties and 5M+ square feet in area.",
      icon: "network"
    },
    {
      id: "office-consultant",
      title: "Your own office consultant",
      description: "One-on-one support for finding your new office seamlessly—from shortlisting the right properties to finalizing terms and ensuring smooth onboarding.",
      icon: "consultant"
    }
  ]
};
