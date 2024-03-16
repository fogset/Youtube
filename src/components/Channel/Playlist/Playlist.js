import React, { useState, useEffect } from "react";
import PlaylistVideoDetail from "./PlaylistVideoDetail";
import PlaylistSidebar from "./PlaylistSidebar";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { totalVideoRecoil } from "./../../../state";
function Playlist() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const params = useParams();
    const videoId = params.videoId;
    useEffect(() => {
        if (totalVideo !== null) {
            for (let i = 0; i < totalVideo.length; i++) {
                if (totalVideo[i].id === videoId) {
                    setCurrentVideo(totalVideo[i]);
                }
            }
        }
    }, [totalVideo]);
    return (
        <Cotainer>
            <PlayListVideoDetailContainer>
                <PlaylistVideoDetail currentVideo={currentVideo} />
            </PlayListVideoDetailContainer>
            <SidebarContainer>
                <PlaylistSidebar setCurrentVideo={setCurrentVideo} />
            </SidebarContainer>
        </Cotainer>
    );
}

export default Playlist;
const SidebarContainer = styled.div`
    position: relative;
`;
const PlayListVideoDetailContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`;
const Cotainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
