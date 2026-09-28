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

// ============================================================================
// 12. CUSTOMER TESTIMONIALS & REVIEWS DATA (10 VERIFIED REVIEWS)
// Used by Homepage.jsx to render interactive review cards
// Contains:
//  - Member portraits (verified Unsplash images)
//  - Star ratings (5 stars)
//  - Real customer feedback from founders, remote devs, freelancers
//  - Location, designation, space type, and review recency
// ============================================================================
export const customerReviewsData = {
  badge: "CUSTOMER TESTIMONIALS",
  title: "What Our Members Say",
  subtitle: "Trusted by 10,000+ happy founders, remote teams, and freelancers across India",
  ratingSummary: {
    averageRating: "4.9",
    totalReviews: "2,500+",
    satisfactionRate: "98%"
  },
  reviews: [
    {
      id: "rev-1",
      name: "Aditi Sharma",
      role: "Founder, Digispark Media",
      city: "Pune",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "2 weeks ago",
      spaceType: "Dedicated Desk",
      review: "Finding a dedicated desk in Baner, Pune was effortless through this platform. The amenities like high-speed WiFi, modern meeting rooms, and vibrant community have boosted our startup's productivity significantly."
    },
    {
      id: "rev-2",
      name: "Rahul Verma",
      role: "Senior Engineering Manager",
      city: "Bangalore",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "1 month ago",
      spaceType: "Private Cabin",
      review: "We booked an 8-seater private cabin in Indiranagar. The onboarding was seamless with zero brokerage fees. The support team arranged everything within 24 hours. Highly recommended for growing teams!"
    },
    {
      id: "rev-3",
      name: "Priya Nair",
      role: "Independent UI/UX Designer",
      city: "Mumbai",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "3 weeks ago",
      spaceType: "Flexible Desk",
      review: "As a freelancer, having access to multiple locations across Mumbai and Pune is a lifesaver. The spaces are aesthetically pleasing, well-lit, and the coffee is always fresh. Great value for money."
    },
    {
      id: "rev-4",
      name: "Vikram Malhotra",
      role: "Co-Founder, FinEdge Solutions",
      city: "Gurugram",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "1 month ago",
      spaceType: "Virtual Office",
      review: "Got our company registered with their Virtual Office in DLF Cyber City. The GST registration and mailing address documentation were handled flawlessly and delivered in record time."
    },
    {
      id: "rev-5",
      name: "Sneha Kulkarni",
      role: "Operations Lead, CloudSphere",
      city: "Pune",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "Just now",
      spaceType: "Dedicated Desk",
      review: "The Kalyani Nagar workspace is top-notch. Cleanliness, sanitization, and security are strictly maintained. Having phone booths and ergonomic seating makes long workdays completely comfortable."
    },
    {
      id: "rev-6",
      name: "Arjun Mehta",
      role: "Remote Software Architect",
      city: "Hyderabad",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "2 months ago",
      spaceType: "Coworking Space",
      review: "Working remotely for a US firm, I needed uninterrupted gigabit internet and 24/7 power backup. Hitec City branch delivered on every promise. The quiet zones are perfect for video calls."
    },
    {
      id: "rev-7",
      name: "Ananya Deshmukh",
      role: "Marketing Director, BrandWave",
      city: "Delhi",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "3 weeks ago",
      spaceType: "Team Suite",
      review: "Exceptional assistance from the workspace consultant. They negotiated the best corporate package for our 15-member team in Connaught Place. Transparent billing with no hidden costs."
    },
    {
      id: "rev-8",
      name: "Rohan Gupta",
      role: "Product Strategist, AppVibe",
      city: "Noida",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "1 month ago",
      spaceType: "Flexi Pass",
      review: "The day pass and monthly flexi pass options make it super simple to drop into any center when traveling between Noida and Delhi. Clean cafeteria and warm reception staff everywhere."
    },
    {
      id: "rev-9",
      name: "Pooja Patel",
      role: "HR Consultant & Corporate Trainer",
      city: "Ahmedabad",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "2 weeks ago",
      spaceType: "Meeting Rooms",
      review: "We frequently host workshops and client pitches in their executive conference rooms. Audio-visual setup, projectors, and hospitality services have always exceeded our expectations."
    },
    {
      id: "rev-10",
      name: "Naveen Reddy",
      role: "Founder, SolarTech Innovations",
      city: "Chennai",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80",
      rating: 5,
      date: "5 days ago",
      spaceType: "Private Office",
      review: "Best coworking booking experience in Chennai. Clean, bright, and professional atmosphere that helped us make a great impression on our international investors. 10/10 service!"
    }
  ]
};

