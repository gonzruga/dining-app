// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Put API keys in an .env file - create environment variables.

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAHGUl5Sk9SDIHJ6pNweMhsSigOqjx5DmQ",
    authDomain: "dining-app-3b616.firebaseapp.com",
    projectId: "dining-app-3b616",
    storageBucket: "dining-app-3b616.appspot.com",
    messagingSenderId: "40766301244",
    appId: "1:40766301244:web:e118e85cb500d12b550f39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

// Initialize Cloud Firestore and get a reference to the service
export const firebaseDataBase = getFirestore(app);

//export const authCreaete = createUserWithEmailAndPassword()
