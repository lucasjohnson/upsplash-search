import React from "react";

interface Props {
  setKeyDown: Function;
  placeholder: string;
  className: string;
}

const Input: React.FC<Props> = ({ setKeyDown, placeholder, className }) => (
  <React.Fragment>
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      onKeyDown={event => setKeyDown(event)}
      autoComplete="off"
    />
  </React.Fragment>
);

export default Input;
