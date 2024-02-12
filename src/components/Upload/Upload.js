import React, { useState, useEffect } from "react";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    addDoc,
} from "firebase/firestore";
import styled from "styled-components";
import commentData from "../Comments/comments.json";
import { db } from "../../firestore";
function Upload() {
    const [day, setDay] = useState("");
    const [id, setId] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [username, setUsername] = useState("");
    const [video, setVideo] = useState("");
    const [view, setView] = useState("");
    const [commentRandom, setCommentRandom] = useState("");
    var commentArray = [];
    const handleSubmit = async (e) => {
        e.preventDefault();
        generateRandomComment();
        try {
            const docRef = await addDoc(collection(db, "page2"), {
                day: day,
                id: id,
                image: image,
                title: title,
                username: username,
                video: video,
                view: view,
                comments: commentArray,
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

    const usernameEntered = (e) => {
        setUsername(e.target.value);
        // buttonEnabled(username, password)
    };
    const dayEntered = (e) => {
        setDay(e.target.value);
        // buttonEnabled(username, password)
    };

    const buttonEnabled = (username, password) => {
        if (username.length > 0 && password.length > 0) {
            //setEnabled(true);
        } else {
            //setEnabled(false);
        }
    };
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Day:</StyledLabel>
            <StyledInput
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
            <StyledLabel>Id:</StyledLabel>
            <StyledInput
                type="number"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />
            <StyledLabel>Image:</StyledLabel>
            <StyledInput
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <StyledLabel>Title:</StyledLabel>
            <StyledInput
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <StyledLabel>username:</StyledLabel>
            <StyledInput
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <StyledLabel>VideoUrl:</StyledLabel>
            <StyledInput
                type="text"
                value={video}
                onChange={(e) => setVideo(e.target.value)}
            />
            <StyledLabel>View:</StyledLabel>
            <StyledInput
                type="number"
                value={view}
                onChange={(e) => setView(e.target.value)}
            />
            <StyledLabel>Random Comments:</StyledLabel>
            <StyledInput
                type="number"
                value={commentRandom}
                onChange={(e) => setCommentRandom(e.target.value)}
            />

            <StyledButton type="submit" disabled={!username || !day}>
                Upload
            </StyledButton>
        </StyledForm>
    );
}

export default Upload;

const StyledForm = styled.form`
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
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

const StyledAlert = styled.div`
    padding: 10px;
    background-color: #f44336;
    color: white;
    margin-top: 10px;
    border-radius: 5px;
`;
