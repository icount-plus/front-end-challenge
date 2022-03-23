import { useContext } from "react";

import SearchContext from "../../../store/search-context";
import classes from "./index.module.css";

function YourCitiesList(props) {
  const ctxSearch = useContext(SearchContext);

  return (
    <div className={classes.YourCitiesList__container}>
      <ul>
        {ctxSearch.citiesData.map((city) => {
          return (
            <li role="none" key={city.location.name}>
              <button
                className={classes.YourCitiesList__button}
                type="button"
                onClick={() => {
                  ctxSearch.updateCurrentCity(city);
                  props.toggleSidebarMenu();
                }}
              >
                <span>{city.location.name}</span>
                <span>
                  <img
                    src={city.current.condition.icon}
                    alt={"Temperatura atual em " + city.location.name + "."}
                  />
                  {city.current.temp_c}º
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default YourCitiesList;
