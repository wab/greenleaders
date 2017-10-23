import React from "react";
import Link from "gatsby-link";
import { Page, Row, Column } from "hedron";
import styled from "styled-components";
import HiddenTitle from "../components/HiddenTitle";
import PageContainer from "../components/PageContainer";
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

const Faq = ({ faq }) => (
  <StyledFaq>
    <Question>{faq.question}</Question>
    <div
      dangerouslySetInnerHTML={{
        __html: faq.anwser.childMarkdownRemark.html
      }}
    />
  </StyledFaq>
);
const FaqPage = ({ data }) => {
  const faqs = data.allContentfulFaq.edges;
  return (
    <PageContainer>
      <HiddenTitle>Les questions fréquemment posées</HiddenTitle>
      {faqs.map(({ node: faq }, index) => <Faq key={index} faq={faq} />)}
    </PageContainer>
  );
};

export default FaqPage;

export const query = graphql`
  query FaqQuery {
    allContentfulFaq {
      edges {
        node {
          question
          anwser {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
