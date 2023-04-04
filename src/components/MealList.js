import React from "react";
import { useState, useEffect } from "react";
import { InfoByComponent } from "./InfoByComponent";

const MealList = ({ meals }) => {
  return (
    <ul>
      {meals &&
        meals.map((meal) => (
          <li className="infoCompObject">
            <h2 className="mealOfComponent">{meal.strMeal}</h2>
            <InfoByComponent dish={meal.strMeal} />
          </li>
        ))}
    </ul>
  );
};

export default MealList;
