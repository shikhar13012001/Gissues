// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_CONFIG_API_KEY,
  authDomain: process.env.FIREBASE_CONFIG_AUTH_DOMAIN,
  projectId: "github-issue-user",
  storageBucket: process.env.FIREBASE_CONFIG_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_CONFIG_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_CONFIG_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore(app);
