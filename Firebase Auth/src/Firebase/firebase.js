// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh5XOKr3PLfKl88zYw7JIigqWojQBjv1g",
  authDomain: "emailpass-b06f3.firebaseapp.com",
  projectId: "emailpass-b06f3",
  storageBucket: "emailpass-b06f3.appspot.com",
  messagingSenderId: "662172590660",
  appId: "1:662172590660:web:f8cc18b9a76dee8e5a9211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };