import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "./firestore";
import { useRecoilState } from "recoil";
import {
    recoilChannelList,
    totalVideoRecoil,
    page1Recoil,
    page2Recoil,
    page3Recoil,
    HomePageVideoRecoil,
    RecommendVideoRecoilTotal,
    Post_TotalRecoil,
    Comments_TotalRecoil,
    Shorts_TotalRecoil,
    Subscribed_ChannelRecoil,
    Watch_HistoryRecoil,
} from "./state";
import Main from "./pages/Main";
import AdminRoute from "./components/Admin/AdminRoute";

function App() {
    const [channels, setChannels] = useRecoilState(recoilChannelList);
    const [HomePageVideo, setHomePageVideo] =
        useRecoilState(HomePageVideoRecoil);
    const [page1, setPage1] = useRecoilState(page1Recoil);
    const [page2, setPage2] = useRecoilState(page2Recoil);
    const [page3, setPage3] = useRecoilState(page3Recoil);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [currentRecommendVideo, setCurrentRecommendVideo] = useRecoilState(
        RecommendVideoRecoilTotal
    );
    const [post_Total, setPost_Total] = useRecoilState(Post_TotalRecoil);
    const [comments_Total, setComments_Total] =
        useRecoilState(Comments_TotalRecoil);
    const [shorts_Total, setShorts_Total] = useRecoilState(Shorts_TotalRecoil);
    const [Sub_Channel, setSub_Channel] = useRecoilState(
        Subscribed_ChannelRecoil
    );
    const [history, setHistory] = useRecoilState(Watch_HistoryRecoil);

    const getFirebaseData = async (setData, currentPage) => {
        const querySnapshot = await getDocs(collection(db, currentPage));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(snapshot);
    };
    function getData() {
        getFirebaseData(setPage1, "page1");
        getFirebaseData(setPage2, "page2");
        getFirebaseData(setPage3, "page3");
        getFirebaseData(setChannels, "channels");
        getFirebaseData(setTotalVideo, "videos");
        getFirebaseData(setCurrentRecommendVideo, "recommendVideo");
        getFirebaseData(setPost_Total, "posts");
        getFirebaseData(setComments_Total, "comments");
        getFirebaseData(setShorts_Total, "shorts");
        getFirebaseData(setSub_Channel, "subscribedChannel");
        getFirebaseData(setHistory, "watchHistory");
    }
    function SwitchHomePageVideo() {
        if (localStorage.getItem("currentPage") === null) {
            localStorage.setItem("currentPage", 1);
        } else {
            var current = Number(localStorage.getItem("currentPage"));
            localStorage.setItem("currentPage", current + 1);
        }
        if (localStorage.getItem("currentPage") > 3) {
            localStorage.setItem("currentPage", 1);
        }
    }
    function SetHomeVideoToPage() {
        var currentPageStorage = localStorage.getItem("currentPage");
        if (currentPageStorage === "1") {
            setHomePageVideo(page1);
        } else if (currentPageStorage === "2") {
            setHomePageVideo(page2);
        } else if (currentPageStorage === "3") {
            setHomePageVideo(page3);
        }
    }
    useEffect(() => {
        getData();
        SwitchHomePageVideo();
    }, []);

    useEffect(() => {
        SetHomeVideoToPage();
    });
    // useEffect(() => {
    //     console.log("history");
    //     console.log(history);
    // }, [history]);

    return (
        <Container>
            {HomePageVideo !== null && <Main />}
            {page1 !== null && (
                <AdminRoute page1={page1} page2={page2} page3={page3} />
            )}
        </Container>
    );
}

export default App;
//<Main HomePageVideo={HomePageVideo} />

const Container = styled.div``;
//  useEffect(() => {
//      console.log("page1");
//      console.log(page1);
//      console.log("page2");
//      console.log(page2);
//      console.log("page3");
//      console.log(page3);
//      console.log("channel");
//      console.log(channels);
//      console.log("totalvideo");
//      console.log(totalVideo);
//      console.log("currentRecommendVideo");
//      console.log(currentRecommendVideo);
//      console.log("Sub_Channel");
//      console.log(Sub_Channel);
//  }, [
//      page3,
//      page1,
//      page2,
//      channels,
//      totalVideo,
//      currentRecommendVideo,
//      Sub_Channel,
//  ]);
