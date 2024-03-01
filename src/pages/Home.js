import styled from "styled-components";
import Card from "../components/Card/Card";
import data from "./data.json";
import React, { Fragment, useState, useEffect } from "react";

function Home({ users }) {
    const [play, setPlay] = useState(false);
    function button1Clicked() {
        setPlay(!play);
        alert(play);
    }

    return (
        <Container>
            <Button onClick={button1Clicked}>Play</Button>
            {users.map((user, index) => (
                <Card key={index} user={user} />
            ))}
        </Container>
    );
}

export default Home;
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    margin-right: 10%;
    margin-bottom: 100px;
`;
const Button = styled.div`
    margin-left: 5px;
    height: 40px;
    width: 100px;
    background-color: pink;
    color: red;
    font-size: larger;
    position: fixed;
    z-index: 10;
    top: 0px;
`;
