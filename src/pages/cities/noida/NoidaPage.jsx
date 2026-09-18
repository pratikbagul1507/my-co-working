import CityPageLayout from '../CityPageLayout';
import { noidaAreas, noidaSpaces } from './noidaData';

const NoidaPage = () => {
  return (
    <CityPageLayout
      cityName="Noida"
      areas={noidaAreas}
      spaces={noidaSpaces}
    />
  );
};

export default NoidaPage;
