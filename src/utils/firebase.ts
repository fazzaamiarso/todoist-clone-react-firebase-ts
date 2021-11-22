// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, doc, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPiNcvNkZJp9dPKs3B12--TcdLPICI5Wc",
  authDomain: "todoist-clone-a2075.firebaseapp.com",
  projectId: "todoist-clone-a2075",
  storageBucket: "todoist-clone-a2075.appspot.com",
  messagingSenderId: "897620374690",
  appId: "1:897620374690:web:6a7c290ec46fc18eb7d3fb",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const firestore = getFirestore();
