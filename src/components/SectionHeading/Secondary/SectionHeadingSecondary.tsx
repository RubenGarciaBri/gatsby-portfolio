import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
  light?: boolean;
  center?: boolean;
}

const SectionHeadingSecondary = ({ children, light, center }: IPropTypes) => {
  return (
    <>
      <h2
        className={`mb-3 tracking-widest uppercase text ${
          light ? "text-white" : "text-gray-400"
        } ${center && "text-center"}`}
      >
        {children}
      </h2>
    </>
  );
};

export default SectionHeadingSecondary;
