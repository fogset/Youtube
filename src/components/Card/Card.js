import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
function Card({ type, user }) {
    const videoId = `/video/${user.id}`;
    const channelId = `/channel/${user.channelId}`;
    function onMouseDown() {}

    return (
        <Link to={videoId} style={{ textDecoration: "none" }}>
            <Container type={type} onMouseDown={onMouseDown}>
                <ReactPlayer
                    url={user.video}
                    width="100%"
                    height="202px"
                    light={true}
                    playIcon={true}
                />
                <LinkChannel to={channelId}>
                    <Details type={type}>
                        <ChannelImage type={type} src={user.channelImg} />
                        <Texts>
                            <Title>{user.title}</Title>
                            <ChannelName>{user.channelId}</ChannelName>
                            <Info>
                                {user.view} views . {user.day} day ago
                            </Info>
                        </Texts>
                    </Details>
                </LinkChannel>
            </Container>
        </Link>
    );
}

export default Card;
const Container = styled.div`
    width: ${(props) => props.type !== "sm" && "360px"};
    margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
    cursor: pointer;
    display: ${(props) => props.type === "sm" && "flex"};
`;

const LinkChannel = styled(Link)`
    text-decoration: none;
`;
const Details = styled.div`
    display: flex;
`;
const ChannelImage = styled.img`
    margin-top: 20px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
`;
const Texts = styled.div`
    margin-left: 50px;
`;
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
