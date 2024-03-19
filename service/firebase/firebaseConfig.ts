// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjjOoP48RRuyEM8oWQiOiuaXj96S3HJPg",
  authDomain: "mashroom-insights.firebaseapp.com",
  projectId: "mashroom-insights",
  storageBucket: "mashroom-insights.appspot.com",
  messagingSenderId: "780484465389",
  appId: "1:780484465389:web:293759157374ba0de332e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
