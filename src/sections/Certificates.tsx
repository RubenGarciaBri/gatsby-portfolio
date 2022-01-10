import React from "react";

import SectionLayout from "../components/SectionLayout/SectionLayout";
import Certificate from "../components/Certificate/Certificate";
import { certificatesData } from "../data/certificatesData";
import SectionHeading from "../components/SectionHeading/SectionHeading";

const Certificates = () => {
  return (
    <SectionLayout sectionId="section-3" classNames="">
      <div className="text-center main-container">
        <SectionHeading center>Certificates</SectionHeading>
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
