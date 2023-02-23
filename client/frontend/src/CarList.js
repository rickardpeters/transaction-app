import React, { useState, useEffect } from 'react';
import { getDocs, collection } from 'firebase/firestore'
import db from './firebase';
import CarListItem from './CarListItem';


export default function CarList() {

    
    const collection_name = "cars"

    const getCars = async () => {
      const doc_refs = await getDocs(collection(db, collection_name))

      const res = []

      doc_refs.forEach(car => {
        res.push({
          name: car.Name,
        ...car.data()
      
      })
      })
      return res
    }

    const [loading, setLoading] = useState(false)
    const [cars, setCars] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)

            const res = await getCars()

            setCars([...res])
            setLoading(false)
    }
    fetchData()
        
    }, [])

    return (
        <section>
            <header style={{textAlign: "center"}}>
                <h1 style={{fontSize: "50px", fontFamily: "Tilt Warp"}}>Cars</h1>
            </header>

            { loading && 
                <h3 style={{fontFamily: "Tilt Warp", textAlign: "center", fontSize: "30px"}}>loading...</h3>
            }

            <ul style={{textAlign:"center", margin:"0", padding: "0"}}>
                {cars.length > 0 && cars.map(car => (
                    <CarListItem car={car}/>
                ))}
            </ul>
            <br></br>
        </section>
    )
}