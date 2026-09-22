import { Routes, Route } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/Navbar';
import PunePage from './page/pune/Pune';

const App = () => {
  return (
    <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/coworking/pune" element={<PunePage />} />
        <Route path="*" element={<Homepage />} />
      </Routes>
    </div>
  );
};

export default App;