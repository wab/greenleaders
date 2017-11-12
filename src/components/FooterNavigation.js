import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled, { ThemeProvider } from "styled-components";
import PageContainer from "./PageContainer";
import { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet } from "../utils/mixins";

const FooterNavigationStyled = styled.nav`
  padding-bottom: ${globals.sizes.large};
`;

const RubriqueTitle = styled(Link)`
  display: block;
  font-weight: bold;
  font-size: ${globals.sizes.small};
  color: ${rubriqueColor};
  text-decoration: none;
  margin-bottom: ${globals.sizes.base};

  &:hover {
    color: ${rubriqueColor};
  }
`;
const TagMenu = styled.ul`
  font-family: ${globals.fonts.alt};
  font-size: 0.65rem;
  ${noBullet()};
`;
const TagItem = styled.li`
  margin-bottom: ${globals.sizes.base};

  &:last-child {
    margin-bottom: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      color: ${rubriqueColor};
    }
  }
`;

const FooterNavigation = ({ data }) => {
  const rubriques = data.allContentfulCategorie.edges;
  return (
    <FooterNavigationStyled>
      <Page fluid>
        <Row divisions={24}>
          {!!rubriques &&
            rubriques.map(({ node: rubrique }, index) => (
              <Column
                key={rubrique.id}
                lg={4}
                md={6}
                lgShift={index == 0 ? 5 : 0}
              >
                <ThemeProvider theme={{ rubrique: rubrique.slug }}>
                  <div>
                    <RubriqueTitle
                      to={`/${rubrique.slug}`}
                      activeClassName="active"
                    >
                      {rubrique.title}
                    </RubriqueTitle>
                    <TagMenu>
                      {rubrique.menu.map(tag => (
                        <TagItem key={tag.id}>
                          <Link to={`/${rubrique.slug}?tag=${tag.slug}`}>
                            {tag.title}
                          </Link>
                        </TagItem>
                      ))}
                    </TagMenu>
                  </div>
                </ThemeProvider>
              </Column>
            ))}
        </Row>
      </Page>
    </FooterNavigationStyled>
  );
};

export default FooterNavigation;
