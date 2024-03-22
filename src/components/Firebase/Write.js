import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firestore";
export const AddVideoToHistory = async (currentVideo) => {
    try {
        const docRef = await addDoc(collection(db, "watchHistory"), {
            id: currentVideo.id,
            title: currentVideo.title,
            view: currentVideo.view,
            description: currentVideo.description,
            channel_Title: currentVideo.channel_Title,
        });
    } catch (error) {
        console.log(error);
    }
};
