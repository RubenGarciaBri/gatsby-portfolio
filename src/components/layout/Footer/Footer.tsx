import * as React from "react";

import { Link } from "gatsby";
import { RiGatsbyLine } from "react-icons/ri";
import { navData } from "../../../data/navData";
import { socialLinksData } from "../../../data/socialLinksData";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="main-container">
        <div className="w-[80%] mx-auto pt-16 md:pt-20 pb-12 border-t-2 border-gray-200 xl:w-[80%] ">
          <ul className="flex flex-col justify-center mb-12 text-xl text-center text-gray-400 gap-y-6 md:flex-row gap-x-12 lg:gap-x-20">
            {navData &&
              navData.map(({ title, sectionLink }) => {
                return (
                  <li className="hover:text-blue-500">
                    <Link to={sectionLink}>{title}</Link>
                  </li>
                );
              })}
          </ul>
          <ul className="flex justify-center mb-10 text-gray-400 gap-x-8">
            {socialLinksData &&
              socialLinksData.map(({ type, url, Icon }) => {
                return (
                  <li className="p-3 text-2xl text-white duration-200 bg-gray-300 rounded-full hover:bg-blue-500">
                    {Icon}
                  </li>
                );
              })}
          </ul>
          <p className="flex items-center justify-center text-center text-gray-400">
            <span>
              Built by Ruben Garcia with <strong>Gatsby</strong>
            </span>
            <RiGatsbyLine className="ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
