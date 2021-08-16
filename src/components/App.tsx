import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode } from "../enums/Index";
import Input from "./Input";

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
      <header>
        <Input setKeyDown={handleImageSearch} placeholder="Enter search term" />
      </header>
      <main>
        {data.length > 1 && (
          <ul>
            {data.map((image: any, key: number) => (
              <li key={key}>
                <picture>
                  <source
                    srcSet={image.urls.regular}
                    media="(min-width: 768px)"
                  />
                  <img src={image.urls.small} alt={image.alt_description} />
                </picture>
                <span>{image.user.name}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
