import React, { Component } from "react";
import Link from "gatsby-link";
import _ from "lodash";
import moment from "moment";
import { Page, Row, Column } from "hedron";
import PostExcerpt from "../components/PostExcerpt";
import Breadcrumb from "../components/Breadcrumb";
import HiddenTitle from "../components/HiddenTitle";
import QuestionForm from "../components/QuestionForm";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";
import "moment/locale/fr";
moment.locale("fr");

const RowWrapper = styled.div`
  ${rowMargin};
`;

const SubmenuStyle = styled.nav`
  ul {
    ${noBullet()};
  }

  li {
  }

  button {
    background: none;
    outline: none;
    border: 0;
    display: block;
    text-align: right;
    padding: 0;
    margin: 0;
    color: ${rubriqueColor};
    text-decoration: none;
    font-weight: bold;
    font-size: ${globals.sizes.small};
    width: 100%;
    cursor: pointer;
  }
`;

const SubMenu = ({ children }) => <SubmenuStyle>{children}</SubmenuStyle>;

class CategoryTemplate extends Component {
  // getInitialState
  state = {
    tag: this.props.location.search,
    posts: []
  };

  filterPosts = categorySlug => {
    const allPosts = this.props.data.contentfulCategorie.article;

    const filteredPosts = categorySlug
      ? _.filter(allPosts, post => _.some(post.tag, { slug: categorySlug }))
      : allPosts;

    this.setState({
      posts: filteredPosts
    });
  };

  componentWillMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    const query = urlParams.get("tag");
    this.filterPosts(query);
  }

  render() {
    const { title, menu, slug } = this.props.data.contentfulCategorie;
    const posts = this.state.posts;

    return (
      <ThemeProvider theme={{ rubrique: slug }}>
        <div>
          <Breadcrumb />
          <HiddenTitle>{title}</HiddenTitle>
          <Page fluid>
            <Row divisions={24}>
              <Column lg={4} md={5} mdShift={1} lgShift={2}>
                {menu && (
                  <SubMenu menu={menu}>
                    <ul>
                      <li>
                        <button onClick={() => this.filterPosts()}>Tous</button>
                      </li>
                      {menu.map((category, index) => (
                        <li key={index}>
                          <button
                            onClick={() => this.filterPosts(category.slug)}
                          >
                            {category.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </SubMenu>
                )}
              </Column>
              <Column md={16}>
                <RowWrapper>
                  <Row divisions={16}>
                    {posts && posts.length ? (
                      posts.map((post, index) => (
                        <Column lg={7} md={8} lgShift={1} key={index}>
                          <PostExcerpt post={post} />
                        </Column>
                      ))
                    ) : (
                      <Column lgShift={1}>
                        <p>
                          Il n'y a pas encore d'articles dans cette catégorie !
                        </p>
                      </Column>
                    )}
                  </Row>
                </RowWrapper>
              </Column>
            </Row>
            <Row divisions={12}>
              <Column lg={8} lgShift={2} md={10} mdShift={1}>
                <QuestionForm />
              </Column>
            </Row>
          </Page>
        </div>
      </ThemeProvider>
    );
  }
}

export default CategoryTemplate;

export const query = graphql`
  query CategoryQuery($id: String) {
    contentfulCategorie(id: { eq: $id }) {
      title
      slug
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
          categorie {
            slug
          }
        }
        thumbnail {
          description
          responsiveResolution(width: 400, height: 400) {
            width
            height
            src
            srcSet
          }
        }
        thumbAlt
      }
    }
  }
`;
