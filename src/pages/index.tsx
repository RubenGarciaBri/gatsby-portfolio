import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Certificates from "../sections/Certificates";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Footer from "../components/Layout/Footer/Footer";
import CallToAction from "../components/CallToAction/CallToAction";
import Seo from "../components/seo";

const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    {/* <Portfolio />
    <Experience />
    <Certificates />
    <Contact /> */}
  </Layout>

  // <Seo title="Home" />
);

export default IndexPage;
