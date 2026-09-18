import { generateCitySpaces } from '../common/cityHelpers';

export const mumbaiAreas = [
  'All',
  'BKC',
  'Andheri East',
  'Lower Parel',
  'Powai',
  'Malad West',
  'Nariman Point',
  'Thane',
  'Navi Mumbai'
];

export const mumbaiSpaces = generateCitySpaces('Mumbai', mumbaiAreas);
