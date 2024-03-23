import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AiFillDelete } from "react-icons/ai";
import { DeleteCurrentVideo } from "../Firebase/Delete";

function PageCard({ currentPage, currentVideoDetail }) {
    const videoId = `/video/${currentVideoDetail.id}`;
    const channelId = `/${currentVideoDetail.channelId}/featured`;
    function onMouseDown() {
        //alert(currentVideoDetail.title);
    }
    function DeleteVideo() {
        var video_ID = currentVideoDetail.id;
        DeleteCurrentVideo(currentPage, video_ID);
    }
    const titleStringLength = currentVideoDetail.title.length;
    return (
        <Container>
            <LinkVideo to={videoId} onMouseDown={onMouseDown}>
                <VideoContainer>
                    <ReactPlayer
                        url={currentVideoDetail.video}
                        width="100%"
                        height="202px"
                        light={true}
                        playIcon={true}
                    />
                </VideoContainer>
            </LinkVideo>
            <DeleteIcon onClick={DeleteVideo}>
                <AiFillDelete size={30} />
            </DeleteIcon>
            <LinkChannel to={channelId}>
                <Details>
                    <ChannelImage src={currentVideoDetail.channelImg} />
                    <Texts>
                        <Title>
                            {currentVideoDetail.title.substring(0, 32)}
                            {titleStringLength > 32 && "..."}
                        </Title>
                        <ChannelName>
                            {currentVideoDetail.channel_Title}
                        </ChannelName>
                        <Info>
                            {currentVideoDetail.view} views .{" "}
                            {currentVideoDetail.date} ago
                        </Info>
                    </Texts>
                </Details>
            </LinkChannel>
        </Container>
    );
}

export default PageCard;
const Container = styled.div`
    width: 360px;
    margin-bottom: 35px;
    cursor: pointer;
    position: relative;
`;
const VideoContainer = styled.div`
    height: 202px;
    width: 100%;
`;

const DeleteIcon = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    color: lightcoral;
    z-index: 100;
`;
const Details = styled.div`
    display: flex;
`;
const ChannelImage = styled.img`
    margin-top: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;
const Texts = styled.div`
    margin-left: 15px;
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;
const LinkChannel = styled(Link)`
    text-decoration: none;
`;
const LinkVideo = styled(Link)`
    text-decoration: none;
`;
