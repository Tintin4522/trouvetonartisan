import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import Header from "./components/Header";
import Footer from './components/Footer';
import Home from "./pages/HomePage";
import Batiment from "./pages/BatimentPage";
import Services from "./pages/ServicesPage";
import Fabrication from "./pages/FabricationPage";
import Alimentation from "./pages/AlimentationPage";
import Notfound from './pages/404Page';
import ArtisanDetail from './components/ArtisanDetail';
import SearchResults from './pages/SearchResults';

function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef(null);

  useEffect(() => {
      if (prevPathnameRef.current !== pathname) {
          window.scrollTo(0, 0);
          prevPathnameRef.current = pathname;
      }
  }, [pathname]);

  return null;
}


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/batiment" element={<Batiment />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fabrication" element={<Fabrication />} />
          <Route path="/alimentation" element={<Alimentation />} />
          <Route path="/notfound" element={<Notfound />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="/search-results" component={<SearchResults />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
