import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBI3fSX1WzBwjJVs5whrpYH795w2DfCGok",
  authDomain: "proyectofinalreact-955ac.firebaseapp.com",
  projectId: "proyectofinalreact-955ac",
  storageBucket: "proyectofinalreact-955ac.appspot.com",
  messagingSenderId: "174018996098",
  appId: "1:174018996098:web:98d4c5117bde9a4a52519b",
  measurementId: "G-07Z9R5DQ0Z"
};
// Initialize Firebase
const fireApp = firebase.initializeApp(firebaseConfig);

export function getFirebase(){
  return fireApp
}

export function getFirestore(){
  return firebase.firestore(fireApp)
}