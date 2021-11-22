import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaCode, FaBars } from "react-icons/fa";
import { useOutsideClick } from "../utils/useOutsideClick";


const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useRef();

  useOutsideClick(mobileMenu, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <nav className="z-50 py-3 navbar">
      <div className="flex items-center justify-between main-container">
        <div className="logo-box">
          <a href="#section-1" className="">
            <FaCode className="mr-40 text-6xl" />
          </a>
        </div>
        <ul className="flex items-center justify-center hidden md:flex">
          <li className="">
            <a
              href="#section-2"
              className="px-2 py-2 mr-4 text-xl font-bold tracking-wide"
            >
              About
            </a>
          </li>
          <li className="navbar__list-item">
            <a
              href="#section-3"
              className="px-2 py-2 mr-4 text-xl font-bold tracking-wide"
            >
              Certifications
            </a>
          </li>
          <li className="navbar__list-item">
            <a
              href="#section-4"
              className="px-2 py-2 mr-4 text-xl font-bold tracking-wide"
            >
              Portfolio
            </a>
          </li>
          <li className="navbar__list-item">
            <a
              href="#section-5"
              className="px-2 py-2 text-xl font-bold tracking-wide"
            >
              Contact
            </a>
          </li>
        </ul>
        {/* Mobile Menu */}
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-xl cursor-pointer sideNav__icon md:hidden"
        />
        {isMenuOpen ? (
          <ul
            ref={mobileMenu}
            className="p-10 bg-blue-500 sideNav shadow-slim md:hidden"
          >
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
        ) : null}
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
