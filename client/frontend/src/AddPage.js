
import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import db from "./firebase"

function AddPage() {
    
    const inputStyle = {
        height:"30px",
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

    const [carName, setCarName] = useState('');
    const [carColor, setCarColor] = useState('');
    const [carPrice, setCarPrice] = useState('');

    const handleSubmit = async (e) => {

            await addDoc(collection(db, "cars"), {
                Name: carName,
                Color: carColor,
                Price: carPrice
            })

            alert("Car successfully added to database.")
            
         
    }


    
    
    return(
        <div style={{textAlign:"center", fontFamily:"Tilt Warp"}}>
            <div style={{height:"100px"}}></div>
            <h1>Enter information to add car:</h1>
            <div style={{textAlign:"center", display:"flex", justifyContent:"center"}}>
                <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", textAlign:"center"}}>
                    <input onChange={e => setCarName(e.target.value)} placeHolder="Name..." type="text" style={inputStyle}></input>
                    <input onChange={e => setCarColor(e.target.value)} placeHolder="Color..."type="text" style={inputStyle}></input>
                    <input onChange={e => setCarPrice(e.target.value)} placeHolder="Price..."type="text" style={inputStyle}></input>
            </form>
            <button onClick={handleSubmit} type="submit" style={buttonStyle}>Submit</button>
            </div>
        </div>
    )
}

export default AddPage;