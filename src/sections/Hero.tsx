import React from "react";

// import profilePicture from "../../images/prof3.png";

import Navbar from "../components/Layout/NavBar/NavBar";
import HeroContainer from "../components/HeroContainer/HeroContainer";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import { heroData } from "../data/heroData";

const Hero = () => {
  const { heading, subHeading } = heroData;

  return (
    <section id="section-1" className="min-h-screen hero-section">
      <Navbar />
      <HeroContainer heading={heading} subHeading={subHeading} />
      <div className="main-container">
        <LatestPosts />
      </div>
    </section>
  );
};

export default Hero;
