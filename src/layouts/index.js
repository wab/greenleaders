import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Footer from "../components/Footer";
import { Page, Row, Column } from "hedron";
import Thumbnail from "../components/Thumbnail";
import PostExcerpt from "../components/PostExcerpt";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";
moment.locale("fr");

class TemplateWrapper extends Component {
  render() {
    const isHeaderExtended = this.props.location.pathname === "/";
    return (
      <div className="mainWrapper">
        <Helmet
          title="GreenLeaders"
          meta={[
            { name: "description", content: "GreenLeaders" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <Header extended={isHeaderExtended} />
        <Navigation data={this.props.data} />
        <main>{this.props.children()}</main>
        <Footer />
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const query = graphql`
  query NavigationQuery {
    allContentfulCategorie(sort: { fields: [order] }) {
      edges {
        node {
          title
          order
          slug
        }
      }
    }
  }
`;
