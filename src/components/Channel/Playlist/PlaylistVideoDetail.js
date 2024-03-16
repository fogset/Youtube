import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { RiShareForwardLine } from "react-icons/ri";
import { IoEllipsisHorizontal } from "react-icons/io5";
import LikeDisLike from "../../Button/LikeDisLike";
import Comments from "../../Comments/Comments";

function PlaylistVideoDetail({ currentVideo }) {
    const [shaowMoreDecription, setShowMoreDecription] = useState(false);
    function moreDescription() {
        setShowMoreDecription(!shaowMoreDecription);
    }
    function LessDecription() {
        setShowMoreDecription(false);
    }
    return (
        <div>
            {currentVideo && (
                <Container>
                    <VideoWrapper>
                        <ReactPlayer
                            url={currentVideo.video}
                            width="100%"
                            height="100%"
                            controls
                        />
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

                    <Description onClick={moreDescription}>
                        <Info>
                            {currentVideo.view} views . {currentVideo.date} ago
                        </Info>
                        {shaowMoreDecription === false ? (
                            <div>
                                {currentVideo.title.substring(0, 320)}
                                ...<Button>more</Button>
                            </div>
                        ) : (
                            <div>
                                {currentVideo.description}
                                <Button onClick={LessDecription}>
                                    show less
                                </Button>
                            </div>
                        )}
                    </Description>
                    <Comments currentVideo={currentVideo} />
                </Container>
            )}
        </div>
    );
}
//

export default PlaylistVideoDetail;
const Container = styled.div`
    position: relative;
    color: black;
    height: 100%;
    width: 62%;
    font-size: large;
    top: 60px;
    left: 1%;
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
        width: 900px;
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
    //font-weight: bold;
    margin-right: 10px;
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
const Button = styled.button`
    font-weight: bold;
`;
