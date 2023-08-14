// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
export const db = getFirestore (app);

const analytics = getAnalytics(app);