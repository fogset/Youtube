import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
    recoilPageIndex,
    totalVideoRecoil,
    recoilChannelList,
} from "../../state";
import { Dropdown } from "primereact/dropdown";

import ChannelCard from "../Admin/ChannelCard";
import About from "./../../pages/About";
function Modal({ setOpenModal }) {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [filteredtotalVideo, setFilteredtotalVideo] = useState(null);
    const [channels, setChannels] = useRecoilState(recoilChannelList);
    const [selectChannel, setSelectChannel] = useState(null);

    useEffect(() => {
        const filtered = totalVideo.filter((video) =>
            video.channelId.includes(selectChannel.channelId)
        );
        setFilteredtotalVideo(filtered);
        alert(selectChannel.channelId);
        console.log("filteredtotalVideo");
        console.log(filteredtotalVideo);
    }, [selectChannel]);

    function closeButton() {
        setOpenModal(false);
    }
    return (
        <Overlay>
            <DropdownSelect>
                <Dropdown
                    value={selectChannel}
                    onChange={(e) => setSelectChannel(e.value)}
                    options={channels}
                    optionLabel="title"
                    placeholder="Select a Channel"
                    className="w-full md:w-30px"
                />
            </DropdownSelect>
            <ModalContainer>
                <Container>
                    {filteredtotalVideo.map((currentVideo) => (
                        <ChannelCard currentVideo={currentVideo} />
                    ))}
                </Container>
                <CloseButton onClick={closeButton}>X</CloseButton>
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;
const DropdownSelect = styled.div`
    position: fixed;
    left: 35%;
    top: 1%;
    display: flex;
    width: 22%;
    background-color: lightblue;
    color: white;
    z-index: 1;
    font-size: 30px;
`;
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
    z-index: 0;
`;
