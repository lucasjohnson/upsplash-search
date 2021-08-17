import React from "react";
import { IconType, BreakPoint } from "../enums/Index";
import Anchor from "./Anchor";

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
      {url && (
        <React.Fragment>
          <span className="image-author">{author}</span>
          <nav className="image-navigation">
            <Anchor
              className="image-link"
              title={description}
              icon={IconType.EXTERNAL}
              url={url}
            />
          </nav>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Image;
