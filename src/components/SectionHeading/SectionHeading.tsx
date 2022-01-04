import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
  dark?: boolean;
}

const SectionHeading = ({ children, dark }: IPropTypes) => {
  return (
    <h2
      className={`mb-8 text-4xl font-bold ${
        dark ? "text-gray-900" : "text-white"
      }`}
    >
      {children}
    </h2>
  );
};

export default SectionHeading;
