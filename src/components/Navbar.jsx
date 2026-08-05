import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" id="navbar">
      <div className="container nav-container">
        
        {/* Left: Logo */}
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg" 
              alt="IIT Kharagpur Logo" 
              className="kgp-logo"
            />
          </Link>
        </div>

        {/* Center: Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Welfare Portals</NavLink></li>
          <li><NavLink to="/resources" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Resources</NavLink></li>
          <li><NavLink to="/events" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Events</NavLink></li>
          <li><NavLink to="/initiatives" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>Support Services</NavLink></li>
          <li><NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`} onClick={closeMenu}>About Us</NavLink></li>
        </ul>
        
        {/* Right: Actions */}
        <div className="nav-actions">
          <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
