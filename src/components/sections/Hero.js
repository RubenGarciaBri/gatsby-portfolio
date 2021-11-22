import React from "react";
// import profilePicture from "../../images/prof3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../header";
import { StaticImage } from "gatsby-plugin-image";

const Hero = ({ heading, subHeading, buttonPrimary, buttonSecondary }) => {
  return (
    <section
      id="section-1"
      className="px-4 text-white bg-gray-900 hero-section"
    >
      <Header />
      <div className="flex items-stretch mt-2 main-container justify-items-start">
        <div className="w-1/2 pl-10">
          <h1 className="mt-16 mb-6 text-6xl font-bold">{heading}</h1>
          <p className="mb-1 text-2xl font-semibold">{subHeading}</p>
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
            {buttonPrimary}
          </a>
          <a
            href="#section-4"
            className="btn btn--secondary hero__left-btn shadow-s"
          >
            {buttonSecondary}
          </a>
        </div>
        <div className="w-1/2">
          <StaticImage
            placeholder="blurred"
            src="../../images/prof3.png"
            className="hidden w-3/4 md:block"
            alt="Ruben's profile picture"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
