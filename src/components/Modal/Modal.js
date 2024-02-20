import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { recoilPageIndex, totalVideoRecoil } from "../../state";

import ChannelCard from "../Admin/ChannelCard";
function Modal({ setOpenModal }) {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    function closeButton() {
        setOpenModal(false);
        //alert("close");
    }
    return (
        <Overlay>
            <ModalContainer>
                <Container>
                    {totalVideo.map((currentVideo) => (
                        <ChannelCard currentVideo={currentVideo} />
                    ))}
                </Container>
                <CloseButton onClick={closeButton}>X</CloseButton>
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;
const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
`;
const ModalContainer = styled.div`
    max-width: 1400px;
    width: 100%;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
    height: 700px;
`;
const CloseButton = styled.div`
    position: fixed;
    font-size: 25px;
    top: 8px;
    right: 8px;
`;
const Container = styled.div`
    background-color: lightblue;
    font-size: larger;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-bottom: 100px;
    padding-right: 1%;
`;
