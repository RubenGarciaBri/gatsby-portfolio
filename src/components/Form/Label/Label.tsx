import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
  htmlFor: string;
  classNames?: string;
}

const Label = ({ children, htmlFor, classNames }: IPropTypes) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`mb-3 text-lg ${classNames && classNames}`}
    >
      {children}
    </label>
  );
};

export default Label;
