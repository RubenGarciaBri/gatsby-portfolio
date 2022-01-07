import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
  bgColor: string;
  color: string;
}

const BadgeBase = ({ children, bgColor, color }: IPropTypes) => {
  return (
    <span
      style={{ color: color, backgroundColor: bgColor }}
      className={`text-sm  text-white px-3 py-1 rounded-full`}
    >
      {children}
    </span>
  );
};

export default BadgeBase;
