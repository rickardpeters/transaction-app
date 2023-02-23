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

    return (
    
    <div className='App'>
      <Navbar />
      <h1 style={{fontFamily: "Tilt Warp"}}>Welcome to the Home Page!</h1>
      
    </div>
    );
  
}
   


export default App;
