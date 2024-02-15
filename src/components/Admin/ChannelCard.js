import React from "react";
import styled from "styled-components";
function ChannelCard({ currentVideo }) {
    function setUserIndex() {}
    return (
        <Container onClick={setUserIndex}>
            <Image src={currentVideo.image} />
            <Details>
                <div>
                    <ChannelImage src={currentVideo.channelImg} />
                </div>
                <h3>{currentVideo.channelId}</h3>
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
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45p")};
    cursor: pointer;
    margin-right: 2%;
    display: ${(props) => props.type === "sm" && "flex"};
    gap: 10px;
`;

const Image = styled.img`
    width: 100%;
    height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
    background-color: #999;
    flex: 1;
`;
const Details = styled.div`
    display: flex;
    margin-top: ${(props) => (props.type === "sm" ? "0px" : "16px")};
    gap: 12px;
    flex: 1;
`;
const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: #999;
    display: ${(props) => props.type === "sm" && "none"};
`;
const Texts = styled.div``;
const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
    margin: 10px 0px;
`;
const Info = styled.div`
    font-size: 14px;
    color: ${({ theme }) => theme.textSoft};
`;
