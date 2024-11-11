import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  colors: { red: number; green: number; blue: number }[];
}

const buttonDesign: React.CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  transform: "translate(0%, 0%)",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  overflow: "hiden",
  borderRadius: "15px",
};

const buttonSize: React.CSSProperties = {
  display: "flex",
  height: "90%",
  width: "100%",
  justifyContent: "center",
};

const boxStyle: React.CSSProperties = {
  display: "flex",
  height: "60%",
  width: "200px",
  cursor: "pointer",
  overflow: "hidden",
  textAlign: "center",
  fontSize: "17px",
};

const StyleText = styled.input<{ Color0: string }>`
  color: ${({ Color0 }) => Color0};
`;

const ThemeButton: React.FC<Props> = ({ colors }) => {
  const Color0 = `rgb(${colors[0].red},${colors[0].green},${colors[0].blue})`;
  const Color1 = `rgb(${colors[1].red},${colors[1].green},${colors[1].blue})`;
  const Color2 = `rgb(${colors[2].red},${colors[2].green},${colors[2].blue})`;

  const dynamicButtonDesign: React.CSSProperties = {
    ...buttonDesign,
    background: `${Color1}`,
    color: `${Color0}`,
  };

  const dynamicBoxStyle: React.CSSProperties = {
    ...boxStyle,
    background: `${Color1}`,
    border: `solid 2px ${Color2}`,
  };

  const [state, setState] = useState("random");

  const handlePopUp = (event: React.MouseEvent) => {
    event.stopPropagation();
  }

  return (
    <div style={buttonSize} onClick={handlePopUp}>
      <div style={dynamicButtonDesign}>
        <div>theme</div>
        <div style={{ marginLeft: "10px" }}></div>
        <StyleText
          value={state}
          type="text"
          onChange={(e) => setState(e.target.value)}
          style={dynamicBoxStyle}
          Color0={Color0}
        />
      </div>
    </div>
  );
};

export default ThemeButton;
