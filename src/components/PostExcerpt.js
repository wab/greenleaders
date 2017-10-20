import React from "react";
import Link from "gatsby-link";
import moment from "moment";
import Thumbnail from "./Thumbnail";
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

const StyledLink = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const PostExcerpt = ({ post }) => {
  const rubriqueSlug = !!post.tag ? post.tag[0].categorie[0].slug : "";
  const category = !!post.tag ? post.tag[0].title : "";
  return (
    <ThemeProvider theme={{ rubrique: rubriqueSlug }}>
      <StyledLink to={`/article/${post.slug}`}>
        <article>
          {post.thumbnail ? (
            <Thumbnail img={post.thumbnail.responsiveResolution} />
          ) : (
            "image"
          )}
          <ExcerptTitle>{post.title}</ExcerptTitle>
          <ExcerptMeta>
            {category} - Le {moment(post.createdAt).format("ll")}
          </ExcerptMeta>
        </article>
      </StyledLink>
    </ThemeProvider>
  );
};

export default PostExcerpt;
