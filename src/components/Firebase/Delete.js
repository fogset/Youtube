import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./../../firestore";
export const DeleteCurrentVideo = async (currentPage, videoId) => {
    const docRef = doc(db, currentPage, videoId);
    deleteDoc(docRef)
        .then(() => {
            console.log("Entire Document has been deleted successfully.");
        })
        .catch((error) => {
            console.log(error);
        });
};
