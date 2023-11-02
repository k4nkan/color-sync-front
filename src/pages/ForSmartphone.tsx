import DensityButton from "../compornts/density"
import MakeButton from "../compornts/make"
import NumberButton from "../compornts/number"
import ThemeButton from "../compornts/theme"
import TitleButton from "../compornts/title"

export default function ForSmartphone(){
    
    return (
        <div>
            <TitleButton/>
            <ThemeButton/>
            <NumberButton/>
            <DensityButton/>
            <MakeButton/>
            <div>for smartphone</div>
        </div>

    )
}