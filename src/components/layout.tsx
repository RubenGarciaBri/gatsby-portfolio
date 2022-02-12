/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Navbar from "./Layout/NavBar/NavBar";
import CallToAction from "./CallToAction/CallToAction";
import Footer from "./Layout/Footer/Footer";

import Header from "./header";
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Navbar />
      {children}
      <CallToAction />
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
