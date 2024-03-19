import React from "react";
import styled from "styled-components";

function PostComment({ comment }) {
    return (
        <Container>
            <Avatar src={comment.image} />
            <Details>
                <Name>
                    @{comment.name} <Date>{comment.date} ago</Date>
                </Name>
                <Text>{comment.comment}</Text>
            </Details>
        </Container>
    );
}

export default PostComment;
const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 30px 0px;
`;
const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Name = styled.span`
    font-size: 15px;
    font-weight: 500;
`;
const Date = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: grey;
    margin-left: 5px;
`;
const Text = styled.span`
    font-size: 15px;
`;
