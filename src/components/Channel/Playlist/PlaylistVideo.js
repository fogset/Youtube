import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

function PlaylistVideo({ currentVideoDetail }) {
    const params = useParams();
    const videoUrl = `/video/${currentVideoDetail.id}`;
    const titleStringLength = currentVideoDetail.title.length;
    return (
        <Link to={videoUrl} style={{ textDecoration: "none" }}>
            <Container>
                <ReactPlayer
                    url={currentVideoDetail.video}
                    width="150px"
                    height="90px"
                    light={true}
                    playIcon={true}
                />
                <Details>
                    <Title>
                        {currentVideoDetail.title.substring(0, 45)}
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

export default PlaylistVideo;
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
