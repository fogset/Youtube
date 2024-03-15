import styled from "styled-components";
import { ImLoop } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { TfiControlShuffle } from "react-icons/tfi";
import PlaylistVideo from "./PlaylistVideo";
import { TfiClose } from "react-icons/tfi";
import { totalVideoRecoil } from "./../../../state";
import { useRecoilState } from "recoil";

function Playlist() {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    return (
        <Container>
            <Title>最新の動画 / Latest Video</Title>
            <ListName>CYBERJAPAN DANCERS Official - 1 / 6</ListName>
            <IconContainer>
                <LoopIcon>
                    <ImLoop size={22} />
                </LoopIcon>
                <ShuttleIcon>
                    <TfiControlShuffle size={22} />
                </ShuttleIcon>
            </IconContainer>
            <CloseIcon>
                <TfiClose size={22} />
            </CloseIcon>

            {totalVideo !== null && (
                <PlayListVideo>
                    {totalVideo.map((currentVideoDetail) => (
                        <PlaylistVideo
                            currentVideoDetail={currentVideoDetail}
                        />
                    ))}
                </PlayListVideo>
            )}
        </Container>
    );
}

export default Playlist;
const Container = styled.div`
    width: 460px;
    cursor: pointer;
    height: 500px;
    position: relative;
    background-color: lightcyan;
`;
const Title = styled.h1`
    font-size: 23px;
    font-weight: bold;
    color: black;
`;
const IconContainer = styled.div`
    margin-top: 10px;
    display: flex;
`;
const LoopIcon = styled.div`
    margin-left: 10px;
`;
const ShuttleIcon = styled.div`
    margin-left: 20px;
`;
const CloseIcon = styled.div`
    position: absolute;
    right: 15px;
    top: 22px;
`;

const ListName = styled.div`
    font-size: 13px;
`;
const PlayListVideo = styled.div`
    position: relative;
    width: 460px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
`;
