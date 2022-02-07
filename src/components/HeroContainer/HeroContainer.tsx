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
        <div className="flex flex-col items-stretch text-center mt-28 xl:text-left mb-52 justify-items-start xl:flex-row">
          <div className="mr-8 lg:mx-auto lg:w-4/5 xl:w-3/5">
            <div className="flex items-center justify-center mb-6 xl:justify-start gap-x-5">
              <h3 className="flex text-xl text-gray-400 sm:text-2xl subheading">
                {subHeading}
              </h3>
              <StaticImage
                placeholder="blurred"
                src="../../images/prof-small.png"
                className="w-12 w-full bg-gray-200 rounded-full shadow-inner md:w-14 xl:hidden"
                alt="Ruben's profile picture"
              />
            </div>
            <h1
              style={{ lineHeight: 1.15 }}
              className="mb-12 text-4xl font-bold md:text-6xl lg:text-6xl"
            >
              I Write About How to Build Professional, Scalable Full-stack{" "}
              <span className="text-blue-500">React Applications</span>
            </h1>
            {/* <ul className="flex justify-center mb-12 xl:justify-start">
              {socialLinksData &&
                socialLinksData.map(({ type, url }) => {
                  return (
                    <li key={type} className="mr-4">
                      <SocialButton type={type} url={url} />
                    </li>
                  );
                })}
            </ul> */}
            {/* <div className="flex justify-center mt-1 gap-x-6 xl:justify-start">
              <PrimaryButton>Let's Talk</PrimaryButton>
              <SecondaryButton>See My Work</SecondaryButton>
            </div> */}
            <form className="max-w-[550px]">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-5 py-4 mb-4 text-xl border-2 rounded-lg"
              />
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full px-5 py-4 mb-4 text-xl border-2 rounded-lg"
              />
              <input
                type="submit"
                value="Join the community!"
                className="w-full py-6 text-xl font-semibold text-white bg-blue-500 rounded-lg cursor-pointer drop-shadow-lg "
              />
            </form>
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
