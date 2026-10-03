/**
 * ============================================================================
 * VIRTUAL OFFICE PAGE DATA STORE (virtual.js)
 * ============================================================================
 * All copy for the city "Virtual Office" page lives here; Virtualoffice.jsx only renders it.
 *
 *  1. Per-city data (business districts, state for GST, image)  -> virtualOfficeCities
 *  2. Shared page copy (hero text and enquiry form)               -> virtualOfficeContent
 *  3. Helpers (slug, lookup, text templates)
 * ============================================================================
 */
import heroImage from '../assets/images/virtual-office-bg.jpg';
import { cityNames } from '../home/homedata.js';
import { ahmedabadAreas, ahmedabadSpaces } from '../pages/ahmedabad/ahmedabadData.js';
import { bangaloreAreas, bangaloreSpaces } from '../pages/bangalore/bangaloreData.js';
import { bhubaneshwarNeighborhoods, allBhubaneshwarOfficeCards } from '../pages/bhubaneswar/bhubaneswarData.js';
import { chandigarhAreas, chandigarhSpaces } from '../pages/chandigarh/chandigarhData.js';
import { chennaiAreas, chennaiSpaces } from '../pages/chennai/chennaiData.js';
import { coimbatoreAreas, coimbatoreSpaces } from '../pages/coimbatore/coimbatoreData.js';
import { dehliNeighborhoods, allDehliOfficeCards } from '../pages/delhi/delhiData.js';
import { goaAreas, goaSpaces } from '../pages/goa/goaData.js';
import { gurugramAreas, gurugramSpaces } from '../pages/gurugram/gurugramData.js';
import { hyderabadAreas, hyderabadSpaces } from '../pages/hyderabad/hyderabadData.js';
import { indoreNeighborhoods, allIndoreOfficeCards } from '../pages/indore/indoreData.js';
import { jaipurAreas, jaipurSpaces } from '../pages/jaipur/jaipurData.js';
import { kochiAreas, kochiSpaces } from '../pages/kochi/kochiData.js';
import { kolkataAreas, kolkataSpaces } from '../pages/kolkata/kolkataData.js';
import { lucknowAreas, lucknowSpaces } from '../pages/lucknow/lucknowData.js';
import { mumbaiAreas, mumbaiSpaces } from '../pages/mumbai/mumbaiData.js';
import { noidaAreas, noidaSpaces } from '../pages/noida/noidaData.js';
import { puneNeighborhoods, allPuneOfficeCards } from '../pages/pune/puneData.js';

export const virtualOfficeHeroImage = heroImage;

// ============================================================================
// 1. PER-CITY DATA
// ============================================================================
const cityDetails = {
  Gurugram: { state: 'Haryana', districts: ['Golf Course Road', 'Cyber City', 'MG Road', 'Udyog Vihar', 'Sohna Road'] },
  Bhubaneswar: { state: 'Odisha', districts: ['Jaydev Vihar', 'Patia (Infocity)', 'Saheed Nagar', 'Chandrasekharpur', 'Nayapalli'] },
  Bangalore: { state: 'Karnataka', districts: ['MG Road', 'Koramangala', 'Indiranagar', 'Whitefield', 'HSR Layout'] },
  Hyderabad: { state: 'Telangana', districts: ['HITEC City', 'Gachibowli', 'Banjara Hills', 'Madhapur', 'Jubilee Hills'] },
  Chennai: { state: 'Tamil Nadu', districts: ['Guindy', 'Nungambakkam', 'T. Nagar', 'OMR', 'Anna Salai'] },
  Lucknow: { state: 'Uttar Pradesh', districts: ['Hazratganj', 'Gomti Nagar', 'Vibhuti Khand', 'Aliganj', 'Indira Nagar'] },
  Pune: { state: 'Maharashtra', districts: ['Koregaon Park', 'Baner', 'Viman Nagar', 'Hinjewadi', 'Kalyani Nagar'] },
  Noida: { state: 'Uttar Pradesh', districts: ['Sector 62', 'Sector 63', 'Sector 18', 'Sector 132', 'Sector 125'] },
  Delhi: { state: 'Delhi', districts: ['Connaught Place', 'Nehru Place', 'Saket', 'Aerocity', 'Karol Bagh'] },
  Indore: { state: 'Madhya Pradesh', districts: ['Vijay Nagar', 'Palasia', 'AB Road', 'Race Course Road', 'MR 10'] },
  Ahmedabad: { state: 'Gujarat', districts: ['SG Highway', 'Prahlad Nagar', 'CG Road', 'Navrangpura', 'GIFT City'] },
  Jaipur: { state: 'Rajasthan', districts: ['C-Scheme', 'Malviya Nagar', 'Vaishali Nagar', 'Mansarovar', 'Tonk Road'] },
  Chandigarh: { state: 'Chandigarh (UT)', districts: ['Sector 17', 'Sector 34', 'Industrial Area Phase 1', 'Rajiv Gandhi IT Park', 'Sector 8'] },
  Kochi: { state: 'Kerala', districts: ['MG Road', 'Kakkanad (Infopark)', 'Edappally', 'Marine Drive', 'Panampilly Nagar'] },
  Kolkata: { state: 'West Bengal', districts: ['Salt Lake Sector V', 'Park Street', 'New Town', 'Camac Street', 'Ballygunge'] },
  Coimbatore: { state: 'Tamil Nadu', districts: ['RS Puram', 'Race Course', 'Peelamedu', 'Avinashi Road', 'Saibaba Colony'] },
  Goa: { state: 'Goa', districts: ['Panaji', 'Porvorim', 'Margao', 'Mapusa', 'Dona Paula'] },
  Mumbai: { state: 'Maharashtra', districts: ['BKC', 'Andheri East', 'Lower Parel', 'Nariman Point', 'Powai'] }
};

