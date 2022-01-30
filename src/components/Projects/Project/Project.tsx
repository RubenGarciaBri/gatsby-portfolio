import React from "react";

import { Link } from "gatsby";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";

interface IPropTypes {
  title: string;
  image: string;
  // TODO: Make more specific
  badges: Array<any>;
  description: Array<any>;
  reversed?: boolean;
}

const Project = ({
  title,
  image,
  badges,
  description,
  reversed,
}: IPropTypes) => {
  return (
    <div className="small-container">
      <div className="p-8 bg-white drop-shadow-2xl rounded-3xl project">
        <Link to="/">
          <img
            src={image}
            className="w-full rounded-3xl "
            alt="Ruben's profile picture"
          />
        </Link>
        <div className="flex flex-row px-4 pt-12 pb-3 sm:px-8 md:flex-col">
          <div className="w-full md:w-3/4">
            <h3 className="mb-4 text-4xl font-semibold">{title}</h3>
            <ul className="flex gap-x-2.5 mb-7">
              {badges &&
                badges.map((badge, index) => {
                  return <li key={index}>{badge}</li>;
                })}
            </ul>
            {description &&
              description.map((paragraph, index) => {
                return (
                  <p key={index} className="w-full mb-4 text-lg">
                    {paragraph}
                  </p>
                );
              })}
            <TertiaryButton classNames="mt-5">See Project</TertiaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
