import styles from "./Cardfood.module.scss";
import food_image_exemple from "../../assets/food_exemple.jpg";
import { AiOutlineHeart } from "react-icons/ai";

interface CardFoodProps {
  foodName: string;
  foodTime: string;
  foodImage: string;
}

export default function CardFoodComponent(props: CardFoodProps) {
  return (
    <div className={styles.container}>
      <div className={styles.card_container}>
        <div className={styles.card_image_container}>
          <img
            className={styles.card_image}
            src={props.foodImage ? props.foodImage : food_image_exemple}
            alt={props.foodName}
          />
        </div>
        <div className={styles.card_content}>
          <div className={styles.card_title_container}>
            <p
              className={styles.card_title}
            >{props.foodName}</p>
          </div>

          <div className={styles.row_container}>
            <div className={styles.card_time}>
              <h3>{props.foodTime} min</h3>
            </div>

            <div className={styles.favorite_button_container}>
              <button className={styles.favorite_button}>
                <AiOutlineHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
