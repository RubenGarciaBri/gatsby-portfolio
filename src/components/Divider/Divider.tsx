import * as React from "react";

interface IPropTypes {
  center?: boolean;
}

const Divider = ({ center }: IPropTypes) => {
  return <div className={`mb-12 divider ${center && "mx-auto"}`}></div>;
};

export default Divider;
