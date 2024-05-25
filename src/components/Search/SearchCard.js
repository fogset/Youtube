import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
function SearchCard({ currentSearchRes }) {
    const videoDetail = currentSearchRes.snippet;
    var videoUrl = null;
    const searchId = currentSearchRes.id;

    if (searchId.kind === "youtube#video") {
        videoUrl = `https://www.youtube.com/watch?v=${searchId.videoId}`;
    } else if (searchId.kind === "youtube#playlist") {
        videoUrl = `https://www.youtube.com/watch?list=${searchId.playlistId}`;
    }
    return (
        <LinkVideo to={videoUrl}>
            <Container>
                <VideoImg src={videoDetail.thumbnails.high.url} />
                <VideoDetail>
                    <VideoTitle>{videoDetail.title.substring(0, 100)}</VideoTitle>
                    <Details>
                        <ChannelName>{videoDetail.channelTitle}</ChannelName>
                    </Details>

                    <Description>{videoDetail.description.substring(0, 120)}</Description>
                </VideoDetail>
            </Container>
        </LinkVideo>
    );
}

export default SearchCard;
const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    color: black;
    &:hover {
        background-color: #dcdcdc;
    }
    margin-bottom: 15px;
`;
const VideoTitle = styled.div`
    font-size: 18px;
    font-weight: 600;
    width: 70%;
`;
const ChannelName = styled.div`
    font-size: 15px;
    font-weight: 500;
`;
const VideoView = styled.div`
    font-size: 10px;
    margin-left: 10px;
`;
const VideoImg = styled.img`
    width: 400px;
    height: 250px;
    border-radius: 10px;
`;
const Details = styled.div`
    display: flex;
    height: 20px;
    width: 200px;
    position: absolute;
    top: 42px;
    margin-top: 15px;
`;
const VideoDetail = styled.div`
    position: relative;
    margin-left: 15px;
`;
const Description = styled.div`
    position: absolute;
    font-size: 15px;
    bottom: 20%;
    width: 70%;
    height: fit-content;
    color: #60606f;
`;
const LinkVideo = styled(Link)`
    text-decoration: none;
`;
