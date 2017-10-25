import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import globals from "../utils/globals";
import colors, { rubriqueColor } from "../utils/colors";
import Icon from "./Icon";

const Nav = styled.nav`
  font-size: ${globals.sizes.small};
  padding-top: ${globals.spaces.small};
  a {
    &:hover,
    &:focus {
      color: ${rubriqueColor};
    }
    &:after {
      content: "/";
      color: ${colors.grey.light};
      display: inline-block;
      margin-left: 0.5rem;
    }
  }

  a,
  span {
    color: ${colors.grey.medium};
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

const Breadcrumb = props => (
  <Nav>
    <Link to={"/"}>Accueil</Link>
    {props.rubrique && (
      <Link to={`/${props.rubrique.slug}`}>{props.rubrique.title}</Link>
    )}
    <span>{props.title && props.title}</span>
  </Nav>
);

export default Breadcrumb;
