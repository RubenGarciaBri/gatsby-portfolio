import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import TertiaryButton from "../components/Buttons/TertiaryButton/TertiaryButton";
import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";

const About = () => {
  return (
    <SectionLayout sectionId="section-2" classNames="mt-16">
      <div className="flex justify-center mt-24 about main-container">
        <div className="flex flex-col justify-center xl:w-1/3">
          <StaticImage
            src="../images/prof2.png"
            className="hidden w-full rounded-full xl:block"
            alt=""
          />
        </div>
        <div className="w-full xl:pl-20 md:w-4/5 md:mx-auto xl:w-2/3">
          <div className="text-center md:text-left">
            <SectionHeadingSecondary>About Me</SectionHeadingSecondary>
            <SectionHeadingPrimary>Hey there!</SectionHeadingPrimary>
          </div>
          <p className="mb-6 text-lg md:text-xl">
            I'm a Frontend Engineer living in London, UK. I specialise in React
            and I'm currently part of the tech team at Behaviour Lab, a fintech
            startup based in the capital.
          </p>
          <p className="mb-6 text-lg md:text-xl">
            I'm passionate about software and the latest web technologies. I'm
            currently spending most of my time writing scalable, efficient
            production-ready code with React, Redux and NextJS. Some other areas
            I'm experimenting with are the JAMstack and serverless apps.
          </p>
          <p className="mb-12 text-lg md:text-xl">
            My long-term goal is to{" "}
            <b>improve people's lives through technology</b> and make this world
            a better place. I believe writing code is the way to go.
          </p>
          <div className="text-center md:text-left">
            {/* <TertiaryButton classNames="mr-5">Learn More</TertiaryButton>
            <TertiaryButton>See My Projects</TertiaryButton> */}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
