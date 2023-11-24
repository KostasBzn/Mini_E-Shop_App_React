// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg2lZhMv6wzLO5QwZlnUAhNNeY-ri_UU8",
  authDomain: "mini-e-shop-app-dd557.firebaseapp.com",
  projectId: "mini-e-shop-app-dd557",
  storageBucket: "mini-e-shop-app-dd557.appspot.com",
  messagingSenderId: "828114420491",
  appId: "1:828114420491:web:679f692c87a8abe3e7980e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
