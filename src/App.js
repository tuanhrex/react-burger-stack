import React, { useState } from 'react';
import './App.css';
import Ingredients from './components/Ingredients'
import Burger from './components/Burger'

function App() {
  const [ingredients, setIngredients] = useState([
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar', color: 'gold' },
    { name: 'Swiss', color: 'white' },
    { name: 'Jalapenos', color: 'green' },
  ]);

  const [burger, setBurger] = useState([]);

  const clear = () => {
    setBurger([]);
  };

  const handleIngredient = (ingredient) => {
    setBurger([ingredient, ...burger]);
    
  };

  return (
    <div className="App">
     <div className="Ingredients">
        <Ingredients ingredients={ingredients} handleIngredient={handleIngredient}/>
     </div>
     <div className="Burger">
        <Burger burger={burger}/>
        <button onClick={() => clear()}>Clear</button>
     </div>
    </div>
  );
}

export default App;
