import DensityButton from "../compornts/density"
import MakeButton from "../compornts/make"
import NumberButton from "../compornts/number"
import ThemeButton from "../compornts/theme"
import TitleButton from "../compornts/title"


const pageBack = {
    width:"100%",
    height:"100vh",
    background:"rgb(250,250,250)",
}

const contentBack = {
    height:"10%",
    
}

export default function ForSmartphone() {

    return (
        <div>
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
                <div>for smartphone</div>
            </div>
        </div>

    )
}