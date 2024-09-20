// In this file we will initialize our firebase database

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: copy-paste the config variables found in your Firebase Project Settings!
const firebaseConfig = {
	apiKey: "AIzaSyCtVwZT0-73H_0Qe95uT5qP4JU03ixH56Y",
  authDomain: "fsabfinalpro.firebaseapp.com",
  projectId: "fsabfinalpro",
  storageBucket: "fsabfinalpro.appspot.com",
  messagingSenderId: "450822423485",
  appId: "1:450822423485:web:bc88ff6839f07434bac8d4",
  measurementId: "G-DNQKRWSQYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
