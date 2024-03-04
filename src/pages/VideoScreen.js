import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbsUp,
    faThumbsDown,
    faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Comment from "./../components/Comments/Comment";
import Comments from "../components/Comments/Comments";
import Card from "../components/Card/Card";
import VideoPlayer from "./VideoPlayer";
import { Link, useParams } from "react-router-dom";
import data from "./data.json";
import { useRecoilState } from "recoil";
import { currentVideoRecoil } from "../state";

function VideoScreen({ currentPage }) {
    const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoRecoil);
    useEffect(() => {
        console.log("Videoscreen currentVideo");
        console.log(currentVideo);
    }, [currentVideo]);
    return (
        <Container>
            <VideoContainer>
                <VideoWrapper>
                    <VideoPlayer video={currentVideo.video} />
                </VideoWrapper>
                <Title>{currentVideo.title}</Title>
                <Details>
                    <Info>{currentVideo.view} views . Jun 22, 2022</Info>

                    <Buttons>
                        <Button>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            123
                        </Button>
                        <Button>
                            <FontAwesomeIcon icon={faThumbsDown} />
                            Dislike
                        </Button>
                        <Button>
                            <FontAwesomeIcon icon={faShare} />
                            Share
                        </Button>
                        <Button>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                            Save
                        </Button>
                    </Buttons>
                </Details>
                <Channel>
                    <ChannelInfo>
                        <Image src={currentVideo.channelImg} />
                        <ChannelDetail>
                            <ChannelName>{currentVideo.channelId}</ChannelName>
                            <ChannelCounter>
                                {currentVideo.subscribers} subscribers
                            </ChannelCounter>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Description>
                    sum dolor sit amet, consectetuer adipiscing elit. Aenean
                    commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo,
                </Description>
                <Comments />
            </VideoContainer>
            <Recommendation>
                {currentPage.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </Recommendation>
        </Container>
    );
}

// <iframe
//     width="100%"
//     height="100%"
//     src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
//     title="YouTube video player"
//     frameborder="0"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
// ></iframe>;

export default VideoScreen;
const Container = styled.div`
    position: absolute;
    top: 10%;
    display: flex;
    width: 99%;
`;

const VideoContainer = styled.div`
    height: 500px;
    width: 70%;
`;
const Recommendation = styled.div`
    margin-left: 2%;
    width: 30%;
    margin-bottom: 8%;
    @media only screen and (max-width: 1200px) {
        /* hide element on small screens */
        display: none;
    }
`;
const Content = styled.div`
    flex: 5;
`;
const VideoWrapper = styled.div`
    @media only screen and (max-width: 500px) {
        height: 200px;
        width: 100%;
    }
    @media only screen and (min-width: 500px) and (max-width: 1300px) {
        height: 500px;
        width: 800px;
    }
    @media only screen and (min-width: 1300px) {
        height: 600px;
        width: 1000px;
    }
`;
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.text};
`;
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1%;
    margin-top: 3%;
`;
const Info = styled.span`
    color: ${({ theme }) => theme.textSoft};
`;
const Buttons = styled.div`
    display: flex;
    gap: 20px;
    color: ${({ theme }) => theme.text};
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ChannelInfo = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;
const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
`;
const ChannelName = styled.span`
    font-weight: 500;
`;
const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    font-size: 12px;
`;
const Description = styled.p`
    font-size: 14px;
    padding-left: 60px;
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;
