import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
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
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
`;

const Item = styled.li`
  display: inline-block;
  margin-bottom: 0;

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

const Navigation = ({ data }) => {
  const rubriques = data.allContentfulCategorie.edges;
  return (
    <MainNavigation>
      <ul>
        {!!rubriques &&
          rubriques.map(({ node: rubrique }, index) => (
            <Item key={index} rubrique={rubrique.slug}>
              <Link to={`/categorie/${rubrique.slug}`} activeClassName="active">
                {rubrique.title}
              </Link>
            </Item>
          ))}
        <Item secondary>
          <Link to="/faq" activeClassName="active">
            FAQ
          </Link>
        </Item>
        <Item secondary>
          <a href="#">e-learning</a>
        </Item>
      </ul>
    </MainNavigation>
  );
};

export default Navigation;
