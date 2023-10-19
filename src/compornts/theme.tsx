import React, {useState} from "react"

export default function ThemeButton() {
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
    )
}