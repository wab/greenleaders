import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import Thumbnail from "./Thumbnail";
import BlockLink from "./BlockLink";
import styled, { ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";
import "moment/locale/fr";
moment.locale("fr");

const ExcerptTitle = styled.h2`
  font-size: ${globals.sizes.small};
  line-height: 1.3;
  margin-bottom: ${globals.spaces.xsmall};
`;
const ExcerptMeta = styled.div`
  color: ${rubriqueColor};
  font-size: ${globals.sizes.xsmall};
  line-height: 1.2;
  text-transform: uppercase;
`;

const Excerpt = styled.article`
  margin-bottom: ${globals.spaces.base};

  figure {
    position: relative;
    overflow: hidden;

    img {
      display: block;
      transition: transform ${globals.transition.duration}
        ${globals.transition.function};
    }
  }
  a:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

const ActuExcerpt = ({ post }) => {
  return (
    <Excerpt>
      <BlockLink to={`/actu/${post.slug}`}>
        {post.thumbnail ? (
          <Thumbnail img={post.thumbnail.responsiveResolution} />
        ) : (
            "image"
          )}
        <ExcerptTitle>{post.title}</ExcerptTitle>
        <ExcerptMeta>
          {moment(post.createdAt).format("ll")}
        </ExcerptMeta>
      </BlockLink>
    </Excerpt>
  );
};

export default ActuExcerpt;
