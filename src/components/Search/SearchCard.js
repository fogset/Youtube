import styled from "styled-components";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
function SearchCard({ searchResult }) {
    //const videoUrl = `/video/${currentVideoDetail.id}`;
    return (
        <LinkVideo>
            <Container>
                <VideoDetail>
                    <Details></Details>
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
    width: 300px;
    height: fit-content;

    color: grey;
`;
const LinkVideo = styled(Link)`
    text-decoration: none;
`;
