import React, { Component } from "react";
import Link from "gatsby-link";
import _ from "lodash";
import moment from "moment";
import Helmet from "react-helmet";
import { Page, Row, Column } from "hedron";
import PostExcerpt from "../components/PostExcerpt";
import Breadcrumb from "../components/Breadcrumb";
import HiddenTitle from "../components/HiddenTitle";
import QuestionForm from "../components/QuestionForm";
import SubMenu from "../components/SubMenu";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";
import "url-search-params-polyfill";
import "moment/locale/fr";
moment.locale("fr");

const RowWrapper = styled.div`
  ${rowMargin};
`;

class CategoryTemplate extends Component {
  // getInitialState
  state = {
    tag: null
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

  updateTag = slug => {
    !!slug
      ? this.setState({
          tag: slug
        })
      : this.setState({ tag: null });
  };

  componentWillMount() {
    const urlParams = new URLSearchParams(this.props.location.search);
    this.setState({
      tag: urlParams.get("tag")
    });
  }

  render() {
    const { title, menu, slug, article } = this.props.data.contentfulCategorie;
    const allPosts = this.props.data.contentfulCategorie.article;
    const posts = this.state.tag
      ? _.filter(allPosts, post => _.some(post.tag, { slug: this.state.tag }))
      : allPosts;

    return (
      <ThemeProvider theme={{ rubrique: slug }}>
        <div>
          <Helmet
            title={`${title} - ${this.props.data.site.siteMetadata.title}`}
          />
          <HiddenTitle>{title}</HiddenTitle>
          <Page fluid>
            <Row divisions={24}>
              <Column lg={17} lgShift={3} md={22} mdShift={1}>
                <Breadcrumb title={title} />
              </Column>
              <Column lg={4} md={5} mdShift={1} lgShift={2}>
                {menu && (
                  <SubMenu
                    menu={menu}
                    update={this.updateTag}
                    tag={this.state.tag}
                  />
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
                <QuestionForm title={`Depuis la rubrique "${title}"`} />
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
    site {
      siteMetadata {
        title
      }
    }
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
