import * as React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { IoIosBriefcase } from "react-icons/io";
import { StaticImage } from "gatsby-plugin-image";

interface IPropTypes {
  // TODO: Make more specific
  companyImg: any;
  companyName: string;
  jobTitle: string;
  location: string;
  // TODO: Make more specific
  techStack: Array<any>;
  children: React.ReactNode;
}

const TimelineCard = ({
  companyImg,
  companyName,
  jobTitle,
  location,
  techStack,
  children,
}: IPropTypes) => {
  return (
    <div className="absolute p-10 bg-gray-200 -translate-y-1/3 timeline-card rounded-2xl drop-shadow top-1/3 left-20">
      <div className="absolute w-6 h-6 rotate-45 bg-gray-200 -translate-y-1/3 -left-3 top-1/3"></div>
      <div className="flex items-center mb-3">
        <img
          src={companyImg}
          alt="BehaviourLab Logo"
          className="w-16 h-16 rounded-lg shadow-inner"
        />
        <h3 className="mt-6 mb-6 ml-4 text-3xl font-semibold">{companyName}</h3>
      </div>
      <div className="mb-6">
        <h4 className="flex items-center mb-3 text-xl font-semibold gap-x-3">
          <IoIosBriefcase size={26} />
          {jobTitle}
        </h4>
        <h4 className="flex items-center text-xl font-semibold gap-x-3">
          <IoLocationSharp size={26} />
          {location}
        </h4>
      </div>
      <p className="mb-6 text-lg">{children}</p>
      <ul className="flex gap-x-4">
        {techStack &&
          techStack.map(iconClass => {
            return (
              <li>
                <i className={`text-2xl ${iconClass}`}></i>
              </li>
            );
          })}
      </ul>

      {/* <ul className="flex gap-x-4">
        <li>
          <i className="text-2xl devicon-react-original"></i>
        </li>
        <li>
          <i className="text-2xl devicon-nextjs-original"></i>
        </li>
        <li>
          <i className="text-2xl devicon-typescript-plain"></i>
        </li>
        <li>
          <i className="text-2xl devicon-d3js-plain"></i>
        </li>
      </ul> */}
    </div>
  );
};

export default TimelineCard;
