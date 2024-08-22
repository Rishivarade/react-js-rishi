// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAio_YhLKD5Tm6wPtpCFE0NNV4qYvAsGiU",
  authDomain: "database-58007.firebaseapp.com",
  projectId: "database-58007",
  storageBucket: "database-58007.appspot.com",
  messagingSenderId: "484387855083",
  appId: "1:484387855083:web:997098bb767bedfcd57cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();