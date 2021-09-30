import React from "react";
import {
  FaQuestion,
  FaCodeBranch,
  FaBrain,
  FaBullhorn,
  FaChartLine,
} from "react-icons/fa";

const SkillsAside = () => {
  return (
    <div className="skillsAside">
      <h5 className="text-xl mb-4 font-bold">Skills</h5>
      <ul>
        <li className="flex items-center py-2 px-6 bg-gray-800 rounded-lg max-w-xs shadow mb-3 font-semibold">
          <FaQuestion className="skillsAside__item-icon mr-2" /> Problem Solving
        </li>
        <li className="flex items-center py-2 px-6 bg-gray-800 rounded-lg max-w-xs shadow mb-3 font-semibold">
          <FaCodeBranch className="skillsAside__item-icon mr-2" /> Team Collaboration
        </li>
        <li className="flex items-center py-2 px-6 bg-gray-800 rounded-lg max-w-xs shadow mb-3 font-semibold">
          <FaBrain className="skillsAside__item-icon mr-2" /> Deep Work
        </li>
        <li className="flex items-center py-2 px-6 bg-gray-800 rounded-lg max-w-xs shadow mb-3 font-semibold">
          <FaBullhorn className="skillsAside__item-icon mr-2" /> Effective
          Communication
        </li>
        <li className="flex items-center py-2 px-6 bg-gray-800 rounded-lg max-w-xs shadow mb-3 font-semibold">
          <FaChartLine className="skillsAside__item-icon mr-2" /> Continuous
          Improvement
        </li>
      </ul>
    </div>
  );
};

export default SkillsAside;
