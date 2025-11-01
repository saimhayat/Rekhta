import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close dropdown on mobile if clicked outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (window.innerWidth <= 768) {
        setIsProgramsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Stop click bubbling inside dropdown
  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      setIsProgramsOpen(!isProgramsOpen);
    }
  };

  return (
    <nav className="navbar">
      {/* LEFT - Logo */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <img src="/logo.svg" alt="Rekhta Logo" className="logo" />
          <span className="college-name">Rekhta Academy</span>
        </div>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          setMenuOpen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* CENTER - NAV LINKS */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        </li>

        <li
          className={`dropdown ${isProgramsOpen ? "open" : ""}`}
          onMouseEnter={() => window.innerWidth > 768 && setIsProgramsOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsProgramsOpen(false)}
          onClick={handleDropdownClick}
        >
          <Link >
            Programs <span className="arrow">▾</span>
          </Link>

          {isProgramsOpen && (
            <ul className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
              <li>
                <Link to="/programs/SSC" onClick={() => setMenuOpen(false)}>SSC</Link>
              </li>
              <li>
                <Link to="/programs/intermediate" onClick={() => setMenuOpen(false)}>Intermediate</Link>
              </li>
              <li>
                <Link to="/programs/Cambridge" onClick={() => setMenuOpen(false)}>Cambridge</Link>
              </li>
              <li>
                <Link to="/programs/ShortCourses" onClick={() => setMenuOpen(false)}>Short Courses</Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/admissions" onClick={() => setMenuOpen(false)}>Admissions</Link>
        </li>

        <li>
          <Link to="/faculty" onClick={() => setMenuOpen(false)}>Faculty</Link>
        </li>

        <li>
          <Link to="/whats-new" onClick={() => setMenuOpen(false)}>What's New</Link>
        </li>

        <li>
          <Link to="/campuses" onClick={() => setMenuOpen(false)}>Campuses</Link>
        </li>
      </ul>

      {/* RIGHT - BUTTON */}
      <div className="navbar-right">
        <Link to="/admission-inquiry" className="inquiry-btn">
          Admission Inquiry
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
