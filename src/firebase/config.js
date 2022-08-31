// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqZvHWCu1WRvnqSRw_SGXF8pjxQ8il-pI",
  authDomain: "react-curso-redux-2f81d.firebaseapp.com",
  projectId: "react-curso-redux-2f81d",
  storageBucket: "react-curso-redux-2f81d.appspot.com",
  messagingSenderId: "108040191667",
  appId: "1:108040191667:web:625cd74f82734372f17ac6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FireBaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );


