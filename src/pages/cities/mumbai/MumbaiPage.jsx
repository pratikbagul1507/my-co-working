import CityPageLayout from '../CityPageLayout';
import { mumbaiAreas, mumbaiSpaces } from './mumbaiData';

const MumbaiPage = () => {
  return (
    <CityPageLayout
      cityName="Mumbai"
      areas={mumbaiAreas}
      spaces={mumbaiSpaces}
    />
  );
};

export default MumbaiPage;
