import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isSearchVisible, setIsSearchVisible] = useState(false);    
    const [isNavOpen, setIsNavOpen] = useState(false);
    

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSearchToggle = () => {
        setIsSearchVisible(!isSearchVisible);
    };

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    }

    

    return (
        <header className="header">
            <nav>
                <Link to="/" className="nav-icon" aria-label="Page d'accueil">
                    <img className="img-header" src="/img/Logo.png" alt="Logo trouve ton artisan" />
                </Link>                
                <div className='header-left'>
                    {windowWidth <= 900 && (
                        <div className="mobile-nav">
                            <button className={`hamburger ${isNavOpen ? 'open' : ''}`} 
                                    type="button" 
                                    aria-label="navigation" 
                                    aria-expanded={isNavOpen}
                                    onClick={handleNavToggle}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div className="search-container">
                                <button className="search-icon" onClick={handleSearchToggle} aria-label="Recherche">
                                    <i className="fa-solid fa-magnifying-glass" id='search'></i>
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="navlinks">
                        <div className="search-container">
                            <input type="search" className="search-input" placeholder="Rechercher..." />
                        </div>
                        <div className={`navlinks-container ${isNavOpen ? 'open' : ''}`}>
                            <Link to="/" aria-current="page" onClick={closeNav}>Accueil</Link>
                            <Link to="/Batiment" onClick={closeNav}>Bâtiment</Link> 
                            <Link to="/Services" onClick={closeNav}>Services</Link> 
                            <Link to="/Fabrication" onClick={closeNav}>Fabrication</Link> 
                            <Link to="/Alimentation" onClick={closeNav}>Alimentation</Link> 
                        </div>
                    </div>
                </div>
            </nav>
            {isSearchVisible && windowWidth <= 900 && (
                <div className="mobile-search">
                    <input type="search" className="search-input-mobile" placeholder="Rechercher..." />
                </div>
            )}
        </header>
    );
}

export default Header;