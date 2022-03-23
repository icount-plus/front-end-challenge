import { useState, createContext } from "react";

const SearchContext = createContext({
  citiesData: [],
  currentCity: {},
  updateCurrentCity: (cityName) => {},
  addCity: (cityName, cityRegion, cityCountry) => {},
  removeCity: (cityName) => {},
  cityIsAvailable: (cityName) => {},
});

const standardData = await fetch(
  `http://api.weatherapi.com/v1/forecast.json?key=f8ef0c0d33c04564868171625222003&lang=pt&days=3&q=Sao+Paulo`
)
  .then((response) => response.json())
  .then((data) => {
    return data;
  });

export function SearchContextProvider(props) {
  const [citiesData, setCitiesData] = useState([standardData]);
  const [currentCity, setCurrentCity] = useState(standardData);

  function addCityHandler(cityName, cityRegion, cityCountry) {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=f8ef0c0d33c04564868171625222003&lang=pt&days=3&q=${cityName},${cityRegion},${cityCountry}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (!cityIsAvailableHandler(data.location.name)) {
          setCurrentCity(data);
          return setCitiesData((prevCities) => prevCities.concat(data));
        }
      });
  }

  function updateCurrentCityHandler(cityToUpdate) {
    const cityInfo = cityToUpdate.location;

    // --> Update currentCity state
    citiesData.map((city) => {
      if (city.location.name === cityInfo.name) {
        fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=f8ef0c0d33c04564868171625222003&lang=pt&days=3&q=${cityInfo.name},${cityInfo.region},${cityInfo.country}`
        )
          .then((response) => response.json())
          .then((data) => setCurrentCity(data));
      }
    });
  }

  function removeCityHandler(cityName) {
    setCitiesData((prevCities) => {
      return prevCities.filter((city) => city.location.name !== cityName);
    });
  }

  function cityIsAvailableHandler(cityName) {
    return citiesData.some((city) => city.location.name === cityName);
  }

  const context = {
    citiesData: citiesData,
    currentCity: currentCity,
    updateCurrentCity: updateCurrentCityHandler,
    addCity: addCityHandler,
    removeCity: removeCityHandler,
    cityIsAvailable: cityIsAvailableHandler,
  };

  return (
    <SearchContext.Provider value={context}>
      {props.children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
