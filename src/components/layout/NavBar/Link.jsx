import * as React from "react";

const Link = ({ title, sectionLink, classNames }) => {
  return (
    <li className={classNames}>
      <a
        href={sectionLink}
        className="px-2 py-2 mr-4 text-xl font-bold tracking-wide hover:text-gray-500"
      >
        {title}
      </a>
    </li>
  );
};

export default Link;
