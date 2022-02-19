import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { badges } from "../data/badges";
import { MDXComponents } from "../components/MDX/MDXComponents";

import Layout from "../components/layout";

const Article = ({ data }) => {
  const { date, excerpt, featureImage, slug, title, badgeNames } =
    data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <MDXProvider components={MDXComponents}>
      <Layout>{title}</Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query getArticle($slug: String) {
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

export default Article;
