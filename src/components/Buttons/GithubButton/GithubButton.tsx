import React from "react";

import { FaGithub } from "react-icons/fa";

const GithubButton = () => {
  return (
    <a
      href="https://github.com/RubenGarciaBri"
      target="_blank"
      className="px-2 text-3xl"
    >
      <FaGithub />
    </a>
  );
};

export default GithubButton;
