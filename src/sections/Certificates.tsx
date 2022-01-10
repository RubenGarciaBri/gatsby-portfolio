import React from "react";

import SectionLayout from "../components/SectionLayout/SectionLayout";
import Certificate from "../components/Certificate/Certificate";
import { certificatesData } from "../data/certificatesData";
import SectionHeadingPrimary from "../components/SectionHeading/Primary/SectionHeadingPrimary";
import SectionHeadingSecondary from "../components/SectionHeading/Secondary/SectionHeadingSecondary";

const Certificates = () => {
  return (
    <SectionLayout sectionId="section-5">
      <div className="text-center main-container">
        <SectionHeadingSecondary>Education</SectionHeadingSecondary>
        <SectionHeadingPrimary center>Certificates</SectionHeadingPrimary>
      </div>
      <div className="flex gap-x-12 main-container">
        {certificatesData &&
          certificatesData.map(
            ({ school, name, duration, description, subjects, url }) => {
              return (
                <Certificate
                  school={school}
                  name={name}
                  duration={duration}
                  description={description}
                  subjects={subjects}
                  url={url}
                />
              );
            }
          )}
      </div>
    </SectionLayout>
  );
};

export default Certificates;
