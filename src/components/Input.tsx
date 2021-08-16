import React from "react";

interface Props {
  setKeyDown: Function;
}

const Input: React.FC<Props> = ({ setKeyDown }) => (
  <React.Fragment>
    <input
      className="imageSearch"
      type="text"
      placeholder="Enter search term"
      onKeyDown={event => setKeyDown(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
