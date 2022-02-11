import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
  classNames: string;
}

const BadgeBase = ({ children, classNames }: IPropTypes) => {
  return (
    <span className={`text-sm text-white px-3 py-1 rounded-lg ${classNames}`}>
      {children}
    </span>
  );
};

export default BadgeBase;
