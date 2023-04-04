import React from "react";
import { useState, useEffect } from "react";

const InfoByComponent = ({ dish }) => {
  const [recipeInfo, setRecipeInfo] = useState("");
  const [imgInfo, setImgInfo] = useState("");
  const [expanded, setExpanded] = useState(false);

  const getRecipe = async () => {
    let response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish}`
    );
    let data = await response.json();
    setRecipeInfo(data.meals[0].strInstructions);
    setImgInfo(data.meals[0].strMealThumb);
  };

  useEffect(() => {
    getRecipe();
  }, [dish]);

  const toggleExpanded = (recipeRand) => {
    setExpanded(!expanded);
  };

  return (
    <div className="divItem">
      <img src={imgInfo}></img>
      {expanded ? (
        <div className="divItem">{recipeInfo}</div>
      ) : (
        <div className="divItem" onClick={toggleExpanded}>
          {recipeInfo.substr(0, 30)} <b>More...</b>
        </div>
      )}
    </div>
  );
};

export { InfoByComponent };
