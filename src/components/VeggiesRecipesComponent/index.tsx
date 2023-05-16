import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { api, token } from "../../services/api";
import styles from "./VeggiesRecipes.module.scss";
import CardFoodComponent from "../CardFoodComponent";
import RecipeType from "../../types/recipeType";
import settings from "../../helpers/sliderSettings";

export default function VeggiesRecipesComponent() {
  const [veggiesRecipes, setVeggiesRecipes] = useState<RecipeType[]>([]);

  async function getVeggiesRecipes() {
    try {
      const storedRecipes = localStorage.getItem("veggiesRecipes");
      if (storedRecipes) {
        const recipes = JSON.parse(storedRecipes);
        setVeggiesRecipes(recipes);
      } else {
        const response = await api.get(
          `recipes/random?apiKey=${token}&tags=vegetarian&number=10`
        );
        const recipes = response.data.recipes;
        localStorage.setItem("veggiesRecipes", JSON.stringify(recipes));
        setVeggiesRecipes(recipes);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getVeggiesRecipes();
  }, []);


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Receitas veganas</h2>
      <Slider {...settings}>
        {veggiesRecipes?.map((recipe) => (
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
              foodTime={recipe.readyInMinutes}
              foodImage={recipe.image}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
