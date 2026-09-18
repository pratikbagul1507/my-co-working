import { gurgaonSpaces } from '../gurgaon/gurgaonData';

export const cityTemplates = [
  { name: 'WeWork Prime Hub', badge: 'Popular', rating: 4.7, price: 12999, priceFormatted: '₹12,999' },
  { name: '91springboard Hub', badge: 'Popular', rating: 4.3, price: 8499, priceFormatted: '₹8,499' },
  { name: 'Awfis Space Solutions', badge: 'Popular', rating: 4.5, price: 7499, priceFormatted: '₹7,499' },
  { name: 'Smartworks Business Park', badge: 'Premium', rating: 4.8, price: 15999, priceFormatted: '₹15,999' },
  { name: 'IndiQube Innovation Campus', badge: 'Popular', rating: 4.4, price: 9999, priceFormatted: '₹9,999' },
  { name: 'Innov8 Coworking Hub', badge: 'Premium', rating: 4.6, price: 11499, priceFormatted: '₹11,499' },
  { name: 'The Hive Workspace', badge: 'Popular', rating: 4.2, price: 6999, priceFormatted: '₹6,999' },
  { name: 'DevX Executive Center', badge: 'Premium', rating: 4.5, price: 13999, priceFormatted: '₹13,999' }
];

export const generateCitySpaces = (cityName, areasList) => {
  const cleanAreas = areasList.filter((a) => a !== 'All');
  return cityTemplates.map((template, idx) => {
    const area = cleanAreas[idx % cleanAreas.length];
    const sourceCard = gurgaonSpaces[idx % gurgaonSpaces.length];
    return {
      id: idx + 1,
      name: `${template.name} - ${area}`,
      badge: template.badge,
      rating: template.rating,
      city: cityName,
      area: area,
      address: `${area}, ${cityName}`,
      price: template.price,
      priceFormatted: template.priceFormatted,
      images: sourceCard.images
    };
  });
};
