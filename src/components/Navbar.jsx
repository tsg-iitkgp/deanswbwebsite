import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((isOpen) => !isOpen);
    setResourcesOpen(false);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setResourcesOpen(false);
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
        <ul id="main-navigation" className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li><NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/events" className="nav-link" onClick={closeMenu}>Events & Initiatives</NavLink></li>
          <li><NavLink to="/support" className="nav-link" onClick={closeMenu}>Support Services</NavLink></li>
          <li className={`nav-item-dropdown ${resourcesOpen ? 'resources-open' : ''}`}>
            <button
              type="button"
              className="nav-link nav-dropdown-toggle"
              aria-expanded={resourcesOpen}
              aria-controls="resources-navigation"
              onClick={() => setResourcesOpen((isOpen) => !isOpen)}
            >
              Resources <ChevronDown size={16} aria-hidden="true" />
            </button>
            <div id="resources-navigation" className="dropdown-menu">
              <NavLink to="/emergency-contacts" className="dropdown-item" onClick={closeMenu}>Emergency Contacts</NavLink>
              <NavLink to="/quick-links" className="dropdown-item" onClick={closeMenu}>Other Links</NavLink>
            </div>
          </li>
          <li><NavLink to="/about" className="nav-link" onClick={closeMenu}>About Us</NavLink></li>
        </ul>
        
        {/* Right: Actions */}
        <div className="nav-actions">
          <button
            type="button"
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="main-navigation"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
