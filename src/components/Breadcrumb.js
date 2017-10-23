import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import globals from "../utils/globals";
import Icon from "./Icon";

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  font-size: ${globals.sizes.small};
  span {
    display: inline-block;
    margin: 0 ${globals.sizes.base};
  }

  .icon {
    display: inline-block;
    vertical-align: middle;
  }
`;

const Breadcrumb = () => (
  <nav>
    <Page fluid>
      <Row divisions={12}>
        <Column lg={10} lgShift={1} md={12}>
          <StyledLink to="/">
            <Icon icon="chevron" />
            <span>Retour</span>
          </StyledLink>
        </Column>
      </Row>
    </Page>
  </nav>
);

export default Breadcrumb;
