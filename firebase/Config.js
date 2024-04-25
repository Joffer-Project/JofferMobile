
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIJA9xzF232dXJoNVehmyMoSCs5ZUarRY",
  authDomain: "joffer-dd221.firebaseapp.com",
  databaseURL: "https://joffer-dd221-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "joffer-dd221",
  storageBucket: "joffer-dd221.appspot.com",
  messagingSenderId: "9394971483",
  appId: "1:9394971483:web:98d3b85a87766085b8b07e",
  measurementId: "G-J55XTZ3Y18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
