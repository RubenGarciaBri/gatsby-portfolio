import React from "react";

import {
  FaQuestion,
  FaCodeBranch,
  FaBrain,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";
import { skills } from "../data/skills";

const SkillsAside = () => {
  return (
    <div className="skillsAside">
      <h5 className="mb-4 text-xl font-bold">Skills</h5>
      <ul>
        {skills &&
          skills.map(({ title, Icon }, index) => {
            return (
              <li
                key={index}
                className="flex items-center max-w-xs px-5 py-3 mb-3 font-semibold bg-gray-700 rounded-lg shadow"
              >
                {Icon}
                <span className="ml-3">{title}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SkillsAside;
