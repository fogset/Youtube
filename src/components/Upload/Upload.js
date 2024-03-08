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
import { useRecoilState } from "recoil";
import { recoilChannelList } from "../../state";
import { Dropdown } from "primereact/dropdown";
import { v4 as uuidv4 } from "uuid";

function Upload() {
    const [day, setDay] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [video, setVideo] = useState("");
    const [view, setView] = useState("");
    const [commentRandom, setCommentRandom] = useState(1);
    const [channelId, setChannelId] = useState("");
    var commentArray = [];
    const [channels, setChannels] = useRecoilState(recoilChannelList);
    const [selectChannel, setSelectChannel] = useState(null);
    const [subscribers, setSubscribers] = useState("");
    const videoId = uuidv4().slice(0, 8);
    useEffect(() => {
        console.log("selectChannel");
        console.log(selectChannel);
    }, [selectChannel]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        generateRandomComment();
        try {
            const docRef = await addDoc(collection(db, "videos"), {
                day: day,
                id: videoId,
                title: title,
                video: video,
                view: view,
                channelId: selectChannel.channelId,
                channelImg: selectChannel.profileImg,
                subscribers: selectChannel.subscribers,
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
        setTitle(e.target.value);
        // buttonEnabled(username, password)
    };
    const dayEntered = (e) => {
        setDay(e.target.value);
        // buttonEnabled(username, password)
    };

    const buttonEnabled = (title, password) => {
        if (title.length > 0 && password.length > 0) {
            //setEnabled(true);
        } else {
            //setEnabled(false);
        }
    };
    return (
        <StyledForm onSubmit={handleSubmit}>
            <DropdownSelect>
                <Dropdown
                    value={selectChannel}
                    onChange={(e) => setSelectChannel(e.value)}
                    options={channels}
                    optionLabel="title"
                    placeholder="Select a Channel"
                    className="w-full md:w-30px"
                />
            </DropdownSelect>
            {selectChannel && <ChannelImage src={selectChannel.profileImg} />}
            <StyledLabel>Day:</StyledLabel>
            <StyledInput
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
            />
            <StyledLabel>Video Unique Id: </StyledLabel>
            <StyledInput
                type="text"
                value={videoId}
                onChange={(e) => setId(e.target.value)}
            />

            <StyledLabel>Title:</StyledLabel>
            <StyledInput
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
            <StyledLabel>subscribers:</StyledLabel>
            {selectChannel && (
                <StyledInput
                    type="text"
                    value={selectChannel.subscribers}
                    onChange={(e) => setSubscribers(e.target.value)}
                />
            )}
            <StyledLabel>ChannelId:</StyledLabel>
            {selectChannel && (
                <StyledInput
                    type="text"
                    value={selectChannel.channelId}
                    onChange={(e) => setChannelId(e.target.value)}
                />
            )}
            <StyledLabel>Random Comments:</StyledLabel>
            <StyledInput
                type="number"
                value={commentRandom}
                onChange={(e) => setCommentRandom(e.target.value)}
            />
            <StyledButton type="submit" disabled={!title || !day}>
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
    font-size: large;
    position: absolute;
    left: 210px;
    width: 80%;
`;
const DropdownSelect = styled.div`
    position: absolute;
    left: 35%;
    top: 1%;
    display: flex;
    width: 100%;
    font-size: larger;
`;
const ChannelImage = styled.img`
    position: absolute;
    left: 60%;
    top: 0%;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #999;
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
