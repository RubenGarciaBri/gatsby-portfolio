import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FaCode, FaBars } from "react-icons/fa";
import { useOutsideClick } from "../utils/useOutsideClick";
import NavBar from "./Layout/NavBar/NavBar";

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
