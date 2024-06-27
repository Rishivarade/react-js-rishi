import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function isPrime(count) {
    if (count <= 1) {
      return false;
    }
    for (let i = 2; i < count; i++) {
      if (count % i === 0) {
        return false;
      }
    }
    return true;
  }

  function isEven(count) {
    return count % 2 === 0;
  }

  return (
    <div className="counter">
        <h2>Welcome to Counter 2.0</h2>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -1
      </button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <p><strong>Count:</strong> {count}</p>
      <div><strong>Even:</strong> {isEven(count) ? "Even" : "Odd"}</div>
      <div><strong>Prime: </strong>{isPrime(count) ? "True" : "False"}</div>
    </div>
  );
}

export default Counter;
