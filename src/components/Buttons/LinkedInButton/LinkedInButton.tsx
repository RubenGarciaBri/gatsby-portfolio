import * as React from "react";

import { FaLinkedin } from "react-icons/fa";

const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/ruben-garcia-bri/"
      target="_blank"
      className="px-2 text-3xl"
    >
      <FaLinkedin />
    </a>
  );
};

export default LinkedInButton;
