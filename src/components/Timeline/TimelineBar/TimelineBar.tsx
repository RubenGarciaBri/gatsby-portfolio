import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
}

const TimelineBar = ({ children }: IPropTypes) => {
  return (
    <div className="relative w-2 mx-auto mt-24 bg-gray-900 rounded-full timeline-bar">
      {children}
    </div>
  );
};

export default TimelineBar;
