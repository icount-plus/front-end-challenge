import { useEffect, useState, createContext } from "react";

const SearchContext = createContext({
  isLoading: true,
  citiesData: [],
  currentCity: {},
  updateCurrentCity: (cityName) => {},
  addCity: (cityName, cityRegion, cityCountry) => {},
  removeCity: (cityName) => {},
  cityIsAvailable: (cityName) => {},
});

const url =
  "https://api.weatherapi.com/v1/forecast.json?key=f8ef0c0d33c04564868171625222003&lang=pt&days=3&q=";

export function SearchContextProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [citiesData, setCitiesData] = useState([]);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetch(url + "Sao+Paulo")
      .then((response) => response.json())
      .then((data) => {
        setCurrentCity(data);
        setCitiesData([data]);
        setIsLoading(false);
      });
  }, []);

  function addCityHandler(cityName, cityRegion, cityCountry) {
    fetch(url + `${cityName},${cityRegion},${cityCountry}`)
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
    citiesData.map((city, index) => {
      if (city.location.name === cityInfo.name) {
        fetch(url + `${cityInfo.name},${cityInfo.region},${cityInfo.country}`)
          .then((response) => response.json())
          .then((data) => {
            setCurrentCity(data);

            setCitiesData((prevCities) => {
              prevCities[index] = data;
              return prevCities;
            });
          });
      }
    });
  }

  function removeCityHandler(cityName) {
    if (citiesData.length == 1) {
      // --> Fetch Standard Data
      fetch(url + "Sao+Paulo")
        .then((response) => response.json())
        .then((data) => {
          setCurrentCity(data);
          setCitiesData([data]);
        });
    } else {
      citiesData.map((city, index) => {
        if (city.location.name === cityName) {
          let prevCities = [...citiesData];

          if (index === 0) {
            setCurrentCity(prevCities[index + 1]);
          } else {
            setCurrentCity(prevCities[index - 1]);
          }

          setCitiesData(() => {
            return prevCities.filter((city) => city.location.name !== cityName);
          });
        }
      });
    }
  }

  function cityIsAvailableHandler(cityName) {
    return citiesData.some((city) => city.location.name === cityName);
  }

  const context = {
    isLoading: isLoading,
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
