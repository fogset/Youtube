import styled from "styled-components";

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { recoilUserIndex } from "../state";

function About() {
    const [key, setKey] = useState(null);
    const cities = ["London", "Paris", "Rome"];
    const [userIndex, setUserIndex] = useRecoilState(recoilUserIndex);
    setUserIndex(12341234);

    return (
        <Container>
            {cities.map((city, index) => (
                <span key={index} onClick={() => setKey(index)}>
                    {city}
                </span>
            ))}
            <p>Clicked element's key is {userIndex}</p>
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
