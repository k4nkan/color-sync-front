import React, { useState } from "react";

const buttonDesign = {
  width: "20%",
  minWidth: "300px",
  height: "30%",
  opacity: "1",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "cursive",
  fontSize: "20px",
  overflow: "hiden",
};

export default function NumberButton() {
  const [state, setState] = useState("50");

  return (
    <div style={buttonDesign}>
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
