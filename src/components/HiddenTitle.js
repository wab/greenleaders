import React from "react";
import styled from "styled-components";
import { elementInvisible } from "../utils/mixins";

const HiddenTitle = styled.h1`
  ${elementInvisible};
`;

export default HiddenTitle;
