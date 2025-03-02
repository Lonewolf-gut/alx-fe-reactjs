import { useState } from "react";
r
const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Counter</h2>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
