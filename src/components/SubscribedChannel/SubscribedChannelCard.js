import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function SubscribedChannelCard({ currentChannel }) {
    const channelUrl = `/${currentChannel.channelId}/featured`;
    console.log(channelUrl);
    return (
        <LinkChannel to={channelUrl}>
            <Container>
                <ProfileImg src={currentChannel.profileImg} />
                <Title>{currentChannel.title.substring(0, 10)}</Title>
            </Container>
        </LinkChannel>
    );
}

export default SubscribedChannelCard;
const Container = styled.div`
    display: flex;
    position: relative;
    height: 30px;
    width: 100%;
    &:hover {
        background-color: #dcdcdc;
    }
`;
const ProfileImg = styled.img`
    width: 22px;
    height: 22px;
    border-radius: 50%;
    position: absolute;
    left: 10px;
`;
const Title = styled.h1`
    font-size: 13px;
    align-items: center;
    margin-bottom: 10px;
    position: absolute;
    left: 50px;
    top: -5px;
    color: black;
`;
const LinkChannel = styled(Link)`
    text-decoration: none;
`;
