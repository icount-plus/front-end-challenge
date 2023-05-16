import SearchbarComponent from "../../components/SearchbarComponent";
import RandomRecipesComponent from "../../components/RandomRecipesComponent";
import VeggiesRecipesComponent from "../../components/VeggiesRecipesComponent";
import CardFoodComponent from "../../components/CardFoodComponent";
import { useState } from "react";
import { api, token } from "../../services/api";
import RecipeType from "../../types/recipeType";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const [showRandomRecipes, setShowRandomRecipes] = useState(true);
  const [showVeggiesRecipes, setShowVeggiesRecipes] = useState(true);

  const handleSearch = (searchTerm: string) => {
    try {
      api
        .get(`recipes/complexSearch?apiKey=${token}&query=${searchTerm}`)
        .then((response) => {
          const recipes = response.data.results;
          setSearchResults(recipes);
          setShowRandomRecipes(false);
          setShowVeggiesRecipes(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const performSearch = (searchTerm: string) => {
    handleSearch(searchTerm);
  };

  return (
    <div>
      <SearchbarComponent onSearch={performSearch} />
      {showRandomRecipes && <RandomRecipesComponent />}
      {showVeggiesRecipes && <VeggiesRecipesComponent />}

      {searchResults?.map((recipe: RecipeType) => (
        <Link
          to={`/recipe/${recipe.id}`}
          state={{
            recipe,
          }}
          key={recipe.id}
        >
          <CardFoodComponent
            key={recipe.id}
            foodName={recipe.title}
            foodTime={recipe.readyInMinutes}
            foodImage={recipe.image}
          />
        </Link>
      ))}
    </div>
  );
}
