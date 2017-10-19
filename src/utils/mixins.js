import { css } from "styled-components";

export const noBullet = (margin = 0) => css`
  list-style-type: none;
  margin: ${margin};
`;

export const rowMargin = css`
  margin-left: -1rem;
  margin-right: -1rem;
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
