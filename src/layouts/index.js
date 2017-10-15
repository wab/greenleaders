import React, {Component} from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Container from "../components/Container";
import Footer from "../components/Footer";

// import '../main.scss';

const Main = styled.main`
  padding: 1.5em 0;
`;

class TemplateWrapper extends Component {
  render() {
    console.log(this.props)
    const isHeaderExtended = this.props.location.pathname === '/';
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
        <Container>
          <Main>{this.props.children()}</Main>
        </Container>
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
    allContentfulCategorie {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
