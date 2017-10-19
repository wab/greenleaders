import React, { Component } from "react";
import Link from "gatsby-link";
import _ from "lodash";

class CategoryTemplate extends Component {
  // getInitialState
  state = {
    subCategory: null,
    posts: this.props.data.contentfulCategorie.article
  };

  filterPosts = categoryId => {
    const allPosts = this.props.data.contentfulCategorie.article;

    const filteredPosts = categoryId
      ? _.filter(allPosts, post => _.some(post.tag, { id: categoryId }))
      : allPosts;

    this.setState({
      posts: filteredPosts
    });
  };

  loadAllPosts = () => {
    this.setState({
      posts: this.props.data.contentfulCategorie.article
    });
  };

  render() {
    const { title, menu } = this.props.data.contentfulCategorie;
    const posts = this.state.posts;

    return (
      <div>
        <Link to="/">&larr; Retour</Link>
        <h1>{title}</h1>
        {menu && (
          <ul className="submenu">
            <li>
              <button onClick={() => this.filterPosts()}>Tous</button>
            </li>
            {menu.map((category, index) => (
              <li key={index}>
                <button href="#" onClick={() => this.filterPosts(category.id)}>
                  {category.title}
                </button>
              </li>
            ))}
          </ul>
        )}
        <h2>Les articles</h2>
        {posts && posts.length ? (
          <ul>
            {posts.map((post, index) => (
              <li key={index}>
                <Link to={`/article/${post.slug}`} activeClassName="active">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Il n'y a pas encore d'articles dans cette catégorie !</p>
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
      article {
        updatedAt
        createdAt
        slug
        title
        tag {
          id
          slug
          title
        }
      }
    }
  }
`;
