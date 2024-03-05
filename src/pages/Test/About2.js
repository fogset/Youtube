import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { testRecoil } from "../../state";

function About2() {
    const [test, setTest] = useRecoilState(testRecoil);
    function button1Clicked() {
        setTest(test - 1);
    }
    useEffect(() => {
        alert("test");
    }, [test]);
    return (
        <Container>
            About 2<Text onClick={button1Clicked}>Test -1 is {test}</Text>
        </Container>
    );
}

export default About2;
const Text = styled.div`
    font-size: larger;
`;
const Container = styled.div`
    position: absolute;
    top: 100px;
    left: 500px;
    z-index: 20;
`;
