export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80';

export const priceFilterOptions = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under ₹8,000', value: 'under-8k', max: 8000 },
  { label: '₹8,000 - ₹12,000', value: '8k-12k', min: 8000, max: 12000 },
  { label: '₹12,000 - ₹16,000', value: '12k-16k', min: 12000, max: 16000 },
  { label: 'Above ₹16,000', value: 'above-16k', min: 16000 }
];
