import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode, IconType } from "../enums/Index";
import Input from "./Input";
import Anchor from "./Anchor";

const App: React.FC = () => {
  const [data, setData] = useState<Array<object>>([{}]);
  const [query, setQuery] = useState<string>("");
  const queryUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&page=1&per_page=20`;

  const fetchImages = () => {
    axios
      .get(queryUrl, {
        headers: {}
      })
      .then(response => {
        setData(response.data.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const handleImageSearch = (event: KeyboardEvent): void => {
    if (event?.keyCode === KeyCode.ENTER) {
      setQuery((event.target as HTMLInputElement).value);
      setData([{}]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div className="App">
      <header className="Header">
        <Input
          setKeyDown={handleImageSearch}
          placeholder="Enter search term"
          className="imageSearch"
        />
      </header>
      <main className="Main">
        {data.length > 1 && (
          <ul className="imageItems">
            {data.map((image: any, key: number) => (
              <li className="imageItem" key={key}>
                <picture>
                  <source
                    srcSet={image.urls.regular}
                    media="(min-width: 768px)"
                  />
                  <img src={image.urls.small} alt={image.alt_description} />
                </picture>
                <span className="imageAuthor">{image.user.name}</span>
                <nav className="imageNav">
                  <Anchor
                    className="imageNavLink"
                    title="Image"
                    icon={IconType.EXTERNAL}
                    url={image.links.html}
                  />
                </nav>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer className="Footer"></footer>
    </div>
  );
};

export default App;
