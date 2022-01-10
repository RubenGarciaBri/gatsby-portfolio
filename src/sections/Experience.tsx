import * as React from "react";

import behaviourLabImg from "../images/bl-logo.jpeg";
import { getTechIcons } from "../utils/helpers";
import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";
import SectionLayout from "../components/SectionLayout/SectionLayout";
import TimelineBar from "../components/Timeline/TimelineBar/TimelineBar";
import TimelinePoint from "../components/Timeline/TimelinePoint/TimelinePoint";
import TimelineCard from "../components/Timeline/TimelineCard/TimelineCard";
import TimelineDate from "../components/Timeline/TimelineDate/TimelineDate";

const Experience = () => {
  return (
    <SectionLayout sectionId="section-4">
      <div className="text-center main-container">
        <SectionHeadingSecondary>Experience</SectionHeadingSecondary>
        <SectionHeadingPrimary center>Job History</SectionHeadingPrimary>
      </div>
      <div className="main-container">
        <TimelineBar>
          <TimelinePoint />
          <TimelineDate>September 2021 - Present</TimelineDate>
          <TimelineCard
            companyImg={behaviourLabImg}
            companyName="Behaviour Lab"
            jobTitle="Frontend Engineer"
            location="London, UK"
            techStack={getTechIcons(["react", "next", "typescript", "d3"])}
          >
            Co-developing the Front-end of a Fintech SaaS platform that helps
            asset managers, private equity firms, insurance companies and
            executive boards make better financial decisions through analytics
            and behavioural science.
          </TimelineCard>
        </TimelineBar>
      </div>
    </SectionLayout>
  );
};

export default Experience;
