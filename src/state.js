import { atom, selector } from "recoil";

export const recoilUserIndex = atom({
    key: "recoilUserIndex",
    default: "",
});
export const recoilPageIndex = atom({
    key: "recoilPageIndex",
    default: null,
});
