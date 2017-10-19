import React from "react";

const Thumbnail = ({ img, alt, caption }) => (
  <figure className="Thumbnail">
    <img src={img.src} srcSet={img.srcSet} alt={alt ? alt : ""} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
);

export default Thumbnail;
