
import { useState, useEffect } from "react"
import { apiRequest } from "./APIRequest"
import { Container} from "react-bootstrap"


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

    const [article, setArticle] = useState('');
    const [city, setCity] = useState('');
    const [amount, setAmount] = useState('');
    const [operation, setOperation] = useState('');


    

    const createTransaction = async () => {
    
        if (city && article && amount && operation) {
            return apiRequest("transactions", "POST", {
                city: city,
                article: article,
                amount: amount,
                operation: operation
            })

        }
    }

    
    

    const handleSubmit = async () => {
        createTransaction()
        alert("Transaction created!")
    }

    return(
        <Container fluid="xs">
        <div style={{textAlign:"center", fontFamily:"Tilt Warp", color: "white"}}>
            <div style={{height:"100px"}}></div>
            <h1>Enter information to create a transaction:</h1>
            <div style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", textAlign:"center"}}>
                    <select style={inputStyle} onChange={e => setCity(e.target.value)}>
                        <option value="" disabled selected>Select city...</option>
                        <option value="1">Cupertino</option>
                        <option value="2">Norrköping</option>
                        <option value="3">Frankfurt</option>
                    </select>
                    <select style={inputStyle} onChange={e => setArticle(e.target.value)}>
                        <option value="" disabled selected>Select article...</option>
                        <option value="P001">jTelefon</option>
                        <option value="P002">jPlatta</option>
                        <option value="P003">Päronklocka</option>
                    </select>
                    <input onChange={e => setAmount(e.target.value)} placeHolder="Enter amount..." type="number" style={inputStyle}></input>
                    <select style={inputStyle} onChange={e => setOperation(e.target.value)}>
                        <option value="" disabled selected>Select operation...</option>
                        <option value="Withdraw">Withdraw</option>
                        <option value="Deposit">Deposit</option>
                    </select>   
            </form>
            </div>
            <button onClick={handleSubmit} type="submit" style={buttonStyle}>Submit</button>
        </div>
        </Container>
    )
}

export default AddTransaction;