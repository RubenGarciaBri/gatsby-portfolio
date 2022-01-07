import React from "react";

// import profilePicture from "../../images/prof3.png";

import Header from "../components/header";
import HeroContainer from "../components/HeroContainer/HeroContainer";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import { heroData } from "../data/heroData";

const Hero = () => {
  const { heading, subHeading } = heroData;

  return (
    <section id="section-1" className="px-4 hero-section">
      <Header />
      <HeroContainer heading={heading} subHeading={subHeading} />
    </section>
  );
};

export default Hero;
