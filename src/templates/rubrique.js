import React, { Component } from "react";
import Link from "gatsby-link";

class RubriqueTemplate extends Component {
  // getInitialState
  state = {
    subCategory: null,
    posts: this.props.data.allContentfulArticle.edges
  };

  filterPosts = filteredPosts => {

    this.setState({
      posts: filteredPosts
    });
  };

  loadAllPosts = () => {
    this.setState({
      posts: this.props.data.allContentfulArticle.edges
    });
  }

  render() {
    const { title, subcategories } = this.props.data.contentfulRubrique;
    const posts = this.props.data.allContentfulArticle.edges;

    console.log(this.state.posts);

    return (
      <div>
        <Link to="/">&larr; Retour</Link>
        <h1>{title}</h1>
        {subcategories && (
          <ul>
            {subcategories.map((category, index) => (
              <li key={index}>
                <button
                  href="#"
                  onClick={() => this.filterPosts(category.article)}
                >
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        )}
        <h2>Les articles</h2>
        {posts && (
          <ul>
            {posts.map(({ node: post }, index) => (
              <li key={index}>
                <Link to={`/article/${post.slug}`} activeClassName="active">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default RubriqueTemplate;

export const query = graphql`
  query RubriqueQuery($id: String) {
    contentfulRubrique(id: { eq: $id }) {
      id
      title
      subcategories {
        id
        slug
        title
        article {
          id
          title
        }
      }
    }
    allContentfulArticle {
      edges {
        node {
          id
          slug
          title
          categories {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
