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
      <picture>
        <source srcSet={imageDesktop} media={BreakPoint.TABLET} />
        <img className="image" src={imageMobile} alt={description} />
      </picture>
      {url && (
        <React.Fragment>
          <span className="imageAuthor">{author}</span>
          <nav className="imageNav">
            <Anchor
              className="imageNavLink"
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
