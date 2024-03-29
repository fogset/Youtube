import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firestore";
import { useRecoilState } from "recoil";
import {
    addedModalVideoRecoil,
    RecommendVideoRecoil1,
    RecommendVideoRecoil2,
    RecommendVideoRecoil3,
    RecommendVideoRecoilTotal,
    page1Recoil,
} from "../../state";
import VideoPlayer from "../../pages/VideoPlayer";
import Modal from "./Modal/Modal";
function RecommendVideo() {
    const [currentRecommendVideo, setCurrentRecommendVideo] = useRecoilState(
        RecommendVideoRecoilTotal
    );
    const [recommendVideo1, setRecommendVideo1] = useState(null);
    const [recommendVideo2, setRecommendVideo2] = useState(null);
    const [recommendVideo3, setRecommendVideo3] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [currentRecommend, setCurrentRecommend] = useState(null);
    const [displayRecommend, setDisplayRecommend] = useState(null);

    useEffect(() => {
        if (currentRecommendVideo.length > 0) {
            AddToRecommend(setRecommendVideo1, 0);
            AddToRecommend(setRecommendVideo2, 3);
            AddToRecommend(setRecommendVideo3, 6);
        }
    }, [currentRecommendVideo]);

    function AddToRecommend(setData, startIdx) {
        var temp = [];
        temp.push(currentRecommendVideo[startIdx]);
        temp.push(currentRecommendVideo[startIdx + 1]);
        temp.push(currentRecommendVideo[startIdx + 2]);
        setData(temp);
    }

    function button1Clicked() {
        setCurrentRecommend(recommendVideo1);
        setDisplayRecommend("Recommend 1");
    }
    function button2Clicked() {
        setCurrentRecommend(recommendVideo2);
        setDisplayRecommend("Recommend 2");
    }
    function button3Clicked() {
        setCurrentRecommend(recommendVideo3);
        setDisplayRecommend("Recommend 3");
    }

    function SetRecommendNow() {
        localStorage.setItem(
            "RecommendVideo",
            JSON.stringify(currentRecommend)
        );
    }
    function SetCurrentPage() {}
    function openModalButton() {
        setOpenModal(true);
    }

    return (
        <Container>
            <ButtonContainer>
                {recommendVideo1 !== null && (
                    <RecommendContainer>
                        <Button onClick={button1Clicked}>Recommend 1</Button>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo1[0].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo1[1].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo1[2].video} />
                        </VideoWrapper>
                    </RecommendContainer>
                )}
                {recommendVideo2 !== null && (
                    <RecommendContainer>
                        <Button onClick={button2Clicked}>Recommend 2</Button>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo2[0].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo2[1].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo2[2].video} />
                        </VideoWrapper>
                    </RecommendContainer>
                )}
                {recommendVideo3 !== null && (
                    <RecommendContainer>
                        <Button onClick={button3Clicked}>Recommend 3</Button>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo3[0].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo3[1].video} />
                        </VideoWrapper>
                        <VideoWrapper>
                            <VideoPlayer video={recommendVideo3[2].video} />
                        </VideoWrapper>
                    </RecommendContainer>
                )}
            </ButtonContainer>
            <CurrentRecommend>{displayRecommend}</CurrentRecommend>
            <SetPageButton onClick={SetRecommendNow}>
                set current page to recommend Video
            </SetPageButton>
            <SetButton onClick={openModalButton}>openModal</SetButton>
            {openModal === true && <Modal setOpenModal={setOpenModal} />}
        </Container>
    );
}
// <SetPageButton onClick={SetCurrentPage}>Add to DataBase</SetPageButton>;
export default RecommendVideo;
const Container = styled.div`
    color: black;
    /* overflow-x: hidden;
    overflow-y: auto; */
    height: 100%;
    width: 100%;
    font-size: large;
    position: absolute;
    top: 15px;
    left: 220px;
    display: flex;
`;

const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 2%;
`;
const RecommendContainer = styled.div`
    height: 100%;
    width: 410px;
    margin-right: 10px;
`;
const Button = styled.div`
    height: 30px;
    width: 100%;
    background-color: #fff8dc;
    color: #cd853f;
    border: 1px solid grey;
    margin-right: 3%;
    &:hover,
    &:focus {
        color: white;
        background-color: #cd853f;
    }
`;
const SetPageButton = styled.div`
    position: fixed;
    bottom: 7%;
    right: 2%;
    height: 50px;
    width: 150px;
    background-color: pink;
    color: white;
    text-align: center;
    &:hover {
        background-color: blue;
        color: white;
    }
`;
const SetButton = styled.div`
    position: fixed;
    bottom: 2%;
    right: 2%;
    height: 30px;
    width: 150px;
    background-color: pink;
    color: white;
    text-align: center;
    &:hover {
        background-color: blue;
        color: white;
    }
`;
const VideoWrapper = styled.div`
    width: 100%;
    height: 230px;
    margin-bottom: 15px;
`;

const CurrentRecommend = styled.div`
    position: fixed;
    bottom: 2%;
    left: 2%;
    height: 30px;
    width: 150px;
    background-color: yellow;
    color: black;
    text-align: center;
    font-size: larger;
    &:hover {
        background-color: blue;
        color: white;
    }
    z-index: 10;
`;
