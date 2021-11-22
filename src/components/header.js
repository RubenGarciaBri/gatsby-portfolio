import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaCode, FaBars } from "react-icons/fa";
import { useOutsideClick } from "../utils/useOutsideClick";
import NavBar from "./layout/NavBar/NavBar";

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useRef();

  // useOutsideClick(mobileMenu, () => {
  //   if (isMenuOpen) {
  //     setIsMenuOpen(false);
  //   }
  // });

  return (
    <>
      <NavBar />
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
    </>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
