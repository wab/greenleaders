import React from "react";
import _ from "lodash";
import moment from "moment";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Page, Row, Column } from "hedron";
import Thumbnail from "../components/Thumbnail";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
import PostExcerpt from "../components/PostExcerpt";
import QuestionForm from "../components/QuestionForm";
import Icon from "../components/Icon";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position, link } from "../utils/mixins";
import "moment/locale/fr";
moment.locale("fr");

import mascotte from "../assets/images/mascotte.png";

const ArticleHeader = styled.header`
  margin-bottom: 65px;
  time {
    color: ${rubriqueColor};
    font-size: ${globals.sizes.small};
    text-transform: uppercase;
  }
  h1 {
    font-size: ${globals.sizes.large};
    margin-bottom: 8px;
    line-height: 1.2em;
  }

  h2 {
    color: ${colors.grey.base};
    font-size: ${globals.sizes.medium};
    line-height: 1.2em;
  }
`;

const Speech = styled.div`
  position: relative;
  @media (min-width: 1024px) {
    &:after {
      display: block;
      content: "";
      width: 113px;
      height: 181px;
      background-image: url(${mascotte});
      ${position(0, "-150px")};
    }
  }
`;

const Blockquote = styled.blockquote`
  margin: 1.5em 10px;
  position: relative;
  font-style: italic;
  font-weight: 300;
  &:before,
  &:after {
    color: ${rubriqueColor};
    font-size: ${globals.sizes.xlarge};
    font-weight: bold;
    font-style: normal;
    line-height: 1;
    font-family: Merriweather;
    opacity: 0.1;
    position: absolute;
    top: 0;
  }

  &:before {
    content: "“";
    left: -3rem;
  }
  &:after {
    content: "”";
    right: -2rem;
  }
`;

const includeListStyle = css`
  ul {
    ${noBullet("0 0 0 16px")};

    li {
      position: relative;
      &:before {
        display: inline-block;
        content: "";
        width: 8px;
        height: 8px;
        background-color: ${rubriqueColor};
        margin-left: -16px;
        margin-right: 8px;
      }
    }
  }
`;

const Summary = styled.section`
  font-size: ${globals.sizes.small};

  h1,
  h2,
  h3 {
    font-size: 1.2em;
    line-height: 1.5;
  }

  a {
    ${link};
  }

  ${includeListStyle};
`;

const Main = styled.main`
  h2,
  h3 {
    line-height: 1.2;
  }

  ${includeListStyle};

  a {
    ${link};
  }

  ol {
    ${noBullet(0)};
    li {
      padding-top: 3.5rem;
      position: relative;

      strong {
        color: ${rubriqueColor};
        display: block;
        font-weight: 400;
        text-transform: uppercase;
      }

      &:before {
        color: ${rubriqueColor};
        display: block;
        line-height: 1;
        font-size: ${globals.sizes.xlarge};
        font-family: ${globals.fonts.default};
        font-weight: 300;
        opacity: 0.2;
        position: absolute;
        top: 0;
        left: 0;
      }

      &:nth-child(1) {
        &:before {
          content: "1";
        }
      }
      &:nth-child(2) {
        &:before {
          content: "2";
        }
      }
      &:nth-child(3) {
        &:before {
          content: "3";
        }
      }
      &:nth-child(4) {
        &:before {
          content: "4";
        }
      }
    }
  }
`;

const RowWrapper = styled.div`
  ${rowMargin};
`;

const Navigation = styled.nav`
  border-top: solid 1px ${colors.grey.light};
  padding: ${globals.sizes.base} 0;
`;

const NavigationItem = styled.div`
  text-align: ${props => (props.next ? "right" : "left")};
  position: relative;

  a {
    color: inherit;
    display: block;
    text-decoration: none;
    font-family: ${globals.fonts.alt};
    span {
      color: ${rubriqueColor};
      display: block;
      font-family: ${globals.fonts.default};
      font-weight: bold;
    }

    .icon {
      ${props =>
        props.next
          ? css`
              transform: rotate(180deg);
              ${position("5px", "-32px", "auto", "auto")};
            `
          : css`
              ${position("5px", "auto", "auto", "-32px")};
            `};
    }
  }
`;

const Aside = styled.aside`
  margin-top: ${globals.spaces.large};
`;

