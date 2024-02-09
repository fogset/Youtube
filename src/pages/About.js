import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilUserIndex } from "../state";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
    setDoc,
    addDoc,
} from "firebase/firestore";
import { db } from "../firestore";

function About() {
    const [users, setUsers] = useState(null);
    var userRef = collection(db, "user");

    const setCity = async () => {
        await addDoc(collection(db, "users"), {
            comments: ["element1", "element2", "element3"],
            day: 1,
            image: "https://i3.ytimg.com/vi/KgcjPd8n2Es/maxresdefault.jpg",
            id: 1,
            title: "初恋のひと",
            username: "quia",
            video: "https://www.youtube.com/watch?v=KgcjPd8n2Es&ab_channel=%E9%AB%98%E5%B6%BA%E3%81%AE%E3%81%AA%E3%81%A7%E3%81%97%E3%81%93Official",
        });
    };
    useEffect(() => {
        // setCity();
    }, []);
    function handleClick() {
        setCity();
        alert("sfsdfsfsdf");
    }
    return (
        <Container>
            <button onClick={handleClick}>Clicked element's key is </button>
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
