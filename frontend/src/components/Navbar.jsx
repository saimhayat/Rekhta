import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close dropdown when resizing to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setIsProgramsOpen(false);
        document.body.style.overflow = "auto";
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Disable scrolling when mobile menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      setIsProgramsOpen(!isProgramsOpen);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.navbar') && menuOpen) {
        setMenuOpen(false);
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Rekhta Logo" className="logo" />
          <span className="college-name">Rekhta Academy</span>
        </div>
      </div>

      {/* MOBILE HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
          if (menuOpen) setIsProgramsOpen(false);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* NAV LINKS */}
      <ul
        className={`navbar-links ${menuOpen ? "active" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ✅ Close button inside <li> — valid HTML */}
        <li className="mobile-menu-header">
  <button
    className="close-btn"
    onClick={() => {
      setMenuOpen(false);
      setIsProgramsOpen(false);
    }}
    aria-label="Close menu"
  >
    ×
  </button>
</li>

        <li>
          <Link to="/" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>About Us</Link>
        </li>

        <li
          className={`dropdown ${isProgramsOpen ? "open" : ""}`}
          onMouseEnter={() => window.innerWidth > 768 && setIsProgramsOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsProgramsOpen(false)}
          onClick={handleDropdownClick}
        >
          <span>
            Programs <span className="arrow">▾</span>
          </span>

          {isProgramsOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/programs/SSC" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>SSC</Link>
              </li>
              <li>
                <Link to="/programs/intermediate" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Intermediate</Link>
              </li>
              <li>
                <Link to="/programs/Cambridge" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Cambridge</Link>
              </li>
              <li>
                <Link to="/programs/ShortCourses" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Short Courses</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/admissions" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Admissions</Link>
        </li>
        <li>
          <Link to="/faculty" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Faculty</Link>
        </li>
        <li>
          <Link to="/whats-new" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>What's New</Link>
        </li>
        <li>
          <Link to="/campuses" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>Campuses</Link>
        </li>

        {/* Mobile-only inquiry button */}
        <li className="mobile-inquiry">
          <Link to="/admission-inquiry" onClick={() => { setMenuOpen(false); setIsProgramsOpen(false); }}>
            Admission Inquiry
          </Link>
        </li>
      </ul>

      {/* DESKTOP BUTTON */}
      <div className="navbar-right">
        <Link to="/admission-inquiry" className="inquiry-btn">
          Admission Inquiry
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;