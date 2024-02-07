import styled from "styled-components";
import data from "./data.json";
import {
    collection,
    query,
    where,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";
import { db } from "../firestore";
import React, { Fragment, useState, useEffect } from "react";

function About() {
    const [users, setUsers] = useState(null);
    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setUsers(users);
    };
    useEffect(() => {
        getUsers();
        console.log("users");
        console.log(users);
    }, []);
    function handleClick() {
        //getUsers();
        console.log("users");
        console.log(users);
    }
    return (
        <Container>
            <div>{users !== null && users[0].video}</div>
            <button onClick={handleClick}>Click me</button>
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
