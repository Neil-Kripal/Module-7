import React, { useState, useEffect } from 'react';

function CounterComponent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    } else {
      alert(`Counter One: ${counterOne}`);
    }
  }, [counterOne, initialRender]);

  return (
    <div>
      <div>
        <button onClick={() => setCounterOne(counterOne + 1)}>
          Increment Counter One
        </button>
        <span>Counter One: {counterOne}</span>
      </div>
      <div>
        <button onClick={() => setCounterTwo(counterTwo + 1)}>
          Increment Counter Two
        </button>
        <span>Counter Two: {counterTwo}</span>
      </div>
    </div>
  );
}

export default CounterComponent;
