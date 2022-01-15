import * as React from "react";

interface IPropTypes {
  title: string;
  sectionLink: string;
  classNames?: string;
}

const MobileLink = ({ title, sectionLink, classNames }: IPropTypes) => {
  return (
    <li className={`${classNames && classNames}`}>
      <a
        href={sectionLink}
        className="block py-4 text-xl font-semibold tracking-wide hover:text-blue-500"
      >
        {title}
      </a>
    </li>
  );
};

export default MobileLink;
