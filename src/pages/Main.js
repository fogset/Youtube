import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoScreen from "./VideoScreen";
import Header from "../components/Header/Header";
import React, { useState, useEffect } from "react";
import Channel from "./Channel";
import About from "./Test/About";
import VideoDetail from "./VideoDetail";
import About2 from "./Test/About2";
import Test from "./Test/Test";

function Main() {
    const [admin, setAdmin] = useState(false);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (pathname === "/admin") {
            setAdmin(true);
        }
    }, [pathname]);

    return (
        <div>
            {admin === false && <Header />}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/video/:videoId" element={<VideoDetail />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/about2" element={<About2 />}></Route>
                <Route path="/test" element={<Test />}></Route>
            </Routes>
        </div>
    );
}

export default Main;
