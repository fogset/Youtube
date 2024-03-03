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
import { db } from "../firestore";

function CreateChannel() {
    const [banner, setBanner] = useState("");
    const [about, setAbout] = useState("");
    const [channelId, setChannelId] = useState("");
    const [profileImg, setProfileImg] = useState("");
    const [subscribers, setSubscribers] = useState("");
    const [title, setTitle] = useState("");

    var commentArray = [];

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "channels"), {
                Banner: banner,
                about: about,
                channelId: channelId,
                profileImg: profileImg,
                subscribers: subscribers,
                title: title,
            });
            alert("added");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel>Banner:</StyledLabel>
            <StyledInput
                type="text"
                value={banner}
                onChange={(e) => setBanner(e.target.value)}
            />
            <StyledLabel>about:</StyledLabel>
            <StyledInput
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
            />
            <StyledLabel>Channel Id:</StyledLabel>
            <StyledInput
                type="text"
                value={channelId}
                onChange={(e) => setChannelId(e.target.value)}
            />
            <StyledLabel>profileImg:</StyledLabel>
            <StyledInput
                type="text"
                value={profileImg}
                onChange={(e) => setProfileImg(e.target.value)}
            />
            <StyledLabel>subscribers:</StyledLabel>
            <StyledInput
                type="text"
                value={subscribers}
                onChange={(e) => setSubscribers(e.target.value)}
            />
            <StyledLabel>title:</StyledLabel>
            <StyledInput
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <StyledButton type="submit">Create Channel</StyledButton>
        </StyledForm>
    );
}

export default CreateChannel;

const StyledForm = styled.form`
    background-color: #f4f4f4;
    padding: 20px;
    border-radius: 5px;
    font-size: large;
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
    margin-left: 20px;
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
