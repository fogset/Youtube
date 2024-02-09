import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useRecoilState } from "recoil";
import { recoilUserIndex } from "../../state";

function Comments() {
    const [comment, setComment] = useRecoilState(recoilUserIndex);
    const data = null;
    useEffect(() => {
        console.log("comment");
        console.log(comment.comments);
        // data = JSON.parse(comment.comments);
    }, [comment]);
    return (
        <Container>
            <NewComment>
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            {comment.comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </Container>
    );
}
// {
//     comment.comments.map((data) => <Comment comment={data} />);
// }
export default Comments;
const Container = styled.div`
    padding-bottom: 7%;
`;
const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Avatar = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
`;

const Input = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.soft};
    background-color: transparent;
    outline: none;
    padding: 5px;
    width: 100%;
`;
