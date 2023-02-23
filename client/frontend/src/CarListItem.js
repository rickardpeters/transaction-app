export default function CarListItem(props) {
    const { car } = props
    
    return (

        <div key={car.Name} style={{background:"white", width:"300px",
                                    justifyContent:"center", alignItems:"center",
                                    position:"relative", borderRadius: "3%", margin: "auto",
                                    fontFamily: "Exo 2", fontWeight: "Medium 500",
                                    boxShadow: "1px 1px 5px #000000"}}>
          <div style={{border: "1px solid", width: "auto", height: "auto",
                        justifyContent: "center", alignContent: "center",
                        background:"#317773", position: "relative", textAlign: "center",
                        borderRadius: "3%", color:"#212121"}}>
            <h3>{car.Name}</h3>
          </div>
            <h4>{car.Color}</h4>
            <p>Price: {car.Price}</p>
        </div>
    )
}