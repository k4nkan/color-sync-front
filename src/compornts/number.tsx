import React, { useState } from "react";

export default function NumberButton() {
<<<<<<< HEAD
  const [state, setState] = useState("5");

  return (
    <div>
      <div>3</div>
      <input
        value={state}
        type="range"
        min="3"
        max="7"
        step="1"
        onChange={(e) => setState(e.target.value)}
      />
      <div>7</div>
    </div>
  );
}
=======
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

    const [state, setState] = useState("5");
    
    return (
        <div style={buttonDesign}>
            <div>3</div>
            <input
                value={state}
                type="range"
                min="3"
                max="7"
                step="1"
                onChange={(e) => setState(e.target.value)}     
            />
            <div>7</div>
        </div>
    )
}
>>>>>>> d72e1d1eb46ced412dcc0a8ebcc6bdb378bba495
