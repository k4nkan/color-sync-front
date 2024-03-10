export default function TitleButton() {

    const buttonDesign = {
        background: "rgb(255, 255, 255)",

        border:"solid 2px rgb(200,200,200)",

        minWidth: "150px",
        width:"20%",
        height: "30px",
        opacity: "1",
        borderRadius: "5px",

        display:"flex",
        justifyContent:"center",
        alignItems:"center",

        fontFamily:"cursive",
        fontSize:"20px",
        overflow:"hiden",

        cursor: "pointer",
    };

    const reload = () => {
        window.location.reload();
    };

    return (
        <div style={buttonDesign} onClick={reload}>
            <div>title</div>
        </div>
    );
}
