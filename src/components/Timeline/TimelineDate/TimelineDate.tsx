import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
}

const TimelineDate = ({ children }) => {
  return (
    <span className="absolute hidden text-xl font-light text-gray-500 xl:block -translate-y-1/3 -left-72 top-1/3">
      {children}
    </span>
  );
};

export default TimelineDate;
