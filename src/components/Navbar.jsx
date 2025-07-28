import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const isHome = location.pathname === "/";
  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setExpanded(false);

  const navbarClass = `
    navbar
    ${isHome && !scrolled ? "navbar-transparent" : "navbar-colored"}
    ${scrolled || !isHome ? "show-navbar" : ""}
    `;

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`${navbarClass}`}
      variant="dark"
      expanded={expanded}
      onToggle={() => setExpanded((prev) => !prev)}
    >
      <Container>
        {/* Brand with Image + Text */}
        <BootstrapNavbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center gap-2"
          onClick={handleNavClick}
        >
          <img
            src={`${base}assets/logo.png`}
            alt="Logo"
            height="30"
            width="30"
            className="d-inline-block align-top"
          />
          CoffeePlace
        </BootstrapNavbar.Brand>

        {/* Toogle Button */}
        <BootstrapNavbar.Toggle aria-controls="navbarNav" />

        {/* Collapsible Nav Links */}
        <BootstrapNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={handleNavClick}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/events" onClick={handleNavClick}>
              Events
            </Nav.Link>
            <Nav.Link as={Link} to="/careers" onClick={handleNavClick}>
              Careers
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={handleNavClick}>
              About
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
    // <nav className={`navbar navbar-expand-lg fixed-top ${navbarClass}`}>
    //   <div className="container">
    //     <Link className="navbar-brand" to="/">
    //       CoffeePlace
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>

    //     <div className="collapse navbar-collapse" id="navbarNav">
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/events">
    //             Events
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/careers">
    //             Careers
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/about">
    //             About
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
