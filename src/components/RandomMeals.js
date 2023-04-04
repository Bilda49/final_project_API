import { useState, useEffect } from "react";
import { Route } from "react-router-dom";

const RandomMeals = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [recipeRand, setRecipeRand] = useState("");
  const [categoryRand, setCategoryRand] = useState("");
  const [expanded, setExpanded] = useState(false);

  const randDish = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    let data = await response.json();
    setName(data.meals[0].strMeal);
    setImage(data.meals[0].strMealThumb);
    setRecipeRand(data.meals[0].strInstructions);
    setCategoryRand(data.meals[0].strCategory);
  };

  const toggleExpanded = (recipeRand) => {
    setExpanded(!expanded);
  };

  // Call randDish function when component mounts
  useEffect(() => {
    randDish();
  }, []);

  return (
    <div className="randMealDiv">
      <h2>{name}</h2>
      <p>Category : {categoryRand}</p>
      <img className="imgRand" src={image} alt={name} />
      {expanded ? (
        <div className="randMealDiv">{recipeRand}</div>
      ) : (
        <div className="randMealDiv" onClick={toggleExpanded}>
          {recipeRand.substr(0, 30)} <b>More...</b>
        </div>
      )}
    </div>
  );
};

export default RandomMeals;
