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
    <div className="flex items-stretch mt-16 main-container justify-items-start">
      <div className="w-1/2 pl-10">
        <h1 className="mt-16 mb-6 text-6xl font-bold">{heading}</h1>
        <p className="text-2xl font-semibold">{subHeading}</p>
        <ul className="flex">
          <li className="mr-2">
            <LinkedInButton />
          </li>
          <li>
            <GithubButton />
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
  );
};

export default HeroContainer;
