import React from "react";

interface Props {
  colors: { red: number; green: number; blue: number }[];
}

const buttonDesign: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "cursive",
  fontSize: "20px",
};

const buttonBackDesign: React.CSSProperties = {
  display: "flex",
  width: "50%",
  height: "70%",
  transform: "translate(0%, 15%)",
  minWidth: "150px",
  cursor: "pointer",
  opacity: "1",
  borderRadius: "15px",
};

const buttonSize: React.CSSProperties = {
  display: "flex",
  height: "100%",
  width: "100%",
  justifyContent: "left",
};

const reload = () => {
  window.location.reload();
};

const TitleButton: React.FC<Props> = ({ colors }) => {
  const Color1 = `rgb(${colors[0].red},${colors[0].green},${colors[0].blue})`;
  const Color2 = `rgb(${colors[1].red},${colors[1].green},${colors[1].blue})`;

  const dynamicButtonBackDesign: React.CSSProperties = {
    ...buttonBackDesign,
    background: Color2,
    border: `solid 2px ${Color2}`,
  };

  const dynamicButtondesign: React.CSSProperties = {
    ...buttonDesign,
    color: Color1,
  };

  return (
    <div style={buttonSize} onClick={reload}>
      <div style={dynamicButtonBackDesign}>
        <div style={dynamicButtondesign}>ColorSync</div>
      </div>
    </div>
  );
};

export default TitleButton;
