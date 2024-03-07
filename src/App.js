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

    const getCurrentPage = async (setData, currentPage) => {
        const querySnapshot = await getDocs(collection(db, currentPage));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setData(snapshot);
    };
    function getData() {
        getCurrentPage(setPage1, "page1");
        getCurrentPage(setPage2, "page2");
        getCurrentPage(setPage3, "page3");
        getCurrentPage(setChannels, "channels");
        getCurrentPage(setTotalVideo, "videos");
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
const Test = styled.div`
    top: 1%;
    left: 180px;
    color: red;
    position: absolute;
    z-index: 100;
    font-size: 40px;
`;
const Container = styled.div``;
// useEffect(() => {
//     console.log("page1");
//     console.log(page1);
//     console.log("page2");
//     console.log(page2);
//     console.log("page3");
//     console.log(page3);
//     console.log("channel");
//     console.log(channels);
//     console.log("totalvideo");
//     console.log(totalVideo);
// }, [page3, page1, page2, channels, totalVideo]);
