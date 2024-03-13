import styled from "styled-components";
import Slide5VideoContainer from "./Slide5VideoContainer";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import React, { Fragment, useState, useEffect } from "react";
import { FaCaretRight } from "react-icons/fa6";

function Slide5Video({ currentVideoList }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    function goToNext() {
        if (currentSlideIndex < currentVideoList.length - 2) {
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
            <TitleContainer>
                <Title>Videos</Title>
                <PlayButton>
                    <FaCaretRight size={30} />
                    <PlayButton_text>Play all</PlayButton_text>
                </PlayButton>
            </TitleContainer>

            <Container>
                {currentSlideIndex !== 0 && (
                    <GoLeft onClick={goToPrevious}>
                        <ArrowContainer>
                            <FaChevronLeft />
                        </ArrowContainer>
                    </GoLeft>
                )}
                <Slide5VideoContainer
                    currentVideoDetail={currentVideoList[currentSlideIndex]}
                />
                <Slide5VideoContainer
                    currentVideoDetail={currentVideoList[currentSlideIndex + 1]}
                />
                <Slide5VideoContainer
                    currentVideoDetail={currentVideoList[currentSlideIndex + 2]}
                />
                <Slide5VideoContainer
                    currentVideoDetail={currentVideoList[currentSlideIndex + 3]}
                />
                <Slide5VideoContainer
                    currentVideoDetail={currentVideoList[currentSlideIndex + 4]}
                />

                <GoRight onClick={goToNext}>
                    <ArrowContainer>
                        <FaChevronRight />
                    </ArrowContainer>
                </GoRight>
            </Container>
        </div>
    );
}

export default Slide5Video;
const Container = styled.div`
    margin-top: 20px;
    margin-bottom: 7%;
    font-size: larger;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 95%;
    position: relative;
`;
const GoLeft = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #f3f5f2;
    left: -24px;
    top: 40%;
    border-radius: 50%;
    z-index: 100;
`;

const GoRight = styled.div`
    position: absolute;
    height: 50px;
    width: 50px;
    background-color: #f3f5f2;
    right: -24px;
    top: 40%;
    border-radius: 50%;
    z-index: 110;
`;
const ArrowContainer = styled.div`
    text-align: center;
    margin-top: 35%;
`;

const Title = styled.div`
    margin-top: 5px;
    font-size: 25px;
    font-weight: bold;
    margin-right: 10px;
`;
const TitleContainer = styled.div`
    margin-top: 2%;
    display: flex;
    margin-bottom: 2%;
`;
const PlayButton = styled.div`
    font-size: 18px;
    margin-left: 5px;
    display: flex;
    border-radius: 25px;
    height: 40px;
    width: 120px;
    align-items: center;
    &:hover {
        background-color: #f0eee9;
    }
`;
const PlayButton_text = styled.div`
    font-size: 18px;
    margin-left: 5px;
`;
