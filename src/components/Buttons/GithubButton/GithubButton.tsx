import React from "react";

import { FaGithub } from "react-icons/fa";

interface IPropTypes {
  size?: number;
}

const GithubButton = ({ size }: IPropTypes) => {
  return (
    <a
      href="https://github.com/RubenGarciaBri"
      target="_blank"
      className="px-2 text-3xl"
    >
      <FaGithub size={size ? size : 20} />
    </a>
  );
};

export default GithubButton;
