import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="text-center mx-auto">
      <h2 className="text-4xl font-semibold">{count}</h2>
      <div className="mt-2">
        <Button onClick={() => setCount((c) => c - 1)}>-</Button>
        <Button onClick={() => setCount((c) => c + 1)}>+</Button>
      </div>
    </div>
  );
};

export default Counter;
