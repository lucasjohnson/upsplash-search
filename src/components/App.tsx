import React, { useState, useEffect } from "react";
import axios from "axios";
import { KeyCode } from "../enums/Index";
import Input from "./Input";
import Image from "./Image";

const App: React.FC = () => {
  const [images, setImages] = useState<Array<object>>([{}]);
  const [query, setQuery] = useState<string>("");
  const queryUrl: string = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=${query}&page=1&per_page=20`;

  const fetchImages = () => {
    axios
      .get(queryUrl, {
        headers: {}
      })
      .then(response => {
        setImages(response.data.results);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  const handleImageSearch = (event: KeyboardEvent): void => {
    if (event?.keyCode === KeyCode.ENTER) {
      setQuery((event.target as HTMLInputElement).value);
      setImages([{}]);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [query]);

  return (
    <div className="App">
      <header className="Header">
        <Input setKeyDown={handleImageSearch} />
      </header>
      <main className="Main">
        {images.length > 1 && (
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
        )}
      </main>
      <footer className="Footer"></footer>
    </div>
  );
};

export default App;
