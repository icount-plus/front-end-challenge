import classes from "./index.module.css";

function DailyCard(props) {
  const forecastDay = props.forecast;

  return (
    <li role="none" className={classes.Card__container}>
      <div className={classes.Card__forecastDate}>
        <span>
          {new Date(forecastDay.date + "T00:00:00").toLocaleDateString(
            "pt-br",
            {
              weekday: "short",
              day: "2-digit",
              month: "2-digit",
            }
          )}
        </span>
        <h3>
          <img src={forecastDay.day.condition.icon} alt="" />{" "}
          {forecastDay.day.avgtemp_c}º C
        </h3>
        <span className={classes.hiddenOnMedia}>
          {forecastDay.day.condition.text}
        </span>
      </div>
      <div className={classes.Card__forecastTemperature}>
        <div className={classes.hiddenOnMedia}>
          <h4>Max {forecastDay.day.maxtemp_c}º C</h4>
          <h4>Min {forecastDay.day.mintemp_c}º C</h4>
        </div>
      </div>
    </li>
  );
}

export default DailyCard;
