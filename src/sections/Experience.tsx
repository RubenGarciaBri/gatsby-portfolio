import * as React from "react";

import behaviourLabImg from "../images/bl-logo.jpeg";
import { getTechIcons } from "../utils/helpers";
import SectionHeading from "../components/SectionHeading/SectionHeading";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import TimelineBar from "../components/Timeline/TimelineBar/TimelineBar";
import TimelinePoint from "../components/Timeline/TimelinePoint/TimelinePoint";
import TimelineCard from "../components/Timeline/TimelineCard/TimelineCard";
import TimelineDate from "../components/Timeline/TimelineDate/TimelineDate";

const Experience = () => {
  return (
    <SectionLayout sectionId="section-5">
      <div className="text-center main-container">
        <SectionHeading center>Experience</SectionHeading>
      </div>
      <div className="main-container">
        <TimelineBar>
          <TimelinePoint />
          <TimelineDate>September 2021 - Present</TimelineDate>
          <TimelineCard
            companyImg={behaviourLabImg}
            companyName="BehaviourLab"
            jobTitle="Frontend Engineer"
            location="London, UK"
            techStack={getTechIcons(["react", "next", "typescript", "d3"])}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
            similique eum illum et doloremque obcaecati assumenda tempora
            repudiandae officia veniam. Sed illo facilis soluta distinctio?
            Beatae aliquid harum deleniti similique?
          </TimelineCard>
        </TimelineBar>
      </div>
    </SectionLayout>
  );
};

export default Experience;
