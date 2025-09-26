import { useState } from "react";

function ShoppingList() {
  const meals = [
    { dish: "Hard-Boiled Egg", ingredients: ["Eggs"] },
    { dish: "Oatmeal", ingredients: ["Instant Oatmeal", "Milk"] },
  ];

  return (
    <ul>
      {meals.map((meal) => (
        <li key={meal.dish}>
          <strong>{meal.dish}</strong>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;