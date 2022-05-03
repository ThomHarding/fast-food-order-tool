import React from 'react';

export default function SideDropdown({ setSide }) {
  return (
    <div>
      Select a side
      <select onChange={e => setSide(e.target.value)}>
        <option value="1">Water</option>
        <option value="2">Mystery Juice</option>
        <option value="3">Water 2</option>
      </select>
    </div>
  );
}
