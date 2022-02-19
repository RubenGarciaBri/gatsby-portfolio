const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query GetProjects {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(edge => {
    const { slug, type } = edge.node.frontmatter;

    if (type === "project") {
      actions.createPage({
        path: `/projects/${slug}`,
        component: path.resolve("./src/templates/project.tsx"),
        context: { slug: slug },
      });
    } else if (type === "article") {
      actions.createPage({
        path: `/blog/${slug}`,
        component: path.resolve("./src/templates/article.tsx"),
        context: { slug: slug },
      });
    }
  });
};
