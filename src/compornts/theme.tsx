import React, {useState} from "react"

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