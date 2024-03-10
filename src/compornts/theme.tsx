import React, { useState } from "react";

const buttonDesign = {
    width: "20%",
    minWidth: "300px",
    height: "30%",
    opacity: "1",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    fontFamily: "cursive",
    fontSize: "20px",
    overflow: "hiden",
};

export default function ThemeButton() {
<<<<<<< HEAD
  const [state, setState] = useState("random");

  return (
    <div>
      <div>theme</div>
      <input
        value={state}
        type="text"
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
}
=======
    const [state, setState] = useState("random");
    
    return (
        <div style={buttonDesign}>
            <div>theme</div>
            <input
                value={state}
                type="text"
                onChange={(e) => setState(e.target.value)}     
            />
        </div>
    )
}
>>>>>>> d72e1d1eb46ced412dcc0a8ebcc6bdb378bba495
