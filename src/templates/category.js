import React, { Component } from "react";
import Link from "gatsby-link";
import _ from "lodash";

class CategoryTemplate extends Component {
  // getInitialState
  state = {
    subCategory: null,
    posts: this.props.data.allContentfulArticle.edges
  };

  filterPosts = categoryId => {
    const allPosts = this.props.data.allContentfulArticle.edges;

    const filteredPosts = categoryId
      ? _.filter(allPosts, ({ node: post }) =>
          _.some(post.categories, { id: categoryId })
        )
      : allPosts;

    this.setState({
      posts: filteredPosts
    });
  };

  loadAllPosts = () => {
    this.setState({
      posts: this.props.data.allContentfulArticle.edges
    });
  };

  render() {
    const { title, subcategories } = this.props.data.contentfulCategorie;
    const posts = this.state.posts;

    return (
      <div>
        <Link to="/">&larr; Retour</Link>
        <h1>{title}</h1>
        {subcategories && (
          <ul className="submenu">
            <li>
              <button onClick={() => this.filterPosts()}>Tous</button>
            </li>
            {subcategories.map((category, index) => (
              <li key={index}>
                <button href="#" onClick={() => this.filterPosts(category.id)}>
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

export default CategoryTemplate;

export const query = graphql`
  query CategoryQuery($id: String) {
    contentfulCategorie(id: { eq: $id }) {
      title
      menu {
        id
        slug
        title
      }
    }
    allContentfulArticle {
      edges {
        node {
          slug
          title
          rubrique {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
