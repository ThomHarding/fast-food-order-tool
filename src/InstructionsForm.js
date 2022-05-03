import { useState } from 'react';
import React from 'react';

export default function InstructionsForm({ instructions, setInstructions }) {
  const [instructionInForm, setInstructionInForm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setInstructions([...instructions, instructionInForm]);
  }

  function handleInstructionChange(e) {
    setInstructionInForm(e.target.value);
  }

  return <form onSubmit={handleSubmit}>
    <label>
      Add an instruction
      <input required value={instructionInForm} onChange={handleInstructionChange} />
    </label>
    <button>Add instruction</button>
  </form>;
}
