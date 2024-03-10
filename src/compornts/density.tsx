import React, { useState } from "react";

export default function NumberButton() {
  const [state, setState] = useState("50");

  return (
    <div>
      <div>awai</div>
      <input
        value={state}
        type="range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => setState(e.target.value)}
      />
      <div>koi</div>
    </div>
  );
}
