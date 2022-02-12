import * as React from "react";

import Layout from "../components/layout";
import { timestampToDate } from "../utils/helpers";
import { postsData } from "../data/postsData";

const blog = () => {
  return (
    <Layout>
      <div className="main-container">
        <div className="max-w-[750px] mx-auto text-center mb-24">
          <h1 className="mt-16 text-6xl font-bold">Blog</h1>
          <p className="mt-5 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum
            laudantium illum perferendis odio iste reiciendis neque soluta
            dolorum omnis.
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <h2 className="mb-8 text-5xl font-bold">Latest Posts</h2>
          {postsData &&
            postsData.map(({ title, excerpt, timestamp, badgeNames }) => {
              return (
                <div className="flex justify-center mb-8 overflow-hidden rounded-xl drop-shadow-lg">
                  <div className="w-1/4 h-56 bg-gray-100"></div>
                  <div className="w-3/4 p-6 bg-white ">
                    <h3 className="mb-1.5 capitalize text-2xl font-bold">
                      {title}
                    </h3>
                    <span className="block mb-3 text-gray-500 ">
                      {timestampToDate(timestamp)}
                    </span>
                    <p className="mb-4">{excerpt}</p>
                    <button>Read More</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default blog;
