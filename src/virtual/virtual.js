/**
 * ============================================================================
 * VIRTUAL OFFICE PAGE DATA STORE (virtual.js)
 * ============================================================================
 * All copy for the city "Virtual Office" page lives here; Virtualoffice.jsx only renders it.
 *
 *  1. Per-city data (business districts, state for GST, image)  -> virtualOfficeCities
 *  2. Shared page copy (hero text, benefits, steps, plans, FAQ)   -> virtualOfficeContent
 *  3. Helpers (slug, lookup, text templates)
 *
 * Content is general public information about Indian virtual offices (business
 * address, GST / MCA registration support, mail handling). It is not scraped
 * from any one website, and no prices are listed: the team quotes per city.
 * ============================================================================
 */
import heroImage from '../assets/images/virtual-office-bg.jpg';
import { cityNames } from '../home/homedata.js';

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

export const toVirtualSlug = (cityName) => cityName.trim().toLowerCase().replace(/\s+/g, '-');

export const virtualOfficeCities = cityNames
  .filter((city) => cityDetails[city.name])
  .map((city) => ({
    name: city.name,
    slug: toVirtualSlug(city.name),
    image: city.image,
    ...cityDetails[city.name]
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

  form: {
    title: (city) => `Get your ${city.name} address`,
    subtitle: 'Get virtual office options and pricing that fit your business',
    placeholders: { name: 'Your Name', email: 'Email Address', phone: 'Mobile Number' },
    primaryButton: 'Get Quote',
    secondaryButton: 'Buy Now',
    expertLabel: 'Speak To our space expert',
    phone: '+91 9028760011'
  },

  districts: {
    title: (city) => `Business addresses available across ${city.name}`,
    subtitle: 'Pick the micro-market that suits your brand, we match you with a verified address there.'
  },

  benefits: {
    title: 'Why take a virtual office',
    items: [
      { icon: '📍', title: 'Prime business address', text: 'Show a professional address on your website, invoices and visiting cards without paying for a full office.' },
      { icon: '🧾', title: 'GST & MCA ready', text: 'Documents are prepared so the address can be used for GST registration and company incorporation.' },
      { icon: '📬', title: 'Mail & courier handling', text: 'Letters and parcels received in your company name are held and forwarded or collected by you.' },
      { icon: '💰', title: 'Save up to 80% on rent', text: 'Skip deposits, fit-outs and utilities. Pay one simple annual fee instead of a monthly lease.' },
      { icon: '🏢', title: 'Meeting rooms on demand', text: 'Book a meeting room or day desk at partner centres whenever you need to meet clients.' },
      { icon: '⚡', title: 'Quick setup', text: 'Most addresses are activated within 24 to 72 hours once your documents are verified.' }
    ]
  },

  steps: {
    title: 'How it works',
    items: [
      { title: 'Share your requirement', text: 'Tell us your city, purpose (GST, MCA or just a business address) and preferred area.' },
      { title: 'Choose your address', text: 'Our expert shares verified options with a clear quote and what is included.' },
      { title: 'Submit KYC', text: 'Upload the PAN, ID proof and address proof of the owner or directors.' },
      { title: 'Get your documents', text: 'Receive the agreement, NOC and utility bill and use them for your registration.' }
    ]
  },

  documents: {
    title: 'What you receive',
    items: ['Rent / service agreement', 'No-Objection Certificate (NOC)', 'Utility bill copy', 'Mail & courier handling', 'Support for GST address verification']
  },

  plans: {
    title: 'Virtual office plans',
    subtitle: 'Final pricing depends on the city and address. Request a quote for exact rates.',
    items: [
      { name: 'GST Registration', tag: 'Most popular', features: ['Address for GST registration', 'Agreement + NOC + utility bill', 'Help with address verification'] },
      { name: 'Company / MCA Registration', tag: 'For startups', features: ['Registered office address', 'Accepted for Pvt Ltd, LLP and OPC', 'Documents ready for ROC filing'] },
      { name: 'Business Address + Mail', tag: 'All-in-one', features: ['Address on website and invoices', 'Mail & courier handling', 'Meeting room access on request'] }
    ]
  },

  faqs: {
    title: 'Frequently asked questions',
    items: [
      { q: 'Is a virtual office address valid for GST registration?', a: 'Yes. A virtual office address backed by a rent or service agreement, NOC and a utility bill is commonly accepted for GST registration. Final acceptance rests with the tax authority.' },
      { q: 'Can I register a company with a virtual office?', a: 'Yes. Private Limited companies, LLPs and OPCs can use it as the registered office address when the required documents are provided.' },
      { q: 'How long does it take to get started?', a: 'Usually 24 to 72 hours after your KYC documents are verified.' },
      { q: 'Do I get to use a physical desk?', a: 'A virtual office does not include a fixed desk, but you can book meeting rooms and day desks at partner centres when needed.' },
      { q: 'How is my mail handled?', a: 'Letters and parcels addressed to your business are received at the centre and held for pickup or forwarded to you.' },
      { q: 'Are there any hidden charges?', a: 'No. Your quote lists what is included. Add-ons such as meeting rooms are charged only if you use them.' }
    ]
  },

  cta: {
    title: (city) => `Ready to get your ${city.name} business address?`,
    text: 'Talk to our space expert and get a custom quote today.',
    button: 'Get Quote'
  }
};
