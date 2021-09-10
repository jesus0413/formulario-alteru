import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseApp = initializeApp({
    
  apiKey: "AIzaSyCsYlP2yma4hXdxhowxmQTEtvobsr2NS_k",
  authDomain: "form-alteru.firebaseapp.com",
  projectId: "form-alteru",
  storageBucket: "form-alteru.appspot.com",
  messagingSenderId: "707297274773",
  appId: "1:707297274773:web:71022a5b626c03b857649c"

});

export const db = getFirestore();

