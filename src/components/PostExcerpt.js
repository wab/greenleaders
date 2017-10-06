import React from "react";
import Link from "gatsby-link";
import Thumbnail from "./Thumbnail";

const PostExcerpt = ({ post }) => (
  <Link to={`/article/${post.slug}`}>
    <article className="PostExcerpt">
      <h2>{post.title}</h2>

        {post.thumbnail ? (
          <Thumbnail img={post.thumbnail} />
        ) : 'image'}
    </article>
  </Link>
);

export default PostExcerpt;
