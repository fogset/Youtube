import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function PlaylistVideoListSidebar({ currentVideoDetail, index }) {
    const params = useParams();
    const playListUrl = `/${currentVideoDetail.channelId}/playlists/${currentVideoDetail.playlist}/${currentVideoDetail.id}`;
    const titleStringLength = currentVideoDetail.title.length;

    useEffect(() => {
        console.log("key");
        console.log(index);
    }, [index]);
    return (
        <Link to={playListUrl} style={{ textDecoration: "none" }}>
            <Container>
                <VideoIndex>{index + 1}</VideoIndex>
                <ReactPlayer
                    url={currentVideoDetail.video}
                    width="150px"
                    height="90px"
                    light={true}
                    playIcon={true}
                />
                <Details>
                    <Title>
                        {currentVideoDetail.title.substring(0, 30)}
                        {titleStringLength > 32 && "..."}
                    </Title>
                    <ChannelName>{currentVideoDetail.channelId}</ChannelName>
                    <Info>
                        {currentVideoDetail.view} views .{" "}
                        {currentVideoDetail.day} day ago
                    </Info>
                </Details>
            </Container>
        </Link>
    );
}

export default PlaylistVideoListSidebar;
const Container = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    color: black;
`;

const Details = styled.div`
    margin-left: 10px;
    position: relative;
    width: 220px;
`;
const VideoIndex = styled.div`
    margin-top: 37px;
    position: relative;
    font-size: large;
    align-items: center;
    width: 20px;
`;

const Title = styled.h1`
    position: absolute;
    font-size: 14px;
    font-weight: 600;
    top: -10px;
`;
const ChannelName = styled.h2`
    position: absolute;
    font-size: 15px;
    font-weight: 500;
    top: 35px;
    color: grey;
`;
const Info = styled.div`
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    top: 70px;
`;
