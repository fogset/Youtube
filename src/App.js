import React, { Fragment } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoScreen from "./screens/homeScreen/VideoScreen";
import styled from "styled-components";

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
    background-color: lightblue;
    height: 10%;
    position: fixed;
    width: 100%;
    font-size: large;
`;
const Sidebar_Container = styled.div`
    background-color: #100e0e;
    height: 100%;
    width: 10%;
    font-size: large;
    color: white;
`;
const Video_Container = styled.div`
    background-color: green;
    width: 100%;
`;
function App() {
    return (
        <Container>
            <Header_Container>
                <Header />
            </Header_Container>
            <Main>
                <Sidebar_Container>
                    <Sidebar />
                </Sidebar_Container>
                <Video_Container>
                    <VideoScreen />
                </Video_Container>
            </Main>
        </Container>
    );
}

export default App;
