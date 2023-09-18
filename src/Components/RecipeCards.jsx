import { Link } from "react-router-dom";
import RecipeInstructions from "./RecipeInstructions";

export default function RecipeCards({ recipes }) {
  console.log("recipe cards up", recipes);

  return (
    <div className="recipeside">
      {recipes &&
        recipes.map((recipe) => (
          <div className="recipecard" key={recipe.sys.id}>
            <Link
              className="link-s"
              to={`/recipeinstructions/${recipe.sys.id}`}
            >
              <h1 className="title-s">{recipe.fields.recipeName}</h1>
            </Link>
            <img
              className="img-s"
              src={recipe.fields.picture.fields.file.url}
            />
          </div>
        ))}
    </div>
  );
}
