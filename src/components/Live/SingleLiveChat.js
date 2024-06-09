import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortByButton from "../Button/SortByButton";
import { GrClose } from "react-icons/gr";
import PostComment from "../Channel/CommunityPost/PostComment";

function SingleLiveChat({ chat, logInUser }) {
    return (
        <Container>
            <Avatar src={logInUser.profileImg} />
            <Details>
                <Name>{logInUser.username}</Name>
                <Text>{chat.message}</Text>
            </Details>
        </Container>
    );
}

export default SingleLiveChat;

const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0px;
`;
const Avatar = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
`;
const Name = styled.span`
    font-size: 15px;
    font-weight: 500;
    color: gray;
`;

const Text = styled.span`
    font-size: 15px;
`;
