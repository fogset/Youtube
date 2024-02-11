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

function App() {
    const [users, setUsers] = useState(null);
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
    }, []);
    useEffect(() => {
        console.log("users");
        console.log(users);
    }, [users]);
    return (
        <Container>
            <Header_Container>
                <Header />
            </Header_Container>
            <Main>
                <Sidebar_Container>
                    <Sidebar />
                </Sidebar_Container>
                <Wrapper>
                    <Routes>
                        {users !== null && (
                            <Route path="/">
                                <Route index element={<Home users={users} />} />
                                <Route path="video">
                                    <Route
                                        path=":id"
                                        element={<VideoScreen users={users} />}
                                    />
                                </Route>
                            </Route>
                        )}
                        <Route path="/about" element={<About />}></Route>
                        <Route path="/upload" element={<Upload />}></Route>
                    </Routes>
                </Wrapper>
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
