import * as React from "react";

interface IPropTypes {
  center?: boolean;
}

const Divider = ({ center }: IPropTypes) => {
  return (
    // This ensures the divider is always centered in small screens whether the center prop is passed or not
    <div
      className={`mb-12 divider mx-auto ${center ? "md:mx-auto" : "md:mx-0"}`}
    ></div>
  );
};

export default Divider;
