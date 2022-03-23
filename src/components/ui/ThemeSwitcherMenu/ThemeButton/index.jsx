import classes from "./index.module.css";

function ThemeButton(props) {
  return (
    <li className={classes.ThemeButton__container} role="none">
      <button
        className={classes.ThemeButton_button}
        onClick={props.showMenu ? props.showMenu : props.onSelection}
        type="button"
      >
        <span>
          <i className={props.faIcon}></i>
          {props.text}
        </span>
      </button>
    </li>
  );
}

export default ThemeButton;
