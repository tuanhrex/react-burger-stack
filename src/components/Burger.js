import React, { useState } from 'react';


function Burger(props) {
    const createdBurger = props.burger.map((ingredient, index) => {
        return (
            <button className="IngredientButtons" key={index} style={{backgroundColor: ingredient.color}}>{ingredient.name}</button>
        )
    })
    console.log(props.burger);
  return (
    <div>
        <h1>Burger Pane</h1>
        {createdBurger}
    </div>
  );
}

export default Burger;