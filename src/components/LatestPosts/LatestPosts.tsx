import * as React from "react";

import { postsData } from "../../data/postsData";

import Post from "../Post/Post";

const LatestPosts = () => {
  return (
    <div>
      <h2 className="m-20 text-5xl font-bold text-center">Latest Posts</h2>
      <div className="flex items-center justify-between gap-x-12">
        {postsData &&
          postsData.map(({ title, excerpt, timestamp, badgeNames }) => {
            return (
              <Post
                title={title}
                excerpt={excerpt}
                timestamp={timestamp}
                badgeNames={badgeNames}
              />
            );
          })}
      </div>
    </div>
  );
};

export default LatestPosts;
