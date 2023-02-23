
function AddtoCart() {

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

    return(
        <div>
            <button style={buttonStyle}>Add to cart</button>
        </div>
        
    )
}

export default AddtoCart;