import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoScreen from "./VideoScreen";
import About from "./About";

function Main({ currentPage }) {
    return (
        <div>
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
