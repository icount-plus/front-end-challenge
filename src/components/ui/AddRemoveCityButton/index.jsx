import classes from "./index.module.css";

function AddRemoveCityButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={
        !props.alert
          ? classes.AddRemoveCityButton__container
          : classes.AddRemoveCityButton__alert
      }
      type="button"
    >
      <i className={props.icon}></i>
    </button>
  );
}

export default AddRemoveCityButton;
