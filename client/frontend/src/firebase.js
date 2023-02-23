// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const db = getFirestore(firebase);

export default db