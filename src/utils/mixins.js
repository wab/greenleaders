import { css } from "styled-components";
import { rubriqueColor } from "./colors";
import globals from "./globals";

export const noBullet = (margin = 0) => css`
  list-style-type: none;
  margin: ${margin};
`;

export const rowMargin = css`
  margin: -1rem;
`;

export const position = (
  top = "auto",
  right = "auto",
  bottom = "auto",
  left = "auto"
) => css`
  position: absolute;
  top: ${top};
  right: ${right};
  bottom: ${bottom};
  left: ${left};
`;

export const elementInvisible = css`
  position: absolute !important;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const link = css`
  display: inline-block;
  position: relative;
  color: inherit;
  text-decoration: none;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 50%;
    background: ${rubriqueColor};
    opacity: 0.2;
    transition: opacity ${globals.transition.duration}
      ${globals.transition.function};
    z-index: -1;
    ${position("auto", "auto", 0, 0)};
  }

  &:hover {
    &:before {
      opacity: 0.5;
    }
  }
`;
