import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  colors: { red: number; green: number; blue: number }[];
}

const StyledRangeInput = styled.input<{ Color0: string; Color2: string }>`
  width: 200px;
  height: 4px;
  background-color: ${({ Color2 }) => Color2};
  border-radius: 10px;
  -webkit-appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: ${({ Color0 }) => Color0};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const buttonDesign: React.CSSProperties = {
  display: "flex",
  height: "95%",
  width: "100%",
  transform: "translate(0%, 0%)",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  overflow: "hiden",
  borderRadius: "15px",
};

const DensityButton: React.FC<Props> = ({ colors }) => {
  const Color0 = `rgb(${colors[0].red},${colors[0].green},${colors[0].blue})`;
  const Color1 = `rgb(${colors[1].red},${colors[1].green},${colors[1].blue})`;
  const Color2 = `rgb(${colors[2].red},${colors[2].green},${colors[2].blue})`;

  const dynamicButtonDesign: React.CSSProperties = {
    ...buttonDesign,
    color: Color0,
    background: `${Color1}`,
  };

  const [state, setState] = useState("50");

  return (
    <div style={dynamicButtonDesign}>
      <div>usui</div>
      <div style={{ marginLeft: "5px" }}></div>
      <StyledRangeInput
        value={state}
        type="range"
        min="0"
        max="100"
        step="10"
        onChange={(e) => setState(e.target.value)}
        style={{ width: "200px" }}
        Color0={Color0}
        Color2={Color2}
      />
      <div style={{ marginLeft: "10px" }}></div>
      <div>koi</div>
    </div>
  );
};

export default DensityButton;
