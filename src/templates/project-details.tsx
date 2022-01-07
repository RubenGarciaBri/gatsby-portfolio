import React from "react";

import { graphql } from "gatsby";
import Header from "../components/header";

const ProjectDetails = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Header />
      <div className=""></div>
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
      }
    }
  }
`;

export default ProjectDetails;
