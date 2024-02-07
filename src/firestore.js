// import firebase from "firebase/app";
// import "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCD1VokWBY0Yos_GRmDMvFVd4vsSnZ27uI",
    authDomain: "yt-clone3245.firebaseapp.com",
    projectId: "yt-clone3245",
    storageBucket: "yt-clone3245.appspot.com",
    messagingSenderId: "981104556444",
    appId: "1:981104556444:web:ce08e6fb06977a6e85f059",
    measurementId: "G-16RJ854X9S",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
