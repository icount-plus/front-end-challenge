import DailyCard from "../DailyCard";
import classes from "./index.module.css";

function DailyCardList(props) {
  return (
    <ul className={classes.DailyCardList__container}>
      {props.forecast.map((day) => {
        return <DailyCard key={day.date} forecast={day} />;
      })}
    </ul>
  );
}

export default DailyCardList;
