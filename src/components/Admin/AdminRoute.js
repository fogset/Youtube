import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Upload from "../Upload/Upload";
import CreateChannel from "../../pages/CreateChannel";
import Admin from "./Admin";
import AdminSideBar from "./AdminSideBar";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { currentUrlRecoil } from "../../state";
import RecommendVideo from "./RecommendVideo";
import CommentsGengerator from "../Comments/CommentsGengerator";

function AdminRoute({ page1, page2, page3 }) {
    const [currentUrl, setCurrentUrl] = useRecoilState(currentUrlRecoil);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (
            pathname === "/" ||
            pathname === "/createchannel" ||
            pathname === "/admin"
        ) {
            setCurrentUrl("admin");
        }
    }, [pathname]);
    return (
        <div>
            {currentUrl === "admin" && <AdminSideBar />}
            <Routes>
                <Route path="/upload" element={<Upload />}></Route>
                <Route
                    path="/createchannel"
                    element={<CreateChannel />}
                ></Route>
                <Route
                    path="/admin"
                    element={
                        <Admin page1={page1} page2={page2} page3={page3} />
                    }
                ></Route>
                <Route
                    path="/recommendVideo"
                    element={<RecommendVideo />}
                ></Route>
                <Route
                    path="/commentsGenerator"
                    element={<CommentsGengerator />}
                ></Route>
            </Routes>
        </div>
    );
}
// {home === false && <AdminSideBar />}
export default AdminRoute;
const AdminPage = styled.div`
    /* position: fixed;
    left: 190px;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: 1%; */
`;
