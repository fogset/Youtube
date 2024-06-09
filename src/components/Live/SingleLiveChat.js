import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortByButton from "../Button/SortByButton";
import { GrClose } from "react-icons/gr";
import PostComment from "../Channel/CommunityPost/PostComment";

function SingleLiveChat({ chat }) {
    return (
        <Container>
            <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
            <Details>
                <Name>hello123</Name>
                <Text>{chat}</Text>
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
