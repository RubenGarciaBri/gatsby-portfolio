import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import { timestampToDate } from "../../utils/helpers";
import { postsData } from "../../data/postsData";

const index = () => {
  return (
    <Layout>
      <div className="main-container">
        <div className="max-w-[750px] mx-auto text-center mb-16">
          <h1 className="mt-16 text-5xl font-bold">Blog</h1>
          <p className="mt-6 text-xl ">
            Here you can find all my articles to date. The main topics I touch
            on are React, NextJs, Redux and Serverless.
          </p>
        </div>
        <div className="mx-auto mb-32 max-w-[1180px]">
          <h2 className="mb-8 text-4xl font-bold">All Posts</h2>
          {postsData &&
            postsData.map(({ title, excerpt, timestamp, badgeNames }) => {
              return (
                <div className="flex justify-center cursor-pointer mb-14">
                  <div className="w-2/6 bg-gray-200 rounded-xl drop-shadow"></div>
                  <div className="w-4/6 px-12 py-12 cursor-pointer bg-gray-50 ">
                    <h3 className="mb-1.5 capitalize text-2xl font-bold">
                      {title}
                    </h3>
                    <span className="block mb-3 text-gray-600 ">
                      {timestampToDate(timestamp)}
                    </span>
                    <p className="mb-4 text-lg">{excerpt}</p>
                    {/* <button className="pl-4 text-xl border-l-4 border-blue-500">
                      Read More
                    </button> */}
                    <div className="flex items-center mt-6">
                      <StaticImage
                        className="w-10 h-10 bg-gray-200 shadow-inner rounded-2xl"
                        src="../images/prof-small.png"
                        alt="Author's profile picture"
                      />
                      <span className="ml-3 font-bold">By Ruben Garcia</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default index;
