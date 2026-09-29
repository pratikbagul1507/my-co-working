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
 * 11. Customer Testimonials & Reviews (customerReviewsData)
 * 12. Frequently Asked Questions (faqSectionData)
 * 13. Platform Overview & Ecosystem Description (homepageDescriptionData)
 * 14. Footer Directory & City Quick Links (footerQuickLinksData)
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

