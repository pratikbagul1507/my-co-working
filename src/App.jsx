import { Routes, Route, useParams } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/Navbar';
import { getDehliOfficeCardById } from './pages/delhi/delhiData';
import { getPuneOfficeCardById } from './pages/pune/puneData';
import { getIndoreOfficeCardById } from './pages/indore/indoreData';
import { getBhubaneshwarOfficeCardById } from './pages/bhubaneswar/bhubaneswarData';
import WhatsAppButton from './components/WhatsAppButton';
import VirtualOffice from './virtual/Virtualoffice';

import AhmedabadPage from './pages/ahmedabad/Ahmedabad';
import BangalorePage from './pages/bangalore/Bangalore';
import BhubaneswarPage from './pages/bhubaneswar/Bhubaneswar';
import ChandigarhPage from './pages/chandigarh/Chandigarh';
import ChennaiPage from './pages/chennai/Chennai';
import CoimbatorePage from './pages/coimbatore/Coimbatore';
import DelhiPage from './pages/delhi/Delhi';
import DelhiOfficeDetails from './pages/delhi/DelhiOfficeDetails';
import GoaPage from './pages/goa/Goa';
import GurugramPage from './pages/gurugram/Gurugram';
import HyderabadPage from './pages/hyderabad/Hyderabad';
import IndorePage from './pages/indore/Indore';
import IndoreOfficeDetails from './pages/indore/Indoreofficedetails';
import JaipurPage from './pages/jaipur/Jaipur';
import KochiPage from './pages/kochi/Kochi';
import KolkataPage from './pages/kolkata/Kolkata';
import LucknowPage from './pages/lucknow/Lucknow';
import MumbaiPage from './pages/mumbai/Mumbai';
import NoidaPage from './pages/noida/Noida';
import PunePage from './pages/pune/Pune';
import PuneOfficeDetail from './pages/pune/PuneOfficeDetail';
import BhubaneshwarOfficeDetail from './pages/bhubaneswar/BhubaneshwarOfficeDetail';
import AhmedabadOfficeDetails from './pages/ahmedabad/AhmedabadOfficeDetails';
import { getAhmedabadOfficeCardById } from './pages/ahmedabad/ahmedabadData';

// Resolves root-level office URLs like /futops-cowork-kharadi-pune to the right city's detail page.
const OfficeRoute = () => {
  const { id } = useParams();
  if (getDehliOfficeCardById(id)) return <DelhiOfficeDetails />;
  if (getPuneOfficeCardById(id)) return <PuneOfficeDetail />;
  if (getAhmedabadOfficeCardById(id)) return <AhmedabadOfficeDetails />;
  if (getIndoreOfficeCardById(id)) return <IndoreOfficeDetails />;
  if (getBhubaneshwarOfficeCardById(id)) return <BhubaneshwarOfficeDetail />;
  return <Homepage />;
};

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coworking/ahmedabad" element={<AhmedabadPage />} />
        <Route path="/coworking/ahmedabad/:id" element={<AhmedabadOfficeDetails />} />
        <Route path="/coworking/bangalore" element={<BangalorePage />} />
        <Route path="/coworking/bhubaneswar" element={<BhubaneswarPage />} />
        <Route path="/coworking/bhubaneshwar" element={<BhubaneswarPage />} />
        <Route path="/coworking/bhubaneshwar/:id" element={<BhubaneshwarOfficeDetail />} />
        <Route path="/coworking/bhubaneswar/:id" element={<BhubaneshwarOfficeDetail />} />
        <Route path="/coworking/chandigarh" element={<ChandigarhPage />} />
        <Route path="/coworking/chennai" element={<ChennaiPage />} />
        <Route path="/coworking/coimbatore" element={<CoimbatorePage />} />
        <Route path="/coworking/delhi" element={<DelhiPage />} />
        <Route path="/coworking/delhi/:id" element={<DelhiOfficeDetails />} />
        <Route path="/coworking/goa" element={<GoaPage />} />
        <Route path="/coworking/gurugram" element={<GurugramPage />} />
        <Route path="/coworking/hyderabad" element={<HyderabadPage />} />
        <Route path="/coworking/indore" element={<IndorePage />} />
        <Route path="/coworking/indore/:id" element={<IndoreOfficeDetails />} />
        <Route path="/coworking/jaipur" element={<JaipurPage />} />
        <Route path="/coworking/kochi" element={<KochiPage />} />
        <Route path="/coworking/kolkata" element={<KolkataPage />} />
        <Route path="/coworking/lucknow" element={<LucknowPage />} />
        <Route path="/coworking/mumbai" element={<MumbaiPage />} />
        <Route path="/coworking/noida" element={<NoidaPage />} />
        <Route path="/coworking/pune" element={<PunePage />} />
        <Route path="/coworking/pune/:id" element={<PuneOfficeDetail />} />
        <Route path="/virtual-office/:city" element={<VirtualOffice />} />
        <Route path="/:id" element={<OfficeRoute />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
};

export default App;