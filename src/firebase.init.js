//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfiY5aoDnkAyLsP5wPldxGxgAkOm2Giag",
  authDomain: "tubifybd.firebaseapp.com",
  projectId: "tubifybd",
  storageBucket: "tubifybd.appspot.com",
  messagingSenderId: "231920083065",
  appId: "1:231920083065:web:505390d7d71390fb3034a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;