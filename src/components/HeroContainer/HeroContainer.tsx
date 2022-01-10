import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import LinkedInButton from "../Buttons/LinkedInButton/LinkedInButton";
import GithubButton from "../Buttons/GithubButton/GithubButton";

interface IPropTypes {
  heading: string;
  subHeading: string;
}

const HeroContainer = ({ heading, subHeading }: IPropTypes) => {
  return (
    <div className="main-container">
      <div className="flex items-stretch mt-32 mb-52 justify-items-start">
        <div className="w-3/5 ">
          <h3 className="mb-4 text-2xl font-semibold text-gray-500 subheading">
            {subHeading}
          </h3>
          <h1 className="mb-3 font-semibold leading-tight text-7xl ">
            A <span className="font-bold text-blue-500">React Developer</span>{" "}
            with passion for the new web technologies
          </h1>
          <ul className="flex mb-12">
            <li className="mr-4">
              <LinkedInButton size={36} />
            </li>
            <li>
              <GithubButton size={36} />
            </li>
          </ul>
          <div className="flex mt-1 gap-x-6">
            <PrimaryButton>Let's Talk</PrimaryButton>
            <SecondaryButton>See My Work</SecondaryButton>
          </div>
        </div>
        <div className="w-2/5">
          <StaticImage
            placeholder="blurred"
            src="../../images/side-2.png"
            className="hidden w-full bg-gray-200 rounded-full shadow-inner md:block profile-img"
            alt="Ruben's profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContainer;
