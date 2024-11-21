import React, { useState } from "react";
import popUp from "../compornts/popUp";
import styled from "styled-components";

const pageBack = {
  width: "100%",
  height: "100vh",
};

const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
};

const squareStyle: React.CSSProperties = {
  width: "350px",
  height: "25%",
  transform: "translate(0%, -12.5%)",
};

const contentBack = {
  height: "5%",
};

const buttonDesign: React.CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  borderRadius: "15px",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const titleButtonBackDesign: React.CSSProperties = {
  display: "flex",
  width: "50%",
  height: "100%",
  transform: "translate(0%, 0%)",
  minWidth: "150px",
  cursor: "pointer",
  opacity: "1",
  borderRadius: "15px",
};

const makeButtonBackDesign: React.CSSProperties = {
  display: "flex",
  width: "50%",
  height: "100%",
  transform: "translate(100%, 0%)",
  minWidth: "150px",
  cursor: "pointer",
  opacity: "1",
  borderRadius: "15px",
};

const buttonBackDesign: React.CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  transform: "translate(0%, 0%)",
  minWidth: "150px",
  cursor: "pointer",
  opacity: "1",
  borderRadius: "15px",
};

const buttonSize: React.CSSProperties = {
  display: "flex",
  height: "90%",
  width: "100%",
  justifyContent: "left",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  height: "60%",
  width: "150%",
  cursor: "pointer",
  overflow: "hidden",
  textAlign: "center",
  fontSize: "17px",
  transform: "translate(-5%, 15%)",
};

const StyledRangeInput = styled.input<{ Color0: string; Color2: string }>`
  width: 100%;
  height: 4px;
  transform: translate(0%, 400%);
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

const StyleText = styled.input<{ Color0: string }>`
  color: ${({ Color0 }) => Color0};
`;

const reload = () => {
  window.location.reload();
};

const TestPage: React.FC = () => {
  const colors = [
    { red: 0, green: 0, blue: 0 },
    { red: 217, green: 217, blue: 217 },
    { red: 255, green: 255, blue: 255 },
  ];

  const Color0 = `rgb(${colors[0].red},${colors[0].green},${colors[0].blue})`;
  const Color1 = `rgb(${colors[1].red},${colors[1].green},${colors[1].blue})`;
  const Color2 = `rgb(${colors[2].red},${colors[2].green},${colors[2].blue})`;

  const [state, setState] = useState("random");
  const [densityState, setDensityState] = useState("50");
  const [numberState, setNumberState] = useState("5");

  const handlePopUpColor = () => {
    popUp({ colors });
  };

  const handlePopUp = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  const dynamicContainerStyle: React.CSSProperties = {
    ...containerStyle,
    background: Color2,
  };

  const dynamicButtonBackDesign: React.CSSProperties = {
    ...buttonBackDesign,
    background: Color1,
  };

  const dynamicTitleButtonBackDesign: React.CSSProperties = {
    ...titleButtonBackDesign,
    background: Color1,
  };

  const dynamicMakeButtonBackDesign: React.CSSProperties = {
    ...makeButtonBackDesign,
    background: Color1,
  };

  const dynamicButtonDesign: React.CSSProperties = {
    ...buttonDesign,
    color: Color0,
  };

  const dynamicFormStyle: React.CSSProperties = {
    ...formStyle,
    background: `${Color1}`,
    border: `solid 2px ${Color2}`,
  };

  return (
    <div style={dynamicContainerStyle} onClick={handlePopUpColor}>
      <div style={squareStyle}>
        <div style={pageBack}>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicTitleButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  title
                </div>
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  theme
                </div>
                <StyleText
                  value={state}
                  type="text"
                  onChange={(e) => setState(e.target.value)}
                  style={dynamicFormStyle}
                  Color0={Color0}
                />
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  3
                </div>
                <StyledRangeInput
                  value={numberState}
                  type="range"
                  min="3"
                  max="7"
                  step="1"
                  onChange={(e) => setNumberState(e.target.value)}
                  style={{ width: "100%" }}
                  Color0={Color0}
                  Color2={Color2}
                />
                <div style={dynamicButtonDesign} onClick={reload}>
                  7
                </div>
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  usui
                </div>
                <StyledRangeInput
                  value={densityState}
                  type="range"
                  min="0"
                  max="100"
                  step="10"
                  onChange={(e) => setDensityState(e.target.value)}
                  style={{ width: "100%" }}
                  Color0={Color0}
                  Color2={Color2}
                />
                <div style={dynamicButtonDesign} onClick={reload}>
                  koi
                </div>
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicMakeButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  make
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
