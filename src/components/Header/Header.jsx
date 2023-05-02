import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavbarBrand } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom"; // Link

import "./header.css";
import logo from "../../assets/images/logo.jpg";

const nav_links = [
  { path: "/home", display: "Home" }, // if path contains # it goes to 'Home'
  // { path:'/about', display:'About' },
  { path: "/events", display: "Events" },
  { path: "/users", display: "Users" },
  { path: "/login", display: "Login" },
  { path: "/signup", display: "Signup" },
];

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <NavbarBrand href="#home">DINING INTERNATIONAL</NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="noclass">
          <ul className="menu d-flex align-items-center gap-5">
            {nav_links.map((item, index) => (
              <li className="nav_item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "active_link" : ""
                  }
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Header;

/*

      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
            <NavbarBrand href='#home'>Text NavBrand</NavbarBrand>
            <NavbarToggle aria-controls='responsive-navbar-nav' />
            <NavbarCollapse id="responsive-navbar-nav">
                <Nav className="noclass">
                    <Link to="/home">Home</Link>
                    <Link to="/events">Events</Link>
                    <Link to="/users">Users</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </Nav>
            </NavbarCollapse>
        </Navbar>

*/
