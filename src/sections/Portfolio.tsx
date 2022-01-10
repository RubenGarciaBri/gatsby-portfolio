import React from "react";

import SectionLayout from "../components/SectionLayout/SectionLayout";
import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";
import Project from "../components/Projects/Project/Project";
import { projectsData } from "../data/projectsData";
import { isOdd } from "../utils/helpers";

const Portfolio = () => {
  return (
    <SectionLayout sectionId="section-3">
      <div className="mb-24 text-center main-container">
        <SectionHeadingSecondary>Portfolio</SectionHeadingSecondary>
        <SectionHeadingPrimary center>Recent Projects</SectionHeadingPrimary>
        {/* <p className="text-lg">
          These are all my current published projects. Click on the thumbnails
          to see a full description as well as links to both the github
          repositories and live online versions of the apps.
        </p> */}
      </div>

      <div className="flex flex-col main-container gap-y-48">
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
