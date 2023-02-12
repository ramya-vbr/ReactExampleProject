import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handledecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Increase and decrease count</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
      <h1>{count}</h1>
    </div>
  );
}
export default Counter;
