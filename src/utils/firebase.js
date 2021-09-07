import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseApp = initializeApp({
    
  apiKey: "AIzaSyBLDipkFW9mASvbQzcRRaSL5ENKc5eIFqo",
  authDomain: "form-register-59789.firebaseapp.com",
  projectId: "form-register-59789",
  storageBucket: "form-register-59789.appspot.com",
  messagingSenderId: "20280864206",
  appId: "1:20280864206:web:254fcaa9c711f4834f4f9f"    

});

export const db = getFirestore();

