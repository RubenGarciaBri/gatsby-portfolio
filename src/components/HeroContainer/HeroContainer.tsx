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
        <div className="flex flex-col items-stretch pb-12 mt-20 text-center xl:text-left justify-items-start xl:flex-row">
          <div className="mr-8 lg:mx-auto lg:w-4/5 xl:w-3/5">
            <div className="flex items-center justify-center mb-5 xl:justify-start gap-x-5">
              <h3 className="flex text-xl text-gray-500 sm:text-2xl subheading">
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
              className="mb-12 text-4xl font-bold md:text-6xl lg:text-6xl"
            >
              I Write About How to Build Modern, Fast and Scalable{" "}
              <span className="text-blue-500">React Applications</span>
            </h1>
            <form className="max-w-[550px]">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-6 py-5 mb-4 text-xl text-gray-500 border-2 border-gray-300 rounded-2xl"
              />
              <input
                type="email"
                required
                placeholder="Your Email Address"
                className="w-full px-6 py-5 mb-4 text-xl text-gray-500 border-2 border-gray-300 rounded-2xl"
              />
              <input
                type="submit"
                value="Join The Community"
                className="w-full py-5 text-xl font-semibold text-white bg-blue-500 border-2 border-blue-500 cursor-pointer rounded-2xl drop-shadow-lg "
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
