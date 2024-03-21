import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { totalVideoRecoil, recoilChannelList } from "../../state";
import { Dropdown } from "primereact/dropdown";

import ChannelCard from "../Admin/ChannelCard";

function Modal({ setOpenModal }) {
    const [totalVideo, setTotalVideo] = useRecoilState(totalVideoRecoil);
    const [filteredtotalVideo, setFilteredtotalVideo] = useState(null);
    const [channels, setChannels] = useRecoilState(recoilChannelList);
    const [selectChannel, setSelectChannel] = useState(null);

    useEffect(() => {
        if (selectChannel !== null) {
            const filtered = totalVideo.filter((video) =>
                video.channelId.includes(selectChannel.channelId)
            );
            setFilteredtotalVideo(filtered);
        }
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
                {filteredtotalVideo && (
                    <Container>
                        {filteredtotalVideo.map((currentVideo) => (
                            <ChannelCard currentVideo={currentVideo} />
                        ))}
                    </Container>
                )}
                <CloseButton onClick={closeButton}>X</CloseButton>
            </ModalContainer>
        </Overlay>
    );
}

export default Modal;
const DropdownSelect = styled.div`
    position: fixed;
    left: 35%;
    top: 0%;
    display: flex;
    width: 40%;
    background-color: lightcoral;
    color: white;
    z-index: 11;
    font-size: 30px;
`;
const Overlay = styled.div``;
const ModalContainer = styled.div`
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    height: 95%;
    width: 95%;

    overflow-x: hidden;
    overflow-y: auto;
    flex-direction: column;
    background-color: lightblue;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
    z-index: 10;
`;
const CloseButton = styled.div`
    position: fixed;
    font-size: 25px;
    top: 8px;
    right: 8px;
`;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
    padding-bottom: 100px;
    margin-top: 30px;
    position: relative;
`;
