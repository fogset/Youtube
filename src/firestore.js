import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCD1VokWBY0Yos_GRmDMvFVd4vsSnZ27uI",
    authDomain: "yt-clone3245.firebaseapp.com",
    projectId: "yt-clone3245",
    storageBucket: "yt-clone3245.appspot.com",
    messagingSenderId: "981104556444",
    appId: "1:981104556444:web:ce08e6fb06977a6e85f059",
    measurementId: "G-16RJ854X9S",
};
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
