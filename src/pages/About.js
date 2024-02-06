import React from "react";
import styled from "styled-components";
import data from "./data.json";

function About() {
    return (
        <Container>
            {data.map((user) => (
                <div key={user.id}>
                    <h2>{user.title}</h2>
                    <p>{user.body}</p>
                </div>
            ))}
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
