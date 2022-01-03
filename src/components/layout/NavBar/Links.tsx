import * as React from "react";
import Link from "./Link";

interface IPropTypes {
  // TODO: Make more specific
  navLinks: Array<any>;
}

const Links = ({ navLinks }: IPropTypes) => {
  return (
    <ul className="flex items-center justify-center hidden sm:flex">
      {navLinks &&
        navLinks.map(({ title, sectionLink }) => {
          return <Link title={title} sectionLink={sectionLink} />;
        })}
    </ul>
  );
};

export default Links;
