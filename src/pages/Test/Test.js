import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { testRecoil } from "../../state";
import About from "./About";
import About2 from "./About2";

function Test() {
    function button1Clicked() {}
    const [test, setTest] = useRecoilState(testRecoil);
    return (
        <Container>
            <Text onClick={button1Clicked}>Test page </Text>
        </Container>
    );
}

export default Test;
const Text = styled.div`
    margin-bottom: 100px;
    font-size: larger;
`;
const Container = styled.div`
    color: black;
    background-color: white;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    width: 100%;
    z-index: 20;
    position: fixed;
`;
