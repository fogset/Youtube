import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
function ChannelCard({ currentVideo }) {
    const [selected, setSelected] = useState(false);
    function selectedVideoButton() {
        //alert(currentVideo.channelId);
        setSelected(!selected);
    }
    return (
        <Container onClick={selectedVideoButton} selected={selected}>
            <Image src={currentVideo.image} />
            <Details>
                <div>
                    <ChannelImage src={currentVideo.channelImg} />
                    <ChannelId>{currentVideo.channelId}</ChannelId>
                </div>

                <Texts>
                    <Title>{currentVideo.title}</Title>
                    <ChannelName>{currentVideo.username}</ChannelName>
                    <Info>
                        {currentVideo.view} views . {currentVideo.day} day ago
                    </Info>
                </Texts>
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
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: #999;
    flex: 1;
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
    font-size: 15px;
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
