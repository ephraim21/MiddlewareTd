// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFk-tJz6dmV2nWtIIRVbjDWqg-snOqKgk",
  authDomain: "middleware2-564f5.firebaseapp.com",
  projectId: "middleware2-564f5",
  storageBucket: "middleware2-564f5.appspot.com",
  messagingSenderId: "655586578736",
  appId: "1:655586578736:web:2a709b09a516ebfafd38f5",
  measurementId: "G-6VM2V4PSP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
