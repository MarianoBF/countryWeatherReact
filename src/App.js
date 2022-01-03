import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import ByRegion from './pages/ByRegion';
import Flags from './pages/Flags';
import FindCountry from './pages/FindCountry';
import FindCapital from './pages/FindCapital';
import FindBorders from './pages/FindBorders';

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
        <Route exact path="/pais" element={<FindCountry />} />
        <Route exact path="/banderas" element={<Flags />} />
        <Route exact path="/capital" element={<FindCapital />} />
        <Route exact path="/limitrofes" element={<FindBorders />} />
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
