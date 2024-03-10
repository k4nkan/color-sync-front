import React, { useState } from "react";

const buttonDesign = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "cursive",
  fontSize: "20px",
  overflow: "hiden",
};

const buttonSize = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
};

const boxStyle: React.CSSProperties = {
  display: "flex",
  height:"60%",
  width:"200px",
  background: "rgb(255, 255, 255)",
  border: "solid 2px rgb(200,200,200)",
  cursor: "pointer",
  borderRadius: "5px",
  overflow:"hidden",
  textAlign: "center",
  fontFamily: "cursive",
  fontSize: "15px",
};


export default function ThemeButton() {
  const [state, setState] = useState("random");

  return (
    <div style={buttonSize}>
      <div style={buttonDesign}> 
        <div>theme</div>
        <div style={{marginLeft:"10px"}}></div>
        <input
          value={state}
          type="text"
          onChange={(e) => setState(e.target.value)}
          style={boxStyle}
        />
        </div>
      </div>
  );
}
