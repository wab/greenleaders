import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PageContainer from "./PageContainer";
import globals from "../utils/globals";
import colors from "../utils/colors";

const Mention = styled.div`
  color: ${colors.grey.medium};
  font-size: ${globals.sizes.xsmall};
  font-style: italic;
  text-align: center;
`;
const Links = styled.div`
  color: ${colors.grey.medium};
  font-size: ${globals.sizes.xsmall};
  text-align: center;

  a {
    color: ${colors.grey.medium};

    &:hover,
    &:focus {
      color: ${colors.primary};
    }
  }
`;

const FooterMention = () => (
  <div>
    <Mention>* GreenLeaders : Ambassadeurs verts.</Mention>
    <Links>
      <a href="https://elearning-yvesrocher.elmg.net">e-learning</a> / <Link to="/mentions-legales">Mentions Légales</Link>
    </Links>
  </div>
);

export default FooterMention;
