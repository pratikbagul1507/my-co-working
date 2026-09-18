import CityPageLayout from '../CityPageLayout';
import { puneAreas, puneSpaces } from './puneData';

const PunePage = () => {
  return (
    <CityPageLayout
      cityName="Pune"
      areas={puneAreas}
      spaces={puneSpaces}
    />
  );
};

export default PunePage;
