import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="nev-header">
      <nav>
        {/* Logo */}
        <div className="logo">
          <img 
            src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png"
            alt="Logo"
          />
        </div>

        {/* Burger button */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className={menuOpen ? 'line line1 open' : 'line line1'}></div>
          <div className={menuOpen ? 'line line2 open' : 'line line2'}></div>
          <div className={menuOpen ? 'line line3 open' : 'line line3'}></div>
        </div>

        {/* Navigation Links */}
        <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/add-book" onClick={() => setMenuOpen(false)}>Add Book</Link>
          </li>
          <li>
            <Link to="/reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
