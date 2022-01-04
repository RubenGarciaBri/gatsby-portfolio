import * as React from "react";
import { Link } from "gatsby";

interface IPropTypes {
  children: React.ReactNode;
  classNames?: string;
  small?: boolean
}

const ButtonBase = ({ children, classNames, small }: IPropTypes) => {
  return (
    <Link to="#section-5">
      <button
        className={`${small ? "px-6 py-3" : "px-8 py-4"} font-bold rounded-lg drop-shadow-md ${
          classNames && classNames
        }`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonBase;
