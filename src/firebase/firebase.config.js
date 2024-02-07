// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf0wgpnkzwSCO_5E42lcQTp5MEF09Rovw",
  authDomain: "event-management-58766.firebaseapp.com",
  projectId: "event-management-58766",
  storageBucket: "event-management-58766.appspot.com",
  messagingSenderId: "891600267782",
  appId: "1:891600267782:web:64ce4e40551a4dbb6c7187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;