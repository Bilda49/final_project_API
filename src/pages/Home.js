import RandomMeals from "../components/RandomMeals";

import { useState, useEffect } from "react";
import { SearchByComponent } from "../pages/SearchByComponent";
import { Link, Routes, Route } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState("");
  const [nameApp, setNameApp] = useState("");
  const [imageApp, setImageApp] = useState("");
  const [category, setCategory] = useState("");
  const [recipe, setRecipe] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handler = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    let data = await response.json();
    if (data.meals) {
      setCategory(data.meals[0].strCategory);
      setRecipe(data.meals[0].strInstructions);
      setImageApp(data.meals[0].strMealThumb);
      setNameApp(data.meals[0].strMeal);
    } else {
      setNameApp("Meal not found");
      setCategory("");
      setRecipe("");
      setImageApp("");
    }
  };

  useEffect(() => {
    handler();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handler();
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const toggleExpanded = (recipeRand) => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="searchBar">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="homeContent">
        <div className="searchResult">
          <h2>Meal Name: {nameApp}</h2>
          <p>Category : {category}</p>
          <img src={imageApp}></img>
          {expanded ? (
            <div className="randMealDiv">{recipe}</div>
          ) : (
            <div className="randMealDiv" onClick={toggleExpanded}>
              {recipe.substr(0, 30)} <b>More...</b>
            </div>
          )}
        </div>
        <h1 className="suggestedMeals">Suggested Meals</h1>
        <RandomMeals />
        <RandomMeals />
        <RandomMeals />
        <RandomMeals />
      </div>
    </>
  );
};

export default Home;
