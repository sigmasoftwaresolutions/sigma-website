import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu, X } from "lucide-react";

const base = import.meta.env.BASE_URL;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Logo */}
        <div className="logo">
          <HashLink smooth to="/#home" onClick={closeMenu}>
            <img
              src={`${base}sigma-logo.svg`}
              alt="Sigma Software Solutions Logo"
              className="logo-img"
            />
          </HashLink>

          <HashLink smooth to="/#home" onClick={closeMenu}>
            <h2>Sigma Software Solutions</h2>
          </HashLink>
        </div>

        {/* Mobile Menu */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-links">

            <li>
              <HashLink smooth to="/#home" onClick={closeMenu}>
                Home
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#about" onClick={closeMenu}>
                About
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#services" onClick={closeMenu}>
                Services
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#products" onClick={closeMenu}>
                Products
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#why" onClick={closeMenu}>
                Why Us
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#industries" onClick={closeMenu}>
                Industries
              </HashLink>
            </li>

            <li>
              <HashLink smooth to="/#locateus" onClick={closeMenu}>
                Locate Us
              </HashLink>
            </li>

            <li>
              <NavLink to="/enquiry" onClick={closeMenu}>
                Enquiry
              </NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;