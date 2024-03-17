import React, { Fragment, useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { totalVideoRecoil } from "../../state";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card/Card";
import ChannelHeader from "./ChannelHeader";
import ChannelSidebar from "./ChannelSidebar";
function ChannelVideos() {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [currentChannelVideo, setCurrentChannelVideo] = useState(null);
    const currentChannelId = useParams().channelId;
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
            <ChannelSidebar />
            <ChannelVideo>
                <ChannelHeader />
                {currentChannelVideo !== null && (
                    <Container>
                        {currentChannelVideo.map((currentVideoDetail) => (
                            <Card currentVideoDetail={currentVideoDetail} />
                        ))}
                    </Container>
                )}
            </ChannelVideo>
        </div>
    );
}

export default ChannelVideos;
const ChannelVideo = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
`;
const Container = styled.div`
    font-size: larger;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
`;
