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
import heroBackgroundImage from './images/cityimages/navbarimage.png';
import gurugramImg from './images/cityimages/gurugram.png';
import bhubaneshwar from './images/cityimages/bhubaneshwar.png';
import banglore from './images/cityimages/banglore.png';
import hydrabad from './images/cityimages/hydrabad.png';
import chennai from './images/cityimages/chennai.png';
import lukhnow from './images/cityimages/lukhnow.png';
import pune from './images/cityimages/pune.png';
import noida from './images/cityimages/noida.jpg';
import delhi from './images/cityimages/delhi.webp';
import indore from './images/cityimages/indore.png';
import jaipur from './images/cityimages/jaipur.png';
import ahemdabad from './images/cityimages/ahemdabad.jpg';
import chandigadh from './images/cityimages/chandigadh.jpg';
import kochi from './images/cityimages/kochi.jpg';
import kolkatta from './images/cityimages/kolkatta.png';
import koimbatore from './images/cityimages/koimbatore.png';
import goa from './images/cityimages/goa.png';
import mumbai from './images/cityimages/mumbai.png';

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
    highlight2: "Work"
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
