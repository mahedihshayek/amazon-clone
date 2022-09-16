import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKMkP-1vykVWIWs_dw10PBIF4akXtkSfI",
    authDomain: "clone-8eabf.firebaseapp.com",
    projectId: "clone-8eabf",
    storageBucket: "clone-8eabf.appspot.com",
    messagingSenderId: "462146233917",
    appId: "1:462146233917:web:4a3b33f4e251d1f76e6c54"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };