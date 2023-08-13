// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-iCmg5mBDa4W_mrY0dI5eXpWWNuou4I",
  authDomain: "proyecto-final-react-ceee9.firebaseapp.com",
  projectId: "proyecto-final-react-ceee9",
  storageBucket: "proyecto-final-react-ceee9.appspot.com",
  messagingSenderId: "352232089376",
  appId: "1:352232089376:web:d8b3e5d4351a8f2e365945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)