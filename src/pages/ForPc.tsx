import DensityButton from "../compornts/density";
import MakeButton from "../compornts/make";
import NumberButton from "../compornts/number";
import ThemeButton from "../compornts/theme";
import TitleButton from "../compornts/title";

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
  background: "rgb(250,250,250)",
};

const squareStyle: React.CSSProperties = {
  width: "350px",
  height: "25%",
  transform: "translate(0%, -12.5%)",
};

const contentBack = {
  height: "5%",
};

export default function ForPc() {
  return (
    <div style={containerStyle}>
      <div style={squareStyle}>
        <div style={pageBack}>
          <div style={contentBack}>
            <TitleButton />
          </div>
          <div style={contentBack}>
            <ThemeButton />
          </div>
          <div style={contentBack}>
            <NumberButton />
          </div>
          <div style={contentBack}>
            <DensityButton />
          </div>
          <div style={contentBack}>
            <MakeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
