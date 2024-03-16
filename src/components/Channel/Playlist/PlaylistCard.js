import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { LuListVideo } from "react-icons/lu";
function PlaylistCard({ currentPlaylist, channelId }) {
    const playlistUrl = `/${channelId}/playlists/${currentPlaylist.name}`;
    return (
        <Link to={playlistUrl} style={{ textDecoration: "none" }}>
            <Container>
                <VideoCountContainer>
                    <IconContainer>
                        <LuListVideo size={20} />
                    </IconContainer>
                    <VideoCountText>
                        {currentPlaylist.videoCount} videos
                    </VideoCountText>
                </VideoCountContainer>
                <ReactPlayer
                    url={currentPlaylist.video}
                    width="100%"
                    height="180px"
                    light={true}
                    playIcon={true}
                />
                <Title>{currentPlaylist.name}</Title>
            </Container>
        </Link>
    );
}

export default PlaylistCard;
const Container = styled.div`
    width: 300px;
    cursor: pointer;
    position: relative;
    margin-left: 10px;
`;

const LinkChannel = styled(Link)`
    text-decoration: none;
`;
const VideoCountContainer = styled.div`
    position: absolute;
    right: 5px;
    bottom: 50px;
    background-color: #1b1d21;
    color: white;
    display: flex;
    z-index: 10;
    opacity: 0.7;
    width: 115px;
    height: 25px;
`;
const VideoCountText = styled.div`
    padding-left: 3px;
    font-size: 20px;
`;
const IconContainer = styled.div`
    padding-top: 1px;
    padding-left: 3px;
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: black;
`;
