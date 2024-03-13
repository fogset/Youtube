import styled from "styled-components";
import ChannelHeader from "./ChannelHeader";
import { useRecoilState } from "recoil";
import { totalVideoRecoil } from "../../state";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelVideo from "./ChannelVideo";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import ChannelSidebar from "./ChannelSidebar";

function ChannelFeatured() {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [currentChannelVideo, setCurrentChannelVideo] = useState(null);
    const currentChannelId = useParams().channelId;
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    useEffect(() => {
        let filterChannel = [];
        if (totalVideo !== null) {
            for (let i = 0; i < totalVideo.length; i++) {
                if (totalVideo[i].channelId === currentChannelId) {
                    filterChannel.push(totalVideo[i]);
                }
            }
            console.log("totalvideo");
            console.log(totalVideo);
        }
        setCurrentChannelVideo(filterChannel);
        console.log("currentChannelVideo");
        console.log(currentChannelVideo);
    }, [totalVideo]);
    function goToNext() {
        if (currentSlideIndex < currentChannelVideo.length) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    }
    function goToPrevious() {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    }
    return (
        <div>
            <ChannelSidebar />
            <Feature>
                <ChannelHeader />
                <HorizontalLine />
                <Title>For You</Title>
                <GoLeft onClick={goToPrevious}>
                    <ArrowContainer>
                        <FaChevronLeft />
                    </ArrowContainer>
                </GoLeft>
                {totalVideo !== null && (
                    <Container>
                        <ChannelVideo
                            currentVideoDetail={totalVideo[currentSlideIndex]}
                        />
                        <ChannelVideo
                            currentVideoDetail={
                                totalVideo[currentSlideIndex + 1]
                            }
                        />
                        <ChannelVideo
                            currentVideoDetail={
                                totalVideo[currentSlideIndex + 2]
                            }
                        />
                    </Container>
                )}
                <GoRight onClick={goToNext}>
                    <ArrowContainer>
                        <FaChevronRight />
                    </ArrowContainer>
                </GoRight>
            </Feature>
        </div>
    );
}

export default ChannelFeatured;

const Feature = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 93%;
`;

const HorizontalLine = styled.div`
    height: 1px;
    background-color: #b3b9c4;
    border: none;
`;
const Title = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 15px;
    font-size: 22px;
    font-weight: 600;
`;
const Container = styled.div`
    font-size: larger;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 95%;
    margin-bottom: 300px;
`;
const GoLeft = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #f3f5f2;
    top: 700px;
    left: 0px;
    border-radius: 50%;
    z-index: 100;
`;

const GoRight = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #f3f5f2;
    top: 700px;
    right: 40px;
    border-radius: 50%;
    z-index: 100;
`;
const ArrowContainer = styled.div`
    text-align: center;
    margin-top: 35%;
`;
