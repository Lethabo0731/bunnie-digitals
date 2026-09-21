import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          Bunnie<span>Digitals</span>
        </Link>

        <nav className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>

          <Link to="/about" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>

          <Link
            to="/contact#project-enquiry"
            className="nav-cta"
            onClick={closeMenu}
          >
            Get a Quote
            <FiArrowUpRight />
          </Link>
        </nav>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;