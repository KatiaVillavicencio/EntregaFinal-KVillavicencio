
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBlhUR_KZXvw5bgdeD6o5joWV4o9XXzs4E",
  authDomain: "miproyecto-kvillavicencio.firebaseapp.com",
  projectId: "miproyecto-kvillavicencio",
  storageBucket: "miproyecto-kvillavicencio.appspot.com",
  messagingSenderId: "416798637204",
  appId: "1:416798637204:web:f1449201ac3530edbb0881",
  measurementId: "G-FZ7M67DN3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

