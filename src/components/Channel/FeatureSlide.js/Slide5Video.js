import styled from "styled-components";
import Slide5VideoContainer from "./Slide5VideoContainer";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import React, { Fragment, useState, useEffect } from "react";
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
    );
}

export default Slide5Video;
const Container = styled.div`
    font-size: larger;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 95%;
    margin-bottom: 300px;
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
