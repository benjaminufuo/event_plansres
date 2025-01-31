import React from "react";
import { NavLink } from "react-router";
import "../components/css/header.css";
import logo from "../assets/Logo.jpg";

const Header = () => {
  return (
    <main className="headercontainer">
      <div className="logo">
        <img className="logo1" src={logo} />
      </div>
      <section className="navbar">
        <nav className="nav">
          <ul className="navlist">
            <li className="navitem">
              <NavLink
                to="/"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink
                to="/home/services"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="navitem">
              <NavLink
                to="/home/about-us"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                About Us
              </NavLink>
            </li>
            {/* <li className="navitem">
              <NavLink
                to="/home/blog"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Blog
              </NavLink>
            </li> */}
            <li className="navitem">
              <NavLink
                to="/home/contact"
                style={{
                  listStyleType: "none",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="verif">
          <li className="navitemlogin">
            <NavLink
              to="/login"
              style={{
                listStyleType: "none",
                textDecoration: "none",
                color: "white",
              }}
            >
              Log in
            </NavLink>
          </li>
          <li className="navitemsignup">
            <NavLink
              to="/signup"
              style={{
                listStyleType: "none",
                textDecoration: "none",
                color: "black",
              }}
            >
              Sign up
            </NavLink>
          </li>
        </div>
      </section>
    </main>
  );
};

export default Header;
