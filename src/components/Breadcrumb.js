import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import globals from "../utils/globals";

const Icon = styled.svg`
  display: inline-block;
  vertical-align: middle;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: ${globals.sizes.small};
  span {
    display: inline-block;
    margin: 0 ${globals.sizes.base};
  }
`;

const Chevron = () => (
  <Icon height="21" width="11" viewBox="0 0 11 21">
    <polyline fill="none" points="11 1 0 10.5 11 20" stroke="#2F2F30" />
  </Icon>
);

const Breadcrumb = () => (
  <nav>
    <Page fluid>
      <Row divisions={12}>
        <Column lg={10} lgShift={1} md={12}>
          <StyledLink to="/">
            <Chevron />
            <span>Retour</span>
          </StyledLink>
        </Column>
      </Row>
    </Page>
  </nav>
);

export default Breadcrumb;
