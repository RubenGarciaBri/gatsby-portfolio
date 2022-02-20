import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import { badges } from "../../data/badges";
import Layout from "../../components/layout";

const index = ({ data }) => {
  const { edges } = data.allMdx;

  return (
    <Layout>
      <div className="container-sm">
        <div className="mb-24 text-center">
          <h1 className="mt-16 text-5xl font-bold">Blog</h1>
          <p className="mt-6 text-xl ">
            Here you can find all my articles to date.
            <br />
            The main topics I touch on are React, NextJs, Redux and Serverless.
          </p>
        </div>
        <div className="mb-32">
          <h2 className="mb-10 text-4xl font-bold">All Posts</h2>
          {edges &&
            edges.map(edge => {
              const { author, badgeNames, date, excerpt, slug, title } =
                edge.node.frontmatter;

              return (
                <Link to={`/blog/${slug}`}>
                  <div className="flex justify-center mb-16 cursor-pointer">
                    {/* <div className="w-2/6 bg-gray-200 rounded-xl drop-shadow"></div> */}
                    <div className="cursor-pointer">
                      <div className="flex items-center justify-between">
                        <h3 className="mb-1.5 capitalize text-2xl font-bold">
                          {title}
                        </h3>
                        <span className="block mb-3 text-gray-600 ">
                          {date}
                        </span>
                      </div>
                      <p className="mb-3 text-lg">{excerpt}</p>
                      <ul className="flex gap-x-2">
                        {badgeNames &&
                          badgeNames.map(badgeName => {
                            return <li>{badges[badgeName]}</li>;
                          })}
                      </ul>
                      {/* <button className="pl-4 text-xl border-l-4 border-blue-500">
                      Read More
                    </button> */}
                      {/* <div className="flex items-center mt-6">
                        <StaticImage
                          className="w-10 h-10 bg-gray-200 shadow-inner rounded-2xl"
                          src="../images/prof-small.png"
                          alt="Author's profile picture"
                        />
                      </div> */}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query getArticles($type: String = "article") {
    allMdx(filter: { frontmatter: { type: { eq: $type } } }) {
      edges {
        node {
          frontmatter {
            slug
            title
            excerpt
            date(formatString: "DD MMMM, YYYY")
            badgeNames
            author
            type
          }
        }
      }
    }
  }
`;

export default index;
