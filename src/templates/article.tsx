import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";

import { badges } from "../data/badges";
import { MDXComponents } from "../components/MDX/MDXComponents";

import Img from "gatsby-image";

import Layout from "../components/layout";

const Article = ({ data }) => {
  const { date, excerpt, author, featuredImg, slug, title, badgeNames } =
    data.mdx.frontmatter;
  const { body } = data.mdx;

  console.log(featuredImg)

  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <div className="main-container">
          <div className="py-32 my-12 bg-gray-200 rounded-xl">
            <div className="text-center">
              <h1 className="mb-1 text-5xl font-bold">{title}</h1>
              <h2 className="mb-3 text-2xl">{excerpt}</h2>
              <span>{author}</span>
              <span>{date}</span>
              {/* <Img fluid={featuredImg.childImageSharp.fluid} /> */}

              <ul>
                {badgeNames &&
                  badgeNames.map((badgeName, index) => {
                    return (
                      <li key={index + badgeName}>{badges[badgeNames]}</li>
                    );
                  })}
              </ul>
            </div>
          </div>
          <div className="container-sm">
            {<MDXRenderer>{body}</MDXRenderer>}
          </div>
        </div>
      </Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query getArticle($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        excerpt
        author
        featuredImg {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        slug
        title
        badgeNames
      }
      body
    }
  }
`;

export default Article;
