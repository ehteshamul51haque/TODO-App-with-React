// For Firebase JS SDK v7.20.0 and later, measurementId is optional


// import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAwHy3osaxa73m33W1Ft-FncVoXf6DNSg4",
    authDomain: "todo-app-cp-807dd.firebaseapp.com",
    projectId: "todo-app-cp-807dd",
    storageBucket: "todo-app-cp-807dd.appspot.com",
    messagingSenderId: "883378651999",
    appId: "1:883378651999:web:a5603083844cf83b302cea",
    measurementId: "G-KV49PL3Y1C"
};
// const firebaseApp = initializeApp(firebaseConfig);
// const db = getFirestore(firebaseApp);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db; 