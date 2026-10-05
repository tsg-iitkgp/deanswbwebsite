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
        
        {/* Left: Logo & Title */}
        <div className="nav-brand">
          <Link to="/" onClick={closeMenu} style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg" 
              alt="IIT Kharagpur Logo" 
              className="kgp-logo"
            />
            <span className="brand-title" style={{ 
              fontSize: '1.3rem', 
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.02em',
              lineHeight: '1.2'
            }}>
              <span style={{ fontWeight: '500', color: 'var(--text-header)' }}>Dean</span>{' '}
              <span style={{ fontWeight: '500', color: 'var(--accent)' }}>Student Wellbeing</span>
            </span>
          </Link>
        </div>

        {/* Center: Links */}
        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/events" className="nav-link" onClick={closeMenu}>Events & Initiatives</NavLink></li>
          <li><NavLink to="/support" className="nav-link" onClick={closeMenu}>Support Services</NavLink></li>
          <li className="nav-item-dropdown">
            <span className="nav-link" style={{ cursor: 'pointer' }}>Resources</span>
            <div className="dropdown-menu">
              <NavLink to="/emergency-contacts" className="dropdown-item" onClick={closeMenu}>Emergency Contacts</NavLink>
              <NavLink to="/quick-links" className="dropdown-item" onClick={closeMenu}>Other Links</NavLink>
            </div>
          </li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About Us</NavLink></li>
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