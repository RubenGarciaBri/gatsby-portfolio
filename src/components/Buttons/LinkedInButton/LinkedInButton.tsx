import * as React from "react";

import { FaLinkedin } from "react-icons/fa";

interface IPropTypes {
  size?: number;
}

const LinkedInButton = ({ size }: IPropTypes) => {
  return (
    <a
      href="https://www.linkedin.com/in/ruben-garcia-bri/"
      target="_blank"
      className="px-2 text-3xl"
    >
      <FaLinkedin size={size ? size : 20} />
    </a>
  );
};

export default LinkedInButton;
