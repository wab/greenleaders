import React from "react";
import _ from "lodash";
import moment from "moment";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Page, Row, Column } from "hedron";
import Thumbnail from "../components/Thumbnail";
import Breadcrumb from "../components/Breadcrumb";
import SectionTitle from "../components/SectionTitle";
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
    line-height: 1.3;
  }

  h2 {
    color: ${colors.grey.base};
    font-size: ${globals.sizes.medium};
    line-height: 1.3;
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
    line-height: 1.3;
  }

  a {
    ${link};
  }

  ${includeListStyle};
`;

const numberPrint = number => css`
  &:nth-child(${number}) {
    &:before {
      content: "1";
    }
  }
`;

const itemLoop = () => {
  const nbre = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  nbre.map(element => numberPrint(element));
};

const Main = styled.main`
  font-weight: 300;
  h2,
  h3 {
    line-height: 1.3;
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

      > strong:first-child {
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
      &:nth-child(5) {
        &:before {
          content: "5";
        }
      }
      &:nth-child(6) {
        &:before {
          content: "6";
        }
      }
      &:nth-child(7) {
        &:before {
          content: "7";
        }
      }
      &:nth-child(8) {
        &:before {
          content: "8";
        }
      }
      &:nth-child(9) {
        &:before {
          content: "9";
        }
      }
      &:nth-child(10) {
        &:before {
          content: "10";
        }
      }
    }
  }
`;

const FileLink = styled.div`
  margin: ${globals.spaces.base};
  margin-left: 0;
`;

const RowWrapper = styled.div`
  ${rowMargin};
  margin-top: 0;
`;

const Navigation = styled.nav`
  border-top: solid 1px ${colors.grey.light};
  padding: ${globals.sizes.base} 0;
  margin-top: ${globals.sizes.medium};
`;

const NavigationItem = styled.div`
  text-align: ${props => (props.next ? "right" : "left")};
  position: relative;

  a {
    color: inherit;
    display: block;
    text-decoration: none;
    font-family: ${globals.fonts.alt};
    font-weight: 300;
    span {
      color: ${rubriqueColor};
      display: block;
      font-size: ${globals.sizes.small};
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

const ActuTemplate = ({ data }) => {
  const {
    createdAt,
    title,
    id,
    thumbnail,
    text,
    document
  } = data.contentfulActus;

  return (
    <div>
      <Helmet title={`${title} - ${data.site.siteMetadata.title}`} />
      <Page fluid>
        <article>
          <Row divisions={24}>
            <Column lg={17} lgShift={3} md={22} mdShift={1}>
              <Breadcrumb title={title} />
            </Column>
            <Column lg={5} lgShift={3} md={6} mdShift={1}>
              {thumbnail && (
                <Thumbnail
                  img={thumbnail.responsiveResolution}
                  caption={thumbnail.description}
                />
              )}
            </Column>
            <Column lg={12} mdShift={1} md={15}>
              <ArticleHeader>
                <time dateTime={createdAt}>
                  le {moment(createdAt).format("ll")}
                </time>
                <h1>{title}</h1>
              </ArticleHeader>
              <Main>
                {text && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: text.childMarkdownRemark.html
                    }}
                  />
                )}
                {document && (
                  <FileLink>
                    <a
                      href={document.file.url}
                      title={document.description}
                      target="_blank"
                    >
                      <Icon icon="download" /> Télécharger la pièce jointe
                        </a>
                  </FileLink>
                )}
              </Main>

            </Column>
          </Row>
        </article>
      </Page>
    </div>
  );
};

export default ActuTemplate;

export const query = graphql`
  query ActuQuery($id: String) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulActus(id: { eq: $id }) {
      id
      createdAt
      title
      thumbnail {
        description
        responsiveResolution(width: 400, height: 400) {
          width
          height
          src
          srcSet
        }
      }
      text {
        childMarkdownRemark {
          html
        }
      }
      document {
        description
        file {
          url
        }
      }
    }
  }
`;
