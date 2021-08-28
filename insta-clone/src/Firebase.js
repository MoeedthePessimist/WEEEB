import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC30-lfelPomWMFrovh67zIaHWrNaGlX6Y",
  authDomain: "insta-clone-abdc6.firebaseapp.com",
  projectId: "insta-clone-abdc6",
  storageBucket: "insta-clone-abdc6.appspot.com",
  messagingSenderId: "745648043078",
  appId: "1:745648043078:web:1c5b6b9d6e5617163c8647",
  measurementId: "G-D3C38WQ455"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
