import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsyHK0qQEbD-AcDk7fDmgaj0adKBWwkMU",
    authDomain: "clone-f02cf.firebaseapp.com",
    databaseURL: "https://clone-f02cf.firebaseio.com",
    projectId: "clone-f02cf",
    storageBucket: "clone-f02cf.appspot.com",
    messagingSenderId: "707366807656",
    appId: "1:707366807656:web:1ef42b6c87e1ee2bffb3dd",
    measurementId: "G-GS71HVRLN0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };