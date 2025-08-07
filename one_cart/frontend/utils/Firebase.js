import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_KEY,
  authDomain: "ecommercewebsite-224a5.firebaseapp.com",
  projectId: "ecommercewebsite-224a5",
  storageBucket: "ecommercewebsite-224a5.firebasestorage.app",
  messagingSenderId: "571317138481",
  appId: "1:571317138481:web:10dab39fc4abc5d6fb5110"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}