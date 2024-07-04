import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./pages/HomePage";
import Batiment from "./pages/BatimentPage";
import Services from "./pages/ServicesPage";
import Fabrication from "./pages/FabricationPage";
import Alimentation from "./pages/AlimentationPage";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
