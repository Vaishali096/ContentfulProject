import { useParams, useNavigate } from "react-router-dom";
export default function RecipeInstructions({ recipes }) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(recipes);
  const oneRecipe = recipes && recipes.find((el) => el.sys.id === id);
  console.log(oneRecipe);
  return (
    <>
      <div className="singleMember">
        <h1>Name</h1>
        <h1>{oneRecipe && oneRecipe.fields.recipeName}</h1>
        <img
          src={`/${oneRecipe && oneRecipe.fields.picture.fields.file.url}`}
        />
        <button onClick={() => navigate("/RecipeCards")}>
          Back to Recipes
        </button>
      </div>
    </>
  );
}
