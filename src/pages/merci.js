import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
import globals from "../utils/globals";
import colors from "../utils/colors";
import { link } from "../utils/mixins";

const Title = styled.h1`
  color: ${colors.primary};
  margin-top: ${globals.spaces.base};
  font-size: ${globals.sizes.large};
  opacity: 0.5;
`;
const StyledParagraph = styled.p`
  a {
    ${link};
  }
`;

const ThxPage = ({ data }) => {
  return (
    <PageContainer title="merci">
      <Helmet title={`Merci - ${data.site.siteMetadata.title}`} />
      <Title>Merci !</Title>
      <StyledParagraph>
        Votre question nous a été transmise. Nous allons vous répondre dans les
        plus brefs délais. <br />Vous pouvez continuer votre navigation ou
        revenir sur la <Link to={"/"}>page d'accueil</Link>
      </StyledParagraph>
    </PageContainer>
  );
};

export default ThxPage;

export const query = graphql`
  query PageThxQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
