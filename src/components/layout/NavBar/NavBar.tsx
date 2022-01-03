import React from "react";
import { FaCode, FaBars } from "react-icons/fa";
import Links from "./Links";
import { navData } from "../../data/navData";

const Navbar = () => {
  return (
    <nav className="z-50 py-3 navbar">
      <div className="flex items-center justify-between main-container">
        <div className="logo-box">
          <a href="#section-1" className="">
            <FaCode className="mr-40 text-6xl" />
          </a>
        </div>
        <Links navLinks={navData} />
        {/* Mobile Menu */}
        {/* <FaBars className="sideNav__icon sm:hidden" />
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
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
