import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { currentVideoRecoil, totalVideoRecoil } from "../../state";
import ReactPlayer from "react-player";

function RecommendCard({ user }) {
    const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoRecoil);
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const params = useParams();
    const videoUrl = `/video/${user.id}`;

    return (
        <Link to={videoUrl} style={{ textDecoration: "none" }}>
            <Container>
                <ReactPlayer
                    url={user.video}
                    width="200px"
                    height="100px"
                    light={true}
                    playIcon={true}
                />
                <Details>
                    <Texts>
                        <Title>{user.title}</Title>
                        <ChannelName>{user.channelId}</ChannelName>
                        <Info>
                            {user.view} views . {user.day} day ago
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}

export default RecommendCard;
const Container = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    color: black;
`;

const Details = styled.div``;

const Texts = styled.div`
    margin-left: 10px;
    position: relative;
    width: 190px;
`;
const Title = styled.h1`
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    top: -10px;
`;
const ChannelName = styled.h2`
    position: absolute;
    font-size: 16px;
    font-weight: 500;
    top: 20px;
    color: grey;
`;
const Info = styled.div`
    position: absolute;
    font-size: 12px;
    font-weight: 500;
    top: 70px;
`;
