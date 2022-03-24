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
      </div>
      <div className={classes.Card__forecastTemperature}>
        <h4 className={classes.hiddenOnMedia}>
          {forecastDay.day.maxtemp_c}º | {forecastDay.day.mintemp_c}º
        </h4>
      </div>
    </li>
  );
}

export default DailyCard;
