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
  font-size: ${globals.sizes.base};
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

const PostExcerpt = ({ post }) => {
  const rubriqueSlug = !!post.tag ? post.tag[0].categorie[0].slug : "";
  const category = !!post.tag ? post.tag[0].title : "";
  return (
    <ThemeProvider theme={{ rubrique: rubriqueSlug }}>
      <Excerpt>
        <BlockLink to={`/${rubriqueSlug}/${post.slug}`}>
          {post.thumbnail ? (
            <Thumbnail img={post.thumbnail.responsiveResolution} />
          ) : (
            "image"
          )}
          <ExcerptTitle>{post.title}</ExcerptTitle>
          <ExcerptMeta>
            <strong>{category}</strong> - Le{" "}
            {moment(post.createdAt).format("ll")}
          </ExcerptMeta>
        </BlockLink>
      </Excerpt>
    </ThemeProvider>
  );
};

export default PostExcerpt;
