import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode } from "../enums/Index";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<object>>([]);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const queryUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&page=${page}&per_page=20`;

  const handleFetchImages = () => {
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
    if (event?.keyCode === KeyCode.ENTER) {
      setPage(1);
      setQuery((event.target as HTMLInputElement).value);
      setImages([]);
      setResults(0);
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
