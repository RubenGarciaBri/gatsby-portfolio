import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { badges } from "../data/badges";
import { MDXComponents } from "../components/MDX/MDXComponents";

import Layout from "../components/layout";

const Project = ({ data }) => {
  const { date, excerpt, featureImage, slug, title, badgeNames } =
    data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <div className="main-container">
          <div className="px-6">
            <div className="mt-10 h-[500px] bg-gray-300 rounded-2xl"></div>
            <div className="flex mt-16 gap-x-12">
              <div className="w-3/4">
                <h1 className="mb-4 text-4xl font-semibold">{title}</h1>
                <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
                <div className="text-lg">
                  <MDXRenderer>{body}</MDXRenderer>
                </div>
              </div>
              <div className="w-1/4">
                <h2 className="mb-4 text-2xl font-semibold">Technologies</h2>
                <ul className="flex gap-x-2.5 gap-y-2.5 mb-7 flex-wrap">
                  {badgeNames &&
                    badgeNames.map((badgeName, i) => (
                      <li key={i}>{badges[badgeName]}</li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query getProject($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        excerpt
        slug
        title
      }
      body
    }
  }
`;

export default Project;
