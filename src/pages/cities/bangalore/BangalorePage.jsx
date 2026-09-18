import CityPageLayout from '../CityPageLayout';
import { bangaloreAreas, bangaloreSpaces } from './bangaloreData';

const BangalorePage = () => {
  return (
    <CityPageLayout
      cityName="Bangalore"
      areas={bangaloreAreas}
      spaces={bangaloreSpaces}
    />
  );
};

export default BangalorePage;
