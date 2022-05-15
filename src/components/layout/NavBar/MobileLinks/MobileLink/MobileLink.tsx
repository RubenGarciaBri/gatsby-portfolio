import * as React from "react";

import { Link } from "gatsby";

interface IPropTypes {
  title: string;
  link: string;
  classNames?: string;
}

const MobileLink = ({ title, link, classNames }: IPropTypes) => {
  return (
    <li className={`${classNames && classNames}`}>
      <Link
        to={link}
        className="block py-4 text-lg font-semibold tracking-wide cursor-pointer hover:text-blue-600"
      >
        {title}
      </Link>
    </li>
  );
};

export default MobileLink;
