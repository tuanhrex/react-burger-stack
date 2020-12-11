import React, { useState } from 'react';
import './App.css';
import Ingredients from './components/Ingredients'
import Burger from './components/Burger'

function App() {
  const [ingredients, setIngredients] = useState([
    { type: 'Kaiser Bun', color: 'saddlebrown' },
    { type: 'Sesame Bun', color: 'sandybrown' },
    { type: 'Gluten Free Bun', color: 'peru' },
    { type: 'Lettuce Wrap', color: 'olivedrab' },
    { type: 'Beef Patty', color: '#3F250B' },
    { type: 'Soy Patty', color: '#3F250B' },
    { type: 'Black Bean Patty', color: '#3F250B' },
    { type: 'Chicken Patty', color: 'burlywood' },
    { type: 'Lettuce', color: 'lawngreen' },
    { type: 'Tomato', color: 'tomato' },
    { type: 'Bacon', color: 'maroon' },
    { type: 'Onion', color: 'lightyellow' },
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
