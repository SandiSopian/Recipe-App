import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipe] = useState([]);

  const YOUR_APP_ID = process.env.REACT_APP_YOUR_APP_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_YOUR_APP_KEY;

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;

  async function getRecipes() {
    let result = await Axios.get(url);
    setRecipe(result.data);
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
      </form>

      <div></div>
    </div>
  );
}

export default App;
