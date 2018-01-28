import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Link from "gatsby-link";
import styled from "styled-components";
import styledMap from "styled-map";
import colors from "../utils/colors";

const rubriqueColor = styledMap("rubrique", {
  fondation: colors.fondation,
  magasin: colors.magasin,
  environnement: colors.environnement,
  produits: colors.produits,
  default: colors.primary
});

const MainNavigation = styled.nav`
  border-bottom: 1px solid rgba(47, 47, 48, 0.15);
  text-align: center;
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const Item = styled.li`
  display: inline-block;
  margin-bottom: 0;

  @media (max-width: 640px) {
    display: block;
  }

  a {
    display: block;
    font-size: 15px;
    padding: 1.5em;
    text-decoration: none;
    color: ${props => (props.secondary ? "#9B9B9B" : "inherit")};
    text-align: center;
    text-decoration: none;
    position: relative;
    transition: color 250ms ease-in;

    @media (max-width: 640px) {
      padding: 0.5em;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: transparent;
      position: absolute;
      left: 0;
      bottom: -1px;
      transition: all 250ms ease-in;
    }

    &.active,
    &:hover,
    &:focus {
      color: ${rubriqueColor};

      &:after {
        background-color: ${rubriqueColor};
      }
    }
  }
`;

class Navigation extends Component {
  isActive = () => {
    return true;
  };
  render() {
    const rubriques = this.props.data.allContentfulCategorie.edges;
    return (
      <MainNavigation>
        <ul>
          {!!rubriques &&
            rubriques.map(({ node: rubrique }, index) => (
              <Item key={rubrique.id} rubrique={rubrique.slug}>
                <NavLink to={`/${rubrique.slug}`} activeClassName="active">
                  {rubrique.title}
                </NavLink>
              </Item>
            ))}
          <Item secondary>
            <Link to="/faq" activeClassName="active">
              FAQ
            </Link>
          </Item>
          <Item secondary>
            <Link to="/actus" activeClassName="active">
              Actualités
            </Link>
          </Item>
        </ul>
      </MainNavigation>
    );
  }
}

export default Navigation;
