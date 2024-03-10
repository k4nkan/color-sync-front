export default function MakeButton() {
  const buttonDesign = {
    width:"100%",
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "cursive",
    fontSize: "20px",
    overflow: "hiden",
  };

  const buttonBackDesign = {
    display: "flex",
    width: "50%",
    height: "80%",
    transform: "translate(-2%, 5%)",
    minWidth: "150px",
    background: "rgb(255, 255, 255)",
    border: "solid 2px rgb(200, 200, 200)",
    cursor: "pointer",
    opacity: "1",
    borderRadius: "5px",
  };
  

  const buttonSize = {
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
