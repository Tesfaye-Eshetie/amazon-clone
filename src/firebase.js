import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCGViOA0Ok_KNz36UfboPBxd5n5kkzspwI",
    authDomain: "clone-4412a.firebaseapp.com",
    projectId: "clone-4412a",
    storageBucket: "clone-4412a.appspot.com",
    messagingSenderId: "783153521281",
    appId: "1:783153521281:web:89e4cd3f3f3af5dd9de380",
    measurementId: "G-FRKVCRBYCD"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };