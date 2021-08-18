import React from "react";
import { IconType } from "../enums/Index";
import Anchor from "./Anchor";
import Back from "./Back";
import Copy from "../json/copy.json";

const Footer: React.FC = () => (
  <footer className="footer">
    <nav className="footer-navigation">
      <Back />
      <Anchor
        title={Copy.githubTitle}
        icon={IconType.GITHUB}
        className="footer-icon"
        url={Copy.githubUrl}
      />
    </nav>
  </footer>
);

export default Footer;
