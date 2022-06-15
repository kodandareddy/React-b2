import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  const handleClick = () => {
    if (count + 1 <= 10) {
      setCount(count + 1);
    } else {
      setError(true);
    }
  };
  const handleClick1 = () => {
    setError(false);
    if (count - 1 >= 0) setCount(count - 1);
  };
  return (
    <>
      {count}
      <button onClick={handleClick}>Add</button>
      <button onClick={handleClick1}>Sub</button>
      <button onClick={() => setCount(0)}>Reset</button>
      {error && <h1>Count Should be less than 10 </h1>}
    </>
  );
};

export default Counter;
