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
  const [state, setState] = useState("50");

  return (
    <div style={buttonDesign}>
      <div>usui</div>
      <div style={{marginLeft:"5px"}}></div>
      <input
        value={state}
        type="range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => setState(e.target.value)}
        style={{width:"200px",}}
      />
      <div style={{marginLeft:"10px"}}></div>
      <div>koi</div>
    </div>
  );
}
