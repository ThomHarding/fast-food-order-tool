import React from 'react';
import Instruction from './Instruction';

export default function InstructionsList({ instructions }) {
  return (
    <li>
      {
        instructions.map(instruction => <Instruction key={instruction} instruction={instruction} />)
      }
    </li>
  );
}
