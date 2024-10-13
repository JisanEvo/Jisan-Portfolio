// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNtyd2zi-VyJj5pczJGpzR0bvztA9C6N0",
  authDomain: "jisan-s-portfolio.firebaseapp.com",
  projectId: "jisan-s-portfolio",
  storageBucket: "jisan-s-portfolio.appspot.com",
  messagingSenderId: "491508339021",
  appId: "1:491508339021:web:a41bf1b9275ac898746704",
  measurementId: "G-267DNED1ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 