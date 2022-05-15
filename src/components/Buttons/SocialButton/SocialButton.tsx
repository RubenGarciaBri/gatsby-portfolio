import * as React from "react";

import { FaLinkedin, FaGithub } from "react-icons/fa";

interface IPropTypes {
  //   type: "linkedin" | "github";
  type: string;
  url: string;
  classNames?: string;
}

const SocialButton = ({ type, url, classNames }: IPropTypes) => {
  const socialList = {
    linkedin: <FaLinkedin />,
    github: <FaGithub />,
  };

  return (
    <a
      href={url}
      target="_blank"
      className={`px-2 text-3xl md:text-4xl ${classNames && classNames}`}
    >
      {type && socialList[type]}
    </a>
  );
};

export default SocialButton;
