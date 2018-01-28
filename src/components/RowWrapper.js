import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import { noBullet, rowMargin, position } from "../utils/mixins";

const RowWrapper = styled.div`
  ${rowMargin};
`;

export default RowWrapper;
