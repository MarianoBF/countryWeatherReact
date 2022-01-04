import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import ByRegion from './pages/ByRegion';
import Flags from './pages/Flags';
import FindCountry from './pages/FindCountry';
import FindCapital from './pages/FindCapital';
import FindBorders from './pages/FindBorders';
import CountryDetail from './pages/CountryDetail';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="layout">
    <BrowserRouter>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="mainLayout">
      <Routes>
        <Route exact path="/" element={<ByRegion />} />
        <Route path="/pais/:id" element={<CountryDetail />} />
        <Route path="/pais" element={<FindCountry />} />
        <Route path="/banderas" element={<Flags />} />
        <Route path="/capital" element={<FindCapital />} />
        <Route path="/limitrofes" element={<FindBorders />} />
        <Route path="*" element={<ByRegion />} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
