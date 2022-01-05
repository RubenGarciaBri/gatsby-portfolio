import React from "react";

import SectionLayout from "../SectionLayout/SectionLayout";
import Gallery from "../Gallery";
import SectionHeading from "../SectionHeading/SectionHeading";
import Project from "../Projects/Project/Project";
import { projectsData } from "../../data/projectsData";
import { isOdd } from "../../utils/helpers";

const Portfolio = () => {
  return (
    <SectionLayout sectionId="section-4" classNames="bg-gray-100">
      <div className="mb-24 text-center main-container">
        <SectionHeading dark>Portfolio</SectionHeading>
        {/* <p className="text-lg">
          These are all my current published projects. Click on the thumbnails
          to see a full description as well as links to both the github
          repositories and live online versions of the apps.
        </p> */}
      </div>

      <div className="flex flex-col main-container gap-y-60">
        {projectsData &&
          projectsData.map(({ title, image, badges, description }, index) => {
            return (
              <Project
                title={title}
                image={image}
                badges={badges}
                description={description}
                reversed={isOdd(index)}
              />
            );
          })}
      </div>
    </SectionLayout>
  );
};

export default Portfolio;
