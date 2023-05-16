import { useLocation } from "react-router-dom";
import styles from "./Details.module.scss";
import RecipeType from "../../types/recipeType";
import { Rating } from "react-simple-star-rating";
import { BiShareAlt, BiPrinter } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function RecipeDetailPage() {
  const location = useLocation();
  const recipe = location.state.recipe as RecipeType;

  const handleRating = (rate: number) => {
    console.log(rate);
  };

  const renderInstructions = (): { __html: string } => {
    if (recipe.instructions) {
      return { __html: recipe.instructions };
    } else {
      return { __html: "Não há instruções" };
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.back_button_container}>
        <Link to={"/"} className={styles.back_button}>
          <BiArrowBack />
          Voltar
        </Link>
      </div>
      <h1 className={styles.title}>{recipe.title}</h1>
      <div className={styles.container}>
        <div className={styles.row_container}>
          <Rating
            onClick={handleRating}
            size={24}
            transition
            fillColor="orange"
            emptyColor="gray"
            className={styles.rating}

          />
          <button className={styles.favorite_button}>
            <AiOutlineHeart />
            Favoritar Receita
          </button>

          <button className={styles.share_button}>
            <BiShareAlt />
            Compartilhar
          </button>

          <button className={styles.print_button}>
            <BiPrinter />
            Imprimir
          </button>
        </div>
        <div className={styles.image_container}>
          <img className={styles.image} src={recipe.image} alt={recipe.title} />
        </div>

        <div className={styles.ingredients_container}>
          <h2 className={styles.subtitle}>Ingredientes</h2>

          <ul className={styles.ingredients_list}>
            {recipe.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className={styles.ingredient_item}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.instructions_container}>
          <h2 className={styles.subtitle}>Modo de preparo</h2>
          <div>
            <div className={styles.time_container}>
              <h3 className={styles.time}>{recipe.readyInMinutes} min</h3>
            </div>
            <div className={styles.servings_container}>
              <h3 className={styles.servings}>{recipe.servings} porções</h3>
            </div>
          </div>

          <div className={styles.instructions}>
            <p dangerouslySetInnerHTML={renderInstructions()}></p>
          </div>
        </div>
      </div>
    </div>
  );
}
