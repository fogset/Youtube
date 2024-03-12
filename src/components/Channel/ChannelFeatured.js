import styled from "styled-components";
import ChannelHeader from "./ChannelHeader";
import { useRecoilState } from "recoil";
import { totalVideoRecoil } from "../../state";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
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
        }
        setCurrentChannelVideo(filterChannel);
    }, [totalVideo]);
    return (
        <div>
            <ChannelHeader />
            <HorizontalLine />
            <Title>For You</Title>
            {currentChannelVideo !== null && (
                <Container>
                    {currentChannelVideo.map((currentVideoDetail) => (
                        <Card currentVideoDetail={currentVideoDetail} />
                    ))}
                </Container>
            )}
        </div>
    );
}

export default ChannelFeatured;
const ChannelVideo = styled.div``;
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
    width: 100%;
    margin-bottom: 100px;
`;
