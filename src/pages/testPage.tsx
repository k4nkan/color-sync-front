import React from "react";
import popUp from "../compornts/popUp";

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
  background: "rgb(255,255,255)",
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

  const handlePopUpColor = () => {
    popUp({ colors });
  };

  const handlePopUp = (event: React.MouseEvent) => {
    event.stopPropagation();
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

  return (
    <div style={containerStyle} onClick={handlePopUpColor}>
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
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  number
                </div>
              </div>
            </div>
          </div>
          <div style={contentBack}>
            <div style={buttonSize}>
              <div style={dynamicButtonBackDesign} onClick={handlePopUp}>
                <div style={dynamicButtonDesign} onClick={reload}>
                  dencity
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
