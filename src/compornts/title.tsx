import React from "react";

interface Props {
  colors: { red: number; green: number; blue: number }[];
}

const buttonDesign: React.CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
};

const buttonBackDesign: React.CSSProperties = {
  display: "flex",
  width: "50%",
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

const TitleButton: React.FC<Props> = ({ colors }) => {
  const Color0 = `rgb(${colors[0].red},${colors[0].green},${colors[0].blue})`;
  const Color1 = `rgb(${colors[1].red},${colors[1].green},${colors[1].blue})`;

  const dynamicButtonBackDesign: React.CSSProperties = {
    ...buttonBackDesign,
    background: Color1,
  };

  const dynamicButtondesign: React.CSSProperties = {
    ...buttonDesign,
    color: Color0,
  };

  const handlePopUp = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div style={buttonSize}>
      <div onClick={handlePopUp}>
        <div style={dynamicButtonBackDesign} onClick={reload}>
          <div style={dynamicButtondesign}>title</div>
        </div>
      </div>
    </div>
  );
};

export default TitleButton;
