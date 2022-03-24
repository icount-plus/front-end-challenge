import classes from "./index.module.css";

function LocationCard(props) {
  const city = props.city;
  const days = props.current;
  const currentDate = new Date(city.localtime);

  return (
    <div className={classes.LocationCard__container}>
      <div className={classes.LocationCard__aboutLocation}>
        <h1>{city.name}</h1>
        <h2>
          {city.region}, {city.country}
        </h2>
      </div>
      <div className={classes.LocationCard__dateInfo}>
        <h3>
          {currentDate.toLocaleDateString("pt-br", {
            dateStyle: "full",
          })}
        </h3>
      </div>
      <div className={classes.LocationCard__temperature}>
        <h2>
          <img src={days.condition.icon} alt="" />
          {days.temp_c}ºC
        </h2>
        <div className={classes.LocationCard__temperature__divider}></div>
        <span className={classes.LocationCard__localtime}>
          {currentDate.toLocaleTimeString("pt-br", {
            timeStyle: "short",
          })}
        </span>
      </div>
    </div>
  );
}

export default LocationCard;
