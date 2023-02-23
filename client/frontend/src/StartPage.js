import carsImage from "./img/bilar.png"

function StartPage(){
    return (
    <>
    <h1 style={{fontFamily: "Tilt Warp", textAlign: "center", fontSize: "65px" }}>Welcome to the Home Page!</h1>
    <div style={{textAlign: "center"}}>
    <img src={carsImage} alt=""/>
    </div>
    </>
    )
}

export default StartPage;