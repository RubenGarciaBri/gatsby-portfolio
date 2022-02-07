import React from "react";

// import profilePicture from "../../images/prof3.png";

import Navbar from "../components/Layout/NavBar/NavBar";
import HeroContainer from "../components/HeroContainer/HeroContainer";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import { heroData } from "../data/heroData";

const Hero = () => {
  const { heading, subHeading } = heroData;

  return (
    <section id="section-1" className="hero-section">
      <Navbar />
      <HeroContainer heading={heading} subHeading={subHeading} />
    </section>
  );
};

export default Hero;
