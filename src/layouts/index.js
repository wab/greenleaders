import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Footer from "../components/Footer";

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
