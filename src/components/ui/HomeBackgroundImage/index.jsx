import { useContext } from "react";

import SearchContext from "../../../store/search-context";
import classes from "./index.module.css";

function HomeBackgroudImage() {
  const ctxSearch = useContext(SearchContext);

  function testTimes() {
    let current = ctxSearch.currentCity.current;
    let time = new Date(ctxSearch.currentCity.location.localtime).getHours();
    if (current.is_day) {
      if (time >= 14 && time < 18) {
        return "late-afternoon";
      } else if (time >= 12 && time < 14) {
        return "afternoon";
      } else {
        return "day";
      }
    } else {
      return "night";
    }
  }

  const timeOfTheDay = testTimes();
  const weatherImage = "sunny-" + timeOfTheDay + ".png";
  const desktopPath =
    "/src/images/" + timeOfTheDay + "/desktop_" + weatherImage;
  const mobilePath = "/src/images/" + timeOfTheDay + "/mobile_" + weatherImage;

  return (
    <div className={classes.HomeBackgroundImage__container}>
      <picture>
        <source
          srcSet={desktopPath}
          media="(min-width: 601px)"
          type="image/png"
        />
        <source
          srcSet={mobilePath}
          media="(max-width: 600px)"
          type="image/png"
        />
        <img src={desktopPath} alt="" />
      </picture>
    </div>
  );
}

export default HomeBackgroudImage;
