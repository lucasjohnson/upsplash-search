import React from "react";
import Copy from "../json/copy.json";

interface InputProps {
  setKeyDown: Function;
}

const Input: React.FC<InputProps> = ({ setKeyDown }) => (
  <React.Fragment>
    <input
      className="imageSearch"
      type="text"
      placeholder={Copy.placholder}
      onKeyDown={event => setKeyDown(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
