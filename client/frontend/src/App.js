import React, { useState, useEffect } from 'react';
import { getDocs, collection, getFirestore } from 'firebase/firestore'


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQNJ6rNQ-bueIIG-rRwKCNsu4kgkdLI6g",
  authDomain: "webshop-rp.firebaseapp.com",
  projectId: "webshop-rp",
  storageBucket: "webshop-rp.appspot.com",
  messagingSenderId: "686116047451",
  appId: "1:686116047451:web:d4b5afd680c4cab695cd7e",
  measurementId: "G-VP13PLMB5S"
};

const firebase = initializeApp(firebaseConfig)


const App = () => {


    const collection_name = "cars"

    const getCars = async () => {
      const doc_refs = await getDocs(collection(getFirestore(firebase), collection_name))

      const res = []

      doc_refs.forEach(car => {
        res.push({
          id: car.id,
        ...car.data()
      
      })
      })
      return res
    }

    function CarListItem(props) {
      const { car } = props
  
      return (
          <li key={car.name}>
              <h3>{car.name} {car.color} </h3>
              <p>Price: {car.price}</p>
          </li>
      )
  }

  function CarList() {
    const [loading, setLoading] = useState(false)
    const [cars, setCars] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await getCars()

        setCars([...res])
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>Cars</h2>
            </header>

            { loading && 
                <p>loading...</p>
            }

            <ul>
                {cars.length > 0 && cars.map(car => (
                    <CarListItem car={car}/>
                ))}
            </ul>
        </section>
    )
}


   
    return (
    <div className='App'>
      <CarList />
    </div>
    );
  
}
   


export default App;
