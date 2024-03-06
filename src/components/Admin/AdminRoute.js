import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Upload from "../Upload/Upload";
import Channel from "../../pages/Channel";
import CreateChannel from "../../pages/CreateChannel";
import Admin from "./Admin";
import AdminSideBar from "./AdminSideBar";
import styled from "styled-components";

function AdminRoute({ page1, page2, page3 }) {
    const [home, setHome] = useState(false);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (pathname === "/") {
            setHome(true);
        }
    }, [pathname]);
    return (
        <div>
            {home === false && <AdminSideBar />}
            {home === false && (
                <AdminPage>
                    <Routes>
                        <Route path="/upload" element={<Upload />}></Route>
                        <Route
                            path="/createchannel"
                            element={<CreateChannel />}
                        ></Route>
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
                    </Routes>
                </AdminPage>
            )}
        </div>
    );
}

export default AdminRoute;
const AdminPage = styled.div`
    position: fixed;
    left: 190px;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    margin-left: 1%;
`;
