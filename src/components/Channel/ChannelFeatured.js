import styled from "styled-components";
import ChannelHeader from "./ChannelHeader";
import { useRecoilState } from "recoil";
import { totalVideoRecoil } from "../../state";
import React, { Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ChannelSidebar from "./ChannelSidebar";
import Slide3Video from "./FeatureSlide.js/Slide3Video";
import Slide5Video from "./FeatureSlide.js/Slide5Video";
import { GetVideoListFromChannel_ID } from "../GetMethodFrom_ID/GetByID";

function ChannelFeatured() {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [currentChannelVideo, setCurrentChannelVideo] = useState(null);
    const Id = useParams().channelId;
    useEffect(() => {
        GetVideoListFromChannel_ID(Id, totalVideo, setCurrentChannelVideo);
    }, [totalVideo]);

    return (
        <div>
            <ChannelSidebar />
            <Feature>
                <ChannelHeader />
                <HorizontalLine />
                <Title>For You</Title>
                {totalVideo !== null && (
                    <div>
                        <Slide3Video currentVideoList={totalVideo} />
                        <HorizontalLine />
                        <Slide5Video currentVideoList={totalVideo} />
                        <HorizontalLine />
                    </div>
                )}
            </Feature>
        </div>
    );
}

export default ChannelFeatured;

const Feature = styled.div`
    position: relative;
    left: 120px;
    top: 50px;
    width: 92%;
`;

const HorizontalLine = styled.div`
    height: 1px;
    background-color: #b3b9c4;
    border: none;
`;
const Title = styled.div`
    margin-top: 20px;
    margin-left: 15px;
    font-size: 22px;
    font-weight: 600;
`;
