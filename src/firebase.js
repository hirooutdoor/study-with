// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDkcYrNzT8pbfpS-kflADkDDzVMumTE2dc",
  authDomain: "study-with-a5514.firebaseapp.com",
  projectId: "study-with-a5514",
  storageBucket: "study-with-a5514.appspot.com",
  messagingSenderId: "992550912682",
  appId: "1:992550912682:web:5983fd70c80a95735f86d3",
  measurementId: "G-09P34PBHCH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db;