import './App.css';
import Sidebar from './components/Sidebar';
import ByRegion from './components/ByRegion';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ByRegion />}>
        </Route>
      </Routes>
    </BrowserRouter>
    <ByRegion />
    </>
  );
}

export default App;
