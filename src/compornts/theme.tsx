import React, { useState } from "react";

const buttonDesign: React.CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "cursive",
  fontSize: "20px",
  overflow: "hiden",
  background: "rgb(217, 217, 217)",
  borderRadius: "15px",
};

const buttonSize: React.CSSProperties = {
  display: "flex",
  height: "90%",
  width: "100%",
  transform: "translate(0%, 5%)",
  justifyContent: "center",
};

const boxStyle: React.CSSProperties = {
  display: "flex",
  height:"60%",
  width:"200px",
  background: "rgb(217, 217, 217)",
  border: "solid 2px rgb(255,255,255)",
  cursor: "pointer",
  overflow:"hidden",
  textAlign: "center",
  fontFamily: "cursive",
  fontSize: "17px",
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
