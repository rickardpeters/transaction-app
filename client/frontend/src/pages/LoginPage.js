import { useState } from "react"
import { apiRequest } from "../APIRequest"
import { Container } from "react-bootstrap"



function LoginPage() {

    const inputStyle = {
        height:"40px",
        margin: "10px",
        boxSizing: "border-box",
        alignItems: "center"
    }
    
    const buttonStyle = {
        background: "black",
        color: "white",
        fontSize: "20px",
        padding: "10px 60px",
        borderRadius: "5px",
        margin: "10px 0px",
        cursor: "pointer",
        fontFamily: "'Exo 2', sans-serif"
    
    }


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
    
        if (username && password) {
            try {
              const response = await apiRequest("login", "POST", {
                username: username,
                password: password,
              });
              return response;
            } catch (error) {
                console.log(error)
              throw new Error(error.response.detail);
            }
          }
        };


    const handleSubmit = async () => {
        try {
            const response = await login();
            console.log("response: " + response)
            const accessToken = response;
            console.log("accesstoken: " + accessToken)
            
            if (accessToken) {
              sessionStorage.setItem("token", accessToken);
              window.location.reload()

            } else {
              alert("Error signing in!");
            }
          } catch (error) {
            alert("Error: " + error.message);
          }
        };


    return (
        <Container fluid="xs">
        {!sessionStorage.getItem("token") ? 
        <>
            <div style={{textAlign:"center", fontFamily:"Tilt Warp", color: "white"}}>
            <div style={{height:"100px"}}></div>
            <h1>Enter your credentials:</h1>
            <br></br>
            <br></br>
            <div style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", textAlign:"center"}}>
                            <input onChange={e => setUsername(e.target.value)} placeHolder="Username..." type="text" style={inputStyle}></input>
                            <input onChange={e => setPassword(e.target.value)} placeHolder="Password..." type="password" style={inputStyle}></input>
                </form>
            </div>
            <button onClick={handleSubmit} type="submit" style={buttonStyle}>Submit</button>
        </div>
        </>
        : 
        <>
        <div style={{textAlign:"center", fontFamily:"Tilt Warp", color: "white"}}>
            <div style={{height:"100px"}}></div>
            <h1>Login successful!</h1>
            <h3>Welcome!</h3>
            
        </div>
        </>}
        </Container>
 
    )
}

export default LoginPage;