import pearLogo from "../img/pear.png"
import React, { useState, useEffect } from "react"
import { Navbar, Nav, Image } from "react-bootstrap"

export default function NavigationBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect (() => {
    if (sessionStorage.getItem("token")){
      setIsLoggedIn(true);
    }
  }, []);

    const handleLogout = async () => {
      sessionStorage.clear()
      setIsLoggedIn(false);
      window.location.href="/logout";
      
    }


    return (

      <Navbar style={{margin:"0", paddingLeft:"20px", paddingRight:"20px",
                      fontFamily:"'Exo 2', sans-serif", fontSize:"25px"}}
                      sticky="top" collapseOnSelect expand="sm" bg="dark" variant="dark" fluid="xs">
      <Navbar.Brand href="/">
        <Image style={{filter: "brightness(0) invert(1)", height:"50px", transform:"rotate(-45deg)"}} src={pearLogo}></Image>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {isLoggedIn ? (
          <>
          <Nav.Link href="/add">Create Transaction</Nav.Link>
          <Nav.Link href="/storage">Inventory</Nav.Link>
          <Nav.Link onClick={handleLogout} >Sign out</Nav.Link>
          </>
          
      ) : (
        <Nav.Link href="/login" >Sign in</Nav.Link>
      )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>



      
   
   );
}


/* mr-auto */