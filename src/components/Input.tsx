import React from "react";

interface Props {
  setKeyDown: Function;
  placeholder: string;
}

const Input: React.FC<Props> = ({ setKeyDown, placeholder }) => (
  <React.Fragment>
    <input
      type="text"
      placeholder={placeholder}
      onKeyDown={event => setKeyDown(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
