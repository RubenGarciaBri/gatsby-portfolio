import * as React from "react";

interface IPropTypes {
  children: React.ReactNode;
}

const TimelineBar = ({ children }: IPropTypes) => {
  return (
    <div className="w-0 lg:w-2 relative bg-gray-900 rounded-full h-[600px]">
      {children}
    </div>
  );
};

export default TimelineBar;
