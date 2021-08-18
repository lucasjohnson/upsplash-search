import React from "react";
import { BreakPoint } from "../enums/Index";

interface ImageProps {
  imageDesktop: string;
  imageMobile: string;
  description: string;
  author: string;
  url?: string;
}

const Image: React.FC<ImageProps> = ({
  imageDesktop,
  imageMobile,
  description,
  author,
  url
}) => {
  return (
    <React.Fragment>
      <picture className="image">
        <source srcSet={imageDesktop} media={BreakPoint.TABLET} />
        <img className="image-element" src={imageMobile} alt={description} />
      </picture>
      {url && <span className="image-author">{author}</span>}
    </React.Fragment>
  );
};

export default Image;
