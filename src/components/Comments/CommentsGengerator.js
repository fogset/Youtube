import React, { useState, useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import styled from "styled-components";
import commentData from "../Comments/comments.json";
import { db } from "../../firestore";
import { v4 as uuidv4 } from "uuid";
function CommentsGengerator() {
    const [id, setId] = useState("");
    const [commentRandom, setCommentRandom] = useState(1);
    const [commentName, setCommentName] = useState(null);
    const commentId = uuidv4().slice(0, 8);
    var commentArray = [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        generateRandomComment();
        try {
            const docRef = await addDoc(collection(db, "comments"), {
                comments_List: commentArray,
                comments_Name: commentName,
                comment_ID: commentId,
            });
            alert("added");
        } catch (error) {
            console.log(error);
        }
    };

    function generateRandomComment() {
        for (let i = 0; i < commentRandom; i++) {
            let randomValue =
                commentData[Math.floor(Math.random() * commentData.length)];
            commentArray.push(randomValue);
        }
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>comment Unique Id: </StyledLabel>
            <StyledInput
                type="text"
                value={commentId}
                onChange={(e) => setId(e.target.value)}
            />
            <StyledLabel>Comment Name: </StyledLabel>
            <StyledInput
                type="text"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
            />
            <StyledLabel>Random Comments:</StyledLabel>
            <StyledInput
                type="number"
                value={commentRandom}
                onChange={(e) => setCommentRandom(e.target.value)}
            />
            <StyledButton type="submit">Upload</StyledButton>
        </StyledForm>
    );
}

export default CommentsGengerator;
const StyledForm = styled.form`
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
    font-size: large;
    position: absolute;
    left: 210px;
    width: 80%;
    height: 100%;
`;

const StyledLabel = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: ${(props) => (props.invalid ? "red" : "black")};
`;

const StyledInput = styled.input`
    width: 80%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const StyledButton = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    margin-top: 10px;
    border: none;
    border-radius: 5px;
    margin-left: 50px;
    height: 40px;
    cursor: pointer;
    &:disabled {
        opacity: 0.5;
    }
    &:enabled {
        opacity: 1;
    }
    opacity: ${(props) => (!props.enabled ? 0.5 : 1)};
`;
