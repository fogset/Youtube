import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortByButton from "../../Button/SortByButton";
import { GrClose } from "react-icons/gr";
import PostComment from "./../CommunityPost/PostComment";

function ShortComments({ ShortComments, setOpenCommentBox }) {
    function CloseCommentBox() {
        setOpenCommentBox(false);
    }
    return (
        <Container>
            <TopContainer>
                <CommentTitle> Comments {ShortComments.length}</CommentTitle>
                <CloseSort onClick={CloseCommentBox}>
                    <SortByButton hideText={true} />
                    <Close>
                        <GrClose size={25} />
                    </Close>
                </CloseSort>
            </TopContainer>
            <CommentListContainer>
                {ShortComments.map((comment) => (
                    <PostComment comment={comment} />
                ))}
            </CommentListContainer>
            <HorizontalLine />
            <NewComment>
                <HorizontalLine />
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input placeholder="Add a comment..." />
            </NewComment>
        </Container>
    );
}

export default ShortComments;
const Container = styled.div`
    margin-top: 10px;
    position: relative;
`;
const CommentTitle = styled.div`
    font-size: 22px;
    font-weight: bolder;
    margin-bottom: 2%;
    margin-right: 20%;
    margin-left: 5%;
`;
const TopContainer = styled.div`
    display: flex;
`;
const CommentListContainer = styled.div`
    overflow-x: hidden;
    overflow-y: auto;
    margin-left: 10px;
    height: 500px;
`;
const NewComment = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 397px;
    background-color: white;
    margin-top: 2px;
    z-index: 10;
    border-style: solid;
    border-width: 1px;
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
const Close = styled.div`
    margin-top: 5px;
`;
const CloseSort = styled.div`
    position: absolute;
    right: 20px;
    display: flex;
    justify-content: space-between;
    width: 80px;
`;
const HorizontalLine = styled.div`
    position: absolute;
    height: 2px;
    width: 100px;
    color: red;
    z-index: 100;
`;
