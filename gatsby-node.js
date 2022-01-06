const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query GetProjects {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug;
    actions.createPage({
      path: `/projects/${slug}`,
      component: path.resolve("./src/templates/project-details.tsx"),
      context: { slug: slug },
    });
  });
};
