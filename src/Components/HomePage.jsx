import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Homepage</h1>
      <button onClick={() => navigate("/RecipeCards")}>start</button>
    </>
  );
}
