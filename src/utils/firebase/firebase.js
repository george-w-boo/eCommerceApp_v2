// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlLyEvg_XMAkyM55R-dOXKK5FmlSOuaqE",
  authDomain: "ecommerceapp-v2.firebaseapp.com",
  projectId: "ecommerceapp-v2",
  storageBucket: "ecommerceapp-v2.appspot.com",
  messagingSenderId: "1053946589830",
  appId: "1:1053946589830:web:7c875de3cca04111479707",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider({
  prompt: "selectAccount",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
