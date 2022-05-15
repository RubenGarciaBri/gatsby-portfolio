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
    <div className="absolute w-[450px] lg:w-[620px] sm:w-[550px] p-10 -translate-x-1/2 -translate-y-1/2 bg-white border lg:translate-x-0 top-1/2 left-1/2 lg:-translate-y-1/3 rounded-2xl drop-shadow-xl lg:top-1/3 lg:left-20">
      <div className="absolute hidden w-6 h-6 rotate-45 bg-white border-b border-l lg:block -translate-y-1/3 -left-3 top-1/3"></div>
      <div className="flex items-center mb-3">
        <img
          src={companyImg}
          alt="BehaviourLab Logo"
          className="w-16 h-16 shadow-inner rounded-2xl"
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
    </div>
  );
};

export default TimelineCard;
