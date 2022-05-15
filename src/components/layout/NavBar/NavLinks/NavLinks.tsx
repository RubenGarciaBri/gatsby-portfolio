import * as React from "react";

import { IoNewspaperOutline } from "react-icons/io5";
import NavLink from "./NavLink/NavLink";

interface IPropTypes {
  // TODO: Make more specific
  navLinks: Array<any>;
}

const NavLinks = ({ navLinks }: IPropTypes) => {
  return (
    <ul className="flex items-center justify-center hidden sm:flex">
      {navLinks &&
        navLinks.map(({ title, link }, index) => {
          return <NavLink key={index} title={title} link={link} />;
        })}
    </ul>
  );
};

export default NavLinks;
