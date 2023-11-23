// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBcbcebsDPdENPQiL28OguVgjAFIlyFvfQ",
  authDomain: "mini-e-shop-app.firebaseapp.com",
  projectId: "mini-e-shop-app",
  storageBucket: "mini-e-shop-app.appspot.com",
  messagingSenderId: "864623353999",
  appId: "1:864623353999:web:1c15bb5a3f2da45bd9d0fa",
  measurementId: "G-Y05RJP29PS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
