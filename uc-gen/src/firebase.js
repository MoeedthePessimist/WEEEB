import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA-ebtvY7pNUcioupo87GxoZGIwoZGTHLU",
  authDomain: "ucd-gen.firebaseapp.com",
  projectId: "ucd-gen",
  storageBucket: "ucd-gen.appspot.com",
  messagingSenderId: "185636416321",
  appId: "1:185636416321:web:fdbb981480c320825d8fc0",
  measurementId: "G-NYKT4RM123"
};
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
