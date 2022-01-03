import React from "react";
// import profilePicture from "../../images/prof3.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Header from "../header";
import { StaticImage } from "gatsby-plugin-image";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

const Hero = ({ heading, subHeading }) => {
  return (
    <section id="section-1" className="px-4 hero-section">
      <Header />
      <div className="flex items-stretch mt-2 main-container justify-items-start">
        <div className="w-1/2 pl-10">
          <h1 className="mt-16 mb-6 text-6xl font-bold">{heading}</h1>
          <p className="text-2xl font-semibold">{subHeading}</p>
          <ul className="flex">
            <li className="mr-2">
              <a
                href="https://www.linkedin.com/in/ruben-garcia-bri/"
                target="_blank"
                className="px-2 text-3xl"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/RubenGarciaBri"
                target="_blank"
                className="px-2 text-3xl"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
          <div className="flex gap-x-4">
            <PrimaryButton />
            <SecondaryButton />
          </div>
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
