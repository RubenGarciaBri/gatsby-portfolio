import React from "react";

import { Link } from "gatsby";
import ProjectInfo from "../../Projects/ProjectInfo/ProjectInfo";

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
    <div className="flex justify-center drop-shadow-xl">
      <div className={`${reversed ? "order-2" : "order-1"} w-1/2`}>
        <Link to="/">
          <img
            src={image}
            className="hidden w-3/4 w-full md:block"
            alt="Ruben's profile picture"
          />
        </Link>
      </div>
      <div className={`${reversed ? "order-1 pr-10" : "order-2 pl-10"} w-1/2`}>
        <ProjectInfo title={title} badges={badges} description={description} />
      </div>
    </div>
  );
};

export default Project;
