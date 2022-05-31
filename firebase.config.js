// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFdeL081OQFz9PHXojYSwP6s2OMW9Dt_8",
  authDomain: "github-issue-user.firebaseapp.com",
  projectId: "github-issue-user",
  storageBucket: "github-issue-user.appspot.com",
  messagingSenderId: "579428649353",
  appId: "1:579428649353:web:d87128fdafa2accc573958",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const auth= getAuth(); 