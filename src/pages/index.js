import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Certifications from "../components/sections/Certifications";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import Seo from "../components/seo";
import { heroData } from "../components/data/heroData"

const IndexPage = () => (
  <>
    <Hero {...heroData}/>
    <About />
    <Certifications />
    <Portfolio />
    <Contact />
  </>

  // <Seo title="Home" />
);

export default IndexPage;
