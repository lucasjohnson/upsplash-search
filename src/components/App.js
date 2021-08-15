import React, { useEffect, useState } from "react";
import axios from "axios";

const App: React.FC = () => {
  const [data, setData] = useState(null);

  const fetchImages = (): void => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_CLIENT_ID}&query=office&page=1`
      )
      .then(response => {
        setData([...response.data.results]);
      })
      .catch(error => {
        console.warn(error);
      });
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="App">
      <ul>
        {data &&
          data.map((image, index) => (
            <li key={index}>
              <picture>
                <source
                  srcSet={image.urls.regular}
                  media="(min-width: 768px)"
                />
                <img src={image.urls.small} alt={image.alt_description} />
              </picture>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
