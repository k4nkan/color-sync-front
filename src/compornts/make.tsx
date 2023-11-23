export default function MakeButton() {

    const buttonDesign = {
        background: "rgb(255, 255, 255)",

        border: "solid 2px rgb(200,200,200)",

        width: "20%",
        minWidth: "150px",
        height: "30px",
        opacity: "1",
        borderRadius: "5px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        fontFamily: "cursive",
        fontSize: "20px",
        overflow: "hiden",

        cursor: "pointer",
    };

    return (
            <div style={buttonDesign}>
                <div>make</div>
            </div>
    )
}