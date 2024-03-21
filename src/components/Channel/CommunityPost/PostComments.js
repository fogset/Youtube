import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortByButton from "../../Button/SortByButton";
import { useRecoilState } from "recoil";
import { Comments_TotalRecoil } from "./../../../state";
import PostComment from "./PostComment";
import { GetCommentFromComment_ID } from "../../GetMethodFrom_ID/GetByID";
function PostComments(comment_ID) {
    const [CommentsTotal, setCommentsTotal] =
        useRecoilState(Comments_TotalRecoil);
    const [currentComment, setCurrentComment] = useState(null);
    var commentID = comment_ID.comment_ID;
    useEffect(() => {
        GetCommentFromComment_ID(commentID, CommentsTotal, setCurrentComment);
    }, [CommentsTotal]);

    return (
        <Container>
            <TopContainer>
                {currentComment !== null && (
                    <CommentTitle>
                        {currentComment.length} Comments
                    </CommentTitle>
                )}
                <SortByButton />
            </TopContainer>
            <NewComment>
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            {currentComment !== null && (
                <CommentListContainer>
                    {currentComment.map((comment) => (
                        <PostComment comment={comment} />
                    ))}
                </CommentListContainer>
            )}
        </Container>
    );
}

export default PostComments;
const Container = styled.div`
    margin-top: 2%;
`;
const CommentTitle = styled.div`
    font-size: 28px;
    font-weight: bolder;
    margin-bottom: 2%;
    margin-right: 2%;
`;
const TopContainer = styled.div`
    display: flex;
`;
const CommentListContainer = styled.div``;
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
