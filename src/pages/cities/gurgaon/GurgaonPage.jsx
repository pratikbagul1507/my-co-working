import CityPageLayout from '../CityPageLayout';
import { gurgaonAreas, gurgaonSpaces } from './gurgaonData';

const GurgaonPage = () => {
  return (
    <CityPageLayout
      cityName="Gurgaon"
      areas={gurgaonAreas}
      spaces={gurgaonSpaces}
    />
  );
};

export default GurgaonPage;
