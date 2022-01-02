import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import ByRegion from './pages/ByRegion';

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
        <Route exact path="/" element={<ByRegion />}>
        </Route>
      </Routes>
    </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
