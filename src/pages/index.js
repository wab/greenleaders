import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import { Page, Row, Column } from "hedron";
import PostExcerpt from "../components/PostExcerpt";
import BlockLink from "../components/BlockLink";
import QuestionForm from "../components/QuestionForm";
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
const PostList = styled.ol`
  ${noBullet(0)};
`;
const PostItemTitle = styled.h3`
  color: ${colors.grey.dark};
  font-size: ${globals.sizes.small};
  line-height: 1.4;
  margin-bottom: 0.2rem;
`;
const Date = styled.div`
  color: ${colors.grey.light};
  text-transform: uppercase;
  font-size: ${globals.sizes.xsmall};
`;

const StyledPostItem = styled.article`
  padding-bottom: ${globals.sizes.small};
  margin-bottom: ${globals.sizes.small};
  border-bottom: 1px solid ${colors.grey.light};
`;

const PostItem = ({ post }) => (
  <BlockLink to={`/article/${post.slug}`}>
    <StyledPostItem>
      <PostItemTitle>{post.title}</PostItemTitle>
      <Date>{moment(post.createdAt).format("ll")}</Date>
    </StyledPostItem>
  </BlockLink>
);

const IndexPage = ({ data }) => {
  const posts = data.allContentfulArticle.edges;
  const focusedPosts = posts.filter((post, i) => i <= 3);
  const otherPosts = posts.filter((post, i) => i > -1);
  return (
    <ThemeProvider theme={{ rubrique: "home" }}>
      <Accueil>
        {posts && (
          <Page fluid>
            <Row divisions={24}>
              <Column md={16} lgShift={1}>
                <RowWrapper>
                  <Row divisions={16}>
                    {focusedPosts.map(({ node: post }, index) => (
                      <Column lg={7} md={8} lgShift={1} key={index}>
                        <PostExcerpt post={post} />
                      </Column>
                    ))}
                  </Row>
                </RowWrapper>
              </Column>
              <Column lg={4} md={8} lgShift={1}>
                {otherPosts.length > 0 ? (
                  <PostList>
                    {otherPosts.map(({ node: post }, index) => (
                      <li key={index}>
                        <PostItem post={post} />
                      </li>
                    ))}
                  </PostList>
                ) : (
                  <p>Pas d'autre articles pour le moment !</p>
                )}
              </Column>
            </Row>
            <Row divisions={12}>
              <Column lg={8} lgShift={2} md={10} mdShift={1}>
                <QuestionForm />
              </Column>
            </Row>
          </Page>
        )}
      </Accueil>
    </ThemeProvider>
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
