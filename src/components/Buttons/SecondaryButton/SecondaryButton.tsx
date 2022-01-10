import React from "react";

import ButtonBase from "../ButtonBase";

interface IPropTypes {
  children: React.ReactNode;
}

const SecondaryButton = ({ children }: IPropTypes) => {
  return (
    <ButtonBase classNames="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {children}
    </ButtonBase>
  );
};

export default SecondaryButton;
