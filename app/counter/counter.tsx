"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{count}</p>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-blue-700 p-2 rounded-lg cursor-pointer"
      >
        Increment
      </button>
    </div>
  );
}
