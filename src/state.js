import { atom, selector } from "recoil";

export const currentVideoRecoil = atom({
    key: "currentVideoRecoil",
    default: null,
});
export const recoilPageIndex = atom({
    key: "recoilPageIndex",
    default: null,
});
export const recoilChannelList = atom({
    key: "recoilChannelList",
    default: null,
});
export const currentChannelRecoil = atom({
    key: "currentChannelRecoil",
    default: null,
});
export const totalVideoRecoil = atom({
    key: "totalVideoRecoil",
    default: null,
});
