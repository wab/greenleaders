import { css } from "styled-components";

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
