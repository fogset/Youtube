import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faThumbsUp,
    faThumbsDown,
    faFloppyDisk,
} from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Comments from "../components/Comments/Comments";
import Card from "../components/Card/Card";
import VideoPlayer from "./VideoPlayer";
import { useRecoilState } from "recoil";
import { currentVideoRecoil, page1Recoil } from "../state";
import RecommendCard from "../components/Card/RecommendCard";

function VideoDetail({}) {
    const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoRecoil);
    const [page1, setPage1] = useRecoilState(page1Recoil);
    useEffect(() => {
        localStorage.getItem("selectVideo");
        console.log("Videoscreen currentVideo");
        console.log(localStorage.getItem("selectVideo"));
    }, []);
    return (
        <Container>
            {currentVideo && (
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
                                <ChannelName>
                                    {currentVideo.channelId}
                                </ChannelName>
                                <ChannelCounter>
                                    {currentVideo.subscribers} subscribers
                                </ChannelCounter>
                            </ChannelDetail>
                        </ChannelInfo>
                        <Subscribe>SUBSCRIBE</Subscribe>
                    </Channel>
                    <Description>
                        sum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nulla consequat
                        massa quis enim. Donec pede justo,
                    </Description>
                    <Comments />
                </VideoContainer>
            )}
            <Recommendation>
                {page1.map((user, index) => (
                    <RecommendCard key={index} user={user} />
                ))}
            </Recommendation>
        </Container>
    );
}
//

export default VideoDetail;
const Container = styled.div`
    color: black;
    /* overflow-x: hidden;
    overflow-y: auto; */
    height: 100%;
    width: 100%;
    font-size: large;
    position: absolute;
    top: 60px;
    left: 0px;
    -webkit-scrollbar {
        display: none;
    }
`;

const VideoContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 5%;
    height: 100%;
    width: 70%;
`;
const Recommendation = styled.div`
    position: absolute;
    width: 30%;
    height: 500px;
    right: 0px;
`;
const Content = styled.div`
    flex: 5;
`;
const VideoWrapper = styled.div`
    height: 370px;
    width: 590px;
    /* @media only screen and (max-width: 500px) {
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
    } */
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
