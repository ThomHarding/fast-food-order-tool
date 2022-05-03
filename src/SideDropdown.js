import React from 'react';

export default function SideDropdown({ setSideId }) {
  return (
    <div>
      Select a side
      <select onChange={e => setSideId(e.target.value)}>
        <option value="1">Beans</option>
        <option value="2">Egg</option>
        <option value="3">The Cube</option>
      </select>
    </div>
  );
}
