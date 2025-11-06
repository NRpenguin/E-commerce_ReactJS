import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBI3fSX1WzBwjJVs5whrpYH795w2DfCGok",
  authDomain: "proyectofinalreact-955ac.firebaseapp.com",
  projectId: "proyectofinalreact-955ac",
  storageBucket: "proyectofinalreact-955ac.firebasestorage.app",
  messagingSenderId: "174018996098",
  appId: "1:174018996098:web:98d4c5117bde9a4a52519b",
  measurementId: "G-07Z9R5DQ0Z"
};

// conectar codigo con firebase
const app = initializeApp(firebaseConfig);

//permite exportar la base de datos para su uso en otros archivos
export function getFirebaseFirestore() {
  return getFirestore(app);
}
