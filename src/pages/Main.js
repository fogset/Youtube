import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import VideoScreen from "./VideoScreen";
import Header from "../components/Header/Header";

function Main({ currentPage }) {
    return (
        <div>
            <Header />
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
