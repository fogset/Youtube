import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilUserIndex } from "../state";
import {
    collection,
    query,
    deleteDoc,
    getDocs,
    doc,
    getDoc,
    setDoc,
    addDoc,
} from "firebase/firestore";
import { db } from "../firestore";
import commentData from "../components/Comments/comments.json";
import VideoPlayer from "./VideoPlayer";

function About() {
    const [users, setUsers] = useState(null);
    var userRef = collection(db, "user");
    var commentArray = [];
    const setCity = async () => {
        await addDoc(collection(db, "users"), {
            comments: commentArray,
            day: 1,
            image: "https://i3.ytimg.com/vi/KgcjPd8n2Es/maxresdefault.jpg",
            id: 1,
            title: "初恋のひと",
            username: "quia",
            video: "https://www.youtube.com/watch?v=KgcjPd8n2Es&ab_channel=%E9%AB%98%E5%B6%BA%E3%81%AE%E3%81%AA%E3%81%A7%E3%81%97%E3%81%93Official",
        });
    };
    useEffect(() => {
        for (let i = 0; i < 3; i++) {
            let randomValue =
                commentData[Math.floor(Math.random() * commentData.length)];
            commentArray.push(randomValue);
        }
        //setCity();
    }, []);
    // function handleClick() {
    //     //setCity();
    //     alert("click");
    //     const reference = doc(db, "page2");
    // }
    const handleClick = async () => {
        const reference = doc(db, "page2", "4G9OTrIN76PUC2wBAFRg");
        await deleteDoc(reference);
        alert("click");
    };
    return (
        <Container>
            <button onClick={handleClick}>Clicked element's key is </button>
            <VideoPlayer
                video={[
                    "https://www.twitch.tv/sodapoppin",
                    "https://www.youtube.com/watch?v=eO4TEm3Fllo&list=PLKgRDYt8mDh8o_bTkbJqZvKlr9MTy5WyL&index=4&ab_channel=MISSMAXIMCONTEST",
                ]}
            />
        </Container>
    );
}

export default About;
const Text = styled.div`
    margin-bottom: 100px;
`;
const Container = styled.div`
    color: black;
    background-color: white;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
`;
