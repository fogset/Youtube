import { doc, collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "./../../firestore";

export const GetUserByEmail = async (email) => {
    const docRef = doc(db, "ghostGamers", email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const data = docSnap.data();
        localStorage.setItem("LoginUser", JSON.stringify(data));
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
};
