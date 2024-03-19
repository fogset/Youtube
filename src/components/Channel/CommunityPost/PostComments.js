import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SortByButton from "../../Button/SortByButton";
import { useRecoilState } from "recoil";
import { Comments_TotalRecoil } from "./../../../state";
import Comment from "../../Comments/Comment";
function PostComments(comment_ID) {
    const [CommentsTotal, setCommentsTotal] =
        useRecoilState(Comments_TotalRecoil);
    const [currentComment, setCurrentComment] = useState(null);
    useEffect(() => {
        GetCommentFromComment_ID();
    }, [CommentsTotal]);
    function GetCommentFromComment_ID() {
        if (CommentsTotal !== null) {
            for (let i = 0; i < CommentsTotal.length; i++) {
                if (CommentsTotal[i].comments_Name === "Comments_40") {
                    setCurrentComment(CommentsTotal[i]);
                }
            }
        }
    }
    return (
        <Container>
            <TopContainer>
                <CommentTitle>67 Comments</CommentTitle>
                <SortByButton />
            </TopContainer>
            <NewComment>
                <Avatar src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg" />
                <Input placeholder="Add a comment..." />
            </NewComment>
        </Container>
    );
}
// {
//     currentComment !== null && (
//         <CommentListContainer>
//             {currentComment.map((comment) => (
//                 <Comment comment={comment} />
//             ))}
//         </CommentListContainer>
//     );
// }
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
