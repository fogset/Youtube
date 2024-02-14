import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilUserIndex, currentChannelRecoil } from "../../state";

function Card({ type, user }) {
    const [userIndex, setUserIndex] = useRecoilState(recoilUserIndex);
    const [currentChannel, setCurrentChannel] =
        useRecoilState(currentChannelRecoil);
    const params = useParams();
    const videoId = `/video/${user.id}`;
    const channelId = `/channel`;
    console.log(params);

    return (
        <Link
            to={videoId}
            style={{ textDecoration: "none" }}
            onClick={() => setUserIndex(user)}
        >
            <Container type={type}>
                <Image type={type} src={user.image} />
                <Details type={type}>
                    <Link
                        to={channelId}
                        onClick={() => setCurrentChannel(user.channelId)}
                    >
                        <ChannelImage
                            type={type}
                            src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
                        />
                    </Link>
                    <h2>channel={user.channelId}</h2>
                    <Texts>
                        <Title>{user.title}</Title>
                        <ChannelName>{user.username}</ChannelName>
                        <Info>
                            {user.view} views . {user.day} day ago
                        </Info>
                    </Texts>
                </Details>
            </Container>
        </Link>
    );
}

export default Card;
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
