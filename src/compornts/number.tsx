import React, {useState} from "react"

export default function NumberButton() {
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
    )
}