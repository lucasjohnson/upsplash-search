import React from "react";
import { FaReact } from "react-icons/fa";

interface LoaderProps {
  isLoading: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading }) => {
  return (
    <div className="loading" aria-busy={isLoading} aria-hidden={!isLoading}>
      <FaReact />
    </div>
  );
};

export default Loader;
