import { atom, selector } from "recoil";


export const currentVideoRecoil = atom({
    key: "currentVideoRecoil",
    default: null,
});
export const currentUrlRecoil = atom({
    key: "currentUrlRecoil",
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
export const page1Recoil = atom({
    key: "page1Recoil",
    default: null,
});
export const page2Recoil = atom({
    key: "page2Recoil",
    default: null,
});
export const page3Recoil = atom({
    key: "page3Recoil",
    default: null,
});
export const modalTotalVideoRecoil = atom({
    key: "modalTotalVideoRecoil",
    default: [],
});
export const addedModalVideoRecoil = atom({
    key: "addedModalVideoRecoil",
    default: [],
});
export const testRecoil = atom({
    key: "testRecoil",
    default: 0,
});
export const HomePageVideoRecoil = atom({
    key: "HomePageVideoRecoil",
    default: null,
});
export const RecommendVideoRecoil1 = atom({
    key: "RecommendVideoRecoil1",
    default: [],
});
export const RecommendVideoRecoil2 = atom({
    key: "RecommendVideoRecoil2",
    default: [],
});
export const RecommendVideoRecoil3 = atom({
    key: "RecommendVideoRecoil3",
    default: [],
});

export const RecommendVideoRecoilTotal = atom({
    key: "RecommendVideoRecoilTotal",
    default: [],
});

export const Post_TotalRecoil = atom({
    key: "Post_TotalRecoil",
    default: [],
});

export const Comments_TotalRecoil = atom({
    key: "Comments_TotalRecoil",
    default: [],
});

export const Shorts_TotalRecoil = atom({
    key: "Shorts_TotalRecoil",
    default: [],
});
export const Subscribed_ChannelRecoil = atom({
    key: "Subscribed_ChannelRecoil",
    default: [],
});
export const Watch_HistoryRecoil = atom({
    key: "Watch_HistoryRecoil",
    default: [],
});
