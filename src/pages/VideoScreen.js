import React, { Fragment } from "react";
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
import { recoilUserIndex } from "../state";

function VideoScreen({ users }) {
    const [userIndex, setUserIndex] = useRecoilState(recoilUserIndex);

    return (
        <Container>
            <VideoContainer>
                <VideoWrapper>
                    <VideoPlayer video={userIndex} />
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>7,948154 views . Jun 22, 2022</Info>
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
                        <Image src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                        <ChannelDetail>
                            <ChannelName>sdlfk</ChannelName>
                            <ChannelCounter>200K subscribers</ChannelCounter>
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
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
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
    display: flex;
`;

const VideoContainer = styled.div`
    height: 500px;
    width: 70%;
`;
const Recommendation = styled.div`
    margin-left: 1%;
    width: 30%;
`;
const Content = styled.div`
    flex: 5;
`;
const VideoWrapper = styled.div`
    height: 400px;
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
