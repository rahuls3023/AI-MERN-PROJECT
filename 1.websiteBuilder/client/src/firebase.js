// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "genwebai-c5da0.firebaseapp.com",
  projectId: "genwebai-c5da0",
  storageBucket: "genwebai-c5da0.firebasestorage.app",
  messagingSenderId: "621592558731",
  appId: "1:621592558731:web:0c35b2666b18f48ac8e88e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()

export {auth,provider};