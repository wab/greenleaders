import React from "react";
import Link from "gatsby-link";
import Thumbnail from "./Thumbnail";
import styled from "styled-components";
import colors from "../utils/colors";
import globals from "../utils/globals";

const Excerpt = styled.article``;
const ExcerptTitle = styled.h2`
  font-size: ${globals.sizes.base};
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const PostExcerpt = ({ post }) => (
  <StyledLink to={`/article/${post.slug}`}>
    <Excerpt>
      {post.thumbnail ? (
        <Thumbnail img={post.thumbnail.responsiveResolution} />
      ) : (
        "image"
      )}
      <ExcerptTitle>{post.title}</ExcerptTitle>
    </Excerpt>
  </StyledLink>
);

export default PostExcerpt;
