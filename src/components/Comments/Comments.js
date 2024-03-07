import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { useRecoilState } from "recoil";
import { currentVideoRecoil } from "../../state";

function Comments({ currentVideo }) {
    //const [currentVideo, setCurrentVideo] = useRecoilState(currentVideoRecoil);

    // useEffect(() => {
    //     console.log("comment");
    //     console.log(currentVideo.comments);
    // }, [currentVideo]);

    return (
        <Container>
            <NewComment>
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            {currentVideo.comments.map((comment) => (
                <Comment comment={comment} />
            ))}
        </Container>
    );
}

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
