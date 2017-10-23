import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import Thumbnail from "./Thumbnail";
import BlockLink from "./BlockLink";
import styled, { ThemeProvider } from "styled-components";
import colors, { rubriqueColor } from "../utils/colors";
import globals from "../utils/globals";

const ExcerptTitle = styled.h2`
  font-size: ${globals.sizes.base};
  margin-bottom: ${globals.spaces.xsmall};
`;
const ExcerptMeta = styled.div`
  color: ${rubriqueColor};
  font-size: ${globals.sizes.xsmall};
  text-transform: uppercase;
`;

const PostExcerpt = ({ post }) => {
  const rubriqueSlug = !!post.tag ? post.tag[0].categorie[0].slug : "";
  const category = !!post.tag ? post.tag[0].title : "";
  return (
    <ThemeProvider theme={{ rubrique: rubriqueSlug }}>
      <BlockLink to={`/${rubriqueSlug}/${post.slug}`}>
        <article>
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
        </article>
      </BlockLink>
    </ThemeProvider>
  );
};

export default PostExcerpt;
