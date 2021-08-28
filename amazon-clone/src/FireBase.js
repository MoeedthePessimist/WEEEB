import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCt542S73nunoCheYz3DNo1BRzOwqU3n5s",
  authDomain: "clone-d1970.firebaseapp.com",
  projectId: "clone-d1970",
  storageBucket: "clone-d1970.appspot.com",
  messagingSenderId: "480539522296",
  appId: "1:480539522296:web:26c7193d2e665a1bc7b70d",
  measurementId: "G-CG65NXG50T"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };