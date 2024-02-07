import styled from "styled-components";
import Card from "../components/Card/Card";
import data from "./data.json";
import React, { Fragment, useState, useEffect } from "react";
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
function Home({ users }) {
    const [userIndex, setUserIndex] = useState(null);
    return (
        <Container>
            {users.map((user, index) => (
                <Card
                    userIndex={index}
                    onClick={() => setUserIndex(index)}
                    id={user.id}
                    title={user.title}
                    username={user.username}
                    view={user.view}
                    day={user.day}
                    image={user.image}
                    video={user.video}
                />
            ))}
            <p>Clicked element's key is {userIndex}</p>
        </Container>
    );
}

export default Home;
