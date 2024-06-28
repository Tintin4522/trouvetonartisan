

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerToggler = document.querySelector(".hamburger");
    const navLinksContainer = document.querySelector(".navlinks-container");
  
    if (!hamburgerToggler) {
        console.error('Element with class .hamburger not found.');
        return;
    }
  
    const toggleNav = () => {
        hamburgerToggler.classList.toggle("open");
  
        const ariaToggle = hamburgerToggler.getAttribute("aria-expanded") === "true" ? "false" : "true";
        hamburgerToggler.setAttribute("aria-expanded", ariaToggle);
        
        navLinksContainer.classList.toggle("open");
    };
  
    hamburgerToggler.addEventListener("click", toggleNav);
  
    new ResizeObserver(entries => {
        if (entries[0].contentRect.width <= 900) {
            navLinksContainer.style.transition = "transform 0.3s ease-out";
        } else {
            navLinksContainer.style.transition = "none";
        }
    }).observe(document.body);
});

function Header() {
    return (
        <header>
            <nav>
                <a href="Home" className="nav-icon" aria-label="Page d'accueil">
                    <img className="img-header" src="/img/Logo.png" alt="Logo trouve ton artisan"></img>
                </a>

                <div className="navlinks">
                    <button className="hamburger" type="button" aria-label="navigation" aria-expanded="false">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="navlinks-container">
                        <a href="Home" aria-current="page">Accueil</a>
                        <a href="Batiment">Bâtiment</a> 
                        <a href="Services">Services</a> 
                        <a href="Fabrication">Fabrication</a> 
                        <a href="Alimentation">Alimentation</a> 
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;