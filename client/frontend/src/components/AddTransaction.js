
import { useState } from "react"
import { apiRequest } from "../APIRequest"
import { Container, Modal, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function AddTransaction() {
    
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

    const [response, setResponse] = useState('')
    const [show, setShow] = useState(false)
    const [article, setArticle] = useState('');
    const [city, setCity] = useState('');
    const [amount, setAmount] = useState('');
    const [operation, setOperation] = useState('');
    
    const [fieldsFilled, setFieldsFilled] = useState(false)
    const navigate = useNavigate()
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        
        if (fieldsFilled && response !== 400) {
            navigate('/storage')
        }  
    }

    const createTransaction = async () => {
    
        if (city && article && amount && operation) {
            setFieldsFilled(true);
            const data = await apiRequest("transactions", "POST", {
                city: city,
                article: article,
                amount: amount,
                operation: operation
            })   
            setResponse(data)   
        }  
    }

    const handleSubmit = async () => {
        createTransaction()
        handleShow()
        
    }

    return(
        <Container fluid="xs">
        <div style={{textAlign:"center", fontFamily:"Tilt Warp", color: "white"}}>
            <div style={{height:"100px"}}></div>
            <h1>Enter information to create a transaction:</h1>
            <br></br>
            <br></br>
            <div style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", textAlign:"center"}}>

                    <select style={inputStyle} onChange={e => setArticle(e.target.value)}>
                        <option value="" disabled selected>Select article...</option>
                        <option value="P001">jTelefon</option>
                        <option value="P002">jPlatta</option>
                        <option value="P003">Päronklocka</option>
                    </select>

                    <select style={inputStyle} onChange={e => setCity(e.target.value)}>
                        <option value="" disabled selected>Select city...</option>
                        <option value="1">Cupertino</option>
                        <option value="2">Norrköping</option>
                        <option value="3">Frankfurt</option>
                    </select>

                    <select style={inputStyle} onChange={e => setOperation(e.target.value)}>
                        <option value="" disabled selected>Select operation...</option>
                        <option value="Withdraw">Withdraw</option>
                        <option value="Deposit">Deposit</option>
                    </select>

                    <input onChange={e => setAmount(e.target.value)} placeHolder="Enter amount..." type="number" style={inputStyle}></input>
            </form>
            </div>
            <button onClick={handleSubmit} type="submit" style={buttonStyle}>Submit</button>

        <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>
            {!fieldsFilled ? "All fields not filled out. Try again!":
            response === 400 ? "Not enough articles in storage.": "Transaction added!"}
            </Modal.Title>
        </Modal.Header>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} centered>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
        </div>
        </Container>
    )
}

export default AddTransaction;