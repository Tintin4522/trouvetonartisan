
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <div className="adress">
                <p>Antenne de Lyon:</p>
                <p>101 cours Charlemagne</p>
                <p>CS 20033</p>
                <p>69269 LYON CEDEX 02</p>
                <p>France</p>
                <p><a href="tel:+33426734000">+33 (0)4 26 73 40 00</a></p>
            </div>
            <div className="legalesPages">
                <Link to="/notfound">Mentions légales</Link>
                <Link to="/notfound">Données personnelles</Link>
                <Link to="/notfound">Accessibilité</Link>
                <Link to="/notfound">Cookies</Link>
                <Link to="/notfound">Contact</Link>
            </div>
            <div className="socialLinks">
                <a href="https://www.facebook.com/RegionAuvergneRhoneAlpes" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/auvergne-rhone-alpes" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/c/regionauvergnerhonealpes" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://www.instagram.com/region_auvergnerhonealpes/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://x.com/auvergnerhalpes" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                </a>
            </div>
        </footer>
    );
}

export default Footer;