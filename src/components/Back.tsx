import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import Copy from "../json/copy.json";

const Back: React.FC = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

  window.onscroll = function() {
    handleNavigationDisplay();
  };

  const handleNavigationDisplay = (): void => {
    document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
      ? setVisible(true)
      : setVisible(false);
  };

  const handleTopScroll = (): void => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <React.Fragment>
      <button
        className="back-button"
        onClick={handleTopScroll}
        aria-label={Copy.back}
        aria-hidden={isVisible}
      >
        <FiChevronUp />
      </button>
    </React.Fragment>
  );
};

export default Back;
