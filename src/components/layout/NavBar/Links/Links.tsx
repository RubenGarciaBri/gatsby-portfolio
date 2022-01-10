import * as React from "react";

import { IoNewspaperOutline } from "react-icons/io5";
import Link from "./Link/Link";

interface IPropTypes {
  // TODO: Make more specific
  navLinks: Array<any>;
}

const Links = ({ navLinks }: IPropTypes) => {
  return (
    <ul className="flex items-center justify-center hidden sm:flex">
      {navLinks &&
        navLinks.map(({ title, sectionLink }, index) => {
          return <Link key={index} title={title} sectionLink={sectionLink} />;
        })}
      {/* <li>
        <button className="flex items-center px-6 py-3 text-xl font-semibold tracking-wide border-2 border-gray-900 rounded-xl gap-x-2">
          CV
          <IoNewspaperOutline />
        </button>
      </li> */}
    </ul>
  );
};

export default Links;
