import React from "react";
import Input from "./Input";
import Copy from "../json/copy.json";

interface HeaderProps {
  setKeyDown: (event: KeyboardEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ setKeyDown }) => (
  <header className="header">
    <h1 className="header-title">{Copy.title}</h1>
    <Input setKeyDown={setKeyDown} />
  </header>
);

export default Header;
