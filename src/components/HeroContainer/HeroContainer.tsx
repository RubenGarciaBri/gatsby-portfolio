import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { socialLinksData } from "../../data/socialLinksData";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";
import SocialButton from "../Buttons/SocialButton/SocialButton";
import Carousel from "../Carousel/Carousel";

import ReactBadge from "../Badges/React/ReactBadge";

interface IPropTypes {
  heading: string;
  subHeading: string;
}

const HeroContainer = ({ heading, subHeading }: IPropTypes) => {
  return (
    <div className="main-container">
      <div className="px-6">
        <div className="flex flex-col items-stretch pb-12 mt-16 text-center xl:text-left justify-items-start xl:flex-row">
          <div className="mr-8 lg:mx-auto lg:w-4/5 xl:w-3/5">
            <div className="flex items-center justify-center mb-4 xl:justify-start gap-x-5">
              <h3 className="flex text-lg text-gray-600 sm:text-xl subheading">
                {subHeading}
              </h3>
              <StaticImage
                placeholder="blurred"
                src="../../images/prof-small.png"
                className="w-12 w-full rounded-full shadow-inner md:w-14 xl:hidden"
                alt="Ruben's profile picture"
              />
            </div>
            <h1
              style={{ lineHeight: 1.15 }}
              className="mb-10 text-4xl font-bold md:text-6xl lg:text-5xl"
            >
              I Write About How to Build Modern, Fast and Scalable
              <br />
              <span className="text-blue-600">React Applications</span>
            </h1>
            <form className="max-w-[550px]">
              <input
                type="text"
                required
                placeholder="Name"
                className="w-full px-5 py-4 mb-4 text-lg text-gray-600 border-2 border-gray-300 rounded-2xl"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full px-5 py-4 mb-4 text-lg text-gray-600 border-2 border-gray-300 rounded-2xl"
              />
              <input
                type="submit"
                value="Join The Community"
                className="w-full py-5 text-lg font-semibold text-white bg-blue-600 border-2 border-blue-600 cursor-pointer rounded-2xl drop-shadow-lg "
              />
            </form>
          </div>
          <div className="w-2/5">
            <div className="relative py-8 ">
              <StaticImage
                placeholder="blurred"
                src="../../images/side-2.png"
                className="hidden w-full bg-gray-200 rounded-full shadow-inner xl:block profile-img w-[90%] mx-auto"
                alt="Ruben's profile picture"
              />
            </div>
          </div>
        </div>
        <Carousel />
      </div>
    </div>
  );
};

export default HeroContainer;
