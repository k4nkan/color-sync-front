import React from "react";
import DensityButton from "../compornts/density";
import MakeButton from "../compornts/make";
import NumberButton from "../compornts/number";
import ThemeButton from "../compornts/theme";
import TitleButton from "../compornts/title";
import popUp from "../compornts/popUp";

const pageBack = {
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
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

const ForSmartphone: React.FC = () => {
  const colors = [
    { red: 0, green: 0, blue: 0 },
    { red: 217, green: 217, blue: 217 },
    { red: 255, green: 255, blue: 255 },
  ];

  const handlePopUp = () => {
    popUp({colors});
  };

  return (
    <div style={containerStyle} onClick={handlePopUp}>
      <div style={squareStyle}>
        <div style={pageBack}>
          <div style={contentBack}>
            <TitleButton colors={colors} />
          </div>
          <div style={contentBack}>
            <ThemeButton colors={colors} />
          </div>
          <div style={contentBack}>
            <NumberButton colors={colors} />
          </div>
          <div style={contentBack}>
            <DensityButton colors={colors} />
          </div>
          <div style={contentBack}>
            <MakeButton colors={colors} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForSmartphone;
