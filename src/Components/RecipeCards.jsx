import { Link } from "react-router-dom";
import RecipeInstructions from "./RecipeInstructions";
export default function RecipeCards({recipes}){
    console.log(recipes);

    return(
        <>
        {recipes && recipes.map(recipe =>(
            <div className="recipecard" key={recipe.sys.id}>
                <Link to={`/${recipe.sys.id}`}>
    <h1>{recipe.fields.recipeName}</h1>
    </Link>
    <img src= {recipe.fields.picture.fields.file.url}/>
  </div>
))}
    </>
    );
}