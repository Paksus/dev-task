import React, { useState } from 'react';

import { counterStyle } from './Counter.module.scss';

function MyCounter() {
  let [number, setNumber] = useState(0);
  const handleDecrease = () => {
    if (number >= 1) {
      setNumber((number -= 1));
    }
  };
  const handleIncrease = () => {
    setNumber((number += 1));
  };
  return (
    <>
      <div className={`${counterStyle}`}>
        <p>{number}</p>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleIncrease}>Increase</button>
      </div>
    </>
  );
}

export const Counter = () => MyCounter();
