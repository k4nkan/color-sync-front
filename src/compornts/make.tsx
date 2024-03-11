export default function MakeButton() {
  const buttonDesign: React.CSSProperties = {
    width:"100%",
    display:"flex",
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
    background: "rgb(217, 217, 217)",
    border: "solid 2px rgb(217, 217, 217)",
    cursor: "pointer",
    opacity: "1",
    borderRadius: "10px",
  };

  const buttonSize: React.CSSProperties = {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "right",
  };

  return (
    <div style={buttonSize}>
      <div style={buttonBackDesign}>
        <div style={buttonDesign}>make</div>
      </div>
    </div>
  );
}
