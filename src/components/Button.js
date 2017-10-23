import React from "react";
import styled from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";

const Button = styled.button`
  background-color: ${rubriqueColor};
  padding: 1rem ${props => (props.large ? "3.5rem" : "2rem")};
  outline: 0;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${globals.sizes.small};
  font-weight: bold;
`;

export default Button;
