import { useState, useEffect } from "react";
import MealList from "../components/MealList";
import "../App.css";

const SearchByComponent = () => {
  const [input, setInput] = useState("");
  const [mealsList, setMealsList] = useState([]);
  const [error, setError] = useState("");

  const getRecipe = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`
    );
    let data = await response.json();
    if (data && data.meals) {
      setMealsList(data);
      setError("");
    } else {
      setMealsList([]);
      setError("Component not found");
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipe();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="mainDivComp">
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <h3>{error}</h3>
      <div className="searchResult">
        <h1>{input}</h1>
        <MealList meals={mealsList.meals} />
      </div>
    </div>
  );
};

export { SearchByComponent };
