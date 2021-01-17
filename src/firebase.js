import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBEujsqGaCIiEN-ZBYgAYueSm_zL0pV1GA",
    authDomain: "first-react-firebase-app-7cc0b.firebaseapp.com",
    projectId: "first-react-firebase-app-7cc0b",
    storageBucket: "first-react-firebase-app-7cc0b.appspot.com",
    messagingSenderId: "572380296082",
    appId: "1:572380296082:web:fa0561b3148e9b6867074b"  
})

const db = firebaseApp.firestore();

export default db; // this database variable can be used anywhere in the files