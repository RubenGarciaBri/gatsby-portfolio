import * as React from "react";
import ButtonBase from "../ButtonBase";

interface IPropTypes {
  children: React.ReactNode;
  classNames?: React.ReactNode;
}

const TertiaryButton = ({ children, classNames }: IPropTypes) => {
  return (
    <ButtonBase
      classNames={`bg-gradient-to-br from-gray-900 to-gray-800 text-white ${
        classNames && classNames
      }`}
    >
      {children}
    </ButtonBase>
  );
};

export default TertiaryButton;
