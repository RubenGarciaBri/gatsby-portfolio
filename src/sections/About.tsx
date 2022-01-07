import React from "react";

import profilePicture from "../images/newprofilepic.jpg";
import SkillsAside from "../components/SkillsAside";
import { sliderIcons } from "../data/sliderIcons";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const About = () => {
  return (
    <SectionLayout sectionId="section-2" classNames="text-white bg-gray-900">
      <div className="flex flex-wrap justify-between max-w-screen-lg gap-2 mx-auto text-center slider">
        {sliderIcons &&
          sliderIcons.map(({ iconClassName }, index) => {
            return (
              <div key={index} className="text-5xl item">
                <i className={`${iconClassName} colored`}></i>
              </div>
            );
          })}
      </div>
      {/* <div className="slider-mobile sm:hidden">
        <div className="slider-mobile__row">
          <div className="item">
            <i className="devicon-html5-plain colored"></i>
          </div>
          <div className="item">
            <i className="devicon-css3-plain colored"></i>
          </div>
          <div className="item">
            <i className="devicon-sass-original colored"></i>
          </div>
          <div className="item">
            <i className="devicon-javascript-plain colored"></i>
          </div>
        </div>
        <div className="slider-mobile__row">
          <div className="item">
            <i className="devicon-react-original colored"></i>
          </div>
          <div className="item">
            <i className="devicon-redux-original colored"></i>
          </div>
          <div className="item">
            <i className="devicon-webpack-plain colored"></i>
          </div>
          <div className="item">
            <i className="devicon-nodejs-plain colored"></i>
          </div>
        </div>
      </div> */}
      <div className="flex justify-center mt-24 about main-container">
        <div className="flex flex-col justify-center w-1/3">
          <img
            src={profilePicture}
            className="w-64 mb-48 rounded-lg shadow-md"
            alt=""
          />
        </div>
        <div className="w-2/3">
          <SectionHeading>About Me</SectionHeading>
          <p className="mb-6 text-xl">
            As a Front-end Developer, my skills go from the most fundamental
            building blocks of the web to full-scale modern{" "}
            <b>single-page applications</b>. I specialise in React and I'm
            competent using Redux and the latest ES6+ features. I'm also
            familiar with the most popular
            <b>web tools</b> such as Webpack, Babel, NPM, Git, etc.
          </p>
          <p className="mb-6 text-xl">
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
          <p className="mb-6 text-xl">
            I love to face new challenges constantly with the goal of becoming a
            better programmer. All my published projects are showcased below as
            evidence of my technical skills mentiones here.
          </p>
          <p className="text-xl">
            My long-term goal is to{" "}
            <b>improve people's lives through technology</b> and make this world
            a better place. I believe writing code is the way to go.
          </p>
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
