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
import Playlist from "../components/Channel/Playlist/Playlist";
import Post from "../components/Channel/CommunityPost/Post";
import ShortDetail from "../components/Channel/Short/ShortDetail";
import History from "../components/History/History";
import Search from "../components/Search/Search";

function Main() {
    const [currentUrl, setCurrentUrl] = useRecoilState(currentUrlRecoil);
    const pathname = window.location.pathname;
    useEffect(() => {
        if (
            pathname === "/upload" ||
            pathname === "/createchannel" ||
            pathname === "/admin" ||
            pathname === "/recommendVideo" ||
            pathname === "/commentsGenerator"
        ) {
            setCurrentUrl("admin");
        }
    }, [pathname]);

    return (
        <div>
            {currentUrl !== "admin" && <Header />}
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/video/:videoId" element={<VideoDetail />}></Route>
                <Route path="/:channelId/featured" element={<ChannelFeatured />} />
                <Route path="/:channelId/videos" element={<ChannelVideos />} />
                <Route path="/:channelId/shorts" element={<ChannelShorts />} />
                <Route path="/:channelId/playlists" element={<ChannelPlaylists />} />
                <Route path="/:channelId/community" element={<ChannelCommunity />} />
                <Route
                    path="/:channelId/playlists/:playlistName/:videoId"
                    element={<Playlist />}
                ></Route>
                <Route path="/post/:postId" element={<Post />}></Route>
                <Route path="/shorts/:shortId" element={<ShortDetail />}></Route>
                <Route path="/feed/history" element={<History />}></Route>
                <Route path="/search/:searchResult" element={<Search />}></Route>
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
