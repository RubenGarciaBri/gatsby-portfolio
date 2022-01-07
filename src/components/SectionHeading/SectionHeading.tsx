import * as React from "react";

import Divider from "../Divider/Divider";

interface IPropTypes {
  children: React.ReactNode;
  light?: boolean;
  centered?: boolean;
}

const SectionHeading = ({ children, light, centered }: IPropTypes) => {
  return (
    <>
      <h2
        className={`mb-8 text-5xl font-semibold ${
          light ? "text-white" : "text-gray-900"
        } ${centered && "text-center"}`}
      >
        {children}
      </h2>
      <div className={`mb-12 divider ${centered && "mx-auto"}`}></div>
    </>
  );
};

export default SectionHeading;
