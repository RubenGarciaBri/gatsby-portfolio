import * as React from "react";

import Divider from "../../Divider/Divider";

interface IPropTypes {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}

const SectionHeadingPrimary = ({ children, light, center }: IPropTypes) => {
  return (
    <>
      <h2
        className={`mb-6 lg:mb-8 text-4xl lg:text-5xl font-semibold ${
          light ? "text-white" : "text-gray-900"
        } ${center && "text-center"}`}
      >
        {children}
      </h2>
      <Divider center={center ? center : false} />
    </>
  );
};

export default SectionHeadingPrimary;
