import React from "react";
import { IconType } from "../enums/Index";
import Anchor from "./Anchor";
import Back from "./Back";
import Copy from "../json/copy.json";

const Footer: React.FC = () => (
  <footer className="footer">
    <Back />
    <Anchor
      title={Copy.githubTitle}
      icon={IconType.GITHUB}
      className="footerIcon"
      url={Copy.githubUrl}
    />
  </footer>
);

export default Footer;
