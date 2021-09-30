import React from "react";
// import profilePicture from "../../images/prof3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import Navbar from "../layout/Navbar";
import { StaticImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <section
      id="section-1"
      className="hero-section bg-gray-900 text-white px-4"
    >
      {/* <Navbar /> */}
      <div className="main-container flex items-stretch justify-items-start mt-2">
        <div className="w-1/2 pl-10">
          <h1 className="text-6xl mt-16 font-bold mb-6">Ruben Garcia</h1>
          <p className="text-2xl font-semibold mb-1">
            Front-end React Developer based in London, UK.
            <br />
            Proficient with HTML, CSS, Modern ES6 Javascript and React/Redux.
          </p>
          <ul className="flex mb-4">
            <li className="mr-2">
              <a
                href="https://www.linkedin.com/in/ruben-garcia-bri/"
                target="_blank"
                className="px-2 text-3xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="hero__left-social__item">
              <a
                href="https://github.com/RubenGarciaBri"
                target="_blank"
                className="px-2 text-3xl"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          <a
            href="#section-5"
            className="btn btn--primary hero__left-btn shadow-s"
          >
            Let's Talk
          </a>
          <a
            href="#section-4"
            className="btn btn--secondary hero__left-btn shadow-s"
          >
            See My Work
          </a>
        </div>
        <div className="w-1/2">
          <StaticImage
            placeholder="blurred"
            src="../../images/prof3.png"
            className="w-3/4"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
