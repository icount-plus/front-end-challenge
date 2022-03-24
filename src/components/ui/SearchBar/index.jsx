import { useState, useEffect, useContext } from "react";

import SearchContext from "../../../store/search-context";
import classes from "./index.module.css";

function SearchBar(props) {
  const [filteredText, setFilteredText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const ctxSearch = useContext(SearchContext);

  useEffect(() => {
    if (filteredText.length > 2) {
      fetch(
        `https://api.weatherapi.com/v1/search.json?key=f8ef0c0d33c04564868171625222003&lang=pt&q=${filteredText}`
      )
        .then((response) => response.json())
        .then((data) => setSearchResults(data));
    } else {
      return setSearchResults([]);
    }
  }, [filteredText]);

  const ResultsList = () => {
    return (
      <ul className={classes.ResultsList__container}>
        {searchResults.map((city) => {
          return (
            <li key={city.name}>
              <button
                onClick={() => {
                  ctxSearch.addCity(city.name, city.region, city.country);
                  props.onSelection();
                }}
                type="button"
              >
                <span>
                  {city.name}, {city.region}, {city.country}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={classes.SearchBar__container}>
      <input
        type="text"
        name="SearchInput"
        id="SearchInput"
        placeholder="Busque uma cidade..."
        onChange={(e) => setFilteredText(e.target.value)}
      />
      {searchResults.length > 0 && <ResultsList />}
    </div>
  );
}

export default SearchBar;
