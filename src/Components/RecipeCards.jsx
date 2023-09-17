import { Link } from "react-router-dom";
import RecipeInstructions from "./RecipeInstructions";

export default function RecipeCards({ recipes }) {
  console.log("recipe cards up", recipes);

  return (
    <>
      {recipes &&
        recipes.map((recipe) => (
          <div className="recipecard" key={recipe.sys.id}>
            <Link to={`/recipeinstructions/${recipe.sys.id}`}>
              <h1>name:{recipe.fields.recipeName}</h1>
            </Link>
            <img src={recipe.fields.picture.fields.file.url} />
          </div>
        ))}
    return(
        <>
        {recipes && recipes.map(recipe =>(
            <div className="recipecard" key={recipe.sys.id}>
                <Link to={`${recipe.sys.id}`}>
    <h1>{recipe.fields.recipeName}</h1>
    </Link>
    <img src= {recipe.fields.picture.fields.file.url}/>
  </div>
))}
    </>
  );
}
