import React from "react";
import styled, { css } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";

const Button = styled.button`
  background-color: ${props =>
    props.send ? "rgba(255, 255, 255, 0.2)" : rubriqueColor};
  padding: 1rem ${props => (props.large ? "3.5rem" : "2rem")};
  outline: 0;
  border: none;
  color: ${colors.white};
  cursor: pointer;
  font-size: ${globals.sizes.small};
  font-weight: bold;
  transition: all ${globals.transition.duration} ${globals.transition.function};

  svg {
    display: inline-block;
    margin-left: 0.5rem;
    vertical-align: middle;
    transition: transform ${globals.transition.duration}
      ${globals.transition.function};
  }

  &:hover,
  &:focus {
    ${props =>
      props.send &&
      css`
        background-color: rgba(255, 255, 255, 1);
        color: ${rubriqueColor};
      `};
    svg {
      transform: scale(1.1) rotate(30deg);
    }
  }
`;

export default Button;
