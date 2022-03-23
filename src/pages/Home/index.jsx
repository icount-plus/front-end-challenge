import { useContext } from "react";

import SearchContext from "../../store/search-context";
import HomeBackgroundImage from "../../components/ui/HomeBackgroundImage";
import LocationCard from "../../components/WeatherComponents/LocationCard";
import DailyCardList from "../../components/WeatherComponents/DailyCardList";
import classes from "./index.module.css";

function HomePage() {
  const ctxSearch = useContext(SearchContext);

  return (
    <>
      <HomeBackgroundImage />
      <section className={classes.Home__container}>
        <LocationCard
          city={ctxSearch.currentCity.location}
          current={ctxSearch.currentCity.current}
        />
        <DailyCardList forecast={ctxSearch.currentCity.forecast.forecastday} />
      </section>
    </>
  );
}

export default HomePage;
