import carLogo from "./img/bil.png"

export default function Navbar() {
    return (

        <header style={{background: "#317773", display:"flex", flexDirection:"row", verticalAlign: "middle" }}>
            <img src={carLogo} style={{height: "50px", marginInline:"10px"}}/>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>Start</h1>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>Cars</h1>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>Add</h1>
          </header>
        )
}