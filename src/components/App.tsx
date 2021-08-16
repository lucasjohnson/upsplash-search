import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { FaReact } from "react-icons/fa";
import { KeyCode } from "../enums/Index";
import Input from "./Input";
import Image from "./Image";
import Copy from "../json/copy.json";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<object>>([]);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const queryUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&page=${page}&per_page=20`;

  const fetchImages = () => {
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
    fetchImages();
  }, [query]);

  return (
    <div className="App">
      <header className="Header">
        <h1 className="title">{Copy.title}</h1>
        <Input setKeyDown={handleImageSearch} />
        {loading && (
          <div className="loading" aria-busy={loading}>
            <FaReact />
          </div>
        )}
      </header>
      <main className="Main">
        {query.length > 0 && loading === false && (
          <h2 className="resultsTitle">{`${results} ${Copy.results} '${query}'`}</h2>
        )}
        {images.length > 0 && (
          <InfiniteScroll
            dataLength={images.length}
            next={fetchImages}
            hasMore={true}
            loader={
              <div className="loading" aria-busy={loading}>
                <FaReact />
              </div>
            }
          >
            <React.Fragment>
              <ul className="imageItems">
                {images.map((image: any, key: number) => (
                  <li className="imageItem" key={key}>
                    <Image
                      imageDesktop={image.urls.regular}
                      imageMobile={image.urls.small}
                      description={image.alt_description}
                      author={image.user.name}
                      url={image.links.html}
                    />
                  </li>
                ))}
              </ul>
            </React.Fragment>
          </InfiniteScroll>
        )}
      </main>
      <footer className="Footer"></footer>
    </div>
  );
};

export default App;
