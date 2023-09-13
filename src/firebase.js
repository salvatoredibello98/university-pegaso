// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2qxanEDxaAedAImwlrPv-zOYMhdnnfFA",
  authDomain: "login-admin-pegaso.firebaseapp.com",
  projectId: "login-admin-pegaso",
  storageBucket: "login-admin-pegaso.appspot.com",
  messagingSenderId: "192977533152",
  appId: "1:192977533152:web:4622b8958107282ba33885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
