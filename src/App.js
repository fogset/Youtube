import React, { Fragment, useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import VideoScreen from "./pages/VideoScreen";
import styled, { ThemeProvider } from "styled-components";
// import DevDesk from "image/youtube.jpg";
import { darkTheme, lightTheme } from "./utils/Theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <BrowserRouter>
                    <Header_Container>
                        <Header />
                    </Header_Container>
                    <Main>
                        <Sidebar_Container>
                            <Sidebar
                                darkMode={darkMode}
                                setDarkMode={setDarkMode}
                            />
                        </Sidebar_Container>
                        <Wrapper>
                            <Routes>
                                <Route path="/">
                                    <Route index element={<Home />} />
                                    <Route path="video">
                                        <Route
                                            path=":id"
                                            element={<VideoScreen />}
                                        />
                                    </Route>
                                </Route>
                                <Route
                                    path="/about"
                                    element={<About />}
                                ></Route>
                            </Routes>
                        </Wrapper>
                    </Main>
                </BrowserRouter>
            </Container>
        </ThemeProvider>
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
`;
