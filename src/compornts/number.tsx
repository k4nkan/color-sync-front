import React, { useState } from "react";
import styled from "styled-components";

const StyledRangeInput = styled.input`
  width: 200px;
  height: 4px;
  background-color: white;
  border-radius: 10px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: black;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const buttonDesign: React.CSSProperties = {
  display: "flex",
  height: "90%",
  width: "100%",
  transform: "translate(0%, 5%)",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "cursive",
  fontSize: "20px",
  overflow: "hidden",
  background: "rgb(217, 217, 217)",
  borderRadius: "15px",
};

export default function NumberButton() {
  const [state, setState] = useState("5");

  return (
    <div style={buttonDesign}>
      <div>3</div>
      <div style={{ marginLeft: "10px" }}></div>
      <StyledRangeInput
        value={state}
        type="range"
        min="3"
        max="7"
        step="1"
        onChange={(e) => setState(e.target.value)}
      />
      <div style={{ marginLeft: "10px" }}></div>
      <div>7</div>
    </div>
  );
}
