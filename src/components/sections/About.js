import React from "react";
import profilePicture from "../../images/newprofilepic.jpg";
import SkillsAside from "../SkillsAside";

const About = () => {
  return (
    <section id="section-2" className="section-about bg-black py-24 px-4 text-white">
      <div className="slider flex flex-wrap justify-between  max-w-screen-lg gap-2 text-center mx-auto">
        <div className="item text-5xl">
          <i className="devicon-html5-plain colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-css3-plain colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-sass-original colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-javascript-plain colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-react-original colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-redux-original colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-webpack-plain colored"></i>
        </div>
        <div className="item text-5xl">
          <i className="devicon-nodejs-plain colored"></i>
        </div>
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
      <div className="about main-container flex items-center justify-center mt-24">
        <div className="w-1/3 flex flex-col justify-center">
          <img src={profilePicture} className="shadow-md w-7/12 rounded-lg mb-8" alt="" />
          <SkillsAside />
        </div>
        <div className="w-2/3 self-start">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-xl mb-4">
            As a Front-end Developer, my skills go from the most fundamental
            building blocks of the web to full-scale modern{" "}
            <b>single-page applications</b>. I specialise in React and I'm
            competent using Redux and the latest ES6+ features. I'm also
            familiar with the most popular
            <b>web tools</b> such as Webpack, Babel, NPM, Git, etc.
          </p>
          <p className="text-xl mb-4">
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
          <p className="text-xl mb-4">
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
    </section>
  );
};

export default About;
