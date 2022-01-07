import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import SkillsAside from "../components/SkillsAside";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import Carousel from "../components/Carousel/Carousel";

const About = () => {
  return (
    <SectionLayout sectionId="section-2" classNames="">
      <div className="flex justify-center mt-24 about main-container">
        <div className="flex flex-col justify-center w-1/3">
          <StaticImage
            src="../images/prof2.png"
            className="w-full rounded-lg rounded-full"
            alt=""
          />
        </div>
        <div className="w-2/3 pl-20">
          <SectionHeading>About Me</SectionHeading>
          <p className="mb-8 text-xl">
            As a Front-end Developer, my skills go from the most fundamental
            building blocks of the web to full-scale modern{" "}
            <b>single-page applications</b>. I specialise in React and I'm
            competent using Redux and the latest ES6+ features. I'm also
            familiar with the most popular
            <b>web tools</b> such as Webpack, Babel, NPM, Git, etc.
          </p>
          <p className="mb-8 text-xl">
            On top of that,{" "}
            <b>
              I feel confident working with API's as well as writing asyncronous
              code
            </b>
            . I know the basics of Node and Express, including how to deploy
            apps to platforms such as Heroku. Not only I'm passionate about
            programming, but I also enjoy creating
            <b>beautifully designed user interfaces</b> that provide a great
            user experience.
          </p>
          <p className="text-xl">
            My long-term goal is to{" "}
            <b>improve people's lives through technology</b> and make this world
            a better place. I believe writing code is the way to go.
          </p>
        </div>
      </div>
      <Carousel classNames="mt-28" />
    </SectionLayout>
  );
};

export default About;
