import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Upload from "../Upload/Upload";
import Channel from "../../pages/Channel";
import CreateChannel from "../../pages/CreateChannel";
import Admin from "./Admin";
function AdminRoute({ page1, page2, page3 }) {
    return (
        <div>
            <Routes>
                <Route path="/about" element={<About />}></Route>
                <Route path="/upload" element={<Upload />}></Route>
                <Route path="/channel" element={<Channel />}></Route>
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
            </Routes>
        </div>
    );
}

export default AdminRoute;
