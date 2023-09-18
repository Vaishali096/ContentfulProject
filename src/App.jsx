import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { createClient } from "contentful";
import RecipeCards from "./Components/RecipeCards";
import RecipeInstructions from "./Components/RecipeInstructions";
import HomePage from "./Components/Homepage";
import { Link } from "react-router-dom";

function App() {
  const [recipes, setRecipes] = useState([]);

  const client = createClient({
    space: "z6djbtsjwacx",
    accessToken: "btwYTx3RnBmekwMDx69C54Rk2IiPLtq9qzG8e3e7p1s",
  });

  async function fetchRecipes() {
    const entryItems = await client.getEntries();
    console.log("fetch fumction", entryItems);
    setRecipes(entryItems.items);
  }
  useEffect(() => {
    fetchRecipes();
  }, []);

  console.log("app up", recipes);
  return (
    <>


<Routes>
 <Route path="/" element={<HomePage recipes={recipes}/>} />
  <Route path="recipecards" element={<RecipeCards recipes={recipes}/>} />
  <Route path="recipecards/:id" element={<RecipeInstructions recipes={recipes}/>} />
</Routes>

    </>
  );
}
export default App;
