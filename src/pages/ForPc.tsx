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
  overflow:"hidden",
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

const compornts = [
  <TitleButton />,
  <ThemeButton />,
  <NumberButton />,
  <DensityButton />,
  <MakeButton />,
];

export default function ForPc() {
  return (
    <div style={containerStyle}>
      <div style={squareStyle}>
        <div style={pageBack}>
          {compornts.map((compornt, index) => (
            <div key={index} style={contentBack}>
              {compornt}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
