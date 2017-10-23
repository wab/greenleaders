import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import PageContainer from "../components/PageContainer";
import colors from "../utils/colors";
import globals from "../utils/globals";
import { position, link } from "../utils/mixins";

const Title = styled.h1`
  color: ${colors.primary};
  font-size: 10rem;
  opacity: 0.1;
  text-shadow: 2px 2px 0 ${colors.grey.medium};
  ${position(0, "auto", "auto", 0)};
`;
const SubTitle = styled.h2`
  padding-top: 8rem;
`;
const StyledParagraph = styled.p`
  a {
    ${link};
  }
`;

const NotFoundPage = () => (
  <PageContainer>
    <Title>404</Title>
    <SubTitle>Oups, la page que vous demandez est introuvable.</SubTitle>
    <StyledParagraph>
      Vous pouvez tout de même naviguer sur les différentes rubriques du site ou
      revenir sur la <Link to={"/"}>page d'accueil</Link>
    </StyledParagraph>
  </PageContainer>
);

export default NotFoundPage;
