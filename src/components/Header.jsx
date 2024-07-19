import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); 
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

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
                        </div>
                    )}
                    <div className="navlinks">
                        <Link to='/search' className="search-icon" aria-label="Recherche">
                            <i className="fa-solid fa-magnifying-glass" id="search"></i>
                        </Link>
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
        </header>
    );
}

export default Header;