// Sub-locations come from each city's own data file: its area list plus the area of every listed space.
// Add an area (or a space in a new area) to the city file and a new card appears automatically.
const citySubLocations = {
  Gurugram: [gurugramAreas, gurugramSpaces],
  Bhubaneswar: [bhubaneshwarNeighborhoods, allBhubaneshwarOfficeCards],
  Bangalore: [bangaloreAreas, bangaloreSpaces],
  Hyderabad: [hyderabadAreas, hyderabadSpaces],
  Chennai: [chennaiAreas, chennaiSpaces],
  Lucknow: [lucknowAreas, lucknowSpaces],
  Pune: [puneNeighborhoods, allPuneOfficeCards],
  Noida: [noidaAreas, noidaSpaces],
  Delhi: [dehliNeighborhoods, allDehliOfficeCards],
  Indore: [indoreNeighborhoods, allIndoreOfficeCards],
  Ahmedabad: [ahmedabadAreas, ahmedabadSpaces],
  Jaipur: [jaipurAreas, jaipurSpaces],
  Chandigarh: [chandigarhAreas, chandigarhSpaces],
  Kochi: [kochiAreas, kochiSpaces],
  Kolkata: [kolkataAreas, kolkataSpaces],
  Coimbatore: [coimbatoreAreas, coimbatoreSpaces],
  Goa: [goaAreas, goaSpaces],
  Mumbai: [mumbaiAreas, mumbaiSpaces]
};

const buildSubLocations = (cityName) => {
  const [areas = [], spaces = []] = citySubLocations[cityName] || [];
  const names = [...areas, ...spaces.map((space) => space.area)];
  const seen = new Set();
  return names.filter((name) => {
    const key = String(name || '').trim().toLowerCase();
    if (!key || key === 'all' || key === cityName.toLowerCase() || seen.has(key)) return false;
    seen.add(key);
    return true;
  }).map((name) => String(name).trim());
};

export const toVirtualSlug = (cityName) => cityName.trim().toLowerCase().replace(/\s+/g, '-');

export const virtualOfficeCities = cityNames
  .filter((city) => cityDetails[city.name])
  .map((city) => ({
    name: city.name,
    slug: toVirtualSlug(city.name),
    image: city.image,
    ...cityDetails[city.name],
    subLocations: buildSubLocations(city.name)
  }));

export const getVirtualOfficeCity = (slug) =>
  virtualOfficeCities.find((city) => city.slug === String(slug || '').toLowerCase());

export const virtualOfficePath = (cityName) => `/virtual-office/${toVirtualSlug(cityName)}`;

// ============================================================================
// 2. SHARED PAGE COPY (templates take the city object)
// ============================================================================
export const virtualOfficeContent = {
  hero: {
    titlePrefix: 'Virtual Office in',
    titleSuffix: 'for GST, MCA & Business Registration',
    subtitle: (city) =>
      `A verified ${city.name} business address with rent agreement, NOC and utility bill, accepted for GST and company registration in ${city.state}.`,
    points: ['Govt-compliant address', 'GST & MCA accepted', '10,000+ businesses served', 'Setup in 24–72 hours']
  },

  locations: {
    title: (city) => `Virtual office locations in ${city.name}`,
    features: ['Business Address', 'GST Registration', 'Company Registration'],
    priceText: 'Price on request',
    button: 'Get Address Details'
  },

  benefits: {
    title: (city) => `Benefits of Virtual Office in ${city.name}`,
    button: 'Get Your Virtual Office',
    items: [
      { icon: '🏢', tint: 'bg-sky-50', title: 'Prime Business Address', text: (city) => `Use a prestigious ${city.name} address to build credibility with clients and partners.` },
      { icon: '📄', tint: 'bg-orange-50', title: 'GST & MCA Compliance', text: () => 'Addresses prepared for GST and company registration, with the documents authorities ask for.' },
      { icon: '📬', tint: 'bg-rose-50', title: 'Mail & Courier Handling', text: () => 'Never miss important documents or notices. We receive and hold your correspondence.' },
      { icon: '⚡', tint: 'bg-amber-50', title: 'Fast & Hassle-Free Setup', text: () => 'Documentation support with minimal effort. Get started in 24-72 hours.' },
      { icon: '🏦', tint: 'bg-emerald-50', title: 'Business Bank Account', text: () => 'Rent agreement, NOC and utility bill included to support current-account KYC.' }
    ]
  },

  cities: {
    title: 'Explore Top Cities For Virtual Offices',
    cardLabel: 'Virtual Office',
    button: 'Get Quote for virtual office across India'
  },

  form: {
    title: (city) => `Get your ${city.name} address`,
    subtitle: 'Get virtual office options and pricing that fit your business',
    placeholders: { name: 'Your Name', email: 'Email Address', phone: 'Mobile Number' },
    primaryButton: 'Get Quote',
    secondaryButton: 'Buy Now',
    expertLabel: 'Speak To our space expert',
    phone: '+91 9028760011'
  }
};
