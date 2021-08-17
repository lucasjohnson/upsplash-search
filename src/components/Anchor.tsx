import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { IconType } from "../enums/Index";

interface AnchorProps {
  title: string;
  icon: IconType.EXTERNAL | IconType.GITHUB;
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
    {IconType.EXTERNAL ? <FiExternalLink /> : <GoMarkGithub />}
  </a>
);

export default Anchor;
