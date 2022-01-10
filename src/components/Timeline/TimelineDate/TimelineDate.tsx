import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
}

const TimelineDate = ({ children }) => {
  return (
    <span className="absolute text-xl -translate-y-1/3 -left-72 top-1/3">
      {children}
    </span>
  );
};

export default TimelineDate;
