// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkD96YCF8T_dBdwJITPdgJLc0k8-_ThWw",
  authDomain: "brand-shop-ca1d3.firebaseapp.com",
  projectId: "brand-shop-ca1d3",
  storageBucket: "brand-shop-ca1d3.appspot.com",
  messagingSenderId: "871206420065",
  appId: "1:871206420065:web:726eec22dd9f8f41917420",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
