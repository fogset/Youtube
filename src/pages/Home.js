import styled from "styled-components";
import Card from "../components/Card/Card";
import data from "./data.json";
import React, { Fragment, useState, useEffect } from "react";

function Home({ users }) {
    return (
        <Container>
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
    margin-bottom: 100px;
`;
