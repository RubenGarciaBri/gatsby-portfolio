import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaCode, FaBars } from "react-icons/fa";

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenu = useRef();

  useOutsideClick(mobileMenu, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  return (
    <nav className="navbar py-3 z-50">
      <div className="main-container flex items-center justify-between">
        <div className="logo-box">
          <a href="#section-1" className="">
            <FaCode className="mr-40 text-6xl" />
          </a>
        </div>
        <ul className="flex items-center justify-center hidden md:flex">
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
        <FaBars
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sideNav__icon md:hidden cursor-pointer text-xl"
        />
        {isMenuOpen ? (
          <ul
            ref={mobileMenu}
            className="sideNav shadow-slim md:hidden p-10 bg-blue-500"
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
