import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode } from "../enums/Index";
import Input from "./Input";
import Image from "./Image";
import Copy from "../json/copy.json";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<object>>([]);
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<number>(0);
  const queryUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&page=1&per_page=20`;

  const fetchImages = () => {
    axios
      .get(queryUrl, {
        headers: {}
      })
      .then(response => {
        console.log(response);
        setImages(response.data.results);
        setResults(response.data.total);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const handleImageSearch = (event: KeyboardEvent): void => {
    if (event?.keyCode === KeyCode.ENTER) {
      setQuery((event.target as HTMLInputElement).value);
      setImages([]);
      setResults(0);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div className="App">
      <header className="Header">
        <h1 className="title">{Copy.title}</h1>
        <Input setKeyDown={handleImageSearch} />
      </header>
      <main className="Main">
        {query.length > 0 && (
          <h2 className="resultsTitle">{`${results} ${Copy.results} '${query}'`}</h2>
        )}
        {images.length > 0 && (
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
        )}
      </main>
      <footer className="Footer"></footer>
    </div>
  );
};

export default App;
