import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header-velvet">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <NavLink to="/" className="header-logo" onClick={closeMenu}>
            Velvet Nails
          </NavLink>

          {/* Bouton hamburger (mobile) */}
          <button 
            className={`header-toggler ${isOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation */}
          <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
            <NavLink to="/" className="nav-link" onClick={closeMenu} end>
              Accueil
            </NavLink>
            <NavLink to="/galerie" className="nav-link" onClick={closeMenu}>
              Galerie
            </NavLink>
            <NavLink to="/rendez-vous" className="nav-link" onClick={closeMenu}>
              Rendez-vous
            </NavLink>
            <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;