import React from "react";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
import Playlist from "./Playlist/Playlist";
import styled from "styled-components";
function ChannelPlaylists() {
    return (
        <div>
            <ChannelSidebar />
            <PlaylistContainer>
                <ChannelHeader />
                <HorizontalLine />
                <Title>For You</Title>
            </PlaylistContainer>
        </div>
    );
}

export default ChannelPlaylists;

const PlaylistContainer = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 93%;
`;
const HorizontalLine = styled.div`
    height: 1px;
    background-color: #b3b9c4;
    border: none;
`;
const Title = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    font-size: 22px;
    font-weight: 600;
`;
