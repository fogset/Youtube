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
import { recoilPageIndex } from "./state";

function App() {
    const [recoilpageIndex, setRecoilPageIndex] =
        useRecoilState(recoilPageIndex);
    const [currentPage, setCurrentPage] = useState(0);
    const [page1, setPage1] = useState(null);
    const [page2, setPage2] = useState(null);

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        //setUsers(users);
    };
    const getPage1 = async () => {
        const querySnapshot = await getDocs(collection(db, "page1"));
        const page1Snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPage1(page1Snapshot);
    };
    const getPage2 = async () => {
        const querySnapshot = await getDocs(collection(db, "page2"));
        const page2Snapshot = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPage2(page2Snapshot);
    };
    useEffect(() => {
        console.log("------page1");
        console.log(page1);
        // setPage1(recoilpageIndex);
    }, [page1]);
    useEffect(() => {
        getPage1();
        getUsers();
        getPage2();
        //console.log("---------------------------");
    }, []);
    // useEffect(() => {
    //     console.log("users");
    //     console.log(users);
    //     console.log("page1");
    //     console.log(page1);
    //     console.log("page2");
    //     console.log(page2);
    // }, [users, page1, page2]);
    function changePage() {
        alert("app");
        setUsers("change state");
        console.log("users----------------");
        alert("sdkfjsdl;fkjsdlfksjflksdjf");
        alert(users);
    }
    return (
        <Container>
            <Header_Container>
                <Header />
            </Header_Container>
            <Main>
                <Sidebar_Container>
                    <Sidebar />
                    <h2>{users} </h2>
                    <Button onClick={changePage}>page 1</Button>
                </Sidebar_Container>
                <Wrapper>
                    <Routes>
                        {page1 !== null && (
                            <Route path="/">
                                <Route index element={<Home users={page1} />} />
                                <Route path="video">
                                    <Route
                                        path=":id"
                                        element={<VideoScreen users={page1} />}
                                    />
                                </Route>
                            </Route>
                        )}
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/upload" element={<Upload />}></Route>
                        {page1 !== null && (
                            <Route
                                path="/admin"
                                element={
                                    <Admin
                                        changeState={changePage}
                                        page1={page1}
                                        page2={page2}
                                    />
                                }
                            ></Route>
                        )}
                    </Routes>
                </Wrapper>
            </Main>
        </Container>
    );
}

export default App;
const Button = styled.div`
    margin-left: 5px;
    height: 30px;
    width: 70px;
    background-color: pink;
    color: red;
    font-size: larger;
`;
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
    display: flex;
`;
const Header_Container = styled.div`
    background-color: white;
    height: 56px;
    position: fixed;
    width: 100%;
    font-size: large;
`;
const Sidebar_Container = styled.div`
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    height: 100%;
    width: 10%;
    font-size: large;
`;
const Video_Container = styled.div`
    background-color: ${({ theme }) => theme.bg};
    width: 100%;
`;
const Wrapper = styled.div`
    /* padding: 22px 96px; */
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    background-color: antiquewhite;
`;
