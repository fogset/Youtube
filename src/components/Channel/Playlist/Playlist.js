import styled from "styled-components";
import { ImLoop } from "react-icons/im";
import React, { useEffect, useState } from "react";
import { TfiControlShuffle } from "react-icons/tfi";
import PlaylistVideoSidebar from "./PlaylistVideoListSidebar";
import { TfiClose } from "react-icons/tfi";
import { totalVideoRecoil } from "./../../../state";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
function Playlist() {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [currentChannelVideoList, setCurrentChannelVideoList] =
        useState(null);
    const [currentPlaylist, setCurrentPlaylist] = useState(null);
    const currentPlayListName = useParams().playlistName;
    const currentChannelId = useParams().channelId;
    useEffect(() => {
        getVideoListFromThisChannelId();
    }, [totalVideo]);
    useEffect(() => {
        getVideoListWithThisPlayListNameInCurrentChannel();
    }, [currentChannelVideoList]);

    function getVideoListFromThisChannelId() {
        let filterChannelVideo = [];
        if (totalVideo !== null) {
            for (let i = 0; i < totalVideo.length; i++) {
                if (totalVideo[i].channelId === currentChannelId) {
                    filterChannelVideo.push(totalVideo[i]);
                }
            }
        }
        setCurrentChannelVideoList(filterChannelVideo);
    }
    function getVideoListWithThisPlayListNameInCurrentChannel() {
        let TempPlayList = [];
        if (currentChannelVideoList !== null) {
            for (let i = 0; i < currentChannelVideoList.length; i++) {
                if (
                    currentChannelVideoList[i].playlist === currentPlayListName
                ) {
                    TempPlayList.push(currentChannelVideoList[i]);
                }
            }
            setCurrentPlaylist(TempPlayList);
        }
    }
    return (
        <Container>
            <Title>{currentPlayListName}最新の動画 / Latest Video</Title>
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

            {currentPlaylist !== null && (
                <PlayListVideo>
                    {currentPlaylist.map((currentVideoDetail, index) => (
                        <PlaylistVideoSidebar
                            index={index}
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
    height: 530px;
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
    margin-top: 20px;
    position: relative;
    width: 460px;
    height: 400px;
    overflow-x: hidden;
    overflow-y: auto;
`;
