import { useState, React } from 'react';
import './App.css';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('three bears in a trenchcoat');
  const [instructions, setInstructions] = useState(['no bread', 'salt on top']);
  return (
    <div className="App">

    </div>
  );
}

export default App;
