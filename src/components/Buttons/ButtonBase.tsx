import * as React from "react";
import { Link } from "gatsby";

interface IPropTypes {
  children: React.ReactNode;
  classNames?: string;
}

const ButtonBase = ({ children, classNames }: IPropTypes) => {
  return (
    <Link to="#section-5">
      <button
        className={`px-6 py-4 font-bold rounded-lg drop-shadow-xl ${classNames && classNames}`}
      >
        {children}
      </button>
    </Link>
  );
};

export default ButtonBase;
