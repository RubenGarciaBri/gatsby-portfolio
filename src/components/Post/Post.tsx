import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { timestampToDate } from "../../utils/helpers";
import { badges } from "../../data/badges";

const Post = ({ title, excerpt, timestamp, badgeNames }) => {
  return (
    <div className="overflow-hidden transition duration-300 bg-gray-50 ">
      <div className="h-[320px] bg-gray-200 rounded-xl drop-shadow cursor-pointer">
        {/* <StaticImage src="../../images/640x360.png" alt="Post header picture" /> */}
      </div>
      <div className="px-1 mt-8 cursor-pointer">
        <h3 className="mb-1.5 capitalize text-2xl font-bold cursor-pointer">
          {title}
        </h3>
        <span className="block mb-3 text-gray-600">
          {timestampToDate(timestamp)}
        </span>
        <ul className="flex mb-5 gap-x-3">
          {badgeNames &&
            badgeNames.map((badgeName, i) => {
              return <li key={badgeName + i}>{badges[badgeName]}</li>;
            })}
        </ul>
        <p className="text-lg">{excerpt + "..."}</p>
      </div>
    </div>
  );
};

export default Post;
