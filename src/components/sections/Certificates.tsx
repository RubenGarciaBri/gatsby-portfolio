import React from "react";

import SectionLayout from "../SectionLayout/SectionLayout";
import Certificate from "../Certificate/Certificate";
import { certificatesData } from "../../data/certificatesData";

const Certificates = () => {
  return (
    <SectionLayout sectionId="section-3" classNames="bg-blue-600">
      <div className="text-center main-container">
        <h2 className="mb-8 text-4xl font-bold text-white">Certificates</h2>
      </div>
      <div className="flex flex-col gap-y-8 main-container">
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
