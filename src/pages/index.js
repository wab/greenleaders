import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => {
  const posts = data.allContentfulArticle.edges;
  return (
    <div>
      <h1>Accueil</h1>
      {posts && (
        <ul>
          {posts.map(({ node: post }, index) => (
            <li key={index}>
              <Link to={`/article/${post.slug}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentfulArticle {
      edges {
        node {
          title
          subtitle
          slug
        }
      }
    }
  }
`;
