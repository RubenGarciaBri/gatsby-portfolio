import * as React from "react";

import Divider from "../Divider/Divider";

interface IPropTypes {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}

const SectionHeading = ({ children, light, center }: IPropTypes) => {
  return (
    <>
      <h2
        className={`mb-8 text-5xl font-semibold ${
          light ? "text-white" : "text-gray-900"
        } ${center && "text-center"}`}
      >
        {children}
      </h2>
      <div className={`mb-12 divider ${center && "mx-auto"}`}></div>
    </>
  );
};

export default SectionHeading;
