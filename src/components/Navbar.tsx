import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../styles/Home.css';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const isHomePage = location.pathname === '/';
  const isNewPatientPage = location.pathname === '/appointment';

  return (
    <nav className="nav-bar">
      <div className="logo">
        {isHomePage ? (
          <a href="#section1">
            <img src={Logo} alt="Logo" />
          </a>
        ) : (
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        )}
      </div>
      <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
        <ul className="nav-items">
          {/* Home */}
          <li onClick={closeMenu}>
            {isHomePage ? (
              <a href="#section1">Home</a>
            ) : (
              <Link to="/">Home</Link>
            )}
          </li>

          {/* Conditional Navigation for Other Pages */}
          {isHomePage ? (
            <>
              <li onClick={closeMenu}><a href="#section2">Testimonials</a></li>
              <li onClick={closeMenu}><a href="#section3">Services</a></li>
              <li onClick={closeMenu}><a href="#section6">Our Docs</a></li>
              <li onClick={closeMenu}><a href="#section7">Contact us</a></li>
              <li onClick={closeMenu}><Link to="/new-patient-forms">New Patient Forms</Link></li>
            </>
          ) : (
            <>
              {/* Dropdown for Services */}
              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen}
                >
                  Services
                </button>
                {dropdownOpen && (
                  <ul className="dropdown-menu">
                    <li onClick={closeMenu}><Link to="/chiropractic">Chiropractic Care</Link></li>
                    <li onClick={closeMenu}><Link to="/car-accident-recovery">Car Accident Recovery</Link></li>
                    <li onClick={closeMenu}><Link to="/laser">Laser Therapy</Link></li>
                    <li onClick={closeMenu}><Link to="/spinal">Spinal Decompression</Link></li>
                    <li onClick={closeMenu}><Link to="/massage">Massage Therapy</Link></li>
                    <li onClick={closeMenu}><Link to="/shockwave">Shockwave Therapy</Link></li>
                    <li onClick={closeMenu}><Link to="/orthotics">Custom Orthotics</Link></li>
                    <li onClick={closeMenu}><Link to="/exercise">Exercise Therapy</Link></li>
                    <li onClick={closeMenu}><Link to="/functional">Functional Medicine</Link></li>
                  </ul>
                )}
              </li>
              <li onClick={closeMenu}><Link to="/new-patient-forms">New Patient Forms</Link></li>
              {!isNewPatientPage && (
                <li onClick={closeMenu}><Link to="/appointment">Request Appointment</Link></li>
              )}
            </>
          )}
        </ul>
      </nav>
      {/* Hamburger Menu for Mobile */}
      <button className="hamburger" onClick={toggleMenu} aria-label="Menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;