import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { socialLinksData } from "../../data/socialLinksData";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import SocialButton from "../Buttons/SocialButton/SocialButton";

interface IPropTypes {
  heading: string;
  subHeading: string;
}

const HeroContainer = ({ heading, subHeading }: IPropTypes) => {
  return (
    <div className="main-container">
      <div className="px-6">
        <div className="flex flex-col items-stretch mt-32 text-center xl:text-left mb-52 justify-items-start xl:flex-row">
          <div className="mr-8 lg:mx-auto lg:w-4/5 xl:w-3/5">
            <div className="flex items-center justify-center mb-6 xl:justify-start gap-x-5">
              <h3 className="flex text-xl font-semibold text-gray-400 sm:text-2xl subheading">
                {subHeading}
              </h3>
              <StaticImage
                placeholder="blurred"
                src="../../images/prof-small.png"
                className="w-12 w-full bg-gray-200 rounded-full shadow-inner md:w-14 xl:hidden"
                alt="Ruben's profile picture"
              />
            </div>
            <h1 className="mb-3 text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl ">
              A <span className="font-bold text-blue-500">React Developer</span>{" "}
              with passion for the new web technologies
            </h1>
            <ul className="flex justify-center mb-12 xl:justify-start">
              {socialLinksData &&
                socialLinksData.map(({ type, url }) => {
                  return (
                    <li key={type} className="mr-4">
                      <SocialButton type={type} url={url} />
                    </li>
                  );
                })}
            </ul>
            <div className="flex justify-center mt-1 gap-x-6 xl:justify-start">
              <PrimaryButton>Let's Talk</PrimaryButton>
              <SecondaryButton>See My Work</SecondaryButton>
            </div>
          </div>
          <div className="w-2/5">
            <StaticImage
              placeholder="blurred"
              src="../../images/side-2.png"
              className="hidden w-full bg-gray-200 rounded-full shadow-inner xl:block profile-img"
              alt="Ruben's profile picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
