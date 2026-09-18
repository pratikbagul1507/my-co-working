import CityPageLayout from '../CityPageLayout';
import { delhiAreas, delhiSpaces } from './delhiData';

const DelhiPage = () => {
  return (
    <CityPageLayout
      cityName="Delhi"
      areas={delhiAreas}
      spaces={delhiSpaces}
    />
  );
};

export default DelhiPage;
