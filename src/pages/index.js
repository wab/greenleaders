import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import PostExcerpt from "../components/PostExcerpt";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";

const Accueil = styled.div`
  padding: ${globals.sizes.large} 0;
`;

const RowWrapper = styled.div`
  ${rowMargin};
`;

const IndexPage = ({ data }) => {
  const posts = data.allContentfulArticle.edges;
  return (
    <Accueil>
      {posts && (
        <Page fluid>
          <Row divisions={24}>
            <Column md={16} lgShift={1}>
              <RowWrapper>
                <Row divisions={16}>
                  {posts.map(({ node: post }, index) => (
                    <Column lg={7} md={8} lgShift={1} key={index}>
                      <PostExcerpt post={post} />
                    </Column>
                  ))}
                </Row>
              </RowWrapper>
            </Column>
            <Column lg={4} md={8} lgShift={1} />
          </Row>
        </Page>
      )}
    </Accueil>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allContentfulArticle {
      edges {
        node {
          createdAt
          title
          slug
          thumbnail {
            description
            responsiveResolution(width: 400, height: 400) {
              width
              height
              src
              srcSet
            }
          }
          thumbAlt
          tag {
            title
            categorie {
              slug
            }
          }
        }
      }
    }
  }
`;
