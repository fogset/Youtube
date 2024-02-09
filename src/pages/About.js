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
            comments: {
                comment1:
                    "Really cool project! But at the beginning i think you should have a showcase of how app looks and all the features before you start going into the set up and coding.",
                comment2:
                    "this is awesome project bro, keep going. i learned a lot",
                comment3: "Wooo! Very impressive project",
            },
            day: 123543,
            image: "https://i3.ytimg.com/vi/qakW05cQqaY/maxresdefault.jpg",
            id: 7,
            title: "村岛",
            username: "dolore",
            video: "https://www.youtube.com/watch?v=qakW05cQqaY&list=RDCMUCU_fSrQkYzBBe9jtep0EIIg&index=5&ab_channel=%E3%83%A4%E3%83%B3%E3%82%B8%E3%83%A3%E3%83%B3TV%E3%80%90%E9%9B%86%E8%8B%B1%E7%A4%BE%E3%83%A4%E3%83%B3%E3%82%B0%E3%82%B8%E3%83%A3%E3%83%B3%E3%83%97%E5%85%AC%E5%BC%8F%E3%80%91",
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
