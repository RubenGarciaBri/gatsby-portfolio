import React from "react";

import { StaticImage } from "gatsby-plugin-image";

import { timestampToDate } from "../../utils/helpers";
import { badges } from "../../data/badges";

const Post = ({ title, excerpt, timestamp, badgeNames }) => {
  return (
    <div className="overflow-hidden transition duration-300 bg-white cursor-pointer rounded-2xl drop-shadow-xl hover:scale-105">
      <div className="">
        <StaticImage src="../../images/640x360.png" alt="Post header picture" />
      </div>
      <div className="p-8">
        <h3 className="mb-1.5 capitalize text-2xl font-bold">{title}</h3>
        <span className="block mb-3 text-gray-500">
          {timestampToDate(timestamp)}
        </span>
        <ul className="flex mb-5 gap-x-3">
          {badgeNames &&
            badgeNames.map((badgeName, i) => {
              return <li key={badgeName + i}>{badges[badgeName]}</li>;
            })}
        </ul>
        <p className="text-lg">{excerpt + "..."}</p>
        {/* <div className="flex items-center mt-5">
          <StaticImage
            className="bg-gray-200 shadow-inner w-14 h-14 rounded-2xl"
            src="../../images/prof-small.png"
            alt="Author's profile picture"
          />
          <span className="ml-3 font-bold">By Ruben Garcia</span>
        </div> */}
      </div>
    </div>
  );
};

export default Post;
