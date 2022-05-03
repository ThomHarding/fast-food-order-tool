import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  return (
    <div>
      Select a drink
      <select onChange={e => setDrinkId(e.target.value)}>
        <option value="1">Water</option>
        <option value="2">Mystery Juice</option>
        <option value="3">Water 2</option>
      </select>
    </div>
  );
}
