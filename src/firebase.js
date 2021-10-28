import firebase from 'firebase/app';
import 'firebase/firestore'
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyDaCwjkaDHTgjEVpOeqd95-4DMlz5Ane1s",
    authDomain: "linkedin-clone-59f17.firebaseapp.com",
    projectId: "linkedin-clone-59f17",
    storageBucket: "linkedin-clone-59f17.appspot.com",
    messagingSenderId: "769168144120",
    appId: "1:769168144120:web:a6938015492213dab5ad0d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }