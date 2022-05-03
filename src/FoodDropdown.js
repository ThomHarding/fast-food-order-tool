import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  return (
    <div>
      Select a food
      <select onChange={e => setFoodId(e.target.value)}>
        <option value="1">Ham</option>
        <option value="2">Spam</option>
        <option value="3">A Live Bear</option>
      </select>
    </div>
  );
}
