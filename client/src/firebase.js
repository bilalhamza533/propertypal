// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d7236.firebaseapp.com",
  projectId: "mern-estate-d7236",
  storageBucket: "mern-estate-d7236.appspot.com",
  messagingSenderId: "345759606161",
  appId: "1:345759606161:web:aac4cd11f18a7571b92630"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);