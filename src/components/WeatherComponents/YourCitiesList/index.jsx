import { useContext } from "react";

import SearchContext from "../../../store/search-context";
import AddRemoveCityButton from "../../ui/AddRemoveCityButton";
import classes from "./index.module.css";

function YourCitiesList(props) {
  const ctxSearch = useContext(SearchContext);

  const YourCitiesButton = (btnProps) => {
    const city = btnProps.city;

    return (
      <li role="none" key={city.location.name}>
        <AddRemoveCityButton
          onClick={() => ctxSearch.removeCity(city.location.name)}
          icon="fa-solid fa-minus"
          alert="1"
        />
        <button
          className={classes.YourCitiesList__button}
          type="button"
          onClick={() => {
            ctxSearch.updateCurrentCity(city);
            props.toggleSidebarMenu();
          }}
        >
          <span className={classes.YourCitiesButton__left}>
            {city.location.name}
          </span>
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
  };

  return (
    <div className={classes.YourCitiesList__container}>
      <ul>
        {ctxSearch.citiesData.map((city) => {
          return <YourCitiesButton key={city.location.name} city={city} />;
        })}
      </ul>
    </div>
  );
}

export default YourCitiesList;
