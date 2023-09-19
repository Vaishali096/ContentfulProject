import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function RecipeInstructions({ recipes }) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(recipes);
  const oneRecipe = recipes && recipes.find((el) => el.sys.id === id);
  console.log(oneRecipe);
  return (
    <>
      <div className="singleMember">
      <Navbar />
        <h3>{oneRecipe && oneRecipe.fields.recipeName}</h3>
        <div className= "singlerecipe">
        <img
          src={`/${oneRecipe && oneRecipe.fields.picture.fields.file.url}`}
        />
        <p> Ingredients:
          <br />
          <br />
          {oneRecipe && oneRecipe.fields.ingredients}</p>
          </div>
         <div className="instruct">
        <p>Instructions:</p>
        <p>{oneRecipe && oneRecipe.fields.instruction}</p>
        <button onClick={() => navigate("/RecipeCards")}>
          Back to Recipes
        </button>
        </div>
      </div>
    </>
  );
}
