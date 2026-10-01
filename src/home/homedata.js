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
  enquiries: 'M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.83L3 20l1.3-3.9C3.48 14.86 3 13.47 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  visibility: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
  growth: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
};


// ============================================================================
// 7. PROMOTIONAL BANNER & WORKSPACE CATEGORY CARDS DATA
// Used by:
//  - "List with MyCoworking" center promotional card
//  - Category cards: Coworking Spaces & Virtual Offices
// ============================================================================
export const homePromotionalData = {
  // Center featured card
  centerBanner: {
    titlePrefix: 'List',
    badgeText: 'Free',
    titleSuffix: 'with MyCoworking',
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
        line1: 'Get Verified',
        line2: 'Leads & Enquiries',
        bg: 'bg-[#ffe8ec]',
        color: 'text-[#ff4b72]',
        icon: 'enquiries'
      },
      {
        id: 'visibility',
        line1: 'Boost Your',
        line2: 'Online Visibility',
        bg: 'bg-[#e0f2fe]',
        color: 'text-[#0284c7]',
        icon: 'visibility'
      },
      {
        id: 'growth',
        line1: 'Scale Up',
        line2: 'Your Business',
        bg: 'bg-[#ede9fe]',
        color: 'text-[#7c3aed]',
        icon: 'growth'
      }
    ]
  },

  // Category cards (left column)
  leftCards: [
    {
      id: 'coworking-spaces',
      titlePart1: 'Coworking',
      titlePart2: 'Spaces',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      type: 'Coworking Spaces'
    }
  ],

  // Category cards (left column, second card)
  rightCards: [
    {
      id: 'virtual-offices',
      titlePart1: 'Virtual',
      titlePart2: 'Offices',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
      type: 'Virtual Office Space'
    }
  ]
};

// ============================================================================
// 8. "BOOK YOUR VIRTUAL OFFICE" SECTION DATA
// Used by Homepage.jsx (points on the left, enquiry form on the right)
// ============================================================================
export const virtualOfficeShowcaseData = {
  headline: "Book Your Virtual Office",
  highlight: "with MyCoworking",
  points: [
    { id: "company-registration", label: "Company Registration", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { id: "gst-registration", label: "GST Registration", icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" },
    { id: "business-address", label: "Business Address", icon: "M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" },
    { id: "mailing-address", label: "Mailing Address", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    { id: "reception-services", label: "Reception Services", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { id: "meeting-room-access", label: "Meeting Room Access", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" }
  ],
  phone: "+91 9028760011",
  email: "info@mycoworking.in"
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
    Gurugram: "https://ik.imagekit.io/qdesq/qdesq/f0776b54cc9938da2b4caa106e028219_50a2sw9BL.jpg",
    Hyderabad: "https://img.cofynd.com/images/original/14304a80b4fd1c79cd0c09f721d9705ab2c78adf.jpg",
    Bangalore: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=700&q=80",
    Mumbai: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=700&q=80",
    Pune: "https://www.goodworks.in/wp-content/uploads/2020/05/How-to-choose-the-best-Coworking-space-in-Bangalore-for-your-Business.-1-scaled.jpg",
    Delhi: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=700&q=80",
    Noida: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=700&q=80",
    Lucknow: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhVeu7xOaDkhGhfp5R7-fvQe2SYvPbGWrCW5tTzR_GHxcJoJu-ogGB9FA&s=10",
    Bhubaneswar: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=700&q=80",
    Chennai: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=700&q=80",
    Ahmedabad: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
    Jaipur: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=700&q=80",
    Chandigarh: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80",
    Kochi: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=700&q=80",
    Kolkata: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqftTEQeeGkDQlX1JYLK0cqTAVgazFWJIu9j3EcTf0QDrjPC38mNmHwh3P&s=10",
    Coimbatore: "https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&w=700&q=80",
    Goa: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=700&q=80",
    Indore: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvNm5Pj_snLPrG8MnF7FOnP-9l_oEiamFX8EUx25yfe0r0pHdkwC1a4y63&s=10"
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
    ctaCallText: "+91 9028760011",
    ctaEmailText: "Email Us",
    phone: "+91 9028760011",
    email: "info@mycoworking.in"
  }
};

// ============================================================================
// 15. FOOTER QUICK LINKS & DIRECTORY DATA (ALL 18 CITIES)
// Displayed under the platform description on the Home page
// Features:
//  - Company brand logo & brief narrative
//  - 3 columns of Quick Links covering all 18 top cities from the top hero grid
// ============================================================================
export const footerQuickLinksData = {
  brand: {
    name: "MyCoworking",
    description: "Discover verified flexible workspaces, dedicated desks, private cabins, and virtual offices across India's top commercial cities with zero brokerage fee."
  },
  columns: [
    {
      id: "col-1",
      title: "Quick links",
      cities: [
        "Gurugram",
        "Bhubaneswar",
        "Bangalore",
        "Hyderabad",
        "Chennai",
        "Lucknow"
      ]
    },
    {
      id: "col-2",
      title: "Quick links",
      cities: [
        "Pune",
        "Noida",
        "Delhi",
        "Indore",
        "Ahmedabad",
        "Jaipur"
      ]
    },
    {
      id: "col-3",
      title: "Quick links",
      cities: [
        "Chandigarh",
        "Kochi",
        "Kolkata",
        "Coimbatore",
        "Goa",
        "Mumbai"
      ]
    }
  ]
};




