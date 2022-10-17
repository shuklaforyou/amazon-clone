// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjRwAkEHSXDPC-WiA7o-GxCxG3IuiepxA",
    authDomain: "challange-e5876.firebaseapp.com",
    projectId: "challange-e5876",
    storageBucket: "challange-e5876.appspot.com",
    messagingSenderId: "880139074427",
    appId: "1:880139074427:web:1f2d0c3f2da99328919bde",
    measurementId: "G-8KCG2YH6FQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };