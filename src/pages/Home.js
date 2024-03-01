import styled from "styled-components";
import Card from "../components/Card/Card";
import data from "./data.json";
import React, { Fragment, useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/Sidebar";

function Home({ currentPage }) {
    const [play, setPlay] = useState(false);
    function button1Clicked() {
        setPlay(!play);
        alert(play);
    }

    return (
        <Container>
            <Sidebar />
            <Video>
                {currentPage.map((user, index) => (
                    <Card key={index} user={user} />
                ))}
            </Video>
        </Container>
    );
}
// <Button onClick={button1Clicked}>Play</Button>;
export default Home;
const Container = styled.div``;
const Video = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* overflow-x: hidden;
    overflow-y: auto; */
    height: 100%;
    width: 90%;
    top: 10%;
    left: 10%;
    margin-right: 10%;
    margin-bottom: 100px;
    position: absolute;
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
