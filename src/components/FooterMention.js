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

const FooterMention = () => (
  <Mention>* GreenLeaders : Ambassadeurs verts.</Mention>
);

export default FooterMention;
