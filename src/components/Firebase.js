// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDO_AmoUaWF1lSzfc6Iyq5uTgLVUOhU6Pw",
    authDomain: "trajectory-ef302.firebaseapp.com",
    projectId: "trajectory-ef302",
    storageBucket: "trajectory-ef302.appspot.com",
    messagingSenderId: "516393259370",
    appId: "1:516393259370:web:4e70cf99c9958cb4229513",
    measurementId: "G-KFNM2VVMGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => signInWithPopup(auth, provider);


export const db = getFirestore(app);
const analytics = getAnalytics(app);