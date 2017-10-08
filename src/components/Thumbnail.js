import React from "react";

const Thumbnail = ({ img, alt, caption }) => (
  <figure className="Thumbnail">
    <img
      style={{
        height: img.height,
        width: img.width
      }}
      src={img.src}
      srcSet={img.srcSet}
      alt={alt ? alt : ''}
    />
    {caption && (
      <figcaption>{caption}</figcaption>
    )}
  </figure>
);

export default Thumbnail;
