import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";

const SectionTitle = styled.div`
  color: ${rubriqueColor};
  font-size: ${globals.sizes.small};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${globals.sizes.small};

  &:after {
    content: "";
    display: block;
    width: 80px;
    height: 1px;
    margin-top: ${globals.sizes.small};
    background-color: currentColor;

    ${props =>
      props.center &&
      css`
        margin-left: auto;
        margin-right: auto;
      `};
  }
`;

export default SectionTitle;
