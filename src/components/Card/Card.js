import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentVideoRecoil, currentChannelRecoil } from "../../state";
import ReactPlayer from "react-player";
function Card({ type, user }) {
    const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoRecoil);
    const [currentChannel, setCurrentChannel] =
        useRecoilState(currentChannelRecoil);
    const params = useParams();
    const videoId = `/video/${user.id}`;
    const channelId = `/channel`;
    console.log(params);
    const [play, setPlay] = useState(false);
    const [light, setLight] = useState(false);
    function Enter() {
        setPlay(true);
    }
    function Out() {
        setPlay(false);
    }
    function currentVideoClicked() {
        setCurrentVideo(user);
        setLight(true);
        setPlay(false);
    }
    return (
        <Link
            to={videoId}
            style={{ textDecoration: "none" }}
            onClick={currentVideoClicked}
        >
            <Container type={type} onMouseEnter={Enter} onMouseOut={Out}>
                <ReactPlayer
                    url={user.video}
                    width="100%"
                    height="202px"
                    light={true}
                    playIcon={true}
                />
                <Details type={type}>
                    <Link
                        to={channelId}
                        onClick={() => setCurrentChannel(user.channelId)}
                    >
                        <ChannelImage type={type} src={user.channelImg} />
                    </Link>
                    <h3>{user.channelId}</h3>
                    <Texts>
                        <Title>{user.title}</Title>
                        <ChannelName>{user.username}</ChannelName>
                        <Info>
                            {user.view} views . {user.day} day ago
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}

export default Card;
const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45p")};
    cursor: pointer;
    margin-right: 2%;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    flex: 1;
`;
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
    gap: 12px;
    flex: 1;
`;
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
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
