import * as React from "react";

import { Link } from "gatsby";
import { RiGatsbyLine } from "react-icons/ri";
import { navData } from "../../../data/navData";
import { socialLinksData } from "../../../data/socialLinksData";

const Footer = () => {
  return (
    <footer className="mt-24">
      <div className="w-3/5 px-6 pt-20 pb-12 border-t-2 border-gray-200 main-container">
        <ul className="flex justify-center mb-12 text-xl text-gray-400 gap-x-20">
          {navData &&
            navData.map(({ title, sectionLink }) => {
              return (
                <li className="">
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
    </footer>
  );
};

export default Footer;
