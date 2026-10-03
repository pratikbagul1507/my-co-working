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
import { ahmedabadAreas } from '../pages/ahmedabad/ahmedabadData.js';
import { bangaloreAreas } from '../pages/bangalore/bangaloreData.js';
import { bhubaneshwarNeighborhoods } from '../pages/bhubaneswar/bhubaneswarData.js';
import { chandigarhAreas } from '../pages/chandigarh/chandigarhData.js';
import { chennaiAreas } from '../pages/chennai/chennaiData.js';
import { coimbatoreAreas } from '../pages/coimbatore/coimbatoreData.js';
import { dehliNeighborhoods } from '../pages/delhi/delhiData.js';
import { goaAreas } from '../pages/goa/goaData.js';
import { gurugramAreas } from '../pages/gurugram/gurugramData.js';
import { hyderabadAreas } from '../pages/hyderabad/hyderabadData.js';
import { indoreNeighborhoods } from '../pages/indore/indoreData.js';
import { jaipurAreas } from '../pages/jaipur/jaipurData.js';
import { kochiAreas } from '../pages/kochi/kochiData.js';
import { kolkataAreas } from '../pages/kolkata/kolkataData.js';
import { lucknowAreas } from '../pages/lucknow/lucknowData.js';
import { mumbaiAreas } from '../pages/mumbai/mumbaiData.js';
import { noidaAreas } from '../pages/noida/noidaData.js';
import { puneNeighborhoods } from '../pages/pune/puneData.js';

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

// Sub-locations come from each city's own data file (its area / neighbourhood list)
const citySubLocations = {
  Gurugram: gurugramAreas,
  Bhubaneswar: bhubaneshwarNeighborhoods,
  Bangalore: bangaloreAreas,
  Hyderabad: hyderabadAreas,
  Chennai: chennaiAreas,
  Lucknow: lucknowAreas,
  Pune: puneNeighborhoods,
  Noida: noidaAreas,
  Delhi: dehliNeighborhoods,
  Indore: indoreNeighborhoods,
  Ahmedabad: ahmedabadAreas,
  Jaipur: jaipurAreas,
  Chandigarh: chandigarhAreas,
  Kochi: kochiAreas,
  Kolkata: kolkataAreas,
  Coimbatore: coimbatoreAreas,
  Goa: goaAreas,
  Mumbai: mumbaiAreas
};

const buildSubLocations = (cityName) => {
  const seen = new Set();
  return (citySubLocations[cityName] || []).filter((name) => {
    const key = String(name).trim().toLowerCase();
    if (!key || key === 'all' || key === cityName.toLowerCase() || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
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
