import * as React from "react";
import Link from "./Link";

const Links = ({ navLinks }) => {
  return (
    <ul className="flex items-center justify-center hidden sm:flex">
      {navLinks &&
        navLinks.map(navLink => {
          const { title, sectionLink } = navLink;
          return <Link title={title} sectionLink={sectionLink} />;
        })}
    </ul>
  );
};

export default Links;
