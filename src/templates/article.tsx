import * as React from "react";

import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import { StaticImage } from "gatsby-plugin-image";

import { badges } from "../data/badges";
import { MDXComponents } from "../components/MDX/MDXComponents";

import Img from "gatsby-image";

import Layout from "../components/layout";

const Article = ({ data }) => {
  const { date, excerpt, author, featuredImg, slug, title, badgeNames } =
    data.mdx.frontmatter;
  const { body } = data.mdx;

  return (
    <MDXProvider components={MDXComponents}>
      <Layout>
        <div className="container-sm">
          <div className="my-32 text-center">
            <h1 className="mb-6 text-5xl font-bold">{title}</h1>

            <div className="flex items-center justify-center gap-3 mb-2">
              <StaticImage
                src="../images/prof-small.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="Author's profile picture"
              />
              <div>
                <span className="font-bold">{author}</span> | {date}
              </div>
            </div>

            <ul>
              {badgeNames &&
                badgeNames.map((badgeName, index) => {
                  return <li key={index + badgeName}>{badges[badgeNames]}</li>;
                })}
            </ul>
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
