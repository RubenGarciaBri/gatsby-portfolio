import * as React from "react";

import MobileLink from "./MobileLink/MobileLink";
interface IPropTypes {
  // TODO: Make more specific
  navLinks: Array<any>;
}

const MobileLinks = ({ navLinks }: IPropTypes) => {
  return (
    <div>
      <ul className="absolute right-0 z-50 px-10 py-3 bg-white rounded-2xl top-8 drop-shadow-lg w-96 lg:hidden">
        {navLinks &&
          navLinks.map(({ title, sectionLink }, index) => {
            return (
              <MobileLink key={index} title={title} sectionLink={sectionLink} />
            );
          })}
      </ul>
    </div>
  );
};

export default MobileLinks;
