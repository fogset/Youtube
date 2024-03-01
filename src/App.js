import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoScreen from "./pages/VideoScreen";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Upload from "./components/Upload/Upload";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "./firestore";
import Admin from "./components/Admin/Admin";
import { useRecoilState } from "recoil";
import { recoilChannelList, totalVideoRecoil, page1Recoil } from "./state";
import Channel from "./pages/Channel";
import CreateChannel from "./pages/CreateChannel";

function App() {
    const [channels, setChannels] = useRecoilState(recoilChannelList);
    const [currentPage, setCurrentPage] = useState(null);
    const [page1, setPage1] = useRecoilState(page1Recoil);
    const [page2, setPage2] = useState(null);
    const [page3, setPage3] = useState(null);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);

    const getPage1 = async () => {
        const querySnapshot = await getDocs(collection(db, "page1"));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPage1(snapshot);
        //setCurrentPage(snapshot);
    };
    const getPage2 = async () => {
        const querySnapshot = await getDocs(collection(db, "page2"));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPage2(snapshot);
    };
    const getPage3 = async () => {
        const querySnapshot = await getDocs(collection(db, "page3"));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPage3(snapshot);
    };
    const getChannels = async () => {
        const querySnapshot = await getDocs(collection(db, "channels"));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setChannels(snapshot);
    };
    const getTotalVideo = async () => {
        const querySnapshot = await getDocs(collection(db, "videos"));
        const snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setTotalVideo(snapshot);
    };

    useEffect(() => {
        getPage1();
        getPage2();
        getPage3();
        getChannels();
        getTotalVideo();
    }, []);
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

    useEffect(() => {
        //localStorage.clear();
        if (localStorage.getItem("currentPage") === null) {
            localStorage.setItem("currentPage", 1);
        } else {
            var current = Number(localStorage.getItem("currentPage"));
            localStorage.setItem("currentPage", current + 1);
        }
        if (localStorage.getItem("currentPage") > 3) {
            localStorage.setItem("currentPage", 1);
        }
        //console.log("firstload");
        //console.log(localStorage.getItem("currentPage"));
    }, []);

    useEffect(() => {
        var currentPageStorage = localStorage.getItem("currentPage");
        if (currentPageStorage === "1") {
            setCurrentPage(page1);
        } else if (currentPageStorage === "2") {
            setCurrentPage(page2);
        } else if (currentPageStorage === "3") {
            setCurrentPage(page3);
        }
        //console.log("currentPage");
        //console.log(currentPage);
    }, [page3, page1, page2]);
    return (
        <Container>
            <Header />
            <Sidebar />
            <Main>
                <Routes>
                    {currentPage !== null && (
                        <Route path="/">
                            <Route
                                index
                                element={<Home users={currentPage} />}
                            />
                            <Route path="video">
                                <Route
                                    path=":id"
                                    element={
                                        <VideoScreen users={currentPage} />
                                    }
                                />
                            </Route>
                        </Route>
                    )}
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/upload" element={<Upload />}></Route>
                    <Route path="/channel" element={<Channel />}></Route>
                    <Route
                        path="/createchannel"
                        element={<CreateChannel />}
                    ></Route>
                    {page1 !== null && (
                        <Route
                            path="/admin"
                            element={
                                <Admin
                                    page1={page1}
                                    page2={page2}
                                    page3={page3}
                                />
                            }
                        ></Route>
                    )}
                </Routes>
            </Main>
        </Container>
    );
}

export default App;

const Container = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
`;

const Main = styled.div`
    top: 10%;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 10%;
    display: flex;
    background-color: white;
`;

const Wrapper = styled.div`
    /* padding: 22px 96px; */
    overflow-x: hidden;
    overflow-y: auto;
    height: 500px;
    width: 85%;
    background-color: blue;
    position: absolute;
    left: 15%;
    top: 50px;
`;
