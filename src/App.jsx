import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './home/Homepage';
import Navbar from './navbar/navbar';
import CoworkingSpace from './components/CoworkingSpace/CoworkingSpace';

const App = () => {
  return (
    <BrowserRouter>
      <div className="w-full min-h-screen overflow-x-hidden flex flex-col bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coworking" element={<CoworkingSpace />} />
          <Route path="/coworking/:cityName" element={<CoworkingSpace />} />
          <Route path="/cities/:cityName" element={<CoworkingSpace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;