import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import { Page, Row, Column } from "hedron";
import PostExcerpt from "../components/PostExcerpt";
import ActuExcerpt from "../components/ActuExcerpt";
import BlockLink from "../components/BlockLink";
import QuestionForm from "../components/QuestionForm";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";
moment.locale("fr");

const Accueil = styled.div`
  padding: ${globals.sizes.medium} 0;
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
const SectionTitle = styled.p`
  color: ${colors.grey.base};
  font-size: ${globals.sizes.small};
  text-transform: uppercase;
  line-height: 1.4;
  margin-bottom: ${props => props.withMargin ? '20px' : 0};
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

const PostItem = ({ post, isActu }) => {
  const path = isActu ? `actu` : post.rubrique.slug;
  return (
    <BlockLink to={`/${path}/${post.slug}`}>
      <StyledPostItem>
        <PostItemTitle>{post.title}</PostItemTitle>
        <Date>{moment(post.createdAt).format("ll")}</Date>
      </StyledPostItem>
    </BlockLink>
  );
}

const IndexPage = ({ data }) => {
  const posts = data.allContentfulArticle.edges;
  const actus = data.allContentfulActus.edges.filter((post, i) => i < 4);
  const focusedPosts = posts.filter((post, i) => i <= 3);
  const otherPosts = posts.filter((post, i) => i > 3);
  const renderOtherPosts = otherPosts.length > 0 ? (
    <PostList>
      {otherPosts.map(({ node: post }, index) => (
        <li key={index}>
          <PostItem post={post} />
        </li>
      ))}
    </PostList>
  ) : (<p>Pas d'autre articles pour le moment !</p>);

  const renderActus = actus.length > 0 ? (
    <PostList>
      {actus.map(({ node: post }, index) => (
        <li key={index}>
          <ActuExcerpt post={post} />
        </li>
      ))}
    </PostList>
  ) : (<p>Pas d'autre articles pour le moment !</p>);

  return (
    <ThemeProvider theme={{ rubrique: "home" }}>
      <Accueil>
        {posts && (
          <Page fluid>
            <Row divisions={24}>
              <Column md={16} lgShift={1}>
                <RowWrapper>
                  <Row divisions={16}>
                    <Column lg={15} md={16} lgShift={1}>
                      <SectionTitle>Derniers articles…</SectionTitle>
                    </Column>
                  </Row>
                </RowWrapper>
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
                <SectionTitle withMargin>Actualités</SectionTitle>
                {renderActus}
              </Column>
            </Row>
            <Row divisions={12}>
              <Column lg={8} lgShift={2} md={10} mdShift={1}>
                <QuestionForm title="depuis l'accueil" />
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
    site {
      siteMetadata {
        title
      }
    }
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
          rubrique {
            slug
          }
          tag {
            title
            categorie {
              slug
            }
          }
        }
      }
    }
    allContentfulActus {
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
        }
      }
    }
  }
`;
