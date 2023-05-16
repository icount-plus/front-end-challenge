import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { api, token } from "../../services/api";
import styles from "./RandomRecipes.module.scss";
import CardFoodComponent from "../CardFoodComponent";
import RecipeType from "../../types/recipeType";
import settings from "../../helpers/sliderSettings";

export default function RandomRecipesComponent() {
  const [randomRecipes, setRandomRecipes] = useState<RecipeType[]>([]);

  async function getRandomRecipes() {
    try {
      const storedRecipes = localStorage.getItem("randomRecipes");
      if (storedRecipes) {
        const recipes = JSON.parse(storedRecipes);
        setRandomRecipes(recipes);
      } else {
        const response = await api.get(
          `recipes/random?apiKey=${token}&number=10`
        );
        const recipes = response.data.recipes;
        localStorage.setItem("randomRecipes", JSON.stringify(recipes));
        setRandomRecipes(recipes);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRandomRecipes();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Mais populares</h2>
      <Slider {...settings}>
        {randomRecipes?.map((recipe) => (
          <Link
            to={`/recipe/${recipe.id}`}
            state={{
              recipe,
            }}
            key={recipe.id}
            className={styles.link}
          >
            <CardFoodComponent
              foodName={recipe.title}
              foodTime={recipe.readyInMinutes.toString()}
              foodImage={recipe.image}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
