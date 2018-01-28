import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import HiddenTitle from "../components/HiddenTitle";
import PageContainer from "../components/PageContainer";
import Breadcrumb from "../components/Breadcrumb";
import ActuExcerpt from "../components/ActuExcerpt";
import RowWrapper from "../components/RowWrapper";
import colors from "../utils/colors";
import { link } from "../utils/mixins";

const Question = styled.h2`
  color: ${colors.primary};
  margin-top: 1rem;
`;

const StyledFaq = styled.section`
  border-bottom: 1px solid ${colors.grey.light};
  padding-bottom: 1rem;
  margin-bottom: 2rem;

  &:last-child {
    border: none;
  }

  a {
    ${link};
  }
`;

const ActusPage = ({ data }) => {
  const actus = data.allContentfulActus.edges;
  const pageTitle = `Actualités`;
  return (
    <div>
      <Helmet
        title={`${pageTitle} - ${data.site.siteMetadata.title}`}
      />
      <HiddenTitle>{pageTitle}</HiddenTitle>
      <Page fluid>
        <Row divisions={24}>
          <Column lg={17} lgShift={3} md={22} mdShift={1}>
            <Breadcrumb title={pageTitle} />
          </Column>
          <Column lg={16} lgShift={3} md={22} mdShift={1}>
            <RowWrapper>
              <Row divisions={12}>
                {actus && actus.length ? (
                  actus.map(({ node: post }, index) => (
                    <Column lg={4} md={4} sm={6} key={index}>
                      <ActuExcerpt post={post} />
                    </Column>
                  ))
                ) : (
                    <Column lgShift={1}>
                      <p>
                        Il n'y a pas encore d'articles dans cette catégorie !
                        </p>
                    </Column>
                  )}
              </Row>
            </RowWrapper>
          </Column>
        </Row>
      </Page>
    </div>
  );
};

export default ActusPage;

export const query = graphql`
  query ActusQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulActus {
      edges {
        node {
          updatedAt
          createdAt
          slug
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
        }
      }
    }
  }
`;
