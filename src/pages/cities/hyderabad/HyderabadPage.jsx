import CityPageLayout from '../CityPageLayout';
import { hyderabadAreas, hyderabadSpaces } from './hyderabadData';

const HyderabadPage = () => {
  return (
    <CityPageLayout
      cityName="Hyderabad"
      areas={hyderabadAreas}
      spaces={hyderabadSpaces}
    />
  );
};

export default HyderabadPage;
