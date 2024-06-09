import { arrayUnion, updateDoc, doc } from "firebase/firestore";
import { db } from "./../../firestore";

export const updateMessagebyId = async (newMessage) => {
    const messageRef = doc(db, "liveChat", "nDKDQxiq5GEnkWST9cL0");
    await updateDoc(messageRef, {
        chat: arrayUnion(newMessage),
    });
    console.log("updateMessagebyId ID: ", messageRef.id);
};
export const updateContactbyEmail = async (email, contact) => {
    const contactRef = doc(db, "users", email);
    await updateDoc(contactRef, {
        contact: arrayUnion(contact),
    });
    console.log("addContact firebase");
    console.log(contact);
};
