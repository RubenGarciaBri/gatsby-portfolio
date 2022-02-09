import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

const postsArr = [
  {
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro dignissimos repellendus deleniti ea dolores.",
    timestamp: Date.now(),
    labels: ["React", "Next", "Firebase"],
  },
  {
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro dignissimos repellendus deleniti ea dolores.",
    timestamp: Date.now(),
    labels: ["React", "Performance", "Accesibility"],
  },
  {
    title: "Lorem ipsum dolor sit amet",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum porro dignissimos repellendus deleniti ea dolores.",
    timestamp: Date.now(),
    labels: ["Gatsby", "SSG", "Deployment"],
  },
];

const LatestPosts = () => {
  return (
    <div>
      <h2 className="m-20 text-5xl font-bold text-center">Latest Posts</h2>
      <div className="flex items-center justify-between gap-x-12">
        {postsArr &&
          postsArr.map(({ title, excerpt, timestamp, labels }) => {
            return (
              <div className="overflow-hidden bg-white rounded-lg drop-shadow-xl">
                <div className="">
                  <StaticImage
                    src="../../images/640x360.png"
                    alt="Post header picture"
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-1.5 capitalize text-2xl font-semibold">
                    {title}
                  </h3>
                  <span className="block mb-3 text-gray-500">
                    {new Date(timestamp).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <ul className="flex mb-3 gap-x-3">
                    {labels &&
                      labels.map(label => {
                        return (
                          <li className="bg-blue-100 text-blue-900 text-sm rounded-full py-1.5 px-3">
                            {label}
                          </li>
                        );
                      })}
                  </ul>
                  <p className="text-lg">{excerpt + "..."}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default LatestPosts;
