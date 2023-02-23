import carLogo from "./img/bil.png"
import cartLogo from "./img/cart.png"

export default function Navbar() {

    const navbarItemStyle = {
      background: "#317773",
      margin: "3px",
      marginLeft: "0",
      height: "auto",
      width: "150px",
      textAlign: "center",
      

    }

    return (

        <header style={{background: "#317773", display:"flex", flexDirection:"row", verticalAlign: "middle", fontFamily: "'Exo 2', sans-serif" }}>
            <a href="http://localhost:3000/home">
            <img src={carLogo} alt="" style={{height: "50px", marginInline:"10px"}}/>
            </a>
            <h1 style={navbarItemStyle}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/home">Home</a></h1>
            <h1 style={navbarItemStyle}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/cars">Cars</a></h1>
            <h1 style={navbarItemStyle}>
              <a style={{textDecoration: "none", color: "white"}} href="http://localhost:3000/add">Add</a></h1>
            <a href="http://localhost:3000/cart">
            <img src={cartLogo} alt="" style={{height: "50px", marginInline:"10px", right: "10px"}}/>
            </a>
          </header>
        )
}