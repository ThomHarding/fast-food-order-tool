import { useState, React } from 'react';
import FoodDropdown from './FoodDropdown';
import DrinkDropdown from './DrinkDropdown';
import SideDropdown from './SideDropdown';
import './App.css';

function App() {
  const [foodId, setFoodId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [orderName, setOrderName] = useState('three bears in a trenchcoat');
  const [instructions, setInstructions] = useState(['no bread', 'salt on top']);
  return (
    <div className="App">
      <div className='order'>
        <p>{orderName}`&apos;`s Order</p>
        <OrderNameInput setOrderName={setOrderName} />
        <OrderImages foodId={foodId} drinkId={drinkId} sideId={sideId} />
        <InstructionsList instructions={instructions} />
      </div>
      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId} />
        <DrinkDropdown setDrinkId={setDrinkId} />
        <SideDropdown setSideId={setSideId}/>
        <OrderNameInput setOrderName={setOrderName} />
        <InstructionsForm instructions={instructions} setInstructions={setInstructions} />
      </div>
    </div>
  );
}

export default App;
