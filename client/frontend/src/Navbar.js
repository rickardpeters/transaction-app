import carLogo from "./img/bil.png"

export default function Navbar() {
    return (

        <header style={{background: "#317773", display:"flex", flexDirection:"row", verticalAlign: "middle", fontFamily: "'Exo 2', sans-serif" }}>
            <a style={{}} href="http://localhost:3000/home">
            <img src={carLogo} alt="" style={{height: "50px", marginInline:"10px"}}/>
            </a>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/home">Home</a></h1>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/cars">Cars</a></h1>
            <h1 style={{background: "#317773", margin: "0", height: "auto", width: "150px", textAlign: "center", border: "2px solid"}}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/add">Add</a></h1>
          </header>
        )
}