import React from "react";
import Copy from "../json/copy.json";

interface Props {
  setKeyDown: Function;
}

const Input: React.FC<Props> = ({ setKeyDown }) => (
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
