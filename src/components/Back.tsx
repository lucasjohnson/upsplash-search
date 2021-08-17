import React from "react";
import { FiChevronUp } from "react-icons/fi";
import Copy from "../json/copy.json";

const Back: React.FC = () => {
  const handleBack = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <React.Fragment>
      <button
        className="backButton"
        onClick={handleBack}
        aria-label={Copy.back}
      >
        <FiChevronUp />
      </button>
    </React.Fragment>
  );
};

export default Back;
