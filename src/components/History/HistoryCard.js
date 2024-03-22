import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
function HistoryCard({ currentVideoDetail }) {
    const videoUrl = `/video/${currentVideoDetail.id}`;
    return (
        <LinkVideo to={videoUrl}>
            <Container>
                <ReactPlayer
                    url={currentVideoDetail.videoUrl}
                    width="200px"
                    height="100px"
                    light={true}
                    playIcon={true}
                />
                <VideoDetail>
                    <VideoTitle>
                        {currentVideoDetail.title.substring(0, 50)}
                    </VideoTitle>
                    <Details>
                        <ChannelName>
                            {currentVideoDetail.channel_Title}
                        </ChannelName>
                        <VideoView>{currentVideoDetail.view}</VideoView>
                    </Details>
                    <Description>
                        {currentVideoDetail.description.substring(0, 120)}
                    </Description>
                </VideoDetail>
            </Container>
        </LinkVideo>
    );
}

export default HistoryCard;
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
    font-size: 14px;
    font-weight: 600;
    width: 70%;
`;
const ChannelName = styled.div`
    font-size: 10px;
    font-weight: 500;
`;
const VideoView = styled.div`
    font-size: 10px;
    margin-left: 10px;
`;

const Details = styled.div`
    display: flex;
    height: 20px;
    width: 200px;
    position: absolute;
    top: 42px;
`;
const VideoDetail = styled.div`
    position: relative;
    margin-left: 10px;
`;
const Description = styled.div`
    position: absolute;
    font-size: 11px;
    bottom: 5px;
    width: 90%;
    color: grey;
`;
const LinkVideo = styled(Link)`
    text-decoration: none;
`;
