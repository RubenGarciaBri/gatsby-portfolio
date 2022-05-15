import React from "react";

import { Link } from "gatsby";

import { badges } from "../../../data/badges";
import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";

interface IPropTypes {
  title: string;
  slug: string;
  image: string;
  // TODO: Make more specific
  badgeNames: Array<any>;
  description: Array<any>;
}

const Project = ({
  title,
  slug,
  image,
  badgeNames,
  description,
}: IPropTypes) => {
  return (
    <div className="small-container">
      <div className="p-8 bg-white drop-shadow-2xl rounded-2xl project">
        <Link to={`/projects/${slug}`}>
          <img
            src={image}
            className="w-full rounded-2xl "
            alt="Ruben's profile picture"
          />
        </Link>
        <div className="flex flex-row px-4 pt-12 pb-3 sm:px-8 md:flex-col">
          <div className="w-full md:w-3/4">
            <h3 className="mb-4 text-4xl font-semibold">{title}</h3>
            <ul className="flex gap-x-2.5 mb-7">
              {badgeNames &&
                badgeNames.map((badgeName, index) => {
                  return <li key={index}>{badges[badgeName]}</li>;
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
