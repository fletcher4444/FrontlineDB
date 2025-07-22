// components/NavbarComponent.jsx

import { Link, useLocation } from "react-router-dom";
import { isLoggedIn, logout } from "../auth/Utils/auth";
import "./Navbar.css";
import { FiSun, FiMoon } from 'react-icons/fi';
import { useState,useEffect } from "react";

// components/NavbarComponent.jsx

const NavbarComponent = ({ logo, title, links, profileLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const loggedIn = isLoggedIn();
   const [theme, setTheme] = useState('light');


  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);


  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.body.setAttribute('data-theme', savedTheme);
  }, []);



    const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };


  return (
    <nav className="navbar glass-navbar">
      <div className="navbar-left">
        {logo && <img src={logo} alt="Logo" className="navbar-logo" />}
        <span className="navbar-title">{title}</span>
      </div>
     

      <button className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <li key={link.path} className={location.pathname === link.path ? "active" : ""}>
            <Link to={link.path} onClick={closeMenu}>{link.label}</Link>
          </li>
        ))}

        {loggedIn ? (
          <>
            {profileLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} onClick={closeMenu}>{link.label}</Link>
              </li>
            ))}
            <li><button onClick={() => { logout(); closeMenu(); }} className="navbar-logout">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
            <li><Link to="/register" onClick={closeMenu}>Register</Link></li>
          </>
        )}
      </ul>
       <div className="navbar-right">
        {/* Light/Dark toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <FiMoon /> : <FiSun />}
        </button>
      </div>
    </nav>
  );
};

export default NavbarComponent;
