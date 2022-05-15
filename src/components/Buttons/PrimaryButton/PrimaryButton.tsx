import * as React from "react";

import ButtonBase from "../ButtonBase";

interface IPropTypes {
  children: React.ReactNode;
}

const PrimaryButton = ({ children }: IPropTypes) => {
  return (
    <ButtonBase classNames="text-white bg-gradient-to-br from-blue-600 to-blue-400">
      {children}
    </ButtonBase>
  );
};

export default PrimaryButton;
