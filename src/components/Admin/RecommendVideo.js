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
    page1Recoil,
} from "../../state";
import VideoPlayer from "../../pages/VideoPlayer";
import Modal from "../Modal/Modal";
function RecommendVideo() {
    const [recommendVideo1, setRecommendVideo1] = useRecoilState(
        RecommendVideoRecoil1
    );
    const [recommendVideo2, setRecommendVideo2] = useRecoilState(
        RecommendVideoRecoil2
    );
    const [recommendVideo3, setRecommendVideo3] = useRecoilState(
        RecommendVideoRecoil3
    );
    const [openModal, setOpenModal] = useState(false);
    const [currentRecommend, setCurrentRecommend] = useState(null);
    function button1Clicked() {
        setCurrentRecommend(recommendVideo1);
    }
    function button2Clicked() {
        setCurrentRecommend(recommendVideo2);
    }
    function button3Clicked() {
        setCurrentRecommend(recommendVideo2);
    }

    function SetRecommendNow() {
        localStorage.setItem("RecommendVideo", currentRecommend);
    }
    function SetCurrentPage() {}
    function openModalButton() {
        setOpenModal(true);
    }

    return (
        <Container>
            <ButtonContainer>
                {recommendVideo1.length !== 0 && (
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
                <RecommendContainer>
                    <Button onClick={button2Clicked}>Recommend 2</Button>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                </RecommendContainer>
                <RecommendContainer>
                    <Button onClick={button3Clicked}>Recommend 3</Button>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                    <VideoWrapper>
                        <VideoPlayer video="https://www.youtube.com/watch?v=n-rMynl-PYs&ab_channel=MISSMAXIMCONTEST" />
                    </VideoWrapper>
                </RecommendContainer>
            </ButtonContainer>

            <SetPageButton onClick={SetCurrentPage}>
                Add to DataBase
            </SetPageButton>
            <SetPageButton onClick={SetRecommendNow}>
                set current page to recommend Video
            </SetPageButton>
            <SetButton onClick={openModalButton}>openModal</SetButton>
            {openModal === true && <Modal setOpenModal={setOpenModal} />}
        </Container>
    );
}

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
    width: 600px;
    margin-right: 100px;
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
    width: auto;
    height: 400px;
    margin-bottom: 15px;
`;
