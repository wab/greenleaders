import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import globals from "../utils/globals";

const Figure = styled.figure`
  img {
    margin-bottom: 0;
  }
  figcaption {
    color: ${colors.grey.base};
    font-size: ${globals.sizes.xsmall};
    font-style: italic;
  }
`;

const Thumbnail = ({ img, alt, caption }) => (
  <Figure>
    <img src={img.src} srcSet={img.srcSet} alt={alt ? alt : ""} />
    {caption && <figcaption>{caption}</figcaption>}
  </Figure>
);

export default Thumbnail;
