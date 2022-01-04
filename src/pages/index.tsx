import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Certificates from "../components/sections/Certificates";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import Seo from "../components/seo";

const IndexPage = () => (
  <>
    <Hero />
    <About />
    <Certificates />
    <Portfolio />
    <Contact />
  </>

  // <Seo title="Home" />
);

export default IndexPage;
