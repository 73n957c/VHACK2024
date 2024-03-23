import '../component-css/navBar.css';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
  };

  return (
    <Navbar expand="lg" id="navbar" className="bg-body-tertiary">
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <img src="Resources\logo white.png" className="logo-img" alt="logo" />
            <NavItem
              to="/"
              label="HOME"
              active={activeMenuItem === 0}
              onClick={() => handleMenuItemClick(0)}
            />
            <NavItem
              to="/education"
              label="EDUCATION"
              active={activeMenuItem === 1}
              onClick={() => handleMenuItemClick(1)}
            />
            <NavItem
              to="/challenge"
              label="CHALLENGE"
              active={activeMenuItem === 2}
              onClick={() => handleMenuItemClick(2)}
            />
            <NavItem
              to="/community"
              label="COMMUNITY"
              active={activeMenuItem === 3}
              onClick={() => handleMenuItemClick(3)}
            />
            <NavItem
              to="/news"
              label="NEWS / ARTICLES"
              active={activeMenuItem === 4}
              onClick={() => handleMenuItemClick(4)}
            />
            <NavItem
              to="/about"
              label="ABOUT US"
              active={activeMenuItem === 5}
              onClick={() => handleMenuItemClick(5)}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// NavItem component to handle navigation links
const NavItem = ({ to, label, active, onClick }) => (
  <li>
    <Link
      to={to}
      className={active ? "nav-link active" : "nav-link"}
      onClick={onClick}
    >
      {label}
    </Link>
  </li>
);

export default NavBar;