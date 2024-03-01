import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoScreen from "./VideoScreen";
import Header from "../components/Header/Header";
import React, { useState, useEffect } from "react";

function Main({ currentPage }) {
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
                <Route path="/">
                    <Route index element={<Home currentPage={currentPage} />} />
                    <Route path="video">
                        <Route
                            path=":id"
                            element={<VideoScreen currentPage={currentPage} />}
                        />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default Main;
