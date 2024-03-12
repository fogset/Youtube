import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "../components/Header/Header";
import React, { useEffect } from "react";

import About from "./Test/About";
import VideoDetail from "./VideoDetail";
import About2 from "./Test/About2";
import Test from "./Test/Test";
import { useRecoilState } from "recoil";
import { currentUrlRecoil } from "../state";
import ChannelVideos from "../components/Channel/ChannelVideos";
import ChannelFeatured from "../components/Channel/ChannelFeatured";
import ChannelShorts from "../components/Channel/ChannelShorts";
import ChannelPlaylists from "./../components/Channel/ChannelPlaylists";
import ChannelCommunity from "../components/Channel/ChannelCommunity";
import ChannelHeader from "../components/Channel/ChannelHeader";

function Main() {
    const [currentUrl, setCurrentUrl] = useRecoilState(currentUrlRecoil);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (
            pathname.includes("video") ||
            pathname.includes("channel") ||
            pathname === "/"
        ) {
            setCurrentUrl("home");
        }
    }, [pathname]);

    return (
        <div>
            {currentUrl === "home" && <Header />}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/video/:videoId" element={<VideoDetail />}></Route>

                <Route
                    path="/:channelId/featured"
                    element={<ChannelFeatured />}
                />
                <Route path="/:channelId/videos" element={<ChannelVideos />} />
                <Route path="/:channelId/shorts" element={<ChannelShorts />} />
                <Route
                    path="/:channelId/playlists"
                    element={<ChannelPlaylists />}
                />
                <Route
                    path="/:channelId/community"
                    element={<ChannelCommunity />}
                />

                <Route path="/about" element={<About />}></Route>
                <Route path="/about2" element={<About2 />}></Route>
                <Route path="/test" element={<Test />}></Route>
            </Routes>
        </div>
    );
}
// {
//     admin === false && <Header />;
// }
export default Main;
