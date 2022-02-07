import * as React from "react";

import { Link } from "gatsby";

interface IPropTypes {
  title: string;
  link: string;
  classNames?: string;
}

const NavLink = ({ title, link, classNames }: IPropTypes) => {
  return (
    <li className={classNames && classNames}>
      <Link
        to={link}
        className="px-2 py-2 mr-8 text-xl font-semibold tracking-wide cursor-pointer hover:text-blue-500"
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
