import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from './components/Sidebar';
import ByRegion from './pages/ByRegion';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Sidebar />
      <Routes>
        <Route exact path="/" element={<ByRegion />}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
