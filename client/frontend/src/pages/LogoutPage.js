import Image from "react-bootstrap/Image"
import waveLogo from "../img/wave.png"
import { Container, Row} from "react-bootstrap"

function LogoutPage(){




    return (
    <>
    <br></br>
    <br></br>
    <Container>
        <Row>
            <h1 style={{fontFamily: "Tilt Warp", textAlign: "center", fontSize: "65px", color:"white" }}>You are now signed out!</h1>
        </Row>
        <br></br>
        <br></br>
        <Row fluid="lg" style={{justifyContent:"center"}}>
            <Image style={{filter: "brightness(0) invert(1)", height:"300px", width:"auto"}} src={waveLogo}></Image>
        </Row>
    </Container>
    </>
    )
}

export default LogoutPage;