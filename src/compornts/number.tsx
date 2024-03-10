import React, { useState } from "react";

const buttonDesign = {
  display: "flex",
  height:"100%",
  width:"100%",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: "cursive",
  fontSize: "20px",
  overflow: "hiden",
};

export default function NumberButton() {
  const [state, setState] = useState("5");

  return (
    <div style={buttonDesign}>
      <div>3</div>
      <div style={{marginLeft:"10px"}}></div>
      <input
        value={state}
        type="range"
        min="3"
        max="7"
        step="1"
        onChange={(e) => setState(e.target.value)}
        style={{width:"200px",}}
      />
      <div style={{marginLeft:"10px"}}></div>
      <div>7</div>
    </div>
  );
}
