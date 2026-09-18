import { generateCitySpaces } from '../common/cityHelpers';

export const delhiAreas = [
  'All',
  'Connaught Place',
  'Nehru Place',
  'Saket',
  'Okhla',
  'Aerocity',
  'Lajpat Nagar',
  'Netaji Subhash Place'
];

export const delhiSpaces = generateCitySpaces('Delhi', delhiAreas);
