import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { modalTotalVideoRecoil, addedModalVideoRecoil } from "../../state";
import ReactPlayer from "react-player";
function ChannelCard({ currentVideo }) {
    const [selected, setSelected] = useState(false);
    const [modalTotalVideo, setModalTotalVideo] = useRecoilState(
        modalTotalVideoRecoil
    );
    const [addedModalVideo, setAddedModalVideo] = useRecoilState(
        addedModalVideoRecoil
    );

    function selectedVideoButton() {
        //alert(currentVideo.username);
        //setSelected(!selected);
    }
    function AddToCurrentPage() {
        setModalTotalVideo([...modalTotalVideo, currentVideo]);
        setAddedModalVideo([...addedModalVideo, currentVideo]);
        //alert(modalTotalVideo[modalTotalVideo.length - 1].title);
        console.log("modalTotalVideo");
        console.log(modalTotalVideo);
    }
    const [play, setPlay] = useState(false);
    function Enter() {
        //setPlay(true);
        //alert(currentVideo.title);
    }
    function Out() {
        //setPlay(false);
    }

    return (
        <Container onClick={selectedVideoButton} selected={selected}>
            <VideoContainer onMouseEnter={Enter} onMouseOut={Out}>
                <ReactPlayer
                    url={currentVideo.video}
                    width="100%"
                    height="100%"
                    playing={play}
                />
            </VideoContainer>
            <Details>
                <div>
                    <ChannelImage src={currentVideo.channelImg} />
                    <ChannelId>{currentVideo.channel_Title}</ChannelId>
                </div>
                <Texts>
                    <Title>{currentVideo.title}</Title>
                    <ChannelName>{currentVideo.username}</ChannelName>
                    <Info>
                        {currentVideo.view} views . {currentVideo.day} day ago
                    </Info>
                </Texts>
                <AddButton onClick={AddToCurrentPage}>Add</AddButton>
            </Details>
        </Container>
    );
}

export default ChannelCard;

const Container = styled.div`
    width: 300px;
    margin-bottom: 1%;
    cursor: pointer;
    margin-right: 1%;
    gap: 10px;
    background-color: ${(props) =>
        props.selected === false ? "lightblue" : "blue"};
    color: ${(props) => (props.selected === false ? "black" : "white")};
    height: 290px;
    border: 1px solid;
    position: relative;
`;

const VideoContainer = styled.div`
    width: 100%;
    height: 180px;
`;
const Details = styled.div`
    display: flex;
    margin-top: 1%;
    gap: 1%;
`;
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
`;
const ChannelId = styled.div`
    margin-top: 10px;
    font-size: 10px;
`;
const Texts = styled.div`
    margin-left: 1%;
`;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 5px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;
const AddButton = styled.div`
    position: absolute;
    font-size: 25px;
    right: 2%;
    bottom: 5%;
    background-color: pink;
    color: white;
    height: 30px;
    width: 45px;
    text-align: center;
`;
