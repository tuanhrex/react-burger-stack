import React, { useState } from 'react';


function Ingredients(props) {
    const ingredientList = props.ingredients.map((ingredient, index) =>{
        return (
            <button key={index} style={{backgroundColor: ingredient.color}} onClick={() => props.handleIngredient(ingredient)}>{ingredient.type}</button>
        )
    })
  return (
    <div>
        <h1>Ingredients</h1>
        <ul>

        {ingredientList}
        </ul>
    </div>
  );
}

export default Ingredients;