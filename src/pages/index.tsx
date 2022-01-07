import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Certificates from "../sections/Certificates";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Hero />
    <About />
    <Portfolio />
    <Certificates />
    <Contact />
  </>

  // <Seo title="Home" />
);

export default IndexPage;
