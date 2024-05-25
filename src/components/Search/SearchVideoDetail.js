import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Comments_TotalRecoil } from "../../state";
import ReactPlayer from "react-player";
import { useRecoilState } from "recoil";

import RecommendCard from "./../Card/RecommendCard";
import { RiShareForwardLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import LikeDisLike from "./../Button/LikeDisLike";
import { RecommendVideoRecoil1 } from "./../../state.js";

function SearchVideoDetail() {
    const [currentVideo, setCurrentVideo] = useState(null);
    const [shaowMoreDecription, setShowMoreDecription] = useState(false);
    const [currentRecommendVideo, setcurrentRecommendVideo] = useRecoilState(RecommendVideoRecoil1);
    const params = useParams();
    const searchVideoId = params.searchVideoId;
    const videoUrl = `https://www.youtube.com/watch?v=${searchVideoId}`;

    useEffect(() => {
        var RecommendVideoLocal = JSON.parse(localStorage.getItem("RecommendVideo"));
        setcurrentRecommendVideo(RecommendVideoLocal);
    }, [searchVideoId]);

    function moreDescription() {
        setShowMoreDecription(!shaowMoreDecription);
    }
    function LessDecription() {
        setShowMoreDecription(false);
    }
    return (
        <Container>
            <LeftContainer>
                <VideoWrapper>
                    <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
                </VideoWrapper>
                <Title>
                    Create YouTube Clone Using React JS | Build Complete Website Like YouTube In
                    React JS 2024
                </Title>
                <TopPart>
                    <Channel>
                        <ChannelInfo>
                            <Image src="https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s88-c-k-c0x00ffffff-no-rj" />
                            <ChannelDetail>
                                <ChannelName>GreatStack</ChannelName>
                                <ChannelCounter>21342134 subscribers</ChannelCounter>
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

                <Description onClick={moreDescription}>
                    <Info>12313 views . 2days ago</Info>
                    {shaowMoreDecription === false ? (
                        <div>
                            sldkfjsldkfj ...<Button>more</Button>
                        </div>
                    ) : (
                        <div>
                            sdflsdlfkj
                            <Button onClick={LessDecription}>show less</Button>
                        </div>
                    )}
                </Description>
            </LeftContainer>

            {currentRecommendVideo !== null && (
                <Recommendation>
                    {currentRecommendVideo.map((currentVideoDetail) => (
                        <RecommendCard currentVideoDetail={currentVideoDetail} />
                    ))}
                </Recommendation>
            )}
        </Container>
    );
}
//

export default SearchVideoDetail;
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
    font-size: 20px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: black;
    font-weight: bold;
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
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-top: 10px;
    background-color: #e8eaed;
    border-radius: 15px;
`;
const Info = styled.span`
    margin-right: 10px;
`;

const Button = styled.button`
    font-weight: bold;
`;
