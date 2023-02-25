import pearLogo from "../img/pear.png"
import React from "react"
import { Navbar, Nav, Image } from "react-bootstrap"

export default function NavigationBar() {


    return (

      <Navbar style={{paddingLeft:"20px", paddingRight:"20px", fontFamily:"'Exo 2', sans-serif", fontSize:"25px"}}sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark" fluid="xs">
      <Navbar.Brand href="/home">
        <Image style={{filter: "brightness(0) invert(1)", height:"50px", transform:"rotate(-45deg)"}} src={pearLogo}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/add">Create Transaction</Nav.Link>
          <Nav.Link href="/storage">Inventory</Nav.Link>
        </Nav>
        <Nav>
        </Nav>
      </Navbar.Collapse>
    </Navbar>



      
   
   );
}

