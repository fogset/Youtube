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
    function Enter() {
        setPlay(true);
    }
    function Out() {
        setPlay(false);
    }
    return (
        <Container>
            <Button
                onClick={button1Clicked}
                onMouseEnter={Enter}
                onMouseOut={Out}
            >
                Play{play}
            </Button>
            {users.map((user, index) => (
                <Card key={index} user={user} play={play} />
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
    margin-bottom: 100px;
`;
const Button = styled.div`
    margin-left: 5px;
    height: 60px;
    width: 100px;
    background-color: pink;
    color: red;
    font-size: larger;
    position: fixed;
    z-index: 10;
    top: 0px;
`;