const PostTemplate = ({ data }) => {
  const {
    createdAt,
    title,
    subtitle,
    rubrique,
    tag,
    id,
    thumbnail,
    thumbAlt,
    summary,
    main,
    speech,
    moreInfoUrl
  } = data.contentfulArticle;

  const onTheme = _.filter(
    rubrique.article,
    post => post.rubrique.slug === rubrique.slug && post.id !== id
  );
  const postIndex = _.find(
    data.allContentfulArticle.edges,
    ({ node: post }) => post.id === id
  );

  return (
    <ThemeProvider theme={{ rubrique: rubrique.slug }}>
      <div>
        <Helmet title={`${title} - ${data.site.siteMetadata.title}`} />
        <Page fluid>
          <article>
            <Row divisions={24}>
              <Column lg={17} lgShift={3} md={22} mdShift={1}>
                <Breadcrumb rubrique={rubrique} title={title} tag={tag} />
              </Column>
              <Column lg={5} lgShift={3} md={6} mdShift={1}>
                {thumbnail && (
                  <Thumbnail
                    img={thumbnail.responsiveResolution}
                    alt={thumbAlt}
                    caption={thumbnail.description}
                  />
                )}
                {summary && (
                  <Summary>
                    <SectionTitle>en bref</SectionTitle>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: summary.childMarkdownRemark.html
                      }}
                    />
                    <a href={moreInfoUrl}>En savoir plus</a>
                  </Summary>
                )}
              </Column>
              <Column lg={12} mdShift={1} md={15}>
                <ArticleHeader>
                  <time dateTime={createdAt}>
                    le {moment(createdAt).format("ll")}
                  </time>
                  <h1>{title}</h1>
                  <h2>{subtitle}</h2>
                </ArticleHeader>
                {main && (
                  <Main>
                    <SectionTitle>in concreto</SectionTitle>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: main.childMarkdownRemark.html
                      }}
                    />
                  </Main>
                )}

                {speech && (
                  <Speech>
                    <SectionTitle>Discours</SectionTitle>
                    <Blockquote
                      dangerouslySetInnerHTML={{
                        __html: speech.childMarkdownRemark.html
                      }}
                    />
                  </Speech>
                )}

                <QuestionForm light title={`Depuis l'article "${title}"`} />

                {onTheme.length > 0 && (
                  <Aside>
                    <SectionTitle>Sur le même thème</SectionTitle>
                    <RowWrapper>
                      <Row divisions={2}>
                        {onTheme.map((post, index) => {
                          return (
                            <Column md={1} key={index}>
                              <PostExcerpt post={post} />
                            </Column>
                          );
                        })}
                      </Row>
                    </RowWrapper>
                  </Aside>
                )}
              </Column>
            </Row>

            <Navigation>
              <Row divisions={24}>
                <Column lg={9} lgShift={3} md={11} mdShift={1}>
                  {postIndex.previous && (
                    <NavigationItem>
                      <Link
                        to={`/${postIndex.previous.rubrique.slug}/${postIndex
                          .previous.slug}`}
                      >
                        <Icon icon="chevron" />
                        <span>Article Précédent :</span>
                        {postIndex.previous.title}
                      </Link>
                    </NavigationItem>
                  )}
                </Column>
                <Column lg={9} md={11}>
                  {postIndex.next && (
                    <NavigationItem next>
                      <Link
                        to={`/${postIndex.next.rubrique.slug}/${postIndex.next
                          .slug}`}
                      >
                        <Icon icon="chevron" />
                        <span>Article Suivant :</span>
                        {postIndex.next.title}
                      </Link>
                    </NavigationItem>
                  )}
                </Column>
              </Row>
            </Navigation>
          </article>
        </Page>
      </div>
    </ThemeProvider>
  );
};

export default PostTemplate;

export const query = graphql`
  query PostQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulArticle(id: { eq: $id }) {
      id
      createdAt
      title
      subtitle
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
      summary {
        childMarkdownRemark {
          html
        }
      }
      main {
        childMarkdownRemark {
          html
        }
      }
      speech {
        childMarkdownRemark {
          html
        }
      }
      moreInfoUrl
      rubrique {
        slug
        title
        article {
          id
          slug
          title
          rubrique {
            slug
          }
          tag {
            slug
            title
            categorie {
              slug
            }
          }
          thumbnail {
            responsiveResolution(width: 400, height: 400) {
              width
              height
              src
              srcSet
            }
          }
        }
      }
      tag {
        slug
        title
      }
    }
    allContentfulArticle {
      edges {
        previous {
          slug
          title
          subtitle
          rubrique {
            slug
          }
        }
        node {
          id
        }
        next {
          slug
          title
          subtitle
          rubrique {
            slug
          }
        }
      }
    }
  }
`;
