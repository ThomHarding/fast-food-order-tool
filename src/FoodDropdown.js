import React from 'react';

export default function FoodDropdown({ setFood }) {
  return (
    <div>
      Select a food
      <select onChange={e => setFood(e.target.value)}>
        <option value="1">Water</option>
        <option value="2">Mystery Juice</option>
        <option value="3">Water 2</option>
      </select>
    </div>
  );
}
