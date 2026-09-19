import { gurgaonAreas, gurgaonSpaces } from './gurgaon/gurgaonData';
import { puneAreas, puneSpaces } from './pune/puneData';
import { bangaloreAreas, bangaloreSpaces } from './bangalore/bangaloreData';
import { mumbaiAreas, mumbaiSpaces } from './mumbai/mumbaiData';
import { delhiAreas, delhiSpaces } from './delhi/delhiData';
import { hyderabadAreas, hyderabadSpaces } from './hyderabad/hyderabadData';
import { noidaAreas, noidaSpaces } from './noida/noidaData';

import GurgaonPage from './gurgaon/GurgaonPage';
import PunePage from './pune/PunePage';
import BangalorePage from './bangalore/BangalorePage';
import MumbaiPage from './mumbai/MumbaiPage';
import DelhiPage from './delhi/DelhiPage';
import HyderabadPage from './hyderabad/HyderabadPage';
import NoidaPage from './noida/NoidaPage';

export const cityAreas = {
  Gurgaon: gurgaonAreas,
  Gurugram: gurgaonAreas,
  Pune: puneAreas,
  Bangalore: bangaloreAreas,
  Mumbai: mumbaiAreas,
  Hyderabad: hyderabadAreas,
  Delhi: delhiAreas,
  Noida: noidaAreas
};

export const citySpacesMap = {
  gurgaon: gurgaonSpaces,
  gurugram: gurgaonSpaces,
  pune: puneSpaces,
  bangalore: bangaloreSpaces,
  mumbai: mumbaiSpaces,
  delhi: delhiSpaces,
  hyderabad: hyderabadSpaces,
  noida: noidaSpaces
};

export const cityComponentMap = {
  gurgaon: GurgaonPage,
  gurugram: GurgaonPage,
  pune: PunePage,
  bangalore: BangalorePage,
  mumbai: MumbaiPage,
  delhi: DelhiPage,
  hyderabad: HyderabadPage,
  noida: NoidaPage
};

export const getCoworkingSpacesForCity = (cityName) => {
  if (!cityName) return [];
  const key = cityName.toLowerCase();
  if (citySpacesMap[key]) {
    return citySpacesMap[key];
  }
  return [];
};
