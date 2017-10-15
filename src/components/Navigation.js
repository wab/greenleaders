import React from "react";
import Link from "gatsby-link";
import Container from "../components/Container";
import styled from "styled-components";
import colors from "../utils/colors";

const MainNavigation = styled.nav`
  border-bottom: 1px solid rgba(47, 47, 48, 0.15);
  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
  }
`;

const Item = styled.li`
  display: inline-block;
  margin-bottom: 0;
  a {
    display: block;
    padding: 1.5em;
    text-decoration: none;
    color: ${props => (props.rubrique === "secondary" ? "#9B9B9B" : "inherit")};
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
      color: ${props => {
        switch (props.rubrique) {
          case "fondation":
            return colors.fondation;
          default:
            return colors.primary;
        }
      }};

      &:after {
        background-color: ${props => {
          switch (props.rubrique) {
            case "fondation":
              return colors.fondation;
            default:
              return colors.primary;
          }
        }};
      }
    }
  }
`;

const Navigation = ({ data }) => {
  const rubriques = data.allContentfulCategorie.edges;
  return (
    <MainNavigation>
      <Container>
        <ul>
          {!!rubriques &&
            rubriques.map(({ node: rubrique }, index) => (
              <Item key={index} rubrique={rubrique.slug}>
                <Link
                  to={`/categorie/${rubrique.slug}`}
                  activeClassName="active"
                >
                  {rubrique.title}
                </Link>
              </Item>
            ))}
          <Item rubrique="secondary">
            <Link to="/faq" activeClassName="active">
              FAQ
            </Link>
          </Item>
          <Item rubrique="secondary">
            <a href="#">e-learning</a>
          </Item>
        </ul>
      </Container>
    </MainNavigation>
  );
};

export default Navigation;