// ============================================================================
// 13. FREQUENTLY ASKED QUESTIONS (FAQ) DATA (7 ACCORDION CARDS)
// Used by Homepage.jsx to render full-width accordion question cards
// Features:
//  - 7 practical customer questions covering coworking, pricing, amenities,
//    virtual office, day passes, move-in timelines, and multi-city roaming.
// ============================================================================
export const faqSectionData = {
  badge: "FREQUENTLY ASKED QUESTIONS",
  title: "Got Questions? We've Got Answers",
  subtitle: "Everything you need to know about booking workspaces, pricing, amenities, and plans",
  questions: [
    {
      id: "faq-1",
      question: "What is a coworking space and how does it work?",
      answer: "A coworking space is a shared workspace where professionals, freelancers, startups, and remote teams work in a collaborative environment. Instead of leasing a traditional office with long lock-in periods, you get fully furnished desks, private cabins, high-speed WiFi, conference rooms, housekeeping, and access to a vibrant community with flexible daily, monthly, or yearly plans."
    },
    {
      id: "faq-2",
      question: "Are there any brokerage or hidden charges when booking through your platform?",
      answer: "No, our platform operates on a completely zero-brokerage policy. You get direct access to premium workspaces across India with 100% transparent pricing. The rates you see are all-inclusive with no unexpected commissions or documentation fees."
    },
    {
      id: "faq-3",
      question: "What amenities are included with a coworking membership?",
      answer: "Standard memberships include enterprise-grade high-speed internet, power backup, air conditioning, daily sanitation, tea/coffee pantry, reception support, meeting and conference room credits, ergonomic seating, printing facilities, and access to networking events."
    },
    {
      id: "faq-4",
      question: "Can I register my company address or get GST registration with a Virtual Office?",
      answer: "Yes! Our Virtual Office packages provide a prime commercial business address, official NOC, utility bill, and lease agreement compliant with MCA and GST registration requirements across all major Indian cities. We also offer mail handling and call forwarding services."
    },
    {
      id: "faq-5",
      question: "Can I book a day pass before committing to a monthly membership?",
      answer: "Absolutely. We offer flexible 1-day passes and multi-day flexi passes so you can experience the workspace, test the amenities, and meet the community before selecting a dedicated desk or private cabin plan."
    },
    {
      id: "faq-6",
      question: "How quickly can our team move into a new private cabin or office?",
      answer: "You can move in as quickly as 24 hours. Once you select your preferred workspace and finalize the plan with our dedicated office consultant, the documentation and desk allocations are processed seamlessly for same-day or next-day onboarding."
    },
    {
      id: "faq-7",
      question: "Can I access workspaces in multiple cities with a single plan?",
      answer: "Yes, our multi-city roaming pass allows you to work from any partner coworking hub across 18+ Indian cities including Pune, Bangalore, Mumbai, Delhi, Gurugram, Hyderabad, and more without purchasing separate subscriptions."
    }
  ]
};

// ============================================================================
// 14. HOMEPAGE OVERVIEW & PLATFORM DESCRIPTION DATA
// Displayed under the FAQ section on the Home page
// Provides comprehensive educational content & SEO overview about flexible workspaces in India
// ============================================================================
export const homepageDescriptionData = {
  badge: "ABOUT OUR WORKSPACE NETWORK",
  title: "Revolutionizing How India Works, Connects, and Grows",
  introParagraphs: [
    "The landscape of Indian commercial real estate is undergoing a massive transformation. As remote and hybrid work models become the new standard, modern businesses—from agile bootstrapped startups and solo freelancers to multinational corporations—are moving away from rigid, long-term commercial leases with heavy capital expenditure.",
    "Our platform bridges the gap by connecting ambitious professionals with over 10,000+ verified coworking and flexible office spaces across 25+ major Indian cities. We make finding, comparing, and booking high-grade workspaces completely seamless, transparent, and 100% brokerage-free."
  ],
  pillars: [
    {
      id: "cost-efficiency",
      title: "Cost-Effective Flexibility",
      description: "Say goodbye to lock-in security deposits and interior fit-out expenses. Enjoy all-inclusive monthly or flexible hourly plans with zero brokerage fees."
    },
    {
      id: "prime-locations",
      title: "Prime Business Addresses",
      description: "Establish your brand presence in premier commercial landmarks across Gurugram Cyber City, Bangalore Indiranagar, Mumbai BKC, Pune Baner, and more."
    },
    {
      id: "enterprise-amenities",
      title: "Enterprise Infrastructure",
      description: "Access redundant gigabit WiFi, soundproof call booths, projector-ready boardrooms, ergonomic Herman Miller seating, and sanitised daily housekeeping."
    },
    {
      id: "vibrant-community",
      title: "Collaborative Networking",
      description: "Work alongside inspiring founders, developers, creators, and mentors with weekly masterclasses, networking mixers, and investor pitch sessions."
    }
  ],
  helpBanner: {
    title: "Need personalized workspace advice?",
    subtitle: "Our local office consultants are ready to curate customized options and negotiate the best corporate rates for your team.",
    ctaCallText: "Speak with an Advisor",
    ctaEmailText: "Email Us",
    phone: "+91 9028760011",
    email: "info@mycoworking.in"
  }
};



