import classes from "./index.module.css";

function Footer() {
  return (
    <footer className={classes.Footer__container}>
      <span>
        Powered by{" "}
        <a href="https://www.weatherapi.com/" title="Free Weather API">
          WeatherAPI.com
        </a>{" "}
        | Made by <a href="htpps://github.com/sewardsalmon6">@SeawardSalmon6</a>
        .
      </span>
    </footer>
  );
}

export default Footer;
