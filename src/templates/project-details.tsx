import React from "react";

import { graphql } from "gatsby";

import { badges } from "../data/badges";

import Header from "../components/header";
import Footer from "../components/Layout/Footer/Footer";

const ProjectDetails = ({ data }) => {
  const { date, excerpt, featureImage, slug, title, badgeNames } =
    data.mdx.frontmatter;

  console.log(badgeNames);

  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="px-6">
          <div className="mt-10 h-[500px] bg-gray-300 rounded-2xl"></div>
          <div className="flex mt-16 gap-x-12">
            <div className="w-3/4">
              <h1 className="mb-4 text-4xl font-semibold">{title}</h1>
              <h2 className="mb-4 text-2xl font-semibold">Overview</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur voluptatum beatae eius repellendus minus
                exercitationem! Pariatur asperiores consequuntur molestiae odit
                maxime voluptates tenetur vel at dolores sapiente! Non, cumque
                deserunt.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur voluptatum beatae eius repellendus minus
                exercitationem.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur voluptatum beatae eius repellendus minus
                exercitationem! Pariatur asperiores consequuntur molestiae odit
                maxime voluptates tenetur vel at dolores sapiente! Non, cumque
                deserunt.
              </p>
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
      <Footer />
    </div>
  );
};

export const query = graphql`
  query getProject($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date
        excerpt
        featureImage
        slug
        title
        badgeNames
      }
    }
  }
`;

export default ProjectDetails;
