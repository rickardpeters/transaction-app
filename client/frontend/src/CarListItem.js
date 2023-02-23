import AddtoCart from "./AddtoCart"

export default function CarListItem(props) {
    const { car } = props
    
    return (

        <div key={car.Name} style={{background:"white", width:"300px",
                                    justifyContent:"center", alignItems:"center",
                                    position:"relative", borderRadius: "3%", margin: "auto auto 10px auto",
                                    fontFamily: "'Exo 2', sans-serif", fontWeight: "Medium 500",
                                    boxShadow: "1px 1px 5px #000000"}}>
            <div style={{border: "1px solid #111D4A", width: "auto", height: "auto",
                        justifyContent: "center", alignContent: "center",
                        background:"#111D4A", textAlign: "center",
                        borderRadius: "3%", color:"white"}}>
                <h3>{car.Name}</h3>
            </div>
            <h4 style={{marginTop:"20px"}}>{car.Color}</h4>
            <p style={{padding:"15px", margin: "0"}}>{car.Price} SEK</p>
            <div>
                <AddtoCart />
            </div>
            <br></br>
        </div>
        
    )
}