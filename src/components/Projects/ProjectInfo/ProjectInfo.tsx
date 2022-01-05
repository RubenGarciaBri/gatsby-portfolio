import * as React from "react";

import TertiaryButton from "../../Buttons/TertiaryButton/TertiaryButton";

interface IPropTypes {
  title: string;
  // TODO: Make more specific
  badges: Array<any>;
  description: Array<any>;
}

const ProjectInfo = ({ title, badges, description }: IPropTypes) => {
  return (
    <>
      <h3 className="mb-3 text-3xl font-bold">{title}</h3>
      <ul className="flex gap-x-2.5 mb-6">
        {badges &&
          badges.map((badge, index) => {
            return <li key={index}>{badge}</li>;
          })}
      </ul>
      {description &&
        description.map((paragraph, index) => {
          return (
            <p key={index} className="mb-2">
              {paragraph}
            </p>
          );
        })}
      <TertiaryButton classNames="mt-2">See Project</TertiaryButton>
    </>
  );
};

export default ProjectInfo;
