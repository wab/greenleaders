const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {

    graphql(
      `
        {
          allContentfulArticle(limit: 1000) {
            edges {
              node {
                id
                slug
                rubrique {
                  slug
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        const postTemplate = path.resolve(`./src/templates/post.js`);
        _.each(result.data.allContentfulArticle.edges, ({ node }) => {
          const page = {
            path: `/${node.rubrique.slug}/${node.slug}/`,
            component: slash(postTemplate),
            context: {
              id: node.id
            }
          };
          createPage(page);
        });
      })
      .then(() => {
        graphql(
          `
            {
              allContentfulCategorie(limit: 1000) {
                edges {
                  node {
                    id
                    slug
                  }
                }
              }
            }
          `
        )
          .then(result => {
            if (result.errors) {
              reject(result.errors);
            }
            const rubriqueTemplate = path.resolve(`./src/templates/category.js`);
            _.each(result.data.allContentfulCategorie.edges, ({ node }) => {
              const page = {
                path: `/${node.slug}/`,
                component: slash(rubriqueTemplate),
                context: {
                  id: node.id
                }
              };
              createPage(page);
            });

          })
          .then(() => {
            graphql(
              `
                {
                  allContentfulActus(limit: 1000) {
                    edges {
                      node {
                        id
                        slug
                      }
                    }
                  }
                }
              `
            )
              .then(result => {

                if (result.errors) {
                  reject(result.errors);
                }
                const ActuTemplate = path.resolve(`./src/templates/actu.js`);
                _.each(result.data.allContentfulActus.edges, ({ node }) => {
                  const page = {
                    path: `actus/${node.slug}/`,
                    component: slash(ActuTemplate),
                    context: {
                      id: node.id
                    }
                  };
                  createPage(page);
                });


                resolve();
              })
          })

      });
  });
};
