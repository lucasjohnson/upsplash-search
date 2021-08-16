import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { IconType } from "../enums/Index";

interface AnchorProps {
  title: string;
  icon: IconType.EXTERNAL;
  className: string;
  url: string;
}

const Anchor: React.FC<AnchorProps> = ({ title, icon, className, url }) => (
  <a
    className={className}
    href={url}
    title={`${title} opens in new tab`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <FiExternalLink />
  </a>
);

export default Anchor;
