import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaCode, FaBars } from "react-icons/fa";

const Header = ({ siteTitle }) => (
  <nav className="navbar py-3 z-50">
    <div className="main-container flex items-center justify-between">
      <div className="logo-box">
        <a href="#section-1" className="">
          <FaCode className="mr-40 text-6xl" />
        </a>
      </div>
      <ul className="flex items-center justify-center hidden sm:flex">
        <li className="">
          <a
            href="#section-2"
            className="mr-4 py-2 px-2 font-bold text-xl tracking-wide"
          >
            About
          </a>
        </li>
        <li className="navbar__list-item">
          <a
            href="#section-3"
            className="mr-4 py-2 px-2 font-bold text-xl tracking-wide"
          >
            Certifications
          </a>
        </li>
        <li className="navbar__list-item">
          <a
            href="#section-4"
            className="mr-4 py-2 px-2 font-bold text-xl tracking-wide"
          >
            Portfolio
          </a>
        </li>
        <li className="navbar__list-item">
          <a
            href="#section-5"
            className="py-2 px-2 font-bold text-xl tracking-wide"
          >
            Contact
          </a>
        </li>
      </ul>
      {/* Mobile Menu */}
      <FaBars className="sideNav__icon sm:hidden" />
      <ul className="sideNav shadow-slim sm:hidden">
        <li className="sideNav__item">
          <a href="#section-2">
            <span>About</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="#section-3">
            <span>Certifications</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="#section-4">
            <span>Portfolio</span>
          </a>
        </li>
        <li className="sideNav__item">
          <a href="#section-5">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
