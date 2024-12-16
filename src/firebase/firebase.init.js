// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8uwz9GNjWUxe62unWkN5Ju44Ci_FdKFY",
  authDomain: "job-portal-17334.firebaseapp.com",
  projectId: "job-portal-17334",
  storageBucket: "job-portal-17334.firebasestorage.app",
  messagingSenderId: "149793756710",
  appId: "1:149793756710:web:58a137a65a5ab4646438e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
