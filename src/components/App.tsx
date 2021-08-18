import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode } from "../enums/Index";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import BuildQuery from "../helpers/BuildQuery";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<object>>([]);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const queryUrl: string = BuildQuery.upsplashApi(query, page);

  const handleFetchImages = (): void => {
    axios
      .get(queryUrl, {
        headers: {}
      })
      .then(response => {
        setImages([...images, ...response.data.results]);
        setResults(response.data.total);
        setLoading(false);
      })
      .catch(error => {
        console.warn(error);
      });

    setPage(page + 1);
  };

  const handleImageSearch = (event: KeyboardEvent): void => {
    if (
      event?.keyCode === KeyCode.ENTER &&
      (event.target as HTMLInputElement).value !== query
    ) {
      setPage(1);
      setImages([]);
      setResults(0);
      setQuery((event.target as HTMLInputElement).value);
    }
  };

  useEffect(() => {
    setLoading(true);
    handleFetchImages();
  }, [query]);

  return (
    <div className="app">
      <Header setKeyDown={handleImageSearch} />
      <Main
        handleFetchImages={handleFetchImages}
        images={images}
        query={query}
        results={results}
        isLoading={isLoading}
      />
      <Footer />
    </div>
  );
};

export default App;
