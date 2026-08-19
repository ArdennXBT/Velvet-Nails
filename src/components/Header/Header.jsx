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
            <svg
              className="header-logo-icon"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="30" cy="30" r="26" fill="#F0047F" />
              <path
                d="M30 15
                   C 30 15, 12 25, 12 38
                   C 12 47, 20 54, 30 54
                   C 40 54, 48 47, 48 38
                   C 48 25, 30 15, 30 15 Z"
                fill="#FFFFFF"
              />
              <path
                d="M30 22
                   C 30 22, 19 30, 19 39
                   C 19 46, 24 51, 30 51"
                fill="none"
                stroke="#F5A9D2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span className="header-logo-text">Velvet Nails</span>
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