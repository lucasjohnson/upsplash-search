import React from "react";
import { IconType } from "../enums/Index";
import Anchor from "./Anchor";

interface ImageProps {
  imageDesktop: string;
  imageMobile: string;
  description: string;
  author: string;
  url: string;
}

const Image: React.FC<ImageProps> = ({
  imageDesktop,
  imageMobile,
  description,
  author,
  url
}) => (
  <React.Fragment>
    <picture>
      <source srcSet={imageDesktop} media="(min-width: 768px)" />
      <img src={imageMobile} alt={description} />
    </picture>
    <span className="imageAuthor">{author}</span>
    <nav className="imageNav">
      <Anchor
        className="imageNavLink"
        title="Image"
        icon={IconType.EXTERNAL}
        url={url}
      />
    </nav>
  </React.Fragment>
);

export default Image;
