import React from "react";
import Loader from "./Loader";
import ImageItems from "./ImageItems";
import Copy from "../json/copy.json";

interface MainProps {
  handleFetchImages: () => void;
  images: any;
  query: string;
  results: number;
  isLoading: boolean;
}

const Main: React.FC<MainProps> = ({
  handleFetchImages,
  images,
  query,
  results,
  isLoading
}) => {
  return (
    <main className="main">
      <Loader isLoading={isLoading} />
      {query.length > 0 && isLoading === false && (
        <h2 className="main-title">{`${results} ${Copy.results} '${query}'`}</h2>
      )}
      {images.length > 0 && (
        <ImageItems
          handleFetchImages={handleFetchImages}
          images={images}
          isLoading={isLoading}
        />
      )}
    </main>
  );
};

export default Main;
