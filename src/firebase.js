import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhDq37gC6F2NPcUHv6n8MK3fDHillnt5E",
  authDomain: "clone-52dcf.firebaseapp.com",
  projectId: "clone-52dcf",
  storageBucket: "clone-52dcf.appspot.com",
  messagingSenderId: "329499232386",
  appId: "1:329499232386:web:60d5c81c33a7d057a4cc9b",
  measurementId: "G-5C9CGN0HG3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };