import React, { useState, useEffect } from 'react';
import { getDocs, collection, getFirestore, setDoc, doc } from 'firebase/firestore'
import Navbar from "./Navbar"
import CarList from './CarList';

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

const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);

const App = () => {


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

  

  function CarListItem(props) {
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



    return (
    
    <div className='App'>
      <Navbar />
      <CarList />
      
    </div>
    );
  
}
   


export default App;
