import React, { useState } from 'react';


function Ingredients(props) {
    const ingredientList = props.ingredients.map((ingredient, index) =>{
        return (
            <button className="IngredientButtons" key={index} style={{backgroundColor: ingredient.color}} onClick={() => props.handleIngredient(ingredient)}>{ingredient.name}</button>
        )
    })
  return (
    <div>
        <h1>Ingredients</h1>
        

        {ingredientList}
        
    </div>
  );
}

export default Ingredients;