import * as React from "react";

import { Link } from "gatsby";
import { RiGatsbyLine } from "react-icons/ri";
import { navData } from "../../../data/navData";
import { socialLinksData } from "../../../data/socialLinksData";

const Footer = () => {
  return (
    <footer className="">
      <div className="main-container">
        <div className="w-[80%] mx-auto pt-14 md:pt-14 pb-10">
          <ul className="flex flex-col justify-center mb-12 text-lg text-center text-gray-600 gap-y-6 md:flex-row gap-x-12 lg:gap-x-20">
            {navData &&
              navData.map(({ title, sectionLink }, i) => {
                return (
                  <li key={i} className="cursor-pointer hover:text-blue-500">
                    <Link to={sectionLink}>{title}</Link>
                  </li>
                );
              })}
          </ul>
          <ul className="flex justify-center mb-10 text-gray-600 gap-x-8">
            {socialLinksData &&
              socialLinksData.map(({ type, url, Icon }, i) => {
                return (
                  <li
                    key={i}
                    className="p-3 text-xl text-white duration-200 bg-gray-400 rounded-full cursor-pointer hover:bg-blue-500"
                  >
                    {Icon}
                  </li>
                );
              })}
          </ul>
          <p className="flex items-center justify-center text-center text-gray-600">
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
