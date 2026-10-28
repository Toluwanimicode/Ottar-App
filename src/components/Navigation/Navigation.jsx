import { useState } from "react";
import logoDark from "../assets/logo-dark.png";
import logoLight from "../assets/logo-light.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY > 80);
  });

  return (
    <header
      className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-container">
        {/* Logo */}
        <div className="logo">
          <img
            src={scrolled ? logoDark : logoLight}
            alt="Logo"
          />
        </div>

        {/* Menu */}
        <nav className="nav-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li className="has-dropdown">
              <a href="#services">Services</a>
              <ul className="dropdown">
                <li><a href="#web">Web Development</a></li>
                <li><a href="#design">UI/UX Design</a></li>
                <li><a href="#marketing">Digital Marketing</a></li>
              </ul>
            </li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
