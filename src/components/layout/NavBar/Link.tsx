import * as React from "react";

interface IPropTypes {
  title: string;
  sectionLink: string;
  classNames?: string;
}

const Link = ({ title, sectionLink, classNames }: IPropTypes) => {
  return (
    <li className={classNames && classNames}>
      <a
        href={sectionLink}
        className="px-2 py-2 mr-4 text-xl font-bold tracking-wide hover:text-blue-500"
      >
        {title}
      </a>
    </li>
  );
};

export default Link;
