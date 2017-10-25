import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Page, Row, Column } from "hedron";
import Thumbnail from "../components/Thumbnail";
import PostExcerpt from "../components/PostExcerpt";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";

const MainWrapper = styled.div``;

class TemplateWrapper extends Component {
  render() {
    const isHeaderExtended = this.props.location.pathname === "/";
    return (
      <MainWrapper>
        <Helmet title={this.props.data.site.siteMetadata.title} />
        <Header extended={isHeaderExtended} />
        <Navigation data={this.props.data} />
        <main>{this.props.children()}</main>
        <Footer data={this.props.data} />
      </MainWrapper>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query NavigationQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCategorie(sort: { fields: [order] }) {
      edges {
        node {
          id
          title
          order
          slug
          menu {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
