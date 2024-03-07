import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comments from "../components/Comments/Comments";
import VideoPlayer from "./VideoPlayer";
import { useRecoilState } from "recoil";
import { page1Recoil, totalVideoRecoil } from "../state";
import RecommendCard from "../components/Card/RecommendCard";
import { RiShareForwardLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
import LikeDisLike from "../components/Button/LikeDisLike";
import { Link, useParams } from "react-router-dom";
function VideoDetail() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [page1, setPage1] = useRecoilState(page1Recoil);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const params = useParams();
    const videoId = params.videoId;
    useEffect(() => {
        if (totalVideo !== null) {
            for (let i = 0; i < totalVideo.length; i++) {
                if (totalVideo[i].id === videoId) {
                    setCurrentVideo(totalVideo[i]);
                }
            }
        }
    }, [totalVideo]);
    return (
        <Container>
            {currentVideo && (
                <LeftContainer>
                    <VideoWrapper>
                        <VideoPlayer video={currentVideo.video} />
                    </VideoWrapper>
                    <Title>{currentVideo.title}</Title>
                    <TopPart>
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
                        </Channel>
                        <SubscribeContainer>
                            <Subscribe>Subscribe</Subscribe>
                        </SubscribeContainer>
                        <LikeDisLike />
                        <ShareContainer>
                            <Share>
                                <RiShareForwardLine size={26} />
                            </Share>
                            <ShareText>Share</ShareText>
                        </ShareContainer>
                        <DotContainer>
                            <Dot>
                                <IoEllipsisHorizontal />
                            </Dot>
                        </DotContainer>
                    </TopPart>

                    <Description>
                        <Info>{currentVideo.view} views . Jun 22, 2022</Info>
                        sum dolor sit amet, consectetuer adipiscing elit. Aenean
                        commodo ligula eget dolor. Aenean massa. Cum sociis
                        natoque penatibus et magnis dis parturient montes,
                        nascetur ridiculus mus. Donec quam felis, ultricies nec,
                        pellentesque eu, pretium quis, sem. Nulla consequat
                        massa quis enim. Donec pede justo,
                    </Description>
                    <Comments currentVideo={currentVideo} />
                </LeftContainer>
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
    display: flex;
`;
const LeftContainer = styled.div`
    position: relative;
    top: 0px;
    left: 1%;
    height: 100%;
    width: 62%;
`;
const Recommendation = styled.div`
    position: relative;
    width: 460px;
    height: 500px;
    right: 0%;
    margin-left: 4%;
`;
const VideoWrapper = styled.div`
    @media only screen and (max-width: 500px) {
        height: 200px;
        width: 100%;
    }
    @media only screen and (min-width: 500px) and (max-width: 1300px) {
        height: 450px;
        width: 100%;
    }
    @media only screen and (min-width: 1300px) {
        height: 510px;
        width: 100%;
    }
`;
const TopPart = styled.div`
    display: flex;
`;

const SubscribeContainer = styled.div`
    background-color: #060a07;
    height: 40px;
    width: 120px;
    border-radius: 25px;
    position: relative;
    margin-left: 7%;
`;
const Subscribe = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: 800;
`;

const ShareContainer = styled.div`
    background-color: #e8eaed;
    height: 40px;
    width: 115px;
    border-radius: 25px;
    position: relative;
    margin-left: 3%;
`;

const Share = styled.div`
    left: 20px;
    top: 7px;
    position: absolute;
`;
const ShareText = styled.div`
    right: 20px;
    top: 10px;
    position: absolute;
`;

const DotContainer = styled.div`
    background-color: #e8eaed;
    height: 40px;
    width: 40px;
    border-radius: 25px;
    position: relative;
    margin-left: 4%;
`;
const Dot = styled.div`
    position: absolute;
    left: 10px;
    top: 10px;
`;

const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: black;
    font-weight: bold;
`;
const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1%;
    margin-top: 3%;
`;
const Info = styled.span`
    font-weight: bold;
    margin-right: 10px;
`;

const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ChannelInfo = styled.div`
    display: flex;
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
    font-size: 18px;
    padding-left: 60px;
    background-color: #e8eaed;
    height: 100px;
    border-radius: 15px;
`;

// const Subscribe = styled.button`
//     background-color: #cc1a00;
//     font-weight: 500;
//     color: white;
//     border: none;
//     border-radius: 3px;
//     height: max-content;
//     padding: 10px 20px;
//     cursor: pointer;
// `;
