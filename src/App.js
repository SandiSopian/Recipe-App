import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);
  const [healthLabels, setHealthLabels] = useState("vegan");

  const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_YOUR_APP_KEY;

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    let result = await Axios.get(url);
    setRecipe(result.data.hits);
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Get Recipes Plaza 🥗</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input type="text" className="app__input" placeholder="enter ingredients" value={query} onChange={(e) => setQuery(e.target.value)} />
        <input className="app__submit" type="submit" value="Search" />

        <select className="app__healthLabels">
          <option onClick={() => setHealthLabels("vegan")}>Vegan</option>
          <option onClick={() => setHealthLabels("vegetarian")}>Vegetarian</option>
          <option onClick={() => setHealthLabels("paleo")}>Paleo</option>
          <option onClick={() => setHealthLabels("dairy-free")}>Dairy-free</option>
          <option onClick={() => setHealthLabels("gluten-free")}>Gluten-free</option>
          <option onClick={() => setHealthLabels("wheat-free")}>Wheat-free</option>
          <option onClick={() => setHealthLabels("low-sugar")}>Low-sugar</option>
          <option onClick={() => setHealthLabels("egg-free")}>Egg-free</option>
          <option onClick={() => setHealthLabels("peanut-free")}>Peanut-free</option>
          <option onClick={() => setHealthLabels("tree-nut-free")}>Tree-nut-free</option>
          <option onClick={() => setHealthLabels("soy-free")}>Soy-free</option>
          <option onClick={() => setHealthLabels("fish-free")}>Fish-free</option>
          <option onClick={() => setHealthLabels("shellfish-free")}>Shellfish-free</option>
        </select>
      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
